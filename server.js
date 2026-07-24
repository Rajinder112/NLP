const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Support larger base64 file uploads

// Disable caching for API responses
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// Ensure uploads folder exists
const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const crypto = require('crypto');

// Encrypted SHA-256 Passwords Hash Store
// Hash 1: #@!Raji#@!1 -> 1ae3a8af3e92dcf702d9a2f379f211e5c398181a833bf9bcd08144354a620562
// Hash 2: Rohit@1234  -> 00a041fcca586c4bc4f6fdeef85bc2b610f145b557d46956b24193557bae1369
const ALLOWED_PASSWORD_HASHES = [
  '1ae3a8af3e92dcf702d9a2f379f211e5c398181a833bf9bcd08144354a620562',
  '00a041fcca586c4bc4f6fdeef85bc2b610f145b557d46956b24193557bae1369'
];
const JWT_SECRET = 'nlp_secret_key_12345'; // Static signing secret

function generateToken() {
  const expiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  const payload = JSON.stringify({ expiry });
  const signature = crypto.createHmac('sha256', JWT_SECRET).update(payload).digest('hex');
  return Buffer.from(JSON.stringify({ payload, signature })).toString('base64');
}

function verifyToken(token) {
  try {
    const raw = JSON.parse(Buffer.from(token, 'base64').toString('utf8'));
    const expectedSignature = crypto.createHmac('sha256', JWT_SECRET).update(raw.payload).digest('hex');
    if (raw.signature !== expectedSignature) return false;
    
    const parsedPayload = JSON.parse(raw.payload);
    if (Date.now() > parsedPayload.expiry) return false;
    return true;
  } catch (e) {
    return false;
  }
}

// Authentication Middleware
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    if (verifyToken(token)) {
      return next();
    }
  }
  return res.status(401).json({ error: 'Unauthorized. Admin session invalid or expired.' });
};

// --- AUTH API ---
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required.' });
  }

  const inputHash = crypto.createHash('sha256').update(password.trim()).digest('hex');
  if (ALLOWED_PASSWORD_HASHES.includes(inputHash)) {
    const token = generateToken();
    return res.json({ token });
  }
  return res.status(400).json({ error: 'Incorrect administrator password.' });
});

app.post('/api/auth/logout', (req, res) => {
  res.json({ success: true });
});

// --- SETTINGS API ---
app.get('/api/settings', async (req, res) => {
  res.json(await db.getSettings());
});

app.post('/api/settings', authenticateAdmin, async (req, res) => {
  try {
    await db.saveSettings(req.body);
    res.json({ success: true, settings: await db.getSettings() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- SYSTEM STORAGE SPACE API ---
app.get('/api/system/space', async (req, res) => {
  const getDirSize = (dirPath) => {
    let size = 0;
    if (!fs.existsSync(dirPath)) return 0;
    try {
      const files = fs.readdirSync(dirPath);
      for (let i = 0; i < files.length; i++) {
        const filePath = path.join(dirPath, files[i]);
        const stat = fs.statSync(filePath);
        if (stat.isFile()) {
          size += stat.size;
        } else if (stat.isDirectory()) {
          size += getDirSize(filePath);
        }
      }
    } catch (e) {}
    return size;
  };

  try {
    const uploadsSize = getDirSize(UPLOADS_DIR);
    const assetsSize = getDirSize(path.join(__dirname, 'public', 'assets'));
    const dataSize = getDirSize(path.join(__dirname, 'data'));

    let dbBytes = 0;
    try {
      const collections = ['gallery', 'leaders', 'committee', 'resources', 'attendance', 'overview', 'announcements', 'event_days'];
      for (const c of collections) {
        const items = await db.getCollection(c);
        dbBytes += Buffer.from(JSON.stringify(items)).length;
      }
      const settings = await db.getSettings();
      dbBytes += Buffer.from(JSON.stringify(settings)).length;
    } catch (e) {
      console.warn('Error computing database items size:', e.message);
    }

    const totalUsedBytes = uploadsSize + assetsSize + dataSize + dbBytes;
    const limitBytes = 250 * 1024 * 1024; // 250 MB
    res.json({
      usedBytes: totalUsedBytes,
      usedMb: parseFloat((totalUsedBytes / (1024 * 1024)).toFixed(2)),
      limitMb: 250,
      percentage: parseFloat(((totalUsedBytes / limitBytes) * 100).toFixed(1))
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- ATTENDANCE API ---
app.get('/api/attendance', async (req, res) => {
  // Public or Admin can view depending on requirements, but let's make it open or filterable
  res.json(await db.getAttendance());
});

app.post('/api/attendance', async (req, res) => {
  try {
    const record = await db.addAttendance(req.body);
    res.status(201).json({ success: true, record });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/attendance/:id', authenticateAdmin, async (req, res) => {
  try {
    const updated = await db.updateAttendance(req.params.id, req.body);
    res.json({ success: true, record: updated });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.delete('/api/attendance/:id', authenticateAdmin, async (req, res) => {
  try {
    await db.deleteAttendance(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// --- GENERAL COLLECTIONS CRUD ---
const setupCollectionRoutes = (name) => {
  app.get(`/api/${name}`, async (req, res) => {
    res.json(await db.getCollection(name));
  });

  app.post(`/api/${name}`, authenticateAdmin, async (req, res) => {
    try {
      const item = await db.addItem(name, req.body);
      res.status(201).json({ success: true, item });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.put(`/api/${name}/:id`, authenticateAdmin, async (req, res) => {
    try {
      const item = await db.updateItem(name, req.params.id, req.body);
      res.json({ success: true, item });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  });

  app.delete(`/api/${name}/:id`, authenticateAdmin, async (req, res) => {
    try {
      await db.deleteItem(name, req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  });

  app.put(`/api/${name}/reorder`, authenticateAdmin, async (req, res) => {
    try {
      const { items } = req.body;
      if (Array.isArray(items)) {
        await db.saveCollection(name, items);
        return res.json({ success: true, count: items.length });
      }
      res.status(400).json({ error: 'Items array is required.' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

setupCollectionRoutes('schedule');
setupCollectionRoutes('announcements');
setupCollectionRoutes('leaders');
setupCollectionRoutes('committee');
setupCollectionRoutes('resources');
setupCollectionRoutes('feedback');
setupCollectionRoutes('overview');
setupCollectionRoutes('gallery');
setupCollectionRoutes('event_days');


// --- FILE UPLOAD API (Base64 wrapper to avoid multer complexity) ---
app.post('/api/upload', authenticateAdmin, (req, res) => {
  const { fileName, fileData } = req.body;
  if (!fileName || !fileData) {
    return res.status(400).json({ error: 'Filename and base64 fileData are required.' });
  }

  try {
    // Write locally as cache fallback
    try {
      const matches = fileData.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        const buffer = Buffer.from(matches[2], 'base64');
        const safeName = Date.now() + '_' + path.basename(fileName).replace(/[^a-zA-Z0-9.-]/g, '_');
        const destPath = path.join(UPLOADS_DIR, safeName);
        fs.writeFileSync(destPath, buffer);
      }
    } catch (e) {
      console.warn('Failed to cache file on disk:', e.message);
    }

    // Return the base64 data URL directly so it gets saved inside the Postgres SQL tables
    res.json({ success: true, url: fileData });
  } catch (err) {
    console.error('Upload error', err);
    res.status(500).json({ error: 'File upload failed: ' + err.message });
  }
});

// Fallback to serving SPA index.html for unknown routes (client routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`Nursing Leadership Program (NLP) Server`);
  console.log(`Running on http://localhost:${PORT}`);
  console.log(`========================================`);
});

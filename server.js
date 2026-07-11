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
app.use(express.static(path.join(__dirname, 'public')));

// Ensure uploads folder exists
const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Simple Token-based Auth Mock
const ADMIN_PASSWORD = '#@!Raji#@!1'; // Default Admin Password
const sessions = new Set(); // Store active session tokens

// Authentication Middleware
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    if (sessions.has(token)) {
      return next();
    }
  }
  return res.status(401).json({ error: 'Unauthorized. Admin session invalid or expired.' });
};

// --- AUTH API ---
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    const token = 'token_' + Math.random().toString(36).substr(2) + '_' + Date.now();
    sessions.add(token);
    return res.json({ token });
  }
  return res.status(400).json({ error: 'Incorrect administrator password.' });
});

app.post('/api/auth/logout', (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    sessions.delete(token);
  }
  res.json({ success: true });
});

// --- SETTINGS API ---
app.get('/api/settings', (req, res) => {
  res.json(db.getSettings());
});

app.post('/api/settings', authenticateAdmin, (req, res) => {
  try {
    db.saveSettings(req.body);
    res.json({ success: true, settings: db.getSettings() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- ATTENDANCE API ---
app.get('/api/attendance', (req, res) => {
  // Public or Admin can view depending on requirements, but let's make it open or filterable
  res.json(db.getAttendance());
});

app.post('/api/attendance', (req, res) => {
  try {
    const record = db.addAttendance(req.body);
    res.status(201).json({ success: true, record });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/attendance/:id', authenticateAdmin, (req, res) => {
  try {
    const updated = db.updateAttendance(req.params.id, req.body);
    res.json({ success: true, record: updated });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.delete('/api/attendance/:id', authenticateAdmin, (req, res) => {
  try {
    db.deleteAttendance(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// --- GENERAL COLLECTIONS CRUD ---
const setupCollectionRoutes = (name) => {
  app.get(`/api/${name}`, (req, res) => {
    res.json(db.getCollection(name));
  });

  app.post(`/api/${name}`, authenticateAdmin, (req, res) => {
    try {
      const item = db.addItem(name, req.body);
      res.status(201).json({ success: true, item });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.put(`/api/${name}/:id`, authenticateAdmin, (req, res) => {
    try {
      const item = db.updateItem(name, req.params.id, req.body);
      res.json({ success: true, item });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  });

  app.delete(`/api/${name}/:id`, authenticateAdmin, (req, res) => {
    try {
      db.deleteItem(name, req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(404).json({ error: err.message });
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

// --- FILE UPLOAD API (Base64 wrapper to avoid multer complexity) ---
app.post('/api/upload', authenticateAdmin, (req, res) => {
  const { fileName, fileData } = req.body;
  if (!fileName || !fileData) {
    return res.status(400).json({ error: 'Filename and base64 fileData are required.' });
  }

  try {
    // Extract base64 data format e.g. "data:image/png;base64,iVBORw0KG..."
    const matches = fileData.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: 'Invalid base64 format.' });
    }

    const buffer = Buffer.from(matches[2], 'base64');
    
    // Clean filename to prevent path traversal
    const safeName = Date.now() + '_' + path.basename(fileName).replace(/[^a-zA-Z0-9.-]/g, '_');
    const destPath = path.join(UPLOADS_DIR, safeName);
    
    fs.writeFileSync(destPath, buffer);
    const fileUrl = `/uploads/${safeName}`;
    res.json({ success: true, url: fileUrl });
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

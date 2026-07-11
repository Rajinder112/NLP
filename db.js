const fs = require('fs');
const path = require('path');

const DB_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DB_DIR, 'db.json');

// Ensure database directory and file exist
function initDb() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    const initialSchema = {
      settings: {
        eventState: 'Upcoming', // 'Upcoming', 'Live', 'Completed'
        eventDate: '2026-07-24',
        eventVenue: 'Grand Executive Healthcare Hall, Main Block',
        lastUpdatedPdf: new Date().toISOString(),
        pdfVersion: '1.0'
      },
      attendance: [],
      schedule: [],
      announcements: [],
      leaders: [],
      committee: [],
      gallery: [],
      resources: [],
      feedback: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialSchema, null, 2), 'utf8');
  }
}

// Atomic read
function readData() {
  initDb();
  try {
    const content = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading DB file, resetting to empty schema', err);
    return {};
  }
}

// Atomic write to prevent file corruption
function writeData(data) {
  initDb();
  const tempFile = `${DB_FILE}.tmp`;
  fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tempFile, DB_FILE);
}

// Collection helpers
const db = {
  // Get all data
  getAll: () => readData(),

  // Get specific collection
  getCollection: (name) => {
    const data = readData();
    return data[name] || [];
  },

  // Save specific collection
  saveCollection: (name, items) => {
    const data = readData();
    data[name] = items;
    writeData(data);
  },

  // Get settings
  getSettings: () => {
    const data = readData();
    return data.settings || {};
  },

  // Save settings
  saveSettings: (settings) => {
    const data = readData();
    data.settings = { ...data.settings, ...settings };
    writeData(data);
  },

  // Attendance CRUD
  getAttendance: () => db.getCollection('attendance'),
  
  addAttendance: (record) => {
    const attendanceList = db.getCollection('attendance');
    
    // Check duplication: Employee ID + Attendance Date + Session
    const duplicate = attendanceList.find(r => 
      r.employeeId.trim().toLowerCase() === record.employeeId.trim().toLowerCase() &&
      r.attendanceDate === record.attendanceDate &&
      r.session.trim().toLowerCase() === record.session.trim().toLowerCase()
    );

    if (duplicate) {
      throw new Error(`Attendance already marked for Employee ID ${record.employeeId} under session '${record.session}' on this day.`);
    }

    const newRecord = {
      id: 'att_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      submissionTimestamp: new Date().toISOString(),
      checkInTime: new Date().toLocaleTimeString('en-US', { hour12: false }),
      status: 'Checked In',
      ...record
    };

    attendanceList.push(newRecord);
    db.saveCollection('attendance', attendanceList);
    return newRecord;
  },

  updateAttendance: (id, updatedFields) => {
    const attendanceList = db.getCollection('attendance');
    const index = attendanceList.findIndex(r => r.id === id);
    if (index === -1) throw new Error('Attendance record not found.');
    
    attendanceList[index] = { ...attendanceList[index], ...updatedFields };
    db.saveCollection('attendance', attendanceList);
    return attendanceList[index];
  },

  deleteAttendance: (id) => {
    const attendanceList = db.getCollection('attendance');
    const filtered = attendanceList.filter(r => r.id !== id);
    if (filtered.length === attendanceList.length) throw new Error('Attendance record not found.');
    db.saveCollection('attendance', filtered);
  },

  // General items CRUD helper
  addItem: (collectionName, item) => {
    const list = db.getCollection(collectionName);
    const newItem = {
      id: collectionName.substr(0, 3) + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      ...item
    };
    list.push(newItem);
    db.saveCollection(collectionName, list);
    return newItem;
  },

  updateItem: (collectionName, id, updatedFields) => {
    const list = db.getCollection(collectionName);
    const index = list.findIndex(item => item.id === id);
    if (index === -1) throw new Error(`Item not found in ${collectionName}`);
    list[index] = { ...list[index], ...updatedFields };
    db.saveCollection(collectionName, list);
    return list[index];
  },

  deleteItem: (collectionName, id) => {
    const list = db.getCollection(collectionName);
    const filtered = list.filter(item => item.id !== id);
    if (filtered.length === list.length) throw new Error(`Item not found in ${collectionName}`);
    db.saveCollection(collectionName, filtered);
  }
};

module.exports = db;

// LocalStorage Fallback helpers for Gallery
const LOCAL_GALLERY_KEY = 'nlp_local_gallery';

const SEED_EVENT_DAYS = [
  { id: 'day_1', dayNumber: 1, date: '2026-07-10' },
  { id: 'day_2', dayNumber: 2, date: '2026-07-11' },
  { id: 'day_3', dayNumber: 3, date: '2026-07-17' },
  { id: 'day_4', dayNumber: 4, date: '2026-07-26' },
  { id: 'day_5', dayNumber: 5, date: '2026-07-26' }
];

const SEED_SCHEDULE = [
  // Day 1 (5 items)
  {
    id: 'sch_day1_1',
    day: 'Day 1',
    time: '03:00 PM - 03:10 PM',
    title: 'Activity',
    speaker: 'Mr. Rohit Singh, Dr. Pallavi',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'Welcome and Warm up'
  },
  {
    id: 'sch_day1_2',
    day: 'Day 1',
    time: '03:10 PM - 03:30 PM',
    title: 'Communication',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi',
    type: 'Workshop',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Scripting – A tool for communication • Dept. vision mission/Conflict Management • Assertive communication • Deliver complex messages in a simple-to-understand way • Listen with suspended judgment & active intent'
  },
  {
    id: 'sch_day1_3',
    day: 'Day 1',
    time: '03:30 PM - 04:00 PM',
    title: 'Presentation Skill',
    speaker: 'Ms. Precila Fernandes',
    type: 'Workshop',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Tips Power point presentation'
  },
  {
    id: 'sch_day1_4',
    day: 'Day 1',
    time: '04:00 PM - 05:30 PM',
    title: 'Developing the Individuals',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi',
    type: 'Lecture',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• How to groom a Nurse to the next level • What motivates individual members of the team • Coaching style based on needs of each individual • Performance feedback • Leverage strengths of individual team members • Back to basics (Customer Feedback Presentation) • Punctuality'
  },
  {
    id: 'sch_day1_5',
    day: 'Day 1',
    time: '05:30 PM - 06:00 PM',
    title: 'Discussion on Assignment & Agenda for next day',
    speaker: 'Team',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'Wrap up'
  },

  // Day 2 (4 items)
  {
    id: 'sch_day2_1',
    day: 'Day 2',
    time: '03:00 PM - 03:15 PM',
    title: 'Recap of the Previous day',
    speaker: 'Team',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'Candidates'
  },
  {
    id: 'sch_day2_2',
    day: 'Day 2',
    time: '03:15 PM - 04:15 PM',
    title: 'Managing Unit performance',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi',
    type: 'Lecture',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Time management • Take joint ownership & accountability • Develop and pursue goals that cross departmental lines daily, Monthly & Yearly basis • Grooming • Managing change in the organization • Service excellence and communication'
  },
  {
    id: 'sch_day2_3',
    day: 'Day 2',
    time: '04:15 PM - 05:15 PM',
    title: 'Foundational Leadership',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi',
    type: 'Lecture',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• How leaders grow • Leadership Competency Model, Leadership styles • Transformational Leadership • Leadership qualities • Distinction between Leadership and Management • Self Assessment'
  },
  {
    id: 'sch_day2_4',
    day: 'Day 2',
    time: '05:15 PM - 06:00 PM',
    title: 'Discussion on Assignment',
    speaker: 'Team',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'Group Making'
  },

  // Day 3 (6 items)
  {
    id: 'sch_day3_1',
    day: 'Day 3',
    time: '03:00 PM - 03:15 PM',
    title: 'Recap of the Previous day',
    speaker: 'Team',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'Candidates'
  },
  {
    id: 'sch_day3_2',
    day: 'Day 3',
    time: '03:15 PM - 04:15 PM',
    title: 'How to prepare power point slide',
    speaker: 'Ms. Precila Fernandes',
    type: 'Workshop',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'Planning the Presentation • Designing Effective Slides • Using Visuals & Charts • Presentation Tips • Common Mistakes to Avoid • Conclusion'
  },
  {
    id: 'sch_day3_3',
    day: 'Day 3',
    time: '04:15 PM - 05:00 PM',
    title: 'RCA',
    speaker: 'Mr. Rohit Singh, Dr. Pallavi',
    type: 'Lecture',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'Fish bone analysis'
  },
  {
    id: 'sch_day3_4',
    day: 'Day 3',
    time: '05:00 PM - 06:00 PM',
    title: 'Coaching',
    speaker: 'Mr. Rohit Singh, Dr. Pallavi',
    type: 'Lecture',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'Coaching & Mentoring Principles'
  },
  {
    id: 'sch_day3_5',
    day: 'Day 3',
    time: '06:00 PM - 06:30 PM',
    title: 'Discussion on Assignment',
    speaker: 'Team',
    type: 'Workshop',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'How to Make an Assignment: • Choose and understand the topic. • Collect information from reliable sources. • Organize the content with an introduction, main body, and conclusion. • Use clear language, proper formatting, and cite references if required.'
  },
  {
    id: 'sch_day3_6',
    day: 'Day 3',
    time: '06:30 PM',
    title: 'Wrap UP',
    speaker: 'Team',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: 'Wrap UP & Day 3 Conclusion'
  },

  // Day 4 (14 items)
  { id: 'sch_day4_1', day: 'Day 4', time: '08:30 AM - 09:00 AM', title: 'Registration', speaker: 'Organising Committee', type: 'Activity', venue: 'Main Auditorium / 10th Floor ITC', status: 'Upcoming', details: 'Participant Registration' },
  { id: 'sch_day4_2', day: 'Day 4', time: '09:00 AM - 09:30 AM', title: 'Welcome Address & Lamp Lighting', speaker: 'Management', type: 'Keynote', venue: 'Main Auditorium', status: 'Upcoming', details: 'Medanta Leadership' },
  { id: 'sch_day4_3', day: 'Day 4', time: '09:30 AM - 09:45 AM', title: 'Message to the Group & Clinical Governance', speaker: 'Vice President – Operations', type: 'Keynote', venue: 'Main Auditorium', status: 'Upcoming', details: '• Organization\'s Expectations' },
  { id: 'sch_day4_4', day: 'Day 4', time: '09:45 AM - 10:00 AM', title: 'Programme Introduction', speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh', type: 'Workshop', venue: 'Main Auditorium', status: 'Upcoming', details: '• Programme Expectations • Curriculum Overview • Learning Objectives' },
  { id: 'sch_day4_5', day: 'Day 4', time: '10:00 AM - 10:15 AM', title: 'Tea Break', speaker: 'Organising Committee', type: 'Break', venue: 'Dining Area', status: 'Upcoming', details: 'Morning Refreshment Break' },
  { id: 'sch_day4_6', day: 'Day 4', time: '10:15 AM - 12:00 PM', title: 'The Role of Middle Management', speaker: 'External Speaker', type: 'Lecture', venue: 'Main Auditorium', status: 'Upcoming', details: '• Middle Management Skills • Managing Upward and Downward • Bridging Leadership and Teams • Effective Leadership for Middle Managers • Aligning Top Management Vision with Team Execution • Achieving Middle Management Excellence • Managing Leadership Expectations and Team Performance' },
  { id: 'sch_day4_7', day: 'Day 4', time: '12:00 PM - 01:00 PM', title: 'Team Building Activity', speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh', type: 'Activity', venue: 'Main Auditorium / Activity Hall', status: 'Upcoming', details: '• Building an Effective Team • Role of the Nurse Manager • Staffing in Nursing Units • Managing Team Members\' Performance • Interviewing Skills' },
  { id: 'sch_day4_8', day: 'Day 4', time: '01:00 PM - 02:00 PM', title: 'Lunch Break', speaker: 'Organising Committee', type: 'Break', venue: 'Dining Area', status: 'Upcoming', details: 'Networking Lunch' },
  { id: 'sch_day4_9', day: 'Day 4', time: '02:00 PM - 02:30 PM', title: 'SWOT Analysis', speaker: 'Training Team', type: 'Workshop', venue: 'Main Auditorium', status: 'Upcoming', details: '• Interactive Warm-up Activity • Individual & Team SWOT Exercise' },
  { id: 'sch_day4_10', day: 'Day 4', time: '02:30 PM - 03:30 PM', title: 'Nursing Leadership Skills', speaker: 'Ms. Precila Fernandes', type: 'Lecture', venue: 'Main Auditorium', status: 'Upcoming', details: '• Personal Branding for Nurse Leaders • Leadership Marketing & Professional Image • Quality Improvement & Performance Excellence • Practical Implementation of Leadership Skills' },
  { id: 'sch_day4_11', day: 'Day 4', time: '03:30 PM - 04:00 PM', title: 'Team Building', speaker: 'Training Team', type: 'Activity', venue: 'Activity Hall', status: 'Upcoming', details: '• Interactive Team-Building Activity' },
  { id: 'sch_day4_12', day: 'Day 4', time: '04:00 PM - 04:15 PM', title: 'Tea Break', speaker: 'Organising Committee', type: 'Break', venue: 'Dining Area', status: 'Upcoming', details: 'Afternoon Refreshment Break' },
  { id: 'sch_day4_13', day: 'Day 4', time: '04:15 PM - 05:00 PM', title: 'Group Assignment Presentation', speaker: 'Training Team', type: 'Workshop', venue: 'Main Auditorium', status: 'Upcoming', details: '• Group Presentations • Peer Learning & Feedback' },
  { id: 'sch_day4_14', day: 'Day 4', time: '05:00 PM - 06:00 PM', title: 'Discussion & Conclusion', speaker: 'Ms. Precila Fernandes', type: 'Keynote', venue: 'Main Auditorium', status: 'Upcoming', details: '• Open Discussion • Key Takeaways • Action Plan • Closing Remarks & Vote of Thanks' },

  // Day 5 (14 items)
  { id: 'sch_day5_1', day: 'Day 5', time: '08:30 AM - 09:00 AM', title: 'Registration', speaker: 'Organising Committee', type: 'Activity', venue: 'Main Auditorium / 10th Floor ITC', status: 'Upcoming', details: 'Participant Registration' },
  { id: 'sch_day5_2', day: 'Day 5', time: '09:00 AM - 09:30 AM', title: 'Welcome Address & Lamp Lighting', speaker: 'Management', type: 'Keynote', venue: 'Main Auditorium', status: 'Upcoming', details: 'Medanta Leadership' },
  { id: 'sch_day5_3', day: 'Day 5', time: '09:30 AM - 09:45 AM', title: 'Message to the Group & Clinical Governance', speaker: 'Vice President – Operations', type: 'Keynote', venue: 'Main Auditorium', status: 'Upcoming', details: '• Organization\'s Expectations' },
  { id: 'sch_day5_4', day: 'Day 5', time: '09:45 AM - 10:00 AM', title: 'Programme Introduction', speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh', type: 'Workshop', venue: 'Main Auditorium', status: 'Upcoming', details: '• Programme Expectations • Curriculum Overview • Learning Objectives' },
  { id: 'sch_day5_5', day: 'Day 5', time: '10:00 AM - 10:15 AM', title: 'Tea Break', speaker: 'Organising Committee', type: 'Break', venue: 'Dining Area', status: 'Upcoming', details: 'Morning Refreshment Break' },
  { id: 'sch_day5_6', day: 'Day 5', time: '10:15 AM - 12:00 PM', title: 'The Role of Middle Management', speaker: 'External Speaker', type: 'Lecture', venue: 'Main Auditorium', status: 'Upcoming', details: '• Middle Management Skills • Managing Upward and Downward • Bridging Leadership and Teams • Effective Leadership for Middle Managers • Aligning Top Management Vision with Team Execution • Achieving Middle Management Excellence • Managing Leadership Expectations and Team Performance' },
  { id: 'sch_day5_7', day: 'Day 5', time: '12:00 PM - 01:00 PM', title: 'Team Building Activity', speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh', type: 'Activity', venue: 'Main Auditorium / Activity Hall', status: 'Upcoming', details: '• Building an Effective Team • Role of the Nurse Manager • Staffing in Nursing Units • Managing Team Members\' Performance • Interviewing Skills' },
  { id: 'sch_day5_8', day: 'Day 5', time: '01:00 PM - 02:00 PM', title: 'Lunch Break', speaker: 'Organising Committee', type: 'Break', venue: 'Dining Area', status: 'Upcoming', details: 'Networking Lunch' },
  { id: 'sch_day5_9', day: 'Day 5', time: '02:00 PM - 02:30 PM', title: 'SWOT Analysis', speaker: 'Training Team', type: 'Workshop', venue: 'Main Auditorium', status: 'Upcoming', details: '• Interactive Warm-up Activity • Individual & Team SWOT Exercise' },
  { id: 'sch_day5_10', day: 'Day 5', time: '02:30 PM - 03:30 PM', title: 'Nursing Leadership Skills', speaker: 'Ms. Precila Fernandes', type: 'Lecture', venue: 'Main Auditorium', status: 'Upcoming', details: '• Personal Branding for Nurse Leaders • Leadership Marketing & Professional Image • Quality Improvement & Performance Excellence • Practical Implementation of Leadership Skills' },
  { id: 'sch_day5_11', day: 'Day 5', time: '03:30 PM - 04:00 PM', title: 'Team Building', speaker: 'Training Team', type: 'Activity', venue: 'Activity Hall', status: 'Upcoming', details: '• Interactive Team-Building Activity' },
  { id: 'sch_day5_12', day: 'Day 5', time: '04:00 PM - 04:15 PM', title: 'Tea Break', speaker: 'Organising Committee', type: 'Break', venue: 'Dining Area', status: 'Upcoming', details: 'Afternoon Refreshment Break' },
  { id: 'sch_day5_13', day: 'Day 5', time: '04:15 PM - 05:00 PM', title: 'Group Assignment Presentation', speaker: 'Training Team', type: 'Workshop', venue: 'Main Auditorium', status: 'Upcoming', details: '• Group Presentations • Peer Learning & Feedback' },
  { id: 'sch_day5_14', day: 'Day 5', time: '05:00 PM - 06:00 PM', title: 'Discussion & Conclusion', speaker: 'Ms. Precila Fernandes', type: 'Keynote', venue: 'Main Auditorium', status: 'Upcoming', details: '• Open Discussion • Key Takeaways • Action Plan • Closing Remarks & Vote of Thanks' }
];

const GALLERY_SEED_DATA = [
  {
    id: 'gal_1',
    category: 'Opening Ceremony',
    title: 'Lighting of the Lamp',
    description: 'The traditional inauguration of Batch 1 of the Nursing Leadership Program.',
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal_2',
    category: 'Leadership Sessions',
    title: 'Dr. Evelyn Carter Keynote',
    description: 'Opening address detailing the executive mindset required in healthcare management.',
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal_3',
    category: 'Group Activities',
    title: 'Synergistic Unit Exercise',
    description: 'Participants collaborating on clinical resource management simulations.',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal_4',
    category: 'Group Activities',
    title: 'Problem-Solving Workshops',
    description: 'Interactive problem-solving session focusing on ward scheduling optimization.',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600'
  }
];

function getLocalGallery() {
  const local = localStorage.getItem(LOCAL_GALLERY_KEY);
  if (!local) {
    localStorage.setItem(LOCAL_GALLERY_KEY, JSON.stringify(GALLERY_SEED_DATA));
    return GALLERY_SEED_DATA;
  }
  try {
    return JSON.parse(local);
  } catch (e) {
    return GALLERY_SEED_DATA;
  }
}

function saveLocalGallery(data) {
  localStorage.setItem(LOCAL_GALLERY_KEY, JSON.stringify(data));
}

function isGalleryLocalOnly() {
  return localStorage.getItem('nlp_gallery_local_only') === 'true';
}

function setGalleryLocalOnly(val) {
  localStorage.setItem('nlp_gallery_local_only', val ? 'true' : 'false');
}

// SUB-TAB: Event Gallery Manager CRUD
async function fetchAdminGallery() {
  const tableBody = document.querySelector('#admin-gallery-table tbody');
  const noDataEl = document.getElementById('gallery-table-no-data');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  try {
    if (isGalleryLocalOnly()) {
      throw new Error('Gallery local-only mode active');
    }
    const res = await fetch(`${API_BASE}/gallery`);
    const text = await res.text();
    if (text.trim().startsWith('<!DOCTYPE')) {
      throw new Error('Endpoint returned HTML instead of JSON');
    }
    appState.gallery = JSON.parse(text);
  } catch (err) {
    console.warn('Loading gallery from localStorage:', err.message);
    appState.gallery = getLocalGallery();
  }

  if (appState.gallery.length === 0) {
    noDataEl.classList.remove('hidden');
    return;
  }
  
  noDataEl.classList.add('hidden');
  
  appState.gallery.forEach(item => {
    const row = document.createElement('tr');
    const displayCat = (item.category && item.category !== 'Blank' && item.category !== 'None') ? item.category : 'General / Pre-Event';
    row.innerHTML = `
      <td style="width: 80px;"><img src="${getPhotoUrl(item.url) || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=80'}" style="width: 60px; height: 40px; object-fit: cover; border-radius: var(--radius-sm);"></td>
      <td style="font-weight: 600; color: var(--primary);">${item.title || 'Untitled Photograph'}</td>
      <td><span class="badge badge-gold">${displayCat}</span></td>
      <td style="font-size: 0.85rem; color: var(--text-muted);">${item.description || '-'}</td>
      <td class="table-actions" style="text-align: right;">
        <button class="tbl-btn tbl-btn-edit" onclick="editGalleryItem('${item.id}')" title="Edit Item"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" onclick="deleteGalleryItem('${item.id}')" title="Delete Item"><i data-lucide="trash-2"></i></button>
      </td>
    `;
    tableBody.appendChild(row);
  });
  
  lucide.createIcons();
}

function adminAddGalleryItem() {
  document.getElementById('admin-gallery-form').reset();
  document.getElementById('gallery-item-id').value = '';
  document.getElementById('gallery-title').value = '';
  document.getElementById('gallery-category').value = 'General';
  document.getElementById('gallery-description').value = '';
  const fnEl = document.getElementById('gallery-file-name');
  if (fnEl) fnEl.textContent = 'Or enter a web URL below:';
  document.getElementById('gallery-image-preview').innerHTML = '<span>No image selected</span>';
  document.getElementById('gallery-form-title').textContent = 'Add Gallery Item';
  document.getElementById('gallery-submit-btn').textContent = 'Save Item';
  
  openModal('admin-gallery-modal');
}

function previewGalleryUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const fnEl = document.getElementById('gallery-file-name');
    if (fnEl) fnEl.textContent = file.name;
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('gallery-image-preview').innerHTML = `<img src="${e.target.result}" style="width:100%; height:100%; object-fit:cover;">`;
    };
    reader.readAsDataURL(file);
  }
}

async function editGalleryItem(id) {
  const item = appState.gallery.find(g => g.id === id);
  if (!item) return;
  
  document.getElementById('gallery-item-id').value = item.id;
  document.getElementById('gallery-title').value = item.title || '';
  document.getElementById('gallery-category').value = item.category || 'General';
  document.getElementById('gallery-description').value = item.description || '';
  document.getElementById('gallery-url').value = item.url || '';
  const fnEl = document.getElementById('gallery-file-name');
  if (fnEl) fnEl.textContent = 'Or upload a new image file:';
  
  if (item.url) {
    document.getElementById('gallery-image-preview').innerHTML = `<img src="${getPhotoUrl(item.url)}" style="width:100%; height:100%; object-fit:cover;">`;
  } else {
    document.getElementById('gallery-image-preview').innerHTML = '<span>No image uploaded</span>';
  }
  
  document.getElementById('gallery-form-title').textContent = 'Modify Gallery Item';
  document.getElementById('gallery-submit-btn').textContent = 'Save Changes';
  
  openModal('admin-gallery-modal');
}

async function saveGalleryItem(e) {
  e.preventDefault();
  
  const id = document.getElementById('gallery-item-id').value;
  const title = document.getElementById('gallery-title').value.trim();
  const category = document.getElementById('gallery-category').value;
  const description = document.getElementById('gallery-description').value.trim();
  const fileInput = document.getElementById('gallery-file');
  let url = document.getElementById('gallery-url').value;
  
  if (fileInput.files.length > 0) {
    const uploadedUrl = await uploadFileToServer(fileInput.files[0]);
    if (uploadedUrl) url = uploadedUrl;
  }
  
  if (!url) {
    showToast('Please provide an image URL or upload an image file.', 'error');
    return;
  }
  
  const payload = { title, category, description, url };
  const isEdit = !!id;
  
  // LocalStorage Dual-Write fallback
  let localList = getLocalGallery();
  if (isEdit) {
    payload.id = id;
    const idx = localList.findIndex(g => g.id === id);
    if (idx !== -1) localList[idx] = payload;
  } else {
    payload.id = 'gal_' + Date.now();
    localList.push(payload);
  }
  saveLocalGallery(localList);
  
  try {
    const endpoint = isEdit ? `${API_BASE}/gallery/${id}` : `${API_BASE}/gallery`;
    const method = isEdit ? 'PUT' : 'POST';
    const res = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      throw new Error(`Server returned status ${res.status}`);
    }
  } catch (err) {
    console.warn('Backend API error, enabling gallery local-only mode:', err);
    setGalleryLocalOnly(true);
  }
  
  showToast(isEdit ? 'Gallery item updated successfully.' : 'Gallery item added successfully.', 'success');
  closeModal('admin-gallery-modal');
  await fetchAdminGallery();
  await refreshPublicData();
}

async function deleteGalleryItem(id) {
  const confirmDel = confirm('Are you sure you want to delete this event photograph?');
  if (!confirmDel) return;
  
  // LocalStorage Dual-Write fallback
  let localList = getLocalGallery();
  saveLocalGallery(localList.filter(g => g.id !== id));
  
  try {
    const res = await fetch(`${API_BASE}/gallery/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader()
    });
    if (!res.ok) {
      throw new Error(`Server returned status ${res.status}`);
    }
  } catch (err) {
    console.warn('Backend API error, enabling gallery local-only mode:', err);
    setGalleryLocalOnly(true);
  }
  
  showToast('Gallery photograph deleted successfully.', 'success');
  await fetchAdminGallery();
  await refreshPublicData();
}


// ==========================================================================
// NLP WEBSITE PORTAL - CLIENT APPLICATION CONTROLLER
// ==========================================================================

let API_BASE = '/api';

// Fetch dynamic API base URL from config.json
async function initConfig() {
  try {
    const res = await fetch('/config.json');
    if (res.ok) {
      const cfg = await res.json();
      if (cfg.apiBase) {
        API_BASE = cfg.apiBase;
      }
    }
  } catch (err) {
    console.log('Using default API base:', API_BASE);
  }
}

// Helper to resolve absolute URLs for uploaded images from the Render backend
function getPhotoUrl(photoPath) {
  if (!photoPath) return '';
  if (photoPath.startsWith('http://') || photoPath.startsWith('https://') || photoPath.startsWith('data:')) {
    return photoPath;
  }
  let path = photoPath;
  if (path.startsWith('/public')) {
    path = path.substring(7);
  }
  const base = API_BASE.replace('/api', '');
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}

let appState = {
  settings: {},
  attendance: [],
  schedule: [],
  announcements: [],
  leaders: [],
  committee: [],
  gallery: [],
  event_days: [],
  resources: [],
  feedback: [],
  overview: [],
  currentAdminTab: 'db-summary',
  editingItemId: null, // Track currently edited item ID
  editingProfileType: null, // Track original collection type of edited profile ('leaders' | 'committee')
  isLoggedIn: false,
  activeScheduleDay: 'Day 1'
};

// Auto-run on DOM content ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// Initialize Application
async function initApp() {
  // Purge any stale local event_days cache on load
  localStorage.removeItem('nlp_local_event_days');

  // Load configuration
  await initConfig();

  // Load initial public configurations
  await fetchSettings();
  await refreshPublicData();
  
  // Setup Router
  setupRouter();
  
  // Setup Navbar & Drawer Event Listeners
  setupNavigation();
  
  // Initialize lucide icons
  lucide.createIcons();
  
  // Pre-fill attendance form date
  const dateInput = document.getElementById('att-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
  }
  
  // Setup Mark Attendance Form
  const attForm = document.getElementById('attendance-form');
  if (attForm) {
    attForm.addEventListener('submit', handleAttendanceSubmit);
  }
  
  // Setup Gallery filters
  setupGalleryFilters();

  // Setup Admin Listeners
  setupAdminListeners();

  // Setup Global Modal Backdrop, Close Buttons & Escape Key Listeners
  const handleUniversalModalClose = (e) => {
    // 1. If backdrop overlay clicked
    if (e.target && e.target.classList && e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
    // 2. If any close button / X icon clicked across the web application
    const closeBtn = e.target ? e.target.closest('.modal-close-btn, .close-btn, .modal-close, [data-dismiss="modal"]') : null;
    if (closeBtn) {
      const modal = closeBtn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
      } else {
        closeModal();
      }
    }
  };
  document.addEventListener('click', handleUniversalModalClose);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Load active session from sessionStorage
  const token = sessionStorage.getItem('adminToken');
  if (token) {
    appState.isLoggedIn = true;
    showAdminDashboard();
  }
}

// ==========================================================================
// DATA FETCHING & SYNCHRONIZATION
// ==========================================================================
async function fetchSettings() {
  try {
    const res = await fetch(`${API_BASE}/settings?_t=${Date.now()}`, { cache: 'no-store' });
    appState.settings = await res.json();
    
    // Update Hero elements based on retrieved settings
    const displayDate = appState.settings.eventDateDisplay || formatDateString(appState.settings.eventDate);
    const heroDateEl = document.getElementById('hero-date-text');
    if (heroDateEl) heroDateEl.textContent = displayDate;
    const heroVenueEl = document.getElementById('hero-venue-text');
    if (heroVenueEl) heroVenueEl.textContent = appState.settings.eventVenue;
    
    // Update Details section elements based on retrieved settings
    const detailsDate = document.getElementById('details-date-text');
    if (detailsDate) detailsDate.textContent = displayDate;
    const detailsVenue = document.getElementById('details-venue-text');
    if (detailsVenue) detailsVenue.textContent = appState.settings.eventVenue;
    
    // Update Hero Download PDF button href if uploaded
    const heroPdfBtn = document.getElementById('hero-download-pdf-btn');
    if (heroPdfBtn && appState.settings.pdfUrl) {
      heroPdfBtn.setAttribute('href', appState.settings.pdfUrl);
    }
    
    updateEventStateWidget();
  } catch (err) {
    console.error('Error fetching settings:', err);
    showToast('Failed to load event settings.', 'error');
  }
}

async function refreshPublicData() {
  const fetchAndSet = async (endpoint, stateKey) => {
    try {
      if (endpoint === 'gallery' && isGalleryLocalOnly()) {
        throw new Error('Gallery local-only mode active');
      }
      const res = await fetch(`${API_BASE}/${endpoint}?_t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const text = await res.text();
        if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
          throw new Error(`Endpoint /${endpoint} returned HTML document instead of JSON data`);
        }
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed) && parsed.length > 0) {
          appState[stateKey] = parsed;
        } else {
          // Fallback to embedded seed if empty
          if (endpoint === 'schedule') appState.schedule = SEED_SCHEDULE;
          else if (endpoint === 'event_days') appState.event_days = SEED_EVENT_DAYS;
          else appState[stateKey] = parsed;
        }
      } else {
        console.warn(`Failed to fetch /${endpoint}: Status ${res.status}`);
        if (endpoint === 'gallery') appState.gallery = getLocalGallery();
        else if (endpoint === 'schedule') appState.schedule = SEED_SCHEDULE;
        else if (endpoint === 'event_days') appState.event_days = SEED_EVENT_DAYS;
        else appState[stateKey] = [];
      }
    } catch (err) {
      console.warn(`Fallback active for /${endpoint}:`, err.message);
      if (endpoint === 'gallery') appState.gallery = getLocalGallery();
      else if (endpoint === 'schedule') appState.schedule = SEED_SCHEDULE;
      else if (endpoint === 'event_days') appState.event_days = SEED_EVENT_DAYS;
      else appState[stateKey] = [];
    }
  };

  await Promise.all([
    fetchAndSet('schedule', 'schedule'),
    fetchAndSet('announcements', 'announcements'),
    fetchAndSet('leaders', 'leaders'),
    fetchAndSet('committee', 'committee'),
    fetchAndSet('resources', 'resources'),
    fetchAndSet('overview', 'overview'),
    fetchAndSet('gallery', 'gallery'),
    fetchAndSet('event_days', 'event_days')
  ]);

  const safeRender = (renderFn, name) => {
    try {
      renderFn();
    } catch (err) {
      console.error(`Error rendering section ${name}:`, err);
    }
  };

  safeRender(renderScheduleTimeline, 'Schedule');
  safeRender(renderAnnouncements, 'Announcements');
  safeRender(renderLeadersAndCommittee, 'Leaders');
  safeRender(renderResources, 'Resources');
  safeRender(renderOverview, 'Overview');
  safeRender(renderGalleryGrid, 'Gallery');
  safeRender(populateSessionDropdown, 'Sessions');
}

// Helper to format Date (e.g. 2026-07-24 -> July 24, 2026)
function formatDateString(dateStr) {
  if (!dateStr) return '';
  if (dateStr === '2026-07-26') return '10-11 July & 26 July 2026';
  if (dateStr === '2026-07-10') return 'July 10-11, 2026';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
}

// ==========================================================================
// SPA ROUTER
// ==========================================================================
function setupRouter() {
  const handleRouteChange = () => {
    let hash = window.location.hash || '#home';
    let viewName = hash.replace('#', '');
    
    // Switch Active View Class
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(sec => {
      sec.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`view-${viewName}`);
    if (targetSection) {
      targetSection.classList.add('active');
    } else {
      document.getElementById('view-home').classList.add('active');
      viewName = 'home';
    }
    
    // Update Navbar Link states
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-view') === viewName) {
        link.classList.add('active');
      }
    });

    // Mobile nav drawer links update
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-view') === viewName) {
        link.classList.add('active');
      }
    });
    
    // Smooth scroll top on change
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Trigger specific view setups
    if (viewName === 'admin') {
      if (appState.isLoggedIn) {
        showAdminDashboard();
      } else {
        showAdminLoginForm();
      }
    }
  };
  
  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange(); // Trigger once on load
}

// Navigation event links
function setupNavigation() {
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const trigger = document.getElementById('mobile-menu-trigger');
  const close = document.getElementById('mobile-menu-close');
  
  const toggleDrawer = () => {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
  };
  
  if (trigger) trigger.addEventListener('click', toggleDrawer);
  if (close) close.addEventListener('click', toggleDrawer);
  if (overlay) overlay.addEventListener('click', toggleDrawer);
  
  // Close drawer on link selection
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
}

// ==========================================================================
// HERO EVENT STATE CONTROLLER & COUNTDOWN TIMER
// ==========================================================================
let countdownInterval = null;

function updateEventStateWidget() {
  const container = document.getElementById('state-widget-container');
  const dot = document.getElementById('state-dot');
  const label = document.getElementById('state-label');
  const quickMarkBtn = document.getElementById('quick-mark-btn');
  
  if (!container) return;
  
  // Clear any existing countdown loops
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  
  const state = appState.settings.eventState || 'Upcoming';
  
  // Reset dot states
  const heroCard = document.querySelector('.hero-status-card');
  heroCard.className = 'hero-status-card'; // Reset classes
  
  if (state === 'Upcoming') {
    heroCard.classList.add('state-upcoming');
    dot.style.backgroundColor = 'var(--accent)';
    label.textContent = 'Upcoming Event';
    if (quickMarkBtn) quickMarkBtn.classList.add('hidden-mobile-nav'); // hide marker
    
    // Countdown Widget HTML
    container.innerHTML = `
      <p style="margin-bottom:16px; font-size:0.95rem;">Program Commences In:</p>
      <div class="countdown-grid">
        <div class="countdown-cell">
          <span class="countdown-num" id="cd-days">00</span>
          <span class="countdown-lbl">Days</span>
        </div>
        <div class="countdown-cell">
          <span class="countdown-num" id="cd-hours">00</span>
          <span class="countdown-lbl">Hrs</span>
        </div>
        <div class="countdown-cell">
          <span class="countdown-num" id="cd-minutes">00</span>
          <span class="countdown-lbl">Mins</span>
        </div>
        <div class="countdown-cell">
          <span class="countdown-num" id="cd-seconds">00</span>
          <span class="countdown-lbl">Secs</span>
        </div>
      </div>
    `;
    
    startCountdown(appState.settings.eventDate + 'T08:30:00');
    
  } else if (state === 'Live') {
    heroCard.classList.add('state-live');
    dot.style.backgroundColor = 'var(--highlight)';
    label.textContent = 'Live Event In Progress';
    
    // Show quick mark floating attendance btn
    if (quickMarkBtn) {
      quickMarkBtn.classList.remove('hidden-mobile-nav');
      quickMarkBtn.className = 'floating-mark-btn floating-mark-btn-mobile'; // Makes it float on mobile
    }
    
    // Find current live sessions
    const liveSessions = appState.schedule.filter(s => s.status === 'Live Now');
    let sessionTitleText = 'Session in progress';
    let speakerText = 'Program Faculty';
    
    if (liveSessions.length > 0) {
      sessionTitleText = liveSessions[0].title;
      speakerText = liveSessions[0].speaker;
    }
    
    container.innerHTML = `
      <div class="live-session-widget">
        <h4 class="animate-pulse" style="color:var(--highlight); margin-bottom:8px;">
          <i data-lucide="radio" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:4px;"></i> LIVE NOW
        </h4>
        <p style="font-weight:600; font-size:1.1rem; margin-bottom:4px;">${sessionTitleText}</p>
        <p style="color:var(--accent); font-size:0.9rem;">Lead: ${speakerText}</p>
      </div>
    `;
    lucide.createIcons();
    
  } else if (state === 'Completed') {
    heroCard.classList.add('state-completed');
    dot.style.backgroundColor = 'var(--success)';
    label.textContent = 'Event Concluded';
    if (quickMarkBtn) quickMarkBtn.classList.add('hidden-mobile-nav');
    
    container.innerHTML = `
      <div class="completed-widget">
        <p>The 1st NLP event has successfully concluded. Thank you to all our middle-level incharge participants!</p>
        <div class="completed-shortcuts">
          <a href="#gallery"><i data-lucide="image"></i> Gallery</a>
          <a href="#resources"><i data-lucide="download"></i> Resources</a>
          <a href="#feedback"><i data-lucide="message-square"></i> Feedback</a>
        </div>
      </div>
    `;
    lucide.createIcons();
  }
}

function startCountdown(targetDateStr) {
  const targetTime = new Date(targetDateStr).getTime();
  
  const updateTimer = () => {
    const now = new Date().getTime();
    const diff = targetTime - now;
    
    if (diff <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-minutes').textContent = '00';
      document.getElementById('cd-seconds').textContent = '00';
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const dDays = document.getElementById('cd-days');
    const dHours = document.getElementById('cd-hours');
    const dMins = document.getElementById('cd-minutes');
    const dSecs = document.getElementById('cd-seconds');
    
    if (dDays) dDays.textContent = String(days).padStart(2, '0');
    if (dHours) dHours.textContent = String(hours).padStart(2, '0');
    if (dMins) dMins.textContent = String(minutes).padStart(2, '0');
    if (dSecs) dSecs.textContent = String(seconds).padStart(2, '0');
  };
  
  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);
}



// ==========================================================================
// RENDER MODULES (TIMELINE, ANNOUNCEMENTS, PROFILES, GALLERY)
// ==========================================================================

// Date formatter helper
function formatEventDateString(dateStr) {
  if (!dateStr) return '';
  try {
    const dateParts = dateStr.split('-');
    if (dateParts.length === 3) {
      const d = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  } catch (e) {}
  return dateStr;
}

// Live session calculator helper
function calculateSessionLiveStatus(timeStr, nowObj) {
  if (!timeStr) return 'Upcoming';
  const parts = timeStr.split('-').map(s => s.trim());
  if (parts.length < 2) return 'Upcoming';
  
  const parseTime = (tStr) => {
    const match = tStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return null;
    let h = parseInt(match[1], 10);
    const m = parseInt(match[2], 10);
    const ampm = match[3].toUpperCase();
    if (ampm === 'PM' && h < 12) h += 12;
    if (ampm === 'AM' && h === 12) h = 0;
    return h * 60 + m;
  };
  
  const startMins = parseTime(parts[0]);
  const endMins = parseTime(parts[1]);
  if (startMins === null || endMins === null) return 'Upcoming';
  
  const nowMins = nowObj.getHours() * 60 + nowObj.getMinutes();
  
  if (nowMins < startMins) return 'Upcoming';
  if (nowMins >= startMins && nowMins <= endMins) return 'Live Now';
  return 'Completed';
}

// Timeline schedule
function renderScheduleTimeline() {
  const container = document.getElementById('schedule-timeline');
  const dayFilters = document.getElementById('schedule-day-filters');
  
  if (!container) return;
  
  // Extract event days list dynamically from appState.event_days
  let eventDaysList = [];
  if (appState.event_days && appState.event_days.length > 0) {
    eventDaysList = appState.event_days.slice().sort((a, b) => Number(a.dayNumber) - Number(b.dayNumber));
  } else {
    // Fallback if event_days array is empty
    const uniqueDays = [...new Set(appState.schedule.map(item => item.day || 'Day 1'))].sort((a, b) => {
      const numA = parseInt(a.replace(/[^0-9]/g, ''), 10) || 0;
      const numB = parseInt(b.replace(/[^0-9]/g, ''), 10) || 0;
      return numA - numB;
    });
    eventDaysList = uniqueDays.map((dayLabel, idx) => ({
      id: `fallback-${idx}`,
      dayNumber: parseInt(dayLabel.replace(/[^0-9]/g, ''), 10) || (idx + 1),
      date: ''
    }));
  }
  
  if (eventDaysList.length === 0 && appState.schedule.length === 0) {
    container.innerHTML = '<p class="text-center">No schedule events populated yet.</p>';
    if (dayFilters) dayFilters.innerHTML = '';
    return;
  }
  
  const todayStr = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  const dayKeys = eventDaysList.map(d => `Day ${d.dayNumber}`);
  
  // Auto-selection of active day based on system date if not locked by manual user click
  if (!appState.userManuallySelectedScheduleDay || !dayKeys.includes(appState.activeScheduleDay)) {
    // Find closest upcoming event day (d.date >= todayStr)
    const upcomingMatch = eventDaysList.find(d => d.date && d.date >= todayStr);
    
    if (upcomingMatch) {
      appState.activeScheduleDay = `Day ${upcomingMatch.dayNumber}`;
    } else {
      // If every event has finished (today is after the last event), automatically select the latest event day
      const latestEventDay = eventDaysList[eventDaysList.length - 1];
      if (latestEventDay) {
        appState.activeScheduleDay = `Day ${latestEventDay.dayNumber}`;
      } else if (dayKeys.length > 0) {
        appState.activeScheduleDay = dayKeys[0];
      }
    }
  }

  // Render Day Selector Tabs
  if (dayFilters) {
    dayFilters.innerHTML = '';
    eventDaysList.forEach(item => {
      const dayKey = `Day ${item.dayNumber}`;
      const formattedDate = formatEventDateString(item.date);
      const isToday = item.date === todayStr;
      const isActive = appState.activeScheduleDay === dayKey;
      
      const btn = document.createElement('button');
      btn.className = `filter-btn ${isActive ? 'active' : ''} ${isToday ? 'today-day-tab' : ''}`;
      btn.innerHTML = `
        <span class="tab-day-label">${dayKey}</span>
        ${formattedDate ? `<span class="tab-date-sep">•</span><span class="tab-date-subtext">${formattedDate}</span>` : ''}
      `;
      btn.addEventListener('click', () => {
        appState.userManuallySelectedScheduleDay = true;
        appState.activeScheduleDay = dayKey;
        renderScheduleTimeline();
      });
      dayFilters.appendChild(btn);
    });
  }
  
  container.innerHTML = '';
  
  // Filter events matching activeDay with numeric normalization & smart fallback
  const activeDayNum = parseInt(appState.activeScheduleDay.replace(/[^0-9]/g, ''), 10) || 1;
  let filteredSchedule = appState.schedule.filter(item => {
    const itemDayNum = parseInt((item.day || 'Day 1').replace(/[^0-9]/g, ''), 10) || 1;
    return itemDayNum === activeDayNum;
  });

  // Fallback: If active Day 4 or Day 5 happens to be empty due to cache mismatch, load available Day 4/5 items
  if (filteredSchedule.length === 0 && (activeDayNum === 4 || activeDayNum === 5)) {
    const fallbackTargetNum = activeDayNum === 4 ? 5 : 4;
    filteredSchedule = appState.schedule.filter(item => {
      const itemDayNum = parseInt((item.day || 'Day 1').replace(/[^0-9]/g, ''), 10) || 1;
      return itemDayNum === fallbackTargetNum;
    });
  }
  
  if (filteredSchedule.length === 0) {
    container.innerHTML = `<p class="text-center" style="padding: 40px; color: var(--text-muted);">No sessions scheduled for ${appState.activeScheduleDay}.</p>`;
    return;
  }
  
  // Find active day's date config
  const activeDayConfig = (appState.event_days || []).find(d => `Day ${d.dayNumber}` === appState.activeScheduleDay);
  const activeDayDate = activeDayConfig ? activeDayConfig.date : '';
  const now = new Date();
  
  filteredSchedule.forEach(item => {
    const row = document.createElement('div');
    row.className = 'timeline-row';
    row.setAttribute('onclick', `openSessionDetail('${item.id}')`);
    
    // Calculate status dynamically based on day date & current time
    let statusText = item.status || 'Upcoming';
    if (activeDayDate) {
      if (activeDayDate < todayStr) {
        statusText = 'Completed';
      } else if (activeDayDate > todayStr) {
        statusText = 'Upcoming';
      } else if (activeDayDate === todayStr) {
        statusText = calculateSessionLiveStatus(item.time, now);
      }
    }
    
    let statusClass = 'status-upcoming';
    if (statusText === 'Live Now') statusClass = 'status-live';
    if (statusText === 'Completed' || statusText === 'Past') statusClass = 'status-completed';
    
    row.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div>
          <span class="timeline-time">${item.time}</span>
          <h3 class="timeline-title">${item.title}</h3>
          <div class="timeline-meta">
            <span><i data-lucide="user"></i> ${item.speaker}</span>
            <span><i data-lucide="map-pin"></i> ${item.venue}</span>
          </div>
        </div>
        <span class="status-badge ${statusClass}">${statusText}</span>
      </div>
    `;
    
    container.appendChild(row);
  });
  
  lucide.createIcons();
}

function openSessionDetail(id) {
  const item = appState.schedule.find(s => s.id === id);
  if (!item) return;
  
  document.getElementById('session-modal-type').textContent = item.type;
  document.getElementById('session-modal-title').textContent = item.title;
  document.getElementById('session-modal-time').textContent = item.time;
  document.getElementById('session-modal-venue').textContent = item.venue;
  document.getElementById('session-modal-speaker').textContent = item.speaker;
  document.getElementById('session-modal-details').textContent = item.details || 'No details provided.';
  
  openModal('session-modal');
}

// Announcements feed
function renderAnnouncements() {
  const feed = document.getElementById('announcements-container');
  const latestHomeCard = document.getElementById('latest-announcement-card');
  
  if (feed) {
    if (appState.announcements.length === 0) {
      feed.innerHTML = '<p class="text-center">No bulletins published.</p>';
    } else {
      feed.innerHTML = '';
      appState.announcements.forEach(ann => {
        const card = document.createElement('div');
        const isPriorityHigh = ann.priority === 'High';
        card.className = `announcement-card ${isPriorityHigh ? 'priority-high' : ''}`;
        
        // Check if announcement is "NEW" (within last 48 hours)
        const annDate = new Date(`${ann.date}T${ann.time}`);
        const diffHrs = (new Date() - annDate) / (1000 * 60 * 60);
        const showNewBadge = diffHrs >= 0 && diffHrs <= 48;
        
        card.innerHTML = `
          <div class="ann-header">
            <div class="ann-title-block">
              <h3>${ann.title}</h3>
              ${showNewBadge ? '<span class="new-badge">New</span>' : ''}
              ${isPriorityHigh ? '<span class="new-badge" style="background-color:var(--highlight)">Urgent</span>' : ''}
            </div>
            <div class="ann-meta">
              <span><i data-lucide="tag"></i> ${ann.category}</span>
              <span><i data-lucide="clock"></i> ${ann.date} ${ann.time}</span>
            </div>
          </div>
          <p class="ann-message">${ann.message}</p>
        `;
        feed.appendChild(card);
      });
      lucide.createIcons();
    }
  }

  // Render on homepage highlight (the absolute newest announcement)
  if (latestHomeCard) {
    if (appState.announcements.length > 0) {
      const newest = appState.announcements[0];
      latestHomeCard.innerHTML = `
        <span class="new-badge" style="margin-bottom: 12px; display: inline-block;">Bulletin Board</span>
        <h3>${newest.title}</h3>
        <p>${newest.message}</p>
        <a href="#updates" class="btn btn-outline btn-sm">View All Bulletins</a>
      `;
    } else {
      latestHomeCard.innerHTML = '<p>No bulletins published yet.</p>';
    }
  }
}

// Populate Leaders, Speakers, Committee Cards
function renderLeadersAndCommittee() {
  const leadersGrid = document.getElementById('leaders-cards-container');
  const committeeGrid = document.getElementById('committee-cards-container');
  
  // 1. Render Leaders & Speakers
  if (leadersGrid) {
    if (appState.leaders.length === 0) {
      leadersGrid.innerHTML = '<p class="text-center">No leadership profiles populated.</p>';
    } else {
      renderProfileCardsFiltered('all');
      
      // Setup click events on filters
      const filterBtns = document.querySelectorAll('#view-leadership .category-filters .filter-btn');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          filterBtns.forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          const filter = e.target.getAttribute('data-filter');
          renderProfileCardsFiltered(filter);
        });
      });
    }
  }

  // 2. Render Organizing Committee
  if (committeeGrid) {
    if (appState.committee.length === 0) {
      committeeGrid.innerHTML = '<p class="text-center">No committee profiles populated.</p>';
    } else {
      committeeGrid.innerHTML = '';
      appState.committee.forEach(com => {
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.setAttribute('onclick', `openCommitteeModal('${com.id}')`);
        
        card.innerHTML = `
          <div class="profile-photo-wrapper">
            <img src="${getPhotoUrl(com.photo) || 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'}" alt="${com.fullName}">
          </div>
          <h3>${com.fullName}</h3>
          <span class="profile-role-tag">${com.role}</span>
          <p class="profile-desc-tag">${com.designation}</p>
        `;
        committeeGrid.appendChild(card);
      });
    }
  }
}

function renderProfileCardsFiltered(category) {
  const leadersGrid = document.getElementById('leaders-cards-container');
  if (!leadersGrid) return;
  
  const filtered = category === 'all' 
    ? appState.leaders 
    : appState.leaders.filter(l => l.category === category);
    
  if (filtered.length === 0) {
    leadersGrid.innerHTML = '<p class="text-center">No profiles found for this category.</p>';
    return;
  }
  
  leadersGrid.innerHTML = '';
  filtered.forEach(lead => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.setAttribute('onclick', `openLeaderModal('${lead.id}')`);
    
    card.innerHTML = `
      <div class="profile-photo-wrapper">
        <img src="${getPhotoUrl(lead.photo) || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200'}" alt="${lead.fullName}">
      </div>
      <h3>${lead.fullName}</h3>
      <span class="profile-role-tag">${lead.category}</span>
      <p class="profile-desc-tag">${lead.designation}</p>
      <p class="profile-desc-tag" style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">${lead.organisation}</p>
    `;
    leadersGrid.appendChild(card);
  });
}

// Open modals helper
function openModal(modalId) {
  // Close all modal overlays to prevent stacking blocking overlays
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(o => o.classList.remove('active'));
  
  const target = document.getElementById(modalId);
  if (target) {
    target.classList.add('active');
  }
}

function closeModal(modalId) {
  if (!modalId) {
    const overlays = document.querySelectorAll('.modal-overlay');
    overlays.forEach(o => o.classList.remove('active'));
    return;
  }
  const el = typeof modalId === 'string' ? document.getElementById(modalId) : modalId;
  if (el) {
    el.classList.remove('active');
  } else {
    const overlays = document.querySelectorAll('.modal-overlay');
    overlays.forEach(o => o.classList.remove('active'));
  }
}

// Committee Member details popup
function openCommitteeModal(id) {
  const com = appState.committee.find(c => c.id === id);
  if (!com) return;
  
  document.getElementById('com-modal-photo').src = getPhotoUrl(com.photo) || 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300';
  document.getElementById('com-modal-name').textContent = com.fullName;
  document.getElementById('com-modal-desig').textContent = com.designation;
  document.getElementById('com-modal-role').textContent = com.role;
  document.getElementById('com-modal-dept').textContent = com.department || 'N/A';
  document.getElementById('com-modal-email').textContent = com.email || 'N/A';
  document.getElementById('com-modal-responsibility').textContent = com.responsibility || 'No responsibility description specified.';
  
  // Call Action on Mobile
  const callContainer = document.getElementById('com-call-container');
  if (callContainer) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && com.phoneNumber) {
      callContainer.innerHTML = `
        <a href="tel:${com.phoneNumber}" class="btn btn-call btn-sm btn-block">
          <i data-lucide="phone"></i> Call Member (${com.phoneNumber})
        </a>
      `;
      lucide.createIcons();
    } else {
      callContainer.innerHTML = '';
    }
  }

  openModal('committee-modal');
}

// Leader/Speaker details popup
function openLeaderModal(id) {
  const lead = appState.leaders.find(l => l.id === id);
  if (!lead) return;
  
  document.getElementById('lead-modal-photo').src = getPhotoUrl(lead.photo) || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300';
  document.getElementById('lead-modal-name').textContent = lead.fullName;
  document.getElementById('lead-modal-desig').textContent = lead.designation;
  document.getElementById('lead-modal-org').textContent = lead.organisation || 'N/A';
  document.getElementById('lead-modal-role').textContent = lead.roleInEvent || 'N/A';
  document.getElementById('lead-modal-session').textContent = lead.sessionTitle || 'N/A';
  document.getElementById('lead-modal-time').textContent = lead.sessionDateTime || 'N/A';
  document.getElementById('lead-modal-bio').textContent = lead.shortProfile || 'No bio details listed.';
  document.getElementById('lead-modal-contact').textContent = lead.contactDetails || 'Undisclosed';

  // Toggle Guest Speaker sections
  const guestBox = document.getElementById('lead-modal-guest-section');
  if (lead.category === 'Guest Speakers') {
    guestBox.classList.remove('hidden');
    document.getElementById('lead-modal-topic').textContent = lead.topic || 'N/A';
    document.getElementById('lead-modal-objective').textContent = lead.learningObjective || 'N/A';
  } else {
    guestBox.classList.add('hidden');
  }

  openModal('leader-modal');
}



// Dynamic resources download rendering
function renderResources() {
  const container = document.getElementById('resources-grid-container');
  const mainPdfCard = document.getElementById('main-pdf-card');
  
  if (container) {
    const documents = appState.resources.filter(r => r.id !== 'res_main'); // booklet excluded from generic listing
    
    if (documents.length === 0) {
      container.innerHTML = '<p class="text-center">No additional downloads loaded.</p>';
    } else {
      container.innerHTML = '';
      documents.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        
        card.innerHTML = `
          <div class="res-header">
            <i data-lucide="file" class="res-doc-icon"></i>
            <div>
              <h4>${doc.title}</h4>
              <p class="res-desc">${doc.description}</p>
            </div>
          </div>
          <div class="res-footer">
            <span class="res-info">${doc.category} | ${doc.fileSize}</span>
            <a href="${doc.downloadUrl}" download class="res-download-btn">
              <i data-lucide="download"></i> Download
            </a>
          </div>
        `;
        container.appendChild(card);
      });
      lucide.createIcons();
    }
  }

  // Update PDF highlight card details based on setting and mock data
  if (mainPdfCard) {
    const verTag = document.getElementById('pdf-version-tag');
    const updateTag = document.getElementById('pdf-updated-tag');
    
    if (verTag) verTag.textContent = `Version: ${appState.settings.pdfVersion || '1.0'}`;
    if (updateTag) {
      const dt = new Date(appState.settings.lastUpdatedPdf);
      updateTag.textContent = `Last Updated: ${dt.toLocaleDateString()} ${dt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    }
  }
}

// Populate mark attendance session dropdown
function populateSessionDropdown() {
  const dropdown = document.getElementById('att-session');
  if (!dropdown) return;
  
  dropdown.innerHTML = '<option value="" disabled selected>Select Event Day</option>';
  
  // Sort event days by day number
  const sortedDays = (appState.event_days || []).slice().sort((a, b) => Number(a.dayNumber) - Number(b.dayNumber));
  
  const todayStr = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  let matchedDayValue = '';
  
  sortedDays.forEach(item => {
    const opt = document.createElement('option');
    
    let formattedDate = item.date;
    try {
      const dateParts = item.date.split('-');
      if (dateParts.length === 3) {
        const d = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
        formattedDate = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      }
    } catch (e) {}
    
    opt.value = `Day ${item.dayNumber}`;
    opt.textContent = `Day ${item.dayNumber} - ${formattedDate}`;
    dropdown.appendChild(opt);
    
    if (item.date === todayStr) {
      matchedDayValue = `Day ${item.dayNumber}`;
    }
  });
  
  if (matchedDayValue) {
    dropdown.value = matchedDayValue;
  }
}

// ==========================================================================
// ATTENDANCE SUBMISSION & DUPLICATION CHECKS
// ==========================================================================
function handleCategoryChange() {
  const category = document.getElementById('att-category').value;
  const specifyGroup = document.getElementById('group-category-specify');
  const specifyInput = document.getElementById('att-category-specify');
  const empGroup = document.getElementById('group-employee-id');
  const empInput = document.getElementById('att-employee-id');

  // Handle Category = Other
  if (category === 'Other') {
    specifyGroup.classList.remove('hidden');
    specifyInput.required = true;
  } else {
    specifyGroup.classList.add('hidden');
    specifyInput.required = false;
    specifyInput.value = '';
  }

  // Handle Category = Delegate
  if (category === 'Delegate') {
    empGroup.classList.remove('hidden');
    empInput.required = true;
  } else {
    empGroup.classList.add('hidden');
    empInput.required = false;
    empInput.value = '';
  }
}

function handleOrganizationChange() {
  const org = document.getElementById('att-organization').value;
  const specifyGroup = document.getElementById('group-org-specify');
  const specifyInput = document.getElementById('att-org-specify');

  if (org === 'Other') {
    specifyGroup.classList.remove('hidden');
    specifyInput.required = true;
  } else {
    specifyGroup.classList.add('hidden');
    specifyInput.required = false;
    specifyInput.value = '';
  }
}

async function handleAttendanceSubmit(e) {
  e.preventDefault();
  
  const category = document.getElementById('att-category').value;
  const categorySpecify = document.getElementById('att-category-specify').value.trim();
  const empId = document.getElementById('att-employee-id').value.trim();
  const name = document.getElementById('att-full-name').value.trim();
  const desig = document.getElementById('att-designation').value.trim();
  const organization = document.getElementById('att-organization').value;
  const orgSpecify = document.getElementById('att-org-specify').value.trim();
  const dept = document.getElementById('att-department').value.trim();
  const mobile = document.getElementById('att-mobile').value.trim();
  const email = document.getElementById('att-email').value.trim();
  const date = document.getElementById('att-date').value;
  const session = document.getElementById('att-session').value;
  const batch = document.getElementById('att-batch').value;
  
  if (!category) {
    showToast('Please select a Participant Category.', 'error');
    return;
  }
  if (category === 'Other' && !categorySpecify) {
    showToast('Please specify your Participant Category.', 'error');
    return;
  }
  if (category === 'Delegate' && !empId) {
    showToast('Please enter your Employee ID.', 'error');
    return;
  }
  if (!name || !desig || !organization || !dept || !mobile || !date || !session) {
    showToast('Please fill in all mandatory fields.', 'error');
    return;
  }
  if (organization === 'Other' && !orgSpecify) {
    showToast('Please specify your Organization / Hospital Name.', 'error');
    return;
  }
  
  // Submit btn state loading
  const submitBtn = document.getElementById('attendance-submit-btn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="animate-pulse">Recording...</i>';
  
  const payload = {
    category,
    categorySpecify: category === 'Other' ? categorySpecify : undefined,
    employeeId: category === 'Delegate' ? empId : '',
    fullName: name,
    designation: desig,
    organization: organization === 'Other' ? orgSpecify : organization,
    department: dept,
    mobileNumber: mobile,
    email: email || undefined,
    attendanceDate: date,
    session: session,
    batch: batch,
    deviceIdentifier: navigator.userAgent
  };
  
  try {
    const res = await fetch(`${API_BASE}/attendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    const data = await res.json();
    
    if (res.ok) {
      // Hide form, show success
      document.getElementById('attendance-form').classList.add('hidden');
      document.getElementById('attendance-success').classList.remove('hidden');
      showToast('Attendance marked successfully!', 'success');
      
      // Update public dashboard view if admin logged in
      if (appState.isLoggedIn) {
        fetchAdminAttendance();
      }
    } else {
      // Show error (duplicate, etc.)
      showToast(data.error || 'Check-in failed.', 'error');
    }
  } catch (err) {
    console.error('Error recording attendance:', err);
    showToast('Failed to connect to attendance service.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i data-lucide="save"></i> Submit Attendance';
    lucide.createIcons();
  }
}

function resetAttendanceForm() {
  document.getElementById('attendance-form').reset();
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('att-date').value = today;
  
  // Hide conditional fields on reset
  handleCategoryChange();
  handleOrganizationChange();
  
  document.getElementById('attendance-form').classList.remove('hidden');
  document.getElementById('attendance-success').classList.add('hidden');
}

// ==========================================================================
// ==========================================================================
// EVENT GALLERY CLIENT RENDERING
// ==========================================================================
function renderGalleryGrid() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  
  if (appState.gallery.length === 0) {
    grid.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 40px; color: var(--text-muted);">No memories uploaded to the gallery yet.</p>';
    renderGallerySlideshow();
    return;
  }
  
  renderGallerySlideshow();

  grid.innerHTML = '';
  appState.gallery.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    const catLower = (item.category || 'all').toLowerCase().replace(/\s+/g, '-');
    card.setAttribute('data-category', catLower);
    card.onclick = () => openGalleryModal(item.id);
    
    const showBadge = item.category && item.category !== 'Blank' && item.category !== 'General' && item.category !== 'None';

    card.innerHTML = `
      <div class="gallery-photo-wrapper" style="padding-bottom: 70%; border-radius: var(--radius-md); overflow: hidden; position: relative;">
        <img src="${getPhotoUrl(item.url) || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400'}" alt="${item.title || 'Event Photograph'}" loading="lazy">
        ${showBadge ? `<span class="badge badge-gold" style="position: absolute; top: 12px; left: 12px; z-index: 10; font-size: 0.72rem; text-transform: uppercase;">${item.category}</span>` : ''}
      </div>
      <div class="gallery-card-content" style="padding: 14px 16px;">
        <h4 class="gallery-card-title" style="margin: 0 0 6px 0; font-size: 1.05rem; font-weight: 600; color: var(--text-dark);">${item.title || 'Untitled Memory'}</h4>
        ${item.description ? `<p class="gallery-card-desc" style="margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">${item.description}</p>` : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

let gallerySlideshowTimer = null;
let gallerySlideshowCurrentIdx = 0;

function renderGallerySlideshow() {
  const container = document.getElementById('gallery-slideshow-container');
  if (!container) return;

  if (!appState.gallery || appState.gallery.length === 0) {
    container.innerHTML = '';
    return;
  }

  // Clear existing timer if any
  if (gallerySlideshowTimer) {
    clearInterval(gallerySlideshowTimer);
    gallerySlideshowTimer = null;
  }

  const items = appState.gallery;
  if (gallerySlideshowCurrentIdx >= items.length) {
    gallerySlideshowCurrentIdx = 0;
  }

  const currentItem = items[gallerySlideshowCurrentIdx];

  // Render Slideshow Banner HTML
  let dotsHtml = items.map((item, idx) => 
    `<span class="slideshow-indicator-dot ${idx === gallerySlideshowCurrentIdx ? 'active' : ''}"></span>`
  ).join('');

  const catText = (currentItem.category && currentItem.category !== 'Blank' && currentItem.category !== 'General' && currentItem.category !== 'None') 
    ? `<span class="badge badge-gold" style="margin-bottom: 6px; display: inline-block;">${currentItem.category}</span>` 
    : '';

  container.innerHTML = `
    <div class="featured-slideshow-card" onclick="openGalleryModal('${currentItem.id}')" title="Click to view full photo in Lightbox">
      <img id="slideshow-active-img" class="featured-slideshow-img active" src="${getPhotoUrl(currentItem.url) || ''}" alt="${currentItem.title || 'Featured Memory'}">
      <div class="featured-slideshow-overlay">
        <div class="featured-slideshow-header">
          <div class="featured-live-tag">
            <span class="slideshow-pulse-dot"></span> FEATURED HIGHLIGHTS (AUTO PLAY 5s)
          </div>
          <span style="color: rgba(255,255,255,0.85); font-size: 0.85rem; font-weight: 500;">
            ${gallerySlideshowCurrentIdx + 1} / ${items.length}
          </span>
        </div>
        <div class="featured-slideshow-content">
          ${catText}
          <h3 class="featured-slideshow-title" id="slideshow-active-title">${currentItem.title || 'Untitled Memory'}</h3>
          ${currentItem.description ? `<p class="featured-slideshow-desc" id="slideshow-active-desc">${currentItem.description}</p>` : ''}
          <div class="slideshow-indicators-row">
            ${dotsHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  // Start 5-second auto transition
  if (items.length > 1) {
    gallerySlideshowTimer = setInterval(() => {
      advanceGallerySlideshow();
    }, 5000); // 5 seconds
  }
}

function advanceGallerySlideshow() {
  if (!appState.gallery || appState.gallery.length <= 1) return;
  gallerySlideshowCurrentIdx = (gallerySlideshowCurrentIdx + 1) % appState.gallery.length;

  const currentItem = appState.gallery[gallerySlideshowCurrentIdx];
  const imgEl = document.getElementById('slideshow-active-img');
  const titleEl = document.getElementById('slideshow-active-title');
  const descEl = document.getElementById('slideshow-active-desc');
  const cardEl = document.querySelector('.featured-slideshow-card');

  if (cardEl) {
    cardEl.onclick = () => openGalleryModal(currentItem.id);
  }

  if (imgEl) {
    imgEl.classList.remove('active');
    setTimeout(() => {
      imgEl.src = getPhotoUrl(currentItem.url) || '';
      imgEl.alt = currentItem.title || 'Featured Memory';
      imgEl.classList.add('active');
    }, 150);
  }

  if (titleEl) {
    titleEl.textContent = currentItem.title || 'Untitled Memory';
  }

  if (descEl) {
    descEl.textContent = currentItem.description || '';
    descEl.style.display = currentItem.description ? 'block' : 'none';
  }

  // Update dots and index counter
  const dots = document.querySelectorAll('.slideshow-indicator-dot');
  dots.forEach((dot, idx) => {
    if (idx === gallerySlideshowCurrentIdx) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  const counterEl = document.querySelector('.featured-slideshow-header span');
  if (counterEl) {
    counterEl.textContent = `${gallerySlideshowCurrentIdx + 1} / ${appState.gallery.length}`;
  }
}

function setupGalleryFilters() {
  const tabsContainer = document.getElementById('gallery-filter-tabs');
  if (!tabsContainer) return;
  
  const btns = tabsContainer.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      btns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      filterGallery(filter);
    });
  });
}

function filterGallery(category) {
  const cards = document.querySelectorAll('.gallery-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

let currentGalleryIndex = 0;

function openGalleryModal(id) {
  const index = appState.gallery.findIndex(g => g.id === id);
  if (index === -1) return;
  
  currentGalleryIndex = index;
  updateLightboxImage();
  openModal('gallery-modal');
}

function updateLightboxImage() {
  const item = appState.gallery[currentGalleryIndex];
  if (!item) return;
  
  const imgEl = document.getElementById('gallery-modal-img');
  if (imgEl) {
    imgEl.src = getPhotoUrl(item.url) || '';
    imgEl.alt = item.title || 'Event Photograph';
  }

  const badgeEl = document.getElementById('gallery-modal-category-badge');
  if (badgeEl) {
    if (item.category && item.category !== 'Blank' && item.category !== 'General' && item.category !== 'None') {
      badgeEl.textContent = item.category;
      badgeEl.style.display = 'inline-block';
    } else {
      badgeEl.style.display = 'none';
    }
  }

  const titleEl = document.getElementById('gallery-modal-title');
  if (titleEl) {
    titleEl.textContent = item.title || 'Untitled Memory';
  }

  const descEl = document.getElementById('gallery-modal-desc');
  if (descEl) {
    descEl.textContent = item.description || '';
    descEl.style.display = item.description ? 'block' : 'none';
  }
}

function navigateGallery(direction) {
  if (!appState.gallery || appState.gallery.length === 0) return;
  
  currentGalleryIndex += direction;
  
  // Wrap around logic
  if (currentGalleryIndex >= appState.gallery.length) {
    currentGalleryIndex = 0;
  } else if (currentGalleryIndex < 0) {
    currentGalleryIndex = appState.gallery.length - 1;
  }
  
  updateLightboxImage();
}

// Lightbox keyboard navigation
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('gallery-modal');
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'ArrowLeft') {
      navigateGallery(-1);
    } else if (e.key === 'ArrowRight') {
      navigateGallery(1);
    } else if (e.key === 'Escape') {
      closeModal('gallery-modal');
    }
  }
});

// Render public overview details cards
function renderOverview() {
  const container = document.getElementById('public-overview-container');
  if (!container) return;
  
  if (appState.overview.length === 0) {
    container.innerHTML = '<p class="text-center">No overview details registered yet.</p>';
    return;
  }
  
  container.innerHTML = '';
  appState.overview.forEach(item => {
    const card = document.createElement('div');
    card.className = 'details-card';
    
    card.innerHTML = `
      <i data-lucide="${item.icon || 'info'}" class="card-icon"></i>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });
  
  lucide.createIcons();
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? 'check-circle' : 'alert-circle';
  
  toast.innerHTML = `
    <i data-lucide="${icon}"></i>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  lucide.createIcons();
  
  // Autoclose after 4s
  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 4000);
}

// ==========================================================================
// ADMINISTRATOR SUB-MODULE
// ==========================================================================

let adminListenersInitialized = false;

// Setup listener actions
function setupAdminListeners() {
  if (adminListenersInitialized) return;
  adminListenersInitialized = true;

  // Login Form
  const loginForm = document.getElementById('admin-login-form');
  if (loginForm) loginForm.addEventListener('submit', handleAdminLogin);
  
  // Logout Btn
  const logoutBtn = document.getElementById('admin-logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', handleAdminLogout);
  
  // Dashboard Sidebar switch tabs (both element & delegation binding)
  const sidebarNav = document.querySelector('.sidebar-nav');
  if (sidebarNav) {
    sidebarNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.sidebar-tab-btn:not(.logout-btn)');
      if (btn) {
        const tabId = btn.getAttribute('data-tab');
        if (tabId) switchAdminTab(tabId);
      }
    });
  }

  // Settings config form
  const configForm = document.getElementById('config-settings-form');
  if (configForm) configForm.addEventListener('submit', handleConfigUpdate);

  // Search input on keyup
  const searchInput = document.getElementById('admin-search-attendance');
  if (searchInput) {
    searchInput.addEventListener('input', filterAttendanceTable);
  }
  
  // Filters dropdown
  const filterElements = ['admin-filter-dept', 'admin-filter-desig', 'admin-filter-session', 'admin-filter-date'];
  filterElements.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', filterAttendanceTable);
  });

  // Dynamic Forms CRUD setup
  document.getElementById('admin-schedule-form').addEventListener('submit', (e) => handleCrudSubmit(e, 'schedule'));
  document.getElementById('admin-ann-form').addEventListener('submit', (e) => handleCrudSubmit(e, 'announcements'));
  document.getElementById('admin-profile-form').addEventListener('submit', (e) => handleCrudSubmit(e, 'profiles'));
  
  const overviewForm = document.getElementById('admin-overview-form');
  if (overviewForm) {
    overviewForm.addEventListener('submit', (e) => handleCrudSubmit(e, 'overview'));
  }
  const ovCancelBtn = document.getElementById('ov-cancel-edit-btn');
  if (ovCancelBtn) {
    ovCancelBtn.addEventListener('click', () => resetCrudForm('overview'));
  }
  const mainpdfForm = document.getElementById('admin-mainpdf-form');
  if (mainpdfForm) {
    mainpdfForm.addEventListener('submit', handleMainPdfUpdate);
  }
  const resourceForm = document.getElementById('admin-resource-form');
  if (resourceForm) {
    resourceForm.addEventListener('submit', handleResourceUpload);
  }

  // Profile Form Mode (toggle between leaders and committee)
  const profRadioBtns = document.getElementsByName('profile-type');
  profRadioBtns.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const mode = e.target.value;
      toggleProfileFormFields(mode);
    });
  });

  // Resource Form Mode
  const resRadioBtns = document.getElementsByName('res-type');
  resRadioBtns.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const mode = e.target.value;
      const pdfForm = document.getElementById('admin-mainpdf-form');
      const docForm = document.getElementById('admin-resource-form');
      if (mode === 'booklet') {
        pdfForm.classList.remove('hidden');
        docForm.classList.add('hidden');
      } else {
        pdfForm.classList.add('hidden');
        docForm.classList.remove('hidden');
      }
    });
  });

  // Photography selection previews
  setupFilePreview('prof-photo-file', 'prof-image-preview', 'prof-photo-url');

  // Cancel edit buttons
  document.getElementById('sch-cancel-edit-btn').addEventListener('click', () => resetCrudForm('schedule'));
  document.getElementById('ann-cancel-edit-btn').addEventListener('click', () => resetCrudForm('announcements'));
  document.getElementById('prof-cancel-edit-btn').addEventListener('click', () => resetCrudForm('profiles'));
}

// Toggle Profile fields
function toggleProfileFormFields(mode) {
  const leaderFields = document.getElementById('leader-fields');
  const leaderDateTime = document.getElementById('leader-datetime-row');
  const committeeFields = document.getElementById('committee-fields');
  const catSelect = document.getElementById('prof-category');

  if (mode === 'leader') {
    leaderFields.classList.remove('hidden');
    leaderDateTime.classList.remove('hidden');
    committeeFields.classList.add('hidden');
    toggleGuestSpeakerFields(catSelect.value);
    
    // Add change trigger on category to handle guest speaker details
    catSelect.addEventListener('change', (e) => toggleGuestSpeakerFields(e.target.value));
  } else {
    leaderFields.classList.add('hidden');
    leaderDateTime.classList.add('hidden');
    committeeFields.classList.remove('hidden');
    document.getElementById('guest-speaker-fields').classList.add('hidden');
  }
}

function toggleGuestSpeakerFields(category) {
  const guestBox = document.getElementById('guest-speaker-fields');
  if (category === 'Guest Speakers') {
    guestBox.classList.remove('hidden');
  } else {
    guestBox.classList.add('hidden');
  }
}

// Image loader preview
function setupFilePreview(fileInputId, previewBoxId, hiddenInputId) {
  const fileInput = document.getElementById(fileInputId);
  const previewBox = document.getElementById(previewBoxId);
  
  if (!fileInput || !previewBox) return;
  
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      previewBox.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
      if (hiddenInputId) {
        document.getElementById(hiddenInputId).value = event.target.result;
      }
    };
    reader.readAsDataURL(file);
  });
}

// Update storage space utilization indicator widget
async function updateAdminSpaceIndicator() {
  const textEl = document.getElementById('admin-space-text');
  const barEl = document.getElementById('admin-space-bar');
  if (!textEl || !barEl) return;

  try {
    const res = await fetch(`${API_BASE}/system/space`);
    if (res.ok) {
      const data = await res.json();
      textEl.textContent = `${data.usedMb} MB / ${data.limitMb} MB`;
      barEl.style.width = `${data.percentage}%`;
      
      if (data.percentage > 90) {
        barEl.style.backgroundColor = '#e53e3e';
      } else if (data.percentage > 70) {
        barEl.style.backgroundColor = '#dd6b20';
      } else {
        barEl.style.backgroundColor = 'var(--accent)';
      }
    } else {
      throw new Error('Response error');
    }
  } catch (err) {
    let appStateBytes = 0;
    ['gallery', 'leaders', 'committee', 'resources', 'attendance', 'overview', 'announcements', 'event_days'].forEach(key => {
      if (appState[key]) {
        try {
          appStateBytes += new Blob([JSON.stringify(appState[key])]).size;
        } catch (e) {
          appStateBytes += (JSON.stringify(appState[key]) || '').length * 2;
        }
      }
    });
    // Add assets directory baseline (3.15 MB)
    const totalBytes = appStateBytes + (3.15 * 1024 * 1024);
    const estimateMb = parseFloat((totalBytes / (1024 * 1024)).toFixed(2));
    const percentage = parseFloat(((estimateMb / 250) * 100).toFixed(1));
    textEl.textContent = `${estimateMb} MB / 250 MB`;
    barEl.style.width = `${percentage}%`;
    barEl.style.backgroundColor = 'var(--accent)';
  }
}

// Switch tabs inside dashboard panel
function switchAdminTab(tabId) {
  if (!tabId) return;
  appState.currentAdminTab = tabId;
  
  // Highlight active sidebar tab button
  const tabBtns = document.querySelectorAll('.sidebar-tab-btn:not(.logout-btn)');
  tabBtns.forEach(b => {
    if (b.getAttribute('data-tab') === tabId) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  const panels = document.querySelectorAll('.dashboard-tab-panel');
  panels.forEach(p => p.classList.remove('active'));
  
  const targetPanel = document.getElementById(`tab-${tabId}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
  
  // Refresh specific tab information
  if (tabId === 'db-summary') fetchAdminSummary();
  if (tabId === 'db-attendance') fetchAdminAttendance();
  if (tabId === 'db-schedule') fetchAdminScheduleList();
  if (tabId === 'db-overview') fetchAdminOverviewList();
  if (tabId === 'db-announcements') fetchAdminAnnouncementsList();
  if (tabId === 'db-profiles') fetchAdminProfilesList();
  if (tabId === 'db-resources') fetchAdminResourcesList();
  if (tabId === 'db-gallery') fetchAdminGallery();
  if (tabId === 'db-event-days') fetchAdminEventDays();
  
  updateAdminSpaceIndicator();
  lucide.createIcons();
}

// Request headers generator
function getAuthHeader() {
  const token = sessionStorage.getItem('adminToken');
  return { 'Authorization': `Bearer ${token}` };
}

// Admin login action
async function handleAdminLogin(e) {
  e.preventDefault();
  
  const password = document.getElementById('admin-password').value;
  const errText = document.getElementById('admin-login-error');
  
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    });
    
    const data = await res.json();
    
    if (res.ok) {
      sessionStorage.setItem('adminToken', data.token);
      localStorage.removeItem('nlp_gallery_local_only'); // Try backend sync again
      appState.isLoggedIn = true;
      errText.classList.add('hidden');
      document.getElementById('admin-password').value = '';
      
      showAdminDashboard();
      showToast('Authenticated as Administrator.', 'success');
    } else {
      errText.textContent = data.error || 'Authentication failed.';
      errText.classList.remove('hidden');
      showToast('Login rejected.', 'error');
    }
  } catch (err) {
    console.error(err);
    errText.textContent = 'Connection to authentication service failed.';
    errText.classList.remove('hidden');
  }
}

function handleAdminLogout() {
  fetch(`${API_BASE}/auth/logout`, {
    method: 'POST',
    headers: getAuthHeader()
  }).finally(() => {
    sessionStorage.removeItem('adminToken');
    appState.isLoggedIn = false;
    showAdminLoginForm();
    showToast('Logged out successfully.', 'success');
  });
}

function showAdminLoginForm() {
  document.getElementById('admin-login-box').classList.remove('hidden');
  document.getElementById('admin-dashboard').classList.add('hidden');
}

function showAdminDashboard() {
  document.getElementById('admin-login-box').classList.add('hidden');
  document.getElementById('admin-dashboard').classList.remove('hidden');
  
  // Set default tab on load
  switchAdminTab(appState.currentAdminTab);
}

// Config page save settings
async function handleConfigUpdate(e) {
  e.preventDefault();
  
  const payload = {
    eventState: document.getElementById('cfg-event-state').value,
    eventDate: document.getElementById('cfg-event-date').value,
    eventDateDisplay: document.getElementById('cfg-event-date-display').value,
    eventVenue: document.getElementById('cfg-event-venue').value
  };

  const pdfFileEl = document.getElementById('cfg-event-pdf-file');
  if (pdfFileEl && pdfFileEl.files.length > 0) {
    const uploadedPdfUrl = await uploadFileToServer(pdfFileEl.files[0]);
    if (uploadedPdfUrl) {
      payload.pdfUrl = uploadedPdfUrl;
      payload.lastUpdatedPdf = new Date().toISOString();
    }
  }

  try {
    const res = await fetch(`${API_BASE}/settings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      showToast('Portal configuration saved.', 'success');
      await fetchSettings();
    } else {
      const err = await res.json();
      showToast(err.error || 'Failed to update config.', 'error');
    }
  } catch (err) {
    console.error(err);
    showToast('Configuration write error.', 'error');
  }
}

// Fetch Admin tab data
async function fetchAdminSummary() {
  try {
    // Sync settings in case changed
    await fetchSettings();
    
    document.getElementById('cfg-event-state').value = appState.settings.eventState || 'Upcoming';
    document.getElementById('cfg-event-date').value = appState.settings.eventDate || '';
    const dateDispEl = document.getElementById('cfg-event-date-display');
    if (dateDispEl) dateDispEl.value = appState.settings.eventDateDisplay || '10-11 July & 26 July 2026';
    document.getElementById('cfg-event-venue').value = appState.settings.eventVenue || '';

    // Load attendance logs count
    const res = await fetch(`${API_BASE}/attendance`);
    const logs = await res.json();
    appState.attendance = logs;
    
    const today = new Date().toISOString().split('T')[0];
    const todayLogs = logs.filter(l => l.attendanceDate === today);
    
    document.getElementById('metric-total-participants').textContent = logs.length;
    document.getElementById('metric-today-attendance').textContent = todayLogs.length;
    
    // Summary listings
    document.getElementById('metric-total-sessions').textContent = appState.schedule.length;
    document.getElementById('metric-live-updates').textContent = appState.announcements.length;
    
    const metricResources = document.getElementById('metric-resources-count');
    if (metricResources) {
      metricResources.textContent = appState.resources.length;
    }
    
    const metricOverview = document.getElementById('metric-overview-count');
    if (metricOverview) {
      metricOverview.textContent = appState.overview.length;
    }
  } catch (err) {
    console.error(err);
  }
}

async function fetchAdminAttendance() {
  try {
    const res = await fetch(`${API_BASE}/attendance`);
    appState.attendance = await res.json();
    
    buildFilterDropdowns();
    populateAttendanceTable(appState.attendance);
  } catch (err) {
    console.error(err);
    showToast('Failed to retrieve register list.', 'error');
  }
}

// Build dropdowns dynamic options
function buildFilterDropdowns() {
  const depts = new Set();
  const desigs = new Set();
  const sessions = new Set();
  const dates = new Set();
  
  appState.attendance.forEach(r => {
    if (r.department) depts.add(r.department.trim());
    if (r.designation) desigs.add(r.designation.trim());
    if (r.session) sessions.add(r.session.trim());
    if (r.attendanceDate) dates.add(r.attendanceDate);
  });
  
  const populateOptions = (selectId, set, defaultText) => {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    const val = select.value; // Preserve current select val
    
    select.innerHTML = `<option value="all">All ${defaultText}</option>`;
    
    Array.from(set).sort().forEach(item => {
      const opt = document.createElement('option');
      opt.value = item;
      opt.textContent = item;
      select.appendChild(opt);
    });
    
    // Restore selection if exists
    if (Array.from(set).includes(val)) {
      select.value = val;
    }
  };
  
  populateOptions('admin-filter-dept', depts, 'Departments');
  populateOptions('admin-filter-desig', desigs, 'Designations');
  populateOptions('admin-filter-session', sessions, 'Sessions');
  populateOptions('admin-filter-date', dates, 'Dates');
}

// Render filtered table rows
function populateAttendanceTable(records) {
  const tbody = document.querySelector('#admin-attendance-table tbody');
  const fallback = document.getElementById('table-no-data');
  
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  if (records.length === 0) {
    fallback.classList.remove('hidden');
    return;
  }
  
  fallback.classList.add('hidden');
  
  records.forEach(rec => {
    const tr = document.createElement('tr');
    tr.id = `row-att-${rec.id}`;
    
    tr.innerHTML = `
      <td style="font-weight:600; color:var(--primary);">${rec.category === 'Other' ? `Other (${rec.categorySpecify || ''})` : (rec.category || 'Delegate')}</td>
      <td>${rec.employeeId || '-'}</td>
      <td>${rec.fullName}</td>
      <td>${rec.designation}</td>
      <td>${rec.department}</td>
      <td>${rec.attendanceDate}</td>
      <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${rec.session}">${rec.session}</td>
      <td>${rec.checkInTime}</td>
      <td><span class="status-badge status-completed">${rec.status}</span></td>
      <td>
        <div class="table-action-btns">
          <button class="tbl-btn tbl-btn-edit" onclick="editAttendanceRecord('${rec.id}')" title="Edit Entry"><i data-lucide="edit"></i></button>
          <button class="tbl-btn tbl-btn-delete" onclick="deleteAttendanceRecord('${rec.id}')" title="Delete Entry"><i data-lucide="trash-2"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  lucide.createIcons();
}

// Client filter action
function filterAttendanceTable() {
  const query = document.getElementById('admin-search-attendance').value.toLowerCase();
  const dept = document.getElementById('admin-filter-dept').value;
  const desig = document.getElementById('admin-filter-desig').value;
  const session = document.getElementById('admin-filter-session').value;
  const date = document.getElementById('admin-filter-date').value;
  
  const filtered = appState.attendance.filter(r => {
    const matchQuery = (r.fullName || '').toLowerCase().includes(query) || (r.employeeId || '').toLowerCase().includes(query);
    const matchDept = dept === 'all' || r.department === dept;
    const matchDesig = desig === 'all' || r.designation === desig;
    const matchSession = session === 'all' || r.session === session;
    const matchDate = date === 'all' || r.attendanceDate === date;
    
    return matchQuery && matchDept && matchDesig && matchSession && matchDate;
  });
  
  populateAttendanceTable(filtered);
}

// Delete log check
async function deleteAttendanceRecord(id) {
  const confirmDelete = confirm('Are you sure you want to permanently delete this attendance entry?');
  if (!confirmDelete) return;

  try {
    const res = await fetch(`${API_BASE}/attendance/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader()
    });
    
    if (res.ok) {
      showToast('Attendance log deleted.', 'success');
      await fetchAdminAttendance();
    } else {
      showToast('Deletion error.', 'error');
    }
  } catch (err) {
    console.error(err);
    showToast('Failed to communicate deletion.', 'error');
  }
}

// Edit attendance details via window prompts
async function editAttendanceRecord(id) {
  const rec = appState.attendance.find(r => r.id === id);
  if (!rec) return;
  
  const newName = prompt('Modify Name:', rec.fullName);
  if (newName === null) return; // cancel
  
  const newDept = prompt('Modify Department:', rec.department);
  if (newDept === null) return;
  
  const newDesig = prompt('Modify Designation:', rec.designation);
  if (newDesig === null) return;
  
  const newSession = prompt('Modify Session Slot Name:', rec.session);
  if (newSession === null) return;

  const payload = {
    fullName: newName.trim(),
    department: newDept.trim(),
    designation: newDesig.trim(),
    session: newSession.trim()
  };

  try {
    const res = await fetch(`${API_BASE}/attendance/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      showToast('Attendance entry updated.', 'success');
      await fetchAdminAttendance();
    } else {
      showToast('Edit save failed.', 'error');
    }
  } catch (err) {
    console.error(err);
  }
}

// SUB-TAB: Event Days Management CRUD
async function fetchAdminEventDays() {
  const tableBody = document.querySelector('#admin-event-days-table tbody');
  const noDataEl = document.getElementById('event-days-table-no-data');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  try {
    const res = await fetch(`${API_BASE}/event_days?_t=${Date.now()}`, { cache: 'no-store' });
    const text = await res.text();
    if (text.trim().startsWith('<!DOCTYPE')) {
      throw new Error('Endpoint returned HTML instead of JSON');
    }
    appState.event_days = JSON.parse(text);
    localStorage.setItem('nlp_local_event_days', JSON.stringify(appState.event_days));
  } catch (err) {
    console.warn('Backend /event_days API offline or unrouted, loading from localStorage.');
    const local = localStorage.getItem('nlp_local_event_days');
    appState.event_days = local ? JSON.parse(local) : [
      { id: 'day_1', dayNumber: 1, date: '2026-07-10' },
      { id: 'day_2', dayNumber: 2, date: '2026-07-11' },
      { id: 'day_3', dayNumber: 3, date: '2026-07-17' },
      { id: 'day_4', dayNumber: 4, date: '2026-07-26' },
      { id: 'day_5', dayNumber: 5, date: '2026-07-26' }
    ];
  }

  // Sort days by dayNumber
  appState.event_days.sort((a, b) => Number(a.dayNumber) - Number(b.dayNumber));

  if (appState.event_days.length === 0) {
    noDataEl.classList.remove('hidden');
    return;
  }
  
  noDataEl.classList.add('hidden');
  
  appState.event_days.forEach(item => {
    let displayDate = item.date;
    try {
      const parts = item.date.split('-');
      if (parts.length === 3) {
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        displayDate = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      }
    } catch (e) {}

    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight: 600; color: var(--primary);">Day ${item.dayNumber}</td>
      <td>${displayDate}</td>
      <td class="table-actions">
        <button class="tbl-btn tbl-btn-edit" onclick="editEventDayItem('${item.id}')" title="Edit Item"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" onclick="deleteEventDayItem('${item.id}')" title="Delete Item"><i data-lucide="trash-2"></i></button>
      </td>
    `;
    tableBody.appendChild(row);
  });
  
  lucide.createIcons();
}

function adminAddEventDay() {
  document.getElementById('event-days-form-title').textContent = 'Add Event Day';
  document.getElementById('event-days-item-id').value = '';
  document.getElementById('event-days-number').value = '';
  document.getElementById('event-days-date').value = '';
  openModal('admin-event-days-modal');
}

function editEventDayItem(id) {
  const item = appState.event_days.find(d => d.id === id);
  if (!item) return;
  
  document.getElementById('event-days-form-title').textContent = 'Edit Event Day';
  document.getElementById('event-days-item-id').value = item.id;
  document.getElementById('event-days-number').value = item.dayNumber;
  document.getElementById('event-days-date').value = item.date;
  openModal('admin-event-days-modal');
}

async function deleteEventDayItem(id) {
  const confirmDel = confirm('Are you sure you want to delete this event day?');
  if (!confirmDel) return;
  
  let localList = appState.event_days.filter(d => d.id !== id);
  localStorage.setItem('nlp_local_event_days', JSON.stringify(localList));
  
  try {
    const res = await fetch(`${API_BASE}/event_days/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader()
    });
    if (!res.ok) {
      throw new Error(`Server returned status ${res.status}`);
    }
  } catch (err) {
    console.warn('Backend API error, saved locally:', err);
  }
  
  showToast('Event day deleted successfully.', 'success');
  await fetchAdminEventDays();
  await refreshPublicData();
}

async function saveEventDayItem(e) {
  e.preventDefault();
  
  const id = document.getElementById('event-days-item-id').value;
  const dayNumberRaw = document.getElementById('event-days-number').value.trim();
  const date = document.getElementById('event-days-date').value;
  
  if (!dayNumberRaw || !date) {
    showToast('Please enter both Day Number and Date.', 'error');
    return;
  }
  
  // Extract only numeric digits from input, e.g. "Day 4" becomes 4, default to 1 if no digits
  const digitsOnly = dayNumberRaw.replace(/[^0-9]/g, '');
  const parsedDayNum = parseInt(digitsOnly, 10) || 1;
  
  const payload = { dayNumber: parsedDayNum, date };
  const isEdit = !!id;
  
  let localList = appState.event_days.slice();
  if (isEdit) {
    payload.id = id;
    const idx = localList.findIndex(d => d.id === id);
    if (idx !== -1) localList[idx] = payload;
  } else {
    payload.id = 'day_' + Date.now();
    localList.push(payload);
  }
  localStorage.setItem('nlp_local_event_days', JSON.stringify(localList));
  
  try {
    const endpoint = isEdit ? `${API_BASE}/event_days/${id}` : `${API_BASE}/event_days`;
    const method = isEdit ? 'PUT' : 'POST';
    const res = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      throw new Error(`Server status ${res.status}`);
    }
  } catch (err) {
    console.warn('Backend API error, saved locally:', err);
  }
  
  showToast(isEdit ? 'Event day updated successfully.' : 'Event day added successfully.', 'success');
  closeModal('admin-event-days-modal');
  await fetchAdminEventDays();
  await refreshPublicData();
}

// ==========================================================================
// CRUD CRUD LAYOUT - MANAGE SUB-SECTIONS (SCHEDULE, ANNOUNCEMENT, PROFILE)
// ==========================================================================

// SUB-TAB: Schedule
function populateAdminScheduleDayDropdown() {
  const selectEl = document.getElementById('sch-day');
  if (!selectEl) return;
  const currentVal = selectEl.value;
  selectEl.innerHTML = '';
  
  const daysList = (appState.event_days || []).slice().sort((a, b) => Number(a.dayNumber) - Number(b.dayNumber));
  if (daysList.length === 0) {
    selectEl.innerHTML = '<option value="Day 1">Day 1</option><option value="Day 2">Day 2</option><option value="Day 3">Day 3</option><option value="Day 4">Day 4</option><option value="Day 5">Day 5</option>';
    if (currentVal) selectEl.value = currentVal;
    return;
  }
  
  daysList.forEach(d => {
    const opt = document.createElement('option');
    const dayVal = `Day ${d.dayNumber}`;
    const dateFormatted = formatEventDateString(d.date);
    opt.value = dayVal;
    opt.textContent = dateFormatted ? `${dayVal} (${dateFormatted})` : dayVal;
    selectEl.appendChild(opt);
  });
  
  if (currentVal && Array.from(selectEl.options).some(o => o.value === currentVal)) {
    selectEl.value = currentVal;
  }
}

async function fetchAdminScheduleList() {
  const listEl = document.getElementById('admin-schedule-list');
  if (!listEl) return;
  
  populateAdminScheduleDayDropdown();
  listEl.innerHTML = '';
  
  // Fetch newest schedule list safely
  try {
    const res = await fetch(`${API_BASE}/schedule?_t=${Date.now()}`, { cache: 'no-store' });
    const text = await res.text();
    if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
      throw new Error('Endpoint returned HTML document instead of JSON data');
    }
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed) && parsed.length > 0) {
      appState.schedule = parsed;
    } else {
      if (!appState.schedule || appState.schedule.length === 0) {
        appState.schedule = SEED_SCHEDULE;
      }
    }
  } catch (err) {
    console.warn('Backend API offline or returned non-JSON schedule, using in-memory / SEED_SCHEDULE:', err.message);
    if (!appState.schedule || appState.schedule.length === 0) {
      appState.schedule = SEED_SCHEDULE;
    }
  }
  
  // Sort schedule items numerically by Day, then by Time
  appState.schedule.sort((a, b) => {
    const dayA = a.day || 'Day 1';
    const dayB = b.day || 'Day 1';
    if (dayA !== dayB) {
      const numA = parseInt(dayA.replace('Day ', ''), 10) || 0;
      const numB = parseInt(dayB.replace('Day ', ''), 10) || 0;
      return numA - numB;
    }
    return a.time.localeCompare(b.time);
  });
  
  appState.schedule.forEach(item => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    row.innerHTML = `
      <div class="admin-item-info">
        <h4>${item.title}</h4>
        <p>[${item.day || 'Day 1'}] ${item.time} | ${item.venue} | ${item.speaker} (${item.status})</p>
      </div>
      <div class="table-action-btns">
        <button class="tbl-btn tbl-btn-edit" onclick="loadItemForEdit('schedule', '${item.id}')"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" onclick="deleteCrudItem('schedule', '${item.id}')"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    listEl.appendChild(row);
  });
  lucide.createIcons();
}

// SUB-TAB: Announcements
async function fetchAdminAnnouncementsList() {
  const listEl = document.getElementById('admin-ann-list');
  if (!listEl) return;
  
  listEl.innerHTML = '';
  const res = await fetch(`${API_BASE}/announcements?_t=${Date.now()}`, { cache: 'no-store' });
  appState.announcements = await res.json();
  
  appState.announcements.forEach(item => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    row.innerHTML = `
      <div class="admin-item-info">
        <h4>${item.title}</h4>
        <p>${item.date} ${item.time} | Category: ${item.category} | Priority: ${item.priority}</p>
      </div>
      <div class="table-action-btns">
        <button class="tbl-btn tbl-btn-edit" onclick="loadItemForEdit('announcements', '${item.id}')"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" onclick="deleteCrudItem('announcements', '${item.id}')"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    listEl.appendChild(row);
  });
  lucide.createIcons();
}

// SUB-TAB: Profiles (Leaders + Committee)
async function fetchAdminProfilesList() {
  const listEl = document.getElementById('admin-profiles-list');
  if (!listEl) return;
  
  listEl.innerHTML = '';
  
  const [resL, resC] = await Promise.all([
    fetch(`${API_BASE}/leaders?_t=${Date.now()}`, { cache: 'no-store' }),
    fetch(`${API_BASE}/committee?_t=${Date.now()}`, { cache: 'no-store' })
  ]);
  
  appState.leaders = await resL.json();
  appState.committee = await resC.json();
  
  // Render Leaders list
  appState.leaders.forEach(item => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    row.innerHTML = `
      <div class="admin-item-info">
        <h4>${item.fullName} <span style="font-size:0.7rem; color:var(--accent); font-weight:700;">[LEADER - ${item.category}]</span></h4>
        <p>${item.designation} | ${item.organisation}</p>
      </div>
      <div class="table-action-btns">
        <button class="tbl-btn tbl-btn-edit" onclick="loadItemForEdit('leaders', '${item.id}')"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" onclick="deleteCrudItem('leaders', '${item.id}')"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    listEl.appendChild(row);
  });

  // Render Committee list
  appState.committee.forEach(item => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    row.innerHTML = `
      <div class="admin-item-info">
        <h4>${item.fullName} <span style="font-size:0.7rem; color:var(--success); font-weight:700;">[COMMITTEE]</span></h4>
        <p>${item.role} | ${item.department}</p>
      </div>
      <div class="table-action-btns">
        <button class="tbl-btn tbl-btn-edit" onclick="loadItemForEdit('committee', '${item.id}')"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" onclick="deleteCrudItem('committee', '${item.id}')"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    listEl.appendChild(row);
  });
  
  lucide.createIcons();
}

// Edit item loader
async function loadItemForEdit(type, id) {
  appState.editingItemId = id;
  
  if (type === 'schedule') {
    populateAdminScheduleDayDropdown();
    const item = appState.schedule.find(s => s.id === id);
    document.getElementById('sch-item-id').value = item.id;
    document.getElementById('sch-title').value = item.title;
    document.getElementById('sch-time').value = item.time;
    document.getElementById('sch-speaker').value = item.speaker;
    document.getElementById('sch-type').value = item.type;
    document.getElementById('sch-venue').value = item.venue;
    document.getElementById('sch-status').value = item.status;
    document.getElementById('sch-day').value = item.day || 'Day 1';
    document.getElementById('sch-details').value = item.details || '';
    
    document.getElementById('schedule-form-title').textContent = 'Modify Schedule Event';
    document.getElementById('sch-cancel-edit-btn').classList.remove('hidden');
    document.getElementById('sch-submit-btn').textContent = 'Save Changes';
    
  } else if (type === 'announcements') {
    const item = appState.announcements.find(a => a.id === id);
    document.getElementById('ann-item-id').value = item.id;
    document.getElementById('ann-title').value = item.title;
    document.getElementById('ann-category').value = item.category;
    document.getElementById('ann-priority').value = item.priority;
    document.getElementById('ann-message').value = item.message;
    
    document.getElementById('ann-form-title').textContent = 'Modify Announcement';
    document.getElementById('ann-cancel-edit-btn').classList.remove('hidden');
    document.getElementById('ann-submit-btn').textContent = 'Save Changes';
    
  } else if (type === 'leaders' || type === 'committee') {
    appState.editingProfileType = type;
    const list = type === 'leaders' ? appState.leaders : appState.committee;
    const item = list.find(p => p.id === id);
    
    document.getElementById('prof-item-id').value = item.id;
    document.getElementById('prof-fullname').value = item.fullName;
    document.getElementById('prof-designation').value = item.designation;
    document.getElementById('prof-email').value = item.email || '';
    document.getElementById('prof-phone').value = item.phoneNumber || '';
    document.getElementById('prof-bio').value = type === 'leaders' ? (item.shortProfile || '') : (item.responsibility || '');
    document.getElementById('prof-photo-url').value = item.photo || '';
    
    if (item.photo) {
      document.getElementById('prof-image-preview').innerHTML = `<img src="${getPhotoUrl(item.photo)}" alt="Preview">`;
    } else {
      document.getElementById('prof-image-preview').innerHTML = '<span>No photograph uploaded</span>';
    }

    const radios = document.getElementsByName('profile-type');
    
    if (type === 'leaders') {
      radios[0].checked = true;
      toggleProfileFormFields('leader');
      
      document.getElementById('prof-category').value = item.category;
      document.getElementById('prof-org').value = item.organisation || '';
      document.getElementById('prof-role').value = item.roleInEvent || '';
      document.getElementById('prof-session-title').value = item.sessionTitle || '';
      document.getElementById('prof-session-datetime').value = item.sessionDateTime || '';
      
      if (item.category === 'Guest Speakers') {
        document.getElementById('prof-topic').value = item.topic || '';
        document.getElementById('prof-objective').value = item.learningObjective || '';
      }
    } else {
      radios[1].checked = true;
      toggleProfileFormFields('committee');
      
      document.getElementById('prof-committee-role').value = item.role || '';
      document.getElementById('prof-dept').value = item.department || '';
    }
    
    document.getElementById('prof-cancel-edit-btn').classList.remove('hidden');
    document.getElementById('prof-submit-btn').textContent = 'Save Changes';
  } else if (type === 'overview') {
    const item = appState.overview.find(o => o.id === id);
    const form = document.getElementById('admin-overview-form');
    if (form) {
      document.getElementById('ov-item-id').value = item.id;
      document.getElementById('ov-title').value = item.title;
      document.getElementById('ov-icon').value = item.icon || 'info';
      document.getElementById('ov-description').value = item.description;
      
      document.getElementById('ov-form-title').textContent = 'Modify Info Card';
      document.getElementById('ov-cancel-edit-btn').classList.remove('hidden');
      document.getElementById('ov-submit-btn').textContent = 'Save Changes';
    }
  }
}

// Reset Form fields
function resetCrudForm(type) {
  appState.editingItemId = null;
  
  if (type === 'schedule') {
    populateAdminScheduleDayDropdown();
    document.getElementById('admin-schedule-form').reset();
    document.getElementById('sch-item-id').value = '';
    document.getElementById('sch-day').value = 'Day 1';
    document.getElementById('schedule-form-title').textContent = 'Create Schedule Event';
    document.getElementById('sch-cancel-edit-btn').classList.add('hidden');
    document.getElementById('sch-submit-btn').textContent = 'Add Event';
    
  } else if (type === 'announcements') {
    document.getElementById('admin-ann-form').reset();
    document.getElementById('ann-item-id').value = '';
    document.getElementById('ann-form-title').textContent = 'Post Announcement';
    document.getElementById('ann-cancel-edit-btn').classList.add('hidden');
    document.getElementById('ann-submit-btn').textContent = 'Publish Announcement';
    
  } else if (type === 'profiles') {
    appState.editingProfileType = null;
    document.getElementById('admin-profile-form').reset();
    document.getElementById('prof-item-id').value = '';
    document.getElementById('prof-photo-url').value = '';
    document.getElementById('prof-image-preview').innerHTML = '<span>No photograph uploaded</span>';
    document.getElementById('prof-cancel-edit-btn').classList.add('hidden');
    document.getElementById('prof-submit-btn').textContent = 'Save Profile';
    toggleProfileFormFields('leader');
  } else if (type === 'overview') {
    const form = document.getElementById('admin-overview-form');
    if (form) {
      form.reset();
      document.getElementById('ov-item-id').value = '';
      document.getElementById('ov-form-title').textContent = 'Create Info Card';
      document.getElementById('ov-cancel-edit-btn').classList.add('hidden');
      document.getElementById('ov-submit-btn').textContent = 'Add Card';
    }
  }
}

// CRUD Submit Handler (Covers Schedule, Announcements, Profiles)
async function handleCrudSubmit(e, formType) {
  e.preventDefault();
  
  let endpoint = '';
  let payload = {};
  let isEditing = appState.editingItemId !== null;
  
  if (formType === 'schedule') {
    endpoint = isEditing ? `/schedule/${appState.editingItemId}` : '/schedule';
    payload = {
      title: document.getElementById('sch-title').value,
      time: document.getElementById('sch-time').value,
      speaker: document.getElementById('sch-speaker').value,
      type: document.getElementById('sch-type').value,
      venue: document.getElementById('sch-venue').value,
      status: document.getElementById('sch-status').value,
      day: document.getElementById('sch-day').value,
      details: document.getElementById('sch-details').value
    };
    
  } else if (formType === 'overview') {
    endpoint = isEditing ? `/overview/${appState.editingItemId}` : '/overview';
    payload = {
      title: document.getElementById('ov-title').value.trim(),
      icon: document.getElementById('ov-icon').value,
      description: document.getElementById('ov-description').value.trim()
    };
    
  } else if (formType === 'announcements') {
    endpoint = isEditing ? `/announcements/${appState.editingItemId}` : '/announcements';
    payload = {
      title: document.getElementById('ann-title').value,
      category: document.getElementById('ann-category').value,
      priority: document.getElementById('ann-priority').value,
      message: document.getElementById('ann-message').value,
      date: isEditing ? undefined : new Date().toISOString().split('T')[0],
      time: isEditing ? undefined : new Date().toLocaleTimeString('en-US', { hour12: false }).substr(0, 5)
    };
    
  } else if (formType === 'profiles') {
    const isCommittee = document.querySelector('input[name="profile-type"]:checked').value === 'committee';
    
    const photoFileEl = document.getElementById('prof-photo-file');
    let photoUrl = document.getElementById('prof-photo-url').value;
    
    // Handle local image upload to server first if file selected
    if (photoFileEl.files.length > 0) {
      const uploadUrl = await uploadFileToServer(photoFileEl.files[0]);
      if (uploadUrl) photoUrl = uploadUrl;
    }
    
    const targetType = isCommittee ? 'committee' : 'leaders';
    const originalType = appState.editingProfileType;
    const isConvertingRole = isEditing && originalType && originalType !== targetType;

    if (isCommittee) {
      endpoint = (isEditing && !isConvertingRole) ? `/committee/${appState.editingItemId}` : '/committee';
      payload = {
        fullName: document.getElementById('prof-fullname').value,
        designation: document.getElementById('prof-designation').value,
        role: document.getElementById('prof-committee-role').value || 'Organising Committee',
        department: document.getElementById('prof-dept').value || 'Hospital Administration',
        email: document.getElementById('prof-email').value,
        phoneNumber: document.getElementById('prof-phone').value,
        responsibility: document.getElementById('prof-bio').value,
        photo: photoUrl || undefined
      };
    } else {
      endpoint = (isEditing && !isConvertingRole) ? `/leaders/${appState.editingItemId}` : '/leaders';
      const cat = document.getElementById('prof-category').value;
      payload = {
        fullName: document.getElementById('prof-fullname').value,
        designation: document.getElementById('prof-designation').value,
        category: cat || 'Program Leadership',
        organisation: document.getElementById('prof-org').value || 'Medanta Lucknow',
        roleInEvent: document.getElementById('prof-role').value || 'Speaker / Facilitator',
        sessionTitle: document.getElementById('prof-session-title').value || '',
        sessionDateTime: document.getElementById('prof-session-datetime').value || '',
        contactDetails: document.getElementById('prof-email').value,
        phoneNumber: document.getElementById('prof-phone').value,
        shortProfile: document.getElementById('prof-bio').value,
        photo: photoUrl || undefined
      };

      if (cat === 'Guest Speakers') {
        payload.topic = document.getElementById('prof-topic').value;
        payload.learningObjective = document.getElementById('prof-objective').value;
      }
    }

    const method = (isEditing && !isConvertingRole) ? 'PUT' : 'POST';
    
    try {
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        // If converting role from another collection, clean up old entry from original collection
        if (isConvertingRole && appState.editingItemId) {
          try {
            await fetch(`${API_BASE}/${originalType}/${appState.editingItemId}`, {
              method: 'DELETE',
              headers: getAuthHeader()
            });
          } catch (delErr) {
            console.warn('Error cleaning up converted profile item:', delErr);
          }
        }

        showToast(isConvertingRole ? 'Profile converted to new role successfully.' : (isEditing ? 'Record updated.' : 'Record added successfully.'), 'success');
        resetCrudForm(formType);
        await fetchAdminProfilesList();
        await refreshPublicData();
      } else {
        const err = await res.json();
        showToast(err.error || 'Failed to submit data.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Error saving profile.', 'error');
    }
    return;
  }

  const method = isEditing ? 'PUT' : 'POST';
  
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      showToast(isEditing ? 'Record updated.' : 'Record added successfully.', 'success');
      resetCrudForm(formType);
      
      // Refresh views
      if (formType === 'schedule') await fetchAdminScheduleList();
      if (formType === 'announcements') await fetchAdminAnnouncementsList();
      if (formType === 'profiles') await fetchAdminProfilesList();
      if (formType === 'overview') await fetchAdminOverviewList();
      
      await refreshPublicData();
    } else {
      const err = await res.json();
      showToast(err.error || 'Failed to submit data.', 'error');
    }
  } catch (err) {
    console.error(err);
    showToast('Save query failed.', 'error');
  }
}

// Delete item generic
async function deleteCrudItem(type, id) {
  const confirmDel = confirm(`Are you sure you want to delete this ${type} item?`);
  if (!confirmDel) return;
  
  try {
    const res = await fetch(`${API_BASE}/${type}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader()
    });
    
    if (res.ok) {
      showToast('Item deleted successfully.', 'success');
      
      if (type === 'schedule') await fetchAdminScheduleList();
      if (type === 'announcements') await fetchAdminAnnouncementsList();
      if (type === 'leaders' || type === 'committee') await fetchAdminProfilesList();
      if (type === 'overview') await fetchAdminOverviewList();
      
      await refreshPublicData();
    } else {
      showToast('Failed to delete item.', 'error');
    }
  } catch (err) {
    console.error(err);
  }
}

// File base64 poster
async function uploadFileToServer(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64Data = e.target.result;
      try {
        const res = await fetch(`${API_BASE}/upload`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
          },
          body: JSON.stringify({
            fileName: file.name,
            fileData: base64Data
          })
        });
        
        if (res.status === 401) {
          sessionStorage.removeItem('adminToken');
          appState.isLoggedIn = false;
          showAdminLoginForm();
          showToast('Session expired. Please log in again.', 'error');
          resolve(null);
          return;
        }
        
        const data = await res.json();
        if (res.ok) {
          resolve(data.url);
        } else {
          showToast(data.error || 'Upload failed.', 'error');
          resolve(null);
        }
      } catch (err) {
        console.error(err);
        showToast('File upload networking error.', 'error');
        resolve(null);
      }
    };
    reader.readAsDataURL(file);
  });
}



// SUB-TAB: Resources List
async function fetchAdminResourcesList() {
  const listEl = document.getElementById('admin-resources-list');
  if (!listEl) return;
  
  listEl.innerHTML = '';
  const res = await fetch(`${API_BASE}/resources`);
  appState.resources = await res.json();
  
  appState.resources.forEach(doc => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    row.innerHTML = `
      <div class="admin-item-info">
        <h4>${doc.title} <span style="font-size:0.7rem; color:var(--text-muted);">(${doc.fileName})</span></h4>
        <p>${doc.category} | Version: ${doc.version} | Size: ${doc.fileSize}</p>
      </div>
      <div class="table-action-btns">
        <button class="tbl-btn tbl-btn-delete" onclick="deleteResourceItem('${doc.id}')"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    listEl.appendChild(row);
  });
  lucide.createIcons();
}

async function handleMainPdfUpdate(e) {
  e.preventDefault();
  
  const fileEl = document.getElementById('mainpdf-file');
  const ver = document.getElementById('pdf-ver-num').value.trim();
  
  if (fileEl.files.length === 0) {
    showToast('Please select a PDF file.', 'error');
    return;
  }
  
  const file = fileEl.files[0];
  const url = await uploadFileToServer(file);
  
  if (!url) return;
  
  // Post settings update containing PDF details
  const payload = {
    pdfVersion: ver,
    lastUpdatedPdf: new Date().toISOString()
  };

  try {
    const res = await fetch(`${API_BASE}/settings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      showToast('Event Booklet PDF updated successfully.', 'success');
      const form = document.getElementById('admin-mainpdf-form');
      if (form) {
        form.reset();
        document.getElementById('pdf-ver-num').value = ver; // keep version
      }
      await fetchSettings();
      await refreshPublicData();
    }
  } catch (err) {
    console.error(err);
  }
}

async function handleResourceUpload(e) {
  e.preventDefault();
  
  const fileEl = document.getElementById('res-file');
  if (fileEl.files.length === 0) {
    showToast('Please select a resource file.', 'error');
    return;
  }
  
  const file = fileEl.files[0];
  const url = await uploadFileToServer(file);
  if (!url) return;
  
  // Estimate file size string
  const sizeKb = (file.size / 1024).toFixed(0);
  const sizeStr = sizeKb > 1024 ? `${(sizeKb / 1024).toFixed(1)} MB` : `${sizeKb} KB`;

  const payload = {
    title: document.getElementById('res-title').value.trim(),
    category: document.getElementById('res-category').value,
    description: document.getElementById('res-desc').value.trim(),
    version: document.getElementById('res-ver').value.trim(),
    fileName: file.name,
    fileSize: sizeStr,
    updatedAt: new Date().toISOString(),
    downloadUrl: url
  };

  try {
    const res = await fetch(`${API_BASE}/resources`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      showToast('Document resource added.', 'success');
      const form = document.getElementById('admin-resource-form');
      if (form) {
        form.reset();
        document.getElementById('res-ver').value = '1.0';
      }
      
      await fetchAdminResourcesList();
      await refreshPublicData();
    }
  } catch (err) {
    console.error(err);
  }
}

async function deleteResourceItem(id) {
  const confirmDel = confirm('Are you sure you want to delete this resource file?');
  if (!confirmDel) return;
  
  try {
    const res = await fetch(`${API_BASE}/resources/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader()
    });
    if (res.ok) {
      showToast('Resource deleted.', 'success');
      await fetchAdminResourcesList();
      await refreshPublicData();
    }
  } catch (err) {
    console.error(err);
  }
}

// SUB-TAB: Attendee Feedback Viewer & Editor CRUD
async function fetchAdminFeedback() {
  const tableBody = document.querySelector('#admin-feedback-table tbody');
  const noDataEl = document.getElementById('feedback-table-no-data');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  const res = await fetch(`${API_BASE}/feedback`);
  appState.feedback = await res.json();
  
  // Calculate average rating score
  const total = appState.feedback.length;
  let avg = 0;
  if (total > 0) {
    const sum = appState.feedback.reduce((acc, curr) => acc + curr.rating, 0);
    avg = (sum / total).toFixed(1);
  }
  
  document.getElementById('fb-average-rating').textContent = avg;
  document.getElementById('fb-total-submissions').textContent = total;
  
  if (total === 0) {
    noDataEl.classList.remove('hidden');
    return;
  }
  
  noDataEl.classList.add('hidden');
  
  appState.feedback.forEach(item => {
    const row = document.createElement('tr');
    
    // Stars representation
    let starsStr = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
    
    row.innerHTML = `
      <td class="font-bold">${item.employeeId || 'Anonymous'}</td>
      <td>${item.date}</td>
      <td class="text-gold">${starsStr} (${item.rating}/5)</td>
      <td><span class="badge badge-success">${item.relevance}</span></td>
      <td class="text-italic" style="max-width:300px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${item.comments}">"${item.comments}"</td>
      <td>
        <div class="table-action-btns">
          <button class="tbl-btn tbl-btn-edit" onclick="editFeedbackRecord('${item.id}')" title="Edit Feedback"><i data-lucide="edit"></i></button>
          <button class="tbl-btn tbl-btn-delete" onclick="deleteFeedbackRecord('${item.id}')" title="Delete Feedback"><i data-lucide="trash-2"></i></button>
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  });
  
  lucide.createIcons();
}

async function adminAddFeedback() {
  const empId = prompt('Enter Employee ID (optional):');
  if (empId === null) return;

  const ratingStr = prompt('Enter Rating (1-5):');
  if (ratingStr === null) return;
  const rating = parseInt(ratingStr, 10);
  if (isNaN(rating) || rating < 1 || rating > 5) {
    alert('Invalid rating! Must be 1 to 5.');
    return;
  }

  const relevance = prompt('Enter Relevance (Highly Relevant / Relevant / Neutral / Not Relevant):', 'Relevant');
  if (relevance === null) return;

  const comments = prompt('Enter Comments / Suggestions:');
  if (comments === null || comments.trim() === '') {
    alert('Comments are required.');
    return;
  }

  const payload = {
    employeeId: empId.trim() || 'Anonymous',
    rating: rating,
    relevance: relevance.trim(),
    comments: comments.trim(),
    date: new Date().toISOString().split('T')[0]
  };

  try {
    const res = await fetch(`${API_BASE}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      showToast('Feedback log added successfully.', 'success');
      await fetchAdminFeedback();
      await refreshPublicData();
    } else {
      showToast('Failed to add feedback entry.', 'error');
    }
  } catch (err) {
    console.error(err);
    showToast('Server write error.', 'error');
  }
}

async function editFeedbackRecord(id) {
  const rec = appState.feedback.find(f => f.id === id);
  if (!rec) return;

  const newEmpId = prompt('Modify Employee ID (or leave as is):', rec.employeeId);
  if (newEmpId === null) return;

  const newRatingStr = prompt('Modify Rating Score (1-5):', rec.rating);
  if (newRatingStr === null) return;
  const newRating = parseInt(newRatingStr, 10);
  if (isNaN(newRating) || newRating < 1 || newRating > 5) {
    alert('Invalid rating! Rating must be an integer between 1 and 5.');
    return;
  }

  const newRelevance = prompt('Modify Relevance (Highly Relevant / Relevant / Neutral / Not Relevant):', rec.relevance);
  if (newRelevance === null) return;

  const newComments = prompt('Modify Comments / Suggestions:', rec.comments);
  if (newComments === null) return;

  const payload = {
    employeeId: newEmpId.trim() || 'Anonymous',
    rating: newRating,
    relevance: newRelevance.trim(),
    comments: newComments.trim(),
    date: rec.date
  };

  try {
    const res = await fetch(`${API_BASE}/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      showToast('Feedback log updated successfully.', 'success');
      await fetchAdminFeedback();
      await refreshPublicData();
    } else {
      showToast('Failed to update feedback entry.', 'error');
    }
  } catch (err) {
    console.error(err);
    showToast('Server update error.', 'error');
  }
}

async function deleteFeedbackRecord(id) {
  const confirmDel = confirm('Are you sure you want to delete this feedback log?');
  if (!confirmDel) return;

  try {
    const res = await fetch(`${API_BASE}/feedback/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader()
    });

    if (res.ok) {
      showToast('Feedback log deleted successfully.', 'success');
      await fetchAdminFeedback();
      await refreshPublicData();
    } else {
      showToast('Failed to delete feedback entry.', 'error');
    }
  } catch (err) {
    console.error(err);
    showToast('Server delete error.', 'error');
  }
}

function exportFeedbackReport() {
  if (appState.feedback.length === 0) {
    showToast('No feedback records to export.', 'error');
    return;
  }

  const formattedRows = appState.feedback.map(item => ({
    'Employee ID': item.employeeId || 'Anonymous',
    'Submission Date': item.date,
    'Rating Score (1-5)': item.rating,
    'Relevance Level': item.relevance,
    'Comments / Suggestions': item.comments
  }));

  try {
    const worksheet = XLSX.utils.json_to_sheet(formattedRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendee Feedback');
    
    XLSX.writeFile(workbook, `NLP_Feedback_Report_${new Date().toISOString().split('T')[0]}.xlsx`);
    showToast('Feedback Excel report generated and downloaded.', 'success');
  } catch (err) {
    console.error('SheetJS Export Error:', err);
    showToast('Failed to compile Feedback Excel file.', 'error');
  }
}

// ==========================================================================
// EXCEL EXPORTER SERVICE (SHEETJS integration)
// ==========================================================================
function exportAttendanceReport(type) {
  if (appState.attendance.length === 0) {
    showToast('No attendance records to export.', 'error');
    return;
  }
  
  let exportData = [];
  let reportFileName = 'NLP_Attendance_Report';
  
  if (type === 'all') {
    exportData = appState.attendance;
    reportFileName += '_All';
  } else if (type === 'filtered') {
    // Re-apply filter rules to fetch current tables view rows
    const query = document.getElementById('admin-search-attendance').value.toLowerCase();
    const dept = document.getElementById('admin-filter-dept').value;
    const desig = document.getElementById('admin-filter-desig').value;
    const session = document.getElementById('admin-filter-session').value;
    const date = document.getElementById('admin-filter-date').value;
    
    exportData = appState.attendance.filter(r => {
      const matchQuery = r.fullName.toLowerCase().includes(query) || r.employeeId.toLowerCase().includes(query);
      const matchDept = dept === 'all' || r.department === dept;
      const matchDesig = desig === 'all' || r.designation === desig;
      const matchSession = session === 'all' || r.session === session;
      const matchDate = date === 'all' || r.attendanceDate === date;
      
      return matchQuery && matchDept && matchDesig && matchSession && matchDate;
    });
    
    reportFileName += '_Filtered';
  } else if (type === 'day-wise') {
    // Generate grouped summary report: counts check-ins per session per day
    const grouped = {};
    appState.attendance.forEach(rec => {
      const key = `${rec.attendanceDate} | ${rec.session}`;
      if (!grouped[key]) {
        grouped[key] = {
          'Attendance Date': rec.attendanceDate,
          'Session Slot': rec.session,
          'Total Checked In': 0,
          'Batch Code': rec.batch
        };
      }
      grouped[key]['Total Checked In']++;
    });
    
    exportData = Object.values(grouped);
    reportFileName += '_DayWiseSummary';
  }
  
  if (exportData.length === 0) {
    showToast('No filtered entries matching criteria.', 'error');
    return;
  }

  const formattedRows = exportData.map(item => {
    if (type === 'day-wise') return item;
    
    return {
      'Participant Category': item.category === 'Other' ? `Other (${item.categorySpecify || ''})` : (item.category || 'Delegate'),
      'Employee ID': item.employeeId || '-',
      'Full Name': item.fullName,
      'Designation': item.designation,
      'Organization / Hospital': item.organization || 'Medanta',
      'Department / Unit': item.department,
      'Mobile Number': item.mobileNumber,
      'Email Address': item.email || 'N/A',
      'Attendance Date': item.attendanceDate,
      'Event Day': item.session,
      'Batch': item.batch,
      'Check-in Time (Local)': item.checkInTime,
      'Check-in Timestamp (UTC)': item.submissionTimestamp,
      'Check-in Status': item.status,
      'Device Identifier': item.deviceIdentifier
    };
  });
  
  try {
    // SheetJS Workbook Generation
    const worksheet = XLSX.utils.json_to_sheet(formattedRows);
    
    // Apply styling helper if needed, but standard is auto-sized columns
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance Register');
    
    // Write XLSX binary
    XLSX.writeFile(workbook, `${reportFileName}_${new Date().toISOString().split('T')[0]}.xlsx`);
    showToast('Excel report generated and downloaded.', 'success');
  } catch (err) {
    console.error('SheetJS Export Error:', err);
    showToast('Failed to compile Excel file.', 'error');
  }
}

// SUB-TAB: Overview Info Cards CRUD
async function fetchAdminOverviewList() {
  const listEl = document.getElementById('admin-overview-list');
  if (!listEl) return;
  
  listEl.innerHTML = '';
  const res = await fetch(`${API_BASE}/overview`);
  appState.overview = await res.json();
  
  appState.overview.forEach(item => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    row.innerHTML = `
      <div class="admin-item-info">
        <h4>${item.title} <span style="font-size:0.75rem; color:var(--accent);">(${item.icon})</span></h4>
        <p style="font-size:0.85rem; color:var(--text-muted); text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:450px;">${item.description}</p>
      </div>
      <div class="table-action-btns">
        <button class="tbl-btn tbl-btn-edit" onclick="loadItemForEdit('overview', '${item.id}')" title="Edit Card"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" onclick="deleteCrudItem('overview', '${item.id}')" title="Delete Card"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    listEl.appendChild(row);
  });
  
  lucide.createIcons();
}

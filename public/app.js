// SUB-TAB: Event Gallery Manager CRUD
async function fetchAdminGallery() {
  const tableBody = document.querySelector('#admin-gallery-table tbody');
  const noDataEl = document.getElementById('gallery-table-no-data');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  try {
    const res = await fetch(`${API_BASE}/gallery`);
    appState.gallery = await res.json();
    
    if (appState.gallery.length === 0) {
      noDataEl.classList.remove('hidden');
      return;
    }
    
    noDataEl.classList.add('hidden');
    
    appState.gallery.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td style="width: 80px;"><img src="${getPhotoUrl(item.url) || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=80'}" style="width: 60px; height: 40px; object-fit: cover; border-radius: var(--radius-sm);"></td>
        <td><strong>${item.title}</strong></td>
        <td><span class="profile-role-tag" style="background-color: var(--primary-bg); color: var(--text-light);">${item.category}</span></td>
        <td>${item.description || 'No description provided.'}</td>
        <td class="table-actions">
          <button class="tbl-btn tbl-btn-edit" onclick="editGalleryItem('${item.id}')" title="Edit Item"><i data-lucide="edit"></i></button>
          <button class="tbl-btn tbl-btn-delete" onclick="deleteGalleryItem('${item.id}')" title="Delete Item"><i data-lucide="trash-2"></i></button>
        </td>
      `;
      tableBody.appendChild(row);
    });
    
    lucide.createIcons();
  } catch (err) {
    console.error('Error fetching admin gallery:', err);
    showToast('Failed to fetch gallery items.', 'error');
  }
}

function adminAddGalleryItem() {
  document.getElementById('admin-gallery-form').reset();
  document.getElementById('gallery-item-id').value = '';
  document.getElementById('gallery-file-name').textContent = 'Or enter a web URL below:';
  document.getElementById('gallery-image-preview').innerHTML = '<span>No image selected</span>';
  document.getElementById('gallery-form-title').textContent = 'Add Gallery Item';
  document.getElementById('gallery-submit-btn').textContent = 'Save Item';
  
  openModal('admin-gallery-modal');
}

function previewGalleryUpload(event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById('gallery-file-name').textContent = file.name;
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
  document.getElementById('gallery-title').value = item.title;
  document.getElementById('gallery-category').value = item.category;
  document.getElementById('gallery-desc').value = item.description || '';
  document.getElementById('gallery-url').value = item.url || '';
  document.getElementById('gallery-file-name').textContent = 'Or upload a new image file:';
  
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
  const title = document.getElementById('gallery-title').value;
  const category = document.getElementById('gallery-category').value;
  const description = document.getElementById('gallery-desc').value;
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
  const endpoint = isEdit ? `${API_BASE}/gallery/${id}` : `${API_BASE}/gallery`;
  const method = isEdit ? 'PUT' : 'POST';
  
  try {
    const res = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      showToast(isEdit ? 'Gallery item updated successfully.' : 'Gallery item added successfully.', 'success');
      closeModal('admin-gallery-modal');
      await fetchAdminGallery();
      await refreshPublicData();
    } else {
      showToast('Failed to save gallery item.', 'error');
    }
  } catch (err) {
    console.error('Error saving gallery item:', err);
    showToast('Failed to connect to backend service.', 'error');
  }
}

async function deleteGalleryItem(id) {
  const confirmDel = confirm('Are you sure you want to delete this event photograph?');
  if (!confirmDel) return;
  
  try {
    const res = await fetch(`${API_BASE}/gallery/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader()
    });
    
    if (res.ok) {
      showToast('Gallery photograph deleted successfully.', 'success');
      await fetchAdminGallery();
      await refreshPublicData();
    } else {
      showToast('Failed to delete gallery item.', 'error');
    }
  } catch (err) {
    console.error('Error deleting gallery item:', err);
    showToast('Failed to connect to backend service.', 'error');
  }
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
  resources: [],
  feedback: [],
  overview: [],
  currentAdminTab: 'db-summary',
  editingItemId: null, // Track currently edited item ID
  isLoggedIn: false,
  activeScheduleDay: 'Day 1'
};

// Auto-run on DOM content ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// Initialize Application
async function initApp() {
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
    const res = await fetch(`${API_BASE}/settings`);
    appState.settings = await res.json();
    
    // Update Hero elements based on retrieved settings
    document.getElementById('hero-date-text').textContent = formatDateString(appState.settings.eventDate);
    document.getElementById('hero-venue-text').textContent = appState.settings.eventVenue;
    
    // Update Details section elements based on retrieved settings
    const detailsDate = document.getElementById('details-date-text');
    if (detailsDate) detailsDate.textContent = formatDateString(appState.settings.eventDate);
    const detailsVenue = document.getElementById('details-venue-text');
    if (detailsVenue) detailsVenue.textContent = appState.settings.eventVenue;
    
    updateEventStateWidget();
  } catch (err) {
    console.error('Error fetching settings:', err);
    showToast('Failed to load event settings.', 'error');
  }
}

async function refreshPublicData() {
  try {
    const [schedRes, annRes, leadRes, commRes, resRes, ovRes, galleryRes] = await Promise.all([
      fetch(`${API_BASE}/schedule`),
      fetch(`${API_BASE}/announcements`),
      fetch(`${API_BASE}/leaders`),
      fetch(`${API_BASE}/committee`),
      fetch(`${API_BASE}/resources`),
      fetch(`${API_BASE}/overview`),
      fetch(`${API_BASE}/gallery`)
    ]);

    appState.schedule = await schedRes.json();
    appState.announcements = await annRes.json();
    appState.leaders = await leadRes.json();
    appState.committee = await commRes.json();
    appState.resources = await resRes.json();
    appState.overview = await ovRes.json();
    appState.gallery = await galleryRes.json();

    renderScheduleTimeline();
    renderAnnouncements();
    renderLeadersAndCommittee();
    renderResources();
    renderOverview();
    renderGalleryGrid();
    populateSessionDropdown();
  } catch (err) {
    console.error('Error fetching event data:', err);
  }
}

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

// Timeline schedule
function renderScheduleTimeline() {
  const container = document.getElementById('schedule-timeline');
  const dayFilters = document.getElementById('schedule-day-filters');
  
  if (!container) return;
  
  if (appState.schedule.length === 0) {
    container.innerHTML = '<p class="text-center">No schedule events populated yet.</p>';
    if (dayFilters) dayFilters.innerHTML = '';
    return;
  }
  
  // Dynamically extract unique days and sort numerically
  const uniqueDays = [...new Set(appState.schedule.map(item => item.day || 'Day 1'))].sort((a, b) => {
    const numA = parseInt(a.replace('Day ', ''), 10) || 0;
    const numB = parseInt(b.replace('Day ', ''), 10) || 0;
    return numA - numB;
  });
  
  // Set fallback active day if invalid
  if (uniqueDays.length > 0 && !uniqueDays.includes(appState.activeScheduleDay)) {
    appState.activeScheduleDay = uniqueDays[0];
  }
  
  // Render Day Selector Tabs
  if (dayFilters) {
    dayFilters.innerHTML = '';
    if (uniqueDays.length > 1) {
      uniqueDays.forEach(day => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${appState.activeScheduleDay === day ? 'active' : ''}`;
        btn.textContent = day;
        btn.addEventListener('click', () => {
          appState.activeScheduleDay = day;
          renderScheduleTimeline();
        });
        dayFilters.appendChild(btn);
      });
    }
  }
  
  container.innerHTML = '';
  
  // Filter events matching activeDay
  const filteredSchedule = appState.schedule.filter(item => (item.day || 'Day 1') === appState.activeScheduleDay);
  
  if (filteredSchedule.length === 0) {
    container.innerHTML = '<p class="text-center">No sessions scheduled for this day.</p>';
    return;
  }
  
  filteredSchedule.forEach(item => {
    const row = document.createElement('div');
    row.className = 'timeline-row';
    row.setAttribute('onclick', `openSessionDetail('${item.id}')`);
    
    let statusClass = 'status-upcoming';
    if (item.status === 'Live Now') statusClass = 'status-live';
    if (item.status === 'Completed') statusClass = 'status-completed';
    
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
        <span class="status-badge ${statusClass}">${item.status}</span>
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
  document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
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
  
  dropdown.innerHTML = '<option value="" disabled selected>Select Session Slot</option>';
  
  appState.schedule.forEach(session => {
    // Only allow selecting actual lectures, keynotes, activities or workshops (exclude reception/socials)
    if (['Keynote', 'Lecture', 'Workshop', 'Activity', 'Panel'].includes(session.type)) {
      const opt = document.createElement('option');
      opt.value = session.title;
      opt.textContent = `[${session.day || 'Day 1'}] ${session.time} - ${session.title}`;
      dropdown.appendChild(opt);
    }
  });
}

// ==========================================================================
// ATTENDANCE SUBMISSION & DUPLICATION CHECKS
// ==========================================================================
async function handleAttendanceSubmit(e) {
  e.preventDefault();
  
  const empId = document.getElementById('att-employee-id').value.trim();
  const name = document.getElementById('att-full-name').value.trim();
  const desig = document.getElementById('att-designation').value;
  const dept = document.getElementById('att-department').value.trim();
  const mobile = document.getElementById('att-mobile').value.trim();
  const email = document.getElementById('att-email').value.trim();
  const date = document.getElementById('att-date').value;
  const session = document.getElementById('att-session').value;
  const batch = document.getElementById('att-batch').value;
  
  if (!empId || !name || !desig || !dept || !mobile || !date || !session) {
    showToast('Please fill in all required credentials.', 'error');
    return;
  }
  
  // Submit btn state loading
  const submitBtn = document.getElementById('attendance-submit-btn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="animate-pulse">Recording...</i>';
  
  const payload = {
    employeeId: empId,
    fullName: name,
    designation: desig,
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
    return;
  }
  
  grid.innerHTML = '';
  appState.gallery.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.setAttribute('data-category', item.category);
    card.onclick = () => openGalleryModal(item.id);
    
    card.innerHTML = `
      <div class="gallery-photo-wrapper">
        <img src="${getPhotoUrl(item.url) || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400'}" alt="${item.title}" loading="lazy">
      </div>
      <div class="gallery-card-content">
        <span class="gallery-card-category">${item.category}</span>
        <h3 class="gallery-card-title">${item.title}</h3>
        <p class="gallery-card-desc">${item.description || ''}</p>
      </div>
    `;
    grid.appendChild(card);
  });
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
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function openGalleryModal(id) {
  const item = appState.gallery.find(g => g.id === id);
  if (!item) return;
  
  document.getElementById('gallery-modal-img').src = getPhotoUrl(item.url) || '';
  document.getElementById('gallery-modal-category').textContent = item.category;
  document.getElementById('gallery-modal-title').textContent = item.title;
  document.getElementById('gallery-modal-desc').textContent = item.description || 'No description provided.';
  
  openModal('gallery-modal');
}

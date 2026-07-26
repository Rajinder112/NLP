// LocalStorage Fallback helpers for Gallery
const LOCAL_GALLERY_KEY = 'nlp_local_gallery';

const SEED_EVENT_DAYS = [
  { id: 'day_1', dayNumber: 1, date: '2026-07-10' },
  { id: 'day_2', dayNumber: 2, date: '2026-07-11' },
  { id: 'day_3', dayNumber: 3, date: '2026-07-17' },
  { id: 'day_4', dayNumber: 4, date: '2026-07-24' },
  { id: 'day_5', dayNumber: 5, date: '2026-07-26' }
];

const SEED_LEADERS = [
  {
    id: 'lead_vinita_yadav',
    category: 'Guest Speakers',
    fullName: 'Dr. Vinita Yadav',
    designation: 'AVP Corporate - L&D',
    organisation: 'Medanta Group',
    roleInEvent: 'Guest Speaker & Facilitator',
    topic: 'Middle Management Skills & SWOT Analysis',
    learningObjective: 'Middle Management Skills, Managing Upward and Downward, Bridging Leadership and Teams.',
    sessionTitle: 'The Role of Middle Management & SWOT Analysis',
    sessionDateTime: 'July 26, 2026 - 10:15 AM & 02:30 PM',
    shortProfile: 'Dr. Vinita Yadav leads Corporate Learning & Development at Medanta, specializing in executive leadership, organizational development, and middle-management capabilities.',
    contactDetails: 'vinita.yadav@medanta.org',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'lead_precila_fernandes',
    category: 'Program Leadership',
    fullName: 'Ms Precila Fernandes',
    designation: 'Director Nursing',
    organisation: 'Medanta Lucknow',
    roleInEvent: 'Program Director & Speaker',
    sessionTitle: 'Presentation Skills & Nursing Leadership Skills',
    sessionDateTime: 'July 10, 2026 & July 26, 2026',
    shortProfile: 'Ms Precila Fernandes is the Director of Nursing at Medanta Lucknow, guiding clinical excellence, personal branding for nurse leaders, and nursing administration.',
    contactDetails: 'precila.fernandes@medanta.org',
    photo: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'lead_vikram_singh_chouhan',
    category: 'Program Leadership',
    fullName: 'Dr Vikram Singh Chouhan',
    designation: 'Vice President',
    organisation: 'Medanta Lucknow',
    roleInEvent: 'Keynote Speaker & Executive Patron',
    sessionTitle: 'Message to the Group & Clinical Governance',
    sessionDateTime: 'July 26, 2026 - 09:30 AM',
    shortProfile: 'Dr Vikram Singh Chouhan is the Vice President of Operations at Medanta Lucknow, overseeing strategic healthcare initiatives and clinical governance.',
    contactDetails: 'vikram.chouhan@medanta.org',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  }
];

const SEED_COMMITTEE = [
  {
    id: 'comm_rohit_singh',
    fullName: 'Mr Rohit Singh',
    role: 'Assistant General Manager',
    designation: 'Assistant General Manager - HR / L&D',
    department: 'Human Resources & L&D',
    phoneNumber: '+91 99999 00001',
    email: 'rohit.singh@medanta.org',
    responsibility: 'Lead Organizing Convener overseeing event logistics, communication workshops, and session scheduling across all days.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'comm_pallavi_singh',
    fullName: 'Dr. Pallavi Singh',
    role: 'Senior Executive',
    designation: 'Senior Executive - L&D',
    department: 'Learning & Development',
    phoneNumber: '+91 99999 00002',
    email: 'pallavi.singh@medanta.org',
    responsibility: 'Organizing Convener managing workshop activities, group presentation evaluations, and participant coordination.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'comm_jaiprabha_agarwal',
    fullName: 'Ms Jaiprabha Agarwal',
    role: 'Deputy Nursing Superintendent',
    designation: 'Deputy Nursing Superintendent',
    department: 'Nursing Administration',
    phoneNumber: '+91 99999 00003',
    email: 'jaiprabha.a@medanta.org',
    responsibility: 'Organizing Committee Liaison facilitating ward incharge participation, clinical workflows, and attendance operations.',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'comm_priyanka_tripathi',
    fullName: 'Priyanka Tripathi',
    role: 'Organising Committee Member',
    designation: 'Nursing Administrator',
    department: 'Nursing Administration',
    phoneNumber: '+91 99999 00004',
    email: 'priyanka.t@medanta.org',
    responsibility: 'Organizing Committee Member supporting event registration, delegate liaison, and program feedback.',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400'
  }
];

const SEED_SCHEDULE = [
  // ==================== DAY 1: 10 JULY 2026 (FRIDAY) ====================
  {
    id: 'sch_day1_1',
    day: 'Day 1',
    time: '03:00 PM - 03:10 PM',
    title: 'Activity',
    speaker: 'Mr. Rohit Singh, Dr. Pallavi Singh',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Welcome and Warm up'
  },
  {
    id: 'sch_day1_2',
    day: 'Day 1',
    time: '03:10 PM - 03:30 PM',
    title: 'Communication',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
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
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Workshop',
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
    details: '• Wrap up'
  },

  // ==================== DAY 2: 11 JULY 2026 (SATURDAY) ====================
  {
    id: 'sch_day2_1',
    day: 'Day 2',
    time: '03:00 PM - 03:15 PM',
    title: 'Recap of the Previous Day',
    speaker: 'Team',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Recap of key learnings and takeaways from Day 1'
  },
  {
    id: 'sch_day2_2',
    day: 'Day 2',
    time: '03:15 PM - 04:15 PM',
    title: 'Managing Unit Performance',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Workshop',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Time management • Take joint ownership & accountability • Develop and pursue goals that cross departmental lines daily, monthly & yearly basis • Grooming • Managing change in the organization • Service excellence and communication'
  },
  {
    id: 'sch_day2_3',
    day: 'Day 2',
    time: '04:15 PM - 05:15 PM',
    title: 'Foundational Leadership',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
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
    type: 'Workshop',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Group Making'
  },

  // ==================== DAY 3: 17 JULY 2026 (FRIDAY) ====================
  {
    id: 'sch_day3_1',
    day: 'Day 3',
    time: '03:00 PM - 03:15 PM',
    title: 'Recap of the Previous day',
    speaker: 'Team',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Candidates'
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
    details: '• Planning the Presentation • Designing Effective Slides • Using Visuals & Charts • Presentation Tips • Common Mistakes to Avoid • Conclusion'
  },
  {
    id: 'sch_day3_3',
    day: 'Day 3',
    time: '04:15 PM - 05:00 PM',
    title: 'RCA',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Lecture',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Fish bone analysis'
  },
  {
    id: 'sch_day3_4',
    day: 'Day 3',
    time: '05:00 PM - 06:00 PM',
    title: 'Coaching',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Lecture',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Coaching'
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
    details: 'How to Make an Assignment: • Choose and understand the topic • Collect information from reliable sources • Organize the content with an introduction, main body, and conclusion • Use clear language, proper formatting, and cite references if required'
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
    details: '• Wrap UP'
  },

  // ==================== DAY 4: 24 JULY 2026 (FRIDAY) ====================
  {
    id: 'sch_day4_1',
    day: 'Day 4',
    time: '03:00 PM - 03:15 PM',
    title: 'Recap & Reflection',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Recapping key learnings from Day 1 to Day 3'
  },
  {
    id: 'sch_day4_2',
    day: 'Day 4',
    time: '03:15 PM - 03:30 PM',
    title: 'Orientation for Group Presentations',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Workshop',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Overview of Day 4 activities • Presentation & evaluation process • Guidelines & criteria'
  },
  {
    id: 'sch_day4_3',
    day: 'Day 4',
    time: '03:30 PM - 03:40 PM',
    title: 'Group Presentation #1',
    speaker: 'Evaluation by Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Keynote',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Presentation by Group 1 • Followed by Q&A'
  },
  {
    id: 'sch_day4_4',
    day: 'Day 4',
    time: '03:40 PM - 03:50 PM',
    title: 'Group Presentation #2',
    speaker: 'Evaluation by Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Keynote',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Presentation by Group 2 • Followed by Q&A'
  },
  {
    id: 'sch_day4_5',
    day: 'Day 4',
    time: '03:50 PM - 04:00 PM',
    title: 'Group Presentation #3',
    speaker: 'Evaluation by Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Keynote',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Presentation by Group 3 • Followed by Q&A'
  },
  {
    id: 'sch_day4_6',
    day: 'Day 4',
    time: '04:00 PM - 04:10 PM',
    title: 'Group Presentation #4',
    speaker: 'Evaluation by Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Keynote',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Presentation by Group 4 • Followed by Q&A'
  },
  {
    id: 'sch_day4_7',
    day: 'Day 4',
    time: '04:10 PM - 04:20 PM',
    title: 'Group Presentation #5',
    speaker: 'Evaluation by Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Keynote',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Presentation by Group 5 • Followed by Q&A'
  },
  {
    id: 'sch_day4_8',
    day: 'Day 4',
    time: '04:20 PM - 04:40 PM',
    title: 'Feedback & Key Takeaways',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Workshop',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Constructive feedback to all groups • Key learning highlights • Strengths & improvement opportunities'
  },
  {
    id: 'sch_day4_9',
    day: 'Day 4',
    time: '04:40 PM - 05:45 PM',
    title: 'Open Discussion',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Workshop',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Reflections from participants • Sharing of learnings • Clarifications & insights'
  },
  {
    id: 'sch_day4_10',
    day: 'Day 4',
    time: '05:45 PM - 06:00 PM',
    title: 'Wrap Up & Closing',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Activity',
    venue: '10th Floor ITC Department',
    status: 'Completed',
    details: '• Key Takeaways • Action Points • Final Thoughts & Motivation • Vote of Thanks'
  },

  // ==================== DAY 5: 26 JULY 2026 (SUNDAY) ====================
  {
    id: 'sch_day5_1',
    day: 'Day 5',
    time: '08:30 AM - 09:00 AM',
    title: 'Registration',
    speaker: 'Organising Committee',
    type: 'Activity',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Participant Registration'
  },
  {
    id: 'sch_day5_2',
    day: 'Day 5',
    time: '09:00 AM - 09:15 AM',
    title: 'Welcome Address & Lamp Lighting',
    speaker: 'Ms. Precila Fernandes (Director Nursing)',
    type: 'Keynote',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Welcome Address & Lamp Lighting'
  },
  {
    id: 'sch_day5_3',
    day: 'Day 5',
    time: '09:15 AM - 09:30 AM',
    title: 'Programme Overview & Workshop Recap',
    speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
    type: 'Workshop',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Programme Overview & Workshop Recap'
  },
  {
    id: 'sch_day5_4',
    day: 'Day 5',
    time: '09:30 AM - 10:00 AM',
    title: 'Message to the Group & Clinical Governance',
    speaker: 'Dr. Vikram Singh Chouhan (Vice President – Operations)',
    type: 'Keynote',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Organization\'s Expectations'
  },
  {
    id: 'sch_day5_5',
    day: 'Day 5',
    time: '10:00 AM - 10:15 AM',
    title: 'Tea Break',
    speaker: '—',
    type: 'Break',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Tea Break'
  },
  {
    id: 'sch_day5_6',
    day: 'Day 5',
    time: '10:15 AM - 12:00 PM',
    title: 'The Role of Middle Management',
    speaker: 'Dr. Vinita Yadav (AVP Corporate - L&D)',
    type: 'Lecture',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Middle Management Skills • Managing Upward and Downward • Bridging Leadership and Teams • Effective Leadership for Middle Managers • Aligning Top Management Vision with Team Execution'
  },
  {
    id: 'sch_day5_7',
    day: 'Day 5',
    time: '12:00 PM - 01:00 PM',
    title: 'Nursing Leadership Skills',
    speaker: 'Ms. Precila Fernandes (Director Nursing)',
    type: 'Lecture',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Personal Branding for Nurse Leaders • Leadership Marketing & Professional Image • Practical Implementation of Leadership Skills'
  },
  {
    id: 'sch_day5_8',
    day: 'Day 5',
    time: '01:00 PM - 02:00 PM',
    title: 'Lunch Break',
    speaker: '—',
    type: 'Break',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Lunch Break'
  },
  {
    id: 'sch_day5_9',
    day: 'Day 5',
    time: '02:00 PM - 02:30 PM',
    title: 'Group Assignment Presentation',
    speaker: 'Delegates',
    type: 'Workshop',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Presentation by Three Groups'
  },
  {
    id: 'sch_day5_10',
    day: 'Day 5',
    time: '02:30 PM - 03:30 PM',
    title: 'SWOT Analysis',
    speaker: 'Dr. Vinita Yadav (AVP Corporate - L&D)',
    type: 'Workshop',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Interactive SWOT Analysis'
  },
  {
    id: 'sch_day5_11',
    day: 'Day 5',
    time: '03:30 PM - 04:00 PM',
    title: 'Team Building Activity',
    speaker: 'Delegates',
    type: 'Activity',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Interactive Team-Building Activity'
  },
  {
    id: 'sch_day5_12',
    day: 'Day 5',
    time: '04:00 PM - 04:15 PM',
    title: 'Tea Break',
    speaker: '—',
    type: 'Break',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Tea Break'
  },
  {
    id: 'sch_day5_13',
    day: 'Day 5',
    time: '04:15 PM - 05:00 PM',
    title: 'Group Assignment Presentation',
    speaker: 'Delegates',
    type: 'Workshop',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Presentation by Three Groups'
  },
  {
    id: 'sch_day5_14',
    day: 'Day 5',
    time: '05:00 PM - 06:00 PM',
    title: 'Discussion & Conclusion',
    speaker: 'Ms. Precila Fernandes (Director Nursing)',
    type: 'Keynote',
    venue: 'Savotel Hotel, Lucknow',
    status: 'Upcoming',
    details: '• Key Takeaways • Action Plan • Closing Remarks & Vote of Thanks'
  }
];

const GALLERY_SEED_DATA = [
  {
    id: "gal_1",
    title: "Opening Ceremony & Keynote Address",
    category: "Day 1",
    description: "Dr. Vinita Yadav delivering the inaugurative lecture on strategic healthcare leadership.",
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    order: 1,
    createdAt: "2026-07-24T09:00:00.000Z"
  },
  {
    id: "gal_2",
    title: "Clinical Workflow & Patient Safety Workshop",
    category: "Day 1",
    description: "Middle-level incharges engaging in interactive root cause analysis and SafeTrack clinical simulations.",
    url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    order: 2,
    createdAt: "2026-07-24T11:30:00.000Z"
  },
  {
    id: "gal_3",
    title: "Team Building & Crisis Management Exercises",
    category: "Day 2",
    description: "Nursing supervisors collaborating on emergency response protocols and unit resource allocation.",
    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    order: 3,
    createdAt: "2026-07-25T10:00:00.000Z"
  },
  {
    id: "gal_4",
    title: "Executive Q&A Panel & Capacity Building",
    category: "Day 2",
    description: "Interactive session with HR leadership & Deputy Nursing Superintendents on staff retention and mentorship.",
    url: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80",
    order: 4,
    createdAt: "2026-07-25T14:00:00.000Z"
  },
  {
    id: "gal_5",
    title: "Valedictory Ceremony & Certificate Presentation",
    category: "Valedictory & Awards",
    description: "Honoring Batch 1 participants for successful completion of the Nursing Leadership Program.",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    order: 5,
    createdAt: "2026-07-26T16:00:00.000Z"
  }
];

function getLocalGallery() {
  const local = localStorage.getItem(LOCAL_GALLERY_KEY);
  if (local === null) return GALLERY_SEED_DATA;
  try {
    const parsed = JSON.parse(local);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (e) {
    return [];
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

let galleryDraggedRowIndex = null;

// SUB-TAB: Event Gallery Manager CRUD
async function fetchAdminGallery() {
  try {
    const res = await fetch(`${API_BASE}/gallery`);
    if (res.ok) {
      const text = await res.text();
      if (!text.trim().startsWith('<!DOCTYPE')) {
        const data = JSON.parse(text);
        if (Array.isArray(data)) {
          appState.gallery = data;
          saveLocalGallery(data);
          setGalleryLocalOnly(false);
          renderAdminGalleryTable();
          return;
        }
      }
    }
  } catch (err) {
    console.warn('Loading gallery from localStorage fallback:', err.message);
  }

  appState.gallery = getLocalGallery();
  renderAdminGalleryTable();
}

function renderAdminGalleryTable() {
  const tableBody = document.querySelector('#admin-gallery-table tbody');
  const noDataEl = document.getElementById('gallery-table-no-data');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';

  if (!appState.gallery || appState.gallery.length === 0) {
    if (noDataEl) noDataEl.classList.remove('hidden');
    return;
  }
  
  if (noDataEl) noDataEl.classList.add('hidden');
  
  appState.gallery.forEach((item, index) => {
    const row = document.createElement('tr');
    row.className = 'admin-drag-row';
    row.setAttribute('draggable', 'true');
    row.setAttribute('data-index', index);

    const displayCat = (item.category && item.category !== 'Blank' && item.category !== 'None') ? item.category : 'General / Pre-Event';
    const isFirst = index === 0;

    row.innerHTML = `
      <td style="text-align: center; white-space: nowrap; width: 100px;">
        <div style="display: inline-flex; align-items: center; gap: 4px;">
          <span class="drag-handle" title="Drag to reorder" style="cursor: grab; color: var(--text-muted); padding: 2px 4px;"><i data-lucide="grip-vertical"></i></span>
          <button class="btn-reorder-up" onclick="moveGalleryItemUp(${index})" title="Move Up" ${isFirst ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''}><i data-lucide="chevron-up"></i></button>
          <button class="btn-reorder-down" onclick="moveGalleryItemDown(${index})" title="Move Down" ${index === appState.gallery.length - 1 ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''}><i data-lucide="chevron-down"></i></button>
        </div>
      </td>
      <td style="width: 80px;"><img src="${getPhotoUrl(item.url) || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=80'}" style="width: 60px; height: 40px; object-fit: cover; border-radius: var(--radius-sm);"></td>
      <td style="font-weight: 600; color: var(--primary);">${item.title || 'Untitled Photograph'} ${isFirst ? '<span class="badge badge-gold" style="font-size: 0.65rem; margin-left: 6px; text-transform: uppercase;">★ 1ST FEATURED</span>' : ''}</td>
      <td><span class="badge badge-gold">${displayCat}</span></td>
      <td style="font-size: 0.85rem; color: var(--text-muted);">${item.description || '-'}</td>
      <td class="table-actions" style="text-align: right;">
        <button class="tbl-btn tbl-btn-edit" onclick="editGalleryItem('${item.id}')" title="Edit Item"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" onclick="deleteGalleryItem('${item.id}')" title="Delete Item"><i data-lucide="trash-2"></i></button>
      </td>
    `;

    // HTML5 Drag & Drop Events
    row.addEventListener('dragstart', (e) => {
      galleryDraggedRowIndex = index;
      row.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', index);
    });

    row.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      row.classList.add('drag-over');
    });

    row.addEventListener('dragleave', () => {
      row.classList.remove('drag-over');
    });

    row.addEventListener('drop', (e) => {
      e.preventDefault();
      row.classList.remove('drag-over');
      const targetIndex = index;
      if (galleryDraggedRowIndex !== null && galleryDraggedRowIndex !== targetIndex) {
        const movedItem = appState.gallery.splice(galleryDraggedRowIndex, 1)[0];
        appState.gallery.splice(targetIndex, 0, movedItem);
        saveGalleryOrder();
      }
    });

    row.addEventListener('dragend', () => {
      row.classList.remove('dragging');
      galleryDraggedRowIndex = null;
      document.querySelectorAll('.admin-drag-row').forEach(r => r.classList.remove('drag-over'));
    });

    tableBody.appendChild(row);
  });
  
  lucide.createIcons();
}

async function moveGalleryItemUp(index) {
  if (index <= 0 || !appState.gallery || !appState.gallery[index]) return;
  const temp = appState.gallery[index];
  appState.gallery[index] = appState.gallery[index - 1];
  appState.gallery[index - 1] = temp;
  await saveGalleryOrder();
}

async function moveGalleryItemDown(index) {
  if (!appState.gallery || index >= appState.gallery.length - 1 || !appState.gallery[index]) return;
  const temp = appState.gallery[index];
  appState.gallery[index] = appState.gallery[index + 1];
  appState.gallery[index + 1] = temp;
  await saveGalleryOrder();
}

async function saveGalleryOrder() {
  saveLocalGallery(appState.gallery);
  renderGalleryGrid();
  renderAdminGalleryTable();
  
  try {
    const res = await fetch(`${API_BASE}/gallery/reorder`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      },
      body: JSON.stringify({ items: appState.gallery })
    });

    if (res.ok) {
      showToast('Gallery image display order updated successfully!');
    } else {
      console.warn('Reorder response status:', res.status);
    }
  } catch (err) {
    console.warn('Reorder API sync warning:', err.message);
  }
  updateAdminSpaceIndicator();
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
  let uploadedFileSize = 0;
  
  if (fileInput.files.length > 0) {
    uploadedFileSize = fileInput.files[0].size;
    const uploadedUrl = await uploadFileToServer(fileInput.files[0]);
    if (uploadedUrl) url = uploadedUrl;
  }
  
  if (!url) {
    showToast('Please provide an image URL or upload an image file.', 'error');
    return;
  }
  
  const payload = { title, category, description, url };
  const isEdit = !!id;
  
  if (!uploadedFileSize) {
    uploadedFileSize = (new Blob([JSON.stringify(payload)]).size) + (url ? url.length : 0);
  }

  // Real-Time Storage Tracker optimistic update
  if (!isEdit) {
    updateStorageTracker(uploadedFileSize, 'ADD');
  }

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
    if (res.ok) {
      setGalleryLocalOnly(false);
    } else {
      throw new Error(`Server returned status ${res.status}`);
    }
  } catch (err) {
    console.warn('Backend API error, enabling gallery local-only mode:', err);
    setGalleryLocalOnly(true);
  }
  
  if (fileInput) fileInput.value = '';
  
  showToast(isEdit ? 'Gallery item updated successfully.' : 'Gallery item added successfully.', 'success');
  closeModal('admin-gallery-modal');
  await fetchAdminGallery();
  await refreshPublicData();
  await updateAdminSpaceIndicator(); // Sync exact backend storage size
}

async function deleteGalleryItem(id) {
  const confirmDel = confirm('Are you sure you want to delete this event photograph?');
  if (!confirmDel) return;

  const targetItem = (appState.gallery || []).find(g => g.id === id);
  const deletedBytes = targetItem 
    ? (new Blob([JSON.stringify(targetItem)]).size + (targetItem.url ? targetItem.url.length : 0)) 
    : (150 * 1024);
  
  updateStorageTracker(deletedBytes, 'SUBTRACT');

  // Immediately filter appState.gallery and sync local storage
  appState.gallery = (appState.gallery || []).filter(g => g.id !== id);
  saveLocalGallery(appState.gallery);
  renderAdminGalleryTable();
  
  try {
    const res = await fetch(`${API_BASE}/gallery/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader()
    });
    if (res.ok) {
      setGalleryLocalOnly(false);
    } else {
      throw new Error(`Server returned status ${res.status}`);
    }
  } catch (err) {
    console.warn('Backend API error, enabling gallery local-only mode:', err);
    setGalleryLocalOnly(true);
  }
  
  showToast('Gallery photograph deleted successfully.', 'success');
  await fetchAdminGallery();
  await refreshPublicData();
  await updateAdminSpaceIndicator(); // Sync exact backend storage size
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

// Register Cross-Browser Service Worker (iOS Safari / Android Chrome / Desktop)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      console.log('[ServiceWorker] Successfully registered with scope:', reg.scope);
    }).catch((err) => {
      console.warn('[ServiceWorker] Registration error (graceful fallback):', err.message);
    });
  });
}

// Splash Screen & Preloading Controller
function setSplashProgress(percentage, statusText) {
  const bar = document.getElementById('splash-progress-bar');
  const txt = document.getElementById('splash-status-text');
  if (bar) bar.style.width = `${percentage}%`;
  if (txt && statusText) txt.textContent = statusText;
}

function dismissSplashScreen() {
  const splash = document.getElementById('app-splash-screen');
  if (!splash) return;
  
  setSplashProgress(100, '✓ Complete & Ready');
  const doneBadge = document.getElementById('splash-done-badge');
  if (doneBadge) {
    doneBadge.style.display = 'flex';
  }

  // Smooth Done checkmark animation display before playing web app
  setTimeout(() => {
    splash.style.opacity = '0';
    splash.style.transform = 'scale(0.98)';
    splash.style.visibility = 'hidden';
    setTimeout(() => {
      if (splash.parentNode) splash.parentNode.removeChild(splash);
    }, 500);
  }, 450);
}

// Real-Time Cross-Device Auto-Sync Engine (5-second polling across Render SQL DB, Vercel & client sessions)
let lastDataHash = '';

function calculateAppStateHash(data) {
  try {
    return JSON.stringify({
      sch: (data.schedule || []).length,
      gal: (data.gallery || []).length,
      lead: (data.leaders || []).length,
      comm: (data.committee || []).length,
      ann: (data.announcements || []).length,
      res: (data.resources || []).length,
      ev: (data.event_days || []).length,
      sett: data.settings ? (data.settings.eventState + (data.settings.eventDate || '')) : ''
    });
  } catch (e) {
    return '';
  }
}

function startRealtimeAutoSync() {
  setInterval(async () => {
    try {
      // Pause background sync if any admin modal or input form is currently active to prevent typing interruption
      const isModalOpen = document.querySelector('.modal-overlay.active');
      if (isModalOpen) return;

      const res = await fetch(`${API_BASE}/bootstrap`);
      if (!res.ok) return;
      
      const text = await res.text();
      if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) return;

      const data = JSON.parse(text);
      const currentHash = calculateAppStateHash(data);

      if (lastDataHash && currentHash !== lastDataHash) {
        console.log('[RealtimeSync] Database change detected! Syncing frontend view...');
        lastDataHash = currentHash;
        await refreshPublicData();
        
        // Re-render active admin tables if logged into Admin Dashboard
        if (appState.isLoggedIn) {
          if (appState.currentAdminTab === 'db-gallery') fetchAdminGallery();
          if (appState.currentAdminTab === 'db-profiles') fetchAdminProfilesList();
          if (appState.currentAdminTab === 'db-schedule') fetchAdminScheduleList();
          if (appState.currentAdminTab === 'db-announcements') fetchAdminAnnouncementsList();
          if (appState.currentAdminTab === 'db-overview') fetchAdminOverviewList();
        }
      } else if (!lastDataHash) {
        lastDataHash = currentHash;
      }
    } catch (err) {
      // Graceful offline fallback
    }
  }, 5000);
}

// Initialize Application
async function initApp() {
  setSplashProgress(25, 'Preloading Configuration...');
  
  // Purge any stale local event_days, schedule, and old sample gallery cache on load
  localStorage.removeItem('nlp_local_event_days');
  localStorage.removeItem('nlp_local_schedule');
  localStorage.removeItem(LOCAL_GALLERY_KEY);

  // Load configuration
  await initConfig();
  setSplashProgress(50, 'Hydrating Event Data & Assets...');

  // Pre-render & hydrate data with Promise.all for speed
  try {
    await Promise.all([
      fetchSettings(),
      refreshPublicData()
    ]);
  } catch (err) {
    console.warn('Pre-rendering network notice (using offline cache fallback):', err.message);
  }
  setSplashProgress(85, 'Rendering Navigation & Layouts...');

  // Setup Router & Navigation
  setupRouter();
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

  // Start Real-Time Background Cross-Device Auto-Sync Engine
  startRealtimeAutoSync();

  // Setup Global Modal Backdrop, Close Buttons & Escape Key Listeners
  const handleUniversalModalClose = (e) => {
    // 1. If backdrop overlay clicked
    if (e.target && e.target.classList && e.target.classList.contains('modal-overlay')) {
      e.preventDefault();
      e.stopPropagation();
      e.target.classList.remove('active');
      if (!document.querySelector('.modal-overlay.active')) {
        document.body.classList.remove('nav-drawer-open', 'modal-open');
      }
      return;
    }
    // 2. If any close button / X icon clicked across the web application
    const closeBtn = e.target ? e.target.closest('.modal-close-btn, .close-btn, .modal-close, .profile-close, [data-dismiss="modal"]') : null;
    if (closeBtn) {
      e.preventDefault();
      e.stopPropagation();
      const modal = closeBtn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
      } else {
        closeModal();
      }
      if (!document.querySelector('.modal-overlay.active')) {
        document.body.classList.remove('nav-drawer-open', 'modal-open');
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

  // Dismiss splash screen smoothly after layout render
  dismissSplashScreen();
}

// ==========================================================================
// DATA FETCHING & SYNCHRONIZATION
// ==========================================================================
const DEFAULT_SETTINGS = {
  eventState: 'Upcoming',
  eventDate: '2026-07-26',
  eventDateDisplay: '10-11 July & 26 July 2026',
  eventVenue: '10th Floor ITC Department (In-House) & Outbound Facility',
  lastUpdatedPdf: new Date().toISOString(),
  pdfVersion: '1.0'
};

async function fetchSettings() {
  try {
    const res = await fetch(`${API_BASE}/settings`);
    if (res.ok) {
      const text = await res.text();
      if (!text.trim().startsWith('<!DOCTYPE') && !text.trim().startsWith('<html')) {
        appState.settings = { ...DEFAULT_SETTINGS, ...JSON.parse(text) };
      }
    }
  } catch (err) {
    console.warn('Using default settings fallback:', err.message);
  }
  
  if (!appState.settings || Object.keys(appState.settings).length === 0) {
    appState.settings = { ...DEFAULT_SETTINGS };
  }
  
  // Update Hero elements based on retrieved settings
  const displayDate = appState.settings.eventDateDisplay || formatDateString(appState.settings.eventDate);
  const heroDateEl = document.getElementById('hero-date-text');
  if (heroDateEl) heroDateEl.textContent = displayDate;
  const heroVenueEl = document.getElementById('hero-venue-text');
  if (heroVenueEl) heroVenueEl.textContent = appState.settings.eventVenue || '10th Floor ITC Department (In-House) & Outbound Facility';
  
  // Update Details section elements based on retrieved settings
  const detailsDate = document.getElementById('details-date-text');
  if (detailsDate) detailsDate.textContent = displayDate;
  const detailsVenue = document.getElementById('details-venue-text');
  if (detailsVenue) detailsVenue.textContent = appState.settings.eventVenue || '10th Floor ITC Department (In-House) & Outbound Facility';
  
  // Update Hero Download PDF button href if uploaded
  const heroPdfBtn = document.getElementById('hero-download-pdf-btn');
  if (heroPdfBtn && appState.settings.pdfUrl) {
    heroPdfBtn.setAttribute('href', appState.settings.pdfUrl);
  }
  
  updateEventStateWidget();
}

async function refreshPublicData() {
  let bootstrapSuccess = false;
  try {
    const res = await fetch(`${API_BASE}/bootstrap`);
    if (res.ok) {
      const text = await res.text();
      if (!text.trim().startsWith('<!DOCTYPE') && !text.trim().startsWith('<html')) {
        const data = JSON.parse(text);
        if (data.settings) appState.settings = { ...appState.settings, ...data.settings };
        if (data.schedule && Array.isArray(data.schedule) && data.schedule.length >= 35) appState.schedule = data.schedule; else appState.schedule = SEED_SCHEDULE;
        if (data.announcements) appState.announcements = data.announcements;
        if (data.leaders && Array.isArray(data.leaders) && data.leaders.length > 0) appState.leaders = data.leaders; else appState.leaders = SEED_LEADERS;
        if (data.committee && Array.isArray(data.committee) && data.committee.length > 0) appState.committee = data.committee; else appState.committee = SEED_COMMITTEE;
        if (data.resources) appState.resources = data.resources;
        if (data.overview) appState.overview = data.overview;
        if (data.gallery && !isGalleryLocalOnly()) appState.gallery = data.gallery; else if (isGalleryLocalOnly()) appState.gallery = getLocalGallery();
        if (data.event_days && Array.isArray(data.event_days) && data.event_days.length >= 5) appState.event_days = data.event_days; else appState.event_days = SEED_EVENT_DAYS;
        bootstrapSuccess = true;
      }
    }
  } catch (err) {
    console.warn('Bootstrap fetch fallback active:', err.message);
  }

  if (!bootstrapSuccess) {
    const fetchAndSet = async (endpoint, stateKey) => {
      try {
        if (endpoint === 'gallery' && isGalleryLocalOnly()) {
          throw new Error('Gallery local-only mode active');
        }
        const res = await fetch(`${API_BASE}/${endpoint}`);
        if (res.ok) {
          const text = await res.text();
          if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
            throw new Error(`Endpoint /${endpoint} returned HTML document instead of JSON data`);
          }
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed) && parsed.length > 0) {
            if (endpoint === 'schedule' && parsed.length < 35) appState.schedule = SEED_SCHEDULE;
            else if (endpoint === 'event_days' && parsed.length < 5) appState.event_days = SEED_EVENT_DAYS;
            else appState[stateKey] = parsed;
          } else {
            if (endpoint === 'schedule') appState.schedule = SEED_SCHEDULE;
            else if (endpoint === 'event_days') appState.event_days = SEED_EVENT_DAYS;
            else if (endpoint === 'leaders') appState.leaders = SEED_LEADERS;
            else if (endpoint === 'committee') appState.committee = SEED_COMMITTEE;
            else appState[stateKey] = parsed;
          }
        } else {
          if (endpoint === 'gallery') appState.gallery = getLocalGallery();
          else if (endpoint === 'schedule') appState.schedule = SEED_SCHEDULE;
          else if (endpoint === 'event_days') appState.event_days = SEED_EVENT_DAYS;
          else if (endpoint === 'leaders') appState.leaders = SEED_LEADERS;
          else if (endpoint === 'committee') appState.committee = SEED_COMMITTEE;
          else appState[stateKey] = [];
        }
      } catch (err) {
        if (endpoint === 'gallery') appState.gallery = getLocalGallery();
        else if (endpoint === 'schedule') appState.schedule = SEED_SCHEDULE;
        else if (endpoint === 'event_days') appState.event_days = SEED_EVENT_DAYS;
        else if (endpoint === 'leaders') appState.leaders = SEED_LEADERS;
        else if (endpoint === 'committee') appState.committee = SEED_COMMITTEE;
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
  }

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
    } else if (viewName === 'digital-tools') {
      initSafeTrack();
    } else if (viewName === 'swot') {
      initSwot();
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
  
  if (!drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('nav-drawer-open');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('nav-drawer-open');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  };

  const toggleDrawer = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  if (trigger) {
    trigger.onclick = toggleDrawer;
  }

  if (close) {
    close.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
    };
  }

  if (overlay) {
    overlay.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
    };
  }

  // Close drawer on mobile link selection
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.onclick = () => {
      closeDrawer();
    };
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

// Live session real-time status calculator helper based on exact timestamps
function calculateSessionLiveStatus(item, dateStr, nowObj = new Date()) {
  if (!item) return 'Upcoming';
  
  // Resolve item dateStr if missing
  if (!dateStr && item.day) {
    const dayNum = parseInt(item.day.replace(/[^0-9]/g, ''), 10);
    const dayConfig = (appState.event_days || SEED_EVENT_DAYS).find(d => Number(d.dayNumber) === dayNum);
    if (dayConfig && dayConfig.date) {
      dateStr = dayConfig.date;
    }
  }
  
  const timeStr = item.time || '';
  const parts = timeStr.split('-').map(s => s.trim());
  
  const parseDateTime = (tStr) => {
    if (!tStr) return null;
    const match = tStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
    if (!match) return null;
    let h = parseInt(match[1], 10);
    const m = parseInt(match[2], 10);
    const ampm = match[3] ? match[3].toUpperCase() : null;
    if (ampm === 'PM' && h < 12) h += 12;
    if (ampm === 'AM' && h === 12) h = 0;
    
    if (dateStr) {
      const [yr, mo, dy] = dateStr.split('-').map(Number);
      return new Date(yr, mo - 1, dy, h, m, 0, 0);
    } else {
      const d = new Date(nowObj);
      d.setHours(h, m, 0, 0);
      return d;
    }
  };
  
  let start = parseDateTime(parts[0]);
  let end = parts.length > 1 ? parseDateTime(parts[1]) : null;
  
  if (start && !end) {
    end = new Date(start.getTime() + 30 * 60 * 1000); // 30 min session slot fallback
  }
  
  if (!start || !end) {
    if (dateStr) {
      const year = nowObj.getFullYear();
      const month = String(nowObj.getMonth() + 1).padStart(2, '0');
      const day = String(nowObj.getDate()).padStart(2, '0');
      const todayStr = `${year}-${month}-${day}`;
      if (dateStr < todayStr) return 'Completed';
      if (dateStr > todayStr) return 'Upcoming';
    }
    return item.status || 'Upcoming';
  }
  
  // Real-time timestamp comparison logic:
  // Upcoming: currentTime < startTime
  // Live: currentTime >= startTime && currentTime <= endTime
  // Completed: currentTime > endTime
  if (nowObj < start) {
    return 'Upcoming';
  } else if (nowObj >= start && nowObj <= end) {
    return 'Live Now';
  } else {
    return 'Completed';
  }
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
  
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`; // "YYYY-MM-DD" local date string
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
  
  filteredSchedule.forEach(item => {
    const row = document.createElement('div');
    row.className = 'timeline-row';
    row.setAttribute('onclick', `openSessionDetail('${item.id}')`);
    
    // Calculate status dynamically based on real-time currentTime comparison against startTime and endTime
    const statusText = calculateSessionLiveStatus(item, activeDayDate, now);
    
    let statusClass = 'status-upcoming';
    if (statusText === 'Live Now' || statusText === 'Live') statusClass = 'status-live';
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

// Scheduled background timer for real-time schedule status updates (every 10 seconds)
setInterval(() => {
  const container = document.getElementById('schedule-timeline');
  if (container && container.children.length > 0) {
    renderScheduleTimeline();
  }
}, 10000);

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

// Strict Whitelist Filter for Official Medanta Profiles & Admin Dynamic Additions
const ALLOWED_PROFILE_NAMES = [
  'dr. vinita yadav',
  'vinita yadav',
  'ms precila fernandes',
  'precila fernandes',
  'dr vikram singh chouhan',
  'vikram singh chouhan',
  'mr rohit singh',
  'rohit singh',
  'dr. pallavi singh',
  'pallavi singh',
  'ms jaiprabha agarwal',
  'jaiprabha agarwal',
  'priyanka tripathi'
];

function isProfileAllowed(item) {
  if (!item) return false;
  
  // Rule 1: Always allow any new profile added dynamically via the Admin Panel (user-created IDs)
  if (item.id && (item.id.startsWith('prof_') || item.id.startsWith('custom_') || item.id.startsWith('user_'))) {
    return true;
  }
  
  // Rule 2: For initial seed items or items fetched from disk/API, check whitelist
  const nameLower = (item.fullName || '').trim().toLowerCase();
  const isWhitelisted = ALLOWED_PROFILE_NAMES.some(allowed => nameLower.includes(allowed));
  if (isWhitelisted) return true;

  // Allow dynamically created items with timestamp IDs (e.g. lead_178491238, com_178491238, comm_178491238)
  if (item.id && /^(lead_|com_|comm_)[0-9]{6,}$/.test(item.id)) {
    return true;
  }

  // Filter out any unapproved/deleted sample data
  return false;
}

// Populate Leaders, Speakers, Committee Cards
function renderLeadersAndCommittee() {
  const leadersGrid = document.getElementById('leaders-cards-container');
  const committeeGrid = document.getElementById('committee-cards-container');
  
  // Filter appState to only allowed whitelisted + dynamic admin profiles
  const allowedLeaders = (appState.leaders || []).filter(isProfileAllowed);
  const allowedCommittee = (appState.committee || []).filter(isProfileAllowed);

  // 1. Render Leaders & Speakers
  if (leadersGrid) {
    if (allowedLeaders.length === 0) {
      leadersGrid.innerHTML = '<p class="text-center">No leadership profiles populated.</p>';
    } else {
      renderProfileCardsFiltered('all');
      
      // Setup click events on filters
      const filterBtns = document.querySelectorAll('#view-leadership .category-filters .filter-btn');
      filterBtns.forEach(btn => {
        btn.onclick = (e) => {
          filterBtns.forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          const filter = e.target.getAttribute('data-filter');
          renderProfileCardsFiltered(filter);
        };
      });
    }
  }

  // 2. Render Organizing Committee
  if (committeeGrid) {
    if (allowedCommittee.length === 0) {
      committeeGrid.innerHTML = '<p class="text-center">No committee profiles populated.</p>';
    } else {
      committeeGrid.innerHTML = '';
      allowedCommittee.forEach(com => {
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
  
  const allowedLeaders = (appState.leaders || []).filter(isProfileAllowed);
  const filtered = category === 'all' 
    ? allowedLeaders 
    : allowedLeaders.filter(l => l.category === category);
    
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
    document.body.classList.add('modal-open');
  }
}

function closeModal(modalId) {
  if (!modalId) {
    document.querySelectorAll('.modal-overlay').forEach(o => o.classList.remove('active'));
    document.body.classList.remove('nav-drawer-open', 'modal-open');
    return;
  }
  const el = typeof modalId === 'string' ? document.getElementById(modalId) : modalId;
  if (el) {
    el.classList.remove('active');
  } else {
    document.querySelectorAll('.modal-overlay').forEach(o => o.classList.remove('active'));
  }
  if (!document.querySelector('.modal-overlay.active')) {
    document.body.classList.remove('nav-drawer-open', 'modal-open');
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
    document.getElementById('lead-modal-topic').textContent = (lead.topic && lead.topic !== 'N/A') ? lead.topic : (lead.id === 'lead_vinita_yadav' ? 'Middle Management Skills & SWOT Analysis' : 'N/A');
    document.getElementById('lead-modal-objective').textContent = (lead.learningObjective && lead.learningObjective !== 'N/A') ? lead.learningObjective : (lead.id === 'lead_vinita_yadav' ? 'Middle Management Skills, Managing Upward and Downward, Bridging Leadership and Teams.' : 'N/A');
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
  
  if (!appState.gallery || appState.gallery.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.6); border-radius: var(--radius-lg); border: 1px dashed rgba(0,0,0,0.12);">
        <i data-lucide="image-off" style="width: 48px; height: 48px; margin-bottom: 14px; color: var(--accent); opacity: 0.8;"></i>
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-dark); margin: 0 0 6px 0;">No Event Photographs Uploaded Yet</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0; max-width: 440px; margin: 0 auto; line-height: 1.5;">Event photographs will appear here in real time as they are registered via the Admin Gallery Manager.</p>
      </div>
    `;
    renderGallerySlideshow();
    lucide.createIcons();
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
let heroTouchStartX = 0;
let heroTouchEndX = 0;

function renderGallerySlideshow() {
  const container = document.getElementById('gallery-slideshow-container');
  if (!container) return;

  if (!appState.gallery || appState.gallery.length === 0) {
    container.innerHTML = '';
    return;
  }

  if (gallerySlideshowTimer) {
    clearInterval(gallerySlideshowTimer);
    gallerySlideshowTimer = null;
  }

  const items = appState.gallery;
  if (gallerySlideshowCurrentIdx >= items.length) {
    gallerySlideshowCurrentIdx = 0;
  }

  const currentItem = items[gallerySlideshowCurrentIdx];

  let dotsHtml = items.map((item, idx) => 
    `<span class="hero-indicator-dot ${idx === gallerySlideshowCurrentIdx ? 'active' : ''}" onclick="event.stopPropagation(); jumpGallerySlideshow(${idx})" title="Photo ${idx + 1}"></span>`
  ).join('');

  container.innerHTML = `
    <div class="hero-gallery-wrapper" id="hero-gallery-wrapper" onclick="openGalleryModal('${currentItem.id}')" title="Click to view full photo">
      <!-- 1. Ambient Blurred Background -->
      <img id="slideshow-active-bg" class="hero-gallery-bg" src="${getPhotoUrl(currentItem.url) || ''}" alt="">
      <div class="hero-gallery-ambient-overlay"></div>
      
      <!-- 2. Crisp Hero Contain Image -->
      <div class="hero-gallery-img-container">
        <img id="slideshow-active-img" class="hero-gallery-img active" src="${getPhotoUrl(currentItem.url) || ''}" alt="${currentItem.title || 'Event Photograph'}">
      </div>
      
      <!-- 3. Floating Top-Right Fullscreen Button (⛶) -->
      <button class="hero-fullscreen-btn" onclick="event.stopPropagation(); openHeroFullscreen()" title="Open Fullscreen (⛶)">
        <i data-lucide="maximize-2"></i>
      </button>

      <!-- 4. Floating Navigation Arrows -->
      ${items.length > 1 ? `
        <button class="hero-nav-btn prev" onclick="event.stopPropagation(); manualGallerySlideshow(-1)" title="Previous Photo">
          <i data-lucide="chevron-left"></i>
        </button>
        <button class="hero-nav-btn next" onclick="event.stopPropagation(); manualGallerySlideshow(1)" title="Next Photo">
          <i data-lucide="chevron-right"></i>
        </button>
      ` : ''}

      <!-- 5. Floating Glass Caption Pill (Bottom-Left) -->
      <div class="hero-glass-caption" id="hero-glass-caption">
        <span class="hero-caption-icon">📷</span>
        <span id="slideshow-active-title" class="hero-caption-title">${currentItem.title || 'Untitled Memory'}</span>
      </div>

      <!-- 6. Bottom-Center Indicator Dots -->
      ${items.length > 1 ? `
        <div class="hero-indicators-bar">
          ${dotsHtml}
        </div>
      ` : ''}
    </div>
  `;

  lucide.createIcons();

  // Setup Mobile Swipe & Hover Autoplay Pause
  const heroWrapper = document.getElementById('hero-gallery-wrapper');
  if (heroWrapper) {
    heroWrapper.addEventListener('touchstart', (e) => {
      heroTouchStartX = e.changedTouches[0].screenX;
      pauseGallerySlideshow();
    }, { passive: true });

    heroWrapper.addEventListener('touchend', (e) => {
      heroTouchEndX = e.changedTouches[0].screenX;
      handleHeroSwipe();
      resumeGallerySlideshow();
    }, { passive: true });

    heroWrapper.addEventListener('mouseenter', () => pauseGallerySlideshow());
    heroWrapper.addEventListener('mouseleave', () => resumeGallerySlideshow());
  }

  startGallerySlideshowAutoPlay();
}

function startGallerySlideshowAutoPlay() {
  if (gallerySlideshowTimer) clearInterval(gallerySlideshowTimer);
  if (appState.gallery && appState.gallery.length > 1) {
    gallerySlideshowTimer = setInterval(() => {
      advanceGallerySlideshow(1);
    }, 5000);
  }
}

function pauseGallerySlideshow() {
  if (gallerySlideshowTimer) {
    clearInterval(gallerySlideshowTimer);
    gallerySlideshowTimer = null;
  }
}

function resumeGallerySlideshow() {
  const modal = document.getElementById('gallery-modal');
  if (modal && modal.classList.contains('active')) return; // Do not auto-play while fullscreen is active
  startGallerySlideshowAutoPlay();
}

function handleHeroSwipe() {
  const swipeDiff = heroTouchEndX - heroTouchStartX;
  if (Math.abs(swipeDiff) > 40) {
    if (swipeDiff < 0) {
      manualGallerySlideshow(1); // Swipe left -> next
    } else {
      manualGallerySlideshow(-1); // Swipe right -> prev
    }
  }
}

function manualGallerySlideshow(dir) {
  pauseGallerySlideshow();
  advanceGallerySlideshow(dir);
  startGallerySlideshowAutoPlay();
}

function jumpGallerySlideshow(targetIdx) {
  if (!appState.gallery || targetIdx < 0 || targetIdx >= appState.gallery.length) return;
  pauseGallerySlideshow();
  gallerySlideshowCurrentIdx = targetIdx;
  updateSlideshowDOM();
  startGallerySlideshowAutoPlay();
}

function advanceGallerySlideshow(dir = 1) {
  if (!appState.gallery || appState.gallery.length <= 1) return;
  gallerySlideshowCurrentIdx = (gallerySlideshowCurrentIdx + dir + appState.gallery.length) % appState.gallery.length;
  updateSlideshowDOM();
}

function updateSlideshowDOM() {
  const currentItem = appState.gallery[gallerySlideshowCurrentIdx];
  if (!currentItem) return;

  const bgEl = document.getElementById('slideshow-active-bg');
  const imgEl = document.getElementById('slideshow-active-img');
  const titleEl = document.getElementById('slideshow-active-title');
  const wrapperEl = document.getElementById('hero-gallery-wrapper');

  if (wrapperEl) {
    wrapperEl.onclick = () => openHeroFullscreen();
  }

  if (bgEl) {
    bgEl.src = getPhotoUrl(currentItem.url) || '';
  }

  if (imgEl) {
    imgEl.classList.remove('active');
    setTimeout(() => {
      imgEl.src = getPhotoUrl(currentItem.url) || '';
      imgEl.alt = currentItem.title || 'Event Photograph';
      imgEl.classList.add('active');
    }, 120);
  }

  if (titleEl) {
    titleEl.textContent = currentItem.title || 'Untitled Memory';
  }

  const dots = document.querySelectorAll('.hero-indicator-dot');
  dots.forEach((dot, idx) => {
    if (idx === gallerySlideshowCurrentIdx) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Helper to detect mobile environment
function isMobileDevice() {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ==========================================================================
// FEATURED HIGHLIGHT FULLSCREEN SLIDESHOW (Google / Apple Photos Style)
// ==========================================================================
let isHeroFullscreenAutoplayPaused = false;
let heroFullscreenTimer = null;
let heroControlsHideTimer = null;
let heroFullscreenZoomScale = 1;
let heroFullscreenPanX = 0;
let heroFullscreenPanY = 0;
let isDraggingHeroFullscreen = false;
let heroStartDragX = 0;
let heroStartDragY = 0;
let heroPinchDistStart = 0;
let heroFsTouchStartX = 0;
let heroFsTouchEndX = 0;

function openHeroFullscreen() {
  if (!appState.gallery || appState.gallery.length === 0) return;
  
  const isMobile = isMobileDevice();

  // Push history state so Mobile/Browser Back Button closes modal instead of navigating away
  try {
    if (!window.history.state || window.history.state.modal !== 'hero-fullscreen-modal') {
      window.history.pushState({ modal: 'hero-fullscreen-modal' }, '');
    }
  } catch (e) {}

  resetHeroFullscreenZoom();
  updateHeroFullscreenDOM();
  openModal('hero-fullscreen-modal');

  const modalEl = document.getElementById('hero-fullscreen-modal');

  if (isMobile) {
    // Mobile: Request browser fullscreen & landscape orientation lock (where supported)
    if (modalEl && modalEl.requestFullscreen) {
      modalEl.requestFullscreen().catch(() => {});
    }
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(() => {});
    }
    // DISABLE autoplay on Mobile Fullscreen completely (manual swipe/zoom only)
    stopHeroFullscreenTimer();
    pauseGallerySlideshow();
  } else {
    // Desktop: Keep 5-second autoplay timer running continuously
    pauseGallerySlideshow();
    isHeroFullscreenAutoplayPaused = false;
    startHeroFullscreenTimer();
    setupHeroControlsAutoContainer();
  }

  setupHeroFullscreenZoomHandlers();
}

function resetHeroFullscreenZoom() {
  heroFullscreenZoomScale = 1;
  heroFullscreenPanX = 0;
  heroFullscreenPanY = 0;
  applyHeroFullscreenTransform();
}

function applyHeroFullscreenTransform() {
  const imgEl = document.getElementById('hero-fullscreen-img');
  if (imgEl) {
    imgEl.style.transform = `translate(${heroFullscreenPanX}px, ${heroFullscreenPanY}px) scale(${heroFullscreenZoomScale})`;
  }
}

function updateHeroFullscreenDOM() {
  const currentItem = appState.gallery[gallerySlideshowCurrentIdx];
  if (!currentItem) return;

  const bgEl = document.getElementById('hero-fullscreen-bg');
  const imgEl = document.getElementById('hero-fullscreen-img');
  const playPauseBtnIcon = document.getElementById('hero-fullscreen-playpause-icon');

  if (bgEl) {
    bgEl.src = getPhotoUrl(currentItem.url) || '';
  }

  if (imgEl) {
    imgEl.style.opacity = '0';
    setTimeout(() => {
      imgEl.src = getPhotoUrl(currentItem.url) || '';
      imgEl.alt = currentItem.title || 'Featured Photograph';
      imgEl.style.opacity = '1';
    }, 120);
  }

  if (playPauseBtnIcon) {
    playPauseBtnIcon.setAttribute('data-lucide', isHeroFullscreenAutoplayPaused ? 'play' : 'pause');
    lucide.createIcons();
  }

  // Also sync normal hero carousel DOM so when user exits, position is identical
  updateSlideshowDOM();
}

function startHeroFullscreenTimer() {
  stopHeroFullscreenTimer();
  if (isMobileDevice() || isHeroFullscreenAutoplayPaused || !appState.gallery || appState.gallery.length <= 1) return;
  heroFullscreenTimer = setInterval(() => {
    if (heroFullscreenZoomScale > 1.0) return; // Pause while zoomed in
    advanceGallerySlideshow(1);
    updateHeroFullscreenDOM();
  }, 5000);
}

function stopHeroFullscreenTimer() {
  if (heroFullscreenTimer) {
    clearInterval(heroFullscreenTimer);
    heroFullscreenTimer = null;
  }
}

function toggleHeroFullscreenPlayPause() {
  if (isMobileDevice()) return; // No autoplay on mobile
  isHeroFullscreenAutoplayPaused = !isHeroFullscreenAutoplayPaused;
  if (isHeroFullscreenAutoplayPaused) {
    stopHeroFullscreenTimer();
  } else {
    startHeroFullscreenTimer();
  }
  const btnIcon = document.getElementById('hero-fullscreen-playpause-icon');
  if (btnIcon) {
    btnIcon.setAttribute('data-lucide', isHeroFullscreenAutoplayPaused ? 'play' : 'pause');
    lucide.createIcons();
  }
}

function navigateHeroFullscreen(direction) {
  if (!appState.gallery || appState.gallery.length === 0) return;
  resetHeroFullscreenZoom();
  advanceGallerySlideshow(direction);
  updateHeroFullscreenDOM();
  
  if (!isMobileDevice() && !isHeroFullscreenAutoplayPaused) {
    // Reset 5-second timer on manual navigation
    startHeroFullscreenTimer();
  }
}

function closeHeroFullscreen() {
  stopHeroFullscreenTimer();
  closeModal('hero-fullscreen-modal');

  // Exit browser fullscreen if active
  if (document.exitFullscreen && document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
  if (screen.orientation && screen.orientation.unlock) {
    try { screen.orientation.unlock(); } catch (e) {}
  }

  // Sync back to normal hero slider seamlessly
  updateSlideshowDOM();
  if (!isMobileDevice()) {
    startGallerySlideshowAutoPlay();
  }
}

function setupHeroControlsAutoContainer() {
  const container = document.getElementById('hero-fullscreen-modal');
  const controls = document.getElementById('hero-fullscreen-controls');
  if (!container || !controls) return;

  const resetHideTimer = () => {
    controls.classList.remove('auto-hidden');
    if (heroControlsHideTimer) clearTimeout(heroControlsHideTimer);
    if (!isMobileDevice()) {
      heroControlsHideTimer = setTimeout(() => {
        if (!isHeroFullscreenAutoplayPaused && heroFullscreenZoomScale === 1.0) {
          controls.classList.add('auto-hidden');
        }
      }, 3000);
    }
  };

  container.onmousemove = resetHideTimer;
  container.onclick = resetHideTimer;
  resetHideTimer();
}

function setupHeroFullscreenZoomHandlers() {
  const viewport = document.getElementById('hero-fullscreen-viewport');
  if (!viewport) return;

  viewport.onwheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
    heroFullscreenZoomScale = Math.min(Math.max(1.0, heroFullscreenZoomScale * zoomFactor), 3.5);
    if (heroFullscreenZoomScale === 1.0) {
      heroFullscreenPanX = 0;
      heroFullscreenPanY = 0;
      if (!isMobileDevice() && !isHeroFullscreenAutoplayPaused) startHeroFullscreenTimer();
    } else {
      stopHeroFullscreenTimer();
    }
    applyHeroFullscreenTransform();
  };

  viewport.ondblclick = (e) => {
    e.preventDefault();
    if (heroFullscreenZoomScale > 1.0) {
      resetHeroFullscreenZoom();
      if (!isMobileDevice() && !isHeroFullscreenAutoplayPaused) startHeroFullscreenTimer();
    } else {
      heroFullscreenZoomScale = 2.0;
      stopHeroFullscreenTimer();
      applyHeroFullscreenTransform();
    }
  };

  viewport.ontouchstart = (e) => {
    stopHeroFullscreenTimer();
    if (e.touches.length === 2) {
      heroPinchDistStart = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
    } else if (e.touches.length === 1) {
      heroFsTouchStartX = e.touches[0].screenX;
      if (heroFullscreenZoomScale > 1.0) {
        isDraggingHeroFullscreen = true;
        heroStartDragX = e.touches[0].pageX - heroFullscreenPanX;
        heroStartDragY = e.touches[0].pageY - heroFullscreenPanY;
      }
    }
  };

  viewport.ontouchmove = (e) => {
    if (e.touches.length === 2 && heroPinchDistStart > 0) {
      const dist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      const factor = dist / heroPinchDistStart;
      heroFullscreenZoomScale = Math.min(Math.max(1.0, heroFullscreenZoomScale * factor), 3.5);
      heroPinchDistStart = dist;
      applyHeroFullscreenTransform();
    } else if (e.touches.length === 1 && isDraggingHeroFullscreen) {
      heroFullscreenPanX = e.touches[0].pageX - heroStartDragX;
      heroFullscreenPanY = e.touches[0].pageY - heroStartDragY;
      applyHeroFullscreenTransform();
    }
  };

  viewport.ontouchend = (e) => {
    isDraggingHeroFullscreen = false;
    heroPinchDistStart = 0;
    if (e.changedTouches && e.changedTouches[0] && heroFullscreenZoomScale === 1.0) {
      heroFsTouchEndX = e.changedTouches[0].screenX;
      const swipeDiff = heroFsTouchEndX - heroFsTouchStartX;
      if (Math.abs(swipeDiff) > 40) {
        if (swipeDiff < 0) {
          navigateHeroFullscreen(1);
        } else {
          navigateHeroFullscreen(-1);
        }
      }
    }
    if (!isMobileDevice() && !isHeroFullscreenAutoplayPaused) startHeroFullscreenTimer();
  };
}

// ==========================================================================
// STATIC PHOTOS GRID MANUAL LIGHTBOX (NO AUTOPLAY)
// ==========================================================================
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
let lightboxZoomScale = 1;
let lightboxPanX = 0;
let lightboxPanY = 0;
let isDraggingLightbox = false;
let startDragX = 0;
let startDragY = 0;
let touchPinchDistStart = 0;

function openGalleryModal(id) {
  const index = appState.gallery.findIndex(g => g.id === id);
  if (index === -1) return;
  
  currentGalleryIndex = index;
  resetLightboxZoom();
  updateLightboxImage();
  openModal('gallery-modal');
  setupLightboxZoomHandlers();
}

function resetLightboxZoom() {
  lightboxZoomScale = 1;
  lightboxPanX = 0;
  lightboxPanY = 0;
  applyLightboxTransform();
}

function applyLightboxTransform() {
  const imgEl = document.getElementById('gallery-modal-img');
  if (imgEl) {
    imgEl.style.transform = `translate(${lightboxPanX}px, ${lightboxPanY}px) scale(${lightboxZoomScale})`;
  }
}

function setupLightboxZoomHandlers() {
  const imgEl = document.getElementById('gallery-modal-img');
  const container = document.getElementById('gallery-modal-img-container');
  if (!imgEl || !container) return;

  // 1. Mouse Wheel Zoom
  container.onwheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
    lightboxZoomScale = Math.min(Math.max(1.0, lightboxZoomScale * zoomFactor), 3.5);
    if (lightboxZoomScale === 1.0) {
      lightboxPanX = 0;
      lightboxPanY = 0;
    }
    applyLightboxTransform();
  };

  // 2. Double Click Zoom Toggle
  container.ondblclick = (e) => {
    e.preventDefault();
    if (lightboxZoomScale > 1.0) {
      resetLightboxZoom();
    } else {
      lightboxZoomScale = 2.0;
      applyLightboxTransform();
    }
  };

  // 3. Mouse Drag / Pan when Zoomed
  container.onmousedown = (e) => {
    if (lightboxZoomScale > 1.0) {
      isDraggingLightbox = true;
      startDragX = e.clientX - lightboxPanX;
      startDragY = e.clientY - lightboxPanY;
    }
  };

  window.onmousemove = (e) => {
    if (isDraggingLightbox) {
      lightboxPanX = e.clientX - startDragX;
      lightboxPanY = e.clientY - startDragY;
      applyLightboxTransform();
    }
  };

  window.onmouseup = () => {
    isDraggingLightbox = false;
  };

  // 4. Pinch-to-Zoom & Touch Drag for Mobile
  container.ontouchstart = (e) => {
    if (e.touches.length === 2) {
      touchPinchDistStart = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
    } else if (e.touches.length === 1 && lightboxZoomScale > 1.0) {
      isDraggingLightbox = true;
      startDragX = e.touches[0].pageX - lightboxPanX;
      startDragY = e.touches[0].pageY - lightboxPanY;
    }
  };

  container.ontouchmove = (e) => {
    if (e.touches.length === 2 && touchPinchDistStart > 0) {
      const dist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      const factor = dist / touchPinchDistStart;
      lightboxZoomScale = Math.min(Math.max(1.0, lightboxZoomScale * factor), 3.5);
      touchPinchDistStart = dist;
      applyLightboxTransform();
    } else if (e.touches.length === 1 && isDraggingLightbox) {
      lightboxPanX = e.touches[0].pageX - startDragX;
      lightboxPanY = e.touches[0].pageY - startDragY;
      applyLightboxTransform();
    }
  };

  container.ontouchend = () => {
    isDraggingLightbox = false;
    touchPinchDistStart = 0;
  };
}

function updateLightboxImage() {
  resetLightboxZoom();
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
  const heroModal = document.getElementById('hero-fullscreen-modal');
  const galleryModal = document.getElementById('gallery-modal');
  
  if (heroModal && heroModal.classList.contains('active')) {
    if (e.key === 'ArrowLeft') {
      navigateHeroFullscreen(-1);
    } else if (e.key === 'ArrowRight') {
      navigateHeroFullscreen(1);
    } else if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      toggleHeroFullscreenPlayPause();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      closeHeroFullscreen();
    } else if (e.key === 'Escape') {
      closeHeroFullscreen();
    }
  } else if (galleryModal && galleryModal.classList.contains('active')) {
    if (e.key === 'ArrowLeft') {
      navigateGallery(-1);
    } else if (e.key === 'ArrowRight') {
      navigateGallery(1);
    } else if (e.key === 'Escape') {
      closeModal('gallery-modal');
    }
  } else if (e.key === 'f' || e.key === 'F') {
    // If on gallery section and not in modal, toggle Hero Fullscreen
    const currentHash = window.location.hash || '#home';
    if (currentHash === '#gallery' && appState.gallery && appState.gallery.length > 0) {
      openHeroFullscreen();
    }
  }
});

// Mobile / Browser Back Button Listener
window.addEventListener('popstate', () => {
  const heroModal = document.getElementById('hero-fullscreen-modal');
  const galleryModal = document.getElementById('gallery-modal');

  if (heroModal && heroModal.classList.contains('active')) {
    closeHeroFullscreen();
  } else if (galleryModal && galleryModal.classList.contains('active')) {
    closeModal('gallery-modal');
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

// Storage Tracker State & Real-time Update Handler
let storageState = {
  usedMB: 0,
  maxMB: 250,
  percentage: 0
};

/**
 * Real-Time Storage Tracker Update Handler
 * Recalculates and smooth-animates the sidebar storage indicator instantly
 * on image uploads, additions, and deletions without requiring a manual page refresh.
 * @param {number} fileSizeChangeInBytes - Byte size of uploaded or deleted file/item
 * @param {string} operation - 'ADD' | 'SUBTRACT'
 */
function updateStorageTracker(fileSizeChangeInBytes, operation) {
  const textEl = document.getElementById('admin-space-text');
  const barEl = document.getElementById('admin-space-bar');
  if (!textEl || !barEl) return;

  const changeInMB = (fileSizeChangeInBytes || 0) / (1024 * 1024);
  const updatedStorageMB = operation === 'ADD' 
    ? storageState.usedMB + changeInMB 
    : Math.max(0, storageState.usedMB - changeInMB);

  storageState.usedMB = parseFloat(updatedStorageMB.toFixed(2));
  storageState.percentage = parseFloat(Math.min(100, (storageState.usedMB / storageState.maxMB) * 100).toFixed(1));

  // Instantly reflect in UI with smooth progress bar animation
  textEl.textContent = `${storageState.usedMB.toFixed(2)} MB / ${storageState.maxMB} MB`;
  barEl.style.width = `${storageState.percentage}%`;

  if (storageState.percentage > 90) {
    barEl.style.backgroundColor = '#e53e3e';
  } else if (storageState.percentage > 70) {
    barEl.style.backgroundColor = '#dd6b20';
  } else {
    barEl.style.backgroundColor = 'var(--accent)';
  }
}

// Update storage space utilization indicator widget from server API
async function updateAdminSpaceIndicator() {
  const textEl = document.getElementById('admin-space-text');
  const barEl = document.getElementById('admin-space-bar');
  if (!textEl || !barEl) return;

  try {
    const res = await fetch(`${API_BASE}/system/space`);
    if (res.ok) {
      const data = await res.json();
      storageState.usedMB = parseFloat(data.usedMb) || 0;
      storageState.maxMB = parseFloat(data.limitMb) || 250;
      storageState.percentage = parseFloat(data.percentage) || 0;

      textEl.textContent = `${storageState.usedMB.toFixed(2)} MB / ${storageState.maxMB} MB`;
      barEl.style.width = `${storageState.percentage}%`;
      
      if (storageState.percentage > 90) {
        barEl.style.backgroundColor = '#e53e3e';
      } else if (storageState.percentage > 70) {
        barEl.style.backgroundColor = '#dd6b20';
      } else {
        barEl.style.backgroundColor = 'var(--accent)';
      }
      return;
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
    
    storageState.usedMB = estimateMb;
    storageState.maxMB = 250;
    storageState.percentage = percentage;

    textEl.textContent = `${estimateMb.toFixed(2)} MB / 250 MB`;
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
  const queryInput = document.getElementById('admin-search-attendance');
  const deptInput = document.getElementById('admin-filter-dept');
  const desigInput = document.getElementById('admin-filter-desig');
  const sessionInput = document.getElementById('admin-filter-session');
  const dateInput = document.getElementById('admin-filter-date');

  const query = queryInput ? queryInput.value.trim().toLowerCase() : '';
  const dept = deptInput ? deptInput.value : 'all';
  const desig = desigInput ? desigInput.value : 'all';
  const session = sessionInput ? sessionInput.value : 'all';
  const date = dateInput ? dateInput.value : 'all';
  
  const filtered = (appState.attendance || []).filter(r => {
    const matchQuery = !query || 
      (r.fullName || '').toLowerCase().includes(query) || 
      (r.employeeId || '').toLowerCase().includes(query) ||
      (r.organization || '').toLowerCase().includes(query) ||
      (r.department || '').toLowerCase().includes(query);

    const matchDept = dept === 'all' || (r.department || '').trim() === dept.trim();
    const matchDesig = desig === 'all' || (r.designation || '').trim() === desig.trim();
    const matchSession = session === 'all' || (r.session || '').trim() === session.trim();
    const matchDate = date === 'all' || (r.attendanceDate || '').trim() === date.trim();
    
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
  try {
    const res = await fetch(`${API_BASE}/announcements?_t=${Date.now()}`, { cache: 'no-store' });
    if (res.ok) {
      const text = await res.text();
      if (!text.trim().startsWith('<!')) {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) appState.announcements = parsed;
      }
    }
  } catch (err) {
    console.warn('Network error in fetchAdminAnnouncementsList, using appState/SEED fallback:', err);
  }

  if (!Array.isArray(appState.announcements) || appState.announcements.length === 0) {
    appState.announcements = SEED_ANNOUNCEMENTS || [];
  }
  
  appState.announcements.forEach(item => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    row.innerHTML = `
      <div class="admin-item-info">
        <h4>${item.title}</h4>
        <p>${item.date} ${item.time} | Category: ${item.category} | Priority: ${item.priority}</p>
      </div>
      <div class="table-action-btns">
        <button class="tbl-btn tbl-btn-edit" title="Edit Announcement" onclick="loadItemForEdit('announcements', '${item.id}')"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" title="Delete Announcement" onclick="deleteCrudItem('announcements', '${item.id}')"><i data-lucide="trash-2"></i></button>
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
  
  try {
    const [resL, resC] = await Promise.all([
      fetch(`${API_BASE}/leaders?_t=${Date.now()}`, { cache: 'no-store' }),
      fetch(`${API_BASE}/committee?_t=${Date.now()}`, { cache: 'no-store' })
    ]);
    
    if (resL.ok) {
      const textL = await resL.text();
      if (!textL.trim().startsWith('<!')) {
        const parsedL = JSON.parse(textL);
        if (Array.isArray(parsedL)) appState.leaders = parsedL;
      }
    }
    
    if (resC.ok) {
      const textC = await resC.text();
      if (!textC.trim().startsWith('<!')) {
        const parsedC = JSON.parse(textC);
        if (Array.isArray(parsedC)) appState.committee = parsedC;
      }
    }
  } catch (err) {
    console.warn('Network error in fetchAdminProfilesList, using appState/SEED fallback:', err);
  }

  // Respect user modifications & deletions stored in localStorage
  let isUserModified = localStorage.getItem('nlp_profiles_user_modified') === 'true';
  let savedLocalLeaders = null;
  let savedLocalCommittee = null;
  
  try {
    const rawL = localStorage.getItem('nlp_local_leaders');
    if (rawL) savedLocalLeaders = JSON.parse(rawL);
    const rawC = localStorage.getItem('nlp_local_committee');
    if (rawC) savedLocalCommittee = JSON.parse(rawC);
  } catch (e) {}

  let leadersList = Array.isArray(appState.leaders) ? appState.leaders : [];
  if (isUserModified && savedLocalLeaders && Array.isArray(savedLocalLeaders)) {
    leadersList = savedLocalLeaders;
  } else if (leadersList.length === 0 && !isUserModified) {
    leadersList = SEED_LEADERS || [];
  }

  let committeeList = Array.isArray(appState.committee) ? appState.committee : [];
  if (isUserModified && savedLocalCommittee && Array.isArray(savedLocalCommittee)) {
    committeeList = savedLocalCommittee;
  } else if (committeeList.length === 0 && !isUserModified) {
    committeeList = SEED_COMMITTEE || [];
  }

  appState.leaders = leadersList;
  appState.committee = committeeList;

  // Render Leaders list
  leadersList.forEach(item => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    row.innerHTML = `
      <div class="admin-item-info">
        <h4>${item.fullName || 'Unnamed'} <span style="font-size:0.7rem; color:var(--accent); font-weight:700;">[LEADER - ${item.category || 'General'}]</span></h4>
        <p>${item.designation || ''} | ${item.organisation || ''}</p>
      </div>
      <div class="table-action-btns">
        <button class="tbl-btn tbl-btn-edit" title="Edit Profile" onclick="loadItemForEdit('leaders', '${item.id}')"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" title="Delete Profile" onclick="deleteCrudItem('leaders', '${item.id}')"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    listEl.appendChild(row);
  });

  // Render Committee list
  committeeList.forEach(item => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    row.innerHTML = `
      <div class="admin-item-info">
        <h4>${item.fullName || 'Unnamed'} <span style="font-size:0.7rem; color:var(--success); font-weight:700;">[COMMITTEE]</span></h4>
        <p>${item.role || ''} | ${item.department || ''}</p>
      </div>
      <div class="table-action-btns">
        <button class="tbl-btn tbl-btn-edit" title="Edit Profile" onclick="loadItemForEdit('committee', '${item.id}')"><i data-lucide="edit"></i></button>
        <button class="tbl-btn tbl-btn-delete" title="Delete Profile" onclick="deleteCrudItem('committee', '${item.id}')"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    listEl.appendChild(row);
  });
  
  if (listEl.children.length === 0) {
    listEl.innerHTML = '<p class="text-muted" style="padding:20px; text-align:center;">No profiles registered yet.</p>';
  }

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
      
      toggleGuestSpeakerFields(item.category);
      if (item.category === 'Guest Speakers') {
        document.getElementById('prof-topic').value = item.topic || (item.id === 'lead_vinita_yadav' ? 'Middle Management Skills & SWOT Analysis' : '');
        document.getElementById('prof-objective').value = item.learningObjective || (item.id === 'lead_vinita_yadav' ? 'Middle Management Skills, Managing Upward and Downward, Bridging Leadership and Teams.' : '');
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
  
  // Optimistically remove from appState and update local storage persistence
  if (type === 'leaders' || type === 'committee') {
    if (Array.isArray(appState.leaders)) {
      appState.leaders = appState.leaders.filter(item => item.id !== id);
      try { localStorage.setItem('nlp_local_leaders', JSON.stringify(appState.leaders)); } catch (e) {}
    }
    if (Array.isArray(appState.committee)) {
      appState.committee = appState.committee.filter(item => item.id !== id);
      try { localStorage.setItem('nlp_local_committee', JSON.stringify(appState.committee)); } catch (e) {}
    }
    try { localStorage.setItem('nlp_profiles_user_modified', 'true'); } catch (e) {}
  } else if (Array.isArray(appState[type])) {
    appState[type] = appState[type].filter(item => item.id !== id);
    try {
      localStorage.setItem(`nlp_local_${type}`, JSON.stringify(appState[type]));
      localStorage.setItem(`nlp_${type}_user_modified`, 'true');
    } catch (e) {}
  }

  // Update Admin view immediately (0ms latency)
  if (type === 'schedule') fetchAdminScheduleList();
  if (type === 'announcements') fetchAdminAnnouncementsList();
  if (type === 'leaders' || type === 'committee') fetchAdminProfilesList();
  if (type === 'overview') fetchAdminOverviewList();
  refreshPublicData();

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
      showToast('Backend deletion notice: kept in local storage.', 'info');
    }
  } catch (err) {
    console.warn('Backend API offline during delete, deletion preserved locally:', err);
    showToast('Item deleted locally.', 'success');
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
          if (file && file.size) {
            updateStorageTracker(file.size, 'ADD');
          }
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

// ==========================================================================
// DIGITAL TOOLS - MEDANTA SAFETRACK CONTROLLER
// ==========================================================================
let safeTrackStep = 0;
let safeTrackWhyCount = 0;
let safeTrackActionCount = 0;

const SAFETRACK_FISHBONE_CATS = [
  ["Patient factors","complexity, condition, behaviour"],
  ["Staff factors","fatigue, competence, workload"],
  ["Task / process","protocol unclear, not followed, absent"],
  ["Communication","handover, documentation, verbal orders"],
  ["Equipment / resources","malfunction, unavailable, unfamiliar"],
  ["Environment / workspace","layout, lighting, noise, staffing ratio"],
  ["Organisation / policy","training, supervision, scheduling"]
];

function initSafeTrack() {
  const container = document.getElementById('view-digital-tools');
  if (!container || container.getAttribute('data-initialized') === 'true') return;
  container.setAttribute('data-initialized', 'true');

  // Set today's default date and time
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const timeStr = today.toTimeString().split(' ')[0].substring(0, 5);
  
  const obsDate = document.getElementById('obsDate');
  const obsTime = document.getElementById('obsTime');
  if (obsDate && !obsDate.value) obsDate.value = dateStr;
  if (obsTime && !obsTime.value) obsTime.value = timeStr;

  // Setup pill selectors
  setupPillGroup('obsCategory');
  setupPillGroup('obsSeverity');

  // Render Fishbone Accordion
  const fbEl = document.getElementById('fishbone');
  if (fbEl && fbEl.children.length === 0) {
    SAFETRACK_FISHBONE_CATS.forEach((catPair, i) => {
      const [cat, hint] = catPair;
      const div = document.createElement('div');
      div.className = 'cat';
      div.id = 'catCard' + i;
      div.innerHTML = `
        <div class="cat-head" onclick="toggleSafeTrackCat(${i})">
          <input type="checkbox" id="catChk${i}" onclick="event.stopPropagation(); toggleSafeTrackCat(${i}, true)">
          <span>${cat}</span>
          <span class="cat-hint">— ${hint}</span>
          <span class="chev">▶</span>
        </div>
        <div class="cat-detail" id="catDetail${i}">
          <div class="inner"><textarea id="catText${i}" placeholder="What specifically about '${cat.toLowerCase()}' contributed?"></textarea></div>
        </div>`;
      fbEl.appendChild(div);
    });
  }

  // Setup 5 Whys initial rows
  if (safeTrackWhyCount === 0) {
    addWhy();
    addWhy();
  }

  // Setup Action initial rows
  if (safeTrackActionCount === 0) {
    addAction();
    addAction();
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function goToSafeTrackStep(step) {
  const r = document.getElementById('tab-' + step);
  if (r) r.checked = true;
  
  const panels = document.querySelectorAll('#view-digital-tools .safetrack-panel');
  panels.forEach(p => p.classList.remove('active'));
  
  const targetPanel = document.querySelector(`#view-digital-tools .safetrack-panel[data-panel="${step}"]`);
  if (targetPanel) targetPanel.classList.add('active');
  
  const stepLinks = document.querySelectorAll('#view-digital-tools .safetrack-sidebar .step-link');
  stepLinks.forEach((d, i) => {
    d.classList.remove('active', 'done');
    if (i < step) d.classList.add('done');
    if (i === step) d.classList.add('active');
  });
  
  const progressFill = document.getElementById('progressFill');
  if (progressFill) progressFill.style.width = (10 + step * 22.5) + '%';
  
  safeTrackStep = step;
  if (step === 2) rebuildRCS();
  if (step === 4) buildSafeTrackReport();
}

function setupPillGroup(id) {
  const group = document.getElementById(id);
  if (!group) return;
  group.querySelectorAll('.pill').forEach(p => {
    p.onclick = () => {
      group.querySelectorAll('.pill').forEach(o => o.classList.remove('on'));
      p.classList.add('on');
    };
  });
}

function getPillValue(id) {
  const on = document.querySelector('#' + id + ' .pill.on');
  return on ? on.textContent.trim() : '';
}

function toggleSafeTrackCat(i, fromCheckbox) {
  const chk = document.getElementById('catChk' + i);
  if (!chk) return;
  if (!fromCheckbox) chk.checked = !chk.checked;
  const detail = document.getElementById('catDetail' + i);
  const card = document.getElementById('catCard' + i);
  if (detail) detail.classList.toggle('show', chk.checked);
  if (card) card.classList.toggle('open', chk.checked);
}

function addWhy() {
  safeTrackWhyCount++;
  const wrap = document.getElementById('whyChain');
  if (!wrap) return;
  const row = document.createElement('div');
  row.className = 'why-row';
  row.innerHTML = `<div class="why-num">${safeTrackWhyCount}</div><textarea id="why${safeTrackWhyCount}" placeholder="Why did that happen?" style="min-height:44px;"></textarea>`;
  wrap.appendChild(row);
}

function rebuildRCS() {
  const descEl = document.getElementById('obsDesc');
  const desc = descEl ? descEl.value.trim() : '';
  const cats = [];
  
  SAFETRACK_FISHBONE_CATS.forEach((catPair, i) => {
    const chk = document.getElementById('catChk' + i);
    if (chk && chk.checked) {
      const detailEl = document.getElementById('catText' + i);
      const detail = detailEl ? detailEl.value.trim() : '';
      cats.push(catPair[0] + (detail ? ' — ' + detail : ''));
    }
  });
  
  const whys = [];
  for (let i = 1; i <= safeTrackWhyCount; i++) {
    const el = document.getElementById('why' + i);
    if (el && el.value.trim()) whys.push(el.value.trim());
  }
  
  let draft = '';
  if (desc) draft += 'Observation: ' + desc + '\n\n';
  if (whys.length) draft += 'Causal chain (5 Whys): ' + whys.join(' → ') + '\n\n';
  if (cats.length) draft += 'Contributing factors: ' + cats.join('; ') + '\n\n';
  
  const rootGuess = whys.length ? whys[whys.length - 1] : (cats.length ? cats[cats.length - 1] : '[state the specific, correctable root cause here]');
  draft += 'Root cause: ' + rootGuess;
  
  const rcsEl = document.getElementById('rcsText');
  if (rcsEl) rcsEl.value = draft;
}

function addAction() {
  safeTrackActionCount++;
  const id = safeTrackActionCount;
  const wrap = document.getElementById('actionRows');
  if (!wrap) return;
  
  const card = document.createElement('div');
  card.className = 'action-card';
  card.id = 'actionRow' + id;
  card.innerHTML = `
    <div class="rm-wrap"><button type="button" class="rm-btn" onclick="removeAction(${id})">✕</button></div>
    <div class="grid">
      <div><label>Action</label><input type="text" id="actDesc${id}" placeholder="Corrective action..."></div>
      <div><label>Owner</label><input type="text" id="actOwner${id}" placeholder="Owner"></div>
      <div><label>Due date</label><input type="date" id="actDate${id}"></div>
      <div><label>Type</label><select id="actType${id}">
          <option>Corrective</option>
          <option>Preventive</option>
          <option>Interim / containment</option>
        </select></div>
      <div><label>Status</label><select id="actStatus${id}">
          <option>Open</option>
          <option>In progress</option>
          <option>Done</option>
        </select></div>
    </div>`;
  wrap.appendChild(card);
}

function removeAction(id) {
  const row = document.getElementById('actionRow' + id);
  if (row) row.remove();
}

function buildSafeTrackReport() {
  const kv = (k, v) => `<div class="kv"><b>${k}</b><span>${v || '—'}</span></div>`;
  const date = document.getElementById('obsDate')?.value || '';
  const time = document.getElementById('obsTime')?.value || '';
  const shift = document.getElementById('obsShift')?.value || '';
  const loc = document.getElementById('obsLocation')?.value || '';
  const patient = document.getElementById('obsPatient')?.value || '';
  const observer = document.getElementById('obsObserver')?.value || '';
  const cat = getPillValue('obsCategory') || 'General Observation';
  const sev = getPillValue('obsSeverity') || 'Unspecified';
  const desc = document.getElementById('obsDesc')?.value || '';
  const rcs = document.getElementById('rcsText')?.value || '';

  // Fishbone Contributing Factors
  const cats = [];
  SAFETRACK_FISHBONE_CATS.forEach((catPair, i) => {
    const chk = document.getElementById('catChk' + i);
    if (chk && chk.checked) {
      const detailEl = document.getElementById('catText' + i);
      const detail = detailEl ? detailEl.value.trim() : '';
      cats.push(catPair[0] + (detail ? ': ' + detail : ''));
    }
  });

  // 5 Whys Chain
  const whys = [];
  for (let i = 1; i <= safeTrackWhyCount; i++) {
    const el = document.getElementById('why' + i);
    if (el && el.value.trim()) whys.push(`Why ${i}: ` + el.value.trim());
  }

  let actionRowsHtml = '';
  document.querySelectorAll('#actionRows .action-card').forEach(card => {
    const idn = card.id.replace('actionRow', '');
    const d = document.getElementById('actDesc' + idn)?.value || '';
    const o = document.getElementById('actOwner' + idn)?.value || '';
    const dt = document.getElementById('actDate' + idn)?.value || '';
    const ty = document.getElementById('actType' + idn)?.value || '';
    const st = document.getElementById('actStatus' + idn)?.value || '';
    if (d || o) {
      actionRowsHtml += `<div class="kv"><b>${ty}</b><span>${d} — <b>Owner:</b> ${o || '—'} | <b>Due:</b> ${dt || '—'} | <b>Status:</b> ${st}</span></div>`;
    }
  });

  const reportBody = document.getElementById('reportBody');
  if (reportBody) {
    reportBody.innerHTML = `
      <div class="masthead">
        <img class="mast-logo" src="/assets/logo.png" alt="Medanta Logo">
        <div class="h-name">Medanta SafeTrack Patient Safety Observation</div>
        <div class="h-sub">Medanta Lucknow · Nursing Excellence & Quality</div>
      </div>
      <h3>1. Observation Details</h3>
      ${kv('Date & Time', `${date} ${time} (${shift} Shift)`)}
      ${kv('Ward / Unit', loc)}
      ${kv('Bed / MRN', patient)}
      ${kv('Observer', observer)}
      ${kv('Category', cat)}
      ${kv('Severity', sev)}
      ${kv('Description', desc)}
      
      <h3>2. Root Cause Analysis</h3>
      ${whys.length ? kv('5 Whys Drill-Down', whys.join('<br>')) : ''}
      ${cats.length ? kv('Contributing Factors', cats.join('; ')) : ''}
      <div class="block"><b>Root Cause Statement:</b><br>${rcs || 'Pending analysis formulation.'}</div>
      
      <h3>3. Action Plan & CAPA</h3>
      ${actionRowsHtml || '<p style="color:var(--grey); font-style:italic;">No specific action items recorded.</p>'}
    `;
  }
}

function downloadSafeTrackReport() {
  const date = document.getElementById('obsDate')?.value || '';
  const time = document.getElementById('obsTime')?.value || '';
  const shift = document.getElementById('obsShift')?.value || '';
  const loc = document.getElementById('obsLocation')?.value || '';
  const patient = document.getElementById('obsPatient')?.value || '';
  const observer = document.getElementById('obsObserver')?.value || '';
  const cat = getPillValue('obsCategory') || 'General Observation';
  const sev = getPillValue('obsSeverity') || 'Unspecified';
  const desc = document.getElementById('obsDesc')?.value || '';
  const rcs = document.getElementById('rcsText')?.value || '';

  const whys = [];
  for (let i = 1; i <= safeTrackWhyCount; i++) {
    const el = document.getElementById('why' + i);
    if (el && el.value.trim()) whys.push(`Why ${i}: ` + el.value.trim());
  }

  const cats = [];
  SAFETRACK_FISHBONE_CATS.forEach((catPair, i) => {
    const chk = document.getElementById('catChk' + i);
    if (chk && chk.checked) {
      const detailEl = document.getElementById('catText' + i);
      const detail = detailEl ? detailEl.value.trim() : '';
      cats.push(catPair[0] + (detail ? ': ' + detail : ''));
    }
  });

  let actionsText = '';
  document.querySelectorAll('#actionRows .action-card').forEach(card => {
    const idn = card.id.replace('actionRow', '');
    const d = document.getElementById('actDesc' + idn)?.value || '';
    const o = document.getElementById('actOwner' + idn)?.value || '';
    const dt = document.getElementById('actDate' + idn)?.value || '';
    const ty = document.getElementById('actType' + idn)?.value || '';
    const st = document.getElementById('actStatus' + idn)?.value || '';
    if (d || o) {
      actionsText += `- [${ty}] ${d} | Owner: ${o || '—'} | Due: ${dt || '—'} | Status: ${st}\n`;
    }
  });

  let reportText = `=====================================================\n`;
  reportText += `   MEDANTA SAFETRACK PATIENT SAFETY OBSERVATION REPORT\n`;
  reportText += `   Medanta Lucknow - Quality & Nursing Excellence\n`;
  reportText += `=====================================================\n\n`;
  reportText += `1. OBSERVATION DETAILS:\n`;
  reportText += `-----------------------\n`;
  reportText += `Date & Time : ${date} ${time} (${shift} Shift)\n`;
  reportText += `Ward / Unit : ${loc}\n`;
  reportText += `Bed / MRN   : ${patient}\n`;
  reportText += `Observer    : ${observer}\n`;
  reportText += `Category    : ${cat}\n`;
  reportText += `Severity    : ${sev}\n`;
  reportText += `Description :\n${desc}\n\n`;
  
  reportText += `2. ROOT CAUSE ANALYSIS:\n`;
  reportText += `-----------------------\n`;
  if (whys.length) reportText += `5 Whys Chain:\n${whys.join('\n')}\n\n`;
  if (cats.length) reportText += `Contributing Factors: ${cats.join('; ')}\n\n`;
  reportText += `Root Cause Statement (RCS):\n${rcs}\n\n`;
  
  reportText += `3. ACTION PLAN & CAPA:\n`;
  reportText += `-----------------------\n`;
  reportText += actionsText || `No specific action items recorded.\n`;
  
  const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Medanta_SafeTrack_${date || 'Report'}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ==========================================================================
// SWOT ANALYSIS TOOL CONTROLLER
// ==========================================================================
const SWOT_CATS = {
  S: { label:"Strengths", sub:"internal · working in your favor", color:"s",
    questions:[
      "What clinical or operational capabilities does this person or department clearly excel at?",
      "What positive feedback have patients, families, or staff consistently given?",
      "What resources — staffing, technology, funding, partnerships — are strong or well-used here?",
      "What accomplishments, awards, or milestones stand out from the past year?",
      "What makes this person or team hard for others to replicate or compete with?"
    ]},
  W: { label:"Weaknesses", sub:"internal · holding you back", color:"w",
    questions:[
      "Where do patient safety, quality, or satisfaction metrics fall short?",
      "What staffing gaps, turnover, or skill shortages limit performance?",
      "What processes, workflows, or systems are outdated or inefficient?",
      "What complaints or recurring issues keep coming up from patients, staff, or leadership?",
      "Where is this person or department under-resourced compared to what the work needs?"
    ]},
  O: { label:"Opportunities", sub:"external · could work in your favor", color:"o",
    questions:[
      "What unmet patient or community needs could this person or department step into?",
      "What new technologies, treatments, or best practices could be adopted?",
      "What partnerships, referral networks, or community ties could be expanded?",
      "What funding, grants, or reimbursement changes could be leveraged?",
      "What shifts in the market, demographics, or regulation create an opening?"
    ]},
  T: { label:"Threats", sub:"external · could work against you", color:"t",
    questions:[
      "What regulatory, compliance, or accreditation risks could affect this area?",
      "What competitive pressure — other hospitals, urgent care, telehealth — exists?",
      "What financial or reimbursement risks loom, such as payer mix or policy shifts?",
      "What staffing market pressures — burnout, competing offers, shortages — threaten stability?",
      "What could damage reputation, patient trust, or standing in the community?"
    ]}
};
const SWOT_CAT_ORDER = ["S","W","O","T"];
const SWOT_ADMIN_CODES = ["Roh01003061", "Pal01003038", "#@!Raji#@!1", "Rohit@1234"];

let swotState = {
  mode: "user",
  step: 0,
  id: null,
  subject: "", subjectRole: "", evaluator: "",
  answers: { S:{}, W:{}, O:{}, T:{} },
  extra: { S:[], W:[], O:[], T:[] },
  adminError: "",
  adminEntries: null,
  adminDetailId: null
};

function initSwot() {
  const container = document.getElementById('swot-app');
  if (!container) return;
  renderSwot();
}

function renderSwot() {
  const app = document.getElementById('swot-app');
  if (!app) return;

  if (swotState.mode === "adminLogin") app.innerHTML = renderSwotAdminLogin();
  else if (swotState.mode === "admin") app.innerHTML = renderSwotAdminList();
  else if (swotState.mode === "adminDetail") app.innerHTML = renderSwotAdminDetail();
  else if (swotState.step === 0) app.innerHTML = renderSwotSetup();
  else if (swotState.step >= 1 && swotState.step <= 4) app.innerHTML = renderSwotCategory(SWOT_CAT_ORDER[swotState.step - 1]);
  else app.innerHTML = renderSwotReview();

  wireSwotEvents();
}

function swotVitals(activeIdx) {
  const total = 6;
  let segs = "";
  for (let i = 0; i < total; i++) {
    let cls = "seg";
    if (i < activeIdx) cls += " done";
    else if (i === activeIdx) cls += " current";
    segs += `<div class="${cls}"></div>`;
  }
  const labels = ["setup","strengths","weaknesses","opportunities","threats","review"];
  return `<div class="vitals">${segs}</div><div class="vitals-labels">${labels.map(l => `<span>${l}</span>`).join("")}</div>`;
}

function renderSwotSetup() {
  return `
    <p class="eyebrow">SWOT Rounds · Nursing Leadership</p>
    <h1>Guided Hospital Leadership SWOT Builder</h1>
    <p class="sub">Answer a structured set of prompts for Strengths, Weaknesses, Opportunities, and Threats for your department, team, or initiative.</p>
    ${swotVitals(0)}
    <div class="field">
      <label for="swot-subject">Who or what is this SWOT for?</label>
      <input type="text" id="swot-subject" placeholder="e.g. ICU Unit, Med-Surg Department, Infection Control Initiative" value="${escHtml(swotState.subject)}">
      <p class="hint">Can be a person, a department, a service line, or a clinical project.</p>
    </div>
    <div class="field">
      <label for="swot-subjectRole">Role or context <span style="color:var(--ink-soft);font-weight:400;">(optional)</span></label>
      <input type="text" id="swot-subjectRole" placeholder="e.g. Deputy Nursing Superintendent / Unit Incharge" value="${escHtml(swotState.subjectRole)}">
    </div>
    <div class="field">
      <label for="swot-evaluator">Conducted by <span style="color:var(--ink-soft);font-weight:400;">(optional)</span></label>
      <input type="text" id="swot-evaluator" placeholder="Your name and designation" value="${escHtml(swotState.evaluator)}">
    </div>
    <div class="navrow">
      <span></span>
      <button type="button" class="primary" id="swotStartBtn">Start with Strengths →</button>
    </div>
    <div class="footlink"><a id="swotAdminLink">Admin Submissions View</a></div>
  `;
}

function renderSwotCategory(cat) {
  const c = SWOT_CATS[cat];
  const idx = SWOT_CAT_ORDER.indexOf(cat);
  return `
    <p class="eyebrow">SWOT Rounds · ${swotState.subject ? escHtml(swotState.subject) : "Untitled Subject"}</p>
    <h1 style="color:var(--${c.color})">${c.label}</h1>
    <p class="sub">${c.sub}</p>
    ${swotVitals(idx + 1)}
    <div class="stepper">
      ${SWOT_CAT_ORDER.map((k, i) => `<span class="steptab ${k === cat ? 'active' : ''}" data-goto="${i + 1}">${SWOT_CATS[k].label}</span>`).join("")}
    </div>
    <div style="margin-top:18px;">
    ${c.questions.map((q, i) => `
      <div class="qcard" style="--cat-text:var(--${c.color}-text); --cat-light:var(--${c.color}-light);">
        <span class="qnum">Q${i + 1}</span>
        <p class="qtext">${escHtml(q)}</p>
        <textarea data-cat="${cat}" data-qidx="${i}" placeholder="One point per line. Leave blank to skip.">${escHtml(swotState.answers[cat][i] || "")}</textarea>
      </div>
    `).join("")}
    </div>
    <div class="navrow">
      <button type="button" id="swotBackBtn">← Back</button>
      <button type="button" class="primary" id="swotNextBtn">${idx === 3 ? "Review Full SWOT →" : "Next: " + SWOT_CATS[SWOT_CAT_ORDER[idx + 1]].label + " →"}</button>
    </div>
  `;
}

function swotBulletsFor(cat) {
  const out = [];
  SWOT_CATS[cat].questions.forEach((q, i) => {
    const raw = swotState.answers[cat][i] || "";
    raw.split("\n").map(s => s.trim()).filter(Boolean).forEach(line => out.push(line));
  });
  swotState.extra[cat].forEach(line => out.push(line));
  return out;
}

function swotQuadHtml(cat) {
  const c = SWOT_CATS[cat];
  const items = swotBulletsFor(cat);
  return `
    <div class="quad" style="--quad-light:var(--${c.color}-light); --quad-text:var(--${c.color}-text); --quad-line:var(--${c.color});">
      <h3>${c.label}</h3>
      <span class="qcount">${items.length} point${items.length === 1 ? "" : "s"}</span>
      ${items.length ? `<ul>${items.map((it, i) => `<li>${escHtml(it)}<span class="rm" data-rmcat="${cat}" data-rmidx="${i}" title="Remove">✕</span></li>`).join("")}</ul>` : `<p class="empty-quad">Nothing entered yet.</p>`}
      <div class="addline">
        <input type="text" placeholder="Add a point" data-addcat="${cat}">
        <button type="button" data-addbtn="${cat}">Add</button>
      </div>
    </div>
  `;
}

function renderSwotReview() {
  const today = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  return `
    <p class="eyebrow">SWOT Rounds · Complete</p>
    <div class="topbar"><h1>SWOT Summary</h1></div>
    <p class="metaline"><strong>${escHtml(swotState.subject) || "Untitled Subject"}</strong>${swotState.subjectRole ? " — " + escHtml(swotState.subjectRole) : ""}</p>
    <p class="metaline">${swotState.evaluator ? "Conducted by " + escHtml(swotState.evaluator) + " · " : ""}${today}</p>
    ${swotVitals(5)}
    <div class="matrix">
      ${swotQuadHtml("S")}${swotQuadHtml("W")}${swotQuadHtml("O")}${swotQuadHtml("T")}
    </div>
    <div class="exportbar">
      <button type="button" id="swotPrintBtn">Print / Save as PDF</button>
      <button type="button" id="swotCopyBtn">Copy as Text</button>
      <button type="button" id="swotDownloadBtn">Download .txt</button>
      <button type="button" class="ghost" id="swotEditBtn">← Edit Answers</button>
      <button type="button" class="ghost" id="swotNewBtn">Start New SWOT</button>
    </div>
  `;
}

function renderSwotAdminLogin() {
  return `
    <p class="eyebrow">SWOT Rounds · Admin</p>
    <h1>Admin Access</h1>
    <p class="sub">Enter the admin passcode to view saved SWOT entries.</p>
    <div class="field">
      <label for="swotAdminPass">Passcode</label>
      <input type="text" id="swotAdminPass" placeholder="Enter passcode">
    </div>
    ${swotState.adminError ? `<p style="color:var(--t-text); font-size:13px;">${escHtml(swotState.adminError)}</p>` : ""}
    <div class="navrow">
      <button type="button" id="swotAdminBack">← Back</button>
      <button type="button" class="primary" id="swotAdminSubmit">Enter</button>
    </div>
  `;
}

function renderSwotAdminList() {
  const entries = swotState.adminEntries || [];
  return `
    <p class="eyebrow">SWOT Rounds · Admin</p>
    <div class="topbar"><h1>Submissions Overview</h1></div>
    <p class="sub">${entries.length} SWOT entry saved on screen.</p>
    <div class="exportbar">
      <button type="button" class="ghost" id="swotAdminExit">Exit Admin View</button>
    </div>
  `;
}

function renderSwotAdminDetail() {
  return renderSwotAdminList();
}

function buildSwotPlainText() {
  const today = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  let out = `SWOT ANALYSIS - HOSPITAL LEADERSHIP\n`;
  out += `Subject: ${swotState.subject || "Untitled Subject"}${swotState.subjectRole ? " (" + swotState.subjectRole + ")" : ""}\n`;
  if (swotState.evaluator) out += `Conducted by: ${swotState.evaluator}\n`;
  out += `Date: ${today}\n\n`;
  SWOT_CAT_ORDER.forEach(cat => {
    out += `${SWOT_CATS[cat].label.toUpperCase()}\n`;
    const items = swotBulletsFor(cat);
    if (!items.length) out += `  (none entered)\n`;
    items.forEach(it => out += `  - ${it}\n`);
    out += `\n`;
  });
  return out;
}

function wireSwotEvents() {
  const app = document.getElementById('swot-app');
  if (!app) return;

  const subjectEl = document.getElementById('swot-subject');
  if (subjectEl) subjectEl.oninput = e => swotState.subject = e.target.value;
  const roleEl = document.getElementById('swot-subjectRole');
  if (roleEl) roleEl.oninput = e => swotState.subjectRole = e.target.value;
  const evalEl = document.getElementById('swot-evaluator');
  if (evalEl) evalEl.oninput = e => swotState.evaluator = e.target.value;

  const startBtn = document.getElementById('swotStartBtn');
  if (startBtn) startBtn.onclick = () => { swotState.step = 1; renderSwot(); window.scrollTo(0, 0); };

  const adminLink = document.getElementById('swotAdminLink');
  if (adminLink) adminLink.onclick = () => { swotState.mode = "adminLogin"; swotState.adminError = ""; renderSwot(); window.scrollTo(0, 0); };

  app.querySelectorAll('textarea[data-cat]').forEach(ta => {
    ta.oninput = e => { swotState.answers[e.target.dataset.cat][e.target.dataset.qidx] = e.target.value; };
  });

  const backBtn = document.getElementById('swotBackBtn');
  if (backBtn) backBtn.onclick = () => { swotState.step = Math.max(0, swotState.step - 1); renderSwot(); window.scrollTo(0, 0); };
  const nextBtn = document.getElementById('swotNextBtn');
  if (nextBtn) nextBtn.onclick = () => { swotState.step = Math.min(5, swotState.step + 1); renderSwot(); window.scrollTo(0, 0); };

  app.querySelectorAll('.steptab').forEach(t => {
    t.onclick = e => { swotState.step = parseInt(e.target.dataset.goto, 10); renderSwot(); window.scrollTo(0, 0); };
  });

  app.querySelectorAll('[data-addbtn]').forEach(btn => {
    btn.onclick = e => {
      const cat = e.target.dataset.addbtn;
      const input = app.querySelector(`input[data-addcat="${cat}"]`);
      const val = input ? input.value.trim() : '';
      if (val) { swotState.extra[cat].push(val); renderSwot(); }
    };
  });

  app.querySelectorAll('.rm').forEach(x => {
    x.onclick = e => {
      const cat = e.target.dataset.rmcat;
      const idx = parseInt(e.target.dataset.rmidx, 10);
      const qCount = SWOT_CATS[cat].questions.reduce((acc, _, i) => {
        const lines = (swotState.answers[cat][i] || "").split("\n").map(s => s.trim()).filter(Boolean);
        return acc + lines.length;
      }, 0);
      if (idx < qCount) {
        let running = 0;
        for (let i = 0; i < SWOT_CATS[cat].questions.length; i++) {
          let lines = (swotState.answers[cat][i] || "").split("\n").map(s => s.trim()).filter(Boolean);
          if (idx < running + lines.length) {
            lines.splice(idx - running, 1);
            swotState.answers[cat][i] = lines.join("\n");
            break;
          }
          running += lines.length;
        }
      } else {
        swotState.extra[cat].splice(idx - qCount, 1);
      }
      renderSwot();
    };
  });

  const printBtn = document.getElementById('swotPrintBtn');
  if (printBtn) printBtn.onclick = () => { window.print(); };

  const copyBtn = document.getElementById('swotCopyBtn');
  if (copyBtn) copyBtn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(buildSwotPlainText());
      showToast('SWOT Summary copied to clipboard!', 'success');
    } catch (e) {
      showToast('Failed to copy text', 'error');
    }
  };

  const downloadBtn = document.getElementById('swotDownloadBtn');
  if (downloadBtn) downloadBtn.onclick = () => {
    const text = buildSwotPlainText();
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const name = (swotState.subject || "swot").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    a.href = url;
    a.download = `SWOT-${name || 'analysis'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const adminBack = document.getElementById('swotAdminBack');
  if (adminBack) adminBack.onclick = () => { swotState.mode = "user"; renderSwot(); };

  const adminSubmit = document.getElementById('swotAdminSubmit');
  if (adminSubmit) adminSubmit.onclick = () => {
    const val = (document.getElementById('swotAdminPass')?.value || "").trim();
    if (SWOT_ADMIN_CODES.includes(val)) {
      swotState.adminError = "";
      swotState.mode = "admin";
      renderSwot();
    } else {
      swotState.adminError = "That passcode isn't recognized.";
      renderSwot();
    }
  };

  const adminExit = document.getElementById('swotAdminExit');
  if (adminExit) adminExit.onclick = () => { swotState.mode = "user"; renderSwot(); };

  const editBtn = document.getElementById('swotEditBtn');
  if (editBtn) editBtn.onclick = () => { swotState.step = 1; renderSwot(); window.scrollTo(0, 0); };

  const newBtn = document.getElementById('swotNewBtn');
  if (newBtn) newBtn.onclick = () => {
    if (confirm("Start a new SWOT? This clears everything on screen.")) {
      swotState = { mode:"user", step:0, id:null, subject:"", subjectRole:"", evaluator:"", answers:{S:{},W:{},O:{},T:{}}, extra:{S:[],W:[],O:[],T:[]}, adminError:"", adminEntries:null, adminDetailId:null };
      renderSwot(); window.scrollTo(0, 0);
    }
  };
}

// Admin Helper: Upload Leadership Workbook File
async function uploadWorkbookFile(fileInput) {
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    showToast('Please select a workbook file to upload.', 'warning');
    return;
  }
  const file = fileInput.files[0];
  
  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Data = e.target.result;
    try {
      const res = await fetch(`${API_BASE}/upload-workbook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify({ fileName: file.name, fileData: base64Data })
      });
      const data = await res.json();
      if (data.success) {
        showToast('Leadership Workbook uploaded successfully!', 'success');
      } else {
        showToast('Upload failed: ' + (data.error || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Workbook upload failed:', err);
      showToast('Network error while uploading workbook.', 'error');
    }
  };
  reader.readAsDataURL(file);
}

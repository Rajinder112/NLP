const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const DB_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DB_DIR, 'db.json');

// Pool configuration
let pool = null;
let isPg = false;
let pgInitPromise = null;

if (process.env.DATABASE_URL) {
  isPg = true;
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false // Required for Render Postgres connections
    }
  });

  pgInitPromise = (async () => {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS settings (
          key VARCHAR(50) PRIMARY KEY,
          value TEXT
        );
      `);
      await pool.query(`
        CREATE TABLE IF NOT EXISTS collections (
          name VARCHAR(50) NOT NULL,
          id VARCHAR(100) NOT NULL,
          data JSONB NOT NULL,
          PRIMARY KEY (name, id)
        );
      `);

      const res = await pool.query("SELECT COUNT(*) FROM settings");
      if (parseInt(res.rows[0].count, 10) === 0) {
        console.log("Postgres database is empty. Running initial seeder...");
        await seedPostgres();
      }
    } catch (err) {
      console.error("Error initializing PostgreSQL schema:", err);
    }
  })();
}

// Ensure database directory and file exist (for JSON mode)
function initDb() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    const initialSchema = {
      settings: {
        eventState: 'Upcoming',
        eventDate: '2026-07-26',
        eventDateDisplay: '10-11 July & 26 July 2026',
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
      feedback: [],
      overview: [],
      event_days: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialSchema, null, 2), 'utf8');
  }
}

// Atomic read (for JSON mode)
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

// Atomic write to prevent file corruption (for JSON mode)
function writeData(data) {
  initDb();
  const tempFile = `${DB_FILE}.tmp`;
  fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tempFile, DB_FILE);
}

// Postgres Seeder
async function seedPostgres() {
  const seedData = {
    settings: {
      eventState: 'Upcoming',
      eventDate: '2026-07-26',
      eventDateDisplay: '10-11 July & 26 July 2026',
      eventVenue: '10th Floor ITC Department (In-House) & Outbound Facility',
      lastUpdatedPdf: new Date().toISOString(),
      pdfVersion: '1.0'
    },
    attendance: [
      {
        id: 'att_seed_1',
        employeeId: 'EMP1001',
        fullName: 'Sarah Jenkins',
        designation: 'Nursing Superintendent',
        department: 'Critical Care Unit',
        mobileNumber: '+91 98765 43210',
        email: 's.jenkins@hospital.org',
        attendanceDate: '2026-07-10',
        session: 'Session 1: Opening Address & Program Vision',
        batch: 'Batch 1',
        checkInTime: '08:45:12',
        submissionTimestamp: '2026-07-10T08:45:12.342Z',
        status: 'Checked In',
        deviceIdentifier: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      {
        id: 'att_seed_2',
        employeeId: 'EMP1002',
        fullName: 'David Kowalski',
        designation: 'Assistant Nursing Superintendent',
        department: 'Emergency & Trauma',
        mobileNumber: '+91 98765 43211',
        email: 'd.kowalski@hospital.org',
        attendanceDate: '2026-07-10',
        session: 'Session 1: Opening Address & Program Vision',
        batch: 'Batch 1',
        checkInTime: '08:52:03',
        submissionTimestamp: '2026-07-10T08:52:03.112Z',
        status: 'Checked In',
        deviceIdentifier: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)'
      },
      {
        id: 'att_seed_3',
        employeeId: 'EMP1003',
        fullName: 'Priya Sharma',
        designation: 'Ward Incharge',
        department: 'Pediatric General',
        mobileNumber: '+91 98765 43212',
        email: 'priya.s@hospital.org',
        attendanceDate: '2026-07-10',
        session: 'Session 1: Opening Address & Program Vision',
        batch: 'Batch 1',
        checkInTime: '08:58:45',
        submissionTimestamp: '2026-07-10T08:58:45.922Z',
        status: 'Checked In',
        deviceIdentifier: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2_1)'
      }
    ],
    schedule: [
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
      {
        id: 'sch_day5_1',
        day: 'Day 5',
        time: '08:30 AM - 09:00 AM',
        title: 'Registration',
        speaker: 'Organising Committee',
        type: 'Activity',
        venue: 'Main Auditorium / 10th Floor ITC',
        status: 'Upcoming',
        details: 'Participant Registration'
      },
      {
        id: 'sch_day5_2',
        day: 'Day 5',
        time: '09:00 AM - 09:30 AM',
        title: 'Welcome Address & Lamp Lighting',
        speaker: 'Management',
        type: 'Keynote',
        venue: 'Main Auditorium',
        status: 'Upcoming',
        details: 'Medanta Leadership'
      },
      {
        id: 'sch_day5_3',
        day: 'Day 5',
        time: '09:30 AM - 09:45 AM',
        title: 'Message to the Group & Clinical Governance',
        speaker: 'Vice President – Operations',
        type: 'Keynote',
        venue: 'Main Auditorium',
        status: 'Upcoming',
        details: '• Organization\'s Expectations'
      },
      {
        id: 'sch_day5_4',
        day: 'Day 5',
        time: '09:45 AM - 10:00 AM',
        title: 'Programme Introduction',
        speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
        type: 'Workshop',
        venue: 'Main Auditorium',
        status: 'Upcoming',
        details: '• Programme Expectations • Curriculum Overview • Learning Objectives'
      },
      {
        id: 'sch_day5_5',
        day: 'Day 5',
        time: '10:00 AM - 10:15 AM',
        title: 'Tea Break',
        speaker: 'Organising Committee',
        type: 'Break',
        venue: 'Dining Area',
        status: 'Upcoming',
        details: 'Morning Refreshment Break'
      },
      {
        id: 'sch_day5_6',
        day: 'Day 5',
        time: '10:15 AM - 12:00 PM',
        title: 'The Role of Middle Management',
        speaker: 'External Speaker',
        type: 'Lecture',
        venue: 'Main Auditorium',
        status: 'Upcoming',
        details: '• Middle Management Skills • Managing Upward and Downward • Bridging Leadership and Teams • Effective Leadership for Middle Managers • Aligning Top Management Vision with Team Execution • Achieving Middle Management Excellence • Managing Leadership Expectations and Team Performance'
      },
      {
        id: 'sch_day5_7',
        day: 'Day 5',
        time: '12:00 PM - 01:00 PM',
        title: 'Team Building Activity',
        speaker: 'Mr. Rohit Singh & Dr. Pallavi Singh',
        type: 'Activity',
        venue: 'Main Auditorium / Activity Hall',
        status: 'Upcoming',
        details: '• Building an Effective Team • Role of the Nurse Manager • Staffing in Nursing Units • Managing Team Members\' Performance • Interviewing Skills'
      },
      {
        id: 'sch_day5_8',
        day: 'Day 5',
        time: '01:00 PM - 02:00 PM',
        title: 'Lunch Break',
        speaker: 'Organising Committee',
        type: 'Break',
        venue: 'Dining Area',
        status: 'Upcoming',
        details: 'Networking Lunch'
      },
      {
        id: 'sch_day5_9',
        day: 'Day 5',
        time: '02:00 PM - 02:30 PM',
        title: 'SWOT Analysis',
        speaker: 'Training Team',
        type: 'Workshop',
        venue: 'Main Auditorium',
        status: 'Upcoming',
        details: '• Interactive Warm-up Activity • Individual & Team SWOT Exercise'
      },
      {
        id: 'sch_day5_10',
        day: 'Day 5',
        time: '02:30 PM - 03:30 PM',
        title: 'Nursing Leadership Skills',
        speaker: 'Ms. Precila Fernandes',
        type: 'Lecture',
        venue: 'Main Auditorium',
        status: 'Upcoming',
        details: '• Personal Branding for Nurse Leaders • Leadership Marketing & Professional Image • Quality Improvement & Performance Excellence • Practical Implementation of Leadership Skills'
      },
      {
        id: 'sch_day5_11',
        day: 'Day 5',
        time: '03:30 PM - 04:00 PM',
        title: 'Team Building',
        speaker: 'Training Team',
        type: 'Activity',
        venue: 'Activity Hall',
        status: 'Upcoming',
        details: '• Interactive Team-Building Activity'
      },
      {
        id: 'sch_day5_12',
        day: 'Day 5',
        time: '04:00 PM - 04:15 PM',
        title: 'Tea Break',
        speaker: 'Organising Committee',
        type: 'Break',
        venue: 'Dining Area',
        status: 'Upcoming',
        details: 'Afternoon Refreshment Break'
      },
      {
        id: 'sch_day5_13',
        day: 'Day 5',
        time: '04:15 PM - 05:00 PM',
        title: 'Group Assignment Presentation',
        speaker: 'Training Team',
        type: 'Workshop',
        venue: 'Main Auditorium',
        status: 'Upcoming',
        details: '• Group Presentations • Peer Learning & Feedback'
      },
      {
        id: 'sch_day5_14',
        day: 'Day 5',
        time: '05:00 PM - 06:00 PM',
        title: 'Discussion & Conclusion',
        speaker: 'Ms. Precila Fernandes',
        type: 'Keynote',
        venue: 'Main Auditorium',
        status: 'Upcoming',
        details: '• Open Discussion • Key Takeaways • Action Plan • Closing Remarks & Vote of Thanks'
      }
    ],
    announcements: [
      {
        id: 'ann_1',
        title: 'Welcome to the 1st NLP Conference',
        message: 'Welcome all Middle-Level Incharges! Please complete your registration at the front desk and verify your badge detail.',
        date: '2026-07-09',
        time: '09:00',
        category: 'General',
        priority: 'Medium'
      },
      {
        id: 'ann_2',
        title: 'Urgent: Room Change for Session 4',
        message: 'The Workshop on Resource Optimization & Scheduling will now be held in 10th Floor ITC Seminar Room instead of Conference Room 1.',
        date: '2026-07-09',
        time: '10:15',
        category: 'Schedule',
        priority: 'High'
      },
      {
        id: 'ann_3',
        title: 'Download the Updated Event PDF',
        message: 'The official NLP Event Booklet v1.0 is now available in the downloads section. Please download it for reference.',
        date: '2026-07-09',
        time: '11:00',
        category: 'General',
        priority: 'Low'
      }
    ],
    leaders: [
      {
        id: 'lead_1',
        category: 'Program Leadership',
        fullName: 'Dr. Evelyn Carter',
        designation: 'Chief Nursing Officer & Program Director',
        organisation: 'National Healthcare Trust',
        roleInEvent: 'Main Convener & Mentor',
        sessionTitle: 'Opening Address & NLP Vision',
        sessionDateTime: 'July 24, 2026 - 09:00 AM',
        shortProfile: 'Dr. Evelyn Carter has over 25 years of experience in healthcare administration and nursing leadership. She has pioneered several national nurse-mentorship programs and holds a doctorate in Nursing Practice from Johns Hopkins University.',
        contactDetails: 'e.carter@healthcaretrust.org (Public office: Room 302, Main Tower)',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 'lead_2',
        category: 'Faculty',
        fullName: 'Prof. Marcus Vance',
        designation: 'Professor of Health Systems Management',
        organisation: 'Academy of Nursing Sciences',
        roleInEvent: 'Lead Facilitator',
        sessionTitle: 'Effective Communication in High-Stress Units',
        sessionDateTime: 'July 24, 2026 - 10:00 AM',
        shortProfile: 'Professor Vance specializes in healthcare team dynamics, organizational behavior, and crisis communication. He conducts leadership seminars globally for critical care networks.',
        contactDetails: 'm.vance@academyofnursing.edu',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 'lead_3',
        category: 'Guest Speakers',
        fullName: 'Sister Clara Thomas',
        designation: 'Director of Clinical Excellence',
        organisation: 'St. Jude Healthcare Alliance',
        roleInEvent: 'Guest Speaker',
        sessionTitle: 'Guest Session by Sister Clara Thomas',
        topic: 'Evidence-Based Quality Indicators',
        learningObjective: 'Understand how nursing leadership directly drives quality indicator improvements in multi-specialty wards.',
        sessionDateTime: 'July 24, 2026 - 03:45 PM',
        shortProfile: 'Sister Clara is a veteran nursing administrator recognized for her work in reducing hospital-acquired infection rates. She advises governmental boards on nursing policy.',
        contactDetails: 'clara.thomas@stjudealliance.org',
        photo: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 'lead_4',
        category: 'Event Coordinators',
        fullName: 'Robert Miller',
        designation: 'Senior Nursing Administrator',
        organisation: 'NLP Committee',
        roleInEvent: 'Lead Coordinator',
        sessionTitle: 'Registration & Logistics Coordination',
        sessionDateTime: 'Ongoing',
        shortProfile: 'Robert manages clinical logistics and coordinates the scheduling for all batches of the Nursing Leadership Program.',
        contactDetails: 'r.miller@nlp-event.org',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
      }
    ],
    committee: [
      {
        id: 'com_1',
        fullName: 'Margaret O\'Connor',
        role: 'Organising Committee Chairperson',
        designation: 'Director of Nursing Education',
        department: 'Clinical Training Division',
        phoneNumber: '+91 99999 88881',
        email: 'm.oconnor@nlp-committee.org',
        responsibility: 'Oversees overall planning, curricula design, and execution of the Nursing Leadership Program events across all batches.',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 'com_2',
        fullName: 'Jonathan Reed',
        role: 'Logistics Coordinator',
        designation: 'Head of Hospital Operations',
        department: 'Hospital Administration',
        phoneNumber: '+91 99999 88882',
        email: 'j.reed@nlp-committee.org',
        responsibility: 'Manages venue preparation, audio-visual technical setups, food and beverage coordination, and attendee flow.',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 'com_3',
        fullName: 'Ananya Nair',
        role: 'Participant Liaison',
        designation: 'Senior Nurse Educator',
        department: 'Staff Development',
        phoneNumber: '+91 99999 88883',
        email: 'ananya.n@nlp-committee.org',
        responsibility: 'Coordinates with middle-level incharges across multiple centers, handles registration inquiries, and processes session attendance logs.',
        photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400'
      }
    ],
    gallery: [
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
        category: 'Team Exercises',
        title: 'Problem-Solving Workshops',
        description: 'Interactive problem-solving session focusing on ward scheduling optimization.',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600'
      }
    ],
    resources: [
      {
        id: 'res_1',
        title: 'Event Information Booklet',
        description: 'Comprehensive program outline, batch schedules, speaker profiles, and venue directories.',
        category: 'Booklets',
        fileSize: '2.4 MB',
        updatedAt: '2026-07-09T11:00:00.000Z',
        version: '1.0',
        fileName: 'event_information_booklet.pdf',
        downloadUrl: '/assets/event_information_booklet.pdf'
      },
      {
        id: 'res_2',
        title: 'Program Agenda (At a Glance)',
        description: 'Quick Reference timeline sheet containing session slots and hall venues.',
        category: 'Agenda',
        fileSize: '820 KB',
        updatedAt: '2026-07-09T09:30:00.000Z',
        version: '1.0',
        fileName: 'nlp_agenda_summary.pdf',
        downloadUrl: '/assets/event_information_booklet.pdf'
      },
      {
        id: 'res_3',
        title: 'Effective Communication Slides',
        description: 'Lecture slides presented by Prof. Marcus Vance on communication frameworks in stressful units.',
        category: 'Presentations',
        fileSize: '4.8 MB',
        updatedAt: '2026-07-09T12:00:00.000Z',
        version: '1.1',
        fileName: 'communication_slides.pdf',
        downloadUrl: '/assets/event_information_booklet.pdf'
      },
      {
        id: 'res_4',
        title: 'Staff Scheduling Activity Sheet',
        description: 'Worksheet printout containing scenarios for the scheduling optimization workshop.',
        category: 'Activity Sheets',
        fileSize: '1.2 MB',
        updatedAt: '2026-07-09T08:00:00.000Z',
        version: '1.0',
        fileName: 'scheduling_worksheet.pdf',
        downloadUrl: '/assets/event_information_booklet.pdf'
      }
    ],
    overview: [
      {
        id: 'ov_1',
        title: '1st Event Objective',
        icon: 'info',
        description: 'Establishing the core values of NLP, configuring functional nurse teams, and initializing professional growth targets for Batch 1, 2026.'
      },
      {
        id: 'ov_2',
        title: 'Date & Schedule',
        icon: 'calendar',
        description: '10-11 July & 26 July 2026. Schedule is spread across In-House Workshops (Days 1 & 2) and Outside Leadership Training (Day 3).'
      },
      {
        id: 'ov_3',
        title: 'Venue & Lodging',
        icon: 'map-pin',
        description: 'Held at the 10th Floor ITC Department (In-House) & Outbound Facility. Equipped for professional workshops and interactive team exercises.'
      },
      {
        id: 'ov_4',
        title: 'Target Participants',
        icon: 'shield-check',
        description: 'All newly appointed and senior Middle-Level Incharges across regional campuses registered under Batch 1.'
      }
    ],
    feedback: [],
    event_days: [
      { id: 'day_1', dayNumber: 1, date: '2026-07-10' },
      { id: 'day_2', dayNumber: 2, date: '2026-07-11' },
      { id: 'day_3', dayNumber: 3, date: '2026-07-12' },
      { id: 'day_4', dayNumber: 4, date: '2026-07-26' }
    ]
  };

  // Seed settings
  for (const [key, value] of Object.entries(seedData.settings)) {
    await pool.query(
      "INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2",
      [key, value]
    );
  }

  // Seed collections
  const collections = [
    'attendance', 'schedule', 'announcements', 'leaders', 'committee', 'gallery', 'resources', 'overview', 'feedback', 'event_days'
  ];
  for (const name of collections) {
    const list = seedData[name] || [];
    for (const item of list) {
      await pool.query(
        "INSERT INTO collections (name, id, data) VALUES ($1, $2, $3) ON CONFLICT (name, id) DO NOTHING",
        [name, item.id, JSON.stringify(item)]
      );
    }
  }
  console.log("Postgres database seeded successfully!");
}

// Database Helpers
const db = {
  getAll: async () => {
    if (isPg) {
      await pgInitPromise;
      const settingsObj = await db.getSettings();
      const data = { settings: settingsObj };
      const collectionsList = [
        'attendance', 'schedule', 'announcements', 'leaders', 'committee', 'gallery', 'resources', 'overview', 'feedback'
      ];
      for (const name of collectionsList) {
        data[name] = await db.getCollection(name);
      }
      return data;
    } else {
      return readData();
    }
  },

  getCollection: async (name) => {
    if (isPg) {
      await pgInitPromise;
      const res = await pool.query("SELECT data FROM collections WHERE name = $1", [name]);
      return res.rows.map(row => row.data);
    } else {
      const data = readData();
      return data[name] || [];
    }
  },

  saveCollection: async (name, items) => {
    if (isPg) {
      await pgInitPromise;
      const client = await pool.connect();
      try {
        await client.query("BEGIN");
        await client.query("DELETE FROM collections WHERE name = $1", [name]);
        for (const item of items) {
          await client.query(
            "INSERT INTO collections (name, id, data) VALUES ($1, $2, $3)",
            [name, item.id, JSON.stringify(item)]
          );
        }
        await client.query("COMMIT");
      } catch (err) {
        await client.query("ROLLBACK");
        throw err;
      } finally {
        client.release();
      }
    } else {
      const data = readData();
      data[name] = items;
      writeData(data);
    }
  },

  getSettings: async () => {
    if (isPg) {
      await pgInitPromise;
      const res = await pool.query("SELECT key, value FROM settings");
      const settings = {};
      res.rows.forEach(row => {
        settings[row.key] = row.value;
      });
      return settings;
    } else {
      const data = readData();
      return data.settings || {};
    }
  },

  saveSettings: async (settings) => {
    if (isPg) {
      await pgInitPromise;
      for (const [key, value] of Object.entries(settings)) {
        await pool.query(
          "INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2",
          [key, String(value)]
        );
      }
    } else {
      const data = readData();
      data.settings = { ...data.settings, ...settings };
      writeData(data);
    }
  },

  getAttendance: async () => db.getCollection('attendance'),

  addAttendance: async (record) => {
    if (isPg) {
      await pgInitPromise;
      const attendanceList = await db.getCollection('attendance');
      
      const duplicate = (record.employeeId && record.employeeId.trim()) ? attendanceList.find(r => 
        r.employeeId && r.employeeId.trim().toLowerCase() === record.employeeId.trim().toLowerCase() &&
        r.attendanceDate === record.attendanceDate &&
        r.session.trim().toLowerCase() === record.session.trim().toLowerCase()
      ) : null;

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

      await pool.query(
        "INSERT INTO collections (name, id, data) VALUES ($1, $2, $3)",
        ['attendance', newRecord.id, JSON.stringify(newRecord)]
      );
      return newRecord;
    } else {
      const attendanceList = await db.getCollection('attendance');
      const duplicate = (record.employeeId && record.employeeId.trim()) ? attendanceList.find(r => 
        r.employeeId && r.employeeId.trim().toLowerCase() === record.employeeId.trim().toLowerCase() &&
        r.attendanceDate === record.attendanceDate &&
        r.session.trim().toLowerCase() === record.session.trim().toLowerCase()
      ) : null;

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
      await db.saveCollection('attendance', attendanceList);
      return newRecord;
    }
  },

  updateAttendance: async (id, updatedFields) => {
    if (isPg) {
      await pgInitPromise;
      const res = await pool.query("SELECT data FROM collections WHERE name = $1 AND id = $2", ['attendance', id]);
      if (res.rows.length === 0) throw new Error('Attendance record not found.');
      const record = res.rows[0].data;
      const updatedRecord = { ...record, ...updatedFields };
      await pool.query(
        "UPDATE collections SET data = $1 WHERE name = $2 AND id = $3",
        [JSON.stringify(updatedRecord), 'attendance', id]
      );
      return updatedRecord;
    } else {
      const attendanceList = await db.getCollection('attendance');
      const index = attendanceList.findIndex(r => r.id === id);
      if (index === -1) throw new Error('Attendance record not found.');
      
      attendanceList[index] = { ...attendanceList[index], ...updatedFields };
      await db.saveCollection('attendance', attendanceList);
      return attendanceList[index];
    }
  },

  deleteAttendance: async (id) => {
    if (isPg) {
      await pgInitPromise;
      const res = await pool.query("DELETE FROM collections WHERE name = $1 AND id = $2", ['attendance', id]);
      if (res.rowCount === 0) throw new Error('Attendance record not found.');
    } else {
      const attendanceList = await db.getCollection('attendance');
      const filtered = attendanceList.filter(r => r.id !== id);
      if (filtered.length === attendanceList.length) throw new Error('Attendance record not found.');
      await db.saveCollection('attendance', filtered);
    }
  },

  addItem: async (collectionName, item) => {
    const newItem = {
      id: collectionName.substr(0, 3) + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      ...item
    };
    if (isPg) {
      await pgInitPromise;
      await pool.query(
        "INSERT INTO collections (name, id, data) VALUES ($1, $2, $3)",
        [collectionName, newItem.id, JSON.stringify(newItem)]
      );
    } else {
      const list = await db.getCollection(collectionName);
      list.push(newItem);
      await db.saveCollection(collectionName, list);
    }
    return newItem;
  },

  updateItem: async (collectionName, id, updatedFields) => {
    if (isPg) {
      await pgInitPromise;
      const res = await pool.query("SELECT data FROM collections WHERE name = $1 AND id = $2", [collectionName, id]);
      if (res.rows.length === 0) throw new Error(`Item not found in ${collectionName}`);
      const item = res.rows[0].data;
      const updatedItem = { ...item, ...updatedFields };
      await pool.query(
        "UPDATE collections SET data = $1 WHERE name = $2 AND id = $3",
        [JSON.stringify(updatedItem), collectionName, id]
      );
      return updatedItem;
    } else {
      const list = await db.getCollection(collectionName);
      const index = list.findIndex(item => item.id === id);
      if (index === -1) throw new Error(`Item not found in ${collectionName}`);
      list[index] = { ...list[index], ...updatedFields };
      await db.saveCollection(collectionName, list);
      return list[index];
    }
  },

  deleteItem: async (collectionName, id) => {
    if (isPg) {
      await pgInitPromise;
      const res = await pool.query("DELETE FROM collections WHERE name = $1 AND id = $2", [collectionName, id]);
      if (res.rowCount === 0) throw new Error(`Item not found in ${collectionName}`);
    } else {
      const list = await db.getCollection(collectionName);
      const filtered = list.filter(item => item.id !== id);
      if (filtered.length === list.length) throw new Error(`Item not found in ${collectionName}`);
      await db.saveCollection(collectionName, filtered);
    }
  }
};

module.exports = db;

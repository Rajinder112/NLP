const db = require('./db');

console.log('Seeding NLP Database...');

const seedData = {
  settings: {
    eventState: 'Upcoming', // Can be 'Upcoming', 'Live', 'Completed'
    eventDate: '2026-07-26',
    eventVenue: '10th Floor ITC Department (In-House) & Outbound Facility',
    lastUpdatedPdf: new Date().toISOString(),
    pdfVersion: '1.0'
  },
  
  // Seed attendance records
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

  // Seed Timeline schedule
  schedule: [
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
  ],

  // Seed Announcements
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

  // Seed Leaders, Faculty & Guest Speakers
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

  // Seed Committee
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

  // Seed Gallery
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

  // Seed Resources
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
  feedback: []
};

// Write initial structures
db.saveSettings(seedData.settings);
db.saveCollection('attendance', seedData.attendance);
db.saveCollection('schedule', seedData.schedule);
db.saveCollection('announcements', seedData.announcements);
db.saveCollection('leaders', seedData.leaders);
db.saveCollection('committee', seedData.committee);
db.saveCollection('gallery', seedData.gallery);
db.saveCollection('resources', seedData.resources);
db.saveCollection('overview', seedData.overview);
db.saveCollection('feedback', seedData.feedback);

console.log('NLP Database seeded successfully.');

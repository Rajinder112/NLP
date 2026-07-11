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
    {
      id: 'sch_1',
      day: 'Day 1',
      time: '03:00 PM - 03:15 PM',
      title: 'Welcome and Warm up',
      speaker: 'Mr. Rohit Singh, Dr. Pallavi & Ms. Jaiprabha',
      type: 'Activity',
      venue: '10th Floor ITC Department',
      status: 'Upcoming',
      details: 'Welcome check-in, event orientation, and interactive team warm-up activity.'
    },
    {
      id: 'sch_2',
      day: 'Day 1',
      time: '03:15 PM - 04:15 PM',
      title: 'Communication',
      speaker: 'Mr. Rohit Singh & Dr. Pallavi',
      type: 'Workshop',
      venue: '10th Floor ITC Department',
      status: 'Upcoming',
      details: 'Scripting - A tool for communication, Dept. vision/mission, Conflict Management, Assertive communication, delivering complex messages simply, and listening with active intent.'
    },
    {
      id: 'sch_3',
      day: 'Day 1',
      time: '04:15 PM - 05:30 PM',
      title: 'Developing the Individuals',
      speaker: 'Mr. Rohit Singh & Dr. Pallavi',
      type: 'Lecture',
      venue: '10th Floor ITC Department',
      status: 'Upcoming',
      details: 'How to groom a Nurse to the next level, motivation, coaching styles based on needs, performance feedback, leveraging team strengths, customer feedback presentation, and punctuality.'
    },
    {
      id: 'sch_4',
      day: 'Day 1',
      time: '05:30 PM - 06:00 PM',
      title: 'Wrap up & Assignment Discussion',
      speaker: 'Ms. Jaiprabha Agarwal',
      type: 'Workshop',
      venue: '10th Floor ITC Department',
      status: 'Upcoming',
      details: 'Concluding discussions, Q&A, day-end assignments, and agenda walkthrough for the next day.'
    },
    {
      id: 'sch_5',
      day: 'Day 2',
      time: '03:00 PM - 03:15 PM',
      title: 'Recap of the Previous Day',
      speaker: 'Ms. Jaiprabha',
      type: 'Activity',
      venue: '10th Floor ITC Department',
      status: 'Upcoming',
      details: 'Learning recaps, feedback reviews, and cohort reflections from Day 1.'
    },
    {
      id: 'sch_6',
      day: 'Day 2',
      time: '03:15 PM - 04:15 PM',
      title: 'Managing Unit Performance',
      speaker: 'Mr. Rohit Singh & Dr. Pallavi',
      type: 'Lecture',
      venue: '10th Floor ITC Department',
      status: 'Upcoming',
      details: 'Time management, joint ownership & accountability, developing cross-departmental goals daily/monthly/yearly, grooming, managing organizational change, and service excellence.'
    },
    {
      id: 'sch_7',
      day: 'Day 2',
      time: '04:15 PM - 05:15 PM',
      title: 'Foundational Leadership',
      speaker: 'Mr. Rohit Singh & Dr. Pallavi',
      type: 'Lecture',
      venue: '10th Floor ITC Department',
      status: 'Upcoming',
      details: 'How leaders grow, Leadership Competency Model, leadership styles (Transformational Leadership), qualities, distinction between leadership and management, and self-assessment.'
    },
    {
      id: 'sch_8',
      day: 'Day 2',
      time: '05:15 PM - 05:45 PM',
      title: 'Leadership Skills, Branding & Marketing',
      speaker: 'Ms. Jaiprabha',
      type: 'Workshop',
      venue: '10th Floor ITC Department',
      status: 'Upcoming',
      details: 'Branding and marketing strategies, quality performance metrics in nursing leadership.'
    },
    {
      id: 'sch_9',
      day: 'Day 2',
      time: '05:45 PM - 06:00 PM',
      title: 'Group Making & Assignment Discussion',
      speaker: 'Ms. Jaiprabha Agarwal',
      type: 'Activity',
      venue: '10th Floor ITC Department',
      status: 'Upcoming',
      details: 'Formulating training groups, allocating case studies, and assigning roles for the outbound projects.'
    },
    {
      id: 'sch_10',
      day: 'Day 3',
      time: '09:00 AM - 12:00 PM',
      title: 'Outside Leadership Training: Outbound Team Exercise',
      speaker: 'External Mentors & CNO Team',
      type: 'Activity',
      venue: 'Medanta Lucknow Outbound Facility',
      status: 'Upcoming',
      details: 'Outbound experiential learning exercises, teamwork challenges, and collaborative problem-solving.'
    },
    {
      id: 'sch_11',
      day: 'Day 3',
      time: '12:00 PM - 01:00 PM',
      title: 'Program Evaluation & Closing Ceremony',
      speaker: 'Nursing Director & HR Head',
      type: 'Keynote',
      venue: 'Medanta Lucknow Outbound Facility',
      status: 'Upcoming',
      details: 'Review of cohort achievements, closing remarks, and presentation of certificate awards.'
    }
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

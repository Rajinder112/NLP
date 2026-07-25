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

  // Seed Leaders, Faculty & Guest Speakers (Official Whitelisted Profiles)
  leaders: [
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
  ],

  // Seed Organising Committee (Official Whitelisted Profiles)
  committee: [
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
  ],

  // Seed Gallery (Empty initially - photos added dynamically via Admin Panel)
  gallery: [],

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

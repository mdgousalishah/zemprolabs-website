import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'baemeds',
    title: 'BaeMeds Multinational DME',
    client: 'BaeMeds India & USA',
    category: 'E-Commerce',
    domain: 'baemeds.in / baemeds.com',
    overview: 'Multi-national e-commerce platform for a Durable Medical Equipment business operating across India and the United States. Required regulatory compliance, prescription intake, and multi-currency checkout.',
    challenge: 'The client needed a unified digital system supporting both its India-facing operations (baemeds.in) and international storefront (baemeds.com) with distinct regional inventories, medical compliance workflows, and localized payment gateways.',
    approach: 'We architected a high-performance headless e-commerce system with unified catalog management, geolocation routing, prescription document intake, and regional checkout pipelines.',
    built: [
      'Custom Headless Storefront',
      'Dual-Region Admin & Inventory Sync',
      'Automated Multi-Currency Routing (INR / USD)',
      'Prescription Intake & Compliance Pipeline'
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe API', 'Razorpay', 'Tailwind CSS'],
    link: 'https://www.baemeds.in/',
    color: '#FF6B00',
    video: '/videos/work/baemeds.mp4',
    metrics: [
      { label: 'Markets Served', value: 'India & USA' },
      { label: 'Architecture', value: 'Headless Next.js' },
      { label: 'India Storefront', value: 'baemeds.in' }
    ]
  },
  {
    id: 'erus-academy',
    title: 'Erus Academy Digital LMS',
    client: 'Erus Academy',
    category: 'Software',
    domain: 'erusacademy.in',
    overview: 'Comprehensive digital learning management platform featuring a high-performance web portal alongside native iOS and Android applications for students and instructors.',
    challenge: 'Delivering encrypted, consistent, low-latency video streaming across mobile and desktop environments while preventing unauthorized content duplication.',
    approach: 'Engineered a centralized API gateway serving both the React web application and React Native mobile clients, integrated with an adaptive HLS video streaming pipeline.',
    built: [
      'Instructor & Admin Portal',
      'Native iOS & Android Mobile Apps',
      'Secure Encrypted Video Player Pipeline',
      'Subscription & Course Checkout System'
    ],
    tech: ['React', 'React Native', 'Node.js', 'AWS MediaLive', 'PostgreSQL'],
    link: 'https://erusacademy.in',
    color: '#004AAD',
    video: '/videos/work/erus-academy.mp4',
    metrics: [
      { label: 'Platforms', value: 'Web, iOS & Android' },
      { label: 'Streaming', value: 'Adaptive HLS' },
      { label: 'Sync Pipeline', value: 'Unified API' }
    ]
  },
  {
    id: 'auvia',
    title: 'Auvia Behavioral Centers',
    client: 'Auvia Clinic Network (Austin, TX)',
    category: 'Healthcare',
    domain: 'auviatherapy.com',
    overview: 'Modern patient intake platform and digital web presence for a specialized autism therapy clinic network based in Austin, Texas.',
    challenge: 'Designing an accessible, parent-friendly digital intake workflow that satisfies strict HIPAA compliance while synchronizing data directly with practice management software.',
    approach: 'Developed an accessibility-first frontend with an end-to-end encrypted submission pipeline, reducing phone intake overhead and eliminating paperwork bottlenecks.',
    built: [
      'Accessible Clinic Web Portal',
      'HIPAA-Compliant Patient Intake Flow',
      'Automated EHR / Practice Management Bridge',
      'Digital Consent & Document Management'
    ],
    tech: ['React', 'TypeScript', 'Healthcare EHR API', 'Tailwind CSS'],
    link: 'https://auviatherapy.com',
    color: '#10B981',
    video: '/videos/work/auvia.mp4',
    metrics: [
      { label: 'Compliance', value: 'HIPAA Compliant' },
      { label: 'Intake Process', value: '100% Digital' },
      { label: 'Integration', value: 'Direct EHR Bridge' }
    ]
  },
  {
    id: 'meduscore',
    title: 'MedusCore Healthcare Recruitment',
    client: 'MedusCore UK',
    category: 'Recruitment',
    domain: 'meduscore.co.uk',
    overview: 'UK-based medical recruitment consultancy connecting healthcare organizations with qualified medical professionals across international markets.',
    challenge: 'Connecting international healthcare organizations and hospital networks with vetted medical professionals while managing multi-jurisdiction credentialing, licensing verification, and specialized medical placements.',
    approach: 'Engineered a modern digital recruitment platform and candidate intake portal optimized for international healthcare recruitment, credentialing support, and specialized candidate inquiries.',
    built: [
      'Healthcare Recruitment Web Portal',
      'Candidate Screening & Intake Workflows',
      'Specialty Recruitment Information Architecture',
      'International Placement Inquiry Pipeline'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Cloud Infrastructure', 'REST APIs'],
    link: 'https://meduscore.co.uk/',
    color: '#0EA5E9',
    video: '/videos/work/meduscore.mp4',
    metrics: [
      { label: 'Focus', value: 'Healthcare Recruitment' },
      { label: 'Headquarters', value: 'United Kingdom' },
      { label: 'Deployment', value: 'LIVE' }
    ]
  },
  {
    id: 'snowcms',
    title: 'snowCMS Automation Engine',
    client: 'Enterprise Client Architecture',
    category: 'ServiceNow',
    domain: 'ServiceNow Scoped App',
    overview: 'Proprietary ServiceNow automation utility engineered to streamline enterprise content migration, instance deployment sync, and workflow change management.',
    challenge: 'Enterprise IT teams were spending dozens of billable hours per release manually copying configuration records and CMS artifacts across staging and production instances.',
    approach: 'Created a native scoped application with automated record conflict detection, delta packaging, and one-click rollback mechanisms.',
    built: [
      'ServiceNow Scoped Application',
      'Cross-Instance Packaging Utility',
      'Conflict Detection Algorithm',
      'Automated Deployment Audit Trail'
    ],
    tech: ['ServiceNow', 'GlideScript', 'JavaScript', 'REST APIs'],
    color: '#F59E0B',
    metrics: [
      { label: 'Environment', value: 'Native ServiceNow' },
      { label: 'Deployment Flow', value: 'One-Click Sync' },
      { label: 'Verification', value: 'Automated Audit' }
    ]
  },
  {
    id: 'clinic-connect',
    title: 'Clinic Connect Automated Dispatch',
    client: 'Specialized Medical Clinics',
    category: 'Healthcare',
    domain: 'Internal Operational Platform',
    overview: 'Intelligent scheduling, provider dispatch, and multi-channel patient appointment reminder system built for multi-location healthcare clinics.',
    challenge: 'Manual phone reminders led to high appointment no-show rates and underutilized clinician calendars across clinical sites.',
    approach: 'Deployed an automated rules engine providing automated SMS and email reminders with one-tap confirmations and instant calendar rescheduling.',
    built: [
      'Provider Scheduling Matrix',
      'Twilio Multi-Channel SMS Gateway',
      'Automated No-Show Cancellation Rebooking',
      'Operational Performance Analytics'
    ],
    tech: ['React', 'Node.js', 'Twilio API', 'PostgreSQL'],
    color: '#06B6D4',
    metrics: [
      { label: 'Messaging', value: 'SMS & Email API' },
      { label: 'Dispatch Engine', value: 'Automated Rules' },
      { label: 'Architecture', value: 'Full-Stack React' }
    ]
  }
];

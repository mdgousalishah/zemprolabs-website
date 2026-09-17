import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'development',
    num: '01',
    title: 'Development',
    shortDesc: 'Digital products, scalable applications, and engineering solutions built around your business requirements.',
    longDesc: 'From modern responsive web applications and native mobile apps to automation workflows, e-commerce storefronts, SaaS platforms, internal tools, and specialized research engines—we engineer robust, maintainable software tailored to your operational workflows.',
    capabilities: [
      'Web Development & Web Applications',
      'Android Applications (Native & Cross-Platform)',
      'iOS Applications & Mobile Product Engineering',
      'Automation & API Integrations',
      'E-Commerce & Custom Headless Storefronts',
      'SaaS Products, Dashboards & Multi-Tenant Systems',
      'Internal Business Tools & Operational Utilities',
      'Research & Search Engines (Custom Discovery Platforms)',
      'Cloud-Connected Applications & Scalable Backends',
      'AI-Powered Applications & Intelligent Workflows',
      'Data-Driven Applications & Operational Dashboards',
      'IoT Solutions & Device Connectivity'
    ],
    techStack: [
      'React & Next.js',
      'TypeScript',
      'Android & iOS',
      'Node.js',
      'Python',
      'Shopify',
      'Firebase & Cloud',
      'PostgreSQL',
      'REST & GraphQL APIs',
      'IoT & Automation'
    ],
    highlight: 'Full-stack software engineering with clean architecture, strict type safety, and scalable foundations.'
  },
  {
    id: 'seo-growth',
    num: '02',
    title: 'SEO & Growth',
    shortDesc: 'Intentional technical site structure, product page search visibility, and search-facing brand presence.',
    longDesc: 'Focused on sustainable search visibility and organic discovery: search-ready architecture, technical crawlability, e-commerce product schema optimization, digital visibility, brand consistency, and performance tuning. No black-hat packages or unverified promises.',
    capabilities: [
      'Technical SEO — Site structure, crawlability & indexation audits',
      'Product SEO — E-commerce product discoverability & rich catalog schema',
      'Branding — Digital brand consistency & identity alignment',
      'Digital Visibility — Search-ready architecture & multi-page discoverability',
      'Core Web Vitals — Speed tuning, LCP/CLS & performance optimization',
      'Structured Data — Schema.org markup, rich snippets & dynamic sitemaps',
      'Search Presence — Search Console monitoring & content alignment'
    ],
    techStack: ['Technical SEO Audits', 'Core Web Vitals', 'Schema.org', 'Google Search Console', 'Product SEO', 'Brand Identity Systems'],
    highlight: 'Pristine technical crawlability, structured data, and search-aligned brand discoverability.'
  },
  {
    id: 'enterprise',
    num: '03',
    title: 'Enterprise',
    shortDesc: 'Enterprise workflow modernization, systems integration, process automation, and ServiceNow platform capabilities.',
    longDesc: 'Modernize enterprise workflows, eliminate disconnected systems, and automate operational processes. We deliver ServiceNow platform solutions, scoped application engineering, cross-platform integrations, cloud infrastructure, and robust operational systems.',
    capabilities: [
      'ServiceNow Scoped Applications & Platform Architecture',
      'ITSM — IT Service Management workflows & user portals',
      'ITOM — IT Operations Management & infrastructure visibility',
      'ITAM — IT Asset Management & configuration lifecycle tracking',
      'HRSD — HR Service Delivery automation & employee onboarding',
      'IRM — Integrated Risk Management & compliance tracking',
      'CRM & Enterprise Systems Integration',
      'Enterprise Workflow Modernization & Process Automation',
      'Cloud Infrastructure & Enterprise Application Development',
      'Data & Operational Systems Integration'
    ],
    techStack: ['ServiceNow', 'GlideScript', 'Flow Designer', 'Integration Hub', 'REST APIs', 'Cloud Infrastructure', 'Enterprise Security'],
    highlight: 'Structured enterprise workflows designed for operational resilience, compliance, and systems integration.'
  },
  {
    id: 'marketing',
    num: '04',
    title: 'Marketing',
    shortDesc: 'Strategic paid advertising, social media execution, and content-led organic digital growth.',
    longDesc: 'Data-guided demand generation, targeted digital campaigns, and audience growth across search and social channels. Transparent performance tracking and content-led brand visibility with zero unverified ROI guarantees.',
    capabilities: [
      'Google Ads — Paid search, shopping & performance campaigns',
      'Meta Ads — Targeted Facebook & Instagram advertising',
      'Social Media — Channel management & content scheduling',
      'Organic Marketing — Content-led growth & audience building',
      'Demand Generation & Targeted Digital Campaigns',
      'Audience Growth & Strategic Brand Visibility',
      'Attribution & Tracking — GA4 event tracking & conversion funnels',
      'Creative Optimization — Ad copy, visual messaging & split testing'
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'GA4 Analytics', 'Google Tag Manager', 'Content Strategy', 'Attribution Modeling'],
    highlight: 'Disciplined performance campaigns with clear attribution, transparent reporting, and brand growth.'
  },
  {
    id: 'research',
    num: '05',
    title: 'Research',
    shortDesc: 'Business and product intelligence, market analysis, and operational feasibility research support.',
    longDesc: 'Actionable research and analysis support to inform critical business decisions. From market opportunity assessments and competitive positioning to financial review, cost structure assessments, technology feasibility analysis, and digital transformation planning.',
    capabilities: [
      'Market Research — Market sizing, customer behavior & opportunity mapping',
      'Product Research — Product-market requirements & concept validation',
      'Trends & Competition — Industry trend analysis & competitive positioning',
      'Technology Feasibility Analysis — Architecture review & technical diligence',
      'Scaling Analysis — Operational growth reviews & bottleneck mitigation',
      'Compliance Research — Industry standards & regulatory research support',
      'Business Analysis — Operational processes, requirements & workflow analysis',
      'Financial & Cost Analysis — Cost structures & efficiency modeling',
      'Company Restructuring — Operational reorganization analysis',
      'Digital Transformation Planning — Long-term technology strategy'
    ],
    techStack: ['Market Intelligence', 'Competitive Benchmarking', 'Financial Modeling', 'Process Mapping', 'Feasibility Audits'],
    highlight: 'Rigorous business and product intelligence supporting data-informed decisions and transformation planning.'
  },
  {
    id: 'recruitment',
    num: '06',
    title: 'Recruitment',
    shortDesc: 'Specialized talent sourcing, candidate screening, and credentialing support across technology and specialized sectors.',
    longDesc: 'Specialized talent acquisition and placement support for organizations seeking qualified technical, engineering, and healthcare professionals. From candidate screening and credentialing to international placement and onboarding support (portfolio reference: MedusCore).',
    capabilities: [
      'International Talent Sourcing & Pipeline Development',
      'Healthcare Recruitment & Specialized Medical Placements',
      'Specialist Recruitment for Engineering & Technical Disciplines',
      'Candidate Screening, Technical Assessments & Verification',
      'Credentialing Support & Regulatory Documentation Coordination',
      'Placement Support & Candidate Onboarding Management',
      'Onboarding & Integration for Distributed Teams'
    ],
    techStack: ['Global Sourcing Networks', 'Technical & Clinical Evaluation', 'Credentialing Coordination', 'Integration Frameworks'],
    highlight: 'Specialized talent acquisition and credentialing support with international reach.'
  }
];

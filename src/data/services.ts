import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'development',
    num: '01',
    title: 'Development',
    shortDesc: 'Digital products and engineering solutions built around your business requirements.',
    longDesc: 'From modern responsive web applications and native mobile apps to bespoke business automation, Shopify storefronts, multi-tenant SaaS platforms, internal tools, and specialized research search engines—we engineer robust, maintainable software tailored to your workflows.',
    capabilities: [
      'Web — Websites, Web applications & Web platforms',
      'Android — Android applications & Native/cross-platform development',
      'iOS — iOS applications & Mobile product development',
      'Automation — Business, workflow & process automation, API integrations',
      'E-Commerce — Shopify, Custom e-commerce, Headless commerce & Storefronts',
      'SaaS Products — SaaS platforms, Multi-tenant systems, Dashboards & Subscriptions',
      'Tools — Internal business tools, Custom utilities & Operational platforms',
      'Research Engines — Search systems, Discovery engines & Custom search platforms'
    ],
    techStack: ['React & Next.js', 'TypeScript', 'Android & iOS', 'Node.js', 'Shopify', 'Firebase', 'PostgreSQL', 'REST APIs'],
    highlight: 'Full-stack software engineering engineered with clean architecture and strict type safety.'
  },
  {
    id: 'seo-growth',
    num: '02',
    title: 'SEO & Growth',
    shortDesc: 'Intentional technical site structure, product page search visibility, and search-facing brand presence.',
    longDesc: 'Focused exclusively on the three fundamental pillars of sustainable search visibility: technical audit remediation, e-commerce product schema optimization, and consistent digital brand alignment. No black-hat packages or unverified ranking promises.',
    capabilities: [
      'Technical SEO — Site structure, Crawlability, Indexation & Audits',
      'Core Web Vitals — Speed optimization, LCP/CLS tuning & Performance',
      'Structured Data — Schema.org markup, Rich snippets & Dynamic sitemaps',
      'Product SEO — Product page optimization, Metadata & Product schema',
      'Catalog Visibility — Search visibility & E-commerce product optimization',
      'Branding — Brand positioning & Digital brand consistency',
      'Search Presence — Search-facing brand presence & Identity alignment'
    ],
    techStack: ['Technical SEO Audits', 'Core Web Vitals', 'Schema.org', 'Google Search Console', 'Product SEO', 'Brand Identity'],
    highlight: 'Pristine technical crawlability, structured data, and search-aligned brand authority.'
  },
  {
    id: 'enterprise',
    num: '03',
    title: 'Enterprise',
    shortDesc: 'Enterprise workflow automation, system modernization, and comprehensive ServiceNow platform capabilities.',
    longDesc: 'Eliminate disconnected systems and manual bottlenecks. We deliver professional ServiceNow implementations, scoped applications, and cross-platform integrations to streamline operations, compliance, and enterprise service delivery.',
    capabilities: [
      'ITSM — IT Service Management workflows & portals',
      'ITOM — IT Operations Management & infrastructure health',
      'ITAM — IT Asset Management lifecycle tracking',
      'HRSD — HR Service Delivery automation & onboarding',
      'IRM — Integrated Risk Management & compliance tracking',
      'CRM — Customer Relationship Management & system integrations'
    ],
    techStack: ['ServiceNow', 'GlideScript', 'Flow Designer', 'Integration Hub', 'REST APIs', 'OAuth 2.0', 'Enterprise Portals'],
    highlight: 'Structured enterprise workflows designed for operational resilience and compliance.'
  },
  {
    id: 'marketing',
    num: '04',
    title: 'Marketing',
    shortDesc: 'Strategic paid advertising, social media execution, and content-led organic digital growth.',
    longDesc: 'We manage and optimize targeted performance campaigns across Google and Meta, alongside consistent social media presence and organic digital strategies. Clear attribution tracking with zero unrealistic ROI or sales guarantees.',
    capabilities: [
      'Google Ads — Paid search, shopping & performance campaigns',
      'Meta Ads — Targeted Facebook and Instagram advertising',
      'Social Media — Social media presence & campaign management',
      'Organic Marketing — Content-led & organic digital growth',
      'Attribution & Tracking — GA4 event tracking & Conversion funnels',
      'Creative Optimization — Ad copy, visual messaging & Creative testing'
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'GA4 Analytics', 'Google Tag Manager', 'Content Strategy', 'Attribution'],
    highlight: 'Disciplined performance campaigns with clear attribution and transparent reporting.'
  },
  {
    id: 'research',
    num: '05',
    title: 'Research',
    shortDesc: 'Business and product intelligence, market analysis, and operational feasibility research support.',
    longDesc: 'Actionable research and analysis support to inform critical business decisions. From market sizing and competitive positioning to financial review, cost structure assessments, and organizational restructuring analysis.',
    capabilities: [
      'Market Research — Understand market size, customers & opportunities',
      'Product Research — Product-market requirements, customer needs & validation',
      'Trends & Competition — Industry trend analysis & competitive positioning',
      'Scaling Analysis — Growth opportunities & operational scaling reviews',
      'Compliance Research — Business & product compliance research support',
      'Business Analysis — Operational processes, requirements & workflow analysis',
      'Financial & Cost Analysis — Financial performance, cost review & efficiency opportunities',
      'Company Restructuring — Organizational & operational restructuring analysis'
    ],
    techStack: ['Market Intelligence', 'Competitive Audits', 'Financial Modeling', 'Process Mapping', 'Feasibility Studies'],
    highlight: 'Rigorous business and product intelligence supporting data-driven strategic planning.'
  },
  {
    id: 'recruitment',
    num: '06',
    title: 'Recruitment',
    shortDesc: 'Specialized technical talent sourcing and candidate screening for international markets.',
    longDesc: 'Recruitment support tailored exclusively for international markets seeking qualified engineering, technical, and leadership talent. We do not provide recruitment services for the Indian domestic market.',
    capabilities: [
      'International Technical Talent Sourcing & Pipeline Development',
      'Engineering & Specialist Candidate Technical Screening',
      'Remote Engineering Team Structuring & Alignment',
      'Global Hiring & Placement Support (International Markets)',
      'Policy: Available for International Markets Only (Not India)',
      'Recruitment Contact — Syed Roshan Zameer'
    ],
    techStack: ['Global Sourcing Networks', 'Technical Skill Screening', 'Talent Evaluation', 'Remote Team Alignment'],
    highlight: 'International technical recruitment exclusively for global markets. Not available for India.'
  }
];

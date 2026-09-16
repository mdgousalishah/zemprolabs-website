/**
 * Centralized Zemprolabs Commercial & Pricing Configuration
 * All amounts are in INR (₹) using Indian numbering conventions (Lakhs / Thousands).
 * Third-party platform fees (Shopify, Google Firebase) are explicitly separated from Zemprolabs service rates.
 */

export interface MaintenanceTier {
  id: string;
  name: string;
  tag: string;
  amountINR: number;
  displayPrice: string;
  period: string;
  targetAudience: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface PlatformDevOption {
  id: string;
  name: string;
  surchargeINR: number;
  displaySurcharge: string;
  platformCostNote: string;
  isUsageBased?: boolean;
  provider: 'Shopify' | 'Google' | 'Hosting' | 'None';
}

export interface AddonOption {
  id: string;
  name: string;
  costINR: number;
  displayCost: string;
}

export interface ShopifyIndiaTier {
  name: string;
  annualMonthlyINR: string;
  monthlyINR: string;
  bestFor: string;
  features: string[];
}

export const pricingConfig = {
  currency: 'INR',
  symbol: '₹',

  // Scope Estimator Base Development Fee
  estimatorBaseBuildINR: 250000, // ₹2,50,000 Base Project Build
  displayEstimatorBaseBuild: '₹2,50,000',

  // Estimator Platform Surcharges (Zemprolabs Engineering Fee)
  platformOptions: [
    {
      id: 'none',
      name: 'Static / Decoupled Frontend (No Backend)',
      surchargeINR: 0,
      displaySurcharge: '₹0',
      platformCostNote: '₹0 — Standard CDN hosting included',
      provider: 'None'
    },
    {
      id: 'firebase',
      name: 'Google Firebase (Serverless Backend Architecture)',
      surchargeINR: 65000,
      displaySurcharge: '+₹65,000 setup',
      platformCostNote: 'Usage-based — final cost depends on actual consumption (Generous free tier included)',
      isUsageBased: true,
      provider: 'Google'
    },
    {
      id: 'shopify',
      name: 'Shopify E-Commerce Storefront',
      surchargeINR: 75000,
      displaySurcharge: '+₹75,000 setup',
      platformCostNote: '₹1,499/month to ₹5,599/month billed directly by Shopify',
      provider: 'Shopify'
    },
    {
      id: 'shopify_firebase',
      name: 'Shopify Storefront + Firebase Custom Backend',
      surchargeINR: 125000,
      displaySurcharge: '+₹1,25,000 setup',
      platformCostNote: 'Shopify subscription tier + Firebase usage-based consumption',
      provider: 'Shopify'
    },
    {
      id: 'custom_backend',
      name: 'Custom Node.js / PostgreSQL Cloud API',
      surchargeINR: 110000,
      displaySurcharge: '+₹1,10,000 setup',
      platformCostNote: 'Cloud hosting (~₹1,500 – ₹4,500/month depending on compute size)',
      provider: 'Hosting'
    }
  ] as PlatformDevOption[],

  // Estimator Add-ons
  addonOptions: [
    { id: 'design', name: 'UI/UX Figma Architecture & Component System', costINR: 45000, displayCost: '+₹45,000' },
    { id: 'seo', name: 'Technical SEO Audit & Schema Structured Data', costINR: 35000, displayCost: '+₹35,000' },
    { id: 'multicurrency', name: 'Multi-Currency & International Gateway Routing', costINR: 50000, displayCost: '+₹50,000' },
    { id: 'cicd', name: 'Automated CI/CD & Production Staging Infrastructure', costINR: 30000, displayCost: '+₹30,000' }
  ] as AddonOption[],

  // Recurring Maintenance & Managed Care Retainers
  maintenancePlans: [
    {
      id: 'essential',
      name: 'Essential Care',
      tag: 'FOR SMALL BUSINESS WEBSITES',
      amountINR: 35000,
      displayPrice: '₹35,000',
      period: '/month',
      targetAudience: 'Small business websites, portfolios, and static lead-generation sites.',
      description: 'Essential technical maintenance, security updates, and performance monitoring to keep your site reliable and healthy.',
      features: [
        'Monthly technical health & uptime check',
        'Minor content & image updates (up to 3 requests/month)',
        'Security patch & dependency updates',
        'Automated backup monitoring & verification',
        'Basic technical email & ticket support',
        'Core Web Vitals & broken-link scans'
      ]
    },
    {
      id: 'growth',
      name: 'Growth Care',
      tag: 'FOR ACTIVE BUSINESS PLATFORMS',
      amountINR: 75000,
      displayPrice: '₹75,000',
      period: '/month',
      targetAudience: 'Active business websites, growing service companies, and lead funnels.',
      description: 'Comprehensive technical upkeep, regular content updates, continuous performance optimization, and priority triage.',
      features: [
        'Everything in Essential Care',
        'Expanded content, product & copy updates',
        'Continuous Core Web Vitals & speed optimization',
        'Monthly technical SEO & search console checks',
        'GA4 analytics & event tracking health audits',
        'Priority response SLA (<12 business hours)',
        'Minor UI/UX enhancements & component tweaks'
      ],
      popular: true
    },
    {
      id: 'managed',
      name: 'Fully Managed Operations',
      tag: 'COMPLETE TECHNICAL & STORE CARE',
      amountINR: 145000,
      displayPrice: '₹1,45,000',
      period: '/month',
      targetAudience: 'E-commerce stores, SaaS applications, and businesses that want technical operations completely handled.',
      description: 'Complete technical and storefront operations management. We manage your website or Shopify store while you focus on business growth.',
      features: [
        'Everything in Growth Care',
        'End-to-end e-commerce storefront management',
        'Product catalog updates, uploads & collection staging',
        'Promotional banners & discount code configuration',
        'App, plugin & third-party integration maintenance',
        'Firebase / backend cloud database monitoring',
        'Dedicated senior lead as single point of contact',
        'Bi-weekly sprint planning & ongoing feature rollouts'
      ]
    }
  ] as MaintenanceTier[],

  // Official Shopify India Reference (Paid directly to Shopify Inc.)
  shopifyTiers: [
    {
      name: 'Shopify Basic',
      annualMonthlyINR: '₹1,499/month',
      monthlyINR: '₹1,994/month',
      bestFor: 'Solo entrepreneurs & emerging digital storefronts.',
      features: [
        'Basic storefront & standard checkout',
        '10 inventory locations',
        '24/7 Shopify chat support',
        'Standard transaction fees'
      ]
    },
    {
      name: 'Shopify Grow',
      annualMonthlyINR: '₹5,599/month',
      monthlyINR: '₹7,447/month',
      bestFor: 'Scaling businesses with growing sales volume.',
      features: [
        'Everything in Basic',
        'Professional reporting dashboards',
        '5 additional staff accounts',
        'Lower credit card & gateway processing rates'
      ]
    },
    {
      name: 'Shopify Advanced',
      annualMonthlyINR: '₹22,680/month',
      monthlyINR: '₹30,164/month',
      bestFor: 'High-volume businesses requiring custom reports and duties calculation.',
      features: [
        'Everything in Grow',
        'Custom report builder',
        '15 staff accounts',
        'Automated import duties & taxes calculation',
        'Lowest standard transaction fees'
      ]
    }
  ] as ShopifyIndiaTier[],

  // Disclaimers
  disclaimers: {
    shopify:
      'Shopify subscription fees are paid directly to Shopify, not Zemprolabs. Shopify pricing is set by Shopify and may change. Additional app, payment, domain and third-party costs may apply.',
    firebase:
      'Firebase infrastructure is usage-based. Final third-party infrastructure cost depends on actual usage. Google bills usage directly with zero agency markup.',
    general:
      'Zemprolabs professional service fees are transparent milestone or retainer agreements. Infrastructure, hosting, and platform subscriptions are billed directly by their respective providers.'
  }
};

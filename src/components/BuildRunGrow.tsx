import React from 'react';
import { Hammer, Server, TrendingUp, ArrowRight, ShieldCheck, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BuildRunGrow: React.FC = () => {
  const pillars = [
    {
      step: '01',
      action: 'BUILD',
      title: 'Digital Engineering & Storefronts',
      copy: 'Custom websites, web applications, SaaS platforms, and e-commerce stores designed and developed to institutional engineering standards.',
      details: [
        'Custom Web Applications & SaaS Platforms',
        'Shopify E-Commerce & Custom Storefronts',
        'Headless Next.js & Edge Architectures',
        'API & Database Contract Development'
      ],
      color: '#FF6B00',
      bgGlow: 'from-[#FF6B00]/15',
      icon: Hammer,
      link: '/services',
      cta: 'Explore Development'
    },
    {
      step: '02',
      action: 'RUN',
      title: 'Cloud Infrastructure & Maintenance',
      copy: 'Cloud infrastructure, Firebase backend, hosting, monitoring, security updates, and regular technical maintenance.',
      details: [
        'Google Firebase & Cloud Firestore Backends',
        'Security Patches & Dependency Audits',
        '24/7 Uptime & Error Logging Monitoring',
        'Backup Verification & Disaster Recovery'
      ],
      color: '#004AAD',
      bgGlow: 'from-[#004AAD]/15',
      icon: Server,
      link: '/managed-services',
      cta: 'Explore Maintenance'
    },
    {
      step: '03',
      action: 'GROW',
      title: 'Store Operations & Optimization',
      copy: 'E-commerce management, content updates, conversion improvements, SEO support, and ongoing optimization.',
      details: [
        'Product Uploads & Collection Management',
        'Promotional Banners & Discount Campaigns',
        'Conversion Rate Optimization (CRO)',
        'Technical SEO & Core Web Vitals Tuning'
      ],
      color: '#10B981',
      bgGlow: 'from-[#10B981]/15',
      icon: TrendingUp,
      link: '/managed-services',
      cta: 'Explore Store Care'
    }
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[rgba(148,163,184,0.12)] bg-[#0B0F17]/60 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="ambient-glow -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF6B00]/10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>FULL LIFECYCLE COMMITMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
            Build it. Run it. Grow it.
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            From the first line of code to ongoing operations, Zemprolabs can design, develop, deploy and manage your digital platform. We build your digital platform — and we can keep it running for you.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] hover:border-[rgba(148,163,184,0.3)] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider"
                      style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
                    >
                      {pillar.action}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">PHASE {pillar.step} //</span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.12)] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {pillar.copy}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-4 border-t border-[rgba(148,163,184,0.1)] mb-8">
                    {pillar.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                          style={{ backgroundColor: pillar.color }}
                        ></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={pillar.link}
                  className="inline-flex items-center justify-between w-full p-3 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.12)] text-xs font-mono font-semibold text-white group-hover:border-[rgba(255,107,0,0.4)] transition-colors"
                >
                  <span>{pillar.cta}</span>
                  <ArrowRight className="w-4 h-4 text-[#FF6B00] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

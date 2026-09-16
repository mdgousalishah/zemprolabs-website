import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Code, ShoppingBag, Server, Wrench, CheckCircle2 } from 'lucide-react';
import { QualifiedEngineersTrust } from '../components/QualifiedEngineersTrust';
import { BuildRunGrow } from '../components/BuildRunGrow';
import { company } from '../data/company';

export const About: React.FC = () => {
  const whatWeBuild = [
    {
      title: 'Websites & Web Applications',
      desc: 'Bespoke web applications, modern responsive company websites, and custom SaaS platforms built with clean, type-safe architecture.',
      icon: Code,
      color: '#FF6B00'
    },
    {
      title: 'E-Commerce & Shopify',
      desc: 'High-converting Shopify stores, custom theme development, headless storefronts, and seamless product catalog integrations.',
      icon: ShoppingBag,
      color: '#004AAD'
    },
    {
      title: 'Backend & Cloud Infrastructure',
      desc: 'Scalable cloud backends, serverless Firebase architecture, custom REST APIs, and dependable database design.',
      icon: Server,
      color: '#10B981'
    },
    {
      title: 'Maintenance & Technical Management',
      desc: 'Routine security updates, broken link checks, speed optimization, and ongoing operational support for production systems.',
      icon: Wrench,
      color: '#8B5CF6'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEO
        title="About Zemprolabs | Qualified Engineers. Trusted Technology."
        description="Zemprolabs brings together qualified engineers and technology professionals to design, build, maintain and manage digital solutions for businesses."
        canonicalPath="/about"
      />

      {/* 1. Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ABOUT ZEMPROLABS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            {company.positioning}
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {company.positioningSub}
          </p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] p-8 sm:p-12 shadow-xl space-y-6">
          <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">
            // WHO WE ARE
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Technology Partner for Modern Businesses
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Zemprolabs is a technology company focused on building, managing and improving digital solutions for modern businesses. From websites and web applications to e-commerce, backend infrastructure and ongoing technical support, we help businesses turn ideas into dependable digital systems.
              </p>
              <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                Our team consists of qualified engineers and technology professionals you can trust to build, maintain and manage your digital presence.
              </p>
            </div>
            <div className="lg:col-span-4 p-6 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.12)] space-y-3 font-mono text-xs">
              <div className="text-[#10B981] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Single Accountable Team</span>
              </div>
              <div className="text-[#10B981] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Clean Engineering Standards</span>
              </div>
              <div className="text-[#10B981] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Long-Term Technical Custody</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Build */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="mb-8 space-y-2">
          <div className="text-xs font-mono text-[#004AAD] uppercase tracking-wider">
            // WHAT WE BUILD
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            End-to-End Digital Solutions
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            Practical software engineering built for stability, performance, and commercial utility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeBuild.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] hover:border-[rgba(148,163,184,0.25)] transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-white">{item.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Qualified Engineers. Trusted Technology. */}
      <QualifiedEngineersTrust />

      {/* 5. Build • Run • Manage • Grow */}
      <BuildRunGrow />

      {/* 7. CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-8 max-w-7xl mx-auto text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] max-w-3xl mx-auto space-y-6 shadow-2xl">
          <h3 className="text-3xl font-bold font-display text-white">
            Let's Build Something That Works.
          </h3>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Have a project, e-commerce store, website or technology requirement? Tell us what you need and our team will get back to you.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] w-full sm:w-auto"
            >
              <span>Contact Our Engineering Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-colors w-full sm:w-auto"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, GitBranch, Terminal, ShieldCheck, Rocket, LineChart, Headphones } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover & Technical Alignment',
      summary: 'Understanding your commercial objectives, technical requirements, and digital bottlenecks.',
      description: 'Before writing a single line of code, we run an intensive technical scoping workshop. We map database schemas, determine third-party integration constraints, and establish clear sprint milestones.',
      tags: ['Architecture Blueprint', 'Risk Analysis', 'Fixed Scope & Milestones'],
      icon: GitBranch,
      color: '#FF6B00'
    },
    {
      num: '02',
      title: 'UI/UX Prototypes & Schema Specs',
      summary: 'High-fidelity wireframes, interactive Figma component systems, and database contracts.',
      description: 'You receive working interactive UI prototypes and API contracts—not abstract presentations. We test user journeys, checkout funnels, and accessibility standards prior to implementation.',
      tags: ['Figma Design System', 'Database Contracts', 'User Journey Mapping'],
      icon: Terminal,
      color: '#004AAD'
    },
    {
      num: '03',
      title: 'Agile 2-Week Sprints & Staging',
      summary: 'Rapid, iterative sprint cycles with live staging builds delivered every two weeks.',
      description: 'We build in transparent two-week agile intervals. At the conclusion of every sprint, you receive a live staging URL for hands-on review, regression testing, and direct feedback.',
      tags: ['2-Week Sprint Cadence', 'Live Staging Previews', 'Continuous Integration'],
      icon: ShieldCheck,
      color: '#06B6D4'
    },
    {
      num: '04',
      title: 'Zero-Downtime Launch & Performance QA',
      summary: 'Production deployment with zero downtime, SSL certification, and technical SEO validation.',
      description: 'Automated CI/CD pipelines transition code into production with zero service interruption. We run end-to-end load tests, Core Web Vitals audits, and verify search engine indexing.',
      tags: ['Automated Deployments', 'Lighthouse Optimization', 'Security Verification'],
      icon: Rocket,
      color: '#10B981'
    },
    {
      num: '05',
      title: 'Growth Optimization & Attribution',
      summary: 'Analytics dashboards, conversion rate testing, and continuous acquisition scaling.',
      description: 'With the application live, we calibrate GA4, server-side event tracking, and conversion funnels to pinpoint behavioral friction and systematically raise customer acquisition.',
      tags: ['GA4 Attribution', 'Funnel CRO', 'Search Console Audits'],
      icon: LineChart,
      color: '#8B5CF6'
    },
    {
      num: '06',
      title: 'Dedicated Lead Support & Ongoing Retainer',
      summary: 'Ongoing maintenance, proactive monitoring, and direct sub-24h emergency SLA.',
      description: 'Your project transitions seamlessly to your dedicated technical lead. You get a direct Slack and email channel for routine feature updates, security patches, and emergency hotfixes.',
      tags: ['Sub-24h Direct SLA', 'Cloud Health Monitoring', 'Ongoing Development'],
      icon: Headphones,
      color: '#EC4899'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEO
        title="Our 6-Step Engineering Process"
        description="Learn how Zemprolabs takes your digital product from initial discovery to high-speed agile execution, seamless launch, and managed ongoing support."
        canonicalPath="/process"
      />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <span>ENGINEERING METHODOLOGY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            From First Brief to Continuous Growth.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We eliminate agency bloat and communication breakdowns. Here is our exact blueprint for bringing complex digital systems from concept to high-scale production.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] hover:border-[rgba(255,107,0,0.3)] transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-[rgba(148,163,184,0.1)] gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm"
                    style={{ backgroundColor: `${step.color}20`, color: step.color }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#94A3B8] uppercase">PHASE {step.num} //</span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">{step.title}</h3>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-[#05070D] border border-white/5 text-[#94A3B8]">
                  <Icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base text-white font-medium">
                  {step.summary}
                </p>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {step.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#05070D] text-[#94A3B8] border border-[rgba(148,163,184,0.1)] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 max-w-7xl mx-auto text-center">
        <div className="p-10 rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold font-display text-white">Have an Upcoming Project?</h3>
          <p className="text-sm text-[#94A3B8]">
            Let's discuss your timeline, architecture requirements, and milestone objectives.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all"
            >
              <span>Schedule Discovery Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, Code2 } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do we get started with a new project?',
    answer:
      'We start with a direct technical discovery call between you and a senior engineering lead—no sales middlemen. We review your requirements, technical architecture, and milestones, then provide a comprehensive scope blueprint within 48 hours.',
    category: 'Process',
  },
  {
    question: 'Do we own 100% of the code and intellectual property?',
    answer:
      'Yes, absolutely. All custom source code, repositories, cloud infrastructure configurations, and digital assets are 100% your property from day one with zero platform lock-in or proprietary licensing traps.',
    category: 'Ownership',
  },
  {
    question: 'How does 24/7 Managed Digital Care work?',
    answer:
      'Our team provides active operational guardianship: 24/7 uptime monitoring, critical security patching, automated daily backups, e-commerce storefront maintenance, and rapid technical triage with guaranteed SLA response windows.',
    category: 'Maintenance',
  },
  {
    question: 'Can you work with our existing codebase or in-house team?',
    answer:
      'Yes. Many of our clients have existing platforms or partial in-house teams. We seamlessly integrate into your Git workflows, CI/CD pipelines, and communication channels (Slack, Linear, GitHub) to accelerate delivery without disrupting ongoing operations.',
    category: 'Collaboration',
  },
  {
    question: 'What technologies and frameworks do you specialize in?',
    answer:
      'Our core stack covers modern full-stack web and mobile engineering: React, Next.js, Node.js, TypeScript, PostgreSQL, Shopify Liquid & Hydrogen, cloud infrastructure (AWS, GCP, Cloudflare), and enterprise systems integration.',
    category: 'Engineering',
  },
  {
    question: 'What is your typical project delivery timeline?',
    answer:
      'Timelines depend on scope: focused e-commerce storefronts and MVPs typically deploy within 3–6 weeks, while complex full-stack SaaS platforms or enterprise migrations span 8–14 weeks, delivered in two-week functional sprint demos.',
    category: 'Timeline',
  },
];

export const HomeFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[rgba(44,62,80,0.08)] bg-[#2C3E50] relative overflow-hidden select-none">
      {/* Background Engineering Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#34495E_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      {/* Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ECF0F1]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#38BDF8]/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECF0F1]/10 border border-[#ECF0F1]/25 text-[#ECF0F1] text-xs font-mono">
            <Code2 className="w-3.5 h-3.5 text-[#ECF0F1]" />
            <span>FAQ // TRANSPARENT TECHNICAL DETAILS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-[#BDC3C7] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our engineering standards, 100% codebase ownership, managed operational care, and delivery timelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#2C3E50] border-[#ECF0F1]/40 shadow-[0_4px_25px_rgba(236,240,241,0.08)]'
                    : 'bg-[#2C3E50]/90 border-white/[0.07] hover:border-white/[0.15] hover:bg-[#2C3E50]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 select-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-mono font-semibold transition-colors shrink-0 ${
                        isOpen ? 'text-[#ECF0F1]' : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      0{idx + 1} //
                    </span>
                    <span className="text-base sm:text-lg font-bold font-display text-white tracking-tight group-hover:text-[#ECF0F1] transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#ECF0F1]/15 border-[#ECF0F1]/40 text-[#ECF0F1] rotate-180'
                        : 'bg-white/[0.03] border-white/[0.08] text-[#BDC3C7] group-hover:text-white group-hover:border-white/20'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#BDC3C7] leading-relaxed border-t border-white/[0.04]">
                    <p className="pl-8 sm:pl-9">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom micro-banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#2C3E50]/80 backdrop-blur-sm border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#ECF0F1] shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300">
              Have a custom or architecture-specific question?
            </span>
          </div>
          <a
            href="mailto:info@zemprolabs.com"
            className="text-xs font-mono text-[#ECF0F1] hover:underline font-semibold whitespace-nowrap"
          >
            Ask our engineering team &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

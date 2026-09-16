import React from 'react';
import { agencyMetrics, clientProjectsList } from '../data/testimonials';
import { ShieldCheck, CheckCircle2, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 border-y border-[rgba(148,163,184,0.12)] bg-[#05070D]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Principles Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ACCOUNTABLE DIGITAL PARTNERSHIP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white mb-4">
            One team. Zero agency finger-pointing.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Traditional agencies hand off code and disappear. We consolidate your e-commerce, custom software, enterprise integrations, and ongoing maintenance under a single point of engineering accountability.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {agencyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] hover:border-[#FF6B00]/30 transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl font-bold font-display text-white mb-2 flex items-baseline gap-1">
                <span>{metric.value}</span>
                {idx === 0 && <span className="text-[#FF6B00] text-xl">&bull;</span>}
                {idx === 3 && <span className="text-[#10B981] text-xs font-mono">SLA</span>}
              </div>
              <div className="text-sm font-semibold text-white mb-2 font-display">
                {metric.label}
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Enterprise & E-Commerce Engagements Strip */}
        <div className="rounded-2xl bg-[#0B0F17]/90 border border-[rgba(148,163,184,0.15)] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-[rgba(148,163,184,0.1)] gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] mb-1">
                // VERIFIED PROJECT PORTFOLIO
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                Live Platforms Engineered by Zemprolabs
              </h3>
            </div>
            <Link
              to="/work"
              className="text-xs font-mono text-[#FF6B00] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>EXPLORE ALL CASE STUDIES &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clientProjectsList.map((client, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.08)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-sm font-display">{client.name}</span>
                    <span className="flex items-center gap-1 text-[10px] font-mono text-[#10B981]">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>LIVE</span>
                    </span>
                  </div>
                  <div className="text-xs text-[#94A3B8] mb-1">{client.sector}</div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[rgba(148,163,184,0.06)] text-[11px] font-mono text-[#94A3B8]">
                  <span className="flex items-center gap-1">
                    <Globe className="w-3 h-3 text-[#FF6B00]" />
                    <span>{client.domain}</span>
                  </span>
                  <span>{client.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { agencyMetrics, clientProjectsList } from '../data/testimonials';
import { ShieldCheck, CheckCircle2, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 border-y border-[rgba(148,163,184,0.12)] bg-[#2C3E50]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Principles Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECF0F1]/10 border border-[#ECF0F1]/20 text-[#ECF0F1] text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ONE TECHNOLOGY PARTNER FROM BUILD TO GROWTH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white mb-3">
            Engineered for your business. Built for scale.
          </h2>
          <p className="text-sm sm:text-base text-[#BDC3C7] leading-relaxed max-w-2xl mx-auto">
            Qualified engineers delivering custom digital solutions, e-commerce, and cloud infrastructure with long-term technical support.
          </p>
          <div className="pt-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#ECF0F1] hover:underline"
            >
              <span>About Zemprolabs &rarr;</span>
            </Link>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {agencyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#34495E] border border-[rgba(148,163,184,0.15)] hover:border-[#ECF0F1]/30 transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl font-bold font-display text-white mb-2 flex items-baseline gap-1">
                <span>{metric.value}</span>
                {idx === 0 && <span className="text-[#ECF0F1] text-xl">&bull;</span>}
                {idx === 3 && <span className="text-[#10B981] text-xs font-mono">SLA</span>}
              </div>
              <div className="text-sm font-semibold text-white mb-2 font-display">
                {metric.label}
              </div>
              <p className="text-xs text-[#BDC3C7] leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Enterprise & E-Commerce Engagements Strip */}
        <div className="rounded-2xl bg-[#34495E]/90 border border-[rgba(148,163,184,0.15)] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-[rgba(148,163,184,0.1)] gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#ECF0F1] mb-1">
                // VERIFIED PROJECT PORTFOLIO
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                Live Platforms Engineered by Zemprolabs
              </h3>
            </div>
            <Link
              to="/work"
              className="text-xs font-mono text-[#ECF0F1] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>EXPLORE ALL CASE STUDIES &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {clientProjectsList.map((client, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-[#2C3E50] border border-[rgba(148,163,184,0.1)] hover:border-[rgba(236,240,241,0.3)] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1.5">
                    <span className="font-bold text-white text-sm font-display group-hover:text-[#ECF0F1] transition-colors leading-tight">
                      {client.name}
                    </span>
                    <span className="flex items-center gap-1 text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      <span>LIVE</span>
                    </span>
                  </div>
                  <div className="text-[11px] text-[#BDC3C7] line-clamp-1 mb-1">
                    {client.sector}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-[rgba(148,163,184,0.08)] text-[10px] font-mono text-[#BDC3C7]">
                  <span className="truncate pr-1 text-[#ECF0F1]/90">
                    {client.badge || client.region}
                  </span>
                  <span className="shrink-0 text-white/70">{client.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

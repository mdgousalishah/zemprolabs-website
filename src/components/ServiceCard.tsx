import React from 'react';
import { Service } from '../types';
import { Check, ArrowRight, Sparkles, Globe, ShieldAlert, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="rounded-xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] hover:border-[rgba(255,107,0,0.4)] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <span className="text-sm font-mono text-[#FF6B00] font-semibold tracking-wider">
            {service.num} //
          </span>

          {service.id === 'development' && (
            <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/25">
              <Sparkles className="w-3 h-3" />
              <span>CORE DISCIPLINE</span>
            </span>
          )}

          {service.id === 'seo-growth' && (
            <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#004AAD]/15 text-[#60A5FA] border border-[#004AAD]/30">
              <span>FOCUSED PILLARS</span>
            </span>
          )}

          {service.id === 'recruitment' && (
            <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
              <Globe className="w-3 h-3" />
              <span>INTERNATIONAL ONLY</span>
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2.5 group-hover:text-[#FF6B00] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Special Mandatory Recruitment Notice */}
        {service.id === 'recruitment' && (
          <div className="mb-5 p-3 rounded-lg bg-[#05070D] border border-[#10B981]/30 space-y-2 text-xs">
            <div className="flex items-start gap-2 text-[#10B981] font-mono text-[11px] leading-snug">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>
                <strong>Market Policy:</strong> Recruitment services are available for international markets. We currently do not provide recruitment services for India.
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-white font-mono text-[11px] pt-1 border-t border-white/5">
              <UserCheck className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
              <span>Recruitment Contact — Syed Roshan Zameer</span>
            </div>
          </div>
        )}

        {/* Capabilities List */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
            // Key Capabilities
          </div>
          {service.capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
              <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
              <span className="leading-snug">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack & CTA */}
      <div className="pt-4 border-t border-[rgba(148,163,184,0.1)]">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#05070D] text-[#94A3B8] border border-[rgba(148,163,184,0.1)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/contact?service=${service.id}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#FF6B00] group-hover:text-white transition-colors"
        >
          <span>SCOPE THIS CAPABILITY</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, ShieldCheck, Sparkles } from 'lucide-react';

export const HandledForYouCTA: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-[#0B0F17] via-[#111827] to-[#05070D] border border-[rgba(148,163,184,0.18)] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
        <div className="ambient-glow top-0 right-0 w-80 h-80 bg-[#FF6B00]/10"></div>
        <div className="ambient-glow bottom-0 left-0 w-80 h-80 bg-[#004AAD]/15"></div>

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL OPERATIONAL CARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Don't Want to Manage the Technology Yourself?
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Hand it over to us. Zemprolabs can manage your website, e-commerce storefront and technical infrastructure while you focus on your business. From product catalog uploads and promotional banners to database security and performance audits.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact?service=maintenance&engagement=store_management"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] active:scale-95"
            >
              <span>Talk to Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/managed-services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#0B0F17] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-all"
            >
              <span>View Maintenance Plans</span>
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#94A3B8] border-t border-[rgba(148,163,184,0.1)]">
            <span className="flex items-center gap-1.5 text-[#10B981]">
              <ShieldCheck className="w-4 h-4" />
              <span>Dedicated Senior Technical Lead</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Headphones className="w-4 h-4 text-[#004AAD]" />
              <span>Sub-24h Priority Response Window</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Calculator, ShieldCheck, Zap } from 'lucide-react';

export const HomePlatformAndPricingTeaser: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[rgba(148,163,184,0.12)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Managed Services Teaser Card */}
        <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] hover:border-[#FF6B00]/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
          <div className="ambient-glow -top-16 -right-16 w-60 h-60 bg-[#FF6B00]/10 pointer-events-none"></div>

          <div className="space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
              <Wrench className="w-3.5 h-3.5" />
              <span>MANAGED DIGITAL CARE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Already have a digital platform?
            </h3>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-medium">
              We can help maintain, manage and improve it.
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              {['Website Maintenance', 'E-Commerce Management', 'Infrastructure', 'Growth Support'].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.1)] text-xs text-[#F8FAFC] font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-[rgba(148,163,184,0.1)] relative z-10">
            <Link
              to="/managed-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] active:scale-95"
            >
              <span>Explore Managed Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Pricing Teaser Card */}
        <div className="rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.18)] hover:border-[#004AAD]/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
          <div className="ambient-glow -top-16 -right-16 w-60 h-60 bg-[#004AAD]/15 pointer-events-none"></div>

          <div className="space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004AAD]/15 border border-[#004AAD]/30 text-[#60A5FA] text-xs font-mono">
              <Calculator className="w-3.5 h-3.5" />
              <span>TRANSPARENT PRICING</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Need a custom build or ongoing technical support?
            </h3>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-medium">
              Transparent monthly care tiers and interactive project cost estimation in USD with INR reference equivalents.
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              {['Starting $400/mo (₹35,000 ref)', 'Zero Platform Markup', 'Interactive Scope Estimator', 'Direct Cloud Billing'].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.1)] text-xs text-[#F8FAFC] font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004AAD]"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-[rgba(148,163,184,0.1)] relative z-10">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#0B0F17] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-all active:scale-95"
            >
              <span>Explore Pricing</span>
              <ArrowRight className="w-4 h-4 text-[#FF6B00]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

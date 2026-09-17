import React from 'react';
import { Hammer, Server, TrendingUp, ArrowRight, ShieldCheck, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BuildRunGrow: React.FC = () => {
  const pillars = [
    {
      step: '01',
      action: 'BUILD',
      copy: 'Design and develop your digital product.',
      color: '#FF6B00',
      icon: Hammer
    },
    {
      step: '02',
      action: 'RUN',
      copy: 'Keep your platform secure, stable and maintained.',
      color: '#004AAD',
      icon: Server
    },
    {
      step: '03',
      action: 'SCALE',
      copy: 'Improve, automate and grow as your business evolves.',
      color: '#10B981',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[rgba(148,163,184,0.12)] bg-[#0B0F17]/60 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="ambient-glow -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF6B00]/10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>BUILD &bull; RUN &bull; SCALE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white">
            Built to Perform — Managed to Last.
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            From architecture to operations, we support your digital product across every stage of its lifecycle.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative rounded-xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] hover:border-[rgba(148,163,184,0.3)] transition-all duration-300 p-6 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider"
                      style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
                    >
                      {pillar.action}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">PHASE {pillar.step} //</span>
                  </div>

                  <div className="w-11 h-11 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.12)] flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" style={{ color: pillar.color }} />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    {pillar.action}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {pillar.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link to Process */}
        <div className="text-center mt-10">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-mono font-semibold text-white bg-[#0B0F17] border border-[rgba(148,163,184,0.2)] hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all"
          >
            <span>See How We Work</span>
            <ArrowRight className="w-4 h-4 text-[#FF6B00]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

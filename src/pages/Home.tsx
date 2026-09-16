import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Terminal } from '../components/Terminal';
import { BuildRunGrow } from '../components/BuildRunGrow';
import { HandledForYouCTA } from '../components/HandledForYouCTA';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { TrustSection } from '../components/TrustSection';
import { ScopeEstimator } from '../components/ScopeEstimator';
import { HomepageCredibility } from '../components/HomepageCredibility';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { Project } from '../types';
import { ArrowRight, ArrowUpRight, Sparkles, Terminal as TerminalIcon, ShieldCheck, RefreshCw } from 'lucide-react';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEO
        title="Digital Partner for Software, E-Commerce & Managed Operations"
        description="We don't just build websites. Zemprolabs designs, develops, deploys, hosts, maintains, and manages your digital platform. From custom software to ongoing Shopify store care."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pb-24 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="ambient-glow -top-32 -left-32 w-96 h-96 bg-[#FF6B00]/15"></div>
        <div className="ambient-glow top-48 -right-32 w-96 h-96 bg-[#004AAD]/20"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Copy (Spans 7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PLAN &bull; BUILD &bull; RUN &bull; GROW</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
                We Build Your Digital Platform — And We Can{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA459] to-[#004AAD]">
                  Keep It Running For You.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                Zemprolabs builds, optimizes, manages and researches digital systems for businesses. We plan, develop, deploy, host, maintain, and manage custom web applications, cloud backends, and Shopify stores under one accountable engineering team.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_25px_rgba(255,107,0,0.4)] active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/managed-services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#0B0F17] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-all"
                >
                  <span>Explore Managed Care</span>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
                </Link>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#94A3B8] border-t border-[rgba(148,163,184,0.1)]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Direct SLA &amp; Support</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <TerminalIcon className="w-4 h-4 text-[#FF6B00]" />
                  <span>100% Code Ownership</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#004AAD]"></span>
                  <span>Shopify &amp; Firebase Architecture</span>
                </span>
              </div>
            </div>

            {/* Right Interactive Command Center (Spans 5 cols) */}
            <div className="lg:col-span-5">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Build. Run. Grow. Section */}
      <BuildRunGrow />

      {/* Trust Section */}
      <TrustSection />

      {/* Core Capabilities Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-2">
                // COMPREHENSIVE DISCIPLINES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Everything digital. One accountable team.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-mono text-[#FF6B00] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>EXPLORE ALL 6 SERVICE DISCIPLINES &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Credibility: Built by Engineers. Designed for Business. */}
      <HomepageCredibility />

      {/* Selected Work Portfolio Grid */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[rgba(148,163,184,0.1)] bg-[#0B0F17]/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-2">
                // PRODUCTION CASE STUDIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Engineered for real business problems.
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] mt-2 max-w-xl">
                Explore real production systems we've deployed—from multinational medical e-commerce to enterprise ServiceNow scoped applications.
              </p>
            </div>
            <Link
              to="/work"
              className="text-xs font-mono text-[#FF6B00] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>VIEW ALL CASE STUDIES &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.slice(0, 3).map((proj) => (
              <ProjectCard key={proj.id} project={proj} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* Scope Estimator Feature */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScopeEstimator />
        </div>
      </section>

      {/* 11. "Handled for You" CTA Section */}
      <HandledForYouCTA />

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

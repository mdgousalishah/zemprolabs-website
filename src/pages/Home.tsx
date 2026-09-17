import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Terminal } from '../components/Terminal';
import { BuildRunGrow } from '../components/BuildRunGrow';
import { HandledForYouCTA } from '../components/HandledForYouCTA';
import { HomeServiceCard } from '../components/HomeServiceCard';
import { HomePlatformAndPricingTeaser } from '../components/HomePlatformAndPricingTeaser';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { TrustSection } from '../components/TrustSection';
import { homeServices } from '../data/homeServices';
import { projects } from '../data/projects';
import { Project } from '../types';
import { ArrowRight, ArrowUpRight, Sparkles, Terminal as TerminalIcon, ShieldCheck } from 'lucide-react';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Selected work with live autoplay preview videos (BaeMeds, Erus Academy, Auvia, MedusCore)
  const selectedWorkProjects = projects.filter((p) => Boolean(p.video)).slice(0, 4);

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEO
        title="Digital Partner for Software, E-Commerce & Managed Operations"
        description="We don't just build websites. Zemprolabs designs, develops, deploys, hosts, maintains, and manages your digital platform. From custom software to ongoing Shopify store care."
        canonicalPath="/"
      />

      {/* 1. Hero Section */}
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
                <span>BUILD &bull; RUN &bull; SCALE</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]">
                  We Build.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FFA459] to-[#004AAD]">
                    You Grow!
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl font-semibold font-display text-white/90 leading-snug">
                  We Keep Your Digital Platform Running.
                </p>
              </div>

              <div className="space-y-2.5 max-w-2xl">
                <p className="text-base sm:text-lg text-white font-medium">
                  From Vision to Digital Reality — We Build It, Run It, and Scale It.
                </p>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  From first architecture to production operations, Zemprolabs helps businesses build digital products, launch them confidently, and keep them running as they grow.
                </p>
              </div>

              {/* Action Buttons: Primary Start a Project, Secondary Explore Our Work */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_25px_rgba(255,107,0,0.4)] active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#0B0F17] text-white hover:bg-white/5 border border-[rgba(148,163,184,0.2)] hover:border-white/40 transition-all active:scale-95"
                >
                  <span>Explore Our Work</span>
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

      {/* 2. Short Value Proposition Strip */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[rgba(148,163,184,0.1)]">
        <div className="rounded-2xl bg-[#0B0F17]/70 border border-[rgba(148,163,184,0.12)] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">
              // QUALIFIED ENGINEERS &bull; TRUSTED TECHNOLOGY
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              Everything your digital platform needs. One accountable engineering team.
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Custom software, high-performance storefronts, cloud infrastructure, and ongoing operational support—technology engineered to keep running.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {['Custom Software', 'Shopify & Headless', 'Cloud & Firebase', 'Enterprise Systems', 'Managed Care'].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#05070D] border border-[rgba(148,163,184,0.12)] text-[#F8FAFC]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Six Service Overview Cards (Concise Summaries) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-1.5">
                // SIX CORE DISCIPLINES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Everything digital. One accountable team.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-mono text-[#FF6B00] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>EXPLORE ALL 6 SERVICES &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service) => (
              <HomeServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Build / Run / Scale Lifecycle */}
      <BuildRunGrow />

      {/* 5. Selected Work Portfolio Grid (4 Live Video Projects) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[rgba(148,163,184,0.1)] bg-[#0B0F17]/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider mb-1.5">
                // SELECTED PRODUCTION WORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Engineered for real business problems.
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5 max-w-xl">
                Explore real production systems we've deployed—from medical e-commerce and streaming LMS to specialized healthcare clinics and international recruitment.
              </p>
            </div>
            <Link
              to="/work"
              className="text-xs font-mono text-[#FF6B00] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>VIEW ALL CASE STUDIES &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedWorkProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Managed Services & Pricing Teaser (Replacing heavy estimator on Home) */}
      <HomePlatformAndPricingTeaser />

      {/* 7. Trust & Credibility Section */}
      <TrustSection />

      {/* 8. Final "Start a Project" Contact CTA */}
      <HandledForYouCTA />

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

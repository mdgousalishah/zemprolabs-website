import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { Project } from '../types';
import { Sparkles } from 'lucide-react';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'E-Commerce', 'Software', 'Healthcare', 'ServiceNow', 'Recruitment'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEO
        title="Selected Work & Case Studies"
        description="Explore selected digital products, headless e-commerce platforms, and enterprise systems engineered by Zemprolabs."
        canonicalPath="/work"
      />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED CLIENT DELIVERABLES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
            Systems Engineered for Real Commercial Impact.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Every project below represents production code built for complex business operations. We prioritize architectural reliability, frictionless UX, and measurable performance.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[rgba(148,163,184,0.12)]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all ${
                activeFilter === cat
                  ? 'bg-[#FF6B00] text-black font-semibold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                  : 'bg-[#0B0F17] text-[#94A3B8] border border-[rgba(148,163,184,0.12)] hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

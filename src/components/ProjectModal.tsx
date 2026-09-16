import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Check, Layers, Cpu, Globe } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B0F17] border border-[rgba(148,163,184,0.2)] shadow-2xl flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0B0F17]/95 backdrop-blur-md border-b border-[rgba(148,163,184,0.12)]">
          <div className="flex items-center gap-3">
            <span
              className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#94A3B8] hidden sm:inline">
              // {project.client}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Top Title & Domain */}
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 text-sm font-mono text-[#94A3B8]">
              <Globe className="w-4 h-4 text-[#FF6B00]" />
              <span>{project.domain}</span>
            </div>
          </div>

          {/* Verified Metrics Strip (if present) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.1)]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5">
                  <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
                    {m.label}
                  </div>
                  <div className="text-base font-bold font-display text-white">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Grid Layout: Challenge, Solution & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col (Spans 2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF6B00] mb-2">
                  // Executive Overview
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-sm sm:text-base">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#004AAD] mb-2">
                  // The Core Challenge
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-sm sm:text-base">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#10B981] mb-2">
                  // Our Architectural Approach
                </h4>
                <p className="text-[#94A3B8] leading-relaxed text-sm sm:text-base">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Right Sidebar: What We Built & Tech Stack */}
            <div className="space-y-6">
              {/* Deliverables */}
              <div className="p-5 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.12)]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white mb-3">
                  <Layers className="w-4 h-4 text-[#FF6B00]" />
                  <span>Deliverables Built</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8]">
                  {project.built.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="p-5 rounded-xl bg-[#05070D] border border-[rgba(148,163,184,0.12)]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white mb-3">
                  <Cpu className="w-4 h-4 text-[#004AAD]" />
                  <span>Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#111827] text-white border border-[rgba(148,163,184,0.15)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Project CTA */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#FF6B00] text-black hover:bg-[#ff7b1a] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                >
                  <span>Visit Production Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

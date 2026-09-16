import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { ArrowUpRight, CheckCircle, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.video) return;

    video.muted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Handled if browser prevents autoplay
        });
      }
    };

    playVideo();

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playVideo();
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(video);
      return () => {
        observer.disconnect();
      };
    }
  }, [project.video]);

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative rounded-xl bg-[#0B0F17] border border-[rgba(148,163,184,0.15)] hover:border-[rgba(255,107,0,0.5)] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1"
    >
      {/* Visual Browser Mockup Preview */}
      <div className="w-full bg-[#05070D] border-b border-[rgba(148,163,184,0.12)] p-3">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[#94A3B8]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FF6B00]/60 transition-colors"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#004AAD]/60 transition-colors"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#10B981]/60 transition-colors"></span>
          </div>
          <div className="flex items-center gap-1 bg-[#111827] px-2.5 py-0.5 rounded border border-[rgba(148,163,184,0.1)] text-[#94A3B8]">
            <Globe className="w-3 h-3 text-[#FF6B00]" />
            <span>{project.domain}</span>
          </div>
          <span className="text-[10px] uppercase font-semibold text-[#94A3B8]">{project.category}</span>
        </div>

        {/* UI Project Preview Container */}
        <div className="relative h-44 rounded-lg bg-gradient-to-br from-[#0B0F17] via-[#111827] to-[#080B12] border border-[rgba(148,163,184,0.08)] p-4 flex flex-col justify-between overflow-hidden">
          {project.video ? (
            <>
              {/* Autoplaying looping muted video */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={project.image}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                tabIndex={-1}
                aria-hidden="true"
              >
                <source src={project.video} type="video/mp4" />
              </video>

              {/* Subtle dark gradient overlay for text readability without darkening the video */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/85 via-transparent to-black/25 pointer-events-none z-[1]" />
            </>
          ) : project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/85 via-transparent to-black/25 pointer-events-none z-[1]" />
            </>
          ) : (
            <>
              {/* Subtle decorative glow */}
              <div
                className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-20 blur-2xl pointer-events-none"
                style={{ backgroundColor: project.color }}
              ></div>

              {/* Top mockup elements */}
              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-28 rounded bg-white/10"></div>
                  <div
                    className="h-4 px-2 rounded text-[10px] font-mono flex items-center font-semibold"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    {project.category}
                  </div>
                </div>
                <div className="h-2 w-44 rounded bg-white/5"></div>
              </div>

              {/* Center visual layout representation */}
              <div className="grid grid-cols-3 gap-2 my-2 relative z-10">
                <div className="h-14 rounded bg-[#05070D]/80 border border-white/5 p-2 flex flex-col justify-between">
                  <div className="h-2 w-8 rounded bg-white/20"></div>
                  <div className="h-3 w-12 rounded" style={{ backgroundColor: `${project.color}40` }}></div>
                </div>
                <div className="h-14 rounded bg-[#05070D]/80 border border-white/5 p-2 flex flex-col justify-between">
                  <div className="h-2 w-10 rounded bg-white/20"></div>
                  <div className="h-3 w-14 rounded bg-[#10B981]/30"></div>
                </div>
                <div className="h-14 rounded bg-[#05070D]/80 border border-white/5 p-2 flex flex-col justify-between">
                  <div className="h-2 w-6 rounded bg-white/20"></div>
                  <div className="h-3 w-10 rounded bg-[#004AAD]/40"></div>
                </div>
              </div>
            </>
          )}

          {/* Spacer to keep bottom indicator pinned */}
          {(project.video || project.image) && <div className="flex-1" />}

          {/* Bottom indicator */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
            <span className="flex items-center gap-1.5 text-[#10B981] bg-[#05070D]/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5 font-semibold">
              <CheckCircle className="w-3 h-3 text-[#10B981]" />
              <span>ACTIVE SYSTEM</span>
            </span>
            <span className="group-hover:text-white transition-colors flex items-center gap-1 font-semibold bg-[#05070D]/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5 text-[#E2E8F0]">
              <span>EXPLORE CASE</span>
              <ArrowUpRight className="w-3 h-3 text-[#FF6B00]" />
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#FF6B00] font-semibold">
              // {project.client}
            </span>
            <span className="text-xs font-mono text-[#94A3B8]">{project.category}</span>
          </div>

          <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[#FF6B00] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-[#94A3B8] line-clamp-2 leading-relaxed mb-4">
            {project.overview}
          </p>
        </div>

        {/* Tech Tags */}
        <div>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(148,163,184,0.1)]">
            {project.tech.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#111827] text-[#94A3B8] border border-[rgba(148,163,184,0.1)]"
              >
                {tag}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-[#94A3B8]">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

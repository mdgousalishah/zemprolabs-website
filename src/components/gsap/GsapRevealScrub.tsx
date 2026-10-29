import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrubPreset = 'fade-up' | 'fade-scale' | 'fade-left' | 'fade-right';

interface GsapRevealScrubProps {
  children: React.ReactNode;
  className?: string;
  preset?: ScrubPreset;
  /** Travel distance in px for fade-up/fade-left/fade-right presets. */
  distance?: number;
}

const fromVarsFor = (preset: ScrubPreset, distance: number): gsap.TweenVars => {
  switch (preset) {
    case 'fade-scale':
      return { scale: 0.86, opacity: 0 };
    case 'fade-left':
      return { x: distance, opacity: 0 };
    case 'fade-right':
      return { x: -distance, opacity: 0 };
    case 'fade-up':
    default:
      return { y: distance, opacity: 0 };
  }
};

/**
 * Scroll-scrubbed reveal: unlike the existing whileInView-based ScrollReveal (motion/), this
 * ties the reveal progress continuously to scroll position rather than playing a fixed-duration
 * animation once the element enters view.
 */
export const GsapRevealScrub: React.FC<GsapRevealScrubProps> = ({
  children,
  className = '',
  preset = 'fade-up',
  distance = 60
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, fromVarsFor(preset, distance), {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          end: 'top 55%',
          scrub: 0.5
        }
      });
    }, ref);

    return () => ctx.revert();
  }, [preset, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default GsapRevealScrub;

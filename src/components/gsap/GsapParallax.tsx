import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Total travel distance in px (the element moves from -speed to +speed across its scroll range). */
  speed?: number;
}

/** Depth parallax: the wrapped element drifts vertically at a different rate than the page scroll. */
export const GsapParallax: React.FC<GsapParallaxProps> = ({ children, className = '', speed = 50 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -speed },
        {
          y: speed,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default GsapParallax;

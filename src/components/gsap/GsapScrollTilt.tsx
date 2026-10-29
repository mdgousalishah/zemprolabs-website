import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapScrollTiltProps {
  children: React.ReactNode;
  className?: string;
  /** Starting X-axis rotation (degrees) that eases to 0 as the element scrolls into place. */
  tiltX?: number;
  /** Starting Y-axis rotation (degrees) that eases to 0 as the element scrolls into place. */
  tiltY?: number;
  /** 3D perspective distance in px — smaller feels more dramatic. */
  perspective?: number;
}

/**
 * Scroll-scrubbed 3D tilt: the element starts rotated in 3D space and settles flat as it
 * enters the viewport, with rotation tied directly to scroll position (not a one-shot reveal).
 * Distinct from the existing mouse-driven AntigravityTiltCard in src/components/motion.
 */
export const GsapScrollTilt: React.FC<GsapScrollTiltProps> = ({
  children,
  className = '',
  tiltX = 12,
  tiltY = 0,
  perspective = 1200
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { rotateX: tiltX, rotateY: tiltY, transformPerspective: perspective, opacity: 0.5 },
        {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'top center',
            scrub: 0.6
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [tiltX, tiltY, perspective]);

  return (
    <div ref={ref} className={className} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default GsapScrollTilt;

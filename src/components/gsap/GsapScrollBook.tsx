import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapScrollBookProps {
  children: React.ReactNode;
  className?: string;
  /** Number of "pages" to flip through across the pinned scroll distance. */
  count: number;
  /** Called with the page index that should be active for the current scroll position. */
  onIndexChange: (index: number) => void;
}

/**
 * Pins its children in place for (count - 1) viewport-heights of scroll, reporting which
 * "page" index is current as the user scrolls past -- a scroll-driven counterpart to manually
 * clicking through a list. Pairs with a CSS 3D page-flip transition driven off the reported
 * index (see ProductionDemonstrationsSection). Only active at lg+ and under
 * prefers-reduced-motion: no-preference -- below that, children render inline, unpinned, and
 * index changes come from clicks alone.
 */
export const GsapScrollBook: React.FC<GsapScrollBookProps> = ({
  children,
  className = '',
  count,
  onIndexChange
}) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const onIndexChangeRef = useRef(onIndexChange);
  onIndexChangeRef.current = onIndexChange;

  useEffect(() => {
    const outer = outerRef.current;
    const pinEl = pinRef.current;
    if (!outer || !pinEl || count < 2) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': () => {
          const st = ScrollTrigger.create({
            trigger: outer,
            start: 'top top',
            end: 'bottom bottom',
            pin: pinEl,
            pinSpacing: false,
            scrub: 1,
            onUpdate: (self) => {
              const idx = Math.min(count - 1, Math.floor(self.progress * count));
              onIndexChangeRef.current(idx);
            }
          });
          return () => st.kill();
        }
      });
    }, outer);

    return () => ctx.revert();
  }, [count]);

  return (
    <div
      ref={outerRef}
      className="relative h-auto lg:motion-safe:h-[calc(var(--book-count)*100vh)]"
      style={{ '--book-count': count } as React.CSSProperties}
    >
      <div ref={pinRef} className={className}>
        {children}
      </div>
    </div>
  );
};

export default GsapScrollBook;

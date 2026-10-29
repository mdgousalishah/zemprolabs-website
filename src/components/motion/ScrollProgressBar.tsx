import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#2C3E50] via-[#7F8C8D] to-[#ECF0F1] origin-left shadow-[0_0_12px_rgba(44,62,80,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};

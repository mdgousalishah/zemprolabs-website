import React from 'react';
import { motion } from 'motion/react';

export const AmbientMeshGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Orb 1: Off-White Highlight (Drifting Upper Region) */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.18, 0.28, 0.16, 0.18],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#ECF0F1] via-[#BDC3C7] to-transparent blur-[140px] will-change-transform"
      />

      {/* Orb 2: Deep Slate / Navy (Drifting Lower Region) */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.92, 1.18, 1],
          opacity: [0.12, 0.22, 0.14, 0.12],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#7F8C8D] via-[#34495E] to-transparent blur-[160px] will-change-transform"
      />

      {/* Orb 3: Light Gray (Subtle Core Center Pulse) */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          scale: [0.95, 1.1, 0.9, 0.95],
          opacity: [0.08, 0.16, 0.08, 0.08],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-10 left-1/3 w-[450px] h-[450px] rounded-full bg-[#BDC3C7] blur-[150px] will-change-transform"
      />
    </div>
  );
};

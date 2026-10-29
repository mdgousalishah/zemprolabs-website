import React from 'react';
import { motion } from 'motion/react';

interface LaserConnectPipelineProps {
  className?: string;
}

export const LaserConnectPipeline: React.FC<LaserConnectPipelineProps> = ({
  className = '',
}) => {
  return (
    <div className={`relative w-full h-1 my-4 hidden md:block overflow-hidden ${className}`}>
      {/* Background Track Rail */}
      <div className="absolute inset-0 bg-[#2C3E50]/15 rounded-full" />

      {/* Animated Glowing Laser Stroke */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
        style={{ originX: 0 }}
        className="absolute inset-0 bg-gradient-to-r from-[#2C3E50] via-[#34495E] to-[#7F8C8D] rounded-full shadow-[0_0_12px_rgba(44,62,80,0.8)]"
      />

      {/* Traveling Luminous Pulse */}
      <motion.div
        initial={{ x: '-10%' }}
        animate={{ x: '110%' }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 1.2,
        }}
        className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
      />
    </div>
  );
};

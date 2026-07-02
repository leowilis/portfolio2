'use client';

import { motion } from 'framer-motion';

type FloatingProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  duration?: number;
};

export default function Floating({
  children,
  className,
  y = 10,
  duration = 4,
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [-y, y, -y],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

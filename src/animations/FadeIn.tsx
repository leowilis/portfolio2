'use client';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
};

export default function FadeIn({
  children,
  className,
  y = 24,
  delay = 0,
  duration = 0.7,
}: Props) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: 'easeOut',
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

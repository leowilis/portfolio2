'use client';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  y?: number;
}

export default function FadeIn({
  children,
  className,
  y = 24,
}: Props) {
  return (
    <motion.div
      custom={y}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: (distance: number) => ({
          opacity: 0,
          y: distance,
        }),
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
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
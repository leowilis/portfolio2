'use client';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function StaggerContainer({ children, className }: Props) {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

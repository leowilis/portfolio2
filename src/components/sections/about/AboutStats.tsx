'use client';

import { motion } from 'framer-motion';
import { STATS } from './about.data';
import StatCard from './StatCard';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AboutStats() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      {STATS.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </motion.div>
  );
}
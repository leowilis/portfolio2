'use client';

import { motion } from 'framer-motion';
import { DETAILS } from './about.data';
import AboutOrb from './AboutOrb';
import Floating from '@/src/animations/Floating';
import Magnetic from '@/src/animations/Magnetic';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function AboutDetails() {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className='flex flex-col gap-8'
    >
      <Magnetic>
        <Floating y={8} duration={5}>
          <AboutOrb />
        </Floating>
      </Magnetic>

      <motion.div variants={container} className='flex flex-col'>
        {DETAILS.map((detail) => (
          <motion.div
            key={detail.label}
            variants={item}
            transition={{
              duration: 0.45,
            }}
            className='flex items-center justify-between border-b border-white/10 py-3 last:border-none'
          >
            <span className='text-[10px] font-bold uppercase tracking-[2px] text-white/30'>
              {detail.label}
            </span>

            <span
              className={`text-sm font-semibold ${
                detail.isHighlight ? 'text-green-400' : 'text-white/50'
              }`}
            >
              {detail.value}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

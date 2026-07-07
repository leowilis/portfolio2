'use client';

import { motion } from 'framer-motion';

export default function ProjectsHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className='mb-16 text-center'
    >
      <p className='mb-3 text-xs font-medium uppercase tracking-[0.45em] text-violet-400'>
        Selected Works
      </p>

      <h2 className='text-5xl font-bold tracking-tight text-white'>
        Featured Projects
      </h2>
      <p className='mx-auto mt-5 max-w-2xl text-base leading-8 text-white/45'>
        A selection of products and applications I&apos;ve designed and built
        with a strong focus on performance, clean architecture, and user
        experience.
      </p>
    </motion.div>
  );
}

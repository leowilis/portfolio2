'use client';

import { motion } from 'framer-motion';

export default function ProjectsHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className='mb-16 text-center select-none w-full flex flex-col items-center px-4 md:mb-20 shrink-0'
    >
      <p className='mb-4 text-xs font-extrabold uppercase tracking-[0.45em] text-violet-400'>
        Selected Works
      </p>

      <h2 className='text-4xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl max-w-4xl leading-tight'>
        Featured Projects
      </h2>
      <p className='mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-neutral-400 font-medium sm:text-base sm:leading-relaxed'>
        A selection of products and applications I&apos;ve designed and built
        with a strong focus on performance, clean architecture, and user
        experience.
      </p>
    </motion.div>
  );
}

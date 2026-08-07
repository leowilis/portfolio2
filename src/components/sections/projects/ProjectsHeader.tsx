'use client';

import { motion } from 'framer-motion';
import {
  PROJECT_HEADER_EASE,
  PROJECT_HEADER_ENTER_DURATION,
  PROJECT_HEADER_INITIAL_Y,
  PROJECT_HEADER_INVIEW_OPACITY,
  PROJECT_HEADER_VIEWPORT_AMOUNT,
  PROJECT_HEADER_VIEWPORT_MARGIN,
  PROJECT_HEADER_VIEWPORT_ONCE,
} from './project.constants';

export default function ProjectsHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: PROJECT_HEADER_INITIAL_Y,
      }}
      whileInView={{
        opacity: PROJECT_HEADER_INVIEW_OPACITY,
        y: 0,
      }}
      viewport={{
        once: PROJECT_HEADER_VIEWPORT_ONCE,
        amount: PROJECT_HEADER_VIEWPORT_AMOUNT,
        margin: PROJECT_HEADER_VIEWPORT_MARGIN,
      }}
      transition={{
        duration: PROJECT_HEADER_ENTER_DURATION,
        ease: PROJECT_HEADER_EASE,
      }}
      className='mb-16 flex w-full shrink-0 select-none flex-col items-center px-4 text-center md:mb-20'
    >
      <p className='mb-4 text-xs font-extrabold uppercase tracking-[0.45em] text-violet-400 sm:text-xs'>
        Selected Works
      </p>

      <h2 className='max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl'>
        Featured Projects
      </h2>

      <p className='mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400 sm:text-base sm:leading-relaxed'>
        A selection of products and applications I&apos;ve designed and built
        with a strong focus on performance, clean architecture, and user
        experience.
      </p>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import AboutTechStack from './AboutTechStack';
import AboutDownloadCV from './AboutDownloadCV';


export default function AboutBio() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className='flex flex-col gap-5'
    >
      <p className='text-md leading-relaxed text-white/35'>
        I&apos;m a frontend developer based in{' '}
        <span className='font-bold text-white/70'>Medan, Indonesia</span>,
        focused on building modern, performant web applications with clean and
        maintainable code.
      </p>

      <p className='text-md leading-relaxed text-white/35'>
        I don&apos;t just write code — I craft experiences. Every detail
        matters: smooth animations, intuitive interfaces, and interactions that
        feel effortless to use.
      </p>

      <p className='text-md leading-relaxed text-white/35'>
        Currently open to{' '}
        <span className='font-bold text-violet-400'>
          full-time or remote opportunities
        </span>{' '}
        where I can contribute, grow, and build products that people genuinely
        enjoy using.
      </p>

      <AboutTechStack />

      <AboutDownloadCV />
    </motion.div>
  );
}

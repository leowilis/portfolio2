'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/src/animations/TextReveal';
import { EDUCATION_EASE, EDUCATION_HEADER_ANIMATION } from './constants';

export default function EducationHeader() {
  return (
    <motion.header
      initial='hidden'
      whileInView='visible'
      viewport={{
        once: true,
        amount: EDUCATION_HEADER_ANIMATION.SECTION_VIEWPORT_AMOUNT,
      }}
      className='mb-16 md:mb-24 select-none'
    >
      <div className='grid gap-8 md:grid-cols-[180px_1fr] md:gap-12'>
        {/* Decorative Section Rule Anchor */}
        <motion.div
          aria-hidden='true'
          variants={{
            hidden: {
              opacity: 0,
              x: EDUCATION_HEADER_ANIMATION.SECTION_INITIAL_X,
            },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{
            duration: EDUCATION_HEADER_ANIMATION.SECTION_DURATION,
            ease: EDUCATION_EASE,
          }}
          className='flex items-start gap-3 pt-2.5'
        >
          <span className='h-px w-8 bg-violet-400/50' />
        </motion.div>

        {/* Core Header Copy Block */}
        <div>
          {/* Subtitle Tracker Badge Label */}
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: EDUCATION_HEADER_ANIMATION.LABEL_INITIAL_Y,
              },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: EDUCATION_HEADER_ANIMATION.LABEL_DURATION,
              ease: EDUCATION_EASE,
            }}
            className='mb-5 text-[10px] font-black uppercase tracking-[0.40em] text-violet-400'
          >
            Professional Training
          </motion.p>

          {/* Title */}
          <TextReveal
            as='h2'
            delay={EDUCATION_HEADER_ANIMATION.TITLE_DELAY}
            stagger={EDUCATION_HEADER_ANIMATION.TITLE_STAGGER}
            duration={EDUCATION_HEADER_ANIMATION.TITLE_DURATION}
            y={EDUCATION_HEADER_ANIMATION.TITLE_Y}
            blur={EDUCATION_HEADER_ANIMATION.TITLE_BLUR}
            className='max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[6rem]'
          >
            Education
          </TextReveal>

          {/* Description */}
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: EDUCATION_HEADER_ANIMATION.DESCRIPTION_INITIAL_Y,
              },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: EDUCATION_HEADER_ANIMATION.DESCRIPTION_DURATION,
              delay: EDUCATION_HEADER_ANIMATION.DESCRIPTION_DELAY,
              ease: EDUCATION_EASE,
            }}
            className='mt-7 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base sm:leading-relaxed'
          >
            A focused foundation in frontend development, built through
            structured learning, practical work, and hands-on projects.
          </motion.p>
        </div>
      </div>
    </motion.header>
  );
}

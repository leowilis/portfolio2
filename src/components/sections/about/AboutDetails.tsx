'use client';

import { motion } from 'framer-motion';
import Floating from '@/src/animations/Floating';
import Magnetic from '@/src/animations/Magnetic';
import { cn } from '@/src/lib/utils';
import AboutOrb from './AboutOrb';
import { DETAILS } from './about.data';
import {
  ABOUT_DETAILS_CONTAINER_VARIANTS,
  ABOUT_DETAILS_ITEM_DURATION,
  ABOUT_DETAILS_ITEM_VARIANTS,
  ABOUT_DETAILS_ORB_DURATION,
  ABOUT_DETAILS_ORB_Y,
  ABOUT_DETAILS_VIEWPORT_AMOUNT,
  ABOUT_DETAILS_VIEWPORT_ONCE,
} from './constants';

export default function AboutDetails() {
  return (
    <motion.section
      variants={ABOUT_DETAILS_CONTAINER_VARIANTS}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: ABOUT_DETAILS_VIEWPORT_ONCE,
        amount: ABOUT_DETAILS_VIEWPORT_AMOUNT,
      }}
      className='flex flex-col gap-8'
      aria-labelledby='about-details-heading'
    >
      <h2 id='about-details-heading' className='sr-only'>
        Profile Details
      </h2>

      <Magnetic>
        <Floating y={ABOUT_DETAILS_ORB_Y} duration={ABOUT_DETAILS_ORB_DURATION}>
          <AboutOrb />
        </Floating>
      </Magnetic>

      <dl className='flex flex-col'>
        {DETAILS.map((detail) => (
          <motion.div
            key={detail.label}
            variants={ABOUT_DETAILS_ITEM_VARIANTS}
            transition={{
              duration: ABOUT_DETAILS_ITEM_DURATION,
            }}
            className='flex items-center justify-between border-b border-white/10 py-3 last:border-none'
          >
            <dt className='text-[10px] font-bold uppercase tracking-[2px] text-white/30'>
              {detail.label}
            </dt>

            <dd
              className={cn(
                'text-sm font-semibold',
                detail.isHighlight ? 'text-green-400' : 'text-white/50',
              )}
            >
              {detail.value}
            </dd>
          </motion.div>
        ))}
      </dl>
    </motion.section>
  );
}

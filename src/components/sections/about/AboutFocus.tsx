'use client';

import { motion } from 'framer-motion';

import { ABOUT_FOCUS } from './about.data';
import {
  ABOUT_FOCUS_ACCENT_SCALEX,
  ABOUT_FOCUS_HOVER_Y,
  ABOUT_FOCUS_INITIAL_FILTER,
  ABOUT_FOCUS_REVEAL_AMOUNT,
  ABOUT_FOCUS_REVEAL_DELAY,
  ABOUT_FOCUS_REVEAL_DURATION,
  ABOUT_FOCUS_REVEAL_EASE,
  ABOUT_FOCUS_REVEAL_ONCE,
  ABOUT_FOCUS_REVEAL_OPACITY,
  ABOUT_FOCUS_REVEAL_Y,
  ABOUT_FOCUS_INVIEW_FILTER,
} from './constants';

export default function AboutFocus() {
  return (
    <section aria-labelledby='about-focus-heading' className='pt-2'>
      <h2
        id='about-focus-heading'
        className='mb-6 text-sm font-black uppercase tracking-[0.22em] text-violet-300/70'
      >
        What I Focus On
      </h2>

      <div className='grid gap-4'>
        {ABOUT_FOCUS.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{
              opacity: 0,
              y: ABOUT_FOCUS_REVEAL_Y,
              filter: ABOUT_FOCUS_INITIAL_FILTER,
            }}
            whileInView={{
              opacity: ABOUT_FOCUS_REVEAL_OPACITY,
              y: 0,
              filter: ABOUT_FOCUS_INVIEW_FILTER,
            }}
            viewport={{
              once: ABOUT_FOCUS_REVEAL_ONCE,
              amount: ABOUT_FOCUS_REVEAL_AMOUNT,
            }}
            transition={{
              duration: ABOUT_FOCUS_REVEAL_DURATION,
              delay: index * ABOUT_FOCUS_REVEAL_DELAY,
              ease: ABOUT_FOCUS_REVEAL_EASE,
            }}
            whileHover={{
              y: ABOUT_FOCUS_HOVER_Y,
            }}
            className='group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]'
          >
            {/* Accent line */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: ABOUT_FOCUS_ACCENT_SCALEX }}
              viewport={{ once: true }}
              transition={{
                duration: ABOUT_FOCUS_REVEAL_DURATION,
                delay:
                  index * ABOUT_FOCUS_REVEAL_DELAY + ABOUT_FOCUS_REVEAL_DELAY,
                ease: ABOUT_FOCUS_REVEAL_EASE,
              }}
              className='absolute left-0 top-0 h-px w-16 origin-left bg-violet-400/70 transition-all duration-300 group-hover:w-24 group-hover:bg-violet-300'
            />

            {/* Hover glow */}
            <div
              aria-hidden='true'
              className='pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100'
            />

            <div className='relative flex gap-4'>
              <motion.span
                aria-hidden='true'
                className='pt-1 text-xs font-black tracking-[0.18em] text-violet-400/80 transition-colors duration-300 group-hover:text-violet-300'
              >
                {item.number}
              </motion.span>

              <div className='min-w-0'>
                <h3 className='text-base font-semibold text-white/85 transition-colors duration-300 group-hover:text-white'>
                  {item.title}
                </h3>

                <p className='mt-2 text-sm leading-relaxed text-white/35 transition-colors duration-300 group-hover:text-white/50'>
                  {item.description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

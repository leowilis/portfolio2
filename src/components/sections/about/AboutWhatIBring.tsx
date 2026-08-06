'use client';

import { motion } from 'framer-motion';

import { ABOUT_WHAT_I_BRING } from './about.data';
import {
  ABOUT_WHAT_I_BRING_REVEAL_AMOUNT,
  ABOUT_WHAT_I_BRING_REVEAL_DELAY,
  ABOUT_WHAT_I_BRING_REVEAL_DURATION,
  ABOUT_WHAT_I_BRING_REVEAL_EASE,
  ABOUT_WHAT_I_BRING_REVEAL_ONCE,
  ABOUT_WHAT_I_BRING_REVEAL_OPACITY,
  ABOUT_WHAT_I_BRING_REVEAL_X,
} from './constants';

export default function AboutWhatIBring() {
  return (
    <section aria-labelledby='about-what-i-bring-heading' className='mt-12'>
      <h2
        id='about-what-i-bring-heading'
        className='mb-6 text-xs font-black uppercase tracking-[0.22em] text-violet-300/70'
      >
        What I Bring
      </h2>

      <div className='space-y-5'>
        {ABOUT_WHAT_I_BRING.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{
              opacity: 0,
              x: ABOUT_WHAT_I_BRING_REVEAL_X,
            }}
            whileInView={{
              opacity: ABOUT_WHAT_I_BRING_REVEAL_OPACITY,
              x: 0,
            }}
            viewport={{
              once: ABOUT_WHAT_I_BRING_REVEAL_ONCE,
              amount: ABOUT_WHAT_I_BRING_REVEAL_AMOUNT,
            }}
            transition={{
              duration: ABOUT_WHAT_I_BRING_REVEAL_DURATION,
              delay: index * ABOUT_WHAT_I_BRING_REVEAL_DELAY,
              ease: ABOUT_WHAT_I_BRING_REVEAL_EASE,
            }}
            className='group'
          >
            <div className='flex gap-4'>
              <span
                aria-hidden='true'
                className='pt-0.5 text-[10px] font-black tracking-[0.18em] text-violet-400'
              >
                {item.number}
              </span>

              <div className='min-w-0'>
                <h3 className='text-sm font-semibold text-white/80 transition-colors duration-300 group-hover:text-white'>
                  {item.title}
                </h3>

                <p className='mt-1.5 max-w-md text-sm leading-relaxed text-white/35'>
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

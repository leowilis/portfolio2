'use client';

import { motion } from 'framer-motion';
import ContactHeader from './ContactHeader';
import GlobeScene from './globe/GlobeScene';
import {
  CONTACT_CONTENT_MAX_WIDTH,
  CONTACT_GLOBE_EASE,
  CONTACT_GLOBE_INITIAL_OPACITY,
  CONTACT_GLOBE_INITIAL_SCALE,
  CONTACT_GLOBE_REVEAL_AMOUNT,
  CONTACT_GLOBE_REVEAL_DURATION,
  CONTACT_MAX_WIDTH,
} from './constants';

export default function ContactSection() {
  return (
    <section
      id='contact'
      aria-label='Contact Me'
      className='relative w-full overflow-visible py-20 sm:py-28 lg:py-36'
    >
      <div
        className='mx-auto w-full px-6 sm:px-10 lg:px-16'
        style={{
          maxWidth: CONTACT_MAX_WIDTH,
        }}
      >
        <div
          className='mx-auto grid w-full items-center lg:grid-cols-[0.9fr_1.1fr]'
          style={{
            maxWidth: CONTACT_CONTENT_MAX_WIDTH,
          }}
        >
          {/* Left - Contact */}
          <div className='relative z-10 py-10 sm:py-14 lg:py-20'>
            <ContactHeader />
          </div>

          {/* Right - Globe */}
          <motion.div
            initial={{
              opacity: CONTACT_GLOBE_INITIAL_OPACITY,
              scale: CONTACT_GLOBE_INITIAL_SCALE,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: CONTACT_GLOBE_REVEAL_AMOUNT,
            }}
            transition={{
              duration: CONTACT_GLOBE_REVEAL_DURATION,
              ease: CONTACT_GLOBE_EASE,
            }}
            className='relative flex w-full items-center justify-center overflow-visible lg:justify-end'
          >
            <GlobeScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

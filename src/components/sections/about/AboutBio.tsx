'use client';

import { motion } from 'framer-motion';
import AboutDownloadCV from './AboutDownloadCV';
import AboutTechStack from './AboutTechStack';
import {
  ABOUT_BIO_INVIEW_OPACITY,
  ABOUT_BIO_REVEAL_DURATION,
  ABOUT_BIO_REVEAL_EASE,
  ABOUT_BIO_REVEAL_OPACITY,
  ABOUT_BIO_REVEAL_X,
  ABOUT_BIO_VIEWPORT_AMOUNT,
  ABOUT_BIO_VIEWPORT_ONCE,
} from './constants';
import { ABOUT_BIO } from './about.data';
import AboutFocus from './AboutFocus';

export default function AboutBio() {
  return (
    <motion.article
      initial={{
        opacity: ABOUT_BIO_REVEAL_OPACITY,
        x: ABOUT_BIO_REVEAL_X,
      }}
      whileInView={{
        opacity: ABOUT_BIO_INVIEW_OPACITY,
        x: 0,
      }}
      viewport={{
        once: ABOUT_BIO_VIEWPORT_ONCE,
        amount: ABOUT_BIO_VIEWPORT_AMOUNT,
      }}
      transition={{
        duration: ABOUT_BIO_REVEAL_DURATION,
        ease: ABOUT_BIO_REVEAL_EASE,
      }}
      className='flex flex-col gap-5'
    >
      {ABOUT_BIO.map((paragraph) => (
        <p
          key={paragraph.id}
          className='text-sm leading-relaxed text-white/38 tracking-normal md:text-base md:leading-relaxed'
        >
          {'content' in paragraph ? (
            paragraph.content
          ) : (
            <>
              {paragraph.before}{' '}
              <span className='font-extrabold text-white/90 tracking-tight'>
                {paragraph.highlight}
              </span>
              {paragraph.after}
            </>
          )}
        </p>
      ))}

      <AboutTechStack />
      <AboutDownloadCV />
      <AboutFocus />
    </motion.article>
  );
}

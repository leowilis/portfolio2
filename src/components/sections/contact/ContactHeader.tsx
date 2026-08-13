'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/src/animations/TextReveal';
import {
  CONTACT_AMOUNT,
  CONTACT_BADGE_TRACKING,
  CONTACT_CTA_ARROW_X,
  CONTACT_CTA_DELAY,
  CONTACT_CTA_HOVER_Y,
  CONTACT_CTA_TRACKING,
  CONTACT_CONTENT_DELAY,
  CONTACT_EASE,
  CONTACT_REVEAL_DURATION,
  CONTACT_REVEAL_Y,
  CONTACT_SOCIAL_DELAY,
  CONTACT_SOCIAL_ITEM_DURATION,
  CONTACT_SOCIAL_ITEM_Y,
  CONTACT_SOCIAL_STAGGER,
  CONTACT_SOCIAL_TRACKING,
  CONTACT_TITLE_BLUR,
  CONTACT_TITLE_DELAY,
  CONTACT_TITLE_DURATION,
  CONTACT_TITLE_SECOND_DELAY,
  CONTACT_TITLE_STAGGER,
  CONTACT_TITLE_TRACKING,
  CONTACT_TITLE_Y,
  CONTACT_SOCIAL_UNDERLINE_OFFSET,
} from './constants';
import { CONTACT_EMAIL, CONTACT_SOCIALS } from './contact.data';

export default function ContactHeader() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: CONTACT_AMOUNT }}
      className='select-none'
    >
      {/* Eyebrow */}
      <motion.div
        initial={{
          opacity: 0,
          y: CONTACT_REVEAL_Y,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: CONTACT_AMOUNT,
        }}
        transition={{
          duration: CONTACT_REVEAL_DURATION,
          ease: CONTACT_EASE,
        }}
        className='mb-8 flex items-center gap-3'
      >
        <span
          className='text-[10px] font-black uppercase tracking-wider text-violet-400'
          style={{
            letterSpacing: CONTACT_BADGE_TRACKING,
          }}
        >
          Get in touch
        </span>
      </motion.div>

      {/* Title */}
      <div
        className='text-5xl font-black leading-[0.92] sm:text-6xl md:text-7xl lg:text-[5.5rem]'
        style={{
          letterSpacing: CONTACT_TITLE_TRACKING,
        }}
      >
        <TextReveal
          as='h1'
          delay={CONTACT_TITLE_DELAY}
          stagger={CONTACT_TITLE_STAGGER}
          duration={CONTACT_TITLE_DURATION}
          y={CONTACT_TITLE_Y}
          blur={CONTACT_TITLE_BLUR}
          className='text-white'
        >
          Let&apos;s build
        </TextReveal>

        <TextReveal
          as='h1'
          delay={CONTACT_TITLE_SECOND_DELAY}
          stagger={CONTACT_TITLE_STAGGER}
          duration={CONTACT_TITLE_DURATION}
          y={CONTACT_TITLE_Y}
          blur={CONTACT_TITLE_BLUR}
          className='text-white/35'
        >
          something great.
        </TextReveal>
      </div>

      {/* Description */}
      <motion.p
        initial={{
          opacity: 0,
          y: CONTACT_REVEAL_Y,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: CONTACT_AMOUNT,
        }}
        transition={{
          duration: CONTACT_REVEAL_DURATION,
          delay: CONTACT_CONTENT_DELAY,
          ease: CONTACT_EASE,
        }}
        className='mt-8 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base sm:leading-relaxed'
      >
        Have an idea, a project, or something worth building? I&apos;d love to
        hear what you&apos;re working on.
      </motion.p>

      {/* CTA */}
      <motion.a
        href={`mailto:${CONTACT_EMAIL}`}
        initial={{
          opacity: 0,
          y: CONTACT_REVEAL_Y,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          y: CONTACT_CTA_HOVER_Y,
        }}
        viewport={{
          once: true,
          amount: CONTACT_AMOUNT,
        }}
        transition={{
          duration: CONTACT_REVEAL_DURATION,
          delay: CONTACT_CTA_DELAY,
          ease: CONTACT_EASE,
        }}
        className='group relative mt-10 inline-flex items-center gap-4 border-b border-white/20 pb-3 text-[10px] font-bold uppercase text-white transition-colors duration-500 hover:border-violet-400 outline-none focus-visible:ring-2 focus-visible:ring-purple-500'
        style={{
          letterSpacing: CONTACT_CTA_TRACKING,
        }}
      >
        <span className='group-hover/link:text-violet-400 font-bold'>
          Start a conversation
        </span>

        <motion.span
          aria-hidden='true'
          initial={{
            x: 0,
          }}
          whileHover={{
            x: CONTACT_CTA_ARROW_X,
          }}
          className='text-sm'
        >
          ↗
        </motion.span>

        {/* Base line */}
        <span
          aria-hidden='true'
          className='absolute bottom-0 left-0 h-px w-full bg-white/15'
        />

        {/* Animated line */}
        <span
          aria-hidden='true'
          className='absolute left-0 h-px w-0 bg-violet-400 transition-all duration-700 ease-out group-hover:w-full'
          style={{
            bottom: CONTACT_SOCIAL_UNDERLINE_OFFSET,
          }}
        />
      </motion.a>

      {/* Social */}
      <motion.div
        initial={{
          opacity: 0,
          y: CONTACT_REVEAL_Y,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: CONTACT_AMOUNT,
        }}
        transition={{
          duration: CONTACT_REVEAL_DURATION,
          delay: CONTACT_SOCIAL_DELAY,
          ease: CONTACT_EASE,
        }}
        className='mt-16'
      >
        <p className='mb-4 font-bold text-sm uppercase text-white/25'>
          Find me elsewhere
        </p>

        <ul
          aria-label='Social media profiles'
          className='flex flex-wrap items-center gap-x-7 gap-y-3'
        >
          {CONTACT_SOCIALS.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              initial={{
                opacity: 0,
                y: CONTACT_SOCIAL_ITEM_Y,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: CONTACT_SOCIAL_ITEM_DURATION,
                delay: CONTACT_SOCIAL_DELAY + index * CONTACT_SOCIAL_STAGGER,
                ease: CONTACT_EASE,
              }}
              className='group relative text-[10px] uppercase font-black text-white/75 transition-colors duration-300 hover:text-violet-400'
              style={{
                letterSpacing: CONTACT_SOCIAL_TRACKING,
              }}
            >
              {social.name}

              <span
                className='absolute left-0 h-px w-0 bg-white/90 transition-all duration-500 group-hover:w-full'
                style={{
                  bottom: `${CONTACT_SOCIAL_UNDERLINE_OFFSET}px`,
                }}
              />
            </motion.a>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

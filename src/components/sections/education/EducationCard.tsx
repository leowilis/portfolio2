'use client';

import { motion } from 'framer-motion';
import {
  IconArrowUpRight,
  IconCertificate,
  IconCheck,
} from '@tabler/icons-react';
import type { EducationItem } from './education.data';
import { EDUCATION_ANIMATION, EDUCATION_EASE } from './constants';

interface EducationCardProps {
  education: EducationItem;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: EDUCATION_ANIMATION.INITIAL_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: EDUCATION_ANIMATION.VIEWPORT_AMOUNT }}
      transition={{
        duration: EDUCATION_ANIMATION.DURATION,
        ease: EDUCATION_EASE,
      }}
      className='group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] select-none'
    >
      {/* Ambient Glows */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-40 -left-40 h-[24rem] w-[24rem] rounded-full bg-violet-500/[0.06] blur-[100px]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-32 -top-32 h-[20rem] w-[20rem] rounded-full bg-violet-500/[0.035] blur-[100px]'
      />

      {/* Top Accent Line */}
      <div
        aria-hidden='true'
        className='absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-60'
      />

      <div className='relative grid lg:grid-cols-[0.8fr_1.2fr]'>
        {/* Left Column - Credential */}
        <div className='relative border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12'>
          {/* Metadata Row */}
          <div className='flex items-start justify-between gap-4'>
            <span className='text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-400'>
              {education.category}
            </span>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-300'>
              <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />{' '}
              Completed
            </span>
          </div>

          {/* Interactive Certificate Badge Icon */}
          <motion.div
            whileHover={{
              scale: EDUCATION_ANIMATION.HOVER_SCALE,
              rotate: EDUCATION_ANIMATION.HOVER_ROTATE,
            }}
            transition={{
              type: 'spring',
              stiffness: EDUCATION_ANIMATION.SPRING_STIFFNESS,
              damping: EDUCATION_ANIMATION.SPRING_DAMPING,
            }}
            className='mt-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.06] text-violet-300'
          >
            <IconCertificate
              size={EDUCATION_ANIMATION.CERTIFICATE_ICON_SIZE}
              stroke={EDUCATION_ANIMATION.CERTIFICATE_ICON_STROKE}
            />
          </motion.div>

          <p className='mt-8 text-[9px] font-bold uppercase tracking-[0.3em] text-violet-400'>
            {education.type}
          </p>
          <p className='mt-4 max-w-xs text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl'>
            Certificate <br /> of Graduation
          </p>

          {/* Certificate Download/View CTA Link Button */}
          {education.certificateUrl && (
            <motion.a
              href={education.certificateUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -EDUCATION_ANIMATION.HOVER_Y }}
              transition={{
                duration: EDUCATION_ANIMATION.DURATION,
                ease: EDUCATION_EASE,
              }}
              className='group/link mt-10 inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.025] px-5 py-3 text-xs font-bold text-neutral-300 transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 hover:border-violet-400/30 hover:bg-violet-400/[0.08] hover:text-white'
            >
              <span>View Certificate</span>
              <IconArrowUpRight
                size={EDUCATION_ANIMATION.ARROW_ICON_SIZE}
                stroke={EDUCATION_ANIMATION.ARROW_ICON_STROKE}
                className='transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5'
              />
            </motion.a>
          )}
        </div>

        {/* Right Column - Program Breakdown Details */}
        <div className='relative p-7 sm:p-10 lg:p-12'>
          <div className='flex items-start justify-between gap-6'>
            <span className='text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-400'>
              Program
            </span>
            <span className='font-mono text-[9px] font-medium tracking-[0.2em] text-neutral-500'>
              {education.id}
            </span>
          </div>

          <div className='mt-16'>
            <p className='mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400'>
              Front-End Development
            </p>
            <h3 className='max-w-2xl text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl'>
              {education.title}
            </h3>
            {/* Contrast */}
            <p className='mt-7 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base sm:leading-relaxed'>
              {education.description}
            </p>
          </div>

          {/* Skills Tag */}
          {education.skills.length > 0 && (
            <div className='mt-12'>
              <div className='mb-4 flex items-center gap-3'>
                <p className='text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-400'>
                  Focus
                </p>
                <span className='h-px w-8 bg-white/[0.08]' />
              </div>

              <ul
                aria-label='Acquired technical focus skills'
                className='flex flex-wrap gap-2'
              >
                {education.skills.map((skill) => (
                  <li
                    key={skill}
                    className='inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.02] px-3.5 py-2 text-[10px] font-semibold text-neutral-300 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.04] hover:text-white'
                  >
                    <IconCheck
                      size={EDUCATION_ANIMATION.CHECK_ICON_SIZE}
                      stroke={EDUCATION_ANIMATION.CHECK_ICON_STROKE}
                      className='text-violet-400'
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Module */}
          <div className='mt-12 flex items-center gap-3 border-t border-white/[0.07] pt-6'>
            <span className='h-px w-8 bg-violet-400/40 transition-all duration-500 group-hover:w-14' />
            <span className='text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-500'>
              Front-End Development
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

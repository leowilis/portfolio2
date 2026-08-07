'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  MOBILE_BREAKPOINT,
  PROJECT_IMAGE_QUALITY,
  PROJECT_MOBILE_REVEAL_DURATION,
  PROJECT_MOBILE_REVEAL_OPACITY,
  PROJECT_MOBILE_REVEAL_STAGGER_DELAY,
  PROJECT_MOBILE_REVEAL_VIEWPORT_AMOUNT,
  PROJECT_MOBILE_REVEAL_Y,
  PROJECT_PRIORITY_IMAGE_COUNT,
} from './project.constants';
import ProjectLinks from './ProjectLinks';
import TechList from './TechList';
import type { Project } from './project.type';
import WindowHeader from './WindowHeader';

interface MobileProjectCardProps {
  project: Project;
  index: number;
}

export default function MobileProjectCard({
  project,
  index,
}: MobileProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: PROJECT_MOBILE_REVEAL_Y,
      }}
      whileInView={{
        opacity: PROJECT_MOBILE_REVEAL_OPACITY,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: PROJECT_MOBILE_REVEAL_VIEWPORT_AMOUNT,
      }}
      transition={{
        duration: PROJECT_MOBILE_REVEAL_DURATION,
        delay: index * PROJECT_MOBILE_REVEAL_STAGGER_DELAY,
        ease: 'easeOut',
      }}
      className='overflow-hidden rounded-2xl border border-white/[0.08] bg-black shadow-[0_20px_50px_rgba(0,0,0,.35)]'
    >
      <WindowHeader title={project.title} />

      <figure>
        <div className='relative h-52 w-full overflow-hidden'>
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            quality={PROJECT_IMAGE_QUALITY}
            sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, 500px`}
            priority={index < PROJECT_PRIORITY_IMAGE_COUNT}
            className='object-cover object-top'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'
          />
        </div>

        <figcaption className='flex flex-col gap-3 p-5'>
          {project.featured && (
            <p className='text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-400'>
              Featured
            </p>
          )}

          <h3 className='text-xl font-bold tracking-tight text-neutral-100'>
            {project.title}
          </h3>

          <p className='text-sm leading-relaxed text-neutral-400'>
            {project.description}
          </p>

          <div className='mt-2 flex flex-col gap-4'>
            <TechList technologies={project.technologies} />

            <div className='border-t border-white/5 pt-3'>
              <ProjectLinks demo={project.demo} github={project.github} />
            </div>
          </div>
        </figcaption>
      </figure>
    </motion.article>
  );
}

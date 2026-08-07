'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import {
  PROJECT_MODAL_CONTENT_EASE,
  PROJECT_MODAL_CONTENT_ENTER_DURATION,
  PROJECT_MODAL_CONTENT_ENTER_X,
  PROJECT_MODAL_CONTENT_EXIT_X,
  PROJECT_MODAL_CONTENT_OPACITY,
  PROJECT_MODAL_INFO_EASE,
  PROJECT_MODAL_INFO_ENTER_DELAY,
  PROJECT_MODAL_INFO_ENTER_DURATION,
  PROJECT_MODAL_INFO_ENTER_Y,
} from './project.constants';
import ProjectLinks from './ProjectLinks';
import ProjectModalImage from './ProjectModalImage';
import ProjectModalNavigation from './ProjectModalNavigation';
import TechList from './TechList';
import type { Project } from './project.type';
import WindowHeader from './WindowHeader';

interface ProjectModalContentProps {
  project: Project;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function ProjectModalContent({
  project,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ProjectModalContentProps) {
  const infoScrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    infoScrollContainerRef.current?.scrollTo({
      top: 0,
    });
  }, [project.id]);

  return (
    <div className='flex h-full w-full flex-col bg-ring-primary text-left'>
      <WindowHeader title={project.title} />

      <AnimatePresence mode='wait'>
        <motion.div
          key={project.id}
          initial={{
            opacity: 0,
            x: PROJECT_MODAL_CONTENT_ENTER_X,
          }}
          animate={{
            opacity: PROJECT_MODAL_CONTENT_OPACITY,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: PROJECT_MODAL_CONTENT_EXIT_X,
          }}
          transition={{
            duration: PROJECT_MODAL_CONTENT_ENTER_DURATION,
            ease: PROJECT_MODAL_CONTENT_EASE,
          }}
          className='grid gap-10 p-10 lg:grid-cols-[1.08fr_0.92fr]'
        >
          {/* Project preview */}
          <ProjectModalImage image={project.image} title={project.title} />

          {/* Project information */}
          <motion.div
            ref={infoScrollContainerRef}
            initial={{
              opacity: 0,
              y: PROJECT_MODAL_INFO_ENTER_Y,
            }}
            animate={{
              opacity: PROJECT_MODAL_CONTENT_OPACITY,
              y: 0,
            }}
            transition={{
              delay: PROJECT_MODAL_INFO_ENTER_DELAY,
              duration: PROJECT_MODAL_INFO_ENTER_DURATION,
              ease: PROJECT_MODAL_INFO_EASE,
            }}
            className='flex h-full min-w-0 flex-col text-left no-scrollbar lg:max-h-[540px] lg:overflow-y-auto lg:pr-1'
          >
            {/* Featured label */}
            {project.featured && (
              <span className='block pb-1 text-[10px] font-black uppercase leading-none tracking-[0.3em] text-purple-400'>
                Featured Showcase Project
              </span>
            )}

            {/* Project title */}
            <h2
              id='project-modal-title'
              className='mt-2.5 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl'
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className='mt-4 max-w-xl whitespace-pre-line break-words text-sm font-medium leading-relaxed text-neutral-400 sm:text-base'>
              {project.description}
            </p>

            {/* Technologies */}
            <div className='mt-6 shrink-0'>
              <TechList technologies={project.technologies} />
            </div>

            {/* Project links */}
            <div className='mt-2 shrink-0'>
              <ProjectLinks demo={project.demo} github={project.github} />
            </div>

            {/* Pagination */}
            <div className='mt-8 w-full shrink-0 border-t border-white/[0.03] pt-6 lg:mt-auto'>
              <ProjectModalNavigation
                onNext={onNext}
                onPrevious={onPrevious}
                hasNext={hasNext}
                hasPrevious={hasPrevious}
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

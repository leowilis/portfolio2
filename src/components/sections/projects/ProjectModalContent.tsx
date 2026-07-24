import { AnimatePresence, motion } from 'framer-motion';

import WindowHeader from './WindowHeader';
import ProjectLinks from './ProjectLinks';
import ProjectModalImage from './ProjectModalImage';
import ProjectModalNavigation from './ProjectModalNavigation';
import TechList from './TechList';
import type { Project } from './project.type';

interface Props {
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
}: Props) {
  return (
    <div className='w-full h-full flex flex-col bg-ring-primary select-none text-left'>
      <WindowHeader title={project.title} />

      <AnimatePresence mode='wait'>
        <motion.div
          key={project.id}
          initial={{
            opacity: 0,
            x: 24,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -24,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className='grid gap-10 p-10 lg:grid-cols-[1.08fr_0.92fr]'
        >
          {/* Left */}
          <ProjectModalImage image={project.image} title={project.title} />

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.06,
              duration: 0.3,
              ease: 'easeOut',
            }}
            className='flex flex-col h-full text-left min-w-0 lg:max-h-[540px] lg:overflow-y-auto no-scrollbar pr-1'
          >
            {/* Tagline context */}
            {project.featured && (
              <span className='block text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 select-none leading-none pb-1'>
                Featured Showcase Project
              </span>
            )}

            {/* Header landmark */}
            <h2
              id='project-modal-title'
              className='mt-2.5 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl'
            >
              {project.title}
            </h2>
            {/* Description */}
            <p className='mt-4 text-sm leading-relaxed text-neutral-400 font-medium whitespace-pre-line break-words max-w-xl sm:text-base sm:leading-relaxed'>
              {project.description}
            </p>
            {/* Tech */}
            <div className='mt-6 shrink-0'>
              <TechList technologies={project.technologies} />
            </div>
            {/* Production live */}
            <div className='mt-2 shrink-0'>
              <ProjectLinks demo={project.demo} github={project.github} />
            </div>

            {/* Bottom pagination */}
            <div className='mt-8 lg:mt-auto pt-6 border-t border-white/[0.03] shrink-0 w-full'>
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

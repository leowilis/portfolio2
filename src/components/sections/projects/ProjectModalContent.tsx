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
    <>
      <WindowHeader title={project.title} />
      <AnimatePresence mode='wait'>
        <motion.div
          key={project.id}
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -50,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className='grid items-start gap-10 p-10 lg:grid-cols-[1.15fr_.85fr]'
        >
          {/* Image */}
          <ProjectModalImage image={project.image} title={project.title} />

          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.35,
            }}
            className='flex flex-col justify-center'
          >
            {project.featured && (
              <p className='mb-2 text-xs font-semibold uppercase tracking-[4px] text-violet-400'>
                Featured Project
              </p>
            )}
            <h2
              id='project-modal-title'
              className='text-3xl font-bold text-white'
            >
              {project.title}
            </h2>
            <p className='mt-5 leading-8 text-white/55'>
              {project.description}
            </p>
            <TechList technologies={project.technologies} />
            <ProjectLinks demo={project.demo} github={project.github} />
            <ProjectModalNavigation
              onNext={onNext}
              onPrevious={onPrevious}
              hasNext={hasNext}
              hasPrevious={hasPrevious}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

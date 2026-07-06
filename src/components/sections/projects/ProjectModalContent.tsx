import { motion } from 'framer-motion';
import Image from 'next/image';

import WindowHeader from './WindowHeader';
import TechList from './TechList';
import ProjectLinks from './ProjectLinks';
import type { Project } from './project.type';
import ProjectModalImage from './ProjectModalImage';
import ProjectModalNavigation from './ProjectModalNavigation';

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

      <motion.div
        key={project.id}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.3 }}
        className='grid gap-8 lg:grid-cols-2'
      >
        {/* Image */}
        <ProjectModalImage image={project.image} title={project.title} />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.35 }}
          className='flex flex-col justify-center'
        >
          {project.featured && (
            <p className='mb-2 text-xs font-semibold uppercase tracking-[4px] text-violet-400'>
              Featured Project
            </p>
          )}

          <h2 className='text-3xl font-bold text-white'>{project.title}</h2>

          <p className='mt-5 leading-8 text-white/55'>{project.description}</p>

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
    </>
  );
}

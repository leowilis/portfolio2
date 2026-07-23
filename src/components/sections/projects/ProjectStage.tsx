'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { PROJECTS } from './project.data';
import { DRAG_LIMIT, STAGE_PERSPECTIVE } from './project.constants';
import { getProjectLayout } from './project.layout';
import { Project } from './project.type';
import ProjectPlane from './ProjectPlane';
import useProjectCarousel from './useProjectCarousel';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

type Props = ReturnType<typeof useProjectCarousel> & {
  onProjectOpen: (project: Project) => void;
  nextProject: () => void;
  previousProject: () => void;
};

export default function ProjectStage({
  activeIndex,
  setActiveIndex,
  rotateX,
  rotateY,
  cameraZ,
  handleDrag,
  handleDragEnd,
  onProjectOpen,
  nextProject,
  previousProject,
}: Props) {
  const handleCardClick = (index: number, project: Project) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      return;
    }
    onProjectOpen(project);
  };

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') {
        nextProject();
      }
      if (event.key === 'ArrowLeft') {
        previousProject();
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [nextProject, previousProject]);

  return (
    <motion.div
      drag='x'
      dragConstraints={{
        left: -DRAG_LIMIT,
        right: DRAG_LIMIT,
      }}
      dragElastic={0.08}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      className='absolute inset-0 min-h-[720px] cursor-grab active:cursor-grabbing select-none'
      style={{
        perspective: `${STAGE_PERSPECTIVE}px`,
        perspectiveOrigin: '50% 50%',
        touchAction: 'pan-y',
      }}
    >
      <motion.div
        className='relative h-full w-full'
        style={{
          rotateX,
          rotateY,
          translateZ: cameraZ,
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          backfaceVisibility: 'hidden',
        }}
      >
        {PROJECTS.map((project, index) => {
          const layout = getProjectLayout({
            index,
            activeIndex,
            total: PROJECTS.length,
          });

          return (
            <ProjectPlane
              key={project.id}
              project={project}
              layout={layout}
              index={index}
              onClick={() => handleCardClick(index, project)}
            />
          );
        })}
      </motion.div>

      {/* Bottom Fade */}
      <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent' />

      {/* Previous button */}
      <button
        onClick={previousProject}
        className='absolute left-6 top-1/2 z-50 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-violet-500/40 hover:bg-violet-500/10'
      >
        <IoChevronBack size={24} />
      </button>

      {/* Next button */}
      <button
        onClick={nextProject}
        className='absolute right-6 top-1/2 z-50 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-violet-500/40 hover:bg-violet-500/10'
      >
        <IoChevronForward size={24} />
      </button>
    </motion.div>
  );
}

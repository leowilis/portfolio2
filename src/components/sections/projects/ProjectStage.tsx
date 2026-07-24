'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { PROJECTS } from './project.data';
import { DRAG_LIMIT, STAGE_PERSPECTIVE } from './project.constants';
import { getProjectLayout } from './project.layout';
import { Project } from './project.type';
import ProjectPlane from './ProjectPlane';
import useProjectCarousel from './useProjectCarousel';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

type Props = ReturnType<typeof useProjectCarousel> & {
  onProjectOpen: (project: Project) => void;
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
  isDragging,
}: Props) {
  const handleCardClick = (index: number, project: Project) => {
    if (isDragging) return;

    if (index !== activeIndex) {
      setActiveIndex(index);
      return;
    }

    onProjectOpen(project);
  };

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
      className='relative inset-0 h-[720px] w-full select-none'
      style={{
        perspective: `${STAGE_PERSPECTIVE}px`,
        perspectiveOrigin: '50% 50%',
        touchAction: 'pan-y',
      }}
    >
      <motion.div
        className='relative z-10 h-full w-full'
        style={{
          rotateX,
          rotateY,
          translateZ: cameraZ,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Floor light */}
        <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden'>
          {/* Main purple floor */}
          <div className='absolute left-1/2 top-[540px] h-[180px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.42)_0%,rgba(139,92,246,0.18)_28%,rgba(139,92,246,0.08)_48%,transparent_72%)]' />

          {/* Middle glow */}
          <div className='absolute left-1/2 top-[586px] h-[20px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.34)_0%,rgba(139,92,246,0.12)_55%,transparent_100%)]' />

          {/* Bright center strip */}
          <div className='absolute left-1/2 top-[600px] h-[8px] w-[480px] -translate-x-1/2 rounded-full bg-violet-400/80 blur-2xl' />

          {/* Soft bloom */}
          <div className='absolute left-1/2 top-[600px] h-[30px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-xl' />
        </div>
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

      {/* Previous button */}
      <AnimatePresence mode='wait'>
        {!isDragging && (
          <>
            <motion.button
              key='previous'
              type='button'
              aria-label='Previous project'
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              onClick={previousProject}
              className='absolute left-[3%] top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-violet-500/40 hover:bg-violet-500/10 active:scale-95'
            >
              <IoChevronBack size={24} aria-hidden='true' />
            </motion.button>

            <motion.button
              key='next'
              type='button'
              aria-label='Next project'
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              onClick={nextProject}
              className='absolute right-[3%] top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-violet-500/40 hover:bg-violet-500/10 active:scale-95'
            >
              <IoChevronForward size={24} aria-hidden='true' />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

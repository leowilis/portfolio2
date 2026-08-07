'use client';

import { motion } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { PROJECTS } from './project.data';
import {
  DRAG_LIMIT,
  PROJECT_CHEVRON_ICON,
  PROJECT_FLOOR_BLOOM_HEIGHT,
  PROJECT_FLOOR_BLOOM_TOP,
  PROJECT_FLOOR_BLOOM_WIDTH,
  PROJECT_FLOOR_HEIGHT,
  PROJECT_FLOOR_MIDDLE_HEIGHT,
  PROJECT_FLOOR_MIDDLE_TOP,
  PROJECT_FLOOR_MIDDLE_WIDTH,
  PROJECT_FLOOR_STRIP_HEIGHT,
  PROJECT_FLOOR_STRIP_TOP,
  PROJECT_FLOOR_STRIP_WIDTH,
  PROJECT_FLOOR_TOP,
  PROJECT_FLOOR_WIDTH,
  PROJECT_STAGE_DRAG_ELASTIC,
  PROJECT_STAGE_HEIGHT,
  STAGE_PERSPECTIVE,
} from './project.constants';
import { getProjectLayout } from './project.layout';
import type { Project } from './project.type';
import ProjectPlane from './ProjectPlane';
import useProjectCarousel from './useProjectCarousel';

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
      dragElastic={PROJECT_STAGE_DRAG_ELASTIC}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      className='relative w-full select-none'
      style={{
        height: PROJECT_STAGE_HEIGHT,
        perspective: STAGE_PERSPECTIVE,
        perspectiveOrigin: '50% 50%',
        touchAction: 'pan-y',
      }}
    >
      {/* 3D Scene */}
      <motion.div
        className='relative z-10 h-full w-full'
        style={{
          rotateX,
          rotateY,
          z: cameraZ,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Floor Light */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 z-0 overflow-hidden'
        >
          {/* Main purple floor */}
          <div
            className='absolute left-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.42)_0%,rgba(139,92,246,0.18)_28%,rgba(139,92,246,0.08)_48%,transparent_72%)]'
            style={{
              top: PROJECT_FLOOR_TOP,
              width: PROJECT_FLOOR_WIDTH,
              height: PROJECT_FLOOR_HEIGHT,
            }}
          />

          {/* Middle glow */}
          <div
            className='absolute left-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.34)_0%,rgba(139,92,246,0.12)_55%,transparent_100%)]'
            style={{
              top: PROJECT_FLOOR_MIDDLE_TOP,
              width: PROJECT_FLOOR_MIDDLE_WIDTH,
              height: PROJECT_FLOOR_MIDDLE_HEIGHT,
            }}
          />

          {/* Bright center strip */}
          <div
            className='absolute left-1/2 -translate-x-1/2 rounded-full bg-violet-400/80 blur-2xl'
            style={{
              top: PROJECT_FLOOR_STRIP_TOP,
              width: PROJECT_FLOOR_STRIP_WIDTH,
              height: PROJECT_FLOOR_STRIP_HEIGHT,
            }}
          />

          {/* Soft bloom */}
          <div
            className='absolute left-1/2 -translate-x-1/2 rounded-full bg-violet-500/25 blur-xl'
            style={{
              top: PROJECT_FLOOR_BLOOM_TOP,
              width: PROJECT_FLOOR_BLOOM_WIDTH,
              height: PROJECT_FLOOR_BLOOM_HEIGHT,
            }}
          />
        </div>

        {/* Project Cards */}
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

      {/* Navigation */}
      <div
        className='pointer-events-none absolute inset-0 z-50 transition-opacity duration-200'
        style={{
          opacity: isDragging ? 0 : 1,
        }}
      >
        {/* Previous */}
        <button
          type='button'
          aria-label='Previous project'
          onClick={previousProject}
          className='pointer-events-auto absolute left-[3%] top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-violet-500/40 hover:bg-violet-500/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60'
        >
          <IoChevronBack size={PROJECT_CHEVRON_ICON} aria-hidden='true' />
        </button>

        {/* Next */}
        <button
          type='button'
          aria-label='Next project'
          onClick={nextProject}
          className='pointer-events-auto absolute right-[3%] top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-violet-500/40 hover:bg-violet-500/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60'
        >
          <IoChevronForward size={PROJECT_CHEVRON_ICON} aria-hidden='true' />
        </button>
      </div>
    </motion.div>
  );
}

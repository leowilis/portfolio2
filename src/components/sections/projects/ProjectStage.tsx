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
  TABLET_FLOOR_BLOOM_HEIGHT,
  TABLET_FLOOR_BLOOM_TOP,
  TABLET_FLOOR_BLOOM_WIDTH,
  TABLET_FLOOR_HEIGHT,
  TABLET_FLOOR_MIDDLE_HEIGHT,
  TABLET_FLOOR_MIDDLE_TOP,
  TABLET_FLOOR_MIDDLE_WIDTH,
  TABLET_FLOOR_STRIP_HEIGHT,
  TABLET_FLOOR_STRIP_TOP,
  TABLET_FLOOR_STRIP_WIDTH,
  TABLET_FLOOR_TOP,
  TABLET_FLOOR_WIDTH,
  TABLET_STAGE_HEIGHT,
  TABLET_STAGE_PERSPECTIVE,
  TABLET_PLANE_SCALE,
} from './project.constants';
import { getProjectLayout } from './project.layout';
import type { Project } from './project.type';
import ProjectPlane from './ProjectPlane';
import useIsTablet from './useIsTablet';
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
  handleDragStart,
  handleDrag,
  handleDragEnd,
  onProjectOpen,
  nextProject,
  previousProject,
  isDragging,
}: Props) {
  const isTablet = useIsTablet();
  const stageHeight = isTablet ? TABLET_STAGE_HEIGHT : PROJECT_STAGE_HEIGHT;
  const stagePerspective = isTablet
    ? TABLET_STAGE_PERSPECTIVE
    : STAGE_PERSPECTIVE;
  const planeScale = isTablet ? TABLET_PLANE_SCALE : 1;

  const floor = {
    top: isTablet ? TABLET_FLOOR_TOP : PROJECT_FLOOR_TOP,
    width: isTablet ? TABLET_FLOOR_WIDTH : PROJECT_FLOOR_WIDTH,
    height: isTablet ? TABLET_FLOOR_HEIGHT : PROJECT_FLOOR_HEIGHT,
    middleTop: isTablet ? TABLET_FLOOR_MIDDLE_TOP : PROJECT_FLOOR_MIDDLE_TOP,
    middleWidth: isTablet
      ? TABLET_FLOOR_MIDDLE_WIDTH
      : PROJECT_FLOOR_MIDDLE_WIDTH,
    middleHeight: isTablet
      ? TABLET_FLOOR_MIDDLE_HEIGHT
      : PROJECT_FLOOR_MIDDLE_HEIGHT,
    stripTop: isTablet ? TABLET_FLOOR_STRIP_TOP : PROJECT_FLOOR_STRIP_TOP,
    stripWidth: isTablet ? TABLET_FLOOR_STRIP_WIDTH : PROJECT_FLOOR_STRIP_WIDTH,
    stripHeight: isTablet
      ? TABLET_FLOOR_STRIP_HEIGHT
      : PROJECT_FLOOR_STRIP_HEIGHT,
    bloomTop: isTablet ? TABLET_FLOOR_BLOOM_TOP : PROJECT_FLOOR_BLOOM_TOP,
    bloomWidth: isTablet ? TABLET_FLOOR_BLOOM_WIDTH : PROJECT_FLOOR_BLOOM_WIDTH,
    bloomHeight: isTablet
      ? TABLET_FLOOR_BLOOM_HEIGHT
      : PROJECT_FLOOR_BLOOM_HEIGHT,
  };

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
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      className='relative w-full select-none'
      style={{
        height: stageHeight,
        perspective: stagePerspective,
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
          scale: planeScale,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Ambient Floor Light */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 z-0 overflow-visible'
        >
          {/* Main ambient glow */}
          <div
            className='pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full'
            style={{
              top: floor.top,
              width: floor.width,
              height: floor.height,
              background:
                'radial-gradient(ellipse at center, rgba(139,92,246,0.24) 0%, rgba(139,92,246,0.12) 28%, rgba(139,92,246,0.04) 52%, transparent 74%)',
              filter: 'blur(28px)',
            }}
          />

          {/* Focused center glow */}
          <div
            className='pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full'
            style={{
              top: floor.middleTop,
              width: floor.middleWidth,
              height: floor.middleHeight,
              background:
                'radial-gradient(ellipse at center, rgba(167,139,250,0.26) 0%, rgba(139,92,246,0.10) 42%, transparent 78%)',
              filter: 'blur(16px)',
            }}
          />

          {/* Thin light core */}
          <div
            className='pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full'
            style={{
              top: floor.stripTop,
              width: floor.stripWidth,
              height: floor.stripHeight,
              background:
                'radial-gradient(ellipse at center, rgba(167,139,250,0.30) 0%, rgba(139,92,246,0.12) 42%, transparent 78%)',
              filter: 'blur(8px)',
            }}
          />

          {/* Soft bloom */}
          <div
            className='pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full'
            style={{
              top: floor.bloomTop,
              width: floor.bloomWidth,
              height: floor.bloomHeight,
              background:
                'radial-gradient(ellipse at center, rgba(139,92,246,0.14) 0%, rgba(139,92,246,0.05) 38%, transparent 76%)',
              filter: 'blur(24px)',
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

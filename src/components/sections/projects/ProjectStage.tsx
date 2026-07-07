'use client';

import { motion } from 'framer-motion';

import ProjectPlane from './ProjectPlane';
import { PROJECTS } from './project.data';
import { DRAG_LIMIT, STAGE_PERSPECTIVE } from './project.constants';
import useProjectCarousel from './useProjectCarousel';
import { getProjectLayout } from './project.layout';
import { Project } from './project.type';

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
}: Props) {
  const handleCardClick = (index: number, project: Project) => {
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

      {/* Left Fade */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent' />

      {/* Right Fade */}
      <div className='pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent' />

      {/* Bottom Fade */}
      <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent' />
    </motion.div>
  );
}

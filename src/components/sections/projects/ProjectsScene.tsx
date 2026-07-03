'use client';

import { PROJECTS } from './project.data';
import ProjectCard from './ProjectCard';

export default function ProjectsScene() {
  return (
    <div
      className='
        relative
        mx-auto
        mt-12
        flex
        flex-col
        gap-8
        h-auto
        w-full
        md:mt-20
        md:block
        md:h-[850px]
        md:perspective-[2200px]
      '
    >
      {PROJECTS.map((project, index) => (
        <div
          key={project.id}
          className='w-full md:absolute md:left-1/2 md:top-1/2'
          style={{
            /* Wrapped in a JS helper window check or standard media utility */
            transform:
              typeof window !== 'undefined' && window.innerWidth >= 768
                ? `
              translate(-50%, -50%)
              translateY(${index * 120}px)
              translateZ(${-index * 180}px)
              rotateX(10deg)
            `
                : undefined,
          }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

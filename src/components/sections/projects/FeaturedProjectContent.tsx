import type { Project } from './project.type';

import ProjectLinks from './ProjectLinks';
import TechList from './TechList';

interface FeaturedProjectContentProps {
  project: Project;
}

export default function FeaturedProjectContent({
  project,
}: FeaturedProjectContentProps) {
  return (
    <figcaption className='absolute inset-x-0 bottom-0 select-none bg-gradient-to-t from-black via-black/90 to-transparent p-6 pt-24 sm:p-8 sm:pt-24'>
      {project.featured && (
        <p className='mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-violet-400'>
          Featured Project
        </p>
      )}

      <h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>
        {project.title}
      </h3>

      <p className='mt-2.5 line-clamp-3 max-w-xl text-sm leading-relaxed text-white/60 md:text-base'>
        {project.description}
      </p>

      <div className='mt-5 flex flex-col gap-4'>
        <TechList technologies={project.technologies} />

        <div className='border-t border-white/5 pt-2'>
          <ProjectLinks demo={project.demo} github={project.github} />
        </div>
      </div>
    </figcaption>
  );
}

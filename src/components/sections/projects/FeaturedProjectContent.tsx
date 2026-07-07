import type { Project } from './project.type';

import TechList from './TechList';
import ProjectLinks from './ProjectLinks';

interface Props {
  project: Project;
}

export default function FeaturedProjectContent({ project }: Props) {
  return (
    <div className='absolute bottom-0 w-full p-7'>
      {project.featured && (
        <p className='mb-1.5 text-[10px] font-semibold uppercase tracking-[4px] text-violet-400'>
          Featured Project
        </p>
      )}
      <h2 className='text-2xl font-semibold tracking-tight text-white'>
        {project.title}
      </h2>
      <p className='mt-2 max-w-md text-sm leading-relaxed text-white/45'>
        {project.description}
      </p>
      <TechList technologies={project.technologies} />
      <ProjectLinks demo={project.demo} github={project.github} />
    </div>
  );
}

import { PROJECTS } from '@/src/config/projects.config';

import ProjectCard from './ProjectCard';
import ProjectsHeader from './ProjectsHeader';

export default function ProjectsSection() {
  const featuredProject = PROJECTS.find((project) => project.featured);
  const supportingProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className='relative overflow-hidden py-20 sm:py-24 lg:py-32'
    >
      <div className='mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10'>
        <ProjectsHeader />

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {featuredProject ? (
            <ProjectCard project={featuredProject} featured />
          ) : null}

          {supportingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

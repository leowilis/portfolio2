import { PROJECTS } from './project.data';
import ProjectCard from './ProjectCard';

export default function ProjectsScene() {
  return (
    <div
      className='mt-20 grid gap-12 md:grid-cols-2'
      style={{
        perspective: '2000px',
      }}
    >
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

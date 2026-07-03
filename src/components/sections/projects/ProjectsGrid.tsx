import { PROJECTS } from './project.data';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}
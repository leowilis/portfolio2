import { StaggerContainer } from '@/src/animations';
import ProjectsGrid from './ProjectsGrid';
import ProjectsHeader from './ProjectsHeader';
import ProjectsScene from './ProjectsScene';

export default function ProjectsSection() {
  return (
    <section id='projects' className='relative mx-auto max-w-7xl px-6 py-32'>
      <StaggerContainer>
        <ProjectsHeader />
        <ProjectsGrid />
        <ProjectsScene />
      </StaggerContainer>
    </section>
  );
}

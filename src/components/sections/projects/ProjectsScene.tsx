'use client';

import { PROJECTS } from './project.data';
import { PROJECT_STAGE_MAX_WIDTH } from './project.constants';
import ProjectStage from './ProjectStage';
import ProjectModal from './ProjectModal';
import useProjectCarousel from './useProjectCarousel';
import { useEffect, useState } from 'react';
import { Project } from './project.type';

export default function ProjectsScene() {
  const carousel = useProjectCarousel({
    total: PROJECTS.length,
  });

  const openProject = (project: Project) => {
    setSelectedProject(project);
    carousel.setActiveIndex(
      PROJECTS.findIndex((item) => item.id === project.id),
    );
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        const currentIndex = PROJECTS.findIndex(
          (project) => project.id === selectedProject.id,
        );

        if (currentIndex < PROJECTS.length - 1) {
          setSelectedProject(PROJECTS[currentIndex + 1]);
        }
      }

      if (event.key === 'ArrowLeft') {
        const currentIndex = PROJECTS.findIndex(
          (project) => project.id === selectedProject.id,
        );

        if (currentIndex > 0) {
          setSelectedProject(PROJECTS[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const handleNext = () => {
    if (!selectedProject) return;

    const currentIndex = PROJECTS.findIndex(
      (project) => project.id === selectedProject.id,
    );

    const nextIndex = (currentIndex + 1) % PROJECTS.length;

    carousel.setActiveIndex(nextIndex);
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedProject) return;

    const currentIndex = PROJECTS.findIndex(
      (project) => project.id === selectedProject.id,
    );

    const previousIndex =
      (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;

    carousel.setActiveIndex(previousIndex);
    setSelectedProject(PROJECTS[previousIndex]);
  };

  return (
    <section className='relative overflow-hidden min-h-[760px]'>
      <div
        className='mx-auto px-6'
        style={{
          maxWidth: PROJECT_STAGE_MAX_WIDTH,
        }}
      >
        <ProjectStage {...carousel} onProjectOpen={openProject} />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext
          hasPrevious
        />
      </div>
    </section>
  );
}

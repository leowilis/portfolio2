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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const currentIndex = selectedProject
    ? PROJECTS.findIndex((project) => project.id === selectedProject.id)
    : -1;

  const openPreviousProject = () => {
    if (currentIndex <= 0) return;

    setSelectedProject(PROJECTS[currentIndex - 1]);
  };
  const openNextProject = () => {
    if (currentIndex >= PROJECTS.length - 1) return;

    setSelectedProject(PROJECTS[currentIndex + 1]);
  };

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

  return () =>
    window.removeEventListener('keydown', handleKeyDown);
}, [selectedProject]);

  return (
    <section className='relative overflow-hidden min-h-[760px]'>
      <div
        className='mx-auto px-6'
        style={{
          maxWidth: PROJECT_STAGE_MAX_WIDTH,
        }}
      >
        <ProjectStage {...carousel} onProjectOpen={setSelectedProject} />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={openNextProject}
          onPrevious={openPreviousProject}
          hasNext={currentIndex < PROJECTS.length - 1}
          hasPrevious={currentIndex > 0}
        />
      </div>
    </section>
  );
}

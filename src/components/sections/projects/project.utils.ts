import type { Project } from './project.type';

export function getProjectUrl(project: Project) {
  if (project.demo !== '#') {
    return project.demo.replace('https://', '');
  }

  return `${project.title.toLowerCase().replace(/\s+/g, '-')}.vercel.app`;
}

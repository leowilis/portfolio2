export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export interface ProjectLayout {
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  scale: number;
  opacity: number;
  blur: number;
  isCenter: boolean;
  zIndex: number;
}

export interface ProjectPlaneProps {
  project: Project;
  layout: ProjectLayout;
  index: number;
  onClick?: () => void;
}

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Movie App',
    description:
      'Modern movie discovery platform with responsive UI and smooth animations.',
    image: '/projects/movie-app.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'Redux',
      'Tailwind',
    ],
    github: '#',
    demo: '#',
    featured: true,
  },

  {
    id: 2,
    title: 'E-Commerce',
    description:
      'Complete shopping experience with authentication and cart management.',
    image: '/projects/ecommerce.png',
    technologies: [
      'React',
      'TypeScript',
      'Firebase',
      'Tailwind',
    ],
    github: '#',
    demo: '#',
  },

  {
    id: 3,
    title: 'Dashboard',
    description:
      'Analytics dashboard with reusable components and responsive charts.',
    image: '/projects/dashboard.png',
    technologies: [
      'Next.js',
      'Redux',
      'Chart.js',
    ],
    github: '#',
    demo: '#',
  },
];
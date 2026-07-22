import type { Project } from './project.type';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Movie App',
    description:
      'Movie discovery platform with search, detailed information, and a responsive user interface.',

    image: '/movie-app.webp',

    technologies: [
      'React',
      'TanStack Query',
      'React Router',
      'TypeScript',
      'Redux',
      'Tailwind',
      'Framer Motion',
      'Sonner',
    ],

    demo: 'https://movie-app-seven-wheat.vercel.app/',
    github: 'https://github.com/leowilis/Movie-app.git',

    featured: true,
  },

  {
    id: 2,
    title: 'Foody App',
    description:
      'Food ordering platform with authentication, search, favorites, cart management, and a responsive user interface.',

    image: '/foody-app.webp',
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Tailwind',
      'TanStack Query',
    ],

    demo: 'https://foody-app-mu.vercel.app/',
    github: 'https://github.com/leowilis/foody-app.git',
  },

  {
    id: 3,
    title: 'Library App',
    description:
      'Digital library application with book discovery, search functionality, and intuitive navigation.',

    image: '/library.webp',
    technologies: [
      'Next.js',
      'Redux',
      'TypeScript',
      'Tailwind',
      'TanStack Query',
    ],

    demo: 'https://library-app-indol-nu.vercel.app/',
    github: 'https://github.com/leowilis/library-app.git',
  },
];

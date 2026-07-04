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
      'Movie discovery platform with search, detailed information, and a responsive user interface.',
    image: '/projects/movie-app.png',
    technologies: [
      'React',
      'React Query',
      'React Router',
      'TypeScript',
      'Redux',
      'Tailwind',
      'Framer Motion',
      'Sonner',
    ],
    github: 'https://github.com/leowilis/Movie-app.git',
    demo: 'https://movie-app-seven-wheat.vercel.app/',
    featured: true,
  },

  {
    id: 2,
    title: 'Foody App',
    description:
      'Food ordering platform with authentication, search, favorites, cart management, and a responsive user interface.',
    image: '/projects/ecommerce.png',
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Tailwind',
      'TanStack Query',
    ],
    github: 'https://github.com/leowilis/foody-app.git',
    demo: 'https://foody-app-mu.vercel.app/',
  },

  {
    id: 3,
    title: 'Library App',
    description:
      'Digital library application with book discovery, search functionality, and intuitive navigation.',
    image: '/projects/dashboard.png',
    technologies: [
      'Next.js',
      'Redux',
      'TypeScript',
      'Tailwind',
      'TanStack Query',
    ],
    github: 'https://github.com/leowilis/library-app.git',
    demo: 'https://library-app-indol-nu.vercel.app/',
  },
];

export interface EducationItem {
  id: string;
  type: string;
  title: string;
  institution: string;
  description: string;
  period: string;
  category: string;
  certificateUrl?: string;
  skills: string[];
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'front-end-developer-hack',
    type: 'Certificate of Graduation',
    title: 'Front-End Developer Web Programming Hack',
    institution: 'Hacktiv8',
    description:
      'Completed and graduated from a Front-End Developer Web Programming Hack program focused on building modern frontend web applications through structured learning and hands-on development.',
    period: '2026',
    category: 'Front-End Developer',
    certificateUrl: '/certificates/leonardo-wilis-FE.pdf',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Shadcn UI',
      'Redux Toolkit',
      'TanStack Query',
      'Zod',
      'Zustand',
      'Framer Motion',
      'Git / GitHub',
    ],
  },
] as const;

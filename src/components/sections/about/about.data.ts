export type DetailItem = {
  label: string;
  value: string;
  isHighlight?: boolean;
};

export type StatsItem = {
  value: number;
  suffix?: string;
  label: string;
};

export const STATS = [
  {
    value: 5,
    suffix: '+',
    label: 'Projects',
  },
  {
    value: 1,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Commitment',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Learning',
  },
];

export const DETAILS = [
  {
    label: 'Location',
    value: 'Medan, Indonesia',
    isHighlight: false,
  },
  {
    label: 'Availability',
    value: 'Open to Work',
    isHighlight: true,
  },
  {
    label: 'Type',
    value: 'Remote',
    isHighlight: false,
  },
  {
    label: 'Focus',
    value: 'Frontend Development',
    isHighlight: false,
  },
  {
    label: 'Education',
    value: 'Bootcamp Graduate',
    isHighlight: false,
  },
] as const satisfies readonly DetailItem[];

export const TECHS = [
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
  'Zustand',
  'Zod',
  'Framer Motion',
  'Git/GitHub',
] as const;

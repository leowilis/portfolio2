export type StatItem = {
  value: string;
  label: string;
};

export type DetailItem = {
  label: string;
  value: string;
  isHighlight?: boolean;
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

export const DETAILS: DetailItem[] = [
  { label: 'Location', value: 'Medan, Indonesia' },
  { label: 'Availability', value: 'Open to Work', isHighlight: true },
  { label: 'Type', value: 'Remote' },
  { label: 'Focus', value: 'Frontend Development' },
  { label: 'Education', value: 'Bootcamp Graduate' },
];

export const TECHS = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Redux Toolkit',
  'TanStack Query',
  'shadcn/ui',
  'Framer Motion',
] as const;

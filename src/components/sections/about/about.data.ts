export type StatItem = {
  value: string;
  label: string;
};

export type DetailItem = {
  label: string;
  value: string;
  isHighlight?: boolean;
};

export const STATS: StatItem[] = [
  { value: '1+', label: 'Years' },
  { value: '5+', label: 'Projects' },
  { value: '11+', label: 'Tech Stack' },
  { value: '100%', label: 'Dedicated' },
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

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
    value: 14,
    suffix: '+',
    label: 'Technologies',
  },
  {
    value: 3,
    suffix: '',
    label: 'Core Focus Areas',
  },
] as const satisfies readonly StatsItem[];

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

export const ABOUT_BIO = [
  {
    id: 'intro',
    before: "I'm a frontend developer based in",
    highlight: 'Medan, Indonesia',
    after:
      ', focused on building modern, performant web applications with clean and maintainable code.',
  },
  {
    id: 'philosophy',
    content:
      "I don't just write code — I craft experiences. Every detail matters: smooth animations, intuitive interfaces, and interactions that feel effortless to use.",
  },
  {
    id: 'availability',
    before: 'Currently open to',
    highlight: 'full-time or remote opportunities',
    after:
      ' where I can contribute, grow, and build products that people genuinely enjoy using.',
  },
] as const;

export const ABOUT_FOCUS = [
  {
    number: '01',
    title: 'Performance',
    description:
      'Building fast, responsive interfaces with modern web standards and thoughtful rendering strategies.',
  },
  {
    number: '02',
    title: 'Clean Architecture',
    description:
      'Writing reusable components and maintainable frontend architecture that stays easy to scale.',
  },
  {
    number: '03',
    title: 'User Experience',
    description:
      'Creating intuitive interfaces with purposeful interactions, smooth motion, and attention to detail.',
  },
] as const;

export const ABOUT_WHAT_I_BRING = [
  {
    number: '01',
    title: 'Scalable Frontends',
    description:
      'Component-driven architecture designed to stay maintainable as products grow.',
  },
  {
    number: '02',
    title: 'High-Quality UI',
    description:
      'Responsive interfaces with thoughtful interactions and attention to visual detail.',
  },
  {
    number: '03',
    title: 'Performance Mindset',
    description:
      'Fast, efficient experiences without sacrificing usability or visual quality.',
  },
] as const;

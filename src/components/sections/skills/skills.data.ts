import {
  SiCss,
  SiFramer,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si';
import { TbBox } from 'react-icons/tb';
import type { IconType } from 'react-icons';

export type SkillItem = {
  id: string;
  name: string;
  category: string;
  icon: IconType;
};

export const SKILLS: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML5',
    category: 'Markup',
    icon: SiHtml5,
  },
  {
    id: 'css',
    name: 'CSS3',
    category: 'Styling',
    icon: SiCss,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming',
    icon: SiJavascript,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming',
    icon: SiTypescript,
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    icon: SiReact,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Framework',
    icon: SiNextdotjs,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: SiTailwindcss,
  },
  {
    id: 'shadcn',
    name: 'shadcn/ui',
    category: 'UI Library',
    icon: SiShadcnui,
  },
  {
    id: 'redux',
    name: 'Redux Toolkit',
    category: 'State Management',
    icon: SiRedux,
  },
  {
    id: 'tanstack-query',
    name: 'TanStack Query',
    category: 'Server State',
    icon: SiReactquery,
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Version Control',
    icon: SiGit,
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Collaboration',
    icon: SiGithub,
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'Animation',
    icon: SiFramer,
  },
  {
    id: 'zod',
    name: 'Zod',
    category: 'Validation',
    icon: SiZod,
  },
  {
    id: 'zustand',
    name: 'Zustand',
    category: 'State Management',
    icon: TbBox,
  },
];

import type { IconType } from 'react-icons';

export type TechItem = {
  id: string;
  system: string;
  name: string;
  category: string;
  icon: IconType;
  level: number;
};

export type AboutPrinciple = {
  number: string;
  title: string;
  description: string;
};

export type AboutBioItem =
  | {
      id: string;
      content: string;
      before?: never;
      highlight?: never;
      after?: never;
    }
  | {
      id: string;
      before: string;
      highlight: string;
      after: string;
      content?: never;
    };

export const ABOUT_BIO = [
  {
    id: 'intro',
    content:
      "I'm a frontend developer focused on building interfaces that are clear to use, reliable in real-world use, and maintainable as the product grows.",
  },
  {
    id: 'approach',
    content:
      'I pay attention to the details behind the interface: component boundaries, data flow, responsive behavior, loading and error states, and the small interactions that make a product feel considered.',
  },
  {
    id: 'growth',
    before: 'I am currently looking for',
    highlight: 'frontend opportunities',
    after:
      ' where I can contribute to real products, learn from experienced engineers, and continue improving through practical work.',
  },
] as const satisfies readonly AboutBioItem[];

export const ABOUT_PRINCIPLES = [
  {
    number: '01',
    title: 'Build with clarity',
    description:
      'I prefer clear component responsibilities, predictable data flow, and code that is easy for another developer to understand.',
  },
  {
    number: '02',
    title: 'Think in product flows',
    description:
      'I consider the complete experience beyond the happy path, including loading, empty, error, responsive, and interaction states.',
  },
  {
    number: '03',
    title: 'Keep complexity intentional',
    description:
      'I start with the simplest solution that fits the problem and introduce abstraction when the product actually benefits from it.',
  },
] as const satisfies readonly AboutPrinciple[];

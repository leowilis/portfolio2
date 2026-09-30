export type FocusItem = {
  number: string;
  title: string;
  description: string;
};

export const FOCUS_ITEMS: FocusItem[] = [
  {
    number: '01',
    title: 'Product UI',
    description:
      'Designing interfaces around real product flows, including loading, empty, error, responsive, and interaction states.',
  },
  {
    number: '02',
    title: 'Frontend Architecture',
    description:
      'Keeping component ownership, data flow, and boundaries clear so the codebase remains predictable as features grow.',
  },
  {
    number: '03',
    title: 'Quality & Performance',
    description:
      'Paying attention to accessibility, resilient UI behavior, and performance without adding complexity that the product does not need.',
  },
];

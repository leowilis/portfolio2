export type DetailItem = {
  label: string;
  value: string;
  isHighlight?: boolean;
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
      "I don't just write code — I craft experiences. Every detail matters: intuitive interfaces and interactions that feel effortless to use.",
  },
  {
    id: 'availability',
    before: 'Currently open to',
    highlight: 'full-time or remote opportunities',
    after:
      ' where I can contribute, grow, and build products that people genuinely enjoy using.',
  },
] as const satisfies readonly AboutBioItem[];

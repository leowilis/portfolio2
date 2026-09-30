export const HERO_VISUAL = {
  objectId: '001',
  perspective: '900px',
  gridSize: 32,
} as const;

export const HERO_TECH_STACK = ['React', 'Next.js', 'TypeScript'] as const;

export const HERO_FOCUS = [
  'Component Architecture',
  'Performance',
  'User Experience',
] as const;

export const HERO_CODE = {
  fileName: 'developer.ts',
  systemLabel: 'Frontend System',
  statusLabel: 'System online',
  name: 'Leonardo Wilis',
  role: 'Frontend Developer',
  focus: 'quality',
} as const;

export const HERO_CODE_LINES = [
  {
    number: '01',
    tokens: [
      { value: 'const', className: 'text-primary' },
      { value: ' developer ', className: 'text-foreground' },
      { value: '=', className: 'text-foreground-muted' },
      { value: ' {', className: 'text-blue-300' },
    ],
  },
  {
    number: '02',
    tokens: [
      { value: 'name:', className: 'text-foreground-muted' },
      { value: ` '${HERO_CODE.name}'`, className: 'text-sky-300' },
      { value: ',', className: 'text-foreground-muted' },
    ],
  },
  {
    number: '03',
    tokens: [
      { value: 'role:', className: 'text-foreground-muted' },
      { value: ` '${HERO_CODE.role}'`, className: 'text-sky-300' },
      { value: ',', className: 'text-foreground-muted' },
    ],
  },
  {
    number: '04',
    tokens: [
      { value: 'stack:', className: 'text-foreground-muted' },
      { value: ' [', className: 'text-blue-300' },
    ],
  },
  {
    number: '05',
    tokens: [
      {
        value: `    '${HERO_TECH_STACK[0]}',`,
        className: 'text-foreground-muted',
      },
    ],
  },
  {
    number: '06',
    tokens: [
      {
        value: `    '${HERO_TECH_STACK[1]}',`,
        className: 'text-foreground-muted',
      },
    ],
  },
  {
    number: '07',
    tokens: [
      {
        value: `    '${HERO_TECH_STACK[2]}',`,
        className: 'text-foreground-muted',
      },
    ],
  },
  {
    number: '08',
    tokens: [
      { value: ']', className: 'text-blue-300' },
      { value: ',', className: 'text-foreground-muted' },
    ],
  },
  {
    number: '09',
    tokens: [
      { value: 'focus:', className: 'text-foreground-muted' },
      { value: ` '${HERO_CODE.focus}'`, className: 'text-sky-300' },
    ],
  },
  {
    number: '10',
    tokens: [{ value: '}', className: 'text-blue-300' }],
  },
] as const;

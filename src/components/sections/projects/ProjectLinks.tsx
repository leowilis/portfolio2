import { ExternalLink, Globe } from 'lucide-react';

interface ProjectLinksProps {
  demo: string;
  github: string;
}

const LINK_CLASS =
  'inline-flex items-center gap-2 rounded-[10px] border border-border bg-background-subtle px-4 py-2.5 text-xs font-medium text-foreground-secondary transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const LINKS = [
  {
    key: 'demo',
    label: 'Live Demo',
    icon: Globe,
  },
  {
    key: 'github',
    label: 'GitHub',
    icon: ExternalLink,
  },
] as const;

export default function ProjectLinks({ demo, github }: ProjectLinksProps) {
  const urls = {
    demo,
    github,
  };

  const availableLinks = LINKS.filter(({ key }) => {
    const href = urls[key];

    return Boolean(href && href !== '#');
  });

  if (availableLinks.length === 0) {
    return null;
  }

  return (
    <div className='mt-6 flex flex-wrap gap-2.5'>
      {availableLinks.map(({ key, label, icon: Icon }) => (
        <a
          key={key}
          href={urls[key]}
          target='_blank'
          rel='noopener noreferrer'
          className={LINK_CLASS}
        >
          <Icon size={14} className='shrink-0' aria-hidden='true' />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

import { ExternalLink, Globe } from 'lucide-react';

interface Props {
  demo: string;
  github: string;
}

const LINK_CLASS =
  'flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/50 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white';

export default function ProjectLinks({ demo, github }: Props) {
  const links = [
    {
      href: demo,
      label: 'Live Demo',
      icon: Globe,
    },
    {
      href: github,
      label: 'GitHub',
      icon: ExternalLink,
    },
  ];

  return (
    <div className='mt-4 flex flex-wrap gap-2.5'>
      {links
        .filter((link) => link.href !== '#')
        .map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => e.stopPropagation()}
              className={LINK_CLASS}
            >
              <Icon size={12} />
              {link.label}
            </a>
          );
        })}
    </div>
  );
}

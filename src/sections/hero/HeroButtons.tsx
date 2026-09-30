import { ArrowRight, Mail } from 'lucide-react';

const BUTTON_CLASS =
  'group inline-flex h-11 items-center justify-center gap-2 rounded-[10px] px-5 text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const ICON_CLASS =
  'shrink-0 transition-transform duration-200 group-hover:translate-x-0.5';

export default function HeroButtons() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3'>
      <a
        href='#projects'
        className={`${BUTTON_CLASS} bg-primary text-primary-foreground hover:bg-primary-hover`}
      >
        <span>View Projects</span>

        <ArrowRight size={16} className={ICON_CLASS} aria-hidden='true' />
      </a>

      <a
        href='#contact'
        className={`${BUTTON_CLASS} border border-border bg-surface text-foreground-secondary hover:border-border-strong hover:bg-surface-hover hover:text-foreground`}
      >
        <span>Contact Me</span>

        <Mail size={16} className={ICON_CLASS} aria-hidden='true' />
      </a>
    </div>
  );
}

import { ArrowRight, Mail } from 'lucide-react';
import { MOTION_DURATION } from '@/src/constants/animation.constants';

const BUTTON_CLASS =
  'group inline-flex h-11 items-center justify-center gap-2 rounded-[10px] px-5 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const ICON_STYLE = {
  transitionDuration: `${MOTION_DURATION.micro}s`,
};

export default function HeroButtons() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3'>
      <a
        href='#projects'
        className={`${BUTTON_CLASS} bg-primary text-primary-foreground hover:bg-primary-hover`}
        style={{
          transitionDuration: `${MOTION_DURATION.micro}s`,
        }}
      >
        <span>View Projects</span>

        <ArrowRight
          size={16}
          className='shrink-0 transition-transform group-hover:translate-x-0.5'
          style={ICON_STYLE}
          aria-hidden='true'
        />
      </a>

      <a
        href='#contact'
        className={`${BUTTON_CLASS} border border-border bg-surface text-foreground-secondary hover:border-border-strong hover:bg-surface-hover hover:text-foreground`}
        style={{
          transitionDuration: `${MOTION_DURATION.micro}s`,
        }}
      >
        <span>Contact Me</span>

        <Mail
          size={16}
          className='shrink-0 transition-transform group-hover:translate-x-0.5'
          style={ICON_STYLE}
          aria-hidden='true'
        />
      </a>
    </div>
  );
}

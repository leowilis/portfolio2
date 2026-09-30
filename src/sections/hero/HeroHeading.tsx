import { SITE_CONFIG } from '@/src/config/site.config';

export default function HeroHeading() {
  return (
    <header className='flex max-w-4xl flex-col items-center text-center'>
      <p className='mb-5 font-mono text-xs uppercase tracking-[0.24em] text-foreground-muted'>
        {SITE_CONFIG.role}
      </p>

      <h1
        id='hero-title'
        className='text-balance text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-foreground'
      >
        I&apos;m <span className='text-primary'>{SITE_CONFIG.name}</span>
      </h1>
    </header>
  );
}

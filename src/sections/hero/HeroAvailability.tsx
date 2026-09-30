import { SITE_CONFIG } from '@/src/config/site.config';

export default function HeroAvailability() {
  return (
    <p className='inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-foreground-secondary'>
      <span aria-hidden='true' className='size-2 rounded-full bg-success' />

      <span className='font-mono text-xs uppercase tracking-[0.12em]'>
        {SITE_CONFIG.availability}
      </span>
    </p>
  );
}

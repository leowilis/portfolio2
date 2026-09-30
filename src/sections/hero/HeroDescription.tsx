import { SITE_CONFIG } from '@/src/config/site.config';

export default function HeroDescription() {
  return (
    <p className='max-w-2xl text-center text-base leading-relaxed text-foreground-secondary sm:text-lg'>
      {SITE_CONFIG.description}
    </p>
  );
}

import { ArrowUpRight, Braces, Layers3, Sparkles } from 'lucide-react';

import { SITE_CONFIG } from '@/src/config/site.config';
import { LAYOUT } from '@/src/constants/layout.constants';

const TECH_STACK = ['React', 'Next.js', 'TypeScript'] as const;

const FOCUS_ITEMS = [
  {
    label: 'Interface',
    value: 'Responsive UI',
    icon: Sparkles,
  },
  {
    label: 'Architecture',
    value: 'Component systems',
    icon: Layers3,
  },
  {
    label: 'Code',
    value: 'Type-safe frontend',
    icon: Braces,
  },
] as const;

export default function HeroVisual() {
  return (
    <div
      className='relative flex w-full items-center justify-center md:justify-end'
      style={{ maxWidth: LAYOUT.hero.visualMaxWidth }}
    >
      <div className='relative w-full'>
        <div className='absolute -inset-4 -z-10 rounded-[24px] bg-primary/10 blur-3xl' />

        <article className='overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated'>
          <header className='flex items-center justify-between border-b border-border-subtle px-5 py-4'>
            <div className='flex items-center gap-3'>
              <span
                aria-hidden='true'
                className='size-2 rounded-full bg-primary'
              />

              <span className='font-mono text-xs uppercase tracking-[0.14em] text-foreground-muted'>
                Frontend Development
              </span>
            </div>

            <ArrowUpRight
              size={16}
              className='text-foreground-muted'
              aria-hidden='true'
            />
          </header>

          <div className='space-y-8 p-5 sm:p-7'>
            <div>
              <p className='font-mono text-xs uppercase tracking-[0.16em] text-primary'>
                Building
              </p>

              <h2 className='mt-3 max-w-lg text-2xl font-semibold leading-tight tracking-[-0.025em] text-foreground sm:text-3xl'>
                Modern interfaces with clean architecture.
              </h2>

              <p className='mt-4 max-w-md text-sm leading-relaxed text-foreground-secondary'>
                {SITE_CONFIG.name} focuses on building frontend experiences that
                are clear, maintainable, and responsive.
              </p>
            </div>

            <div className='grid gap-3'>
              {FOCUS_ITEMS.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className='flex items-center justify-between rounded-xl border border-border-subtle bg-background-subtle px-4 py-3'
                >
                  <div className='flex items-center gap-3'>
                    <Icon
                      size={16}
                      className='text-primary'
                      aria-hidden='true'
                    />

                    <span className='text-sm text-foreground-secondary'>
                      {label}
                    </span>
                  </div>

                  <span className='font-mono text-xs text-foreground-muted'>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <footer className='border-t border-border-subtle px-5 py-4 sm:px-7'>
            <div className='flex flex-wrap gap-2'>
              {TECH_STACK.map((technology) => (
                <span
                  key={technology}
                  className='rounded-full border border-border bg-background-subtle px-3 py-1.5 font-mono text-xs text-foreground-secondary'
                >
                  {technology}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}

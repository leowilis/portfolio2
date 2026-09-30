import { ArrowUpRight, Braces, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '@/src/config/site.config';
import {
  HERO_CODE,
  HERO_CODE_LINES,
  HERO_FOCUS,
  HERO_TECH_STACK,
  HERO_VISUAL,
} from '@/src/constants/hero.constants';

export default function HeroCodeVisual() {
  return (
    <div className='relative w-full max-w-[520px]'>
      <div
        className='absolute -inset-10 -z-10 bg-primary/[0.07] blur-3xl'
        aria-hidden='true'
      />

      <div
        className='group relative'
        style={{ perspective: HERO_VISUAL.perspective }}
      >
        <div
          className={[
            'relative overflow-hidden rounded-[28px]',
            'border border-border bg-[#080B10]',
            'shadow-[0_30px_80px_rgba(0,0,0,0.35)]',
            'transition-transform ease-out motion-safe:duration-500',
            'motion-safe:hover:-translate-y-1 motion-safe:hover:rotate-[0.35deg]',
            'motion-reduce:transition-none',
          ].join(' ')}
        >
          <div
            className='pointer-events-none absolute inset-0 opacity-40'
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(148,163,184,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.055) 1px, transparent 1px)',
              backgroundSize: `${HERO_VISUAL.gridSize}px ${HERO_VISUAL.gridSize}px`,
            }}
            aria-hidden='true'
          />

          <div
            className='pointer-events-none absolute inset-0'
            style={{
              background:
                'radial-gradient(circle at 72% 25%, rgba(59,130,246,0.13), transparent 34%)',
            }}
            aria-hidden='true'
          />

          <header className='relative flex items-center justify-between border-b border-border-subtle px-5 py-4 sm:px-6'>
            <div className='flex items-center gap-3'>
              <div
                className='flex size-8 items-center justify-center rounded-lg border border-border bg-surface'
                aria-hidden='true'
              >
                <Terminal size={15} className='text-primary' />
              </div>

              <div>
                <p className='font-mono text-[9px] uppercase tracking-[0.2em] text-foreground-muted'>
                  Object / {HERO_VISUAL.objectId}
                </p>
                <p className='mt-0.5 text-xs font-medium text-foreground'>
                  {HERO_CODE.systemLabel}
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={16}
              className='text-foreground-muted'
              aria-hidden='true'
            />
          </header>

          <div className='relative px-5 py-6 sm:px-7 sm:py-8'>
            <div className='mb-6 flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span
                  className='size-1.5 rounded-full bg-success'
                  aria-hidden='true'
                />
                <span className='font-mono text-[9px] uppercase tracking-[0.18em] text-foreground-muted'>
                  {HERO_CODE.statusLabel}
                </span>
              </div>

              <Braces
                size={15}
                className='text-foreground-muted'
                aria-hidden='true'
              />
            </div>

            <div className='overflow-hidden rounded-xl border border-border-subtle bg-black/20'>
              <div className='flex items-center gap-2 border-b border-border-subtle px-4 py-3'>
                <span
                  className='size-2 rounded-full bg-[#FF5F57]'
                  aria-hidden='true'
                />
                <span
                  className='size-2 rounded-full bg-[#FEBC2E]'
                  aria-hidden='true'
                />
                <span
                  className='size-2 rounded-full bg-[#28C840]'
                  aria-hidden='true'
                />
                <span className='ml-2 font-mono text-[9px] text-foreground-muted'>
                  {HERO_CODE.fileName}
                </span>
              </div>

              <div className='overflow-x-auto px-3 py-5 sm:px-4'>
                <code className='block min-w-max whitespace-pre font-mono text-[10px] leading-[1.9] sm:text-[11px]'>
                  {HERO_CODE_LINES.map(({ number, tokens }) => (
                    <div key={number} className='flex'>
                      <span className='mr-5 w-4 select-none text-right text-foreground-muted/40'>
                        {number}
                      </span>

                      <span>
                        {tokens.map(({ value, className }) => (
                          <span
                            key={`${number}-${value}`}
                            className={className}
                          >
                            {value}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </code>
              </div>
            </div>

            <div className='mt-6 grid grid-cols-3 gap-2'>
              {HERO_FOCUS.map((item, index) => (
                <div key={item} className='border-l border-border pl-3'>
                  <span className='font-mono text-[8px] text-foreground-muted'>
                    0{index + 1}
                  </span>
                  <p className='mt-1 text-[10px] leading-tight text-foreground-secondary'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <footer className='relative border-t border-border-subtle px-5 py-4 sm:px-7'>
            <div className='flex flex-wrap items-center justify-between gap-3'>
              <div className='flex flex-wrap gap-x-3 gap-y-1.5'>
                {HERO_TECH_STACK.map((technology) => (
                  <span
                    key={technology}
                    className='font-mono text-[9px] uppercase tracking-[0.1em] text-foreground-muted'
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <span className='font-mono text-[9px] uppercase tracking-[0.1em] text-primary'>
                {SITE_CONFIG.availability}
              </span>
            </div>
          </footer>
        </div>

        <div
          className='pointer-events-none absolute -bottom-3 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent'
          aria-hidden='true'
        />
      </div>
    </div>
  );
}

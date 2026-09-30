import { ABOUT_PRINCIPLES } from './about.data';

export default function AboutDetails() {
  return (
    <section aria-labelledby='about-principles-heading'>
      <div className='border-t border-border'>
        {ABOUT_PRINCIPLES.map((principle) => (
          <article
            key={principle.number}
            className='grid gap-4 border-b border-border-subtle py-6 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-5'
          >
            <span
              aria-hidden='true'
              className='font-mono text-xs tracking-[0.16em] text-primary'
            >
              {principle.number}
            </span>

            <div>
              <h3
                id={
                  principle.number === '01'
                    ? 'about-principles-heading'
                    : undefined
                }
                className='text-base font-semibold tracking-[-0.015em] text-foreground'
              >
                {principle.title}
              </h3>

              <p className='mt-2 max-w-xl text-sm leading-6 text-foreground-secondary'>
                {principle.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

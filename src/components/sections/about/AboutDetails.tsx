import { DETAILS } from './about.data';

export default function AboutDetails() {
  return (
    <section aria-labelledby='about-details-heading'>
      <h3
        id='about-details-heading'
        className='font-mono text-xs uppercase tracking-[0.18em] text-primary'
      >
        Profile Details
      </h3>

      <dl className='mt-5 border-t border-border'>
        {DETAILS.map((detail) => (
          <div
            key={detail.label}
            className='flex items-center justify-between gap-6 border-b border-border-subtle py-4'
          >
            <dt className='font-mono text-xs uppercase tracking-[0.12em] text-foreground-muted'>
              {detail.label}
            </dt>

            <dd
              className={
                detail.isHighlight
                  ? 'text-sm font-medium text-success'
                  : 'text-right text-sm text-foreground-secondary'
              }
            >
              {detail.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

import { FadeIn, StaggerContainer } from '@/src/animations';
import { STATS } from './about.data';
import Statcard from './Statcard';

export default function AboutStats() {
  return (
    <section aria-labelledby='about-stats-heading' className='mt-20'>
      <h2 id='about-stats-heading' className='sr-only'>
        Statistics
      </h2>

      <StaggerContainer>
        <ul className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {STATS.map((stat) => (
            <li key={stat.label}>
              <FadeIn>
                <Statcard
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </FadeIn>
            </li>
          ))}
        </ul>
      </StaggerContainer>
    </section>
  );
}

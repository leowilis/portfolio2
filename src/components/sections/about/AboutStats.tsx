import { FadeIn, StaggerContainer } from '@/src/animations';
import { STATS } from './about.data';
import Statcard from './Statcard';

export default function AboutStats() {
  return (
    <StaggerContainer className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
      {STATS.map((stat) => (
        <FadeIn key={stat.label}>
          <Statcard
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        </FadeIn>
      ))}
    </StaggerContainer>
  );
}
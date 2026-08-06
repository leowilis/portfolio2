import StaggerContainer from '@/src/animations/StaggerContainer';
import AboutContent from './AboutContent';
import AboutHeader from './AboutHeader';
import AboutStats from './AboutStats';

export default function AboutSection() {
  return (
    <section
      id='about'
      aria-labelledby='about-heading'
      className='relative mx-auto max-w-5xl px-6 py-32'
    >
      <StaggerContainer>
        <AboutHeader />
        <AboutContent />
        <AboutStats />
      </StaggerContainer>
    </section>
  );
}

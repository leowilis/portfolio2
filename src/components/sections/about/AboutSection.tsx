import AboutContent from './AboutContent';
import AboutHeader from './AboutHeader';
import AboutStats from './AboutStats';
import StaggerContainer from '@/src/animations/StaggerContainer';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-5xl px-6 py-32"
    >
      <StaggerContainer>
        <AboutHeader />
        <AboutContent />
        <AboutStats />
      </StaggerContainer>
    </section>
  );
}
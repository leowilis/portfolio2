import ScrollScene from '@/src/animations/ScrollScene';
import AboutSection from '@/src/components/sections/about/AboutSection';
import HeroSection from '@/src/components/sections/hero/HeroSection';
import ProjectsSection from '@/src/components/sections/projects/ProjectsSection';

export default function Home() {
  return (
    <ScrollScene>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </ScrollScene>
  );
}
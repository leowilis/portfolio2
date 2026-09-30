import { HeroSection } from '@/src/sections/hero';
import ProjectsSection from '@/src/components/sections/projects/ProjectsSection';
import AboutSection from '@/src/components/sections/about/AboutSection';
import { SkillsSection } from '@/src/components/sections/skills';
import { FocusSection } from '@/src/components/sections/focus';
import EducationSection from '@/src/components/sections/education/EducationSection';
import { CTASection } from '@/src/components/sections/cta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <FocusSection />
      <EducationSection />
      <CTASection />
    </>
  );
}

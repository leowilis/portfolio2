import FadeIn from '@/src/animations/FadeIn';

import AboutBio from './AboutBio';
import AboutDetails from './AboutDetails';

export default function AboutContent() {
  return (
    <div className="grid items-start gap-16 md:grid-cols-2">
      <FadeIn>
        <AboutBio />
      </FadeIn>

      <FadeIn y={40}>
        <AboutDetails />
      </FadeIn>
    </div>
  );
}
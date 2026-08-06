import FadeIn from '@/src/animations/FadeIn';
import AboutBio from './AboutBio';
import AboutDetails from './AboutDetails';
import AboutWhatIBring from './AboutWhatIBring';
import {
  ABOUT_CONTENT_REVEAL_DELAY,
  ABOUT_CONTENT_REVEAL_Y,
} from './constants';

export default function AboutContent() {
  return (
    <div className='grid items-start gap-16 md:grid-cols-2'>
      <FadeIn>
        <AboutBio />
      </FadeIn>

      <FadeIn y={ABOUT_CONTENT_REVEAL_Y} delay={ABOUT_CONTENT_REVEAL_DELAY}>
        <AboutDetails />
        <AboutWhatIBring />
      </FadeIn>
    </div>
  );
}

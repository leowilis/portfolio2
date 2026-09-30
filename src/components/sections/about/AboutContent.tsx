import AboutBio from './AboutBio';
import AboutDetails from './AboutDetails';

export default function AboutContent() {
  return (
    <div className='grid items-start gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16 lg:gap-24'>
      <AboutBio />
      <AboutDetails />
    </div>
  );
}

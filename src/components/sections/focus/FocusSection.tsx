import FocusCard from './FocusCard';
import FocusHeader from './FocusHeader';
import { FOCUS_ITEMS } from './focus.data';

export default function FocusSection() {
  return (
    <section
      id='focus'
      aria-labelledby='focus-title'
      className='relative w-full border-t border-[#1B2532] py-24 sm:py-32 lg:py-40'
    >
      <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
          <FocusHeader />

          <div className='grid gap-4'>
            {FOCUS_ITEMS.map((item) => (
              <FocusCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

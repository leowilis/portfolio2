import CTAHeader from './CTAHeader';
import CTASocials from './CTASocials';

export default function CTASection() {
  return (
    <section
      id='contact'
      aria-labelledby='cta-title'
      className='relative w-full border-t border-[#1B2532] py-24 sm:py-32 lg:py-40'
    >
      <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'>
        <div className='grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end'>
          <CTAHeader />
          <CTASocials />
        </div>
      </div>
    </section>
  );
}

import { TextReveal } from '@/src/animations';

export default function AboutHeader() {
  return (
    <header className='mb-20 flex flex-col items-center text-center'>
      <p className='mb-3 text-xs font-bold uppercase tracking-[0.35em] text-white/40'>
        About Me
      </p>

      <h2 id='about-heading'>
        <TextReveal
          className='text-3xl font-semibold tracking-tight md:text-4xl'
          text={[
            {
              text: 'Passionate about building',
              className: 'text-white',
            },
            {
              text: 'great products.',
              className: 'text-violet-400',
            },
          ]}
        />
      </h2>

      <div
        aria-hidden='true'
        className='mt-6 h-px w-12 rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent'
      />
    </header>
  );
}

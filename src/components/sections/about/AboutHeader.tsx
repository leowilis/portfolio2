import { TextReveal } from '@/src/animations';

export default function AboutHeader() {
  return (
    <header className="mb-20 flex flex-col items-center text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-white/40">
        About Me
      </p>

      <TextReveal
        as="h2"
        className="text-3xl font-semibold tracking-tight md:text-4xl"
      >
        <span className="text-white">
          Passionate about building{' '}
        </span>
        <span className="text-violet-400">
          great products.
        </span>
      </TextReveal>

      <div
        aria-hidden="true"
        className="mt-6 h-px w-12 rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />
    </header>
  );
}
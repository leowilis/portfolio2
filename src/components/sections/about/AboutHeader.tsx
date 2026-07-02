import { TextReveal } from '@/src/animations';

export default function AboutHeader() {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-white/40">
        About Me
      </p>

      <TextReveal
        className="text-3xl font-semibold tracking-tight md:text-4xl"
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

      <div className="mt-4 h-px w-10 bg-violet-500/40" />
    </div>
  );
}
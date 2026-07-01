'use client';

import { useEffect, useState, useTransition } from 'react';

const roles = [
  'Frontend Developer',
  'React Specialist',
  'UI/UX Enthusiast',
  'Next.js Developer',
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40,
      );
    } else {
      startTransition(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      });
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center px-6 text-center'>
      <div className='mb-4 text-xs font-bold tracking-[4px] text-white/40 uppercase'>
        Frontend Developer
      </div>

      {/* Main Tagline */}
      <h1 className='mb-4 text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl'>
        I&apos;m <span className='text-violet-400'>Leo Wilis</span>
      </h1>

      {/* Typewriter */}
      <div className='mb-6 flex h-8 items-center gap-1 text-base text-white/40 md:text-lg'>
        <span>{displayed}</span>
        <span className='animate-pulse text-violet-300'>|</span>
      </div>

      {/* Description */}
      <p className='mb-10 max-w-lg text-md leading-relaxed text-white/40 md:text-base'>
        Hi, I&apos;m{' '}
        <span className='text-white/60 font-extrabold'>Leo Wilis</span> — a
        frontend developer who ideas into interfaces. Clean code, thoughtful
        design, and a relentless focus on user experience — that&apos;s how I
        build for the web.
      </p>

      {/* CTA Buttons */}
      <div className='flex items-center gap-3 sm:flex-row'>
        <a
          href='#projects'
          className='rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-violet-500'
        >
          View Projects →
        </a>

        <a
          href='#contact'
          className='rounded-lg border border-white/20 px-6 py-3 text-sm text-white/50 transition-colors duration-200 hover:border-white/25 hover:text-white/80'
        >
          Contact Me
        </a>
      </div>

      {/* Tech stack */}
      <div className='mt-14 flex flex-wrap justify-center gap-2'>
        {[
          'React',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Redux Toolkit',
          'TanStack Query',
          'Zustand',
          'shadcn/ui',
          'Framer Motion',
          'REST API',
          'Git',
        ].map((tech) => (
          <span
            key={tech}
            className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/30'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Available badge */}
      <div className='mt-10 flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-4 py-2'>
        <span className='h-2 w-2 animate-pulse rounded-full bg-green-400' />
        <span className='text-[15px] font-bold text-violet-300/70'>
          Available for work
        </span>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 flex flex-col items-center gap-2'>
        <span className='text-[10px] tracking-[3px] text-white/30'>SCROLL</span>
        <div className='h-8 w-px animate-bounce bg-white/30' />
      </div>
    </section>
  );
}

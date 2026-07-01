'use client';

import { useInView } from '@/src/hooks/useInView';
import { STATS, DETAILS, TECHS } from './about.data';
import { RotatingOrb } from './Rotatingorb';
import { StatCard } from './Statcard';

export default function AboutSection() {
  const { ref: leftRef, inView: leftInView } = useInView(0.2);
  const { ref: rightRef, inView: rightInView } = useInView(0.2);

  return (
    <section id='about' className='relative mx-auto max-w-5xl px-6 py-32'>
      {/* Section header */}
      <div className='mb-16 flex flex-col items-center text-center'>
        <p className='mb-3 text-xs font-bold tracking-[4px] text-white/40 uppercase'>
          About Me
        </p>
        <h2 className='text-3xl font-semibold tracking-tight text-white md:text-4xl'>
          Passionate about building{' '}
          <span className='text-violet-400'>great products.</span>
        </h2>
        <div className='mt-4 h-px w-10 bg-violet-500/40' />
      </div>

      {/* Split layout */}
      <div className='grid items-start gap-16 md:grid-cols-2'>
        {/* Left — Bio */}
        <div
          ref={leftRef}
          className={`flex flex-col gap-5 transition-all duration-700 ${
            leftInView
              ? 'translate-x-0 opacity-100'
              : '-translate-x-8 opacity-0'
          }`}
        >
          <p className='text-md leading-relaxed text-white/35'>
            I&apos;m a frontend developer based in{' '}
            <span className='text-white/60 font-bold'>Medan, Indonesia</span>,
            focused on building modern, performant web applications with clean
            and maintainable code.
          </p>
          <p className='text-md leading-relaxed text-white/35'>
            I don&apos;t just write code — I craft experiences. Every detail
            matters: smooth animations, intuitive interfaces, and interactions
            that feel effortless to use.
          </p>
          <p className='text-md leading-relaxed text-white/35'>
            Currently open to{' '}
            <span className='text-violet-400 font-bold'>
              full-time or remote opportunities
            </span>{' '}
            where I can contribute, grow, and work alongside talented teams to
            build products that matter.
          </p>

          {/* Tech tags */}
          <div className='flex flex-wrap gap-2 pt-1'>
            {TECHS.map((tech) => (
              <span
                key={tech}
                className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/25'
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Download CV */}
          <div className='flex justify-center items-center'>
            <a
              href='/cv-leo-wilis.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-1 inline-flex w-fit items-center gap-2 rounded-lg border border-white/[0.2] px-5 py-2.5 text-sm text-white/35 transition-colors duration-200 hover:border-violet-500/40 hover:text-violet-300'
            >
              Download CV
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                <polyline points='7 10 12 15 17 10' />
                <line x1='12' y1='15' x2='12' y2='3' />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — Orb + Details */}
        <div
          ref={rightRef}
          className={`flex flex-col gap-6 transition-all duration-700 delay-150 ${
            rightInView
              ? 'translate-x-0 opacity-100'
              : 'translate-x-8 opacity-0'
          }`}
        >
          <RotatingOrb />

          {/* Detail rows */}
          <div className='flex flex-col'>
            {DETAILS.map((item) => (
              <div
                key={item.label}
                className='flex items-center justify-between border-b border-white/[0.08] py-3 last:border-none'
              >
                <span className='text-[10px] font-bold tracking-[2px] text-white/30 uppercase'>
                  {item.label}
                </span>
                <span
                  className={`text-sm font-bold ${
                    item.isHighlight ? 'text-green-400' : 'text-white/45'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className='mt-20 grid grid-cols-2 gap-4 md:grid-cols-4'>
        {STATS.map((stat, i) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
}

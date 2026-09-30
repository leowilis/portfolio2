import { ArrowUpRight, Mail } from 'lucide-react';

import { CTA_EMAIL } from './cta.data';

export default function CTAHeader() {
  return (
    <div className='max-w-3xl'>
      <p className='flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400'>
        <span aria-hidden='true' className='h-px w-8 bg-blue-500' />
        Get in touch
      </p>

      <h2
        id='cta-title'
        className='mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-5xl lg:text-6xl'
      >
        Let&apos;s build
        <span className='block text-[#6F7B89]'>something great.</span>
      </h2>

      <p className='mt-6 max-w-2xl text-sm leading-7 text-[#A8B2BF] sm:text-base'>
        Have a project, idea, or opportunity in mind? I&apos;d be happy to hear
        about it and explore how we can build something useful together.
      </p>

      <div className='mt-9 flex flex-col items-start gap-5 sm:mt-10'>
        <a
          href={`mailto:${CTA_EMAIL}`}
          className='group inline-flex items-center gap-4 rounded-xl border border-[#2A3848] bg-[#0C1016] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F7FA] outline-none transition-colors duration-300 hover:border-blue-500/60 hover:bg-[#111720] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A] sm:text-sm'
        >
          <span>Start a conversation</span>

          <span
            aria-hidden='true'
            className='flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          >
            <ArrowUpRight size={18} strokeWidth={2} />
          </span>
        </a>

        <a
          href={`mailto:${CTA_EMAIL}`}
          className='inline-flex items-center gap-2.5 text-sm text-[#6F7B89] outline-none transition-colors duration-300 hover:text-[#A8B2BF] focus-visible:text-[#A8B2BF]'
        >
          <Mail aria-hidden='true' size={15} className='text-blue-400' />
          <span>{CTA_EMAIL}</span>
        </a>
      </div>
    </div>
  );
}

'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from './contact.data';
import { CONTACT_CTA_ARROW_UP, CONTACT_CTA_MAIL } from './constants';

export default function ContactCTA() {
  return (
    <div className='mt-9 flex flex-col items-start gap-4 sm:mt-10 select-none'>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        aria-label='Send an email to leo'
        className='group inline-flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-3.5 backdrop-blur-md transition-all duration-500 hover:border-violet-400/40 hover:bg-violet-500/[0.06] outline-none focus-visible:ring-2 focus-visible:ring-violet-500'
      >
        <span className='text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm'>
          Start a conversation
        </span>

        <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-white transition-all duration-500 group-hover:rotate-45 group-hover:scale-105'>
          <ArrowUpRight size={CONTACT_CTA_ARROW_UP} />
        </span>
      </a>

      <div className='flex items-center gap-2.5 text-xs text-white/30 sm:text-sm'>
        <Mail size={CONTACT_CTA_MAIL} className='text-violet-400' />
        <span>{CONTACT_EMAIL}</span>
      </div>
    </div>
  );
}

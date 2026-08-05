import Magnetic from '@/src/animations/Magnetic';
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3 w-full select-none text-left p-0.5 shrink-0 relative z-20'>
      <Magnetic>
        <a
          href='#projects'
          className='group inline-flex items-center gap-1.5 rounded-xl bg-purple-800 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-purple-600 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer active:scale-98 shadow-sm hover:shadow-purple-600/20'
        >
          <span>View Projects</span>
          <ArrowRight
            size={14}
            className='transition-transform duration-200 group-hover:translate-x-0.5 shrink-0 text-current'
            aria-hidden='true'
          />
        </a>
      </Magnetic>

      <Magnetic>
        <a
          href='#contact'
          className='inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-bold text-neutral-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/5 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-purple-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer active:scale-95 shadow-xs'
        >
          Contact Me
          <Mail
            size={14}
            className='transition-transform duration-200 group-hover:translate-x-0.5 shrink-0 text-current'
            aria-hidden='true'
          />
        </a>
      </Magnetic>
    </div>
  );
}

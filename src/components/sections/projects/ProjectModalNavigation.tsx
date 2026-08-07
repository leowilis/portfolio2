import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROJECT_MODAL_NAV_ICON_SIZE } from './project.constants';

interface ProjectModalNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function ProjectModalNavigation({
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ProjectModalNavigationProps) {
  return (
    <nav
      aria-label='Project navigation'
      className='flex w-full items-center justify-between gap-4'
    >
      {/* Previous Button */}
      <button
        type='button'
        onClick={onPrevious}
        disabled={!hasPrevious}
        className='group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-bold text-neutral-200 outline-none transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-1 focus-visible:ring-offset-background active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-white/[0.03] disabled:hover:text-neutral-200'
      >
        <ArrowLeft
          size={PROJECT_MODAL_NAV_ICON_SIZE}
          aria-hidden='true'
          className='shrink-0 text-current transition-transform group-hover:-translate-x-0.5'
        />

        <span>Previous Project</span>
      </button>

      {/* Next Button */}
      <button
        type='button'
        onClick={onNext}
        disabled={!hasNext}
        aria-disabled={!hasNext}
        className='group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-bold text-neutral-200 outline-none transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-1 focus-visible:ring-offset-background active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-white/[0.03] disabled:hover:text-neutral-200'
      >
        <span>Next Project</span>
        <ArrowRight
          size={PROJECT_MODAL_NAV_ICON_SIZE}
          aria-hidden='true'
          className='shrink-0 text-current transition-transform group-hover:translate-x-0.5'
        />
      </button>
    </nav>
  );
}

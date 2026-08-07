import { memo } from 'react';

interface WindowHeaderProps {
  title: string;
}

function WindowHeader({ title }: WindowHeaderProps) {
  return (
    <div className='relative z-10 grid grid-cols-3 items-center border-b border-white/5 bg-zinc-950/40 px-5 py-3.5 backdrop-blur-xl select-none'>
      <div aria-hidden='true' className='flex items-center gap-1.5'>
        <span className='h-3 w-3 rounded-full border border-red-500/20 bg-red-500/80' />
        <span className='h-3 w-3 rounded-full border border-yellow-500/20 bg-yellow-500/80' />
        <span className='h-3 w-3 rounded-full border border-green-500/20 bg-green-500/80' />
      </div>

      {/* Project title */}
      <span className='min-w-0 truncate text-center text-[11px] font-semibold tracking-wider text-neutral-400'>
        {title}
      </span>

      {/* Grid balance */}
      <div aria-hidden='true' className='justify-self-end' />
    </div>
  );
}

export default memo(WindowHeader);

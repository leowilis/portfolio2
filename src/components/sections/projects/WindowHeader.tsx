import { memo } from 'react';

interface WindowHeaderProps {
  title: string;
}

function WindowHeader({ title }: WindowHeaderProps) {
  return (
    <div className='relative z-10 flex items-center border-b border-white/5 bg-white/[0.02] px-5 py-3 mb-6'>
      <div className='flex items-center gap-2'>
        <span
          aria-hidden='true'
          className='h-3 w-3 rounded-full bg-foreground-red'
        />
        <span
          aria-hidden='true'
          className='h-3 w-3 rounded-full bg-foreground-yellow'
        />
        <span
          aria-hidden='true'
          className='h-3 w-3 rounded-full bg-foreground-green'
        />
      </div>
      <h3 className='absolute left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide text-white/55'>
        {title}
      </h3>
    </div>
  );
}

export default memo(WindowHeader);

'use client';

import { memo } from 'react';
import { cn } from '@/src/lib/utils';

interface ProjectIndicatorProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

function ProjectIndicator({
  total,
  activeIndex,
  onSelect,
}: ProjectIndicatorProps) {
  if (total <= 0) return null;

  return (
    <div
      role='tablist'
      aria-label='Project gallery pagination'
      className='mx-auto flex w-full max-w-xs shrink-0 select-none items-center justify-center gap-2 px-4 py-2'
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            type='button'
            role='tab'
            aria-label={`Go to project ${index + 1}`}
            aria-selected={isActive}
            aria-current={isActive ? 'true' : undefined}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(index)}
            className={cn(
              'h-2 cursor-pointer rounded-full outline-none transition-[width,background-color,box-shadow,transform] duration-300 ease-out',
              'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              isActive
                ? 'w-10 bg-primary shadow-[0_0_8px_rgba(147,51,234,0.4)]'
                : 'w-2 bg-muted hover:scale-110 hover:bg-muted-foreground/60',
            )}
          />
        );
      })}
    </div>
  );
}

export default memo(ProjectIndicator);

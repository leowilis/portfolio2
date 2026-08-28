'use client';

import { useRef } from 'react';
import { TECH_STACK } from './tech.data';
import TechCard from './TechCard';
import useCardReveal from './useCardReveal';
import useGridParallax from './useGridParallax';

export default function TechGrid() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useCardReveal({
    gridRef,
  });

  useGridParallax({
    gridRef,
  });

  return (
    <div
      ref={gridRef}
      className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'
    >
      {TECH_STACK.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </div>
  );
}

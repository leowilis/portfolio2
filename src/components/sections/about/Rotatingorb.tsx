'use client';
import { useEffect, useRef } from 'react';

export function RotatingOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let angle = 0;
    let frameId: number;

    const animate = () => {
      angle += 0.35;
      if (orbRef.current) {
        orbRef.current.style.transform = `rotateY(${angle}deg) rotateX(12deg)`;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className='flex flex-col items-center gap-5'>
      {/* 3D Orb */}
      <div style={{ perspective: '600px' }}>
        <div
          ref={orbRef}
          style={{
            transformStyle: 'preserve-3d',
            width: 120,
            height: 120,
            position: 'relative',
          }}
        >
          {/* Core */}
          <div
            style={{ backfaceVisibility: 'inherit' }}
            className='absolute inset-0 flex items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/[0.07]'
          >
            <span className='text-3xl font-semibold text-violet-400'>LW</span>
          </div>
          {/* Ring 1 */}
          <div
            style={{
              transform: 'translateZ(-18px)',
              backfaceVisibility: 'inherit',
            }}
            className='absolute inset-[-10px] rounded-full border border-violet-500/20'
          />
          {/* Ring 2 */}
          <div
            style={{
              transform: 'translateZ(-36px)',
              backfaceVisibility: 'inherit',
            }}
            className='absolute inset-[-22px] rounded-full border border-violet-500/20'
          />
        </div>
      </div>

      {/* Name & status */}
      <div className='text-center mt-4'>
        <p className='text-sm font-bold text-white/70'>Leonardo Wilis</p>
        <p className='mt-0.5 text-xs font-bold text-white/25'>
          Frontend Developer
        </p>
        <div className='mt-3 flex items-center justify-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/[0.07] px-3 py-1'>
          <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-green-400' />
          <span className='text-[10px] text-green-400/70'>Open to Work</span>
        </div>
      </div>
    </div>
  );
}

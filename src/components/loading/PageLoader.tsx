'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;
const GRID_LINES = Array.from({ length: 13 });
const ORBIT_LINES = Array.from({ length: 3 });

export default function PageLoader(): React.ReactElement | null {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let frameId: number;

    const updateProgress = () => {
      setProgress((current) => {
        if (current >= 100) {
          setIsComplete(true);
          return 100;
        }
        const remaining = 100 - current;
        const increment = remaining > 40 ? 1.8 : remaining > 15 ? 0.8 : 0.25;
        return Math.min(current + increment, 100);
      });
      frameId = requestAnimationFrame(updateProgress);
    };
    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  const clampedProgress = Math.min(100, Math.max(0, Math.floor(progress)));
  const progressLabel = Math.floor(progress).toString().padStart(3, '0');

  if (typeof window === 'undefined') return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              delay: 0.25,
              ease: EASE,
            },
          }}
          className='fixed inset-0 z-9999 overflow-hidden bg-black text-white select-none'
        >
          {/* Ambient Background */}
          <motion.div
            aria-hidden='true'
            className='pointer-events-none absolute left-1/2 top-1/2 h-[45vw] w-[45vw] rounded-full bg-violet-500/[0.07] blur-[140px]'
            animate={{
              scale: [0.85, 1.1, 0.85],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ x: '-50%', y: '-50%' }}
          />

          <motion.div
            aria-hidden='true'
            className='pointer-events-none absolute right-[-15%] top-[10%] h-[35vw] w-[35vw] rounded-full bg-indigo-500/4 blur-[120px]'
            animate={{
              x: [-30, 20, -30],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Technical Grid */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 opacity-[0.045]'
          >
            <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-size-[80px_80px]' />
          </div>

          {/* Moving vertical grid */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 overflow-hidden opacity-[0.035]'
          >
            {GRID_LINES.map((_, index) => (
              <motion.span
                key={index}
                className='absolute top-0 h-full w-px bg-white'
                style={{
                  left: `${(index + 1) * 7.7}%`,
                }}
                animate={{
                  opacity: [0.15, 0.5, 0.15],
                }}
                transition={{
                  duration: 3 + index * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Center Orbit */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute left-1/2 top-1/2 h-[min(75vw,850px)] w-[min(75vw,850px)] -translate-x-1/2 -translate-y-1/2'
          >
            {ORBIT_LINES.map((_, index) => (
              <motion.div
                key={index}
                className='absolute left-1/2 top-1/2 rounded-full border border-white/[0.07]'
                style={{
                  width: `${55 + index * 22}%`,
                  height: `${55 + index * 22}%`,
                  translateX: '-50%',
                  translateY: '-50%',
                }}
                animate={{
                  rotate: index % 2 === 0 ? 360 : -360,
                }}
                transition={{
                  duration: 30 + index * 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}

            {/* Orbit glow */}
            <motion.div
              className='absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.12]'
              animate={{
                scale: [0.95, 1.05, 0.95],
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Top Information */}
          <div className='absolute left-0 right-0 top-0 z-10 flex items-start justify-between px-6 py-6 sm:px-10 sm:py-8 lg:px-16'>
            <div className='overflow-hidden'>
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                }}
                className='flex flex-col gap-1'
              >
                <span className='text-[10px] font-medium uppercase tracking-[0.3em] text-white/75'>
                  Leonardo Wilis
                </span>

                <span className='text-[8px] uppercase tracking-[0.28em] text-white/25'>
                  Frontend Developer
                </span>
              </motion.div>
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className='text-[9px] uppercase tracking-[0.28em] text-white/25'
            >
              Portfolio / 2026
            </motion.span>
          </div>

          {/* Center Content */}
          <div className='absolute inset-0 z-10 flex items-center justify-center px-6'>
            <div className='w-full max-w-[1000px]'>
              {/* Small status */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                  filter: 'blur(8px)',
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: EASE,
                }}
                className='mb-7 flex items-center gap-3 sm:mb-9'
              >
                <motion.span
                  className='h-1.5 w-1.5 rounded-full bg-violet-300'
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.15, 0.8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <span className='text-[9px] uppercase tracking-[0.38em] text-white/30'>
                  Initializing experience
                </span>
              </motion.div>

              {/* Main progress */}
              <div className='flex items-end justify-between gap-6'>
                <div className='overflow-hidden'>
                  <motion.h1
                    initial={{
                      y: '100%',
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: EASE,
                    }}
                    className='text-[clamp(3rem,9vw,8rem)] font-light leading-[0.85] tracking-[-0.075em] text-white'
                  >
                    {progressLabel}
                    <span className='ml-2 text-white/15'>%</span>
                  </motion.h1>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: EASE,
                  }}
                  className='hidden pb-2 text-right sm:block'
                >
                  <p className='text-[8px] uppercase tracking-[0.3em] text-white/20'>
                    Digital experiences
                  </p>

                  <p className='mt-2 text-[8px] uppercase tracking-[0.3em] text-white/10'>
                    Crafted with intention
                  </p>
                </motion.div>
              </div>

              {/* Progress line */}
              <div className='relative mt-7 h-px w-full overflow-visible bg-white/[0.08] sm:mt-9'>
                {/* Main progress */}
                <motion.div
                  className='absolute inset-y-0 left-0 bg-white'
                  style={{
                    width: `${clampedProgress}%`,
                  }}
                />

                {/* Violet glow */}
                <motion.div
                  aria-hidden='true'
                  className='absolute inset-y-[-2px] left-0 bg-violet-300 blur-[4px]'
                  style={{
                    width: `${clampedProgress}%`,
                    opacity: 0.45,
                  }}
                />

                {/* Leading point */}
                <motion.div
                  aria-hidden='true'
                  className='absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.7)]'
                  style={{
                    left: `${clampedProgress}%`,
                  }}
                />
              </div>

              {/* Meta */}
              <div className='mt-4 flex items-center justify-between'>
                <span className='text-[8px] uppercase tracking-[0.3em] text-white/20'>
                  System / Ready
                </span>

                <span className='text-[8px] uppercase tracking-[0.3em] text-white/20'>
                  Medan, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className='absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-6 py-6 sm:px-10 sm:py-8 lg:px-16'>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
            >
              <span className='text-[8px] uppercase tracking-[0.3em] text-white/15'>
                Selected work
              </span>
            </motion.div>

            <motion.span
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='text-[8px] uppercase tracking-[0.3em] text-white/20'
            >
              Loading interface
            </motion.span>
          </div>

          {/* Corner Details */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute bottom-6 left-6 h-3 w-3 border-b border-l border-white/10 sm:bottom-8 sm:left-10'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute bottom-6 right-6 h-3 w-3 border-b border-r border-white/10 sm:bottom-8 sm:right-10'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute left-6 top-20 h-3 w-3 border-l border-t border-white/10 sm:left-10 sm:top-24'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute right-6 top-20 h-3 w-3 border-r border-t border-white/10 sm:right-10 sm:top-24'
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

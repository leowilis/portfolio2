'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import {
  PAGE_LOADER_ANIMATION,
  PAGE_LOADER_EASE,
  PAGE_LOADER_GRID_LINES,
  PAGE_LOADER_ORBIT_LINES,
  PAGE_LOADER_PROGRESS,
} from './page-loader.constants';

export default function PageLoader(): React.ReactElement | null {
  const [progress, setProgress] = useState<number>(PAGE_LOADER_PROGRESS.MIN);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let frameId: number;

    const updateProgress = () => {
      setProgress((current) => {
        if (current >= PAGE_LOADER_PROGRESS.MAX) {
          setIsComplete(true);

          return PAGE_LOADER_PROGRESS.MAX;
        }
        const remaining = PAGE_LOADER_PROGRESS.MAX - current;
        const increment =
          remaining > PAGE_LOADER_PROGRESS.FAST_THRESHOLD
            ? PAGE_LOADER_PROGRESS.FAST_INCREMENT
            : remaining > PAGE_LOADER_PROGRESS.MEDIUM_THRESHOLD
              ? PAGE_LOADER_PROGRESS.MEDIUM_INCREMENT
              : PAGE_LOADER_PROGRESS.SLOW_INCREMENT;

        return Math.min(current + increment, PAGE_LOADER_PROGRESS.MAX);
      });
      frameId = requestAnimationFrame(updateProgress);
    };
    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  const clampedProgress = Math.min(
    PAGE_LOADER_PROGRESS.MAX,
    Math.max(PAGE_LOADER_PROGRESS.MIN, Math.floor(progress)),
  );

  const progressLabel = Math.floor(progress)
    .toString()
    .padStart(PAGE_LOADER_ANIMATION.PROGRESS_LABEL_PAD_LENGTH, '0');

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: PAGE_LOADER_ANIMATION.EXIT_DURATION,
              delay: PAGE_LOADER_ANIMATION.EXIT_DELAY,
              ease: PAGE_LOADER_EASE,
            },
          }}
          className='fixed inset-0 z-9999 overflow-hidden bg-black text-white select-none'
        >
          {/* Ambient Background */}
          <motion.div
            aria-hidden='true'
            className='pointer-events-none absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[140px]'
            animate={{
              scale: PAGE_LOADER_ANIMATION.AMBIENT_SCALE,
              opacity: PAGE_LOADER_ANIMATION.AMBIENT_OPACITY,
            }}
            transition={{
              duration: PAGE_LOADER_ANIMATION.AMBIENT_DURATION,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            aria-hidden='true'
            className='pointer-events-none absolute right-[-15%] top-[10%] h-[35vw] w-[35vw] rounded-full bg-indigo-500/4 blur-[120px]'
            animate={{
              x: PAGE_LOADER_ANIMATION.SECONDARY_AMBIENT_X,
              y: PAGE_LOADER_ANIMATION.SECONDARY_AMBIENT_Y,
            }}
            transition={{
              duration: PAGE_LOADER_ANIMATION.SECONDARY_AMBIENT_DURATION,
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

          {/* Moving Vertical Grid */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 overflow-hidden opacity-[0.035]'
          >
            {PAGE_LOADER_GRID_LINES.map((_, index) => (
              <motion.span
                key={index}
                className='absolute top-0 h-full w-px bg-white'
                style={{
                  left: `${
                    (index + PAGE_LOADER_ANIMATION.GRID_LEFT_INDEX_OFFSET) *
                    PAGE_LOADER_ANIMATION.GRID_BASE_LEFT_PERCENT
                  }%`,
                }}
                animate={{
                  opacity: PAGE_LOADER_ANIMATION.GRID_OPACITY,
                }}
                transition={{
                  duration:
                    PAGE_LOADER_ANIMATION.GRID_DURATION +
                    index * PAGE_LOADER_ANIMATION.GRID_DURATION_STEP,
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
            {PAGE_LOADER_ORBIT_LINES.map((_, index) => (
              <motion.div
                key={index}
                className='absolute left-1/2 top-1/2 rounded-full border border-white/[0.07]'
                style={{
                  width: `${
                    PAGE_LOADER_ANIMATION.ORBIT_BASE_SIZE_PERCENT +
                    index * PAGE_LOADER_ANIMATION.ORBIT_SIZE_STEP_PERCENT
                  }%`,
                  height: `${
                    PAGE_LOADER_ANIMATION.ORBIT_BASE_SIZE_PERCENT +
                    index * PAGE_LOADER_ANIMATION.ORBIT_SIZE_STEP_PERCENT
                  }%`,
                  translateX: '-50%',
                  translateY: '-50%',
                }}
                animate={{
                  rotate: index % 2 === 0 ? 360 : -360,
                }}
                transition={{
                  duration:
                    PAGE_LOADER_ANIMATION.ORBIT_ROTATION_DURATION +
                    index * PAGE_LOADER_ANIMATION.ORBIT_ROTATION_DURATION_STEP,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}

            {/* Orbit Glow */}
            <motion.div
              aria-hidden='true'
              className='absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.12]'
              animate={{
                scale: PAGE_LOADER_ANIMATION.ORBIT_GLOW_SCALE,
                opacity: PAGE_LOADER_ANIMATION.ORBIT_GLOW_OPACITY,
              }}
              transition={{
                duration: PAGE_LOADER_ANIMATION.ORBIT_GLOW_DURATION,
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
                  duration: PAGE_LOADER_ANIMATION.TOP_NAME_DURATION,
                  ease: PAGE_LOADER_EASE,
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
                duration: PAGE_LOADER_ANIMATION.TOP_PORTFOLIO_DURATION,
                delay: PAGE_LOADER_ANIMATION.TOP_PORTFOLIO_DELAY,
              }}
              className='text-[9px] uppercase tracking-[0.28em] text-white/25'
            >
              Portfolio / 2026
            </motion.span>
          </div>

          {/* Center Content */}
          <div className='absolute inset-0 z-10 flex items-center justify-center px-6'>
            <div className='w-full max-w-[1000px]'>
              {/* Status */}
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
                  duration: PAGE_LOADER_ANIMATION.STATUS_DURATION,
                  delay: PAGE_LOADER_ANIMATION.STATUS_DELAY,
                  ease: PAGE_LOADER_EASE,
                }}
                className='mb-7 flex items-center gap-3 sm:mb-9'
              >
                <motion.span
                  className='h-1.5 w-1.5 rounded-full bg-violet-300'
                  animate={{
                    opacity: PAGE_LOADER_ANIMATION.STATUS_DOT_OPACITY,
                    scale: PAGE_LOADER_ANIMATION.STATUS_DOT_SCALE,
                  }}
                  transition={{
                    duration: PAGE_LOADER_ANIMATION.STATUS_DOT_DURATION,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <span className='text-[9px] uppercase tracking-[0.38em] text-white/30'>
                  Initializing experience
                </span>
              </motion.div>

              {/* Main Progress */}
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
                      duration: PAGE_LOADER_ANIMATION.MAIN_PROGRESS_DURATION,
                      delay: PAGE_LOADER_ANIMATION.MAIN_PROGRESS_DELAY,
                      ease: PAGE_LOADER_EASE,
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
                    duration: PAGE_LOADER_ANIMATION.SIDE_INFO_DURATION,
                    delay: PAGE_LOADER_ANIMATION.SIDE_INFO_DELAY,
                    ease: PAGE_LOADER_EASE,
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

              {/* Progress Line */}
              <div className='relative mt-7 h-px w-full overflow-visible bg-white/[0.08] sm:mt-9'>
                <motion.div
                  className='absolute inset-y-0 left-0 bg-white'
                  style={{
                    width: `${clampedProgress}%`,
                  }}
                />

                <motion.div
                  aria-hidden='true'
                  className='absolute inset-y-[-2px] left-0 bg-violet-300 blur-[4px]'
                  style={{
                    width: `${clampedProgress}%`,
                    opacity: PAGE_LOADER_ANIMATION.PROGRESS_GLOW_OPACITY,
                  }}
                />

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
                duration: PAGE_LOADER_ANIMATION.BOTTOM_INFO_DURATION,
                delay: PAGE_LOADER_ANIMATION.BOTTOM_INFO_DELAY,
              }}
            >
              <span className='text-[8px] uppercase tracking-[0.3em] text-white/15'>
                Selected work
              </span>
            </motion.div>

            <motion.span
              animate={{
                opacity: PAGE_LOADER_ANIMATION.BOTTOM_PULSE_OPACITY,
              }}
              transition={{
                duration: PAGE_LOADER_ANIMATION.BOTTOM_PULSE_DURATION,
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

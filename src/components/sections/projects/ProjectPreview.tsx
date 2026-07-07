'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import {
  CARD_ENTRANCE,
  CARD_HOVER,
  getFloatTransition,
} from './project.motion';
import {
  FEATURED_CARD_WIDTH,
  SIDE_CARD_WIDTH,
  FEATURED_IMAGE_HEIGHT,
  SIDE_IMAGE_HEIGHT,
} from './project.constants';
import { ProjectPlaneProps } from './project.type';
import WindowHeader from './WindowHeader';

export default function ProjectPlane({
  project,
  layout,
  index,
  onClick,
}: ProjectPlaneProps) {
  const { x, y, z, rotateX, rotateY, scale, opacity, blur, isCenter, zIndex } =
    layout;

  return (
    <motion.div
      custom={index}
      variants={CARD_ENTRANCE}
      initial='hidden'
      animate='visible'
      layout
      onClick={onClick}
      className='absolute'
      style={{
        left: '50%',
        top: '50%',
        translateX: `calc(-50% + ${x}px)`,
        translateY: `calc(-50% + ${y}px)`,
        translateZ: z,
        rotateX,
        rotateY,
        scale,
        opacity,
        zIndex,
        willChange: 'transform',
        filter: `blur(${blur}px)`,
        transformStyle: 'preserve-3d',
        cursor: isCenter ? 'default' : 'pointer',
      }}
    >
      {/* Floating */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={getFloatTransition(index)}
      >
        <motion.div
          whileHover={isCenter ? CARD_HOVER : undefined}
          transition={{
            duration: 0.35,
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className='group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] shadow-[0_40px_90px_rgba(0,0,0,.65)] transition-all duration-500'
            style={{
              width: isCenter ? FEATURED_CARD_WIDTH : SIDE_CARD_WIDTH,
            }}
          >
            {/* Top Highlight & Glow Ambient Effects */}

            <div className='absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />
            <div
              className={`absolute inset-0 z-10 rounded-[24px] bg-violet-500/[0.06] blur-[60px] transition-opacity duration-500 ${
                isCenter
                  ? 'opacity-60 group-hover:opacity-100'
                  : 'opacity-0 group-hover:opacity-40'
              }`}
            />

            {/* Mock Chrome Header Browser */}
            <WindowHeader title={project.title} />

            {/* Media Image Viewport Container */}
            <div
              className='relative overflow-hidden'
              style={{
                height: isCenter ? FEATURED_IMAGE_HEIGHT : SIDE_IMAGE_HEIGHT,
              }}
            >
              <motion.div
                className='h-full w-full'
                whileHover={
                  isCenter
                    ? {
                        scale: 1.04,
                      }
                    : undefined
                }
                transition={{
                  duration: 0.6,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={isCenter}
                  quality={95}
                  className='object-cover object-top'
                />
              </motion.div>

              <div className='absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/15 to-transparent' />

              {isCenter ? (
                <div className='absolute bottom-0 w-full p-6'>
                  {project.featured && (
                    <p className='mb-2 text-[10px] font-semibold uppercase tracking-[4px] text-violet-400'>
                      Featured Project
                    </p>
                  )}

                  <h2 className='text-2xl font-semibold text-white'>
                    {project.title}
                  </h2>

                  <p className='mt-2 max-w-md text-sm leading-relaxed text-white/45'>
                    {project.description}
                  </p>

                  <div className='mt-4 flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/45'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='mt-5 flex gap-3'>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/60 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white'
                      >
                        <Globe size={13} />
                        Live Demo
                      </a>
                    )}

                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/60 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white'
                      >
                        <ExternalLink size={13} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className='absolute bottom-0 w-full p-5'>
                  <h3 className='text-lg font-semibold text-white/70'>
                    {project.title}
                  </h3>

                  <p className='mt-1 line-clamp-2 text-sm text-white/35'>
                    {project.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

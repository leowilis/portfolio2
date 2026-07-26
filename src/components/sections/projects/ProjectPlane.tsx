'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import WindowHeader from './WindowHeader';
import FeaturedProjectContent from './FeaturedProjectContent';
import CompactProjectContent from './CompactProjectContent';
import type { ProjectPlaneProps } from './project.type';
import { cn } from '@/src/lib/utils';
import {
  FEATURED_CARD_WIDTH,
  FEATURED_IMAGE_HEIGHT,
  FLOAT_DISTANCE,
  IMAGE_HOVER_SCALE,
  SIDE_CARD_HOVER_SCALE,
  SIDE_CARD_HOVER_Y,
  SIDE_CARD_WIDTH,
  SIDE_IMAGE_HEIGHT,
  CENTER_CARD_SHADOW,
  SIDE_CARD_SHADOW,
} from './project.constants';
import {
  CARD_ENTRANCE,
  CARD_HOVER,
  getFloatTransition,
} from './project.motion';

export default function ProjectPlane({
  project,
  layout,
  index,
  onClick,
}: ProjectPlaneProps) {
  const { x, y, z, rotateX, rotateY, scale, blur, isCenter, zIndex } = layout;

  return (
    <motion.div
      custom={index}
      variants={CARD_ENTRANCE}
      initial='hidden'
      animate='visible'
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
        zIndex: zIndex + 10,
        filter: `blur(${blur}px)`,
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        cursor: isCenter ? 'default' : 'pointer',
      }}
    >
      <motion.div
        animate={{
          y: [0, -FLOAT_DISTANCE, 0],
        }}
        transition={getFloatTransition(index)}
      >
        <motion.div
          whileHover={
            isCenter
              ? CARD_HOVER
              : {
                  y: SIDE_CARD_HOVER_Y,
                  scale: SIDE_CARD_HOVER_SCALE,
                }
          }
          transition={{
            duration: 0.35,
          }}
          className='relative'
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className={cn(
              'group relative overflow-hidden rounded-[22px] border bg-surface transition-all duration-500',
              isCenter ? 'border-violet-500/40' : 'border-white/5',
            )}
            style={{
              width: isCenter ? FEATURED_CARD_WIDTH : SIDE_CARD_WIDTH,
              boxShadow: isCenter ? CENTER_CARD_SHADOW : SIDE_CARD_SHADOW,
            }}
          >
            {/* Top Shimmer */}
            <div className='absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />

            {/* Glow */}
            <div
              className={`absolute inset-0 rounded-[22px] bg-violet-500/10 blur-[90px] transition-opacity duration-500 ${
                isCenter
                  ? 'opacity-80 group-hover:opacity-100'
                  : 'opacity-0 group-hover:opacity-20'
              }`}
            />
            <WindowHeader title={project.title} />
            <div
              className='relative overflow-hidden'
              style={{
                height: isCenter ? FEATURED_IMAGE_HEIGHT : SIDE_IMAGE_HEIGHT,
              }}
            >
              <motion.div
                className='relative h-full w-full'
                whileHover={
                  isCenter
                    ? {
                        scale: IMAGE_HOVER_SCALE,
                      }
                    : {}
                }
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={isCenter}
                  quality={90}
                  sizes={isCenter ? '560px' : '480px'}
                  className='object-cover object-top'
                />
              </motion.div>
              <div className='absolute inset-0 bg-gradient-to-t from-surface/75 via-surface/20 to-transparent' />
              {isCenter ? (
                <FeaturedProjectContent project={project} />
              ) : (
                <CompactProjectContent project={project} />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

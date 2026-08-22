'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { KeyboardEvent } from 'react';
import { cn } from '@/src/lib/utils';
import WindowHeader from './WindowHeader';
import FeaturedProjectContent from './FeaturedProjectContent';
import CompactProjectContent from './CompactProjectContent';
import type { ProjectPlaneProps } from './project.type';
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
  PROJECT_CARD_Z_INDEX_OFFSET,
  PROJECT_CARD_HOVER_DURATION,
  PROJECT_IMAGE_QUALITY,
  FEATURED_IMAGE_SIZE,
  SIDE_IMAGE_SIZE,
  PROJECT_IMAGE_HOVER_EASE,
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

  const cardWidth = isCenter ? FEATURED_CARD_WIDTH : SIDE_CARD_WIDTH;
  const imageHeight = isCenter ? FEATURED_IMAGE_HEIGHT : SIDE_IMAGE_HEIGHT;
  const imageSize = isCenter ? FEATURED_IMAGE_SIZE : SIDE_IMAGE_SIZE;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isCenter && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <motion.div
      custom={index}
      variants={CARD_ENTRANCE}
      initial='hidden'
      animate='visible'
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={isCenter ? undefined : `View details for ${project.title}`}
      role={isCenter ? undefined : 'button'}
      tabIndex={isCenter ? -1 : 0}
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
        zIndex: zIndex + PROJECT_CARD_Z_INDEX_OFFSET,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        willChange: isCenter ? 'transform' : 'auto',
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
            duration: PROJECT_CARD_HOVER_DURATION,
          }}
          className='relative'
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className={cn(
              'group relative overflow-hidden rounded-[22px] border bg-surface',
              isCenter ? 'border-violet-500/40' : 'border-white/5',
            )}
            style={{
              width: cardWidth,
              boxShadow: isCenter ? CENTER_CARD_SHADOW : SIDE_CARD_SHADOW,
            }}
          >
            {/* Top Shimmer */}
            <div
              aria-hidden='true'
              className='absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'
            />

            {/* Glow */}
            <div
              aria-hidden='true'
              className={cn(
                'absolute inset-0 rounded-[22px] bg-violet-500/10 blur-[90px] transition-opacity duration-500',
                isCenter
                  ? 'opacity-80 group-hover:opacity-100'
                  : 'opacity-0 group-hover:opacity-20',
              )}
            />

            {/* Window Template */}
            <WindowHeader title={project.title} />

            <div
              className='relative overflow-hidden'
              style={{
                height: imageHeight,
              }}
            >
              <motion.div
                className='relative h-full w-full'
                whileHover={
                  isCenter
                    ? {
                        scale: IMAGE_HOVER_SCALE,
                      }
                    : undefined
                }
                transition={{
                  duration: PROJECT_CARD_HOVER_DURATION,
                  ease: PROJECT_IMAGE_HOVER_EASE,
                }}
              >
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  quality={PROJECT_IMAGE_QUALITY}
                  sizes={imageSize}
                  className='object-cover object-top'
                />
              </motion.div>

              <div
                aria-hidden='true'
                className='absolute inset-0 bg-gradient-to-t from-surface/75 via-surface/20 to-transparent'
              />

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

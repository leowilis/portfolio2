'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { KeyboardEvent } from 'react';

import { cn } from '@/src/lib/utils';

import CompactProjectContent from './CompactProjectContent';
import FeaturedProjectContent from './FeaturedProjectContent';
import WindowHeader from './WindowHeader';

import type { ProjectPlaneProps } from './project.type';

import {
  FEATURED_CARD_WIDTH,
  FEATURED_IMAGE_HEIGHT,
  FEATURED_IMAGE_SIZE,
  FLOAT_DISTANCE,
  IMAGE_HOVER_SCALE,
  PROJECT_CARD_HOVER_DURATION,
  PROJECT_CARD_Z_INDEX_OFFSET,
  PROJECT_IMAGE_HOVER_EASE,
  PROJECT_IMAGE_QUALITY,
  SIDE_CARD_HOVER_SCALE,
  SIDE_CARD_HOVER_Y,
  SIDE_CARD_WIDTH,
  SIDE_IMAGE_HEIGHT,
  SIDE_IMAGE_SIZE,
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
  const isVisible = isCenter || Math.abs(x) > 0;
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
      onClick={isVisible ? onClick : undefined}
      onKeyDown={isVisible ? handleKeyDown : undefined}
      aria-label={isCenter ? undefined : `View details for ${project.title}`}
      role={isCenter ? undefined : 'button'}
      tabIndex={isVisible && !isCenter ? 0 : -1}
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
        ...(blur > 0 && {
          filter: `blur(${blur}px)`,
        }),
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        cursor: isCenter ? 'default' : 'pointer',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <motion.div
        animate={
          isCenter
            ? {
                y: [0, -FLOAT_DISTANCE, 0],
              }
            : undefined
        }
        transition={isCenter ? getFloatTransition(index) : undefined}
        className='relative'
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Ambient Card Glow */}
        {isCenter && (
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -inset-20 -z-10 rounded-[50%] bg-[radial-gradient(ellipse_at_center, rgba(139,92,246,0.16)_0%, rgba(139,92,246,0.07)_32%, rgba(139,92,246,0.025)_52%, transparent_74%)] blur-2xl opacity-90'
          />
        )}

        <motion.div
          whileHover={
            !isVisible
              ? undefined
              : isCenter
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
          {/* Card */}
          <div
            className={cn(
              'group relative overflow-hidden rounded-[22px] border bg-transparent',
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
              className='pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'
            />
            {/* Window Header */}
            <WindowHeader title={project.title} />

            {/* Image */}
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

              {/* Image Overlay */}
              <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/75 via-surface/20 to-transparent'
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

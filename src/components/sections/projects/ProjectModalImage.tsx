'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  PROJECT_IMAGE_QUALITY,
  PROJECT_MODAL_CONTENT_EASE,
  PROJECT_MODAL_IMAGE_ENTER_DURATION,
  PROJECT_MODAL_IMAGE_INITIAL_SCALE,
  PROJECT_MODAL_IMAGE_OPACITY,
  PROJECT_MODAL_IMAGE_SCALE,
} from './project.constants';

interface ProjectModalImageProps {
  image: string;
  title: string;
}

export default function ProjectModalImage({
  image,
  title,
}: ProjectModalImageProps) {
  return (
    <motion.div
      initial={{
        scale: PROJECT_MODAL_IMAGE_INITIAL_SCALE,
        opacity: 0,
      }}
      animate={{
        scale: PROJECT_MODAL_IMAGE_SCALE,
        opacity: PROJECT_MODAL_IMAGE_OPACITY,
      }}
      transition={{
        duration: PROJECT_MODAL_IMAGE_ENTER_DURATION,
        ease: PROJECT_MODAL_CONTENT_EASE,
      }}
      className='overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-inner select-none'
    >
      <div className='relative h-[340px] w-full bg-neutral-950/20 sm:h-[400px] md:h-[420px]'>
        <Image
          src={image}
          alt={`Mockup screenshot for ${title}`}
          fill
          quality={PROJECT_IMAGE_QUALITY}
          sizes='(min-width: 1280px) 680px, (min-width: 1024px) 50vw, 100vw'
          className='object-contain object-center transition-transform duration-300'
        />
      </div>
    </motion.div>
  );
}

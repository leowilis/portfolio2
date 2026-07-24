'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  image: string;
  title: string;
}

export default function ProjectModalImage({ image, title }: Props) {
  return (
    <motion.div
      initial={{
        scale: 0.96,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className='overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 select-none shadow-inner'
    >
      <div className='relative h-[340px] sm:h-[400px] md:h-[420px] w-full bg-neutral-950/20'>
        <Image
          src={image}
          alt={`Mockup screenshot for ${title}`}
          fill
          priority
          quality={100}
          sizes='(min-width: 1280px) 680px, (min-width: 1024px) 50vw, 100vw'
          className='object-contain object-center transition-transform duration-300'
        />
      </div>
    </motion.div>
  );
}

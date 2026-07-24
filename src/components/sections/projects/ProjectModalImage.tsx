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
      }}
      className='overflow-hidden rounded-2xl border border-white/10 bg-neutral-950'
    >
      <div className='relative h-[420px] w-full'>
        <Image
          src={image}
          alt={title}
          fill
          priority
          quality={100}
          sizes='(min-width: 1024px) 50vw, 100vw'
          className='object-contain object-center'
        />
      </div>
    </motion.div>
  );
}

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
      className='relative overflow-hidden rounded-2xl'
    >
      <Image
        src={image}
        alt={title}
        width={900}
        height={600}
        className='h-full w-full object-cover'
      />
    </motion.div>
  );
}

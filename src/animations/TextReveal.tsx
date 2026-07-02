'use client';

import { motion, type Variants } from 'framer-motion';

type TextRevealProps = {
  children: string;
  className?: string;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const word: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export default function TextReveal({ children, className }: TextRevealProps) {
  const words = children.split(' ');

  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className={className}
    >
      {words.map((wordText, index) => (
        <motion.span
          key={`${wordText}-${index}`}
          variants={word}
          className='mr-[0.25em] inline-block'
        >
          {wordText}
        </motion.span>
      ))}
    </motion.div>
  );
}

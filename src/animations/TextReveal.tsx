'use client';

import { motion, type Variants } from 'framer-motion';
import type { ElementType } from 'react';

type Segment = {
  text: string;
  className?: string;
};

type TextRevealProps = {
  text: Segment[];
  className?: string;
  id?: string;
  as?: 'h1' | 'h2' | 'h3' | 'div' | 'span';
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
    y: 24,
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

export default function TextReveal({
  text,
  className,
  id,
  as = 'div',
}: TextRevealProps) {
  const MotionTag = motion[as] as ElementType;

  return (
    <MotionTag
      id={id}
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className={className}
    >
      {text.map((segment, segmentIndex) =>
        segment.text.split(' ').map((wordText, wordIndex) => (
          <motion.span
            key={`${segmentIndex}-${wordIndex}`}
            variants={word}
            className={`mr-[0.25em] inline-block ${segment.className ?? ''}`}
          >
            {wordText}
          </motion.span>
        )),
      )}
    </MotionTag>
  );
}

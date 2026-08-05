'use client';

import { motion } from 'framer-motion';
import {
  PARTICLES,
  PARTICLE_EASE,
  PARTICLE_INITIAL_OPACITY,
  PARTICLE_INITIAL_SCALE,
  PARTICLE_MOVE_X,
  PARTICLE_MOVE_Y,
  PARTICLE_OPACITY,
} from './particles.constants';

export default function HeroParticles() {
  return (
    <>
      {PARTICLES.map((particle, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: PARTICLE_INITIAL_OPACITY,
            scale: PARTICLE_INITIAL_SCALE,
          }}
          animate={{
            x: PARTICLE_MOVE_X,
            y: PARTICLE_MOVE_Y,
            opacity: PARTICLE_OPACITY,
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: PARTICLE_EASE,
          }}
          className='absolute rounded-full bg-violet-300'
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </>
  );
}

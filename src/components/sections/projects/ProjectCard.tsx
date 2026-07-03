'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import type { Project } from './project.data';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{
        y: -12,
        rotateY: 6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
      className='group relative h-[580px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl'
    >
      {/* Glow */}
      <div className='absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
        <div className='absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10' />
      </div>

      {/* Browser Bar */}
      <div className='flex items-center gap-2 border-b border-white/10 px-5 py-4'>
        <span className='h-3 w-3 rounded-full bg-red-400' />
        <span className='h-3 w-3 rounded-full bg-yellow-400' />
        <span className='h-3 w-3 rounded-full bg-green-400' />
      </div>

      {/* Preview */}
      <div className='relative h-72 overflow-hidden'>
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.5,
          }}
          className='h-full w-full'
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className='object-cover'
          />
        </motion.div>

        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent' />
      </div>

      {/* Content */}
      <div className='flex h-[calc(100%-352px)] flex-col p-6'>
        <h3 className='text-2xl font-semibold text-white'>{project.title}</h3>

        <p className='mt-3 text-sm leading-7 text-white/60'>
          {project.description}
        </p>

        <div className='mt-6 flex flex-wrap gap-2'>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className='rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='mt-auto flex gap-3 pt-8'>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:border-violet-500/50'
          >
            <Globe size={18} />
            Live Demo
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.demo}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-500'
          >
            <ExternalLink size={18} />
            Github
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

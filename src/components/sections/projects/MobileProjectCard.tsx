'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import WindowHeader from './WindowHeader';
import TechList from './TechList';
import ProjectLinks from './ProjectLinks';
import type { Project } from './project.type';

interface MobileProjectCardProps {
  project: Project;
  index: number;
}

export default function MobileProjectCard({
  project,
  index,
}: MobileProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className='overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] shadow-[0_20px_50px_rgba(0,0,0,.35)]'
    >
      <WindowHeader title={project.title} />

      {/* Image */}
      <div className='relative h-52 overflow-hidden'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={90}
          sizes="(max-width:768px) 100vw, 500px"
          className='object-cover object-top'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent' />
      </div>

      {/* Content */}
      <div className='p-5'>
        {project.featured && (
          <p className='mb-1 text-[10px] font-semibold uppercase tracking-[3px] text-violet-400'>
            Featured
          </p>
        )}
        <h3 className='text-lg font-semibold text-white'>{project.title}</h3>
        <p className='mt-2 text-sm leading-relaxed text-white/40'>
          {project.description}
        </p>

        <TechList technologies={project.technologies} />

        <ProjectLinks demo={project.demo} github={project.github} />
      </div>
    </motion.div>
  );
}

import {
  IconArrowUpRight,
  IconCertificate,
  IconCheck,
} from '@tabler/icons-react';
import type { EducationItem } from './education.data';

interface EducationCardProps {
  education: EducationItem;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <article className='group relative overflow-hidden rounded-2xl border border-[#1B2532] bg-[#0C1016] transition-colors duration-300 hover:border-[#2A3848]'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-70'
      />

      <div className='grid lg:grid-cols-[0.8fr_1.2fr]'>
        {/* Credential */}
        <div className='border-b border-[#1B2532] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12'>
          <div className='flex items-start justify-between gap-4'>
            <span className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#6F7B89]'>
              {education.category}
            </span>

            <span className='inline-flex shrink-0 items-center gap-2 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#22C55E]'>
              <span
                aria-hidden='true'
                className='size-1.5 rounded-full bg-[#22C55E]'
              />
              Completed
            </span>
          </div>

          <div
            aria-hidden='true'
            className='mt-16 flex size-16 items-center justify-center rounded-2xl border border-[#1D4ED8] bg-[#172554] text-[#60A5FA] transition-transform duration-300 group-hover:scale-[1.03]'
          >
            <IconCertificate size={28} stroke={1.5} />
          </div>

          <p className='mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[#60A5FA]'>
            {education.type}
          </p>

          <h3 className='mt-4 max-w-xs text-2xl font-semibold leading-tight tracking-tight text-[#F5F7FA] sm:text-3xl'>
            Certificate of Graduation
          </h3>

          <div className='mt-8 space-y-2 text-sm'>
            <div className='flex items-center justify-between gap-4 border-t border-[#1B2532] pt-4'>
              <span className='text-[#6F7B89]'>Institution</span>
              <span className='text-right font-medium text-[#A8B2BF]'>
                {education.institution}
              </span>
            </div>

            <div className='flex items-center justify-between gap-4'>
              <span className='text-[#6F7B89]'>Period</span>
              <span className='font-mono text-[#A8B2BF]'>
                {education.period}
              </span>
            </div>
          </div>

          {education.certificateUrl && (
            <a
              href={education.certificateUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='group/link mt-8 inline-flex items-center gap-3 rounded-full border border-[#1B2532] bg-[#111720] px-5 py-3 text-xs font-semibold text-[#A8B2BF] transition-colors duration-300 hover:border-[#1D4ED8] hover:bg-[#172554] hover:text-[#F5F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A]'
            >
              <span>View Certificate</span>

              <IconArrowUpRight
                size={16}
                stroke={1.7}
                className='transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5'
                aria-hidden='true'
              />
            </a>
          )}
        </div>

        {/* Program Details */}
        <div className='p-7 sm:p-10 lg:p-12'>
          <div className='flex items-start justify-between gap-6'>
            <span className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#6F7B89]'>
              Program
            </span>

            <span className='font-mono text-[10px] tracking-[0.16em] text-[#46515E]'>
              {education.id}
            </span>
          </div>

          <div className='mt-12 md:mt-16'>
            <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#60A5FA]'>
              Frontend Development
            </p>

            <h3 className='mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#F5F7FA] sm:text-4xl lg:text-5xl'>
              {education.title}
            </h3>

            <p className='mt-6 max-w-xl text-sm leading-7 text-[#A8B2BF] sm:text-base'>
              {education.description}
            </p>
          </div>

          {education.skills.length > 0 && (
            <div className='mt-10'>
              <div className='mb-4 flex items-center gap-3'>
                <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#6F7B89]'>
                  Focus
                </p>

                <span aria-hidden='true' className='h-px w-8 bg-[#1B2532]' />
              </div>

              <ul
                aria-label='Technical skills covered'
                className='flex flex-wrap gap-2'
              >
                {education.skills.map((skill) => (
                  <li
                    key={skill}
                    className='inline-flex items-center gap-2 rounded-full border border-[#1B2532] bg-[#111720] px-3.5 py-2 text-[10px] font-medium text-[#A8B2BF] transition-colors duration-300 hover:border-[#2A3848] hover:text-[#F5F7FA]'
                  >
                    <IconCheck
                      size={12}
                      stroke={1.8}
                      className='text-[#60A5FA]'
                      aria-hidden='true'
                    />

                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className='mt-10 flex items-center gap-3 border-t border-[#1B2532] pt-6'>
            <span
              aria-hidden='true'
              className='h-px w-8 bg-[#3B82F6]/50 transition-all duration-500 group-hover:w-14'
            />

            <span className='font-mono text-[9px] uppercase tracking-[0.2em] text-[#46515E]'>
              Frontend Development
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

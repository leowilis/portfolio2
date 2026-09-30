import type { SkillItem } from './skills.data';

type Props = {
  skill: SkillItem;
};

export default function SkillCard({ skill }: Props) {
  const Icon = skill.icon;

  return (
    <article className='group relative overflow-hidden rounded-2xl border border-[#1B2532] bg-[#0C1016] p-5 transition-colors duration-300 hover:border-[#2A3848] focus-within:border-[#2A3848]'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#3B82F6] transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100'
      />

      <div className='flex items-start justify-between gap-4'>
        <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#1B2532] bg-[#111720]'>
          <Icon
            size={21}
            className='text-[#A8B2BF] transition-colors duration-300 group-hover:text-[#60A5FA]'
            aria-hidden='true'
          />
        </div>

        <span className='pt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#46515E]'>
          {skill.category}
        </span>
      </div>

      <div className='mt-8'>
        <h3 className='text-lg font-semibold tracking-tight text-[#F5F7FA]'>
          {skill.name}
        </h3>

        <p className='mt-2 text-xs uppercase tracking-[0.16em] text-[#6F7B89]'>
          {skill.category}
        </p>
      </div>
    </article>
  );
}

interface Props {
  technologies: string[];
}

export default function TechList({ technologies }: Props) {
  return (
    <div className='mt-4 flex flex-wrap gap-2'>
      {technologies.map((tech) => (
        <span
          key={tech}
          className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/45'
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

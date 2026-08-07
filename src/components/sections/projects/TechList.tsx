interface Props {
  technologies: string[];
}

export default function TechList({ technologies }: Props) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <ul aria-label='Technologies used' className='flex flex-wrap gap-2'>
      {technologies.map((tech) => (
        <li
          key={tech}
          className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] select-none font-medium text-white/45'
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

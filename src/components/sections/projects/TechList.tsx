interface TechListProps {
  technologies: string[];
}

export default function TechList({ technologies }: TechListProps) {
  if (technologies.length === 0) {
    return null;
  }

  return (
    <ul aria-label='Technologies used' className='flex flex-wrap gap-2'>
      {technologies.map((technology) => (
        <li
          key={technology}
          className='rounded-full border border-border bg-background-subtle px-3 py-1.5 font-mono text-[11px] text-foreground-muted'
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}

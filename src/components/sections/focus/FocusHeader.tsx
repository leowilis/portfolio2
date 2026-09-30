export default function FocusHeader() {
  return (
    <div className='max-w-2xl'>
      <p className='font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#60A5FA]'>
        Focus
      </p>

      <h2
        id='focus-title'
        className='mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#F5F7FA] sm:text-4xl lg:text-5xl'
      >
        What I focus on
      </h2>

      <p className='mt-5 max-w-xl text-base leading-7 text-[#A8B2BF]'>
        The principles I keep in mind when building frontend experiences, from
        performance and architecture to the details that shape the user
        experience.
      </p>
    </div>
  );
}

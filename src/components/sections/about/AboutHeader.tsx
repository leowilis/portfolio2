export default function AboutHeader() {
  return (
    <div className='mb-16 flex flex-col items-center text-center'>
      <p className='mb-3 text-xs font-bold uppercase tracking-[4px] text-white/40'>
        About Me
      </p>

      <h2 className='text-3xl font-semibold tracking-tight text-white md:text-4xl'>
        Passionate about building{' '}
        <span className='text-violet-400'>great products.</span>
      </h2>

      <div className='mt-4 h-px w-10 bg-violet-500/40' />
    </div>
  );
}

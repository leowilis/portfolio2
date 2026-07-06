interface Props {
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function ProjectModalNavigation({
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: Props) {
  return (
    <div className='mt-8 flex justify-between'>
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className='rounded-lg border border-white/10 px-4 py-2 text-sm transition disabled:opacity-30'
      >
        ← Previous
      </button>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className='rounded-lg border border-white/10 px-4 py-2 text-sm transition disabled:opacity-30'
      >
        Next →
      </button>
    </div>
  );
}

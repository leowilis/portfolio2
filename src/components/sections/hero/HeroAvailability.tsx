export default function HeroAvailability() {
  return (
    <div className="mt-10 flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-4 py-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
      </span>

      <span className="text-sm font-semibold text-violet-300/80">
        Available for work
      </span>
    </div>
  );
}
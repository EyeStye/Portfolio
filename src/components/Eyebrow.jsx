export default function Eyebrow({ children, index }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {index && (
        <span className="font-mono text-xs tracking-[0.2em] text-[var(--color-gold)]">
          {index}
        </span>
      )}
      <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-grey-500)]">
        {children}
      </span>
      <span className="h-px flex-1 bg-[var(--color-line)]" />
    </div>
  );
}

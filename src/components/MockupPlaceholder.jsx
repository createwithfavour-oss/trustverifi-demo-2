export default function MockupPlaceholder({ label, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-dashed border-border-hover bg-bg-secondary text-text-muted text-sm font-sans px-5 py-10 ${className}`}
    >
      {label}
    </div>
  )
}

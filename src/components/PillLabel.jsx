export default function PillLabel({ children }) {
  return (
    <span className="inline-block rounded-full bg-brand-accent-bg text-brand-accent px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide">
      {children}
    </span>
  )
}

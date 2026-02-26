import { useEffect, useRef, useState } from 'react'
import MockupPlaceholder from './MockupPlaceholder'

function AnimatedScore({ target }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 1200
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.unobserve(node)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{value}</span>
}

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-bg-primary">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 text-center">
        <h1
          className="font-serif text-brand-dark leading-[1.15] max-w-[800px] mx-auto"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          Your work speaks for itself.
          <br />
          Now your proof can too.
        </h1>
        <p className="text-text-secondary text-[17px] leading-relaxed max-w-[600px] mx-auto mt-6">
          TrustVerifi brings your verified identity, real client feedback, and confirmed work history into one trust
          profile. Share it in proposals, on LinkedIn, or anywhere clients are deciding whether to hire you.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-brand-dark text-text-on-accent text-[15px] font-medium px-7 py-3 hover:scale-[1.02] hover:bg-brand-dark/90 transition-all no-underline"
          >
            Start for free
          </a>
        </div>

        {/* Hero mockup */}
        <div className="mt-14 max-w-[800px] mx-auto">
          <div className="rounded-2xl border border-border-light bg-bg-card p-6 md:p-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
            {/* Mini trust profile preview */}
            <div className="flex flex-col md:flex-row gap-6 items-start text-left">
              {/* Left column */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center text-text-muted text-sm">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-[15px]">Jordan Daniels</p>
                    <p className="text-text-muted text-[13px]">Paid Media Consultant</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent-bg text-brand-accent text-xs font-medium px-2.5 py-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Identity Verified
                  </span>
                </div>
                <div className="bg-bg-secondary rounded-lg p-4">
                  <p className="text-[13px] text-text-muted mb-1">Latest Review Snippet</p>
                  <p className="text-[14px] text-text-primary leading-relaxed">
                    "Lead volume increased by 60%. Average ROI of 3.8x across both channels."
                  </p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="text-xs bg-bg-card border border-border-light rounded-full px-2.5 py-0.5 text-text-secondary">
                      +60% leads
                    </span>
                    <span className="text-xs bg-bg-card border border-border-light rounded-full px-2.5 py-0.5 text-text-secondary">
                      3.8x ROI
                    </span>
                  </div>
                </div>
              </div>

              {/* Right column — trust score */}
              <div className="w-full md:w-52 shrink-0 bg-bg-secondary rounded-xl p-5 text-center">
                <p className="text-[13px] text-text-muted mb-2">Trust Score</p>
                <p className="font-mono text-4xl font-medium text-brand-primary leading-none">
                  <AnimatedScore target={87} />
                </p>
                <div className="mt-4 space-y-2.5 text-left">
                  {[
                    { label: 'Identity', pct: 95 },
                    { label: 'Reviews', pct: 82 },
                    { label: 'Relationships', pct: 88 },
                  ].map((c) => (
                    <div key={c.label}>
                      <div className="flex justify-between text-[12px] text-text-muted mb-0.5">
                        <span>{c.label}</span>
                        <span>{c.pct}</span>
                      </div>
                      <div className="h-1.5 bg-border-light rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-accent rounded-full transition-all duration-700"
                          style={{ width: `${c.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 text-[12px] font-medium rounded-md bg-brand-dark text-text-on-accent py-1.5 border-none cursor-pointer">
                    Hire
                  </button>
                  <button className="flex-1 text-[12px] font-medium rounded-md bg-transparent border border-brand-dark text-brand-dark py-1.5 cursor-pointer">
                    Shortlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { ShieldCheck, X, Check } from 'lucide-react'

export default function Comparison() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="fade-in-section py-20 md:py-24 border-t border-border-light">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeading
          pill="The difference"
          heading="Same project. Same happy client. Different proof."
          supporting="One of these gets someone hired. The other sits in a drawer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {/* Left — typical review */}
          <div className="rounded-2xl border border-border-light bg-bg-card p-6 md:p-8">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-text-muted mb-4">
              Typical Platform Review
            </span>
            <div className="text-amber-400 text-lg mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="text-text-secondary text-[15px] leading-relaxed italic mb-6">
              "Thank you for your hard work. Your work helped our product start off well. Highly recommended!"
            </p>
            <p className="text-[13px] text-text-muted font-medium mb-3">What a prospect actually learns:</p>
            <ul className="space-y-2">
              {['What was delivered', 'Specific results', 'Timeline or scope', 'Whether to hire them'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px] text-text-muted">
                  <X className="w-4 h-4 text-error shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — TrustVerifi review */}
          <div className="rounded-2xl border-2 border-brand-accent/30 bg-bg-cta p-6 md:p-8 relative">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-accent">
                TrustVerifi Verified Review
              </span>
            </div>

            <div className="mb-4">
              <p className="text-[14px] font-semibold text-brand-dark">Paid Acquisition Campaigns</p>
              <p className="text-[13px] text-text-muted">4 months &middot; Verified client identity</p>
            </div>

            <div className="space-y-4 mb-5">
              {[
                {
                  q: 'What did they deliver?',
                  a: 'Full management of Facebook and Google ad campaigns. Creative, targeting, budget optimization, weekly reporting.',
                },
                {
                  q: 'What results did you see?',
                  a: 'Lead volume increased by 60%. Average ROI of 3.8x across both channels. Cost per lead dropped from $47 to $19.',
                },
                {
                  q: 'Would you hire them again?',
                  a: 'Already renewed twice. Currently managing our Q2 campaigns.',
                },
              ].map((item) => (
                <div key={item.q}>
                  <p className="text-[13px] font-semibold text-brand-dark mb-0.5">Q: {item.q}</p>
                  <p className="text-[14px] text-text-secondary leading-relaxed">A: {item.a}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {['+60% leads', '3.8x ROI', '$47→$19 CPL'].map((m) => (
                <span
                  key={m}
                  className="text-[12px] font-medium bg-bg-card border border-border-light rounded-full px-3 py-1 text-text-secondary"
                >
                  {m}
                </span>
              ))}
            </div>

            <p className="text-[13px] text-text-muted font-medium mb-3">What a prospect learns:</p>
            <ul className="space-y-2">
              {[
                'Exactly what was delivered',
                'Verified, specific results',
                'Timeline and scope',
                'Enough to make a hiring decision',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px] text-brand-dark">
                  <Check className="w-4 h-4 text-success shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Below cards */}
        <div className="text-center mt-10">
          <p className="text-text-secondary text-[17px] mb-6">
            This is the difference between a testimonial and verified proof.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-brand-dark text-text-on-accent text-[15px] font-medium px-7 py-3 hover:scale-[1.02] hover:bg-brand-dark/90 transition-all no-underline"
          >
            Start for free &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}

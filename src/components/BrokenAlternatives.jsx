import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'

const cards = [
  {
    emoji: '⭐',
    label: 'Platform ratings',
    quote: '"I have 100% job success and top rating... still getting ghosted on proposals."',
  },
  {
    emoji: '🔒',
    label: 'Marketplace lock-in',
    quote: '"If you start over, you lose every review you worked hard for."',
  },
  {
    emoji: '💸',
    label: 'Pay-to-play directories',
    quote: "\"It's 100% pay to play. Your agency won't even show up unless you pay.\"",
  },
  {
    emoji: '🤷',
    label: 'Asking clients for reviews',
    quote: "\"Time after time, I'd deliver a project, get a 'thank you' and... that was it.\"",
  },
]

export default function BrokenAlternatives() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="fade-in-section py-20 md:py-24 border-t border-border-light">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeading
          pill="Sound familiar?"
          heading="The tools that were supposed to help aren't helping"
          supporting="These are real quotes from freelancers and agency owners in professional communities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] mx-auto stagger-children">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-bg-card rounded-2xl border border-border-light p-6 transition-all hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="text-2xl mb-3">{c.emoji}</div>
              <p className="text-[13px] font-semibold text-text-muted uppercase tracking-wide mb-2">{c.label}</p>
              <p className="text-[15px] text-text-secondary leading-relaxed italic">{c.quote}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-text-secondary text-[15px] leading-relaxed max-w-xl mx-auto mt-10">
          TrustVerifi doesn't work like any of these. You own your proof. You control where it goes. Nobody can
          paywall it, delete it, or trap it behind a platform you're leaving.
        </p>
      </div>
    </section>
  )
}

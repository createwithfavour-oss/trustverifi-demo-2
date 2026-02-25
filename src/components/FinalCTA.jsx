import { useScrollReveal } from '../hooks/useScrollReveal'
import PillLabel from './PillLabel'

export default function FinalCTA() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="fade-in-section py-20 md:py-24">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div className="bg-bg-cta rounded-2xl px-8 py-16 md:px-16 md:py-20 text-center">
          <PillLabel>Get started</PillLabel>
          <h2
            className="font-serif text-brand-dark mt-5 leading-[1.2]"
            style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
          >
            Your proof should be as good as your work
          </h2>
          <p className="text-text-secondary text-[17px] mt-4 max-w-md mx-auto leading-relaxed">
            Set up your trust profile in minutes. Start free. No credit card.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-brand-dark text-text-on-accent text-[15px] font-medium px-7 py-3 hover:scale-[1.02] hover:bg-brand-dark/90 transition-all no-underline"
            >
              Start for free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { Shield, Lock, Globe } from 'lucide-react'

export default function SocialProofStats() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="fade-in-section py-20 md:py-24 bg-bg-secondary">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeading
          pill="By the numbers"
          heading="Professionals are already building verified proof"
        />

        {/* Trust signals fallback (no real stats yet) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {[
            { icon: Shield, text: 'Verification powered by ComplyCube' },
            { icon: Lock, text: 'Your data is encrypted and secure' },
            { icon: Globe, text: 'Built for professionals everywhere' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-brand-accent-bg flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-accent" />
              </div>
              <p className="text-[15px] text-text-secondary leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

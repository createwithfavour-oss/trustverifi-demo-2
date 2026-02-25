import { useScrollReveal } from '../hooks/useScrollReveal'
import { Shield, Lock, Globe } from 'lucide-react'

export default function SocialProofBar() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="fade-in-section py-12 border-t border-border-light">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 text-center">
          <div className="flex items-center gap-2.5 text-text-muted text-[14px]">
            <Shield className="w-4.5 h-4.5 text-brand-accent" />
            <span>Verification powered by ComplyCube</span>
          </div>
          <div className="flex items-center gap-2.5 text-text-muted text-[14px]">
            <Lock className="w-4.5 h-4.5 text-brand-accent" />
            <span>Your data is encrypted and secure</span>
          </div>
          <div className="flex items-center gap-2.5 text-text-muted text-[14px]">
            <Globe className="w-4.5 h-4.5 text-brand-accent" />
            <span>Built for professionals everywhere</span>
          </div>
        </div>
      </div>
    </section>
  )
}

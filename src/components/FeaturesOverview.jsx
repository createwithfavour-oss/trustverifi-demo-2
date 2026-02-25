import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import MockupPlaceholder from './MockupPlaceholder'
import { MessageSquareText, ShieldCheck, Share2 } from 'lucide-react'

const features = [
  {
    icon: MessageSquareText,
    title: 'Reviews with real deliverables and results',
    description:
      "Most reviews are useless. \"Great to work with\" tells a prospect nothing. TrustVerifi flips the process. You define the questions your client answers. What did we deliver? What results did you see? Would you hire us again? Your client fills in the specifics. You get a review with real numbers, real deliverables, and real context. Not a generic blurb.",
    mockupLabel: 'Mockup: Structured review with Q&A format, metrics, and verified badge',
  },
  {
    icon: ShieldCheck,
    title: 'A trust score that shows its work',
    description:
      "Your trust score isn't a mystery number. It's built from visible, checkable components. Verified identity. Confirmed work relationships. Authenticated reviews. Sentiment analysis. Anyone viewing your profile can see exactly how the score was calculated and what each component contributed. No black box. No pay-to-play manipulation.",
    mockupLabel: 'Mockup: Trust score breakdown with component bars and methodology',
  },
  {
    icon: Share2,
    title: 'One profile that works everywhere',
    description:
      "Your TrustVerifi profile isn't locked inside a marketplace you can't control. Share it with a link in your proposals. Embed a widget on your website. Add your Digital Trust ID to your email signature. Drop it into a LinkedIn post. When a prospect clicks, they land on a verification page that shows your score, your reviews, your verification status, and a confidence indicator. Your proof goes wherever you go.",
    mockupLabel: 'Mockup: Public trust profile page with shareable link and embed preview',
  },
]

export default function FeaturesOverview() {
  const [active, setActive] = useState(0)
  const ref = useScrollReveal()

  return (
    <section id="features" ref={ref} className="fade-in-section py-20 md:py-24 border-t border-border-light">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeading
          pill="How it works"
          heading="Everything a prospect needs to trust you. One profile."
          supporting="TrustVerifi connects four layers of verification into a single trust profile that any prospect can check."
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          {/* Left — feature tabs */}
          <div className="lg:w-[380px] shrink-0 flex flex-col gap-2">
            {features.map((f, i) => {
              const Icon = f.icon
              const isActive = i === active
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-start gap-3.5 text-left rounded-xl p-4 border transition-all cursor-pointer bg-transparent ${
                    isActive
                      ? 'border-brand-accent bg-brand-accent-bg/50 shadow-[0_1px_6px_rgba(0,0,0,0.03)]'
                      : 'border-transparent hover:border-border-light hover:bg-bg-card'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mt-0.5 shrink-0 ${isActive ? 'text-brand-accent' : 'text-text-muted'}`}
                  />
                  <div>
                    <p
                      className={`text-[15px] font-semibold leading-snug ${
                        isActive ? 'text-brand-dark' : 'text-text-primary'
                      }`}
                    >
                      {f.title}
                    </p>
                    {isActive && (
                      <p className="text-[14px] text-text-secondary mt-2 leading-relaxed">{f.description}</p>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right — mockup */}
          <div className="flex-1 min-w-0">
            <MockupPlaceholder
              label={features[active].mockupLabel}
              className="h-full min-h-[300px] lg:min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'

const steps = [
  {
    num: 1,
    title: 'Send a structured review request',
    description:
      "Pick a recent client. Add the project context. Choose the questions you want them to answer. We've got templates to get you started.",
    time: '~3 min',
  },
  {
    num: 2,
    title: 'Your client fills it in',
    description:
      'They get a clean, guided form. No account needed on their end. They answer your questions with specifics and submit.',
    time: '~5 min for them',
  },
  {
    num: 3,
    title: 'Your trust profile goes live',
    description:
      'The review lands on your profile with real metrics. Your trust score starts calculating. Share your profile link in your next proposal.',
    time: 'Instant',
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section id="how-it-works" ref={ref} className="fade-in-section py-20 md:py-24 border-t border-border-light">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeading
          pill="Getting started"
          heading="From zero to shareable proof in minutes"
          supporting="You don't need to build out your full profile first. Start with one review request and your trust profile starts building itself."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(33.333%_-_12px)] right-[calc(33.333%_-_12px)] border-t-2 border-dashed border-border-light z-0" />

          {steps.map((s) => (
            <div key={s.num} className="relative z-10 text-center">
              <div className="w-10 h-10 rounded-full bg-brand-accent text-text-on-accent flex items-center justify-center mx-auto text-[15px] font-semibold mb-5">
                {s.num}
              </div>
              <h3 className="text-[17px] font-semibold text-brand-dark mb-2">{s.title}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-4">{s.description}</p>
              <span className="inline-block text-[12px] font-medium bg-brand-accent-bg text-brand-accent rounded-full px-3 py-1">
                {s.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

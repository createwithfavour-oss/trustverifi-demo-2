import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'

const content = {
  individual: {
    subheading: 'For freelancers and independent professionals',
    description:
      "You sell your expertise directly to clients. Sometimes the deal comes down to who has more visible proof. You've asked for testimonials and gotten ghosted, or gotten something so generic you can't use it. Your best work is invisible because nobody wrote down the numbers.",
    bullets: [
      "Your Upwork reviews don't follow you when you go direct",
      "Clients say \"just tell me what to write\" when you ask for a testimonial",
      'You grew their revenue 40% but the review says "pleasure to work with"',
    ],
    quote:
      "\"Just remember, you're starting from zero on Upwork, no matter how good you are.\"",
    quoteSource: '— r/Upwork',
    cta: 'Build your trust profile',
  },
  business: {
    subheading: 'For agencies and service businesses',
    description:
      "Your reputation is scattered across Clutch, Google, client conversations, and a case studies page you haven't updated in six months. Collecting proof from clients feels like pulling teeth. The directories that used to send you leads are now charging more for less.",
    bullets: [
      'Clutch charges $1,500/month and the lead quality keeps dropping',
      "You can't get a Google Business Profile because your team is fully remote",
      'Every new case study takes weeks and is outdated by the time it ships',
    ],
    quote:
      "\"It's 100% pay to play. Your agency won't even show up in search unless you pay.\"",
    quoteSource: '— r/PPC',
    cta: 'Start building verified proof',
  },
}

export default function WhoItsFor() {
  const [tab, setTab] = useState('individual')
  const ref = useScrollReveal()
  const data = content[tab]

  return (
    <section ref={ref} className="fade-in-section py-20 md:py-24 bg-bg-secondary">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeading
          pill="Built for"
          heading="Whether you're solo or running a team, your proof should work for you"
        />

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-border-light bg-bg-card p-1">
            {['individual', 'business'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2 text-[14px] font-medium transition-all cursor-pointer border-none ${
                  tab === t ? 'bg-brand-accent-bg text-brand-dark' : 'bg-transparent text-text-muted hover:text-text-primary'
                }`}
                role="tab"
                aria-selected={tab === t}
              >
                {t === 'individual' ? 'Individual' : 'Business'}
              </button>
            ))}
          </div>
        </div>

        {/* Content card */}
        <div className="max-w-[700px] mx-auto bg-bg-card rounded-2xl border border-border-light p-8 md:p-10 transition-all">
          <h3 className="text-[20px] font-semibold text-brand-dark mb-3">{data.subheading}</h3>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-6">{data.description}</p>

          <ul className="space-y-3 mb-6">
            {data.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-text-primary leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <blockquote className="border-l-2 border-brand-accent pl-4 mb-6">
            <p className="text-[15px] text-text-secondary italic leading-relaxed">{data.quote}</p>
            <p className="text-[13px] text-text-muted mt-1">{data.quoteSource}</p>
          </blockquote>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-brand-dark text-text-on-accent text-[15px] font-medium px-6 py-2.5 hover:scale-[1.02] hover:bg-brand-dark/90 transition-all no-underline"
          >
            {data.cta} &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}

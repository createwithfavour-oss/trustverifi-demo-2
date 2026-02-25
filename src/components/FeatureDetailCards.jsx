import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import {
  MessageSquareText,
  ShieldCheck,
  BarChart3,
  QrCode,
  UserCircle,
  Bell,
  Code2,
  UserPlus,
} from 'lucide-react'

const cards = [
  {
    icon: MessageSquareText,
    title: 'Structured Review Questions',
    description:
      'You choose the questions. Your client answers with real deliverables, metrics, and outcomes. No more guessing what to write.',
  },
  {
    icon: ShieldCheck,
    title: 'Identity Verification',
    description:
      "Verified through ComplyCube. A \"Verified\" badge appears on your public profile so prospects know you're a real person, not a bot.",
  },
  {
    icon: BarChart3,
    title: 'Trust Score',
    description:
      'A composite score built from verified components. Every piece of the methodology is visible to anyone checking your profile.',
  },
  {
    icon: QrCode,
    title: 'Digital Trust ID',
    description:
      'QR-scannable, tamper-proof, shareable. Hand it out on a business card. Embed it in an email. It links to your full verification page.',
  },
  {
    icon: UserCircle,
    title: 'Public Trust Profile',
    description:
      'One link with everything a prospect needs. Your score, your reviews, your verification status. Updated in real time as you collect more proof.',
  },
  {
    icon: Bell,
    title: 'Automated Reminders',
    description:
      "Clients forget. TrustVerifi sends gentle nudges so your review request doesn't die in someone's inbox.",
  },
  {
    icon: Code2,
    title: 'Embed Widgets',
    description:
      'Add your trust profile to your website, your proposals, or your email signature. It pulls live data from your profile.',
  },
  {
    icon: UserPlus,
    title: 'Hire / Shortlist',
    description:
      'Prospects viewing your profile can signal intent directly. Both sides get notified. Fewer cold emails, more warm conversations.',
  },
]

export default function FeatureDetailCards() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="fade-in-section py-20 md:py-24 bg-bg-secondary">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <SectionHeading
          pill="Features"
          heading="Everything you need to turn great work into verifiable proof"
          supporting="From your first review request to a fully verified trust profile. Here's what's inside."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={i}
                className="bg-bg-card rounded-2xl border border-border-light p-6 transition-all hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent-bg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-[16px] font-semibold text-brand-primary mb-2 leading-snug">{c.title}</h3>
                <p className="text-[14px] text-text-secondary leading-relaxed">{c.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

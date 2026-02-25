import { CheckCircle } from 'lucide-react'

export default function Footer() {
  const links = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#' },
    { label: 'Terms and Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ]

  return (
    <footer className="bg-bg-footer border-t border-border-light">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left */}
          <div>
            <a href="#" className="flex items-center gap-2 text-brand-dark font-semibold text-lg no-underline mb-3">
              <CheckCircle className="w-5 h-5 text-brand-accent" strokeWidth={2.5} />
              <span>TrustVerifi</span>
            </a>
            <p className="text-text-muted text-[14px] mb-4">The trust layer for the internet</p>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center text-text-muted hover:text-brand-accent transition-colors no-underline"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* X/Twitter */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center text-text-muted hover:text-brand-accent transition-colors no-underline"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — links */}
          <div>
            <ul className="list-none flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[14px] text-text-muted hover:text-brand-accent transition-colors no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border-light">
          <p className="text-[13px] text-text-muted">&copy; 2026 TrustVerifi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import { useState, useEffect } from 'react'
import { Menu, X, CheckCircle } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-light'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-brand-dark font-semibold text-lg no-underline">
          <CheckCircle className="w-6 h-6 text-brand-accent" strokeWidth={2.5} />
          <span>TrustVerifi</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-brand-dark hover:text-brand-accent transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-[15px] text-brand-dark hover:text-brand-accent transition-colors no-underline">
            Log In
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-brand-dark text-text-on-accent text-[15px] font-medium px-5 py-2.5 hover:scale-[1.02] hover:bg-brand-dark/90 transition-all no-underline"
          >
            Start for free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-dark bg-transparent border-none p-1 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary border-t border-border-light px-5 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-brand-dark no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <hr className="border-border-light" />
          <a href="#" className="text-[15px] text-brand-dark no-underline">
            Log In
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-brand-dark text-text-on-accent text-[15px] font-medium px-5 py-2.5 no-underline text-center"
          >
            Start for free
          </a>
        </div>
      )}
    </nav>
  )
}

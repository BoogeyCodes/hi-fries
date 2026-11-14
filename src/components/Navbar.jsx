import { useState } from 'react'
import Logo from './Logo.jsx'
import { brand } from '../data/menu.js'

const links = [
  { href: '#deals', label: 'Deals' },
  { href: '#menu', label: 'Menu' },
  { href: '#burgers', label: 'Burgers' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-hf-orange/20 bg-hf-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-[max(18px,env(safe-area-inset-left))] py-2.5">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-12 w-12 flex-none place-items-center rounded-full border-2 border-hf-orange bg-[radial-gradient(circle_at_35%_30%,#2a2013,#0d0a06)] shadow-[0_0_22px_-4px_rgba(255,126,26,.75)]">
            <Logo size={26} />
          </span>
          <span className="leading-none">
            <span className="block font-script text-xl text-hf-honey">Hi Fries</span>
            <span className="mt-0.5 block text-[0.56rem] font-bold uppercase tracking-[0.22em] text-hf-muted">
              More Than Fries
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1.5 text-sm font-bold uppercase tracking-wide text-hf-cream transition hover:text-hf-honey"
            >
              {l.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-hf-honey to-hf-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="relative hidden items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-hf-honey to-hf-orange px-5 py-2.5 font-display text-sm uppercase tracking-wide text-hf-bg shadow-lg shadow-hf-orange/50 sm:inline-flex"
          >
            <span className="hf-sheen" />
            📞 Order Now
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-hf-orange/30 text-hf-honey md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-hf-orange/15 bg-hf-bg px-5 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 font-semibold uppercase tracking-wide text-hf-cream transition hover:bg-white/5 hover:text-hf-honey"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${brand.uanRaw}`}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-hf-honey to-hf-orange px-5 py-2.5 font-display uppercase tracking-wide text-hf-bg"
          >
            📞 UAN {brand.uan}
          </a>
        </nav>
      )}
    </header>
  )
}

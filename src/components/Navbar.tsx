import { useState } from "react"
import { navLinks, profile } from "../data/portfolio"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neon-cyan/20 bg-void/90 backdrop-blur-sm transition-all duration-500">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#"
          className="group flex items-center gap-2 font-display text-sm font-bold tracking-[0.2em] text-white transition-all duration-500 hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        >
          <img
            src={profile.photo}
            alt=""
            className="h-8 w-8 border border-neon-cyan/30 object-cover transition-all duration-500 group-hover:border-neon-pink/50 group-hover:shadow-[0_0_12px_rgba(255,42,109,0.4)]"
          />
          <span className="neon-cyan">{profile.initials}</span>
          <span className="text-neon-pink">.DEV</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link px-3 py-2 font-sans text-xs uppercase tracking-widest text-zinc-500 hover:text-neon-cyan">
                [{link.label}]
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="cyber-btn hidden text-[10px] md:inline-flex">
          INIT_CONTACT
        </a>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center border border-neon-pink/40 text-neon-pink transition-all duration-500 hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(255,42,109,0.3)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "[X]" : "[=]"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neon-cyan/20 bg-panel px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-sans text-xs uppercase tracking-widest text-neon-cyan transition-all duration-500 hover:translate-x-2"
                  onClick={() => setOpen(false)}
                >
                  &gt; {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="cyber-btn text-[10px]" onClick={() => setOpen(false)}>
                INIT_CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

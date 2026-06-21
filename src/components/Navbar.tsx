import { useState } from "react"
import { navLinks, profile } from "../data/portfolio"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, typography, motion, semantic } = useDesign()

  return (
    <header className={cn(theme.nav, motion.transition)}>
      <nav className={cn("mx-auto flex max-w-6xl items-center justify-between px-6 py-3")}>
        <a
          href="#"
          className={cn(
            typography.fontDisplay,
            "group flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-heading",
            motion.transition,
          )}
        >
          <img
            src={profile.photo}
            alt=""
            className={cn(
              "h-8 w-8 border border-primary/30 object-cover",
              motion.transition,
              "group-hover:border-accent/50",
            )}
          />
          <span className={semantic.primary}>{profile.initials}</span>
          <span className={semantic.accent}>.DEV</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={theme.navLink}>
                [{link.label}]
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#contact" className={cn(theme.btnPrimary, "text-[10px]")}>
            INIT_CONTACT
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "flex h-9 w-9 items-center justify-center border border-accent/40 text-accent md:hidden",
            motion.transition,
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "[X]" : "[=]"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-primary/20 bg-panel px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(typography.fontBody, "block text-xs uppercase tracking-widest text-primary", motion.transition, "hover:translate-x-2")}
                  onClick={() => setOpen(false)}
                >
                  &gt; {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className={cn(theme.btnPrimary, "text-[10px]")} onClick={() => setOpen(false)}>
                INIT_CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

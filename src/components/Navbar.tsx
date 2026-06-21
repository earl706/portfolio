import { useState } from "react"
import { navLinks, profile } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import ColorModeToggle from "./ColorModeToggle"
import { BtnPrimary } from "./ui/Themed"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { classes: t, openPicker, colorMode, setColorMode } = useTheme()

  return (
    <header className={t.header}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className={t.logo}>
          <img
            src={profile.photo}
            alt=""
            className={`h-8 w-8 object-cover ${t.iconHover}`}
          />
          <span className={t.logoAccent}>{profile.initials}</span>
          <span className={t.logoDot}>.DEV</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={t.navLink}>
                {t.textTransform === "uppercase" ? `[${link.label}]` : link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden h-9 items-center gap-2 md:flex">
          <ColorModeToggle mode={colorMode} onChange={setColorMode} />
          <button
            type="button"
            onClick={openPicker}
            className={`${t.settingsBtn} cursor-pointer`}
            aria-label="Change theme"
            title="Change theme"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </button>
          <BtnPrimary href="#contact" className="text-[10px] md:text-xs">
            {t.textTransform === "uppercase" ? "INIT_CONTACT" : "Contact"}
          </BtnPrimary>
        </div>

        <button
          type="button"
          className={`${t.settingsBtn} cursor-pointer md:hidden`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className={`border-t px-6 py-4 md:hidden ${t.sectionAlt}`}>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={t.navMobile} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ColorModeToggle mode={colorMode} onChange={setColorMode} className="w-fit" />
            </li>
            <li>
              <button type="button" onClick={openPicker} className={`${t.navMobile} cursor-pointer`}>
                Change Theme
              </button>
            </li>
            <li>
              <BtnPrimary href="#contact" className="text-[10px]" onClick={() => setOpen(false)}>
                Contact
              </BtnPrimary>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

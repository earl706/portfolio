import type { ReactNode } from "react"
import { profile, socialLinks } from "../data/portfolio"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"

const icons: Record<string, ReactNode> = {
  github: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
}

const inputClass =
  "cyber-input w-full border border-neon-cyan/20 bg-black px-4 py-3 font-sans text-sm text-neon-cyan placeholder:text-zinc-700 outline-none"

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="up">
          <SectionHeader
            label="CONTACT"
            title="OPEN CHANNEL"
            description="Transmit a message. Uplink response expected within 24 hours."
            icon="mail"
          />
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal variant="left" delay={100}>
            <form className="cyber-panel space-y-5 p-8" onSubmit={(e) => e.preventDefault()}>
              <p className="font-sans text-[10px] uppercase tracking-widest text-neon-pink">
                // INCOMING_TRANSMISSION
              </p>
              <div>
                <label htmlFor="name" className="mb-2 block font-sans text-xs uppercase tracking-widest text-zinc-600">
                  Sender_ID
                </label>
                <input id="name" type="text" placeholder="ENTER_NAME" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-sans text-xs uppercase tracking-widest text-zinc-600">
                  Return_Address
                </label>
                <input id="email" type="email" placeholder="user@domain.net" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-sans text-xs uppercase tracking-widest text-zinc-600">
                  Payload
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="TRANSMIT MESSAGE..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button type="submit" className="cyber-btn w-full justify-center">
                TRANSMIT
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={200}>
            <div className="flex h-full flex-col justify-center">
              <div className="cyber-panel p-8">
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
                  UPLINK STATUS
                </h3>
                <p className="mt-3 font-sans text-xs leading-relaxed text-zinc-600">
                  CHANNEL OPEN FOR FREELANCE CONTRACTS AND FULL-TIME ROLES.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-4 font-sans text-xs text-neon-cyan transition-all duration-500 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-neon-cyan/30 bg-neon-cyan/5 transition-all duration-500 group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    {profile.email}
                  </a>
                  <p className="flex items-center gap-4 font-sans text-xs text-zinc-500">
                    <span className="flex h-10 w-10 items-center justify-center border border-neon-pink/30 bg-neon-pink/5 text-neon-pink transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,42,109,0.3)]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    REMOTE // GLOBAL
                  </p>
                </div>

                <div className="mt-8 flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="icon-hover flex h-10 w-10 items-center justify-center border border-neon-cyan/20 text-zinc-600 transition-all duration-500 hover:border-neon-pink/50 hover:bg-neon-pink/10 hover:text-neon-pink"
                    >
                      {icons[link.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

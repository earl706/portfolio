import { profile } from "../data/portfolio"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neon-cyan/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-sans text-[10px] uppercase tracking-widest text-zinc-700">
          SYS.COPYRIGHT {year} // {profile.name.toUpperCase()} // REACT + TAILWIND
        </p>
        <a
          href="#"
          className="group flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-neon-pink transition-all duration-500 hover:drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]"
        >
          [RETURN_TOP]
          <svg className="h-3 w-3 transition-transform duration-500 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

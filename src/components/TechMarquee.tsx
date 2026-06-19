import { techMarquee } from "../data/portfolio"
import { TechIcon } from "./TechIcon"
import type { TechName } from "../lib/tech"

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee]

  return (
    <div className="relative overflow-hidden border-y border-neon-cyan/10 bg-black/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />
      <div className="marquee-track flex w-max gap-12">
        {items.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="marquee-item flex items-center gap-3 text-zinc-600 transition-all duration-500 hover:scale-110 hover:text-neon-cyan"
          >
            <TechIcon name={tech as TechName} className="h-7 w-7 transition-all duration-500" />
            <span className="font-display text-xs font-bold uppercase tracking-widest">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

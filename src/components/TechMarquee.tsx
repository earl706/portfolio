import { techMarquee } from "../data/portfolio"
import { TechIcon } from "./TechIcon"
import type { TechName } from "../lib/tech"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

export default function TechMarquee() {
  const { theme, typography, motion } = useDesign()
  const items = [...techMarquee, ...techMarquee]

  return (
    <div className={cn(theme.marquee, "relative overflow-hidden")}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
      <div className={cn("marquee-track flex w-max gap-12", motion.marquee)}>
        {items.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className={cn("flex items-center gap-3 text-muted", motion.transition, motion.hoverScale, "hover:text-primary")}
          >
            <TechIcon name={tech as TechName} className="h-7 w-7" />
            <span className={cn(typography.fontDisplay, "text-xs font-bold uppercase tracking-widest")}>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

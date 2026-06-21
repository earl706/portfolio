import { profile } from "../data/portfolio"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

export default function Footer() {
  const { typography, motion, layout, semantic } = useDesign()
  const year = new Date().getFullYear()

  return (
    <footer className={cn("border-t border-primary/10 px-6 py-8")}>
      <div className={cn(layout.container, "flex flex-col items-center justify-between gap-4 sm:flex-row")}>
        <p className={cn(typography.fontBody, "text-[10px] uppercase tracking-widest text-muted/70")}>
          SYS.COPYRIGHT {year} // {profile.name.toUpperCase()} // REACT + TAILWIND
        </p>
        <a
          href="#"
          className={cn("group flex items-center gap-2 text-[10px] uppercase tracking-widest", semantic.accent, motion.transition)}
        >
          [RETURN_TOP]
          <svg className={cn("h-3 w-3", motion.transition, "group-hover:-translate-y-1")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

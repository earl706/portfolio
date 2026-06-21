import { profile } from "../data/portfolio"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

export default function ProfilePhoto({ className = "" }: { className?: string }) {
  const { theme, typography, motion, fx, semantic } = useDesign()

  return (
    <div className={cn("group relative", className)}>
      <div className={cn(theme.photoGlow, motion.transitionSlow, "absolute -inset-1")} />
      <div className={cn(theme.panel, motion.transitionSlow, "relative overflow-hidden p-1 group-hover:-translate-y-1")}>
        <div className={theme.photoFrame}>
          <img
            src={profile.photo}
            alt={profile.name}
            className={cn("h-full w-full object-cover", motion.transitionSlow, "group-hover:scale-105")}
          />
          {fx.photoScan && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.12)_2px,rgba(0,0,0,0.12)_4px)] opacity-60" />
              <div className="photo-scan pointer-events-none absolute inset-x-0 h-8 bg-gradient-to-b from-primary/20 to-transparent" />
            </>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface/90 to-transparent px-3 py-2">
            <p className={cn(typography.fontBody, "text-[9px] uppercase tracking-[0.25em] text-primary")}>
              ID: {profile.initials}-001
            </p>
          </div>
        </div>
        <div className={cn(typography.fontBody, "mt-2 flex items-center justify-between px-1 text-[9px] uppercase tracking-widest text-muted")}>
          <span className={semantic.accent}>[IMG_LOADED]</span>
          <span>SECURE</span>
        </div>
      </div>
    </div>
  )
}

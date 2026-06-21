import type { ReactNode } from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

type ScrollRevealProps = {
  children: ReactNode
  variant?: "up" | "left" | "right" | "scale" | "fade"
  delay?: number
  className?: string
}

export default function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  const { motion, preferences } = useDesign()

  if (preferences.animation === "none") {
    return <div className={className}>{children}</div>
  }

  const hiddenMap = {
    up: motion.revealUp,
    left: motion.revealLeft,
    right: motion.revealRight,
    scale: motion.revealScale,
    fade: motion.revealFade,
  }

  return (
    <div
      ref={ref}
      className={cn(
        motion.revealBase,
        visible ? motion.revealVisible : motion.revealHidden,
        !visible && hiddenMap[variant],
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

import type { ReactNode } from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"

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

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

import { techIconMap, type TechName } from "../lib/tech"
import { useTheme } from "../themes/useTheme"

export function TechIcon({ name, className = "" }: { name: TechName; className?: string }) {
  const { classes: t } = useTheme()
  const Icon = techIconMap[name]

  return (
    <Icon
      className={`theme-tech-icon shrink-0 ${t.iconHover} ${className}`}
      aria-hidden="true"
    />
  )
}

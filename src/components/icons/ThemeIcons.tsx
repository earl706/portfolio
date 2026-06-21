import type { ThemeName } from "../../themes/types"

type IconProps = { className?: string }

export function SunIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

export function MoonIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  )
}

export function ThemeIcon({ name, className = "h-8 w-8" }: { name: ThemeName; className?: string }) {
  switch (name) {
    case "cyberpunk":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      )
    case "glassmorphism":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="8" width="14" height="12" rx="3" opacity="0.5" />
          <rect x="7" y="4" width="14" height="12" rx="3" />
          <circle cx="14" cy="10" r="2" fill="currentColor" stroke="none" opacity="0.6" />
        </svg>
      )
    case "minimal_mono":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="14" y2="12" />
          <line x1="4" y1="18" x2="18" y2="18" />
        </svg>
      )
    case "brutalist_dev":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" fill="none" />
          <rect x="7" y="7" width="10" height="10" />
        </svg>
      )
    case "neo_editorial":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" d="M6 4h12v16H6z" />
          <path strokeLinecap="round" d="M9 8h6M9 12h6M9 16h4" />
          <path strokeLinecap="round" d="M8 4v16" opacity="0.4" />
        </svg>
      )
  }
}

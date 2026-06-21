import { MoonIcon, SunIcon } from "./icons/ThemeIcons"
import { useTheme } from "../themes/useTheme"
import type { ColorMode } from "../themes/types"

type Props = {
  mode: ColorMode
  onChange: (mode: ColorMode) => void
  className?: string
}

export default function ColorModeToggle({ mode, onChange, className = "" }: Props) {
  const { classes: t } = useTheme()
  const isDark = mode === "dark"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => onChange(isDark ? "light" : "dark")}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-current/20 bg-current/5 p-0.5 transition-colors duration-300 ${className}`}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-5" : "translate-x-0"
        } ${t.modeToggleActive}`}
      >
        {isDark ? <MoonIcon className="h-3 w-3 shrink-0" /> : <SunIcon className="h-3 w-3 shrink-0" />}
      </span>
    </button>
  )
}

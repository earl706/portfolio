import type { ColorMode, ThemeName } from "./types"

const THEME_KEY = "portfolio-theme"
const MODES_KEY = "portfolio-color-modes"

export const DEFAULT_THEME: ThemeName = "neo_editorial"
export const FLAGSHIP_THEME: ThemeName = "neo_editorial"

const THEME_NAMES: ThemeName[] = [
  "cyberpunk",
  "glassmorphism",
  "minimal_mono",
  "brutalist_dev",
  "neo_editorial",
]

export function isThemeName(value: string): value is ThemeName {
  return THEME_NAMES.includes(value as ThemeName)
}

export function isColorMode(value: string): value is ColorMode {
  return value === "dark" || value === "light"
}

export function loadTheme(): ThemeName | null {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored && isThemeName(stored)) return stored
  } catch {
    /* ignore */
  }
  return null
}

export function saveTheme(theme: ThemeName): void {
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    /* ignore */
  }
}

export function loadColorModes(): Partial<Record<ThemeName, ColorMode>> {
  try {
    const raw = localStorage.getItem(MODES_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as Record<string, string>
    const result: Partial<Record<ThemeName, ColorMode>> = {}
    for (const name of THEME_NAMES) {
      if (isColorMode(parsed[name] ?? "")) result[name] = parsed[name] as ColorMode
    }
    return result
  } catch {
    return {}
  }
}

export function saveColorMode(theme: ThemeName, mode: ColorMode): void {
  try {
    const modes = loadColorModes()
    modes[theme] = mode
    localStorage.setItem(MODES_KEY, JSON.stringify(modes))
  } catch {
    /* ignore */
  }
}

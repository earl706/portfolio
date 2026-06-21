import { getMotionTokens } from "./presets/animations"
import { getLayoutTokens } from "./presets/layouts"
import { PALETTE_PRESETS } from "./presets/palettes"
import { getThemeFx, getThemeTokens } from "./presets/themes"
import { getTypographyTokens } from "./presets/typography"
import type { DesignTokens, UserDesignPreferences } from "./types"

export function buildDesignTokens(preferences: UserDesignPreferences): DesignTokens {
  const palette = PALETTE_PRESETS[preferences.palette]
  const theme = getThemeTokens(preferences.theme)
  const motion = getMotionTokens(preferences.animation)
  const layout = getLayoutTokens(preferences.layout)
  const typographyRaw = getTypographyTokens(preferences.typography)
  const { displayFamily, bodyFamily, ...typography } = typographyRaw as typeof typographyRaw & {
    displayFamily: string
    bodyFamily: string
  }

  const cssVariables: Record<string, string> = {
    "--primary": palette.primary,
    "--accent": palette.accent,
    "--highlight": palette.highlight,
    "--surface": palette.surface,
    "--panel": palette.panel,
    "--muted": palette.muted,
    "--heading": palette.heading,
    "--font-display-family": displayFamily,
    "--font-body-family": bodyFamily,
  }

  const dataAttributes = {
    "data-theme": preferences.theme,
    "data-palette": preferences.palette,
    "data-animation": preferences.animation,
    "data-layout": preferences.layout,
    "data-typography": preferences.typography,
  }

  const semantic = {
    primary: "text-primary",
    accent: "text-accent",
    highlight: "text-highlight",
    surface: "bg-surface text-muted",
    panel: "bg-panel",
    muted: "text-muted",
    heading: "text-heading",
    border: "border-primary/20",
    borderAccent: "border-accent/30",
  }

  return {
    cssVariables,
    dataAttributes,
    theme,
    motion,
    layout,
    typography,
    semantic,
    fx: {
      ...getThemeFx(preferences.theme),
      uppercaseLabels: preferences.theme === "futuristic",
    },
  }
}

export function applyDesignTokens(tokens: DesignTokens) {
  const root = document.documentElement
  Object.entries(tokens.cssVariables).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
  Object.entries(tokens.dataAttributes).forEach(([key, value]) => {
    root.setAttribute(key, value)
  })
}

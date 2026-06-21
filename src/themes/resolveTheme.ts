import type { ColorMode, ThemeConfig, ThemeName, ResolvedTheme } from "./types"

export function resolveTheme(config: ThemeConfig, mode: ColorMode): ResolvedTheme {
  const bundle = config.modes[mode]
  return {
    name: config.name,
    label: config.label,
    description: config.description,
    font: config.font,
    layout: config.layout,
    effects: config.effects,
    tailwindClasses: config.tailwindClasses,
    defaultMode: config.defaultMode,
    colorMode: mode,
    colors: bundle.colors,
    classes: bundle.classes,
  }
}

export function getResolvedTheme(name: ThemeName, mode: ColorMode, themes: Record<ThemeName, ThemeConfig>): ResolvedTheme {
  return resolveTheme(themes[name], mode)
}

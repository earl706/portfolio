import type { ColorMode, ThemeClasses, ThemeConfig, ThemeModeBundle } from "./types"

type ThemeMeta = Omit<ThemeConfig, "modes" | "colors" | "defaultMode"> & {
  defaultMode?: ColorMode
}

export function buildThemeModes(
  dark: ThemeModeBundle,
  lightPatch: { colors?: Record<string, string>; classes: Partial<ThemeClasses> },
): Record<ColorMode, ThemeModeBundle> {
  return {
    dark,
    light: {
      colors: { ...dark.colors, ...lightPatch.colors },
      classes: { ...dark.classes, ...lightPatch.classes },
    },
  }
}

export function createTheme(
  meta: ThemeMeta,
  dark: ThemeModeBundle,
  lightPatch: { colors?: Record<string, string>; classes: Partial<ThemeClasses> },
): ThemeConfig {
  return {
    ...meta,
    colors: dark.colors,
    defaultMode: meta.defaultMode ?? "dark",
    modes: buildThemeModes(dark, lightPatch),
  }
}

export function createThemeWithLightDefault(
  meta: ThemeMeta,
  light: ThemeModeBundle,
  darkPatch: { colors?: Record<string, string>; classes: Partial<ThemeClasses> },
): ThemeConfig {
  return {
    ...meta,
    colors: light.colors,
    defaultMode: "light",
    modes: {
      light,
      dark: {
        colors: { ...light.colors, ...darkPatch.colors },
        classes: { ...light.classes, ...darkPatch.classes },
      },
    },
  }
}

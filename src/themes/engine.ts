import { cyberpunkTheme } from "./configs/cyberpunk"
import { glassmorphismTheme } from "./configs/glassmorphism"
import { minimalMonoTheme } from "./configs/minimal_mono"
import { brutalistDevTheme } from "./configs/brutalist_dev"
import { neoEditorialTheme } from "./configs/neo_editorial"
import type { ThemeConfig, ThemeName } from "./types"

export const themes: Record<ThemeName, ThemeConfig> = {
  cyberpunk: cyberpunkTheme,
  glassmorphism: glassmorphismTheme,
  minimal_mono: minimalMonoTheme,
  brutalist_dev: brutalistDevTheme,
  neo_editorial: neoEditorialTheme,
}

export const themeList: ThemeConfig[] = [
  cyberpunkTheme,
  glassmorphismTheme,
  minimalMonoTheme,
  brutalistDevTheme,
  neoEditorialTheme,
]

export function getTheme(name: ThemeName): ThemeConfig {
  return themes[name]
}

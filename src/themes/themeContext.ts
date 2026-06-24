import { createContext } from "react"
import type { ColorMode, ResolvedTheme, ThemeClasses, ThemeConfig, ThemeName } from "./types"

export type ThemeContextValue = {
  theme: ResolvedTheme
  themeConfig: ThemeConfig
  themeName: ThemeName
  colorMode: ColorMode
  classes: ThemeClasses
  setTheme: (name: ThemeName) => void
  setColorMode: (mode: ColorMode) => void
  toggleColorMode: () => void
  showPicker: boolean
  pickerSession: number
  openPicker: () => void
  closePicker: () => void
  confirmTheme: (name: ThemeName, mode?: ColorMode) => void
  hasSelectedTheme: boolean
  themeList: ThemeConfig[]
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

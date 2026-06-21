import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import { getTheme, themeList } from "./engine"
import { resolveTheme } from "./resolveTheme"
import { DEFAULT_THEME, loadColorModes, loadTheme, saveColorMode, saveTheme } from "./storage"
import { ThemeContext, type ThemeContextValue } from "./themeContext"
import type { ColorMode, ThemeName } from "./types"

export function ThemeProvider({ children }: { children: ReactNode }) {
  const stored = loadTheme()
  const [themeName, setThemeName] = useState<ThemeName>(stored ?? DEFAULT_THEME)
  const [colorModes, setColorModes] = useState(loadColorModes)
  const [hasSelectedTheme, setHasSelectedTheme] = useState(stored !== null)
  const [showPicker, setShowPicker] = useState(stored === null)

  const themeConfig = useMemo(() => getTheme(themeName), [themeName])
  const colorMode: ColorMode = colorModes[themeName] ?? themeConfig.defaultMode
  const theme = useMemo(() => resolveTheme(themeConfig, colorMode), [themeConfig, colorMode])
  const classes = theme.classes

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeName)
    document.documentElement.setAttribute("data-color-mode", colorMode)
    document.documentElement.style.setProperty("--reveal-duration", classes.revealDuration)
    Object.entries(theme.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--theme-${key}`, value)
    })
  }, [themeName, colorMode, theme.colors, classes.revealDuration])

  const setColorMode = useCallback(
    (mode: ColorMode) => {
      saveColorMode(themeName, mode)
      setColorModes((prev) => ({ ...prev, [themeName]: mode }))
    },
    [themeName],
  )

  const toggleColorMode = useCallback(() => {
    setColorMode(colorMode === "dark" ? "light" : "dark")
  }, [colorMode, setColorMode])

  const setTheme = useCallback((name: ThemeName) => {
    setThemeName(name)
    saveTheme(name)
    setHasSelectedTheme(true)
  }, [])

  const openPicker = useCallback(() => setShowPicker(true), [])
  const closePicker = useCallback(() => {
    if (hasSelectedTheme) setShowPicker(false)
  }, [hasSelectedTheme])

  const confirmTheme = useCallback(
    (name: ThemeName, mode?: ColorMode) => {
      if (mode !== undefined) {
        saveColorMode(name, mode)
        setColorModes((prev) => ({ ...prev, [name]: mode }))
      }
      setTheme(name)
      setShowPicker(false)
    },
    [setTheme],
  )

  const value: ThemeContextValue = {
    theme,
    themeConfig,
    themeName,
    colorMode,
    classes,
    setTheme,
    setColorMode,
    toggleColorMode,
    showPicker,
    openPicker,
    closePicker,
    confirmTheme,
    hasSelectedTheme,
    themeList,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

import { useDesignContext } from "../design/DesignContext"
import { cn } from "../design/cn"

export function useDesign() {
  const { preferences, tokens, setPreferences, completeWizard, wizardComplete, settingsOpen, openSettings, closeSettings, resetWizard, setPreviewPreferences } =
    useDesignContext()

  const { theme, motion, layout, typography, semantic, fx } = tokens

  return {
    preferences,
    tokens,
    fx,
    motion,
    layout,
    typography,
    semantic,
    theme,
    setPreferences,
    completeWizard,
    wizardComplete,
    settingsOpen,
    openSettings,
    closeSettings,
    resetWizard,
    setPreviewPreferences,
    cn,
  }
}

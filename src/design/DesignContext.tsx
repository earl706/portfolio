import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { applyDesignTokens, buildDesignTokens } from "./engine"
import { DEFAULT_PREFERENCES } from "./defaults"
import { getInitialState, saveDesignState } from "./storage"
import type { DesignTokens, StoredDesignState, UserDesignPreferences } from "./types"

type DesignContextValue = {
  preferences: UserDesignPreferences
  tokens: DesignTokens
  wizardComplete: boolean
  settingsOpen: boolean
  setPreferences: (preferences: UserDesignPreferences) => void
  completeWizard: (preferences: UserDesignPreferences) => void
  resetWizard: () => void
  setPreviewPreferences: (preferences: UserDesignPreferences | null) => void
  openSettings: () => void
  closeSettings: () => void
}

const DesignContext = createContext<DesignContextValue | null>(null)

export function DesignProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoredDesignState>(getInitialState)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [previewPreferences, setPreviewPreferences] = useState<UserDesignPreferences | null>(null)

  const activePreferences = previewPreferences ?? state.preferences
  const tokens = useMemo(() => buildDesignTokens(activePreferences), [activePreferences])

  useEffect(() => {
    applyDesignTokens(tokens)
  }, [tokens])

  const persist = useCallback((preferences: UserDesignPreferences, wizardComplete: boolean) => {
    setState({ preferences, wizardComplete })
    saveDesignState(preferences, wizardComplete)
  }, [])

  const setPreferences = useCallback(
    (preferences: UserDesignPreferences) => persist(preferences, true),
    [persist],
  )

  const completeWizard = useCallback(
    (preferences: UserDesignPreferences) => {
      setPreviewPreferences(null)
      persist(preferences, true)
    },
    [persist],
  )

  const resetWizard = useCallback(() => {
    setPreviewPreferences(null)
    persist(DEFAULT_PREFERENCES, false)
  }, [persist])

  const value = useMemo<DesignContextValue>(
    () => ({
      preferences: activePreferences,
      tokens,
      wizardComplete: state.wizardComplete,
      settingsOpen,
      setPreferences,
      completeWizard,
      resetWizard,
      setPreviewPreferences,
      openSettings: () => setSettingsOpen(true),
      closeSettings: () => setSettingsOpen(false),
    }),
    [state, activePreferences, tokens, settingsOpen, setPreferences, completeWizard, resetWizard],
  )

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>
}

export function useDesignContext() {
  const ctx = useContext(DesignContext)
  if (!ctx) throw new Error("useDesignContext must be used within DesignProvider")
  return ctx
}

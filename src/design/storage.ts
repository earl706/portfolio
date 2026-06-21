import { DEFAULT_PREFERENCES, STORAGE_KEY } from "./defaults"
import type { StoredDesignState, UserDesignPreferences } from "./types"

export function loadDesignState(): StoredDesignState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as StoredDesignState
  } catch {
    return null
  }
}

export function saveDesignState(preferences: UserDesignPreferences, wizardComplete: boolean) {
  const state: StoredDesignState = { preferences, wizardComplete }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function clearDesignState() {
  localStorage.removeItem(STORAGE_KEY)
}

export function getInitialState(): StoredDesignState {
  return loadDesignState() ?? { preferences: DEFAULT_PREFERENCES, wizardComplete: false }
}

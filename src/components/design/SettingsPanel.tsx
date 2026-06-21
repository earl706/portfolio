import { useDesign } from "../../hooks/useDesign"
import { cn } from "../../design/cn"
import { PreferencesForm } from "./PreferenceSelector"

export default function SettingsPanel() {
  const { settingsOpen, closeSettings, theme, typography, motion } = useDesign()

  if (!settingsOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-surface/80 backdrop-blur-sm"
        onClick={closeSettings}
        aria-label="Close settings"
      />
      <aside
        className={cn(
          theme.panel,
          "relative h-full w-full max-w-md overflow-y-auto border-l border-primary/20 p-6 shadow-2xl",
        )}
        role="dialog"
        aria-label="Design settings"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className={cn(typography.label, "text-accent")}>// CONFIG_PANEL</p>
            <h2 className={cn(typography.heading, "mt-1 text-xl")}>Design Settings</h2>
          </div>
          <button
            type="button"
            onClick={closeSettings}
            className={cn(theme.btnGhost, motion.transition, "px-4 py-2 text-xs")}
            aria-label="Close"
          >
            Close
          </button>
        </div>

        <p className={cn(typography.body, "mt-4")}>
          Adjust your viewing experience. Changes apply instantly and persist in localStorage.
        </p>

        <div className="mt-8">
          <PreferencesForm />
        </div>
      </aside>
    </div>
  )
}

export function SettingsTrigger() {
  const { openSettings, theme, motion } = useDesign()

  return (
    <button
      type="button"
      onClick={openSettings}
      className={cn(
        theme.btnPrimary,
        motion.transition,
        "fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full p-0 shadow-lg",
      )}
      aria-label="Open design settings"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>
  )
}

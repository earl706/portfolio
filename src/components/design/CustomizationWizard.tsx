import { useEffect, useState } from "react"
import { DEFAULT_PREFERENCES } from "../../design/defaults"
import type { UserDesignPreferences } from "../../design/types"
import { useDesign } from "../../hooks/useDesign"
import { cn } from "../../design/cn"
import {
  ANIMATION_OPTIONS,
  LAYOUT_OPTIONS,
  PALETTE_OPTIONS,
  PreferenceSelector,
  THEME_OPTIONS,
  TYPOGRAPHY_OPTIONS,
} from "./PreferenceSelector"

const STEPS = ["theme", "palette", "animation", "layout", "typography"] as const

export default function CustomizationWizard() {
  const { completeWizard, theme, typography, motion, setPreviewPreferences } = useDesign()
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<UserDesignPreferences>(DEFAULT_PREFERENCES)

  useEffect(() => {
    setPreviewPreferences(draft)
    return () => setPreviewPreferences(null)
  }, [draft, setPreviewPreferences])

  const update = <K extends keyof UserDesignPreferences>(key: K, value: UserDesignPreferences[K]) => {
    setDraft((prev) => {
      const next = { ...prev, [key]: value }
      return next
    })
  }

  const current = STEPS[step]
  const isLast = step === STEPS.length - 1

  const handleNext = () => {
    if (isLast) completeWizard(draft)
    else setStep((s) => s + 1)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6 py-16">
      <div className={cn(theme.panel, "w-full max-w-2xl p-8")}>
        <p className={cn(typography.label, "text-accent")}>// DESIGN_WIZARD</p>
        <h1 className={cn(typography.heading, "mt-2 text-2xl sm:text-3xl")}>
          Personalize Your Visit
        </h1>
        <p className={cn(typography.body, "mt-3")}>
          Choose how you want to experience this portfolio. Preferences are saved locally.
        </p>

        <div className="mt-6 flex gap-2">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={cn(
                "h-1 flex-1 rounded-full",
                i <= step ? "bg-primary" : "bg-primary/20",
              )}
            />
          ))}
        </div>

        <div className="mt-8">
          {current === "theme" && (
            <PreferenceSelector
              label="Theme"
              value={draft.theme}
              options={[...THEME_OPTIONS]}
              onChange={(v) => update("theme", v)}
            />
          )}
          {current === "palette" && (
            <PreferenceSelector
              label="Color Palette"
              value={draft.palette}
              options={[...PALETTE_OPTIONS]}
              onChange={(v) => update("palette", v)}
              columns={3}
            />
          )}
          {current === "animation" && (
            <PreferenceSelector
              label="Animation Style"
              value={draft.animation}
              options={[...ANIMATION_OPTIONS]}
              onChange={(v) => update("animation", v)}
              columns={3}
            />
          )}
          {current === "layout" && (
            <PreferenceSelector
              label="Layout Style"
              value={draft.layout}
              options={[...LAYOUT_OPTIONS]}
              onChange={(v) => update("layout", v)}
            />
          )}
          {current === "typography" && (
            <PreferenceSelector
              label="Typography Style"
              value={draft.typography}
              options={[...TYPOGRAPHY_OPTIONS]}
              onChange={(v) => update("typography", v)}
              columns={3}
            />
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className={cn(theme.btnGhost, motion.transition)}
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className={cn(theme.btnPrimary, motion.transition, "ml-auto")}
          >
            {isLast ? "Enter Portfolio" : "Continue"}
          </button>
          <button
            type="button"
            onClick={() => completeWizard(DEFAULT_PREFERENCES)}
            className={cn(theme.btnGhost, motion.transition, "text-muted")}
          >
            Skip (Defaults)
          </button>
        </div>
      </div>
    </div>
  )
}

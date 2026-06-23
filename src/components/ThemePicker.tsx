import { useEffect, useState } from "react"
import { useTheme } from "../themes/useTheme"
import type { ColorMode, ThemeName } from "../themes/types"
import ColorModeToggle from "./ColorModeToggle"
import { ThemeIcon } from "./icons/ThemeIcons"
import { themeShortLabels } from "../themes/themeLabels"

const PICKER_TRANSITION_MS = 320

function ThemePickerDialog({
  themeName,
  colorMode,
  visible,
  onPanelTransitionEnd,
}: {
  themeName: ThemeName
  colorMode: ColorMode
  visible: boolean
  onPanelTransitionEnd: () => void
}) {
  const { themeList, confirmTheme, closePicker, hasSelectedTheme, classes: t } = useTheme()
  const [selected, setSelected] = useState<ThemeName>(themeName)
  const [previewMode, setPreviewMode] = useState<ColorMode>(colorMode)

  return (
    <div
      className={`theme-picker-overlay ${visible ? "is-open" : ""} ${t.settingsOverlay} flex items-center justify-center overflow-hidden p-3 sm:p-4`}
      role="dialog"
      aria-modal="true"
      aria-label="Choose a visual theme"
    >
      <div
        className={`theme-picker-panel ${visible ? "is-open" : ""} ${t.panel} w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8`}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget || e.propertyName !== "transform") return
          onPanelTransitionEnd()
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h1 className={`${t.pickerTitle} text-2xl leading-tight sm:text-3xl`}>Pick a Theme</h1>
            <p className={`${t.pickerSubtitle} mt-1 text-sm leading-snug`}>
              Five identities. Dark or light.
            </p>
          </div>
          <div className="flex h-9 shrink-0 items-center gap-2">
            <ColorModeToggle mode={previewMode} onChange={setPreviewMode} />
            {hasSelectedTheme && (
              <button
                type="button"
                onClick={closePicker}
                className={`${t.settingsBtn} cursor-pointer`}
                aria-label="Close theme picker"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-1.5 sm:gap-2">
          {themeList.map((config) => {
            const isActive = selected === config.name
            return (
              <button
                key={config.name}
                type="button"
                onClick={() => setSelected(config.name)}
                className={`${t.pickerCard} flex h-[5.75rem] !p-2 cursor-pointer flex-col items-center justify-between py-2.5 text-center transition-all sm:h-[6.5rem] sm:!p-2.5 sm:py-3 ${
                  isActive ? t.pickerCardActive : ""
                }`}
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center ${t.textAccent}`}>
                  <ThemeIcon name={config.name} className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                <p
                  className={`${t.pickerCardLabel} !mt-0 w-full px-0.5 text-center text-[10px] leading-tight sm:text-xs ${
                    t.textTransform === "uppercase" ? "uppercase tracking-wide" : ""
                  } ${t.textPrimary}`}
                >
                  {themeShortLabels[config.name]}
                </p>
              </button>
            )
          })}
        </div>

        <div className="mt-6 flex justify-center border-t border-current/10 pt-5">
          <button
            type="button"
            disabled={!selected}
            onClick={() => confirmTheme(selected, previewMode)}
            className={`${t.pickerBtn} mt-0 cursor-pointer disabled:cursor-not-allowed`}
          >
            {hasSelectedTheme ? "Apply" : "Enter"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ThemePicker() {
  const { showPicker, themeName, colorMode } = useTheme()
  const [mounted, setMounted] = useState(showPicker)
  const [visible, setVisible] = useState(false)

  const shouldRender = showPicker || mounted

  useEffect(() => {
    if (showPicker) {
      const frame = requestAnimationFrame(() => {
        setMounted(true)
        requestAnimationFrame(() => setVisible(true))
      })
      return () => cancelAnimationFrame(frame)
    }
    const frame = requestAnimationFrame(() => setVisible(false))
    return () => cancelAnimationFrame(frame)
  }, [showPicker])

  useEffect(() => {
    if (!shouldRender) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [shouldRender])

  useEffect(() => {
    if (showPicker) return
    const timeout = window.setTimeout(() => setMounted(false), PICKER_TRANSITION_MS + 80)
    return () => window.clearTimeout(timeout)
  }, [showPicker])

  const handlePanelTransitionEnd = () => {
    if (!showPicker) setMounted(false)
  }

  if (!shouldRender) return null

  return (
    <ThemePickerDialog
      themeName={themeName}
      colorMode={colorMode}
      visible={visible}
      onPanelTransitionEnd={handlePanelTransitionEnd}
    />
  )
}

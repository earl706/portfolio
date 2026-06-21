import type { ReactNode } from "react"
import { useDesign } from "../../hooks/useDesign"
import { cn } from "../../design/cn"

type Option<T extends string> = { value: T; label: string; description?: string }

type PreferenceSelectorProps<T extends string> = {
  label: string
  value: T
  options: Option<T>[]
  onChange: (value: T) => void
  columns?: 2 | 3
}

export function PreferenceSelector<T extends string>({
  label,
  value,
  options,
  onChange,
  columns = 2,
}: PreferenceSelectorProps<T>) {
  const { theme, motion, typography } = useDesign()

  return (
    <fieldset>
      <legend className={cn(typography.label, "mb-3 block")}>{label}</legend>
      <div
        className={cn(
          "grid gap-2",
          columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2",
        )}
      >
        {options.map((option) => {
          const selected = value === option.value
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                theme.panel,
                motion.transition,
                "p-4 text-left",
                selected && "border-accent ring-1 ring-accent/40",
              )}
              aria-pressed={selected}
            >
              <span className={cn(typography.fontBody, "text-sm font-semibold text-heading")}>
                {option.label}
              </span>
              {option.description && (
                <span className={cn(typography.bodyMuted, "mt-1 block")}>{option.description}</span>
              )}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export const THEME_OPTIONS = [
  { value: "minimalist", label: "Minimalist", description: "Clean, spacious, understated" },
  { value: "futuristic", label: "Futuristic", description: "Neon, terminal, high-tech" },
  { value: "academic", label: "Academic", description: "Structured, scholarly, formal" },
  { value: "corporate", label: "Corporate", description: "Professional, polished, trusted" },
  { value: "creative", label: "Creative", description: "Bold, playful, expressive" },
] as const

export const PALETTE_OPTIONS = [
  { value: "monochrome", label: "Monochrome" },
  { value: "ocean-blue", label: "Ocean Blue" },
  { value: "emerald-green", label: "Emerald Green" },
  { value: "royal-purple", label: "Royal Purple" },
  { value: "sunset-orange", label: "Sunset Orange" },
] as const

export const ANIMATION_OPTIONS = [
  { value: "none", label: "None" },
  { value: "subtle", label: "Subtle" },
  { value: "smooth", label: "Smooth" },
  { value: "dynamic", label: "Dynamic" },
  { value: "cinematic", label: "Cinematic" },
] as const

export const LAYOUT_OPTIONS = [
  { value: "grid", label: "Grid", description: "Balanced two-column grids" },
  { value: "bento", label: "Bento", description: "Modular mosaic tiles" },
  { value: "timeline", label: "Timeline", description: "Vertical narrative flow" },
  { value: "dashboard", label: "Dashboard", description: "Dense information panels" },
  { value: "magazine", label: "Magazine", description: "Editorial asymmetry" },
] as const

export const TYPOGRAPHY_OPTIONS = [
  { value: "modern-sans", label: "Modern Sans" },
  { value: "technical", label: "Technical" },
  { value: "monospace", label: "Monospace" },
  { value: "editorial", label: "Editorial" },
  { value: "elegant", label: "Elegant" },
] as const

type PreferencesFormProps = {
  footer?: ReactNode
}

export function PreferencesForm({ footer }: PreferencesFormProps) {
  const { preferences, setPreferences, theme, typography, motion } = useDesign()

  const update = <K extends keyof typeof preferences>(key: K, value: (typeof preferences)[K]) => {
    setPreferences({ ...preferences, [key]: value })
  }

  return (
    <div className="space-y-8">
      <PreferenceSelector
        label="Theme"
        value={preferences.theme}
        options={[...THEME_OPTIONS]}
        onChange={(v) => update("theme", v)}
      />
      <PreferenceSelector
        label="Color Palette"
        value={preferences.palette}
        options={[...PALETTE_OPTIONS]}
        onChange={(v) => update("palette", v)}
        columns={3}
      />
      <PreferenceSelector
        label="Animation Style"
        value={preferences.animation}
        options={[...ANIMATION_OPTIONS]}
        onChange={(v) => update("animation", v)}
        columns={3}
      />
      <PreferenceSelector
        label="Layout Style"
        value={preferences.layout}
        options={[...LAYOUT_OPTIONS]}
        onChange={(v) => update("layout", v)}
      />
      <PreferenceSelector
        label="Typography Style"
        value={preferences.typography}
        options={[...TYPOGRAPHY_OPTIONS]}
        onChange={(v) => update("typography", v)}
        columns={3}
      />
      {footer && <div className={cn(motion.transition)}>{footer}</div>}
    </div>
  )
}

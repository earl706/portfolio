import { resolveTheme } from "../themes/resolveTheme"
import { getTheme } from "../themes/engine"
import type { ColorMode, ThemeName } from "../themes/types"

type Props = {
  themeName: ThemeName
  colorMode: ColorMode
}

export default function ThemePreviewStrip({ themeName, colorMode }: Props) {
  const preview = resolveTheme(getTheme(themeName), colorMode)
  const { colors, label } = preview

  return (
    <div
      className="theme-preview-strip overflow-hidden rounded-lg border border-current/10"
      style={{ background: colors.bg }}
    >
      <div className="flex items-center gap-2 border-b border-current/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full" style={{ background: colors.accent }} />
        <span className="h-2 w-2 rounded-full" style={{ background: colors.accent2 }} />
        <span className="h-2 w-2 rounded-full" style={{ background: colors.highlight }} />
        <span className="ml-auto text-[10px] font-medium opacity-70">{label}</span>
      </div>
      <div className="grid grid-cols-4 gap-2 p-3">
        <div
          className="col-span-2 h-10 rounded-md"
          style={{ background: colors.panel, border: `1px solid ${colors.accent}33` }}
        />
        <div className="h-10 rounded-md" style={{ background: `${colors.accent}44` }} />
        <div className="h-10 rounded-md" style={{ background: `${colors.accent2}33` }} />
        <div className="col-span-3 h-2 rounded-full opacity-40" style={{ background: colors.accent }} />
        <div className="h-6 rounded-md" style={{ background: colors.accent }} />
      </div>
    </div>
  )
}

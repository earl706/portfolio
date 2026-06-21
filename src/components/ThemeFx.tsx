import { useTheme } from "../themes/useTheme"

export default function ThemeFx() {
  const { classes: t } = useTheme()

  return (
    <>
      {t.showScanlines && (
        <div className="theme-scanlines pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true" />
      )}
      {t.showScanlines && (
        <div className="theme-vignette pointer-events-none fixed inset-0 z-[9998]" aria-hidden="true" />
      )}
      {t.showHeroGlow && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-px bg-current opacity-20" aria-hidden="true" />
      )}
    </>
  )
}

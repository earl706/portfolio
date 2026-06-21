import { profile } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"

export default function Footer() {
  const year = new Date().getFullYear()
  const { classes: t } = useTheme()

  return (
    <footer className={t.footer}>
      <div className={`${t.container} flex flex-col items-center justify-between gap-4 sm:flex-row`}>
        <p className={t.footerText}>
          {t.textTransform === "uppercase"
            ? `SYS.COPYRIGHT ${year} // ${profile.name.toUpperCase()}`
            : `© ${year} ${profile.name}`}
        </p>
        <a href="#" className={t.footerLink}>
          {t.textTransform === "uppercase" ? "[RETURN_TOP]" : "Back to top"}
        </a>
      </div>
    </footer>
  )
}

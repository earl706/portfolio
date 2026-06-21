import { techMarquee } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import { TechIcon } from "./TechIcon"
import type { TechName } from "../lib/tech"

export default function TechMarquee() {
  const { classes: t } = useTheme()
  const items = [...techMarquee, ...techMarquee]

  if (!t.showMarquee || t.marquee === "hidden") return null

  return (
    <div className={`relative ${t.marquee}`}>
      {t.marqueeFadeL !== "hidden" && <div className={t.marqueeFadeL} />}
      {t.marqueeFadeR !== "hidden" && <div className={t.marqueeFadeR} />}
      <div className="marquee-track flex w-max gap-12">
        {items.map((tech, i) => (
          <div key={`${tech}-${i}`} className={t.marqueeItem}>
            <TechIcon name={tech as TechName} className="h-7 w-7" />
            <span className={`${t.fontDisplay} text-xs font-bold ${t.textTransform} tracking-widest`}>
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

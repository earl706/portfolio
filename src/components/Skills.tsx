import { skillCategories } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { TechIcon } from "./TechIcon"
import { isTechName } from "../lib/tech"
import { Panel } from "./ui/Themed"

const icons = ["LANG", "FW", "TOOL"]

export default function Skills() {
  const { classes: t } = useTheme()

  return (
    <section id="skills" className={`${t.sectionAlt} section-secondary`}>
      <div className={t.container}>
        <ScrollReveal variant="fade">
          <SectionHeader
            label="Skills"
            title={t.textTransform === "uppercase" ? "LOADOUT MANIFEST" : "Skills & Tools"}
            description={
              t.textTransform === "uppercase"
                ? "Core modules installed and battle-tested across production environments."
                : "Technologies I use to build production-grade applications."
            }
            icon="cpu"
            emphasis="secondary"
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} variant="fade" delay={i * 80}>
              <Panel className="group h-full p-6">
                <div className={t.skillDivider}>
                  <span className={t.skillCategoryCode}>[{icons[i]}]</span>
                  <h3 className={t.skillCategoryTitle}>{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <li key={skill} className={t.skillRow}>
                      <span className={`text-[10px] ${t.textMuted}`}>
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      {isTechName(skill) && (
                        <TechIcon name={skill} className={`${t.iconHover} h-4 w-4 shrink-0`} />
                      )}
                      <span className={t.textAccent}>&gt;</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

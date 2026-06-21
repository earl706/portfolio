import { skillCategories } from "../data/portfolio"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { TechIcon } from "./TechIcon"
import { isTechName } from "../lib/tech"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

const icons = ["LANG", "FW", "TOOL"]

export default function Skills() {
  const { theme, typography, layout, motion } = useDesign()

  return (
    <section id="skills" className={layout.sectionAlt}>
      <div className={layout.container}>
        <ScrollReveal variant="right">
          <SectionHeader
            label="SKILLS"
            title="LOADOUT MANIFEST"
            description="Core modules installed and battle-tested across production environments."
            icon="cpu"
          />
        </ScrollReveal>

        <div className={layout.skillsGrid}>
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} variant="up" delay={i * 120}>
              <div className={cn(theme.panel, "group h-full p-6")}>
                <div className="mb-5 flex items-center gap-3 border-b border-primary/20 pb-4">
                  <span className={cn(typography.fontDisplay, "text-lg font-bold text-accent", motion.transition)}>
                    [{icons[i]}]
                  </span>
                  <h3 className={cn(typography.heading, "text-sm")}>{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <li
                      key={skill}
                      className={cn(
                        "flex items-center gap-3 rounded-sm px-2 py-1.5 text-sm text-muted",
                        motion.transition,
                        "hover:bg-primary/5 hover:text-primary",
                      )}
                    >
                      <span className="text-[10px] text-primary/50">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      {isTechName(skill) && (
                        <TechIcon name={skill} className="icon-hover h-4 w-4 shrink-0 text-accent/70" />
                      )}
                      <span className="text-primary/40">&gt;</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

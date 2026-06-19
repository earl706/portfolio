import { skillCategories } from "../data/portfolio"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { TechIcon } from "./TechIcon"
import { isTechName } from "../lib/tech"

const icons = ["LANG", "FW", "TOOL"]

export default function Skills() {
  return (
    <section id="skills" className="border-y border-neon-cyan/10 bg-panel/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="right">
          <SectionHeader
            label="SKILLS"
            title="LOADOUT MANIFEST"
            description="Core modules installed and battle-tested across production environments."
            icon="cpu"
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} variant="up" delay={i * 120}>
              <div className="cyber-panel group h-full p-6">
                <div className="mb-5 flex items-center gap-3 border-b border-neon-cyan/20 pb-4">
                  <span className="font-display text-lg font-bold text-neon-pink transition-all duration-500 group-hover:text-neon-cyan">
                    [{icons[i]}]
                  </span>
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 rounded-sm px-2 py-1.5 font-sans text-sm text-zinc-500 transition-all duration-500 hover:bg-neon-cyan/5 hover:text-neon-cyan"
                    >
                      <span className="text-[10px] text-neon-cyan/50">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      {isTechName(skill) && (
                        <TechIcon
                          name={skill}
                          className="icon-hover h-4 w-4 shrink-0 text-neon-pink/70"
                        />
                      )}
                      <span className="text-neon-cyan/40">&gt;</span>
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

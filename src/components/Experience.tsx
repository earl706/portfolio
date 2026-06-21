import { experience } from "../data/portfolio"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

export default function Experience() {
  const { theme, typography, layout, motion, semantic, preferences } = useDesign()
  const isTimeline = preferences.layout === "timeline"

  return (
    <section id="experience" className={layout.sectionAlt}>
      <div className={layout.container}>
        <ScrollReveal variant="right">
          <SectionHeader
            label="EXPERIENCE"
            title="MISSION LOG"
            description="Chronological record of deployments across dev teams and production environments."
            icon="briefcase"
          />
        </ScrollReveal>

        <div className={layout.experienceList}>
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} variant="left" delay={i * 150}>
              <article className={cn(theme.panel, layout.experienceItem, "group", isTimeline && "relative")}>
                {isTimeline && (
                  <div className="absolute left-0 top-8 flex h-3 w-3 -translate-x-[7px] rounded-full border-2 border-primary bg-surface" />
                )}
                <div className={cn(!isTimeline && "border-b border-primary/20 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6")}>
                  <span className={cn(typography.fontDisplay, "text-3xl font-black text-accent/30", motion.transition, "group-hover:text-accent/60")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <time className={cn(typography.fontBody, "mt-2 block text-[10px] uppercase tracking-widest text-muted")}>
                    {job.period}
                  </time>
                </div>

                <div>
                  <h3 className={cn(typography.heading, "text-sm", motion.transition, "group-hover:text-primary")}>
                    {job.role}
                  </h3>
                  <p className={cn(typography.fontBody, "mt-1 text-xs text-primary")}>@{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className={cn(typography.bodyMuted, "flex gap-3", motion.transition, "hover:translate-x-1")}
                      >
                        <span className={cn("shrink-0", semantic.accent)}>&gt;&gt;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

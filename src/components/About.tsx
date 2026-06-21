import { profile } from "../data/portfolio"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import ProfilePhoto from "./ProfilePhoto"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

const traits = [
  { code: "01", tag: "PERF", title: "FAST_EXEC", desc: "Low-latency apps tuned for speed under load." },
  { code: "02", tag: "UX", title: "TARGET_LOCK", desc: "Interfaces built around real user signal." },
  { code: "03", tag: "ARCH", title: "CLEAN_BUILD", desc: "Modular codebases that survive scale." },
  { code: "04", tag: "SHIP", title: "DEPLOY_MODE", desc: "Ship iterations fast without breaking prod." },
]

export default function About() {
  const { theme, typography, layout, motion, semantic } = useDesign()

  return (
    <section id="about" className={layout.section}>
      <div className={layout.container}>
        <ScrollReveal variant="left">
          <SectionHeader
            label="ABOUT"
            title="OPERATOR FILE"
            description="Decoded profile of a mid-level dev running full-stack builds across the modern web."
            icon="user"
          />
        </ScrollReveal>

        <div className={layout.aboutGrid}>
          <ScrollReveal variant="scale" delay={100} className="hidden lg:block">
            <ProfilePhoto />
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal variant="up" delay={150}>
              <div className={cn(theme.panel, "p-8")}>
                <p className={cn(typography.label, "text-accent")}>// LOG_ENTRY_001</p>
                <p className={cn(typography.body, "mt-4")}>
                  <span className={semantic.primary}>&gt;</span> {profile.level.toUpperCase()} WITH{" "}
                  {profile.yearsExperience} YEARS RUNNING END-TO-END WEB BUILDS. FRONTEND OPS VIA{" "}
                  <span className={semantic.highlight}>REACT</span> AND{" "}
                  <span className={semantic.highlight}>VUE</span>. BACKEND OPS VIA{" "}
                  <span className={semantic.highlight}>PYTHON</span> AND{" "}
                  <span className={semantic.highlight}>DJANGO</span>.
                </p>
                <p className={cn(typography.bodyMuted, "mt-4")}>
                  <span className={semantic.primary}>&gt;</span> OFF-CYCLE: OPEN SOURCE PATCHES, TECH
                  WRITEUPS, REVERSE-ENGINEERING NEW STACKS.
                </p>
              </div>
            </ScrollReveal>

            <div className={layout.traitsGrid}>
              {traits.map((item, i) => (
                <ScrollReveal key={item.code} variant="up" delay={200 + i * 100}>
                  <div className={cn(theme.panel, motion.transition, "h-full p-5")}>
                    <div className="flex items-center justify-between">
                      <span className={cn(typography.fontDisplay, "text-xs text-accent")}>[{item.code}]</span>
                      <span className={theme.tag}>{item.tag}</span>
                    </div>
                    <h3 className={cn(typography.heading, "mt-3 text-sm")}>{item.title}</h3>
                    <p className={cn(typography.bodyMuted, "mt-2")}>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

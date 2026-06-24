import { profile, stats } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import ProfilePhoto from "./ProfilePhoto"
import ScrollReveal from "./ScrollReveal"
import { TechIcon } from "./TechIcon"
import type { TechName } from "../lib/tech"
import { BtnPrimary, BtnSecondary, Panel } from "./ui/Themed"

const stackPreview: TechName[] = ["Python", "Django", "React", "Vue"]

export default function Hero() {
  const { classes: t } = useTheme()
  const nameDisplay =
    t.textTransform === "uppercase" ? profile.name.toUpperCase() : profile.name

  return (
    <section id="hero" className={t.hero}>
      {t.showGridFloor && (
        <div className="theme-grid-floor pointer-events-none absolute inset-0 opacity-20" />
      )}

      <div className={`${t.container} relative grid items-center gap-12 lg:grid-cols-[1fr_auto]`}>
        <div>
          <ScrollReveal variant="fade" delay={0}>
            <div className={t.badge}>
              {t.showGlitch && (
                <span className="h-2 w-2 animate-pulse bg-[#39ff14] shadow-[0_0_8px_#39ff14]" />
              )}
              {t.textTransform === "uppercase" ? "SYS.STATUS: ONLINE" : "Available for work"}
            </div>
          </ScrollReveal>

          {t.showGlitch && (
            <ScrollReveal variant="up" delay={100}>
              <p className={t.heroBoot}>
                &gt; BOOT SEQUENCE COMPLETE
                <span className="theme-cursor-blink" />
              </p>
            </ScrollReveal>
          )}

          <ScrollReveal variant="up" delay={200}>
            <h1 className={`mt-4 ${t.fontDisplay} text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${t.textPrimary}`}>
              <span className={t.heroOperator}>
                {t.textTransform === "uppercase" ? "OPERATOR" : profile.level}
              </span>
              <span
                className={`${t.heroName} ${t.showGlitch ? "theme-glitch" : ""}`}
                data-text={nameDisplay}
              >
                {nameDisplay}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={300}>
            <p className={t.heroSubtitle}>
              {t.textTransform === "uppercase" ? (
                <>
                  <span className={t.textHighlight}>&gt;&gt;</span> {profile.level.toUpperCase()} //
                  {profile.yearsExperience} YRS EXP // SPECIALIZED IN{" "}
                  <span className={t.textAccent}>FULL-STACK WEB SYSTEMS</span>
                </>
              ) : (
                <>
                  {profile.level} with {profile.yearsExperience} years building full-stack web
                  applications using Python, Django, React, and Vue.
                </>
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={400}>
            <div className="mt-6 flex flex-wrap gap-3">
              {stackPreview.map((tech) => (
                <span key={tech} className={`${t.iconHover} ${t.heroStackPill}`}>
                  <TechIcon name={tech} className="h-4 w-4" />
                  <span className={`${t.fontSans} text-[10px] ${t.textTransform} tracking-wider`}>
                    {tech}
                  </span>
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={500}>
            <div className="mt-10 flex flex-wrap gap-4">
              <BtnPrimary href="#projects">
                {t.textTransform === "uppercase" ? "VIEW_PROJECTS" : "View Projects"}
              </BtnPrimary>
              <BtnSecondary href="#contact">
                {t.textTransform === "uppercase" ? "OPEN_CHANNEL" : "Get in Touch"}
              </BtnSecondary>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={600}>
            <dl className={t.statsBorder}>
              {stats.map((stat) => (
                <Panel key={stat.label} className={`${t.statPanel} p-4`}>
                  <dt className={t.statValue}>{stat.value}</dt>
                  <dd className={t.statLabel}>{stat.label}</dd>
                </Panel>
              ))}
            </dl>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-6">
          <ScrollReveal variant="right" delay={200}>
            <ProfilePhoto className="mx-auto w-full max-w-[280px] lg:max-w-xs" />
          </ScrollReveal>

          {t.showTerminal && (
            <ScrollReveal variant="right" delay={400} className="hidden lg:block">
              <Panel className={t.terminalPanel}>
                <div className={t.terminalInner}>
                  <div className="mb-3 flex items-center gap-2 border-b border-[#00f0ff]/20 pb-3">
                    <span className="h-2.5 w-2.5 bg-[#ff2a6d]" />
                    <span className="h-2.5 w-2.5 bg-[#fcee0a]" />
                    <span className="h-2.5 w-2.5 bg-[#39ff14]" />
                    <span className={`ml-2 ${t.fontSans} text-[10px] uppercase tracking-widest ${t.textMuted}`}>
                      ~/dev/profile.json
                    </span>
                  </div>
                  <pre className={`${t.fontSans} text-[10px] leading-relaxed`}>
                    <span className={t.textAccent2}>{"{"}</span>
                    {"\n  "}
                    <span className={t.textAccent}>&quot;status&quot;</span>:{" "}
                    <span className={t.textHighlight}>&quot;DEPLOYED&quot;</span>
                    {"\n"}
                    <span className={t.textAccent2}>{"}"}</span>
                  </pre>
                </div>
              </Panel>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  )
}

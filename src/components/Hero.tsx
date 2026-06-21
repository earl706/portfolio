import { profile, stats } from "../data/portfolio"
import ProfilePhoto from "./ProfilePhoto"
import ScrollReveal from "./ScrollReveal"
import { TechIcon } from "./TechIcon"
import type { TechName } from "../lib/tech"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

const stackPreview: TechName[] = ["Python", "Django", "React", "Vue"]

export default function Hero() {
  const { theme, typography, motion, layout, fx, semantic } = useDesign()

  return (
    <section className={cn(layout.section, "relative flex min-h-screen items-center overflow-hidden pt-20")}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-accent/5 to-transparent" />
      {fx.gridFloor && (
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--accent) / 0.4) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--primary) / 0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            transform: "perspective(500px) rotateX(60deg) translateY(30%)",
            transformOrigin: "center bottom",
          }}
        />
      )}

      <div className={layout.heroGrid}>
        <div className={cn(layout.heroGrid.includes("lg:col-span") && "lg:col-span-7")}>
          <ScrollReveal variant="fade" delay={0}>
            <div className={cn(theme.badge, motion.transition)}>
              <span className="h-2 w-2 animate-pulse bg-highlight shadow-[0_0_8px_rgb(var(--highlight)/1)]" />
              SYS.STATUS: ONLINE
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={100}>
            <p className={cn(typography.fontBody, "text-sm text-primary")}>
              &gt; BOOT SEQUENCE COMPLETE<span className="cursor-blink" />
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={200}>
            <h1 className={cn(typography.heading, "mt-4 text-3xl sm:text-4xl lg:text-5xl")}>
              <span className={cn(typography.label, "block text-sm")}>OPERATOR</span>
              <span
                className={cn(fx.glitch && "glitch", "mt-2 block text-primary")}
                data-text={fx.glitch ? profile.name.toUpperCase() : undefined}
              >
                {profile.name.toUpperCase()}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={300}>
            <p className={cn(typography.body, "mt-6 max-w-lg")}>
              <span className={semantic.highlight}>&gt;&gt;</span> {profile.level.toUpperCase()} //
              {profile.yearsExperience} YRS EXP // SPECIALIZED IN{" "}
              <span className={semantic.primary}>FULL-STACK WEB SYSTEMS</span> USING PYTHON, DJANGO,
              REACT, AND VUE.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={400}>
            <div className="mt-6 flex flex-wrap gap-3">
              {stackPreview.map((tech) => (
                <span
                  key={tech}
                  className={cn(theme.tag, "icon-hover flex items-center gap-2 px-3 py-1.5")}
                >
                  <TechIcon name={tech} className="h-4 w-4" />
                  <span className={cn(typography.fontBody, "text-[10px] uppercase tracking-wider")}>{tech}</span>
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={500}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className={cn(theme.btnPrimary, motion.transition)}>
                VIEW_PROJECTS
              </a>
              <a href="#contact" className={cn(theme.btnGhost, motion.transition)}>
                OPEN_CHANNEL
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={600}>
            <dl className={cn(layout.statsGrid, "mt-14 border-t border-primary/20 pt-8")}>
              {stats.map((stat) => (
                <div key={stat.label} className={cn(theme.panel, motion.transition, "p-4")}>
                  <dt className={cn(typography.fontDisplay, "text-2xl font-bold text-highlight")}>{stat.value}</dt>
                  <dd className={cn(typography.fontBody, "mt-1 text-[10px] uppercase tracking-wider text-muted")}>
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>

        <div className={cn("flex flex-col gap-6", layout.heroGrid.includes("lg:col-span") && "lg:col-span-5")}>
          <ScrollReveal variant="right" delay={200}>
            <ProfilePhoto className="mx-auto w-full max-w-[280px] lg:max-w-xs" />
          </ScrollReveal>

          <ScrollReveal variant="right" delay={400} className="hidden lg:block">
            <div className={cn(theme.panel, "p-1")}>
              <div className={theme.panelInner}>
                <div className="mb-3 flex items-center gap-2 border-b border-primary/20 pb-3">
                  <span className="h-2.5 w-2.5 bg-accent" />
                  <span className="h-2.5 w-2.5 bg-highlight" />
                  <span className="h-2.5 w-2.5 bg-primary" />
                  <span className={cn(typography.fontBody, "ml-2 text-[10px] uppercase tracking-widest text-muted")}>
                    ~/dev/profile.json
                  </span>
                </div>
                <pre className={cn(typography.fontBody, "text-[10px] leading-relaxed")}>
                  <span className="text-accent">{"{"}</span>
                  {"\n  "}
                  <span className="text-primary">&quot;status&quot;</span>
                  <span className="text-muted">: </span>
                  <span className="text-highlight">&quot;DEPLOYED&quot;</span>
                  {"\n"}
                  <span className="text-accent">{"}"}</span>
                </pre>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

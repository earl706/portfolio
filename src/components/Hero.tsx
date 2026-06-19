import { profile, stats } from "../data/portfolio"
import ProfilePhoto from "./ProfilePhoto"
import ScrollReveal from "./ScrollReveal"
import { TechIcon } from "./TechIcon"
import type { TechName } from "../lib/tech"

const stackPreview: TechName[] = ["Python", "Django", "React", "Vue"]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neon-pink/5 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,42,109,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg) translateY(30%)",
          transformOrigin: "center bottom",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <ScrollReveal variant="fade" delay={0}>
            <div className="mb-8 inline-flex items-center gap-3 border border-neon-green/30 bg-neon-green/5 px-4 py-2 font-sans text-xs uppercase tracking-widest text-neon-green transition-all duration-500 hover:border-neon-green/60 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]">
              <span className="h-2 w-2 animate-pulse bg-neon-green shadow-[0_0_8px_#39ff14]" />
              SYS.STATUS: ONLINE
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={100}>
            <p className="font-sans text-sm text-neon-cyan">
              &gt; BOOT SEQUENCE COMPLETE<span className="cursor-blink" />
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={200}>
            <h1 className="mt-4 font-display text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
              <span className="block text-sm font-bold tracking-[0.4em] text-neon-pink">OPERATOR</span>
              <span
                className="glitch mt-2 block text-neon-cyan"
                data-text={profile.name.toUpperCase()}
              >
                {profile.name.toUpperCase()}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={300}>
            <p className="mt-6 max-w-lg font-sans text-sm leading-relaxed text-zinc-500">
              <span className="text-neon-yellow">&gt;&gt;</span> {profile.level.toUpperCase()} //
              {profile.yearsExperience} YRS EXP // SPECIALIZED IN{" "}
              <span className="text-neon-cyan">FULL-STACK WEB SYSTEMS</span> USING PYTHON, DJANGO,
              REACT, AND VUE.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={400}>
            <div className="mt-6 flex flex-wrap gap-3">
              {stackPreview.map((tech) => (
                <span
                  key={tech}
                  className="icon-hover flex items-center gap-2 border border-neon-cyan/20 bg-neon-cyan/5 px-3 py-1.5 text-neon-cyan"
                >
                  <TechIcon name={tech} className="h-4 w-4" />
                  <span className="font-sans text-[10px] uppercase tracking-wider">{tech}</span>
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={500}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="cyber-btn">
                VIEW_PROJECTS
              </a>
              <a href="#contact" className="cyber-btn-ghost">
                OPEN_CHANNEL
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={600}>
            <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-neon-cyan/20 pt-8">
              {stats.map((stat, i) => (
                <div key={stat.label} className="cyber-panel p-4" style={{ transitionDelay: `${i * 80}ms` }}>
                  <dt className="font-display text-2xl font-bold text-neon-yellow">{stat.value}</dt>
                  <dd className="mt-1 font-sans text-[10px] uppercase tracking-wider text-zinc-600">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-6">
          <ScrollReveal variant="right" delay={200}>
            <ProfilePhoto className="mx-auto w-full max-w-[280px] lg:max-w-xs" />
          </ScrollReveal>

          <ScrollReveal variant="right" delay={400} className="hidden lg:block">
            <div className="cyber-panel p-1">
              <div className="border border-neon-pink/20 bg-black p-5">
                <div className="mb-3 flex items-center gap-2 border-b border-neon-cyan/20 pb-3">
                  <span className="h-2.5 w-2.5 bg-neon-pink shadow-[0_0_6px_#ff2a6d]" />
                  <span className="h-2.5 w-2.5 bg-neon-yellow shadow-[0_0_6px_#fcee0a]" />
                  <span className="h-2.5 w-2.5 bg-neon-green shadow-[0_0_6px_#39ff14]" />
                  <span className="ml-2 font-sans text-[10px] uppercase tracking-widest text-zinc-600">
                    ~/dev/profile.json
                  </span>
                </div>
                <pre className="font-sans text-[10px] leading-relaxed">
                  <span className="text-neon-pink">{"{"}</span>
                  {"\n  "}
                  <span className="text-neon-cyan">&quot;status&quot;</span>
                  <span className="text-zinc-500">: </span>
                  <span className="text-neon-green">&quot;DEPLOYED&quot;</span>
                  {"\n"}
                  <span className="text-neon-pink">{"}"}</span>
                </pre>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

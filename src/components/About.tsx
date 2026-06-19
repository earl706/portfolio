import { profile } from "../data/portfolio"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import ProfilePhoto from "./ProfilePhoto"

const traits = [
  { code: "01", tag: "PERF", title: "FAST_EXEC", desc: "Low-latency apps tuned for speed under load." },
  { code: "02", tag: "UX", title: "TARGET_LOCK", desc: "Interfaces built around real user signal." },
  { code: "03", tag: "ARCH", title: "CLEAN_BUILD", desc: "Modular codebases that survive scale." },
  { code: "04", tag: "SHIP", title: "DEPLOY_MODE", desc: "Ship iterations fast without breaking prod." },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="left">
          <SectionHeader
            label="ABOUT"
            title="OPERATOR FILE"
            description="Decoded profile of a mid-level dev running full-stack builds across the modern web."
            icon="user"
          />
        </ScrollReveal>

        <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr]">
          <ScrollReveal variant="scale" delay={100} className="hidden lg:block">
            <ProfilePhoto />
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal variant="up" delay={150}>
              <div className="cyber-panel p-8">
                <p className="font-sans text-xs text-neon-pink">// LOG_ENTRY_001</p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-zinc-400">
                  <span className="text-neon-cyan">&gt;</span> {profile.level.toUpperCase()} WITH{" "}
                  {profile.yearsExperience} YEARS RUNNING END-TO-END WEB BUILDS. FRONTEND OPS VIA{" "}
                  <span className="text-neon-yellow">REACT</span> AND{" "}
                  <span className="text-neon-yellow">VUE</span>. BACKEND OPS VIA{" "}
                  <span className="text-neon-yellow">PYTHON</span> AND{" "}
                  <span className="text-neon-yellow">DJANGO</span>.
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-zinc-600">
                  <span className="text-neon-cyan">&gt;</span> OFF-CYCLE: OPEN SOURCE PATCHES, TECH
                  WRITEUPS, REVERSE-ENGINEERING NEW STACKS.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {traits.map((item, i) => (
                <ScrollReveal key={item.code} variant="up" delay={200 + i * 100}>
                  <div className="cyber-panel h-full p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs text-neon-pink">[{item.code}]</span>
                      <span className="cyber-tag">{item.tag}</span>
                    </div>
                    <h3 className="mt-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors duration-500 group-hover:text-neon-cyan">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-zinc-600">{item.desc}</p>
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

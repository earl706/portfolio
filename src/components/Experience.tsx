import { experience } from "../data/portfolio"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"

export default function Experience() {
  return (
    <section id="experience" className="border-y border-neon-pink/10 bg-panel/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="right">
          <SectionHeader
            label="EXPERIENCE"
            title="MISSION LOG"
            description="Chronological record of deployments across dev teams and production environments."
            icon="briefcase"
          />
        </ScrollReveal>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} variant="left" delay={i * 150}>
              <article className="cyber-panel group grid gap-4 p-6 md:grid-cols-[140px_1fr]">
                <div className="border-b border-neon-cyan/20 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                  <span className="font-display text-3xl font-black text-neon-pink/30 transition-all duration-700 group-hover:text-neon-pink/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <time className="mt-2 block font-sans text-[10px] uppercase tracking-widest text-zinc-600">
                    {job.period}
                  </time>
                </div>

                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white transition-colors duration-500 group-hover:text-neon-cyan">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-sans text-xs text-neon-cyan">@{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-sans text-xs leading-relaxed text-zinc-600 transition-all duration-500 hover:translate-x-1 hover:text-zinc-400"
                      >
                        <span className="shrink-0 text-neon-pink">&gt;&gt;</span>
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

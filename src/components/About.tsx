import { profile } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import ProfilePhoto from "./ProfilePhoto"
import { Panel, Tag } from "./ui/Themed"

const traits = [
  { code: "01", tag: "PERF", title: "Fast Execution", desc: "Low-latency apps tuned for speed under load." },
  { code: "02", tag: "UX", title: "User Focus", desc: "Interfaces built around real user signal." },
  { code: "03", tag: "ARCH", title: "Clean Architecture", desc: "Modular codebases that survive scale." },
  { code: "04", tag: "SHIP", title: "Ship Fast", desc: "Ship iterations fast without breaking prod." },
]

export default function About() {
  const { classes: t } = useTheme()

  return (
    <section id="about" className={t.section}>
      <div className={t.container}>
        <ScrollReveal variant="left">
          <SectionHeader
            label="About"
            title={t.textTransform === "uppercase" ? "OPERATOR FILE" : "About Me"}
            description={
              t.textTransform === "uppercase"
                ? "Decoded profile of a mid-level dev running full-stack builds across the modern web."
                : "A mid-level developer building end-to-end web applications with modern tools."
            }
            icon="user"
          />
        </ScrollReveal>

        <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr]">
          <ScrollReveal variant="scale" delay={100} className="hidden lg:block">
            <ProfilePhoto />
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal variant="up" delay={150}>
              <Panel className="p-8">
                <p className={`${t.fontSans} text-xs ${t.textAccent2}`}>
                  {t.textTransform === "uppercase" ? "// LOG_ENTRY_001" : "Introduction"}
                </p>
                <p className={`mt-4 ${t.fontSans} text-sm leading-relaxed ${t.textMuted}`}>
                  <span className={t.textAccent}>&gt; </span>
                  {profile.level} with {profile.yearsExperience} years building end-to-end web
                  applications. Frontend with React and Vue. Backend with Python and Django.
                </p>
              </Panel>
            </ScrollReveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {traits.map((item, i) => (
                <ScrollReveal key={item.code} variant="up" delay={200 + i * 100}>
                  <Panel className="h-full p-5">
                    <div className="flex items-center justify-between">
                      <span className={t.traitCode}>[{item.code}]</span>
                      <Tag>{item.tag}</Tag>
                    </div>
                    <h3 className={`mt-3 ${t.fontDisplay} text-sm font-bold ${t.textTransform} tracking-wider ${t.textPrimary}`}>
                      {t.textTransform === "uppercase" ? item.title.replace(/ /g, "_").toUpperCase() : item.title}
                    </h3>
                    <p className={`mt-2 ${t.fontSans} text-xs leading-relaxed ${t.textMuted}`}>{item.desc}</p>
                  </Panel>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

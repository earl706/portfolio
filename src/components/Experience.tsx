import { experience } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { Panel } from "./ui/Themed"

export default function Experience() {
  const { classes: t } = useTheme()

  return (
    <section id="experience" className={`${t.sectionAlt} section-secondary`}>
      <div className={t.container}>
        <ScrollReveal variant="fade">
          <SectionHeader
            label="Experience"
            title={t.textTransform === "uppercase" ? "MISSION LOG" : "Experience"}
            description={
              t.textTransform === "uppercase"
                ? "Chronological record of deployments across dev teams and production environments."
                : "Where I have built and shipped production software."
            }
            icon="briefcase"
            emphasis="secondary"
          />
        </ScrollReveal>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} variant="fade" delay={i * 80}>
              <Panel className={`group ${t.expPanel}`}>
                <div className={t.expSidebar}>
                  {t.expNumber !== "hidden" && (
                    <span className={t.expNumber}>{String(i + 1).padStart(2, "0")}</span>
                  )}
                  <time className={t.expPeriod}>{job.period}</time>
                </div>

                <div>
                  <h3 className={t.expRole}>{job.role}</h3>
                  <p className={t.expCompany}>@{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item) => (
                      <li key={item} className={t.expItem}>
                        {t.expBullet !== "hidden" && <span className={t.expBullet}>&gt;&gt;</span>}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Panel>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

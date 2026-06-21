import { projects } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { TechIcon } from "./TechIcon"
import { isTechName, type TechName } from "../lib/tech"
import { Panel, Tag } from "./ui/Themed"

function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  repoUrl,
  featured,
}: {
  title: string
  description: string
  tags: readonly string[]
  liveUrl: string
  repoUrl: string
  featured: boolean
}) {
  const { classes: t } = useTheme()
  const primaryTag = tags.find((tag): tag is TechName => isTechName(tag)) ?? "React"
  const thumbVisible = t.projectThumb !== "hidden"

  return (
    <Panel
      className={`group flex h-full flex-col overflow-hidden ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      {thumbVisible && (
        <div className={`${t.projectThumb} ${featured ? "min-h-[180px]" : "h-36"}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <TechIcon name={primaryTag} className={`${t.iconHover} h-16 w-16 opacity-30`} />
          </div>
          {featured && (
            <span className={t.projectFeatured}>
              {t.textTransform === "uppercase" ? "PRIORITY" : "Featured"}
            </span>
          )}
          {t.projectMeta !== "hidden" && (
            <span className={t.projectMeta}>BUILD_VER: 1.0</span>
          )}
        </div>
      )}
      {!thumbVisible && featured && (
        <span className={`mb-2 ${t.projectFeatured}`}>Featured</span>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className={t.projectTitle}>{title}</h3>
        <p className={t.projectDesc}>{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>
              {isTechName(tag) && <TechIcon name={tag} className="h-3 w-3" />}
              {tag}
            </Tag>
          ))}
        </div>

        <div className={t.projectLinksBorder}>
          <a href={liveUrl} className={t.projectLinkPrimary}>
            {t.textTransform === "uppercase" ? "[LIVE]" : "Live Demo"}
          </a>
          <a href={repoUrl} className={t.projectLinkSecondary}>
            {t.textTransform === "uppercase" ? "[SRC]" : "Source"}
          </a>
        </div>
      </div>
    </Panel>
  )
}

export default function Projects() {
  const { classes: t } = useTheme()

  return (
    <section id="projects" className={t.section}>
      <div className={t.container}>
        <ScrollReveal variant="left">
          <SectionHeader
            label="Projects"
            title={t.textTransform === "uppercase" ? "DEPLOYED BUILDS" : "Selected Work"}
            description="Production-grade systems shipped across commerce, collaboration, and SaaS domains."
            icon="folder"
          />
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.title}
              variant={i % 2 === 0 ? "up" : "scale"}
              delay={i * 100}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

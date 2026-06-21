import { projects } from "../data/portfolio"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { TechIcon } from "./TechIcon"
import { isTechName, type TechName } from "../lib/tech"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

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
  const { theme, typography, layout, motion } = useDesign()
  const primaryTag = tags.find((t): t is TechName => isTechName(t)) ?? "React"

  return (
    <article
      className={cn(
        theme.panel,
        "group flex h-full flex-col overflow-hidden",
        featured && layout.projectFeatured,
        !featured && layout.projectDefault,
      )}
    >
      <div className={cn("relative border-b border-primary/10 bg-surface", featured ? "min-h-[180px]" : "h-36")}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={cn("icon-hover text-primary/20", motion.transitionSlow, "group-hover:text-accent/40")}>
            <TechIcon name={primaryTag} className="h-16 w-16" />
          </div>
        </div>
        {featured && (
          <span className={cn("absolute left-0 top-0 bg-accent px-3 py-1 text-[10px] uppercase tracking-widest text-surface", motion.transition)}>
            PRIORITY
          </span>
        )}
        <span className={cn(typography.fontBody, "absolute bottom-2 right-3 text-[10px] text-primary/40")}>
          BUILD_VER: 1.0
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className={cn(typography.heading, "text-sm", motion.transition, "group-hover:text-primary")}>
          {title}
        </h3>
        <p className={cn(typography.bodyMuted, "mt-3 flex-1")}>{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className={cn(theme.tag, "flex items-center gap-1.5")}>
              {isTechName(tag) && <TechIcon name={tag} className="h-3 w-3" />}
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-6 border-t border-primary/10 pt-4">
          <a href={liveUrl} className={cn(theme.linkPrimary, motion.transition, "group/link flex items-center gap-2")}>
            <svg className={cn("h-3.5 w-3.5", motion.transition, "group-hover/link:rotate-12")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            [LIVE]
          </a>
          <a href={repoUrl} className={cn(theme.linkAccent, motion.transition, "group/link flex items-center gap-2")}>
            <svg className={cn("h-3.5 w-3.5", motion.transition, "group-hover/link:-rotate-12")} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            [SRC]
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { layout, preferences } = useDesign()

  return (
    <section id="projects" className={layout.section}>
      <div className={layout.container}>
        <ScrollReveal variant="left">
          <SectionHeader
            label="PROJECTS"
            title="DEPLOYED BUILDS"
            description="Production-grade systems shipped across commerce, collaboration, and SaaS domains."
            icon="folder"
          />
        </ScrollReveal>

        <div className={layout.projectsGrid}>
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.title}
              variant={i % 2 === 0 ? "up" : "scale"}
              delay={i * 100}
              className={project.featured && preferences.layout === "grid" ? "md:col-span-2" : ""}
            >
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

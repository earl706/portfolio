import { useEffect, useLayoutEffect, useState } from "react"
import type { Project } from "../data/portfolio"
import { projects } from "../data/portfolio"
import { lockBodyScroll } from "../lib/scrollLock"
import { useTheme } from "../themes/useTheme"
import ProjectModal, { MODAL_TRANSITION_MS } from "./ProjectModal"
import ProjectPreview from "./ProjectPreview"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { TechIcon } from "./TechIcon"
import { isTechName } from "../lib/tech"
import { BtnPrimary } from "./ui/Themed"

function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project
  onViewDetails: () => void
}) {
  const { classes: t } = useTheme()
  const visibleTags = project.tags.slice(0, 2)
  const extraTags = project.tags.length - visibleTags.length
  const showThumb = t.projectThumb !== "hidden"

  return (
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-md">
      {showThumb && (
        <div className="project-card-thumb h-[4.5rem] shrink-0 sm:h-20">
          <ProjectPreview type={project.preview} className="absolute inset-0" />
          {project.featured && (
            <span className="project-card-badge">
              {t.textTransform === "uppercase" ? "★" : "Featured"}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2.5 p-4 pt-3.5">
        {!showThumb && project.featured && (
          <span className={`${t.fontSans} mb-1 text-[10px] font-medium ${t.textAccent}`}>
            {t.textTransform === "uppercase" ? "FEATURED" : "Featured"}
          </span>
        )}

        <h3
          className={`${t.fontDisplay} ${t.textPrimary} truncate text-sm font-semibold leading-snug sm:text-base`}
          title={project.title}
        >
          {project.title}
        </h3>

        <p className={`${t.fontSans} ${t.textMuted} flex flex-wrap items-center gap-1.5 text-[10px]`}>
          {visibleTags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1">
              {isTechName(tag) && <TechIcon name={tag} className="h-3 w-3" />}
              {tag}
            </span>
          ))}
          {extraTags > 0 && <span>+{extraTags}</span>}
        </p>

        <BtnPrimary
          onClick={onViewDetails}
          className="mt-auto w-full justify-center px-3 py-2 text-[10px] sm:text-xs"
        >
          {t.textTransform === "uppercase" ? "VIEW_DETAILS" : "View Details"}
        </BtnPrimary>
      </div>
    </article>
  )
}

export default function Projects() {
  const { classes: t } = useTheme()
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [modalMounted, setModalMounted] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const shouldRenderModal = activeProject !== null || modalMounted

  const openProject = (project: Project) => {
    setActiveProject(project)
  }

  const closeProject = () => {
    setModalVisible(false)
  }

  useEffect(() => {
    if (activeProject) {
      const frame = requestAnimationFrame(() => {
        setModalMounted(true)
        requestAnimationFrame(() => setModalVisible(true))
      })
      return () => cancelAnimationFrame(frame)
    }
    const frame = requestAnimationFrame(() => setModalVisible(false))
    return () => cancelAnimationFrame(frame)
  }, [activeProject])

  useLayoutEffect(() => {
    if (!shouldRenderModal) return
    return lockBodyScroll()
  }, [shouldRenderModal])

  useEffect(() => {
    if (activeProject) return
    const timeout = window.setTimeout(() => setModalMounted(false), MODAL_TRANSITION_MS + 80)
    return () => window.clearTimeout(timeout)
  }, [activeProject])

  const handleModalTransitionEnd = () => {
    if (!modalVisible) setActiveProject(null)
  }

  return (
    <>
      <section id="projects" className={`${t.section} section-spotlight projects-compact relative`}>
        <div className={t.container}>
          <ScrollReveal variant="fade">
            <SectionHeader
              label="Projects"
              title={t.textTransform === "uppercase" ? "DEPLOYED BUILDS" : "Selected Work"}
              description="Tap a project for the full breakdown."
              icon="folder"
              emphasis="primary"
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} variant="fade" delay={i * 50}>
                <ProjectCard project={project} onViewDetails={() => openProject(project)} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {shouldRenderModal && (
        <ProjectModal
          project={activeProject}
          visible={modalVisible}
          onClose={closeProject}
          onPanelTransitionEnd={handleModalTransitionEnd}
        />
      )}
    </>
  )
}

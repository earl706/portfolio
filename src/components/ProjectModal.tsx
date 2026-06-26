import { useEffect } from "react"
import type { Project } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import ProjectPreview from "./ProjectPreview"
import { TechIcon } from "./TechIcon"
import { isTechName } from "../lib/tech"
import { Tag } from "./ui/Themed"

const MODAL_TRANSITION_MS = 320

type ProjectModalProps = {
  project: Project | null
  visible: boolean
  onClose: () => void
  onPanelTransitionEnd: () => void
}

export default function ProjectModal({
  project,
  visible,
  onClose,
  onPanelTransitionEnd,
}: ProjectModalProps) {
  const { classes: t } = useTheme()

  useEffect(() => {
    if (!project) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className={`project-modal-overlay scroll-lock-compensate ${visible ? "is-open" : ""} ${t.settingsOverlay} flex items-center justify-center overflow-y-auto p-3 sm:p-4`}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onClick={onClose}
    >
      <div
        className={`project-modal-panel ${visible ? "is-open" : ""} my-auto w-full max-w-2xl rounded-sm border border-current/10 bg-[var(--theme-panel)] text-[var(--theme-highlight)] shadow-lg`}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget || e.propertyName !== "transform") return
          onPanelTransitionEnd()
        }}
      >
        <div className="project-modal-thumb h-44 sm:h-52">
          <ProjectPreview type={project.preview} className="absolute inset-0" />
          {project.featured && (
            <span className="project-card-badge left-4 top-4 px-3 py-1 text-xs">
              {t.textTransform === "uppercase" ? "PRIORITY" : "Featured"}
            </span>
          )}
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className={`${t.fontDisplay} text-xl font-semibold ${t.textPrimary}`}>
              {project.title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className={`${t.settingsBtn} shrink-0 cursor-pointer`}
              aria-label="Close project details"
            >
              ✕
            </button>
          </div>

          <p className={`${t.projectDesc} mt-3 ${t.textMuted}`}>{project.description}</p>

          <ul className={`mt-5 space-y-2 ${t.fontSans} text-sm ${t.textMuted}`}>
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className={t.textAccent} aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>
                {isTechName(tag) && <TechIcon name={tag} className="h-3 w-3" />}
                {tag}
              </Tag>
            ))}
          </div>

          <div className={t.projectLinksBorder}>
            <a href={project.liveUrl} className={t.projectLinkPrimary}>
              {t.textTransform === "uppercase" ? "[LIVE]" : "Live Demo"}
            </a>
            <a href={project.repoUrl} className={t.projectLinkSecondary}>
              {t.textTransform === "uppercase" ? "[SRC]" : "Source"}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MODAL_TRANSITION_MS }

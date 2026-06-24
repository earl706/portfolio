import type { ProjectPreviewType } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"

type Props = {
  type: ProjectPreviewType
  className?: string
}

export default function ProjectPreview({ type, className = "" }: Props) {
  const { classes: t } = useTheme()

  return (
    <div
      className={`project-preview relative overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="project-preview-chrome">
        <span className="project-preview-dot" />
        <span className="project-preview-dot" />
        <span className="project-preview-dot" />
      </div>
      <div className={`project-preview-body ${t.textAccent}`}>
        {type === "ecommerce" && <EcommerceMock />}
        {type === "kanban" && <KanbanMock />}
        {type === "saas" && <SaasMock />}
        {type === "dashboard" && <DashboardMock />}
      </div>
    </div>
  )
}

function EcommerceMock() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-3">
      <div className="col-span-1 space-y-2">
        <div className="project-preview-block h-3 w-3/4" />
        <div className="project-preview-block h-2 w-full opacity-60" />
        <div className="project-preview-block h-2 w-5/6 opacity-60" />
        <div className="project-preview-block mt-3 h-8 w-full rounded-md" />
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="project-preview-card rounded-md p-2">
            <div className="project-preview-block mb-2 h-10 w-full rounded-sm" />
            <div className="project-preview-block h-2 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  )
}

function KanbanMock() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-3">
      {["Todo", "Doing", "Done"].map((col) => (
        <div key={col} className="project-preview-card rounded-md p-2">
          <div className="project-preview-block mb-2 h-2 w-1/2" />
          <div className="space-y-1.5">
            <div className="project-preview-block h-6 w-full rounded-sm" />
            <div className="project-preview-block h-6 w-full rounded-sm opacity-80" />
          </div>
        </div>
      ))}
    </div>
  )
}

function SaasMock() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="project-preview-block h-4 w-1/3" />
      <div className="project-preview-card flex flex-1 flex-col rounded-md p-3">
        <div className="project-preview-block mb-2 h-2 w-full" />
        <div className="project-preview-block mb-2 h-2 w-5/6 opacity-70" />
        <div className="project-preview-block mb-2 h-2 w-4/6 opacity-70" />
        <div className="mt-auto project-preview-block h-6 w-24 rounded-md" />
      </div>
    </div>
  )
}

function DashboardMock() {
  return (
    <div className="grid h-full grid-cols-4 gap-2 p-3">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="project-preview-card rounded-md p-2">
          <div className="project-preview-block mb-1 h-2 w-1/2 opacity-70" />
          <div className="project-preview-block h-4 w-3/4" />
        </div>
      ))}
      <div className="project-preview-card col-span-3 rounded-md p-2">
        <div className="flex h-full items-end gap-1">
          {[40, 65, 45, 80, 55, 70].map((h, i) => (
            <div
              key={i}
              className="project-preview-block flex-1 rounded-t-sm"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="project-preview-card rounded-md p-2">
        <div className="project-preview-block mx-auto mt-2 h-12 w-12 rounded-full" />
      </div>
    </div>
  )
}

import type { ReactNode } from "react"
import { useDesign } from "../hooks/useDesign"
import { cn } from "../design/cn"

type SectionHeaderProps = {
  label: string
  title: string
  description?: string
  icon?: "user" | "cpu" | "folder" | "briefcase" | "mail"
}

const sectionIcons: Record<NonNullable<SectionHeaderProps["icon"]>, ReactNode> = {
  user: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  cpu: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  folder: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  briefcase: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  mail: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
}

export default function SectionHeader({ label, title, description, icon }: SectionHeaderProps) {
  const { theme, typography, motion } = useDesign()

  return (
    <div className="mb-14">
      <div className="mb-2 flex items-center gap-3">
        {icon && (
          <span className={cn(theme.iconBox, "icon-hover h-9 w-9")}>
            {sectionIcons[icon]}
          </span>
        )}
        <p className={typography.label}>// {label}</p>
      </div>
      <h2 className={cn(typography.heading, "text-2xl sm:text-3xl")}>
        <span className={theme.headingPrefix}>&gt;</span> {title}
      </h2>
      <div className={cn(theme.sectionDivider, motion.transitionSlow)} />
      {description && <p className={cn(typography.body, "mt-5 max-w-2xl")}>{description}</p>}
    </div>
  )
}

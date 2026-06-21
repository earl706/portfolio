import type { ReactNode } from "react"
import { useTheme } from "../../themes/useTheme"

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const { classes: t } = useTheme()
  return <div className={`${t.panel} ${className}`}>{children}</div>
}

export function BtnPrimary({
  children,
  className = "",
  href,
  onClick,
  type = "button",
}: {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: "button" | "submit"
}) {
  const { classes: t } = useTheme()
  const cls = `${t.btnPrimary} ${className}`
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

export function BtnSecondary({
  children,
  className = "",
  href,
}: {
  children: ReactNode
  className?: string
  href?: string
}) {
  const { classes: t } = useTheme()
  return (
    <a href={href} className={`${t.btnSecondary} ${className}`}>
      {children}
    </a>
  )
}

export function Tag({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const { classes: t } = useTheme()
  return <span className={`${t.tag} ${className}`}>{children}</span>
}

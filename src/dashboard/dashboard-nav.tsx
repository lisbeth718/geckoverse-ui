import { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../utils"

export interface DashboardNavItemProps {
  href: string
  icon?: ReactNode
  badge?: ReactNode
  /** Override active detection */
  active?: boolean
  /** Click handler (e.g. to close mobile menu) */
  onClick?: () => void
  children: ReactNode
  className?: string
}

export function DashboardNavItem({
  href,
  icon,
  badge,
  active,
  onClick,
  children,
  className,
}: DashboardNavItemProps) {
  const pathname = usePathname()
  const isActive = active ?? (
    href === "/app" || href === "/"
      ? pathname === href
      : pathname.startsWith(href)
  )

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-all rounded-xl",
        isActive
          ? "bg-[var(--accent)] text-[var(--background)]"
          : "text-[var(--foreground-muted)] hover:bg-[var(--background-elevated)] hover:text-[var(--foreground)]",
        className
      )}
    >
      {icon && (
        <span className={cn(
          "h-5 w-5 flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5",
          isActive
            ? "text-[var(--background)]"
            : "text-[var(--foreground-subtle)] group-hover:text-[var(--accent)]"
        )}>
          {icon}
        </span>
      )}
      <span className="flex-1">{children}</span>
      {badge}
    </Link>
  )
}

export interface DashboardNavGroupProps {
  label?: string
  children: ReactNode
  className?: string
}

export function DashboardNavGroup({
  label,
  children,
  className,
}: DashboardNavGroupProps) {
  return (
    <div className={cn("space-y-1", className)}>
      {label && (
        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground-subtle)]">
          {label}
        </p>
      )}
      {children}
    </div>
  )
}

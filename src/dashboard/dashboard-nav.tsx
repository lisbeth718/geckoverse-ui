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
  /** Whether sidebar is in collapsed mode */
  collapsed?: boolean
  /** Custom class for the active state (replaces default active styling) */
  activeClassName?: string
  children: ReactNode
  className?: string
}

export function DashboardNavItem({
  href,
  icon,
  badge,
  active,
  onClick,
  collapsed = false,
  activeClassName,
  children,
  className,
}: DashboardNavItemProps) {
  const pathname = usePathname()
  const isActive = active ?? (
    href === "/app" || href === "/"
      ? pathname === href
      : pathname.startsWith(href)
  )

  const defaultActiveClass = "bg-[var(--accent)] text-[var(--background)]"
  const activeClass = activeClassName || defaultActiveClass

  return (
    <Link
      href={href}
      onClick={onClick}
      title={collapsed ? (typeof children === "string" ? children : undefined) : undefined}
      className={cn(
        "group flex items-center text-sm font-medium transition-all rounded-xl relative",
        collapsed ? "justify-center px-0 py-2.5 w-full" : "gap-3 px-3 py-2.5",
        isActive
          ? activeClass
          : "text-[var(--foreground-muted)] hover:bg-[var(--background-elevated)] hover:text-[var(--foreground)]",
        className
      )}
    >
      {icon && (
        <span className={cn(
          "h-5 w-5 flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5 flex-shrink-0",
          isActive && !activeClassName
            ? "text-[var(--background)]"
            : isActive && activeClassName
              ? ""
              : "text-[var(--foreground-subtle)] group-hover:text-[var(--accent)]"
        )}>
          {icon}
        </span>
      )}
      {!collapsed && (
        <>
          <span className="flex-1 truncate">{children}</span>
          {badge}
        </>
      )}
    </Link>
  )
}

export interface DashboardNavGroupProps {
  label?: string
  collapsed?: boolean
  children: ReactNode
  className?: string
}

export function DashboardNavGroup({
  label,
  collapsed = false,
  children,
  className,
}: DashboardNavGroupProps) {
  return (
    <div className={cn("space-y-1", className)}>
      {label && !collapsed && (
        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground-subtle)]">
          {label}
        </p>
      )}
      {label && collapsed && (
        <div className="mx-auto my-2 w-6 border-t border-[var(--border)]" />
      )}
      {children}
    </div>
  )
}

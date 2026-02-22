import { ReactNode } from "react"
import { cn } from "../utils"

export interface DashboardSidebarProps {
  brand: ReactNode
  children: ReactNode
  footer?: ReactNode
  collapsed?: boolean
  className?: string
}

export function DashboardSidebar({
  brand,
  children,
  footer,
  collapsed = false,
  className,
}: DashboardSidebarProps) {
  return (
    <aside className={cn(
      "hidden flex-shrink-0 border-r border-[var(--border)] bg-[var(--background)] md:flex md:flex-col transition-all duration-200",
      collapsed ? "w-[72px]" : "w-64",
      className
    )}>
      {/* Brand */}
      <div className={cn(
        "flex h-16 items-center border-b border-[var(--border)]",
        collapsed ? "justify-center px-2" : "px-5"
      )}>
        {brand}
      </div>

      {/* Navigation */}
      <nav className={cn(
        "flex-1 overflow-y-auto py-4",
        collapsed ? "px-2 space-y-1" : "px-3 space-y-1"
      )}>
        {children}
      </nav>

      {/* Footer */}
      {footer && (
        <div className={cn(
          "border-t border-[var(--border)]",
          collapsed ? "p-2" : "p-4"
        )}>
          {footer}
        </div>
      )}
    </aside>
  )
}

import { ReactNode } from "react"
import { cn } from "../utils"

export interface DashboardSidebarProps {
  brand: ReactNode
  children: ReactNode
  footer?: ReactNode
  className?: string
}

export function DashboardSidebar({
  brand,
  children,
  footer,
  className,
}: DashboardSidebarProps) {
  return (
    <aside className={cn(
      "hidden w-64 flex-shrink-0 border-r border-[var(--border)] bg-[var(--background)] md:flex md:flex-col",
      className
    )}>
      {/* Brand */}
      <div className="flex h-16 items-center border-b border-[var(--border)] px-5">
        {brand}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {children}
      </nav>

      {/* Footer */}
      {footer && (
        <div className="border-t border-[var(--border)] p-4">
          {footer}
        </div>
      )}
    </aside>
  )
}

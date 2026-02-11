import { ReactNode } from "react"
import { cn } from "../utils"
import { Button } from "../ui/button"

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export interface DashboardHeaderProps {
  onMenuClick?: () => void
  title?: string
  children?: ReactNode
  className?: string
}

export function DashboardHeader({
  onMenuClick,
  title,
  children,
  className,
}: DashboardHeaderProps) {
  return (
    <header className={cn(
      "flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-6",
      className
    )}>
      <div className="flex items-center gap-4">
        {onMenuClick && (
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
        )}
        {title && (
          <h1 className="text-lg font-semibold text-[var(--foreground)]">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-3">
        {children}
      </div>
    </header>
  )
}

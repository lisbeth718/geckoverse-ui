import { ReactNode } from "react"
import { cn } from "../utils"

export interface DashboardShellProps {
  sidebar: ReactNode
  header: ReactNode
  children: ReactNode
  className?: string
}

export function DashboardShell({
  sidebar,
  header,
  children,
  className,
}: DashboardShellProps) {
  return (
    <div className={cn("flex h-screen bg-[var(--background)]", className)}>
      {sidebar}
      <div className="flex flex-1 flex-col overflow-hidden">
        {header}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

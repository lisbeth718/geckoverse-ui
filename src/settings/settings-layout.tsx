import { ReactNode } from "react"
import { cn } from "../utils"

export interface SettingsLayoutProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function SettingsLayout({
  title,
  description,
  children,
  className,
}: SettingsLayoutProps) {
  return (
    <div className={cn("max-w-2xl space-y-6", className)}>
      <div>
        <h1 className="text-2xl font-bold text-[var(--foreground)]">{title}</h1>
        {description && (
          <p className="text-[var(--foreground-muted)]">{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}

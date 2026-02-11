import { ReactNode } from "react"
import { cn } from "../utils"
import { Button } from "./button"

export interface EmptyStateProps {
  title: string
  description?: string
  icon?: ReactNode
  action?: {
    label: string
    onClick?: () => void
    href?: string
  }
  className?: string
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("text-center py-12 px-4", className)}>
      {icon && (
        <div className="flex justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-[var(--foreground-muted)] mb-6 max-w-md mx-auto">
          {description}
        </p>
      )}
      {action && (
        action.href ? (
          <a href={action.href}>
            <Button>{action.label}</Button>
          </a>
        ) : action.onClick ? (
          <Button onClick={action.onClick}>{action.label}</Button>
        ) : null
      )}
    </div>
  )
}

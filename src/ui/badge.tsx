import { HTMLAttributes, ReactNode } from "react"
import { cn } from "../utils"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "critical" | "info" | "accent" | "secondary"
  size?: "sm" | "md"
  children: ReactNode
}

export function Badge({
  variant = "default",
  size = "sm",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-[var(--background)] text-[var(--foreground-muted)]",
    success: "bg-[var(--success-bg)] text-[var(--success)]",
    warning: "bg-[var(--warning-bg)] text-[var(--warning)]",
    critical: "bg-[var(--critical-bg)] text-[var(--critical)]",
    info: "bg-[var(--info-bg)] text-[var(--info)]",
    accent: "bg-[var(--accent)] text-[var(--background)]",
    secondary: "bg-[var(--background-elevated)] text-[var(--foreground-muted)] border border-[var(--border)]",
  }

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

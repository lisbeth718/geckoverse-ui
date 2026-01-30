import { HTMLAttributes, forwardRef, ReactNode } from "react"
import { cn } from "../utils"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  padding?: "none" | "sm" | "md" | "lg"
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hover = false, padding = "md", children, ...props }, ref) => {
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "bg-[var(--background-elevated)] rounded-2xl border border-[var(--border)]",
          hover && "hover:border-[var(--accent)] transition-colors cursor-pointer",
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

export function CardHeader({
  className = "",
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn("mb-4", className)}>{children}</div>
}

export function CardTitle({
  className = "",
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <h3 className={cn("text-lg font-bold text-[var(--foreground)]", className)}>
      {children}
    </h3>
  )
}

export function CardDescription({
  className = "",
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <p className={cn("text-sm text-[var(--foreground-muted)] mt-1", className)}>
      {children}
    </p>
  )
}

export function CardContent({
  className = "",
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn("", className)}>{children}</div>
}

export function CardFooter({
  className = "",
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn("mt-4 flex items-center", className)}>{children}</div>
}

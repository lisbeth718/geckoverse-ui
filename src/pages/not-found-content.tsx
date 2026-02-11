import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "../utils"
import { Button } from "../ui/button"

interface NotFoundAction {
  label: string
  href: string
}

export interface NotFoundContentProps {
  title?: string
  description?: string
  illustration: ReactNode
  primaryAction: NotFoundAction
  secondaryAction?: NotFoundAction
  className?: string
}

export function NotFoundContent({
  title = "Page not found",
  description = "The page you're looking for doesn't exist. Maybe it crawled away, or maybe it was never here.",
  illustration,
  primaryAction,
  secondaryAction,
  className,
}: NotFoundContentProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center px-6 py-24", className)}>
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-8">
          {illustration}
        </div>

        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        <p className="text-[var(--foreground-muted)] mb-8">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryAction.href}>
            <Button variant="primary" size="lg">{primaryAction.label}</Button>
          </Link>
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <Button variant="secondary" size="lg">{secondaryAction.label}</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

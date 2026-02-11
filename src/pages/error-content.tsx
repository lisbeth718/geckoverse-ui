"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "../utils"
import { Button } from "../ui/button"

export interface ErrorContentProps {
  title?: string
  description?: string
  illustration: ReactNode
  onReset: () => void
  primaryAction?: { label: string; href: string }
  className?: string
}

export function ErrorContent({
  title = "Something went wrong",
  description = "An unexpected error occurred. Try again, or head back home if the problem persists.",
  illustration,
  onReset,
  primaryAction,
  className,
}: ErrorContentProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center px-6 py-24", className)}>
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-8">
          {illustration}
        </div>

        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        <p className="text-[var(--foreground-muted)] mb-8">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" onClick={onReset}>
            Try again
          </Button>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <Button variant="secondary" size="lg">{primaryAction.label}</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

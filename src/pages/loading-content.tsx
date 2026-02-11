import { ReactNode } from "react"
import { cn } from "../utils"

export interface LoadingContentProps {
  illustration: ReactNode
  message?: string
  className?: string
}

export function LoadingContent({
  illustration,
  message,
  className,
}: LoadingContentProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-[60vh] px-6", className)}>
      <div className="flex justify-center mb-4">
        {illustration}
      </div>
      {message && (
        <p className="text-sm text-[var(--foreground-muted)]">{message}</p>
      )}
    </div>
  )
}

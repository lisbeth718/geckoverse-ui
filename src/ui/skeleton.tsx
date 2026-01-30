import { cn } from "../utils"

// Basic skeleton loader
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md",
        "bg-[var(--background-subtle,#1a1a1f)]",
        className
      )}
      {...props}
    />
  )
}

// Text skeleton (for paragraphs)
export function SkeletonText({
  lines = 3,
  className
}: {
  lines?: number
  className?: string
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-4/5" : "w-full"
          )}
        />
      ))}
    </div>
  )
}

// Card skeleton
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "p-4 rounded-xl",
        "bg-[var(--background-elevated,#141418)]",
        "border border-[var(--border,rgba(255,255,255,0.06))]",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <SkeletonText lines={2} />
    </div>
  )
}

// Avatar skeleton
export function SkeletonAvatar({
  size = "md",
  className
}: {
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14"
  }

  return (
    <Skeleton
      className={cn("rounded-full", sizeClasses[size], className)}
    />
  )
}

// Button skeleton
export function SkeletonButton({
  size = "md",
  className
}: {
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const sizeClasses = {
    sm: "h-8 w-20",
    md: "h-10 w-24",
    lg: "h-12 w-32"
  }

  return (
    <Skeleton
      className={cn("rounded-lg", sizeClasses[size], className)}
    />
  )
}

// Table row skeleton
export function SkeletonTableRow({
  columns = 4,
  className
}: {
  columns?: number
  className?: string
}) {
  return (
    <div className={cn("flex gap-4 py-3", className)}>
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4 flex-1",
            i === 0 ? "max-w-[200px]" : ""
          )}
        />
      ))}
    </div>
  )
}

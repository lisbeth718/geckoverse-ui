import { cn } from "../utils"

export interface ProgressProps {
  value: number
  max?: number
  className?: string
  variant?: "default" | "success" | "warning" | "error"
  size?: "sm" | "md" | "lg"
  showValue?: boolean
}

export function Progress({
  value,
  max = 100,
  className,
  variant = "default",
  size = "md",
  showValue = false
}: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3"
  }

  const variantClasses = {
    default: "bg-[var(--accent-cta,#00d4ff)]",
    success: "bg-[var(--success,#2ed573)]",
    warning: "bg-[var(--warning,#ffa502)]",
    error: "bg-[var(--critical,#ff4757)]"
  }

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "w-full rounded-full overflow-hidden",
          "bg-[var(--background-subtle,#1a1a1f)]",
          sizeClasses[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300 ease-out",
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showValue && (
        <div className="mt-1 text-xs text-[var(--foreground-muted,#a0a0b0)] text-right">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  )
}

// Circular progress (like a score ring)
export function CircularProgress({
  value,
  max = 100,
  size = 64,
  strokeWidth = 4,
  className,
  variant = "default",
  showValue = true
}: {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  className?: string
  variant?: "default" | "success" | "warning" | "error"
  showValue?: boolean
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  const variantColors = {
    default: "var(--accent-cta, #00d4ff)",
    success: "var(--success, #2ed573)",
    warning: "var(--warning, #ffa502)",
    error: "var(--critical, #ff4757)"
  }

  return (
    <div className={cn("relative inline-flex", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--background-subtle, #1a1a1f)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={variantColors[variant]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium text-[var(--foreground,#f8f8fa)]">
            {Math.round(percentage)}
          </span>
        </div>
      )}
    </div>
  )
}

import { useEffect, useCallback, ReactNode } from "react"
import { cn } from "../utils"

export interface DialogProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

// Main Dialog component
export function Dialog({ open, onClose, children, className }: DialogProps) {
  // Close on escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, handleKeyDown])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Dialog container */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className={cn(
            "relative w-full max-w-md",
            "bg-[var(--background-elevated,#141418)]",
            "border border-[var(--border,rgba(255,255,255,0.06))]",
            "rounded-xl shadow-xl",
            "animate-dialog-in",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes dialog-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.15s ease-out; }
        .animate-dialog-in { animation: dialog-in 0.2s ease-out; }
      `}</style>
    </div>
  )
}

// Dialog header
export function DialogHeader({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("px-6 pt-6 pb-2", className)}>
      {children}
    </div>
  )
}

// Dialog title
export function DialogTitle({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2 className={cn("text-lg font-semibold text-[var(--foreground,#f8f8fa)]", className)}>
      {children}
    </h2>
  )
}

// Dialog description
export function DialogDescription({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-sm text-[var(--foreground-muted,#a0a0b0)] mt-1", className)}>
      {children}
    </p>
  )
}

// Dialog content/body
export function DialogContent({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("px-6 py-4", className)}>
      {children}
    </div>
  )
}

// Dialog footer (for actions)
export function DialogFooter({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn(
      "px-6 py-4 flex justify-end gap-3",
      "border-t border-[var(--border,rgba(255,255,255,0.06))]",
      className
    )}>
      {children}
    </div>
  )
}

// Confirm dialog - common use case
export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default"
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description?: string
  confirmText?: string
  cancelText?: string
  variant?: "default" | "danger"
}) {
  const confirmButtonClass = variant === "danger"
    ? "bg-[var(--critical,#ff4757)] hover:bg-[var(--critical,#ff4757)]/90"
    : "bg-[var(--accent-cta,#00d4ff)] hover:bg-[var(--accent-cta,#00d4ff)]/90"

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
      <DialogFooter>
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium rounded-lg text-[var(--foreground-muted,#a0a0b0)] hover:text-[var(--foreground,#f8f8fa)] transition-colors"
        >
          {cancelText}
        </button>
        <button
          onClick={() => {
            onConfirm()
            onClose()
          }}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-lg text-white transition-colors",
            confirmButtonClass
          )}
        >
          {confirmText}
        </button>
      </DialogFooter>
    </Dialog>
  )
}

import { useEffect, useCallback, ReactNode } from "react"
import { cn } from "../utils"

export interface DrawerProps {
  open: boolean
  onClose: () => void
  side?: "left" | "right"
  children: ReactNode
  className?: string
}

export function Drawer({ open, onClose, side = "left", children, className }: DrawerProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
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

  const slideFrom = side === "left" ? "drawer-slide-left" : "drawer-slide-right"

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-drawer-fade-in"
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute inset-y-0 h-full w-3/4 sm:max-w-sm",
          "bg-[var(--background-elevated)] border-[var(--border)] shadow-lg",
          side === "left" ? "left-0 border-r" : "right-0 border-l",
          `animate-${slideFrom}`,
          className
        )}
      >
        {children}
      </div>

      <style>{`
        @keyframes drawer-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drawer-slide-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes drawer-slide-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-drawer-fade-in { animation: drawer-fade-in 0.15s ease-out; }
        .animate-drawer-slide-left { animation: drawer-slide-left 0.2s ease-out; }
        .animate-drawer-slide-right { animation: drawer-slide-right 0.2s ease-out; }
      `}</style>
    </div>
  )
}

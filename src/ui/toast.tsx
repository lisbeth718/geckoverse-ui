import { createContext, useContext, useState, useCallback, ReactNode } from "react"
import { cn } from "../utils"

// Toast types
export type ToastVariant = "default" | "success" | "error" | "warning" | "info"

export interface Toast {
  id: string
  message: string
  variant?: ToastVariant
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

// Hook to use toast
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  const toast = useCallback((message: string, variant: ToastVariant = "default", duration = 4000) => {
    context.addToast({ message, variant, duration })
  }, [context])

  return {
    toast,
    success: (message: string) => toast(message, "success"),
    error: (message: string) => toast(message, "error"),
    warning: (message: string) => toast(message, "warning"),
    info: (message: string) => toast(message, "info"),
  }
}

// Toast Provider
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...toast, id }
    setToasts(prev => [...prev, newToast])

    // Auto remove after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, toast.duration || 4000)
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <Toaster toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  )
}

// Toaster component (renders all toasts)
function Toaster({
  toasts,
  onRemove
}: {
  toasts: Toast[]
  onRemove: (id: string) => void
}) {
  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  )
}

// Individual toast
function ToastItem({
  toast,
  onRemove
}: {
  toast: Toast
  onRemove: (id: string) => void
}) {
  const variantStyles: Record<ToastVariant, string> = {
    default: "bg-[var(--background-elevated,#1a1a1f)] border-[var(--border,rgba(255,255,255,0.1))]",
    success: "bg-[var(--success-bg,rgba(46,213,115,0.1))] border-[var(--success,#2ed573)] text-[var(--success,#2ed573)]",
    error: "bg-[var(--critical-bg,rgba(255,71,87,0.1))] border-[var(--critical,#ff4757)] text-[var(--critical,#ff4757)]",
    warning: "bg-[var(--warning-bg,rgba(255,165,2,0.1))] border-[var(--warning,#ffa502)] text-[var(--warning,#ffa502)]",
    info: "bg-[var(--info-bg,rgba(112,161,255,0.1))] border-[var(--info,#70a1ff)] text-[var(--info,#70a1ff)]",
  }

  return (
    <div
      className={cn(
        "px-4 py-3 rounded-lg border shadow-lg",
        "animate-slide-in-right",
        "flex items-center justify-between gap-3",
        "text-sm",
        variantStyles[toast.variant || "default"]
      )}
    >
      <span>{toast.message}</span>
      <button
        onClick={() => onRemove(toast.id)}
        className="opacity-60 hover:opacity-100 transition-opacity"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.2s ease-out;
        }
      `}</style>
    </div>
  )
}

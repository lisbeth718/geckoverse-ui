import { useState, useRef, useEffect, ReactNode } from "react"
import { cn } from "../utils"
import { Button } from "../ui/button"

export interface DashboardUserMenuProps {
  user: {
    name?: string
    email: string
  }
  onSignOut: () => void
  menuItems?: Array<{
    label: string
    icon?: ReactNode
    onClick: () => void
    variant?: "default" | "danger"
  }>
  className?: string
}

export function DashboardUserMenu({
  user,
  onSignOut,
  menuItems = [],
  className,
}: DashboardUserMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on click outside
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  // Close on escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [open])

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : user.email[0].toUpperCase()

  return (
    <div ref={ref} className={cn("relative", className)}>
      <Button
        variant="ghost"
        onClick={() => setOpen(!open)}
        className="relative h-10 w-10 p-0"
      >
        <div className="w-10 h-10 bg-[var(--background-elevated)] border border-[var(--border)] rounded-xl flex items-center justify-center hover:border-[var(--accent)] transition-colors">
          <span className="text-sm font-semibold text-[var(--accent)]">
            {initials}
          </span>
        </div>
      </Button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-lg z-50">
          {/* User info */}
          <div className="border-b border-[var(--border)] px-4 py-3">
            <p className="text-sm font-medium text-[var(--foreground)]">
              {user.name || "User"}
            </p>
            <p className="text-xs text-[var(--foreground-subtle)]">
              {user.email}
            </p>
          </div>

          {/* Menu items */}
          {menuItems.length > 0 && (
            <div className="py-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.onClick()
                    setOpen(false)
                  }}
                  className={cn(
                    "w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors",
                    item.variant === "danger"
                      ? "text-[var(--critical)] hover:bg-[var(--critical)]/10"
                      : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-subtle)]"
                  )}
                >
                  {item.icon && (
                    <span className="h-4 w-4 flex items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Sign out */}
          <div className="border-t border-[var(--border)] py-1">
            <button
              onClick={() => {
                onSignOut()
                setOpen(false)
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--critical)] hover:bg-[var(--critical)]/10 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

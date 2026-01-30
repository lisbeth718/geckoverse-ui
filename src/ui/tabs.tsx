import { createContext, useContext, useState, ReactNode } from "react"
import { cn } from "../utils"

// Context for tab state
interface TabsContextType {
  activeTab: string
  setActiveTab: (id: string) => void
}

const TabsContext = createContext<TabsContextType | null>(null)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider")
  }
  return context
}

// Main Tabs container
export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className
}: {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: ReactNode
  className?: string
}) {
  const [internalValue, setInternalValue] = useState(defaultValue || "")

  const activeTab = value !== undefined ? value : internalValue
  const setActiveTab = (id: string) => {
    if (value === undefined) {
      setInternalValue(id)
    }
    onValueChange?.(id)
  }

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

// Tab list (container for triggers)
export function TabsList({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex gap-1 p-1 rounded-lg",
        "bg-[var(--background-subtle,#1a1a1f)]",
        "border border-[var(--border,rgba(255,255,255,0.06))]",
        className
      )}
      role="tablist"
    >
      {children}
    </div>
  )
}

// Individual tab trigger
export function TabsTrigger({
  value,
  children,
  className,
  disabled = false
}: {
  value: string
  children: ReactNode
  className?: string
  disabled?: boolean
}) {
  const { activeTab, setActiveTab } = useTabsContext()
  const isActive = activeTab === value

  return (
    <button
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => !disabled && setActiveTab(value)}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent,#e0e0ec)]",
        isActive
          ? "bg-[var(--background-elevated,#141418)] text-[var(--foreground,#f8f8fa)] shadow-sm"
          : "text-[var(--foreground-muted,#a0a0b0)] hover:text-[var(--foreground,#f8f8fa)]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  )
}

// Tab content panel
export function TabsContent({
  value,
  children,
  className
}: {
  value: string
  children: ReactNode
  className?: string
}) {
  const { activeTab } = useTabsContext()

  if (activeTab !== value) return null

  return (
    <div
      role="tabpanel"
      className={cn("mt-4 animate-fade-in", className)}
    >
      {children}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.15s ease-out;
        }
      `}</style>
    </div>
  )
}

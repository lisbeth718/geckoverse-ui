import { ReactNode } from "react"
import { cn } from "../utils"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Button } from "../ui/button"

export interface SettingsProfileSectionProps {
  onSave: () => void
  saving?: boolean
  error?: string | null
  children: ReactNode
  className?: string
}

export function SettingsProfileSection({
  onSave,
  saving = false,
  error,
  children,
  className,
}: SettingsProfileSectionProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Your personal account information</CardDescription>
        </CardHeader>
        <div className="space-y-4">
          {children}
        </div>
      </Card>

      {error && (
        <div className="rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]">
          {error}
        </div>
      )}

      <div className="flex justify-end">
        <Button onClick={onSave} loading={saving}>
          Save changes
        </Button>
      </div>
    </div>
  )
}

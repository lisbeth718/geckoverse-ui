import { useState, FormEvent } from "react"
import { cn } from "../utils"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export interface SettingsEmailSectionProps {
  currentEmail: string
  onUpdate: (newEmail: string) => Promise<void>
  className?: string
}

export function SettingsEmailSection({
  currentEmail,
  onUpdate,
  className,
}: SettingsEmailSectionProps) {
  const [newEmail, setNewEmail] = useState("")
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault()
    if (!newEmail || newEmail === currentEmail) return

    setSaving(true)
    setError("")
    setSuccess(false)

    try {
      await onUpdate(newEmail)
      setSuccess(true)
      setNewEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update email")
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Change email</CardTitle>
        <CardDescription>
          Update your email address. We&apos;ll send a confirmation link to both your current and new email.
        </CardDescription>
      </CardHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--foreground-muted)]">
            Current email
          </label>
          <Input value={currentEmail} disabled />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--foreground-muted)]">
            New email
          </label>
          <Input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Enter new email address"
          />
        </div>
        {error && (
          <p className="text-sm text-[var(--critical)]">{error}</p>
        )}
        {success && (
          <p className="text-sm text-[var(--success)]">
            Confirmation email sent. Check your inbox.
          </p>
        )}
        <Button
          variant="secondary"
          onClick={handleSubmit}
          loading={saving}
          disabled={!newEmail || newEmail === currentEmail}
        >
          Update email
        </Button>
      </div>
    </Card>
  )
}

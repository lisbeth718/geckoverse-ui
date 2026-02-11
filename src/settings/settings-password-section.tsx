import { useState, FormEvent } from "react"
import { cn } from "../utils"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export interface SettingsPasswordSectionProps {
  onUpdate: (newPassword: string) => Promise<void>
  minLength?: number
  className?: string
}

export function SettingsPasswordSection({
  onUpdate,
  minLength = 8,
  className,
}: SettingsPasswordSectionProps) {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault()
    if (!newPassword) return

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match")
      return
    }

    if (newPassword.length < minLength) {
      setError(`Password must be at least ${minLength} characters`)
      return
    }

    setSaving(true)
    setError("")
    setSuccess(false)

    try {
      await onUpdate(newPassword)
      setSuccess(true)
      setNewPassword("")
      setConfirmPassword("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update password")
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Change password</CardTitle>
        <CardDescription>
          Update your password. Use a strong password with at least {minLength} characters.
        </CardDescription>
      </CardHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--foreground-muted)]">
            New password
          </label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--foreground-muted)]">
            Confirm password
          </label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
        </div>
        {error && (
          <p className="text-sm text-[var(--critical)]">{error}</p>
        )}
        {success && (
          <p className="text-sm text-[var(--success)]">
            Password updated successfully.
          </p>
        )}
        <Button
          variant="secondary"
          onClick={handleSubmit}
          loading={saving}
          disabled={!newPassword || !confirmPassword}
        >
          Update password
        </Button>
      </div>
    </Card>
  )
}

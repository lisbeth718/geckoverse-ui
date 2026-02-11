import { useState } from "react"
import { cn } from "../utils"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export interface SettingsDangerZoneProps {
  onDelete: () => Promise<void>
  onSignOut: () => Promise<void>
  deleteWarning?: string
  confirmPhrase?: string
  className?: string
}

export function SettingsDangerZone({
  onDelete,
  onSignOut,
  deleteWarning = "This action cannot be undone. All your data will be permanently deleted.",
  confirmPhrase = "delete my account",
  className,
}: SettingsDangerZoneProps) {
  const [showConfirm, setShowConfirm] = useState(false)
  const [confirmText, setConfirmText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [signingOut, setSigningOut] = useState(false)

  const handleDelete = async () => {
    if (confirmText !== confirmPhrase) return

    setDeleting(true)
    try {
      await onDelete()
    } catch (err) {
      console.error("Failed to delete account:", err)
    } finally {
      setDeleting(false)
    }
  }

  const handleSignOut = async () => {
    setSigningOut(true)
    try {
      await onSignOut()
    } catch (err) {
      console.error("Failed to sign out:", err)
    } finally {
      setSigningOut(false)
    }
  }

  return (
    <Card className={cn("border-[var(--critical)]/30", className)}>
      <CardHeader>
        <CardTitle className="text-[var(--critical)]">Danger zone</CardTitle>
        <CardDescription>
          Irreversible actions that affect your account
        </CardDescription>
      </CardHeader>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[var(--foreground)]">Delete account</p>
            <p className="text-sm text-[var(--foreground-muted)]">
              Permanently delete your account and all data
            </p>
          </div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => setShowConfirm(true)}
          >
            Delete account
          </Button>
        </div>

        {showConfirm && (
          <div className="rounded-xl border border-[var(--critical)]/30 bg-[var(--critical)]/5 p-4 space-y-4">
            <p className="text-sm text-[var(--foreground)]">
              {deleteWarning}
            </p>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground-muted)]">
                Type <span className="font-mono text-[var(--critical)]">{confirmPhrase}</span> to confirm
              </label>
              <Input
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder={confirmPhrase}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setShowConfirm(false)
                  setConfirmText("")
                }}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={handleDelete}
                loading={deleting}
                disabled={confirmText !== confirmPhrase}
              >
                Permanently delete
              </Button>
            </div>
          </div>
        )}

        <hr className="border-[var(--border)]" />

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[var(--foreground)]">Sign out</p>
            <p className="text-sm text-[var(--foreground-muted)]">
              Sign out of your account on this device
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleSignOut}
            loading={signingOut}
          >
            Sign out
          </Button>
        </div>
      </div>
    </Card>
  )
}

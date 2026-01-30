import { useState, FormEvent, ReactNode } from "react"
import { cn } from "../utils"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

// Icons as simple SVGs
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  )
}

export interface LoginFormProps {
  /** Called when form is submitted */
  onSubmit: (data: { email: string; password: string }) => Promise<void>
  /** Optional header content */
  header?: ReactNode
  /** Optional footer content (e.g., signup link, forgot password) */
  footer?: ReactNode
  /** Custom class name */
  className?: string
  /** Submit button text */
  submitText?: string
  /** Loading state */
  loading?: boolean
  /** Error message to display */
  error?: string | null
  /** Success message to display */
  success?: string | null
}

export function LoginForm({
  onSubmit,
  header,
  footer,
  className,
  submitText = "Sign in",
  loading = false,
  error = null,
  success = null,
}: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isLoading = loading || isSubmitting

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await onSubmit({ email, password })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={cn("space-y-6", className)}>
      {header}

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-xl border border-[var(--success)]/30 bg-[var(--success-bg)] p-3 text-sm text-[var(--success)]">
            {success}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="login-email" className="text-sm font-medium text-[var(--foreground-muted)]">
            Email
          </label>
          <Input
            id="login-email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="login-password" className="text-sm font-medium text-[var(--foreground-muted)]">
            Password
          </label>
          <div className="relative">
            <Input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors"
            >
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          loading={isLoading}
          className="w-full"
        >
          {submitText}
        </Button>
      </form>

      {footer}
    </div>
  )
}

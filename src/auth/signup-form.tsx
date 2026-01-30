import { useState, useCallback, FormEvent, ReactNode } from "react"
import { cn } from "../utils"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { generatePassword, getPasswordStrength } from "./password-utils"

// Icons as simple SVGs to avoid external dependencies
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

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export interface SignupFormProps {
  /** Called when form is submitted with valid data */
  onSubmit: (data: { email: string; password: string }) => Promise<void>
  /** Optional header content */
  header?: ReactNode
  /** Optional footer content (e.g., terms link, login link) */
  footer?: ReactNode
  /** Minimum password score required (1-5, default 3) */
  minPasswordScore?: number
  /** Custom class name */
  className?: string
  /** Submit button text */
  submitText?: string
  /** Loading state */
  loading?: boolean
  /** Error message to display */
  error?: string | null
}

export function SignupForm({
  onSubmit,
  header,
  footer,
  minPasswordScore = 3,
  className,
  submitText = "Create account",
  loading = false,
  error = null,
}: SignupFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const passwordStrength = getPasswordStrength(password)
  const isLoading = loading || isSubmitting

  const handleGeneratePassword = useCallback(() => {
    const newPassword = generatePassword(16)
    setPassword(newPassword)
    setShowPassword(true)
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (passwordStrength.score < minPasswordScore) return

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

        <div className="space-y-2">
          <label htmlFor="signup-email" className="text-sm font-medium text-[var(--foreground-muted)]">
            Email
          </label>
          <Input
            id="signup-email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="signup-password" className="text-sm font-medium text-[var(--foreground-muted)]">
              Password
            </label>
            <button
              type="button"
              onClick={handleGeneratePassword}
              className="flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:brightness-110 transition-all"
            >
              <SparklesIcon className="h-3 w-3" />
              Generate strong password
            </button>
          </div>
          <div className="relative">
            <Input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
              autoComplete="new-password"
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

          {/* Password strength indicator */}
          {password && (
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-[var(--background-elevated)] rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${(passwordStrength.score / 5) * 100}%`,
                      backgroundColor: passwordStrength.color,
                    }}
                  />
                </div>
                <span
                  className="text-xs font-medium"
                  style={{ color: passwordStrength.color }}
                >
                  {passwordStrength.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {passwordStrength.checks.map((check) => (
                  <div
                    key={check.label}
                    className="flex items-center gap-1 text-xs"
                  >
                    {check.passed ? (
                      <CheckIcon className="h-3 w-3 text-[var(--success)]" />
                    ) : (
                      <XIcon className="h-3 w-3 text-[var(--foreground-subtle)]" />
                    )}
                    <span
                      className={
                        check.passed
                          ? "text-[var(--foreground-muted)]"
                          : "text-[var(--foreground-subtle)]"
                      }
                    >
                      {check.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading || passwordStrength.score < minPasswordScore}
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

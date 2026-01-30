import { ReactNode } from "react"
import { cn } from "../utils"
import { PixelGeckoFace } from "../gecko/pixel-gecko"

export interface AuthLayoutProps {
  children: ReactNode
  /** Brand name to display */
  brandName?: string
  /** Split into two words for styling (e.g., ["Golden", "Gecko"]) */
  brandNameSplit?: [string, string]
  /** Tagline shown on the left panel */
  tagline?: string
  /** Features list shown on the left panel */
  features?: string[]
  /** Custom class name for the container */
  className?: string
  /** Custom class name for the form panel */
  formClassName?: string
  /** Whether to show the gecko mascot */
  showGecko?: boolean
}

export function AuthLayout({
  children,
  brandName,
  brandNameSplit,
  tagline = "Get started",
  features = [],
  className,
  formClassName,
  showGecko = true,
}: AuthLayoutProps) {
  const [firstWord, secondWord] = brandNameSplit || [brandName, ""]

  return (
    <div className={cn("min-h-screen flex", className)}>
      {/* Left panel - branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[var(--background-elevated)] flex-col justify-between p-12">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3">
            {showGecko && <PixelGeckoFace className="w-9 h-6" />}
            <span className="text-xl font-bold">
              <span className="text-[var(--foreground)]">{firstWord}</span>
              {secondWord && (
                <span className="text-[var(--accent)]">{secondWord}</span>
              )}
            </span>
          </div>
        </div>

        {/* Center content */}
        <div className="space-y-8">
          {showGecko && (
            <div className="flex justify-center">
              <PixelGeckoFace className="w-28 h-20 opacity-80" />
            </div>
          )}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              {tagline}
            </h2>
            {features.length > 0 && (
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--foreground-muted)]">
                    <svg className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm text-[var(--foreground-subtle)]">
          {brandNameSplit ? `${brandNameSplit[0]}${brandNameSplit[1]}` : brandName}
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <div className="lg:hidden p-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            {showGecko && <PixelGeckoFace className="w-8 h-5" />}
            <span className="text-lg font-bold">
              <span className="text-[var(--foreground)]">{firstWord}</span>
              {secondWord && (
                <span className="text-[var(--accent)]">{secondWord}</span>
              )}
            </span>
          </div>
        </div>

        {/* Form container */}
        <div className={cn(
          "flex-1 flex items-center justify-center p-6",
          formClassName
        )}>
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

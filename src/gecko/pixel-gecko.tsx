import { useEffect, useState, useRef } from "react"
import { cn } from "../utils"

/**
 * Gecko colors are controlled via CSS variables.
 *
 * Set these in your app's CSS:
 *
 * :root {
 *   --gecko-primary: #D4A84B;     // Main body color (gold for Golden, silver for Silver)
 *   --gecko-secondary: #C9A046;   // Shadow/mid tone
 *   --gecko-tertiary: #B8943F;    // Darker accent
 *   --gecko-dark: #8B7355;        // Darkest (brow, spine)
 *   --gecko-eye-outer: #1a1a1a;   // Eye socket
 *   --gecko-eye-inner: #8B0000;   // Inner eye
 *   --gecko-eye-mid: #FF4500;     // Mid eye
 *   --gecko-eye-center: #FFD700;  // Eye center/pupil
 *   --gecko-teeth: #F5F5DC;       // Teeth color
 *   --gecko-nostril: #6B5A45;     // Nostril
 * }
 */

// Default colors (Golden Gecko theme)
const DEFAULT_COLORS = {
  primary: "var(--gecko-primary, #D4A84B)",
  secondary: "var(--gecko-secondary, #C9A046)",
  tertiary: "var(--gecko-tertiary, #B8943F)",
  dark: "var(--gecko-dark, #8B7355)",
  eyeOuter: "var(--gecko-eye-outer, #1a1a1a)",
  eyeInner: "var(--gecko-eye-inner, #8B0000)",
  eyeMid: "var(--gecko-eye-mid, #FF4500)",
  eyeCenter: "var(--gecko-eye-center, #FFD700)",
  teeth: "var(--gecko-teeth, #F5F5DC)",
  nostril: "var(--gecko-nostril, #6B5A45)",
}

type SizeClass = "sm" | "md" | "lg" | "xl"

const SIZE_CLASSES: Record<SizeClass, string> = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
}

// Base gecko face - static version for logos
export function PixelGeckoFace({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("w-8 h-8", className)}
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
      <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
      <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
      <rect x="22" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
      <rect x="26" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
      <rect x="8" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
      <rect x="9" y="11" width="5" height="5" fill={DEFAULT_COLORS.eyeInner} />
      <rect x="10" y="12" width="3" height="3" fill={DEFAULT_COLORS.eyeMid} />
      <rect x="11" y="13" width="2" height="2" fill={DEFAULT_COLORS.eyeCenter} />
      <rect x="6" y="8" width="10" height="2" fill={DEFAULT_COLORS.dark} />
      <rect x="28" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
      <rect x="22" y="22" width="8" height="2" fill={DEFAULT_COLORS.dark} />
      <rect x="24" y="20" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
      <rect x="27" y="20" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
      <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
      <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
      <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
    </svg>
  )
}

// Loading animation - chomping mouth
export function PixelGeckoLoading({
  className,
  size = "md"
}: {
  className?: string
  size?: SizeClass
}) {
  return (
    <div className={cn("relative", SIZE_CLASSES[size], className)}>
      <svg
        viewBox="0 0 32 32"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      >
        <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="22" y="12" width="8" height="6" fill={DEFAULT_COLORS.primary} className="upper-jaw" />
        <rect x="26" y="14" width="4" height="4" fill={DEFAULT_COLORS.secondary} className="upper-jaw" />
        <rect x="22" y="18" width="8" height="6" fill={DEFAULT_COLORS.primary} className="lower-jaw" />
        <rect x="26" y="18" width="4" height="4" fill={DEFAULT_COLORS.secondary} className="lower-jaw" />
        <rect x="8" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
        <rect x="9" y="11" width="5" height="5" fill={DEFAULT_COLORS.eyeInner} />
        <rect x="10" y="12" width="3" height="3" fill={DEFAULT_COLORS.eyeMid} />
        <rect x="11" y="13" width="2" height="2" fill={DEFAULT_COLORS.eyeCenter} />
        <rect x="6" y="8" width="10" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="28" y="14" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        <rect x="24" y="16" width="2" height="2" fill={DEFAULT_COLORS.teeth} className="upper-teeth" />
        <rect x="27" y="16" width="2" height="2" fill={DEFAULT_COLORS.teeth} className="upper-teeth" />
        <rect x="25" y="18" width="2" height="2" fill={DEFAULT_COLORS.teeth} className="lower-teeth" />
        <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
      </svg>
      <style>{`
        .lower-jaw, .lower-teeth {
          animation: gecko-chomp 0.6s ease-in-out infinite;
          transform-origin: left center;
        }
        @keyframes gecko-chomp {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(3px) rotate(8deg); }
        }
      `}</style>
    </div>
  )
}

// Eye-tracking gecko - eyes follow cursor
export function PixelGeckoWatcher({
  className,
  size = "md"
}: {
  className?: string
  size?: SizeClass
}) {
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const maxOffset = 2
      const normalizedX = distance > 0 ? (deltaX / distance) * Math.min(maxOffset, distance / 50) : 0
      const normalizedY = distance > 0 ? (deltaY / distance) * Math.min(maxOffset, distance / 50) : 0
      setEyeOffset({ x: normalizedX, y: normalizedY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className={cn("relative", SIZE_CLASSES[size], className)}>
      <svg viewBox="0 0 32 32" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="22" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
        <rect x="26" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
        <rect x={9 + eyeOffset.x} y={11 + eyeOffset.y} width="5" height="5" fill={DEFAULT_COLORS.eyeInner} />
        <rect x={10 + eyeOffset.x} y={12 + eyeOffset.y} width="3" height="3" fill={DEFAULT_COLORS.eyeMid} />
        <rect x={11 + eyeOffset.x} y={13 + eyeOffset.y} width="2" height="2" fill={DEFAULT_COLORS.eyeCenter} />
        <rect x="6" y="8" width="10" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="28" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        <rect x="22" y="22" width="8" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="24" y="20" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="27" y="20" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
      </svg>
    </div>
  )
}

// Celebration gecko - bounces on success
export function PixelGeckoCelebrate({
  className,
  size = "md",
  celebrating = false
}: {
  className?: string
  size?: SizeClass
  celebrating?: boolean
}) {
  return (
    <div className={cn("relative", SIZE_CLASSES[size], celebrating && "animate-gecko-celebrate", className)}>
      <svg viewBox="0 0 32 32" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="22" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
        <rect x="26" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
        {celebrating ? (
          <>
            <rect x="9" y="13" width="6" height="2" fill={DEFAULT_COLORS.eyeCenter} />
            <rect x="10" y="12" width="4" height="1" fill={DEFAULT_COLORS.eyeMid} />
          </>
        ) : (
          <>
            <rect x="9" y="11" width="5" height="5" fill={DEFAULT_COLORS.eyeInner} />
            <rect x="10" y="12" width="3" height="3" fill={DEFAULT_COLORS.eyeMid} />
            <rect x="11" y="13" width="2" height="2" fill={DEFAULT_COLORS.eyeCenter} />
          </>
        )}
        <rect x="6" y="8" width="10" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="28" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        {celebrating ? (
          <rect x="22" y="20" width="8" height="4" fill={DEFAULT_COLORS.dark} />
        ) : (
          <rect x="22" y="22" width="8" height="2" fill={DEFAULT_COLORS.dark} />
        )}
        <rect x="24" y="20" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="27" y="20" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
      </svg>
      {celebrating && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-gecko-confetti"
              style={{
                backgroundColor: [
                  "var(--gecko-primary, #D4A84B)",
                  "var(--gecko-eye-center, #FFD700)",
                  "var(--gecko-eye-mid, #FF4500)",
                  "#2ed573",
                  "#70a1ff",
                  "#ff4757"
                ][i],
                left: `${20 + i * 12}%`,
                top: "-10%",
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
      <style>{`
        @keyframes gecko-celebrate {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.2) rotate(-10deg); }
          50% { transform: scale(1.1) rotate(10deg); }
          75% { transform: scale(1.15) rotate(-5deg); }
        }
        .animate-gecko-celebrate {
          animation: gecko-celebrate 0.6s ease-in-out;
        }
        @keyframes gecko-confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-gecko-confetti {
          animation: gecko-confetti 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

// Full body climbing gecko
export function PixelGeckoClimbing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 64" className={cn("w-8 h-16", className)} style={{ imageRendering: "pixelated" }}>
      <rect x="10" y="20" width="12" height="24" fill={DEFAULT_COLORS.primary} />
      <rect x="12" y="18" width="8" height="4" fill={DEFAULT_COLORS.secondary} />
      <rect x="8" y="6" width="16" height="14" fill={DEFAULT_COLORS.primary} />
      <rect x="10" y="4" width="12" height="4" fill={DEFAULT_COLORS.secondary} />
      <rect x="12" y="8" width="6" height="6" fill={DEFAULT_COLORS.eyeOuter} />
      <rect x="13" y="9" width="4" height="4" fill={DEFAULT_COLORS.eyeInner} />
      <rect x="14" y="10" width="2" height="2" fill={DEFAULT_COLORS.eyeCenter} />
      <rect x="20" y="10" width="6" height="6" fill={DEFAULT_COLORS.primary} />
      <rect x="24" y="12" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
      <rect x="4" y="18" width="8" height="4" fill={DEFAULT_COLORS.secondary} />
      <rect x="2" y="16" width="4" height="4" fill={DEFAULT_COLORS.tertiary} />
      <rect x="20" y="18" width="8" height="4" fill={DEFAULT_COLORS.secondary} />
      <rect x="26" y="16" width="4" height="4" fill={DEFAULT_COLORS.tertiary} />
      <rect x="0" y="14" width="2" height="2" fill={DEFAULT_COLORS.primary} />
      <rect x="2" y="14" width="2" height="2" fill={DEFAULT_COLORS.primary} />
      <rect x="28" y="14" width="2" height="2" fill={DEFAULT_COLORS.primary} />
      <rect x="30" y="14" width="2" height="2" fill={DEFAULT_COLORS.primary} />
      <rect x="4" y="38" width="8" height="4" fill={DEFAULT_COLORS.secondary} />
      <rect x="2" y="40" width="4" height="4" fill={DEFAULT_COLORS.tertiary} />
      <rect x="20" y="38" width="8" height="4" fill={DEFAULT_COLORS.secondary} />
      <rect x="26" y="40" width="4" height="4" fill={DEFAULT_COLORS.tertiary} />
      <rect x="0" y="42" width="2" height="2" fill={DEFAULT_COLORS.primary} />
      <rect x="2" y="44" width="2" height="2" fill={DEFAULT_COLORS.primary} />
      <rect x="28" y="42" width="2" height="2" fill={DEFAULT_COLORS.primary} />
      <rect x="30" y="44" width="2" height="2" fill={DEFAULT_COLORS.primary} />
      <rect x="12" y="44" width="8" height="6" fill={DEFAULT_COLORS.secondary} />
      <rect x="13" y="50" width="6" height="6" fill={DEFAULT_COLORS.tertiary} />
      <rect x="14" y="56" width="4" height="4" fill={DEFAULT_COLORS.dark} />
      <rect x="15" y="60" width="2" height="4" fill={DEFAULT_COLORS.nostril} />
      <rect x="14" y="22" width="4" height="2" fill={DEFAULT_COLORS.dark} />
      <rect x="14" y="28" width="4" height="2" fill={DEFAULT_COLORS.dark} />
      <rect x="14" y="34" width="4" height="2" fill={DEFAULT_COLORS.dark} />
    </svg>
  )
}

// Angry gecko for error states
export function PixelGeckoAngry({
  className,
  size = "md"
}: {
  className?: string
  size?: SizeClass
}) {
  return (
    <div className={cn("relative", SIZE_CLASSES[size], className)}>
      <svg viewBox="0 0 32 32" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="22" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
        <rect x="26" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
        <rect x="9" y="12" width="6" height="4" fill="#ff4757" />
        <rect x="10" y="13" width="4" height="2" fill={DEFAULT_COLORS.eyeCenter} />
        <rect x="6" y="10" width="4" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="10" y="8" width="6" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="2" y="2" width="2" height="4" fill="#ff4757" opacity="0.6" />
        <rect x="6" y="0" width="2" height="4" fill="#ff4757" opacity="0.4" />
        <rect x="28" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        <rect x="22" y="20" width="8" height="4" fill={DEFAULT_COLORS.dark} />
        <rect x="24" y="18" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="27" y="18" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="25" y="22" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
      </svg>
    </div>
  )
}

// Sleeping gecko for empty states
export function PixelGeckoSleeping({
  className,
  size = "md"
}: {
  className?: string
  size?: SizeClass
}) {
  return (
    <div className={cn("relative", SIZE_CLASSES[size], className)}>
      <svg viewBox="0 0 32 32" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="22" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
        <rect x="26" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
        <rect x="9" y="14" width="6" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="6" y="8" width="10" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="28" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        <rect x="22" y="22" width="8" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
        <text x="18" y="4" fill="#70a1ff" fontSize="4" fontFamily="monospace" opacity="0.8">z</text>
        <text x="22" y="2" fill="#70a1ff" fontSize="3" fontFamily="monospace" opacity="0.6">z</text>
        <text x="25" y="0" fill="#70a1ff" fontSize="2" fontFamily="monospace" opacity="0.4">z</text>
      </svg>
    </div>
  )
}

// Thinking gecko for AI processing
export function PixelGeckoThinking({
  className,
  size = "md"
}: {
  className?: string
  size?: SizeClass
}) {
  return (
    <div className={cn("relative", SIZE_CLASSES[size], className)}>
      <svg viewBox="0 0 32 32" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="22" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
        <rect x="26" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
        <rect x="9" y="10" width="5" height="5" fill={DEFAULT_COLORS.eyeInner} />
        <rect x="10" y="11" width="3" height="3" fill={DEFAULT_COLORS.eyeMid} />
        <rect x="11" y="12" width="2" height="2" fill={DEFAULT_COLORS.eyeCenter} />
        <rect x="6" y="6" width="10" height="2" fill={DEFAULT_COLORS.dark} />
        <g className="animate-pulse">
          <circle cx="28" cy="4" r="1.5" fill={DEFAULT_COLORS.primary} />
          <circle cx="30" cy="2" r="1" fill={DEFAULT_COLORS.primary} opacity="0.7" />
          <circle cx="31" cy="0" r="0.5" fill={DEFAULT_COLORS.primary} opacity="0.4" />
        </g>
        <rect x="28" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        <rect x="22" y="22" width="8" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
      </svg>
      <style>{`
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}

// Scroll buddy that climbs edge of page
export function GeckoScrollBuddy() {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (currentScroll / maxScroll) * 100

      if (currentScroll > lastScroll && currentScroll > 200) {
        setVisible(true)
      }
      if (currentScroll < 100) {
        setVisible(false)
      }

      setPosition(Math.min(scrollPercent, 80))
      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed right-0 z-50 transition-all duration-300 pointer-events-none"
      style={{ top: `${position}%` }}
    >
      <div className="transform rotate-90">
        <PixelGeckoClimbing className="w-6 h-12 opacity-40 hover:opacity-80 transition-opacity" />
      </div>
    </div>
  )
}

// Tongue gecko - licks on hover
export function PixelGeckoTongue({
  className,
  size = "md",
  lickOnHover = true
}: {
  className?: string
  size?: SizeClass
  lickOnHover?: boolean
}) {
  const [isLicking, setIsLicking] = useState(false)

  return (
    <div
      className={cn("relative cursor-pointer", SIZE_CLASSES[size], className)}
      onMouseEnter={() => lickOnHover && setIsLicking(true)}
      onMouseLeave={() => setIsLicking(false)}
    >
      <svg viewBox="0 0 40 32" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="22" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
        <rect x="26" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
        <rect x="9" y="11" width="5" height="5" fill={DEFAULT_COLORS.eyeInner} />
        <rect x="10" y="12" width="3" height="3" fill={DEFAULT_COLORS.eyeMid} />
        <rect x="11" y="13" width="2" height="2" fill={DEFAULT_COLORS.eyeCenter} />
        <rect x="6" y="8" width="10" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="28" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        <rect x="22" y="22" width="8" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="24" y="20" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="27" y="20" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <g className={isLicking ? "tongue-out" : "tongue-in"}>
          <rect x="30" y="18" width="2" height="2" fill="#ff6b8a" />
          <rect x="32" y="17" width="2" height="2" fill="#ff6b8a" />
          <rect x="34" y="16" width="2" height="2" fill="#ff6b8a" />
          <rect x="36" y="15" width="2" height="3" fill="#ff6b8a" />
          <rect x="38" y="14" width="1" height="2" fill="#ff4d6d" />
          <rect x="38" y="17" width="1" height="2" fill="#ff4d6d" />
        </g>
        <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
      </svg>
      <style>{`
        .tongue-in { opacity: 0; transform: translateX(-10px); transition: all 0.15s ease-out; }
        .tongue-out { opacity: 1; transform: translateX(0); transition: all 0.1s ease-out; }
      `}</style>
    </div>
  )
}

// Success gecko with sunglasses
export function PixelGeckoSuccess({
  className,
  size = "md"
}: {
  className?: string
  size?: SizeClass
}) {
  return (
    <div className={cn("relative", SIZE_CLASSES[size], className)}>
      <svg viewBox="0 0 32 32" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="22" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
        <rect x="26" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
        <rect x="6" y="10" width="12" height="6" fill="#1a1a1f" />
        <rect x="7" y="11" width="10" height="4" fill="#2a2a3a" />
        <rect x="8" y="12" width="2" height="1" fill="#4a4a5a" />
        <rect x="4" y="12" width="2" height="2" fill="#1a1a1f" />
        <rect x="6" y="8" width="10" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="28" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        <rect x="22" y="20" width="6" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="26" y="18" width="4" height="2" fill={DEFAULT_COLORS.tertiary} />
        <rect x="24" y="18" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
      </svg>
      <div className="sparkle s1" />
      <div className="sparkle s2" />
      <div className="sparkle s3" />
      <style>{`
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--gecko-eye-center, #FFD700);
          border-radius: 50%;
          animation: sparkle 1.5s ease-in-out infinite;
        }
        .s1 { top: 0; right: 20%; animation-delay: 0s; }
        .s2 { top: 10%; right: 0; animation-delay: 0.3s; }
        .s3 { top: 20%; right: 30%; animation-delay: 0.6s; }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

// Error gecko with X eyes
export function PixelGeckoError({
  className,
  size = "md"
}: {
  className?: string
  size?: SizeClass
}) {
  return (
    <div className={cn("relative animate-shake", SIZE_CLASSES[size], className)}>
      <svg viewBox="0 0 32 32" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="6" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="22" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
        <rect x="26" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
        <rect x="8" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
        <rect x="9" y="11" width="2" height="2" fill="#ff4757" />
        <rect x="13" y="11" width="2" height="2" fill="#ff4757" />
        <rect x="11" y="13" width="2" height="2" fill="#ff4757" />
        <rect x="9" y="15" width="2" height="2" fill="#ff4757" />
        <rect x="13" y="15" width="2" height="2" fill="#ff4757" />
        <rect x="6" y="8" width="10" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="28" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        <rect x="22" y="22" width="8" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="24" y="20" width="4" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="2" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <rect x="4" y="6" width="2" height="4" fill={DEFAULT_COLORS.dark} />
        <rect x="18" y="8" width="2" height="4" fill="#00d4ff" opacity="0.7" />
        <rect x="18" y="12" width="2" height="2" fill="#00d4ff" opacity="0.5" />
      </svg>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
          20%, 40%, 60%, 80% { transform: translateX(3px); }
        }
        .animate-shake { animation: shake 0.6s ease-in-out; }
      `}</style>
    </div>
  )
}

// 404 gecko - fat gecko that ate the page
export function PixelGecko404({ className }: { className?: string }) {
  const [burpCount, setBurpCount] = useState(0)

  return (
    <div className={cn("relative text-center inline-block", className)}>
      <div className="cursor-pointer" onClick={() => setBurpCount(c => c + 1)}>
        <svg viewBox="0 0 48 32" className="w-48 h-32" style={{ imageRendering: "pixelated" }}>
          <rect x="4" y="6" width="28" height="22" fill={DEFAULT_COLORS.primary} />
          <rect x="6" y="4" width="24" height="4" fill={DEFAULT_COLORS.secondary} />
          <rect x="10" y="2" width="16" height="4" fill={DEFAULT_COLORS.tertiary} />
          <rect x="30" y="10" width="10" height="12" fill={DEFAULT_COLORS.primary} />
          <rect x="36" y="12" width="6" height="8" fill={DEFAULT_COLORS.secondary} />
          <rect x="10" y="10" width="10" height="8" fill={DEFAULT_COLORS.eyeOuter} />
          <rect x="10" y="12" width="10" height="4" fill={DEFAULT_COLORS.dark} />
          <rect x="12" y="13" width="2" height="2" fill={DEFAULT_COLORS.eyeCenter} />
          <rect x="30" y="20" width="10" height="2" fill={DEFAULT_COLORS.dark} />
          <rect x="32" y="18" width="6" height="2" fill={DEFAULT_COLORS.tertiary} />
          <rect x="8" y="20" width="20" height="8" fill={DEFAULT_COLORS.secondary} />
          <text x="12" y="27" fill={DEFAULT_COLORS.dark} fontSize="6" fontFamily="monospace">404</text>
          <rect x="0" y="16" width="6" height="10" fill={DEFAULT_COLORS.tertiary} />
          <rect x="0" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        </svg>
      </div>
      {burpCount > 0 && (
        <div key={burpCount} className="burp-text">*burp*</div>
      )}
      <style>{`
        .burp-text {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.5rem;
          color: var(--gecko-eye-center, #FFD700);
          animation: burp 0.5s ease-out forwards;
        }
        @keyframes burp {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-30px); }
        }
      `}</style>
    </div>
  )
}

// Waving gecko - friendly greeting
export function PixelGeckoWaving({
  className,
  size = "md"
}: {
  className?: string
  size?: SizeClass
}) {
  return (
    <div className={cn("relative", SIZE_CLASSES[size], className)}>
      <svg viewBox="0 0 40 32" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        <rect x="12" y="8" width="20" height="18" fill={DEFAULT_COLORS.primary} />
        <rect x="14" y="6" width="16" height="4" fill={DEFAULT_COLORS.secondary} />
        <rect x="16" y="4" width="12" height="4" fill={DEFAULT_COLORS.tertiary} />
        <rect x="30" y="12" width="8" height="10" fill={DEFAULT_COLORS.primary} />
        <rect x="34" y="14" width="4" height="6" fill={DEFAULT_COLORS.secondary} />
        <rect x="16" y="10" width="8" height="8" fill={DEFAULT_COLORS.eyeOuter} />
        <rect x="17" y="11" width="5" height="5" fill={DEFAULT_COLORS.eyeInner} />
        <rect x="18" y="12" width="3" height="3" fill={DEFAULT_COLORS.eyeMid} />
        <rect x="19" y="13" width="2" height="2" fill={DEFAULT_COLORS.eyeCenter} />
        <rect x="14" y="8" width="10" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="36" y="16" width="2" height="2" fill={DEFAULT_COLORS.nostril} />
        <rect x="30" y="20" width="6" height="2" fill={DEFAULT_COLORS.dark} />
        <rect x="32" y="18" width="4" height="2" fill={DEFAULT_COLORS.tertiary} />
        <rect x="32" y="18" width="2" height="2" fill={DEFAULT_COLORS.teeth} />
        <rect x="10" y="18" width="4" height="8" fill={DEFAULT_COLORS.tertiary} />
        <rect x="8" y="22" width="4" height="6" fill={DEFAULT_COLORS.dark} />
        <g className="waving-arm">
          <rect x="2" y="14" width="8" height="4" fill={DEFAULT_COLORS.primary} />
          <rect x="0" y="12" width="4" height="4" fill={DEFAULT_COLORS.secondary} />
          <rect x="0" y="10" width="2" height="4" fill={DEFAULT_COLORS.tertiary} />
          <rect x="2" y="8" width="2" height="4" fill={DEFAULT_COLORS.tertiary} />
          <rect x="4" y="10" width="2" height="4" fill={DEFAULT_COLORS.tertiary} />
        </g>
      </svg>
      <style>{`
        .waving-arm {
          transform-origin: 10px 16px;
          animation: wave 0.5s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(20deg); }
        }
      `}</style>
    </div>
  )
}

// Gecko party mode - multiple dancing geckos for easter eggs
export function PixelGeckoParty({
  className,
  onClose
}: {
  className?: string
  onClose?: () => void
}) {
  return (
    <div
      className={cn("fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-pointer", className)}
      onClick={onClose}
    >
      <div className="text-center">
        <div className="flex gap-4 mb-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="party-gecko" style={{ animationDelay: `${i * 0.1}s` }}>
              <PixelGeckoFace className="w-16 h-16" />
            </div>
          ))}
        </div>
        <p className="text-2xl font-bold text-white mb-2">GECKO PARTY!</p>
        <p className="text-gray-400">Click anywhere to close</p>
      </div>
      <div className="absolute inset-0 pointer-events-none disco-lights" />
      <style>{`
        .party-gecko { animation: party-bounce 0.4s ease-in-out infinite; }
        @keyframes party-bounce {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        .disco-lights {
          background: linear-gradient(45deg, rgba(255,0,255,0.1) 0%, rgba(0,255,255,0.1) 25%, rgba(255,255,0,0.1) 50%, rgba(0,255,0,0.1) 75%, rgba(255,0,255,0.1) 100%);
          background-size: 400% 400%;
          animation: disco 2s ease infinite;
        }
        @keyframes disco {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

// Cursor trail - gecko footprints following mouse
export function GeckoCursorTrail() {
  const [footprints, setFootprints] = useState<{ x: number; y: number; id: number }[]>([])
  const idRef = useRef(0)

  useEffect(() => {
    let lastX = 0
    let lastY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2))

      if (distance > 50) {
        lastX = e.clientX
        lastY = e.clientY
        const id = idRef.current++
        setFootprints(prev => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id }])
        setTimeout(() => setFootprints(prev => prev.filter(f => f.id !== id)), 1000)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {footprints.map((fp, i) => (
        <div
          key={fp.id}
          className="footprint"
          style={{ left: fp.x - 8, top: fp.y - 8, transform: `rotate(${i % 2 === 0 ? -15 : 15}deg)` }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" style={{ imageRendering: "pixelated" }}>
            <rect x="2" y="0" width="2" height="4" fill="var(--gecko-primary, #D4A84B)" opacity="0.3" />
            <rect x="6" y="2" width="4" height="6" fill="var(--gecko-primary, #D4A84B)" opacity="0.3" />
            <rect x="12" y="0" width="2" height="4" fill="var(--gecko-primary, #D4A84B)" opacity="0.3" />
            <rect x="0" y="10" width="2" height="4" fill="var(--gecko-primary, #D4A84B)" opacity="0.3" />
            <rect x="14" y="10" width="2" height="4" fill="var(--gecko-primary, #D4A84B)" opacity="0.3" />
          </svg>
        </div>
      ))}
      <style>{`
        .footprint {
          position: absolute;
          animation: fadeOut 1s ease-out forwards;
        }
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

// Large gecko for auth pages - box with eye-tracking gecko
export function PixelGeckoLarge({
  className,
  variant = "watcher"
}: {
  className?: string
  variant?: "static" | "watcher"
}) {
  const GeckoComponent = variant === "watcher" ? PixelGeckoWatcher : PixelGeckoFace

  return (
    <div className={cn(
      "w-24 h-24 rounded-2xl flex items-center justify-center",
      "bg-[var(--background,#0c0c0e)] border border-[var(--border,rgba(255,255,255,0.06))]",
      className
    )}>
      <GeckoComponent className="w-16 h-16" />
    </div>
  )
}

// Aliases for backwards compatibility
export const PixelGeckoStatic = PixelGeckoFace
export const PixelGecko = PixelGeckoLoading

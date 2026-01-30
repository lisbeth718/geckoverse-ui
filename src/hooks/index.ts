import { useState, useEffect, useCallback, useRef } from "react"

// ============================================================================
// useMediaQuery - Responsive breakpoint detection
// ============================================================================

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [query])

  return matches
}

// Convenience hooks for common breakpoints
export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)")
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)")
}

// ============================================================================
// useLocalStorage - Persistent state in localStorage
// ============================================================================

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // Get initial value from localStorage or use default
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  // Setter that also updates localStorage
  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setStoredValue(prev => {
      const newValue = value instanceof Function ? value(prev) : value
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(newValue))
      }
      return newValue
    })
  }, [key])

  return [storedValue, setValue]
}

// ============================================================================
// useDebounce - Debounced value
// ============================================================================

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

// ============================================================================
// useDebouncedCallback - Debounced function
// ============================================================================

export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const debouncedCallback = useCallback((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay]) as T

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return debouncedCallback
}

// ============================================================================
// useClickOutside - Detect clicks outside an element
// ============================================================================

export function useClickOutside<T extends HTMLElement>(
  handler: () => void
): React.RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler()
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [handler])

  return ref
}

// ============================================================================
// useCopyToClipboard - Copy text to clipboard
// ============================================================================

export function useCopyToClipboard(): [boolean, (text: string) => Promise<void>] {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
      setCopied(false)
    }
  }, [])

  return [copied, copy]
}

// ============================================================================
// useToggle - Boolean toggle state
// ============================================================================

export function useToggle(initialValue = false): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => setValue(v => !v), [])
  return [value, toggle, setValue]
}

// ============================================================================
// usePrevious - Get previous value
// ============================================================================

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

// ============================================================================
// useKonamiCode - Easter egg detection
// ============================================================================

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA"
]

export function useKonamiCode(callback: () => void) {
  const [sequence, setSequence] = useState<string[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.code].slice(-KONAMI_CODE.length)
      setSequence(newSequence)

      if (newSequence.join(",") === KONAMI_CODE.join(",")) {
        callback()
        setSequence([])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [sequence, callback])

  // Reset after inactivity
  useEffect(() => {
    if (sequence.length === 0) return
    const timer = setTimeout(() => setSequence([]), 3000)
    return () => clearTimeout(timer)
  }, [sequence])
}

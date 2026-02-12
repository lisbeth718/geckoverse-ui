"use client"

import { useState, useEffect, ReactNode } from "react"
import Link from "next/link"
import { cn } from "../utils"
import { Button } from "../ui/button"

export interface MarketingHeaderProps {
  /** Brand display: name split into [normal, accent] parts */
  brand: {
    name: [string, string]
    logo: ReactNode
    href?: string
  }
  /** Navigation links */
  navLinks: Array<{ label: string; href: string }>
  /** Whether the user is logged in */
  isLoggedIn?: boolean
  /** Hide auth buttons while checking auth state */
  loading?: boolean
  /** Where the "Dashboard" button links to */
  dashboardHref?: string
  /** Where the "Log in" link goes */
  loginHref?: string
  /** Where the "Get started" button goes */
  signupHref?: string
  /** CTA button text */
  ctaText?: string
  /** Extra content in the right side (e.g. ThemeToggle) */
  actions?: ReactNode
  className?: string
}

export function MarketingHeader({
  brand,
  navLinks,
  isLoggedIn = false,
  loading = false,
  dashboardHref = "/app",
  loginHref = "/login",
  signupHref = "/signup",
  ctaText = "Get started",
  actions,
  className,
}: MarketingHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] transition-colors duration-200",
      scrolled ? "bg-[var(--background)]" : "bg-[var(--background)]/80 backdrop-blur-lg",
      className
    )}>
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={brand.href || "/"} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
            {brand.logo}
          </div>
          <span className="font-bold text-lg">
            <span className="text-[var(--foreground)]">{brand.name[0]}</span>
            <span className="text-[var(--accent)]">{brand.name[1]}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {actions}
          {!loading && (
            isLoggedIn ? (
              <Link href={dashboardHref}>
                <Button size="sm">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href={loginHref}>
                  <Button variant="ghost" size="sm">Log in</Button>
                </Link>
                <Link href={signupHref}>
                  <Button size="sm">{ctaText}</Button>
                </Link>
              </>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--foreground-muted)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)]">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[var(--foreground-muted)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {actions && (
              <>
                <div className="flex items-center gap-2 text-[var(--foreground-muted)]">
                  {actions}
                </div>
              </>
            )}
            <hr className="border-[var(--border)]" />
            {isLoggedIn ? (
              <Link href={dashboardHref} onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link
                  href={loginHref}
                  className="block text-[var(--foreground-muted)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link href={signupHref} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">{ctaText}</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

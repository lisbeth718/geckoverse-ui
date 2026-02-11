import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "../utils"

export interface FooterLinkGroup {
  title: string
  links: Array<{ label: string; href: string }>
}

export interface MarketingFooterProps {
  brand: {
    name: string
    description: string
    logo: ReactNode
  }
  linkGroups: FooterLinkGroup[]
  copyright?: string
  email?: string
  className?: string
}

export function MarketingFooter({
  brand,
  linkGroups,
  copyright,
  email,
  className,
}: MarketingFooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={cn("border-t border-[var(--border)] bg-[var(--background)]", className)}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
                {brand.logo}
              </div>
              <span className="font-bold">{brand.name}</span>
            </div>
            <p className="text-sm text-[var(--foreground-muted)]">
              {brand.description}
            </p>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4 text-sm">{group.title}</h4>
              <ul className="space-y-2 text-sm text-[var(--foreground-muted)]">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[var(--foreground)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--foreground-subtle)]">
            {copyright || `\u00A9 ${year} ${brand.name}. All rights reserved.`}
          </p>
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            >
              {email}
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}

import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "../utils"

export interface BreadcrumbItem {
  name: string
  href: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  /** Separator between items. Defaults to "/" */
  separator?: ReactNode
  className?: string
}

export function Breadcrumbs({
  items,
  separator = "/",
  className,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm text-[var(--foreground-muted)]", className)}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-[var(--foreground-subtle)]">{separator}</span>
              )}
              {isLast ? (
                <span className="text-[var(--foreground)]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

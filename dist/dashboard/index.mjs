"use client";

// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/dashboard/dashboard-shell.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function DashboardShell({
  sidebar,
  header,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex h-screen bg-[var(--background)]", className), children: [
    sidebar,
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
      header,
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-4 sm:p-6", children })
    ] })
  ] });
}

// src/dashboard/dashboard-sidebar.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function DashboardSidebar({
  brand,
  children,
  footer,
  collapsed = false,
  className
}) {
  return /* @__PURE__ */ jsxs2("aside", { className: cn(
    "hidden flex-shrink-0 border-r border-[var(--border)] bg-[var(--background)] md:flex md:flex-col transition-all duration-200",
    collapsed ? "w-[72px]" : "w-64",
    className
  ), children: [
    /* @__PURE__ */ jsx2("div", { className: cn(
      "flex h-16 items-center border-b border-[var(--border)]",
      collapsed ? "justify-center px-2" : "px-5"
    ), children: brand }),
    /* @__PURE__ */ jsx2("nav", { className: cn(
      "flex-1 overflow-y-auto py-4",
      collapsed ? "px-2 space-y-1" : "px-3 space-y-1"
    ), children }),
    footer && /* @__PURE__ */ jsx2("div", { className: cn(
      "border-t border-[var(--border)]",
      collapsed ? "p-2" : "p-4"
    ), children: footer })
  ] });
}

// src/ui/button.tsx
import { forwardRef } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Button = forwardRef(
  ({
    className = "",
    variant = "primary",
    size = "md",
    loading = false,
    disabled,
    children,
    ...props
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--background)] disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
      primary: "bg-[var(--accent)] text-[var(--background)] hover:brightness-110 focus:ring-[var(--accent)]",
      secondary: "bg-[var(--background-elevated)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--accent)] focus:ring-[var(--accent)]",
      ghost: "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-elevated)] focus:ring-[var(--accent)]",
      danger: "bg-[var(--critical)] text-white hover:brightness-110 focus:ring-[var(--critical)]"
    };
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-6 py-3 text-base",
      icon: "h-9 w-9 p-0"
    };
    return /* @__PURE__ */ jsxs3(
      "button",
      {
        ref,
        className: cn(baseStyles, variants[variant], sizes[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxs3(
            "svg",
            {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx3(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsx3(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/dashboard/dashboard-header.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function MenuIcon({ className }) {
  return /* @__PURE__ */ jsx4("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx4("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }) });
}
function DashboardHeader({
  onMenuClick,
  title,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs4("header", { className: cn(
    "flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-6",
    className
  ), children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-4", children: [
      onMenuClick && /* @__PURE__ */ jsx4(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "md:hidden",
          onClick: onMenuClick,
          "aria-label": "Open menu",
          children: /* @__PURE__ */ jsx4(MenuIcon, { className: "h-5 w-5" })
        }
      ),
      title && /* @__PURE__ */ jsx4("h1", { className: "text-lg font-semibold text-[var(--foreground)]", children: title })
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "flex items-center gap-3", children })
  ] });
}

// src/dashboard/dashboard-nav.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function DashboardNavItem({
  href,
  icon,
  badge,
  active,
  onClick,
  collapsed = false,
  activeClassName,
  children,
  className
}) {
  const pathname = usePathname();
  const isActive = active ?? (href === "/app" || href === "/" ? pathname === href : pathname.startsWith(href));
  const defaultActiveClass = "bg-[var(--accent)] text-[var(--background)]";
  const activeClass = activeClassName || defaultActiveClass;
  return /* @__PURE__ */ jsxs5(
    Link,
    {
      href,
      onClick,
      title: collapsed ? typeof children === "string" ? children : void 0 : void 0,
      className: cn(
        "group flex items-center text-sm font-medium transition-all rounded-xl relative",
        collapsed ? "justify-center px-0 py-2.5 w-full" : "gap-3 px-3 py-2.5",
        isActive ? activeClass : "text-[var(--foreground-muted)] hover:bg-[var(--background-elevated)] hover:text-[var(--foreground)]",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsx5("span", { className: cn(
          "h-5 w-5 flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5 flex-shrink-0",
          isActive && !activeClassName ? "text-[var(--background)]" : isActive && activeClassName ? "" : "text-[var(--foreground-subtle)] group-hover:text-[var(--accent)]"
        ), children: icon }),
        !collapsed && /* @__PURE__ */ jsxs5(Fragment, { children: [
          /* @__PURE__ */ jsx5("span", { className: "flex-1 truncate", children }),
          badge
        ] })
      ]
    }
  );
}
function DashboardNavGroup({
  label,
  collapsed = false,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs5("div", { className: cn("space-y-1", className), children: [
    label && !collapsed && /* @__PURE__ */ jsx5("p", { className: "px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground-subtle)]", children: label }),
    label && collapsed && /* @__PURE__ */ jsx5("div", { className: "mx-auto my-2 w-6 border-t border-[var(--border)]" }),
    children
  ] });
}

// src/dashboard/dashboard-user-menu.tsx
import { useState, useRef, useEffect } from "react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function DashboardUserMenu({
  user,
  onSignOut,
  menuItems = [],
  className
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);
  const initials = user.name ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase() : user.email[0].toUpperCase();
  return /* @__PURE__ */ jsxs6("div", { ref, className: cn("relative", className), children: [
    /* @__PURE__ */ jsx6(
      Button,
      {
        variant: "ghost",
        onClick: () => setOpen(!open),
        className: "relative h-10 w-10 p-0",
        children: /* @__PURE__ */ jsx6("div", { className: "w-10 h-10 bg-[var(--background-elevated)] border border-[var(--border)] rounded-xl flex items-center justify-center hover:border-[var(--accent)] transition-colors", children: /* @__PURE__ */ jsx6("span", { className: "text-sm font-semibold text-[var(--accent)]", children: initials }) })
      }
    ),
    open && /* @__PURE__ */ jsxs6("div", { className: "absolute right-0 top-full mt-2 w-56 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-lg z-50", children: [
      /* @__PURE__ */ jsxs6("div", { className: "border-b border-[var(--border)] px-4 py-3", children: [
        /* @__PURE__ */ jsx6("p", { className: "text-sm font-medium text-[var(--foreground)]", children: user.name || "User" }),
        /* @__PURE__ */ jsx6("p", { className: "text-xs text-[var(--foreground-subtle)]", children: user.email })
      ] }),
      menuItems.length > 0 && /* @__PURE__ */ jsx6("div", { className: "py-1", children: menuItems.map((item) => /* @__PURE__ */ jsxs6(
        "button",
        {
          onClick: () => {
            item.onClick();
            setOpen(false);
          },
          className: cn(
            "w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors",
            item.variant === "danger" ? "text-[var(--critical)] hover:bg-[var(--critical)]/10" : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-subtle)]"
          ),
          children: [
            item.icon && /* @__PURE__ */ jsx6("span", { className: "h-4 w-4 flex items-center justify-center [&>svg]:h-4 [&>svg]:w-4", children: item.icon }),
            item.label
          ]
        },
        item.label
      )) }),
      /* @__PURE__ */ jsx6("div", { className: "border-t border-[var(--border)] py-1", children: /* @__PURE__ */ jsxs6(
        "button",
        {
          onClick: () => {
            onSignOut();
            setOpen(false);
          },
          className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--critical)] hover:bg-[var(--critical)]/10 transition-colors",
          children: [
            /* @__PURE__ */ jsx6("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" }) }),
            "Sign out"
          ]
        }
      ) })
    ] })
  ] });
}
export {
  DashboardHeader,
  DashboardNavGroup,
  DashboardNavItem,
  DashboardShell,
  DashboardSidebar,
  DashboardUserMenu
};
//# sourceMappingURL=index.mjs.map
"use client";

// src/marketing/marketing-header.tsx
import { useState } from "react";
import Link from "next/link";

// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/ui/button.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: cn(baseStyles, variants[variant], sizes[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsx(
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

// src/marketing/marketing-header.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function MarketingHeader({
  brand,
  navLinks,
  isLoggedIn = false,
  loading = false,
  dashboardHref = "/app",
  loginHref = "/login",
  signupHref = "/signup",
  ctaText = "Get started",
  actions,
  className
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs2("header", { className: cn(
    "fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]",
    className
  ), children: [
    /* @__PURE__ */ jsxs2("nav", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs2(Link, { href: brand.href || "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx2("div", { className: "w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden", children: brand.logo }),
        /* @__PURE__ */ jsxs2("span", { className: "font-bold text-lg", children: [
          /* @__PURE__ */ jsx2("span", { className: "text-[var(--foreground)]", children: brand.name[0] }),
          /* @__PURE__ */ jsx2("span", { className: "text-[var(--accent)]", children: brand.name[1] })
        ] })
      ] }),
      /* @__PURE__ */ jsx2("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ jsx2(
        Link,
        {
          href: link.href,
          className: "text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors",
          children: link.label
        },
        link.href
      )) }),
      /* @__PURE__ */ jsxs2("div", { className: "hidden md:flex items-center gap-3", children: [
        actions,
        !loading && (isLoggedIn ? /* @__PURE__ */ jsx2(Link, { href: dashboardHref, children: /* @__PURE__ */ jsx2(Button, { size: "sm", children: "Dashboard" }) }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
          /* @__PURE__ */ jsx2(Link, { href: loginHref, children: /* @__PURE__ */ jsx2(Button, { variant: "ghost", size: "sm", children: "Log in" }) }),
          /* @__PURE__ */ jsx2(Link, { href: signupHref, children: /* @__PURE__ */ jsx2(Button, { size: "sm", children: ctaText }) })
        ] }))
      ] }),
      /* @__PURE__ */ jsx2(
        "button",
        {
          className: "md:hidden p-2 text-[var(--foreground-muted)]",
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          children: /* @__PURE__ */ jsx2("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: mobileMenuOpen ? /* @__PURE__ */ jsx2("path", { d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx2("path", { d: "M4 6h16M4 12h16M4 18h16" }) })
        }
      )
    ] }),
    mobileMenuOpen && /* @__PURE__ */ jsx2("div", { className: "md:hidden border-t border-[var(--border)] bg-[var(--background)]", children: /* @__PURE__ */ jsxs2("div", { className: "px-6 py-4 space-y-4", children: [
      navLinks.map((link) => /* @__PURE__ */ jsx2(
        Link,
        {
          href: link.href,
          className: "block text-[var(--foreground-muted)]",
          onClick: () => setMobileMenuOpen(false),
          children: link.label
        },
        link.href
      )),
      actions && /* @__PURE__ */ jsx2(Fragment, { children: /* @__PURE__ */ jsx2("div", { className: "flex items-center gap-2 text-[var(--foreground-muted)]", children: actions }) }),
      /* @__PURE__ */ jsx2("hr", { className: "border-[var(--border)]" }),
      isLoggedIn ? /* @__PURE__ */ jsx2(Link, { href: dashboardHref, onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ jsx2(Button, { className: "w-full", children: "Dashboard" }) }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsx2(
          Link,
          {
            href: loginHref,
            className: "block text-[var(--foreground-muted)]",
            onClick: () => setMobileMenuOpen(false),
            children: "Log in"
          }
        ),
        /* @__PURE__ */ jsx2(Link, { href: signupHref, onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ jsx2(Button, { className: "w-full", children: ctaText }) })
      ] })
    ] }) })
  ] });
}

// src/marketing/marketing-footer.tsx
import Link2 from "next/link";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function MarketingFooter({
  brand,
  linkGroups,
  copyright,
  email,
  className
}) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx3("footer", { className: cn("border-t border-[var(--border)] bg-[var(--background)]", className), children: /* @__PURE__ */ jsxs3("div", { className: "max-w-7xl mx-auto px-6 py-12", children: [
    /* @__PURE__ */ jsxs3("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs3("div", { className: "col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx3("div", { className: "w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden", children: brand.logo }),
          /* @__PURE__ */ jsx3("span", { className: "font-bold", children: brand.name })
        ] }),
        /* @__PURE__ */ jsx3("p", { className: "text-sm text-[var(--foreground-muted)]", children: brand.description })
      ] }),
      linkGroups.map((group) => /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx3("h4", { className: "font-semibold mb-4 text-sm", children: group.title }),
        /* @__PURE__ */ jsx3("ul", { className: "space-y-2 text-sm text-[var(--foreground-muted)]", children: group.links.map((link) => /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { href: link.href, className: "hover:text-[var(--foreground)]", children: link.label }) }, link.href)) })
      ] }, group.title))
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsx3("p", { className: "text-sm text-[var(--foreground-subtle)]", children: copyright || `\xA9 ${year} ${brand.name}. All rights reserved.` }),
      email && /* @__PURE__ */ jsx3(
        "a",
        {
          href: `mailto:${email}`,
          className: "text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
          children: email
        }
      )
    ] })
  ] }) });
}
export {
  MarketingFooter,
  MarketingHeader
};
//# sourceMappingURL=index.mjs.map
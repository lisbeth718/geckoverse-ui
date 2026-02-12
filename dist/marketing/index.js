"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/marketing/index.ts
var marketing_exports = {};
__export(marketing_exports, {
  MarketingFooter: () => MarketingFooter,
  MarketingHeader: () => MarketingHeader
});
module.exports = __toCommonJS(marketing_exports);

// src/marketing/marketing-header.tsx
var import_react2 = require("react");
var import_link = __toESM(require("next/link"));

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/ui/button.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ref,
        className: cn(baseStyles, variants[variant], sizes[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "svg",
            {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react2.useState)(false);
  const [scrolled, setScrolled] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: cn(
    "fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] transition-colors duration-200",
    scrolled ? "bg-[var(--background)]" : "bg-[var(--background)]/80 backdrop-blur-lg",
    className
  ), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_link.default, { href: brand.href || "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden", children: brand.logo }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "font-bold text-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-[var(--foreground)]", children: brand.name[0] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-[var(--accent)]", children: brand.name[1] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_link.default,
        {
          href: link.href,
          className: "text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors",
          children: link.label
        },
        link.href
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "hidden md:flex items-center gap-3", children: [
        actions,
        !loading && (isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: dashboardHref, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { size: "sm", children: "Dashboard" }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: loginHref, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "ghost", size: "sm", children: "Log in" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: signupHref, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { size: "sm", children: ctaText }) })
        ] }))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          className: "md:hidden p-2 text-[var(--foreground-muted)]",
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4 6h16M4 12h16M4 18h16" }) })
        }
      )
    ] }),
    mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "md:hidden border-t border-[var(--border)] bg-[var(--background)]", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "px-6 py-4 space-y-4", children: [
      navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_link.default,
        {
          href: link.href,
          className: "block text-[var(--foreground-muted)]",
          onClick: () => setMobileMenuOpen(false),
          children: link.label
        },
        link.href
      )),
      actions && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex items-center gap-2 text-[var(--foreground-muted)]", children: actions }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("hr", { className: "border-[var(--border)]" }),
      isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: dashboardHref, onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { className: "w-full", children: "Dashboard" }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_link.default,
          {
            href: loginHref,
            className: "block text-[var(--foreground-muted)]",
            onClick: () => setMobileMenuOpen(false),
            children: "Log in"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: signupHref, onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { className: "w-full", children: ctaText }) })
      ] })
    ] }) })
  ] });
}

// src/marketing/marketing-footer.tsx
var import_link2 = __toESM(require("next/link"));
var import_jsx_runtime3 = require("react/jsx-runtime");
function MarketingFooter({
  brand,
  linkGroups,
  copyright,
  email,
  className
}) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: cn("border-t border-[var(--border)] bg-[var(--background)]", className), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "max-w-7xl mx-auto px-6 py-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden", children: brand.logo }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "font-bold", children: brand.name })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-[var(--foreground-muted)]", children: brand.description })
      ] }),
      linkGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "font-semibold mb-4 text-sm", children: group.title }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: "space-y-2 text-sm text-[var(--foreground-muted)]", children: group.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: link.href, className: "hover:text-[var(--foreground)]", children: link.label }) }, link.href)) })
      ] }, group.title))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-[var(--foreground-subtle)]", children: copyright || `\xA9 ${year} ${brand.name}. All rights reserved.` }),
      email && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MarketingFooter,
  MarketingHeader
});
//# sourceMappingURL=index.js.map
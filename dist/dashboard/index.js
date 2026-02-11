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

// src/dashboard/index.ts
var dashboard_exports = {};
__export(dashboard_exports, {
  DashboardHeader: () => DashboardHeader,
  DashboardNavGroup: () => DashboardNavGroup,
  DashboardNavItem: () => DashboardNavItem,
  DashboardShell: () => DashboardShell,
  DashboardSidebar: () => DashboardSidebar,
  DashboardUserMenu: () => DashboardUserMenu
});
module.exports = __toCommonJS(dashboard_exports);

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/dashboard/dashboard-shell.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function DashboardShell({
  sidebar,
  header,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("flex h-screen bg-[var(--background)]", className), children: [
    sidebar,
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
      header,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "flex-1 overflow-y-auto p-4 sm:p-6", children })
    ] })
  ] });
}

// src/dashboard/dashboard-sidebar.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function DashboardSidebar({
  brand,
  children,
  footer,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("aside", { className: cn(
    "hidden w-64 flex-shrink-0 border-r border-[var(--border)] bg-[var(--background)] md:flex md:flex-col",
    className
  ), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex h-16 items-center border-b border-[var(--border)] px-5", children: brand }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: "flex-1 space-y-1 px-3 py-4 overflow-y-auto", children }),
    footer && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "border-t border-[var(--border)] p-4", children: footer })
  ] });
}

// src/ui/button.tsx
var import_react = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "button",
      {
        ref,
        className: cn(baseStyles, variants[variant], sizes[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "svg",
            {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
function MenuIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }) });
}
function DashboardHeader({
  onMenuClick,
  title,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { className: cn(
    "flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-6",
    className
  ), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-4", children: [
      onMenuClick && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "md:hidden",
          onClick: onMenuClick,
          "aria-label": "Open menu",
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MenuIcon, { className: "h-5 w-5" })
        }
      ),
      title && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "text-lg font-semibold text-[var(--foreground)]", children: title })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center gap-3", children })
  ] });
}

// src/dashboard/dashboard-nav.tsx
var import_link = __toESM(require("next/link"));
var import_navigation = require("next/navigation");
var import_jsx_runtime5 = require("react/jsx-runtime");
function DashboardNavItem({
  href,
  icon,
  badge,
  active,
  onClick,
  children,
  className
}) {
  const pathname = (0, import_navigation.usePathname)();
  const isActive = active ?? (href === "/app" || href === "/" ? pathname === href : pathname.startsWith(href));
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    import_link.default,
    {
      href,
      onClick,
      className: cn(
        "group flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-all rounded-xl",
        isActive ? "bg-[var(--accent)] text-[var(--background)]" : "text-[var(--foreground-muted)] hover:bg-[var(--background-elevated)] hover:text-[var(--foreground)]",
        className
      ),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: cn(
          "h-5 w-5 flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5",
          isActive ? "text-[var(--background)]" : "text-[var(--foreground-subtle)] group-hover:text-[var(--accent)]"
        ), children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "flex-1", children }),
        badge
      ]
    }
  );
}
function DashboardNavGroup({
  label,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: cn("space-y-1", className), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground-subtle)]", children: label }),
    children
  ] });
}

// src/dashboard/dashboard-user-menu.tsx
var import_react2 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function DashboardUserMenu({
  user,
  onSignOut,
  menuItems = [],
  className
}) {
  const [open, setOpen] = (0, import_react2.useState)(false);
  const ref = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  (0, import_react2.useEffect)(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);
  const initials = user.name ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase() : user.email[0].toUpperCase();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { ref, className: cn("relative", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Button,
      {
        variant: "ghost",
        onClick: () => setOpen(!open),
        className: "relative h-10 w-10 p-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-10 h-10 bg-[var(--background-elevated)] border border-[var(--border)] rounded-xl flex items-center justify-center hover:border-[var(--accent)] transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-sm font-semibold text-[var(--accent)]", children: initials }) })
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "absolute right-0 top-full mt-2 w-56 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-lg z-50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "border-b border-[var(--border)] px-4 py-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-sm font-medium text-[var(--foreground)]", children: user.name || "User" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-xs text-[var(--foreground-subtle)]", children: user.email })
      ] }),
      menuItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "py-1", children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "h-4 w-4 flex items-center justify-center [&>svg]:h-4 [&>svg]:w-4", children: item.icon }),
            item.label
          ]
        },
        item.label
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "border-t border-[var(--border)] py-1", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "button",
        {
          onClick: () => {
            onSignOut();
            setOpen(false);
          },
          className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--critical)] hover:bg-[var(--critical)]/10 transition-colors",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" }) }),
            "Sign out"
          ]
        }
      ) })
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DashboardHeader,
  DashboardNavGroup,
  DashboardNavItem,
  DashboardShell,
  DashboardSidebar,
  DashboardUserMenu
});
//# sourceMappingURL=index.js.map
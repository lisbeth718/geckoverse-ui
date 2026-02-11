"use client";

// src/pages/not-found-content.tsx
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

// src/pages/not-found-content.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function NotFoundContent({
  title = "Page not found",
  description = "The page you're looking for doesn't exist. Maybe it crawled away, or maybe it was never here.",
  illustration,
  primaryAction,
  secondaryAction,
  className
}) {
  return /* @__PURE__ */ jsx2("div", { className: cn("flex flex-col items-center justify-center px-6 py-24", className), children: /* @__PURE__ */ jsxs2("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx2("div", { className: "flex justify-center mb-8", children: illustration }),
    /* @__PURE__ */ jsx2("h1", { className: "text-4xl font-bold mb-4", children: title }),
    /* @__PURE__ */ jsx2("p", { className: "text-[var(--foreground-muted)] mb-8", children: description }),
    /* @__PURE__ */ jsxs2("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsx2(Link, { href: primaryAction.href, children: /* @__PURE__ */ jsx2(Button, { variant: "primary", size: "lg", children: primaryAction.label }) }),
      secondaryAction && /* @__PURE__ */ jsx2(Link, { href: secondaryAction.href, children: /* @__PURE__ */ jsx2(Button, { variant: "secondary", size: "lg", children: secondaryAction.label }) })
    ] })
  ] }) });
}

// src/pages/error-content.tsx
import Link2 from "next/link";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function ErrorContent({
  title = "Something went wrong",
  description = "An unexpected error occurred. Try again, or head back home if the problem persists.",
  illustration,
  onReset,
  primaryAction,
  className
}) {
  return /* @__PURE__ */ jsx3("div", { className: cn("flex flex-col items-center justify-center px-6 py-24", className), children: /* @__PURE__ */ jsxs3("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx3("div", { className: "flex justify-center mb-8", children: illustration }),
    /* @__PURE__ */ jsx3("h1", { className: "text-4xl font-bold mb-4", children: title }),
    /* @__PURE__ */ jsx3("p", { className: "text-[var(--foreground-muted)] mb-8", children: description }),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsx3(Button, { variant: "primary", size: "lg", onClick: onReset, children: "Try again" }),
      primaryAction && /* @__PURE__ */ jsx3(Link2, { href: primaryAction.href, children: /* @__PURE__ */ jsx3(Button, { variant: "secondary", size: "lg", children: primaryAction.label }) })
    ] })
  ] }) });
}

// src/pages/loading-content.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function LoadingContent({
  illustration,
  message,
  className
}) {
  return /* @__PURE__ */ jsxs4("div", { className: cn("flex flex-col items-center justify-center min-h-[60vh] px-6", className), children: [
    /* @__PURE__ */ jsx4("div", { className: "flex justify-center mb-4", children: illustration }),
    message && /* @__PURE__ */ jsx4("p", { className: "text-sm text-[var(--foreground-muted)]", children: message })
  ] });
}
export {
  ErrorContent,
  LoadingContent,
  NotFoundContent
};
//# sourceMappingURL=index.mjs.map
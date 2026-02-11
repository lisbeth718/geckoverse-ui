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

// src/pages/index.ts
var pages_exports = {};
__export(pages_exports, {
  ErrorContent: () => ErrorContent,
  LoadingContent: () => LoadingContent,
  NotFoundContent: () => NotFoundContent
});
module.exports = __toCommonJS(pages_exports);

// src/pages/not-found-content.tsx
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

// src/pages/not-found-content.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function NotFoundContent({
  title = "Page not found",
  description = "The page you're looking for doesn't exist. Maybe it crawled away, or maybe it was never here.",
  illustration,
  primaryAction,
  secondaryAction,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: cn("flex flex-col items-center justify-center px-6 py-24", className), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex justify-center mb-8", children: illustration }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "text-4xl font-bold mb-4", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-[var(--foreground-muted)] mb-8", children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: primaryAction.href, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "primary", size: "lg", children: primaryAction.label }) }),
      secondaryAction && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href: secondaryAction.href, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "secondary", size: "lg", children: secondaryAction.label }) })
    ] })
  ] }) });
}

// src/pages/error-content.tsx
var import_link2 = __toESM(require("next/link"));
var import_jsx_runtime3 = require("react/jsx-runtime");
function ErrorContent({
  title = "Something went wrong",
  description = "An unexpected error occurred. Try again, or head back home if the problem persists.",
  illustration,
  onReset,
  primaryAction,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn("flex flex-col items-center justify-center px-6 py-24", className), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex justify-center mb-8", children: illustration }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "text-4xl font-bold mb-4", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-[var(--foreground-muted)] mb-8", children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: "primary", size: "lg", onClick: onReset, children: "Try again" }),
      primaryAction && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_link2.default, { href: primaryAction.href, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: "secondary", size: "lg", children: primaryAction.label }) })
    ] })
  ] }) });
}

// src/pages/loading-content.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function LoadingContent({
  illustration,
  message,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: cn("flex flex-col items-center justify-center min-h-[60vh] px-6", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex justify-center mb-4", children: illustration }),
    message && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-[var(--foreground-muted)]", children: message })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ErrorContent,
  LoadingContent,
  NotFoundContent
});
//# sourceMappingURL=index.js.map
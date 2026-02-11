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

// src/seo/index.ts
var seo_exports = {};
__export(seo_exports, {
  Breadcrumbs: () => Breadcrumbs,
  FAQSection: () => FAQSection,
  JsonLd: () => JsonLd
});
module.exports = __toCommonJS(seo_exports);

// src/seo/breadcrumbs.tsx
var import_link = __toESM(require("next/link"));

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/seo/breadcrumbs.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Breadcrumbs({
  items,
  separator = "/",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: cn("text-sm text-[var(--foreground-muted)]", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { className: "flex items-center gap-2 flex-wrap", children: items.map((item, index) => {
        const isLast = index === items.length - 1;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "flex items-center gap-2", children: [
          index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[var(--foreground-subtle)]", children: separator }),
          isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[var(--foreground)]", "aria-current": "page", children: item.name }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_link.default,
            {
              href: item.href,
              className: "hover:text-[var(--accent)] transition-colors",
              children: item.name
            }
          )
        ] }, item.href);
      }) })
    }
  );
}

// src/seo/json-ld.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function JsonLd({ data, mode = "graph" }) {
  if (!data) return null;
  if (!Array.isArray(data)) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
      }
    );
  }
  if (mode === "separate") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: data.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(item) }
      },
      index
    )) });
  }
  const graphData = {
    "@context": "https://schema.org",
    "@graph": data.map((d) => {
      const { "@context": _, ...rest } = d;
      return rest;
    })
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(graphData) }
    }
  );
}

// src/seo/faq-section.tsx
var import_react2 = require("react");

// src/ui/card.tsx
var import_react = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Card = (0, import_react.forwardRef)(
  ({ className = "", hover = false, padding = "md", children, ...props }, ref) => {
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        ref,
        className: cn(
          "bg-[var(--background-elevated)] rounded-2xl border border-[var(--border)]",
          hover && "hover:border-[var(--accent)] transition-colors cursor-pointer",
          paddings[padding],
          className
        ),
        ...props,
        children
      }
    );
  }
);
Card.displayName = "Card";

// src/seo/faq-section.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function ChevronDownIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) });
}
function generateFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
function FAQItemComponent({ faq }) {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Card, { padding: "none", className: "overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between p-4 text-left hover:bg-[var(--background-elevated)] transition-colors",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "font-medium text-[var(--foreground)] pr-4", children: faq.question }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            ChevronDownIcon,
            {
              className: cn(
                "h-5 w-5 text-[var(--foreground-muted)] flex-shrink-0 transition-transform",
                isOpen && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        className: cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "px-4 pb-4 text-[var(--foreground-muted)] text-sm leading-relaxed", children: faq.answer }) })
      }
    )
  ] });
}
function FAQSection({
  faqs,
  title,
  includeSchema = false,
  className
}) {
  if (faqs.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className, children: [
    includeSchema && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(generateFaqSchema(faqs)) }
      }
    ),
    title && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-2xl font-bold mb-6", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-3", children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FAQItemComponent, { faq }, index)) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumbs,
  FAQSection,
  JsonLd
});
//# sourceMappingURL=index.js.map
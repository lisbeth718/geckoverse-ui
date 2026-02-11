"use client";

// src/seo/breadcrumbs.tsx
import Link from "next/link";

// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/seo/breadcrumbs.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Breadcrumbs({
  items,
  separator = "/",
  className
}) {
  return /* @__PURE__ */ jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: cn("text-sm text-[var(--foreground-muted)]", className),
      children: /* @__PURE__ */ jsx("ol", { className: "flex items-center gap-2 flex-wrap", children: items.map((item, index) => {
        const isLast = index === items.length - 1;
        return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
          index > 0 && /* @__PURE__ */ jsx("span", { className: "text-[var(--foreground-subtle)]", children: separator }),
          isLast ? /* @__PURE__ */ jsx("span", { className: "text-[var(--foreground)]", "aria-current": "page", children: item.name }) : /* @__PURE__ */ jsx(
            Link,
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
import { Fragment, jsx as jsx2 } from "react/jsx-runtime";
function JsonLd({ data, mode = "graph" }) {
  if (!data) return null;
  if (!Array.isArray(data)) {
    return /* @__PURE__ */ jsx2(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
      }
    );
  }
  if (mode === "separate") {
    return /* @__PURE__ */ jsx2(Fragment, { children: data.map((item, index) => /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(graphData) }
    }
  );
}

// src/seo/faq-section.tsx
import { useState } from "react";

// src/ui/card.tsx
import { forwardRef } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Card = forwardRef(
  ({ className = "", hover = false, padding = "md", children, ...props }, ref) => {
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    return /* @__PURE__ */ jsx3(
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
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function ChevronDownIcon({ className }) {
  return /* @__PURE__ */ jsx4("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx4("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) });
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
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs2(Card, { padding: "none", className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxs2(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between p-4 text-left hover:bg-[var(--background-elevated)] transition-colors",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ jsx4("span", { className: "font-medium text-[var(--foreground)] pr-4", children: faq.question }),
          /* @__PURE__ */ jsx4(
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
    /* @__PURE__ */ jsx4(
      "div",
      {
        className: cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        ),
        children: /* @__PURE__ */ jsx4("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx4("p", { className: "px-4 pb-4 text-[var(--foreground-muted)] text-sm leading-relaxed", children: faq.answer }) })
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
  return /* @__PURE__ */ jsxs2("section", { className, children: [
    includeSchema && /* @__PURE__ */ jsx4(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(generateFaqSchema(faqs)) }
      }
    ),
    title && /* @__PURE__ */ jsx4("h2", { className: "text-2xl font-bold mb-6", children: title }),
    /* @__PURE__ */ jsx4("div", { className: "space-y-3", children: faqs.map((faq, index) => /* @__PURE__ */ jsx4(FAQItemComponent, { faq }, index)) })
  ] });
}
export {
  Breadcrumbs,
  FAQSection,
  JsonLd
};
//# sourceMappingURL=index.mjs.map
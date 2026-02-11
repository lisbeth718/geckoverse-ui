import { useState } from "react"
import { cn } from "../utils"
import { Card } from "../ui/card"

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
  /** Include FAQ JSON-LD schema */
  includeSchema?: boolean
  className?: string
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function generateFaqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

function FAQItemComponent({ faq }: { faq: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card padding="none" className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--background-elevated)] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-[var(--foreground)] pr-4">
          {faq.question}
        </span>
        <ChevronDownIcon
          className={cn(
            "h-5 w-5 text-[var(--foreground-muted)] flex-shrink-0 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-[var(--foreground-muted)] text-sm leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </Card>
  )
}

export function FAQSection({
  faqs,
  title,
  includeSchema = false,
  className,
}: FAQSectionProps) {
  if (faqs.length === 0) return null

  return (
    <section className={className}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
        />
      )}
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItemComponent key={index} faq={faq} />
        ))}
      </div>
    </section>
  )
}

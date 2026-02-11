import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface BreadcrumbItem {
    name: string;
    href: string;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    /** Separator between items. Defaults to "/" */
    separator?: ReactNode;
    className?: string;
}
declare function Breadcrumbs({ items, separator, className, }: BreadcrumbsProps): react_jsx_runtime.JSX.Element;

interface JsonLdProps {
    /** A single schema object or an array of schemas */
    data: Record<string, unknown> | Array<Record<string, unknown>>;
    /**
     * How to render multiple schemas:
     * - "graph": wraps in a single @graph (default)
     * - "separate": renders separate script tags per schema
     */
    mode?: "graph" | "separate";
}
declare function JsonLd({ data, mode }: JsonLdProps): react_jsx_runtime.JSX.Element | null;

interface FAQItem {
    question: string;
    answer: string;
}
interface FAQSectionProps {
    faqs: FAQItem[];
    title?: string;
    /** Include FAQ JSON-LD schema */
    includeSchema?: boolean;
    className?: string;
}
declare function FAQSection({ faqs, title, includeSchema, className, }: FAQSectionProps): react_jsx_runtime.JSX.Element | null;

export { type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, type FAQItem, FAQSection, type FAQSectionProps, JsonLd, type JsonLdProps };

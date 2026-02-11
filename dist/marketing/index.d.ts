import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface MarketingHeaderProps {
    /** Brand display: name split into [normal, accent] parts */
    brand: {
        name: [string, string];
        logo: ReactNode;
        href?: string;
    };
    /** Navigation links */
    navLinks: Array<{
        label: string;
        href: string;
    }>;
    /** Whether the user is logged in */
    isLoggedIn?: boolean;
    /** Hide auth buttons while checking auth state */
    loading?: boolean;
    /** Where the "Dashboard" button links to */
    dashboardHref?: string;
    /** Where the "Log in" link goes */
    loginHref?: string;
    /** Where the "Get started" button goes */
    signupHref?: string;
    /** CTA button text */
    ctaText?: string;
    /** Extra content in the right side (e.g. ThemeToggle) */
    actions?: ReactNode;
    className?: string;
}
declare function MarketingHeader({ brand, navLinks, isLoggedIn, loading, dashboardHref, loginHref, signupHref, ctaText, actions, className, }: MarketingHeaderProps): react_jsx_runtime.JSX.Element;

interface FooterLinkGroup {
    title: string;
    links: Array<{
        label: string;
        href: string;
    }>;
}
interface MarketingFooterProps {
    brand: {
        name: string;
        description: string;
        logo: ReactNode;
    };
    linkGroups: FooterLinkGroup[];
    copyright?: string;
    email?: string;
    className?: string;
}
declare function MarketingFooter({ brand, linkGroups, copyright, email, className, }: MarketingFooterProps): react_jsx_runtime.JSX.Element;

export { type FooterLinkGroup, MarketingFooter, type MarketingFooterProps, MarketingHeader, type MarketingHeaderProps };

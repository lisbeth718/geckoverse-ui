import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface SignupFormProps {
    /** Called when form is submitted with valid data */
    onSubmit: (data: {
        email: string;
        password: string;
    }) => Promise<void>;
    /** Optional header content */
    header?: ReactNode;
    /** Optional footer content (e.g., terms link, login link) */
    footer?: ReactNode;
    /** Minimum password score required (1-5, default 3) */
    minPasswordScore?: number;
    /** Custom class name */
    className?: string;
    /** Submit button text */
    submitText?: string;
    /** Loading state */
    loading?: boolean;
    /** Error message to display */
    error?: string | null;
}
declare function SignupForm({ onSubmit, header, footer, minPasswordScore, className, submitText, loading, error, }: SignupFormProps): react_jsx_runtime.JSX.Element;

interface LoginFormProps {
    /** Called when form is submitted */
    onSubmit: (data: {
        email: string;
        password: string;
    }) => Promise<void>;
    /** Optional header content */
    header?: ReactNode;
    /** Optional footer content (e.g., signup link, forgot password) */
    footer?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Submit button text */
    submitText?: string;
    /** Loading state */
    loading?: boolean;
    /** Error message to display */
    error?: string | null;
    /** Success message to display */
    success?: string | null;
}
declare function LoginForm({ onSubmit, header, footer, className, submitText, loading, error, success, }: LoginFormProps): react_jsx_runtime.JSX.Element;

declare function generatePassword(length?: number): string;
interface PasswordStrength {
    score: number;
    label: string;
    color: string;
    checks: {
        label: string;
        passed: boolean;
    }[];
}
declare function getPasswordStrength(password: string): PasswordStrength;

interface AuthLayoutProps {
    children: ReactNode;
    /** Brand name to display */
    brandName?: string;
    /** Split into two words for styling (e.g., ["Golden", "Gecko"]) */
    brandNameSplit?: [string, string];
    /** Tagline shown on the left panel */
    tagline?: string;
    /** Features list shown on the left panel */
    features?: string[];
    /** Custom class name for the container */
    className?: string;
    /** Custom class name for the form panel */
    formClassName?: string;
    /** Whether to show the gecko mascot */
    showGecko?: boolean;
}
declare function AuthLayout({ children, brandName, brandNameSplit, tagline, features, className, formClassName, showGecko, }: AuthLayoutProps): react_jsx_runtime.JSX.Element;

export { AuthLayout, type AuthLayoutProps, LoginForm, type LoginFormProps, type PasswordStrength, SignupForm, type SignupFormProps, generatePassword, getPasswordStrength };

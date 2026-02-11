import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface NotFoundAction {
    label: string;
    href: string;
}
interface NotFoundContentProps {
    title?: string;
    description?: string;
    illustration: ReactNode;
    primaryAction: NotFoundAction;
    secondaryAction?: NotFoundAction;
    className?: string;
}
declare function NotFoundContent({ title, description, illustration, primaryAction, secondaryAction, className, }: NotFoundContentProps): react_jsx_runtime.JSX.Element;

interface ErrorContentProps {
    title?: string;
    description?: string;
    illustration: ReactNode;
    onReset: () => void;
    primaryAction?: {
        label: string;
        href: string;
    };
    className?: string;
}
declare function ErrorContent({ title, description, illustration, onReset, primaryAction, className, }: ErrorContentProps): react_jsx_runtime.JSX.Element;

interface LoadingContentProps {
    illustration: ReactNode;
    message?: string;
    className?: string;
}
declare function LoadingContent({ illustration, message, className, }: LoadingContentProps): react_jsx_runtime.JSX.Element;

export { ErrorContent, type ErrorContentProps, LoadingContent, type LoadingContentProps, NotFoundContent, type NotFoundContentProps };

export { GeckoCursorTrail, GeckoLoadingWithFact, GeckoScrollBuddy, PixelGecko, PixelGecko404, PixelGeckoAngry, PixelGeckoCelebrate, PixelGeckoClimbing, PixelGeckoError, PixelGeckoFace, PixelGeckoLarge, PixelGeckoLoading, PixelGeckoLoadingWithFact, PixelGeckoParty, PixelGeckoSleeping, PixelGeckoStatic, PixelGeckoSuccess, PixelGeckoThinking, PixelGeckoTongue, PixelGeckoWatcher, PixelGeckoWaving, getRandomGeckoFact } from './gecko/index.js';
import * as react from 'react';
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
export { AuthLayout, AuthLayoutProps, LoginForm, LoginFormProps, PasswordStrength, SignupForm, SignupFormProps, generatePassword, getPasswordStrength } from './auth/index.js';
export { SettingsDangerZone, SettingsDangerZoneProps, SettingsEmailSection, SettingsEmailSectionProps, SettingsLayout, SettingsLayoutProps, SettingsPasswordSection, SettingsPasswordSectionProps, SettingsProfileSection, SettingsProfileSectionProps } from './settings/index.js';
export { FooterLinkGroup, MarketingFooter, MarketingFooterProps, MarketingHeader, MarketingHeaderProps } from './marketing/index.js';
export { BreadcrumbItem, Breadcrumbs, BreadcrumbsProps, FAQItem, FAQSection, FAQSectionProps, JsonLd, JsonLdProps } from './seo/index.js';
export { DashboardHeader, DashboardHeaderProps, DashboardNavGroup, DashboardNavGroupProps, DashboardNavItem, DashboardNavItemProps, DashboardShell, DashboardShellProps, DashboardSidebar, DashboardSidebarProps, DashboardUserMenu, DashboardUserMenuProps } from './dashboard/index.js';
export { ErrorContent, ErrorContentProps, LoadingContent, LoadingContentProps, NotFoundContent, NotFoundContentProps } from './pages/index.js';
import { ClassValue } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: "sm" | "md" | "lg" | "icon";
    loading?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;
declare function CardHeader({ className, children, }: {
    className?: string;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, children, }: {
    className?: string;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, children, }: {
    className?: string;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, children, }: {
    className?: string;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, children, }: {
    className?: string;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "success" | "warning" | "critical" | "info" | "accent" | "secondary";
    size?: "sm" | "md";
    children: ReactNode;
}
declare function Badge({ variant, size, children, className, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
}
declare const Label: react.ForwardRefExoticComponent<LabelProps & react.RefAttributes<HTMLLabelElement>>;

type ToastVariant = "default" | "success" | "error" | "warning" | "info";
interface Toast {
    id: string;
    message: string;
    variant?: ToastVariant;
    duration?: number;
}
declare function useToast(): {
    toast: (message: string, variant?: ToastVariant, duration?: number) => void;
    success: (message: string) => void;
    error: (message: string) => void;
    warning: (message: string) => void;
    info: (message: string) => void;
};
declare function ToastProvider({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function Tabs({ defaultValue, value, onValueChange, children, className }: {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TabsList({ children, className }: {
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TabsTrigger({ value, children, className, disabled }: {
    value: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function TabsContent({ value, children, className }: {
    value: string;
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element | null;

interface DialogProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
}
declare function Dialog({ open, onClose, children, className }: DialogProps): react_jsx_runtime.JSX.Element | null;
declare function DialogHeader({ children, className }: {
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function DialogTitle({ children, className }: {
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function DialogDescription({ children, className }: {
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function DialogContent({ children, className }: {
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function DialogFooter({ children, className }: {
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function ConfirmDialog({ open, onClose, onConfirm, title, description, confirmText, cancelText, variant }: {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "default" | "danger";
}): react_jsx_runtime.JSX.Element;

declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function SkeletonText({ lines, className }: {
    lines?: number;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function SkeletonCard({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function SkeletonAvatar({ size, className }: {
    size?: "sm" | "md" | "lg";
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function SkeletonButton({ size, className }: {
    size?: "sm" | "md" | "lg";
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function SkeletonTableRow({ columns, className }: {
    columns?: number;
    className?: string;
}): react_jsx_runtime.JSX.Element;

interface ProgressProps {
    value: number;
    max?: number;
    className?: string;
    variant?: "default" | "success" | "warning" | "error";
    size?: "sm" | "md" | "lg";
    showValue?: boolean;
}
declare function Progress({ value, max, className, variant, size, showValue }: ProgressProps): react_jsx_runtime.JSX.Element;
declare function CircularProgress({ value, max, size, strokeWidth, className, variant, showValue }: {
    value: number;
    max?: number;
    size?: number;
    strokeWidth?: number;
    className?: string;
    variant?: "default" | "success" | "warning" | "error";
    showValue?: boolean;
}): react_jsx_runtime.JSX.Element;

interface ThemeToggleProps {
    className?: string;
}
declare function ThemeToggle({ className }: ThemeToggleProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps {
    title: string;
    description?: string;
    icon?: ReactNode;
    action?: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    className?: string;
}
declare function EmptyState({ title, description, icon, action, className, }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface DrawerProps {
    open: boolean;
    onClose: () => void;
    side?: "left" | "right";
    children: ReactNode;
    className?: string;
}
declare function Drawer({ open, onClose, side, children, className }: DrawerProps): react_jsx_runtime.JSX.Element | null;

declare function cn(...inputs: ClassValue[]): string;

export { Badge, type BadgeProps, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, CircularProgress, ConfirmDialog, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, type DialogProps, DialogTitle, Drawer, type DrawerProps, EmptyState, type EmptyStateProps, Input, type InputProps, Label, type LabelProps, Progress, type ProgressProps, Skeleton, SkeletonAvatar, SkeletonButton, SkeletonCard, SkeletonTableRow, SkeletonText, Tabs, TabsContent, TabsList, TabsTrigger, ThemeToggle, type ThemeToggleProps, type Toast, ToastProvider, type ToastVariant, cn, useToast };

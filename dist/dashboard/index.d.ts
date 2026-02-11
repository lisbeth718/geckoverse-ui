import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface DashboardShellProps {
    sidebar: ReactNode;
    header: ReactNode;
    children: ReactNode;
    className?: string;
}
declare function DashboardShell({ sidebar, header, children, className, }: DashboardShellProps): react_jsx_runtime.JSX.Element;

interface DashboardSidebarProps {
    brand: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
}
declare function DashboardSidebar({ brand, children, footer, className, }: DashboardSidebarProps): react_jsx_runtime.JSX.Element;

interface DashboardHeaderProps {
    onMenuClick?: () => void;
    title?: string;
    children?: ReactNode;
    className?: string;
}
declare function DashboardHeader({ onMenuClick, title, children, className, }: DashboardHeaderProps): react_jsx_runtime.JSX.Element;

interface DashboardNavItemProps {
    href: string;
    icon?: ReactNode;
    badge?: ReactNode;
    /** Override active detection */
    active?: boolean;
    /** Click handler (e.g. to close mobile menu) */
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}
declare function DashboardNavItem({ href, icon, badge, active, onClick, children, className, }: DashboardNavItemProps): react_jsx_runtime.JSX.Element;
interface DashboardNavGroupProps {
    label?: string;
    children: ReactNode;
    className?: string;
}
declare function DashboardNavGroup({ label, children, className, }: DashboardNavGroupProps): react_jsx_runtime.JSX.Element;

interface DashboardUserMenuProps {
    user: {
        name?: string;
        email: string;
    };
    onSignOut: () => void;
    menuItems?: Array<{
        label: string;
        icon?: ReactNode;
        onClick: () => void;
        variant?: "default" | "danger";
    }>;
    className?: string;
}
declare function DashboardUserMenu({ user, onSignOut, menuItems, className, }: DashboardUserMenuProps): react_jsx_runtime.JSX.Element;

export { DashboardHeader, type DashboardHeaderProps, DashboardNavGroup, type DashboardNavGroupProps, DashboardNavItem, type DashboardNavItemProps, DashboardShell, type DashboardShellProps, DashboardSidebar, type DashboardSidebarProps, DashboardUserMenu, type DashboardUserMenuProps };

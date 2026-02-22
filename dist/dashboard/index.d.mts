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
    collapsed?: boolean;
    className?: string;
}
declare function DashboardSidebar({ brand, children, footer, collapsed, className, }: DashboardSidebarProps): react_jsx_runtime.JSX.Element;

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
    /** Whether sidebar is in collapsed mode */
    collapsed?: boolean;
    /** Custom class for the active state (replaces default active styling) */
    activeClassName?: string;
    children: ReactNode;
    className?: string;
}
declare function DashboardNavItem({ href, icon, badge, active, onClick, collapsed, activeClassName, children, className, }: DashboardNavItemProps): react_jsx_runtime.JSX.Element;
interface DashboardNavGroupProps {
    label?: string;
    collapsed?: boolean;
    children: ReactNode;
    className?: string;
}
declare function DashboardNavGroup({ label, collapsed, children, className, }: DashboardNavGroupProps): react_jsx_runtime.JSX.Element;

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

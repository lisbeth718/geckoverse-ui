import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface SettingsLayoutProps {
    title: string;
    description?: string;
    children: ReactNode;
    className?: string;
}
declare function SettingsLayout({ title, description, children, className, }: SettingsLayoutProps): react_jsx_runtime.JSX.Element;

interface SettingsProfileSectionProps {
    onSave: () => void;
    saving?: boolean;
    error?: string | null;
    children: ReactNode;
    className?: string;
}
declare function SettingsProfileSection({ onSave, saving, error, children, className, }: SettingsProfileSectionProps): react_jsx_runtime.JSX.Element;

interface SettingsEmailSectionProps {
    currentEmail: string;
    onUpdate: (newEmail: string) => Promise<void>;
    className?: string;
}
declare function SettingsEmailSection({ currentEmail, onUpdate, className, }: SettingsEmailSectionProps): react_jsx_runtime.JSX.Element;

interface SettingsPasswordSectionProps {
    onUpdate: (newPassword: string) => Promise<void>;
    minLength?: number;
    className?: string;
}
declare function SettingsPasswordSection({ onUpdate, minLength, className, }: SettingsPasswordSectionProps): react_jsx_runtime.JSX.Element;

interface SettingsDangerZoneProps {
    onDelete: () => Promise<void>;
    onSignOut: () => Promise<void>;
    deleteWarning?: string;
    confirmPhrase?: string;
    className?: string;
}
declare function SettingsDangerZone({ onDelete, onSignOut, deleteWarning, confirmPhrase, className, }: SettingsDangerZoneProps): react_jsx_runtime.JSX.Element;

export { SettingsDangerZone, type SettingsDangerZoneProps, SettingsEmailSection, type SettingsEmailSectionProps, SettingsLayout, type SettingsLayoutProps, SettingsPasswordSection, type SettingsPasswordSectionProps, SettingsProfileSection, type SettingsProfileSectionProps };

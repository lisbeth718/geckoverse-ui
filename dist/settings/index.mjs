"use client";

// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/settings/settings-layout.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function SettingsLayout({
  title,
  description,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("max-w-2xl space-y-6", className), children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-[var(--foreground)]", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "text-[var(--foreground-muted)]", children: description })
    ] }),
    children
  ] });
}

// src/ui/card.tsx
import { forwardRef } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = forwardRef(
  ({ className = "", hover = false, padding = "md", children, ...props }, ref) => {
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    return /* @__PURE__ */ jsx2(
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
function CardHeader({
  className = "",
  children
}) {
  return /* @__PURE__ */ jsx2("div", { className: cn("mb-4", className), children });
}
function CardTitle({
  className = "",
  children
}) {
  return /* @__PURE__ */ jsx2("h3", { className: cn("text-lg font-bold text-[var(--foreground)]", className), children });
}
function CardDescription({
  className = "",
  children
}) {
  return /* @__PURE__ */ jsx2("p", { className: cn("text-sm text-[var(--foreground-muted)] mt-1", className), children });
}

// src/ui/button.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Button = forwardRef2(
  ({
    className = "",
    variant = "primary",
    size = "md",
    loading = false,
    disabled,
    children,
    ...props
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--background)] disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
      primary: "bg-[var(--accent)] text-[var(--background)] hover:brightness-110 focus:ring-[var(--accent)]",
      secondary: "bg-[var(--background-elevated)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--accent)] focus:ring-[var(--accent)]",
      ghost: "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-elevated)] focus:ring-[var(--accent)]",
      danger: "bg-[var(--critical)] text-white hover:brightness-110 focus:ring-[var(--critical)]"
    };
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-6 py-3 text-base",
      icon: "h-9 w-9 p-0"
    };
    return /* @__PURE__ */ jsxs2(
      "button",
      {
        ref,
        className: cn(baseStyles, variants[variant], sizes[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxs2(
            "svg",
            {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx3(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsx3(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/settings/settings-profile-section.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function SettingsProfileSection({
  onSave,
  saving = false,
  error,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs3("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ jsxs3(Card, { children: [
      /* @__PURE__ */ jsxs3(CardHeader, { children: [
        /* @__PURE__ */ jsx4(CardTitle, { children: "Profile" }),
        /* @__PURE__ */ jsx4(CardDescription, { children: "Your personal account information" })
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "space-y-4", children })
    ] }),
    error && /* @__PURE__ */ jsx4("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
    /* @__PURE__ */ jsx4("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx4(Button, { onClick: onSave, loading: saving, children: "Save changes" }) })
  ] });
}

// src/settings/settings-email-section.tsx
import { useState } from "react";

// src/ui/input.tsx
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Input = forwardRef3(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx5(
      "input",
      {
        type,
        className: cn(
          "flex h-11 w-full bg-[var(--background-elevated)] border border-[var(--border)] rounded-xl px-4 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/settings/settings-email-section.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function SettingsEmailSection({
  currentEmail,
  onUpdate,
  className
}) {
  const [newEmail, setNewEmail] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!newEmail || newEmail === currentEmail) return;
    setSaving(true);
    setError("");
    setSuccess(false);
    try {
      await onUpdate(newEmail);
      setSuccess(true);
      setNewEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update email");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxs4(Card, { className, children: [
    /* @__PURE__ */ jsxs4(CardHeader, { children: [
      /* @__PURE__ */ jsx6(CardTitle, { children: "Change email" }),
      /* @__PURE__ */ jsx6(CardDescription, { children: "Update your email address. We'll send a confirmation link to both your current and new email." })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx6("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Current email" }),
        /* @__PURE__ */ jsx6(Input, { value: currentEmail, disabled: true })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx6("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "New email" }),
        /* @__PURE__ */ jsx6(
          Input,
          {
            type: "email",
            value: newEmail,
            onChange: (e) => setNewEmail(e.target.value),
            placeholder: "Enter new email address"
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx6("p", { className: "text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ jsx6("p", { className: "text-sm text-[var(--success)]", children: "Confirmation email sent. Check your inbox." }),
      /* @__PURE__ */ jsx6(
        Button,
        {
          variant: "secondary",
          onClick: handleSubmit,
          loading: saving,
          disabled: !newEmail || newEmail === currentEmail,
          children: "Update email"
        }
      )
    ] })
  ] });
}

// src/settings/settings-password-section.tsx
import { useState as useState2 } from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function SettingsPasswordSection({
  onUpdate,
  minLength = 8,
  className
}) {
  const [newPassword, setNewPassword] = useState2("");
  const [confirmPassword, setConfirmPassword] = useState2("");
  const [saving, setSaving] = useState2(false);
  const [error, setError] = useState2("");
  const [success, setSuccess] = useState2(false);
  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!newPassword) return;
    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    if (newPassword.length < minLength) {
      setError(`Password must be at least ${minLength} characters`);
      return;
    }
    setSaving(true);
    setError("");
    setSuccess(false);
    try {
      await onUpdate(newPassword);
      setSuccess(true);
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update password");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxs5(Card, { className, children: [
    /* @__PURE__ */ jsxs5(CardHeader, { children: [
      /* @__PURE__ */ jsx7(CardTitle, { children: "Change password" }),
      /* @__PURE__ */ jsxs5(CardDescription, { children: [
        "Update your password. Use a strong password with at least ",
        minLength,
        " characters."
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx7("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "New password" }),
        /* @__PURE__ */ jsx7(
          Input,
          {
            type: "password",
            value: newPassword,
            onChange: (e) => setNewPassword(e.target.value),
            placeholder: "Enter new password"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx7("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Confirm password" }),
        /* @__PURE__ */ jsx7(
          Input,
          {
            type: "password",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            placeholder: "Confirm new password"
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx7("p", { className: "text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ jsx7("p", { className: "text-sm text-[var(--success)]", children: "Password updated successfully." }),
      /* @__PURE__ */ jsx7(
        Button,
        {
          variant: "secondary",
          onClick: handleSubmit,
          loading: saving,
          disabled: !newPassword || !confirmPassword,
          children: "Update password"
        }
      )
    ] })
  ] });
}

// src/settings/settings-danger-zone.tsx
import { useState as useState3 } from "react";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
function SettingsDangerZone({
  onDelete,
  onSignOut,
  deleteWarning = "This action cannot be undone. All your data will be permanently deleted.",
  confirmPhrase = "delete my account",
  className
}) {
  const [showConfirm, setShowConfirm] = useState3(false);
  const [confirmText, setConfirmText] = useState3("");
  const [deleting, setDeleting] = useState3(false);
  const [signingOut, setSigningOut] = useState3(false);
  const handleDelete = async () => {
    if (confirmText !== confirmPhrase) return;
    setDeleting(true);
    try {
      await onDelete();
    } catch (err) {
      console.error("Failed to delete account:", err);
    } finally {
      setDeleting(false);
    }
  };
  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await onSignOut();
    } catch (err) {
      console.error("Failed to sign out:", err);
    } finally {
      setSigningOut(false);
    }
  };
  return /* @__PURE__ */ jsxs6(Card, { className: cn("border-[var(--critical)]/30", className), children: [
    /* @__PURE__ */ jsxs6(CardHeader, { children: [
      /* @__PURE__ */ jsx8(CardTitle, { className: "text-[var(--critical)]", children: "Danger zone" }),
      /* @__PURE__ */ jsx8(CardDescription, { children: "Irreversible actions that affect your account" })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx8("p", { className: "font-medium text-[var(--foreground)]", children: "Delete account" }),
          /* @__PURE__ */ jsx8("p", { className: "text-sm text-[var(--foreground-muted)]", children: "Permanently delete your account and all data" })
        ] }),
        /* @__PURE__ */ jsx8(
          Button,
          {
            variant: "danger",
            size: "sm",
            onClick: () => setShowConfirm(true),
            children: "Delete account"
          }
        )
      ] }),
      showConfirm && /* @__PURE__ */ jsxs6("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical)]/5 p-4 space-y-4", children: [
        /* @__PURE__ */ jsx8("p", { className: "text-sm text-[var(--foreground)]", children: deleteWarning }),
        /* @__PURE__ */ jsxs6("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs6("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: [
            "Type ",
            /* @__PURE__ */ jsx8("span", { className: "font-mono text-[var(--critical)]", children: confirmPhrase }),
            " to confirm"
          ] }),
          /* @__PURE__ */ jsx8(
            Input,
            {
              value: confirmText,
              onChange: (e) => setConfirmText(e.target.value),
              placeholder: confirmPhrase
            }
          )
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx8(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => {
                setShowConfirm(false);
                setConfirmText("");
              },
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx8(
            Button,
            {
              variant: "danger",
              size: "sm",
              onClick: handleDelete,
              loading: deleting,
              disabled: confirmText !== confirmPhrase,
              children: "Permanently delete"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx8("hr", { className: "border-[var(--border)]" }),
      /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx8("p", { className: "font-medium text-[var(--foreground)]", children: "Sign out" }),
          /* @__PURE__ */ jsx8("p", { className: "text-sm text-[var(--foreground-muted)]", children: "Sign out of your account on this device" })
        ] }),
        /* @__PURE__ */ jsx8(
          Button,
          {
            variant: "secondary",
            size: "sm",
            onClick: handleSignOut,
            loading: signingOut,
            children: "Sign out"
          }
        )
      ] })
    ] })
  ] });
}
export {
  SettingsDangerZone,
  SettingsEmailSection,
  SettingsLayout,
  SettingsPasswordSection,
  SettingsProfileSection
};
//# sourceMappingURL=index.mjs.map
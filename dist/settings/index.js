"use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/settings/index.ts
var settings_exports = {};
__export(settings_exports, {
  SettingsDangerZone: () => SettingsDangerZone,
  SettingsEmailSection: () => SettingsEmailSection,
  SettingsLayout: () => SettingsLayout,
  SettingsPasswordSection: () => SettingsPasswordSection,
  SettingsProfileSection: () => SettingsProfileSection
});
module.exports = __toCommonJS(settings_exports);

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/settings/settings-layout.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function SettingsLayout({
  title,
  description,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("max-w-2xl space-y-6", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-2xl font-bold text-[var(--foreground)]", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[var(--foreground-muted)]", children: description })
    ] }),
    children
  ] });
}

// src/ui/card.tsx
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = (0, import_react.forwardRef)(
  ({ className = "", hover = false, padding = "md", children, ...props }, ref) => {
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: cn("mb-4", className), children });
}
function CardTitle({
  className = "",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: cn("text-lg font-bold text-[var(--foreground)]", className), children });
}
function CardDescription({
  className = "",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: cn("text-sm text-[var(--foreground-muted)] mt-1", className), children });
}

// src/ui/button.tsx
var import_react2 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Button = (0, import_react2.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "button",
      {
        ref,
        className: cn(baseStyles, variants[variant], sizes[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "svg",
            {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
function SettingsProfileSection({
  onSave,
  saving = false,
  error,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(CardHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CardTitle, { children: "Profile" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CardDescription, { children: "Your personal account information" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-4", children })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { onClick: onSave, loading: saving, children: "Save changes" }) })
  ] });
}

// src/settings/settings-email-section.tsx
var import_react4 = require("react");

// src/ui/input.tsx
var import_react3 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Input = (0, import_react3.forwardRef)(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_jsx_runtime6 = require("react/jsx-runtime");
function SettingsEmailSection({
  currentEmail,
  onUpdate,
  className
}) {
  const [newEmail, setNewEmail] = (0, import_react4.useState)("");
  const [saving, setSaving] = (0, import_react4.useState)(false);
  const [error, setError] = (0, import_react4.useState)("");
  const [success, setSuccess] = (0, import_react4.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Card, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardTitle, { children: "Change email" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CardDescription, { children: "Update your email address. We'll send a confirmation link to both your current and new email." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Current email" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Input, { value: currentEmail, disabled: true })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "New email" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          Input,
          {
            type: "email",
            value: newEmail,
            onChange: (e) => setNewEmail(e.target.value),
            placeholder: "Enter new email address"
          }
        )
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-sm text-[var(--success)]", children: "Confirmation email sent. Check your inbox." }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_react5 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
function SettingsPasswordSection({
  onUpdate,
  minLength = 8,
  className
}) {
  const [newPassword, setNewPassword] = (0, import_react5.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react5.useState)("");
  const [saving, setSaving] = (0, import_react5.useState)(false);
  const [error, setError] = (0, import_react5.useState)("");
  const [success, setSuccess] = (0, import_react5.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Card, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CardTitle, { children: "Change password" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(CardDescription, { children: [
        "Update your password. Use a strong password with at least ",
        minLength,
        " characters."
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "New password" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Input,
          {
            type: "password",
            value: newPassword,
            onChange: (e) => setNewPassword(e.target.value),
            placeholder: "Enter new password"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Confirm password" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Input,
          {
            type: "password",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            placeholder: "Confirm new password"
          }
        )
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-sm text-[var(--success)]", children: "Password updated successfully." }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
var import_react6 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
function SettingsDangerZone({
  onDelete,
  onSignOut,
  deleteWarning = "This action cannot be undone. All your data will be permanently deleted.",
  confirmPhrase = "delete my account",
  className
}) {
  const [showConfirm, setShowConfirm] = (0, import_react6.useState)(false);
  const [confirmText, setConfirmText] = (0, import_react6.useState)("");
  const [deleting, setDeleting] = (0, import_react6.useState)(false);
  const [signingOut, setSigningOut] = (0, import_react6.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Card, { className: cn("border-[var(--critical)]/30", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(CardTitle, { className: "text-[var(--critical)]", children: "Danger zone" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(CardDescription, { children: "Irreversible actions that affect your account" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "font-medium text-[var(--foreground)]", children: "Delete account" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm text-[var(--foreground-muted)]", children: "Permanently delete your account and all data" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          Button,
          {
            variant: "danger",
            size: "sm",
            onClick: () => setShowConfirm(true),
            children: "Delete account"
          }
        )
      ] }),
      showConfirm && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical)]/5 p-4 space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm text-[var(--foreground)]", children: deleteWarning }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: [
            "Type ",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "font-mono text-[var(--critical)]", children: confirmPhrase }),
            " to confirm"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            Input,
            {
              value: confirmText,
              onChange: (e) => setConfirmText(e.target.value),
              placeholder: confirmPhrase
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("hr", { className: "border-[var(--border)]" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "font-medium text-[var(--foreground)]", children: "Sign out" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-sm text-[var(--foreground-muted)]", children: "Sign out of your account on this device" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SettingsDangerZone,
  SettingsEmailSection,
  SettingsLayout,
  SettingsPasswordSection,
  SettingsProfileSection
});
//# sourceMappingURL=index.js.map
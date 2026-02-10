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

// src/auth/index.ts
var auth_exports = {};
__export(auth_exports, {
  AuthLayout: () => AuthLayout,
  LoginForm: () => LoginForm,
  SignupForm: () => SignupForm,
  generatePassword: () => generatePassword,
  getPasswordStrength: () => getPasswordStrength
});
module.exports = __toCommonJS(auth_exports);

// src/auth/signup-form.tsx
var import_react3 = require("react");

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/ui/button.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ref,
        className: cn(baseStyles, variants[variant], sizes[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "svg",
            {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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

// src/ui/input.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = (0, import_react2.forwardRef)(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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

// src/auth/password-utils.ts
function generatePassword(length = 16) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*";
  const allChars = lowercase + uppercase + numbers + symbols;
  let password = "";
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return password.split("").sort(() => Math.random() - 0.5).join("");
}
function getPasswordStrength(password) {
  const checks = [
    { label: "8+ characters", passed: password.length >= 8 },
    { label: "Lowercase letter", passed: /[a-z]/.test(password) },
    { label: "Uppercase letter", passed: /[A-Z]/.test(password) },
    { label: "Number", passed: /[0-9]/.test(password) },
    { label: "Special character", passed: /[!@#$%^&*(),.?":{}|<>]/.test(password) }
  ];
  const score = checks.filter((c) => c.passed).length;
  if (score <= 2) return { score, label: "Weak", color: "var(--critical)", checks };
  if (score <= 3) return { score, label: "Fair", color: "var(--warning)", checks };
  if (score <= 4) return { score, label: "Good", color: "var(--info)", checks };
  return { score, label: "Strong", color: "var(--success)", checks };
}

// src/auth/signup-form.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function EyeIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
  ] });
}
function EyeOffIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) });
}
function SparklesIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }) });
}
function CheckIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) });
}
function XIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) });
}
function SignupForm({
  onSubmit,
  header,
  footer,
  minPasswordScore = 3,
  className,
  submitText = "Create account",
  loading = false,
  error = null
}) {
  const [email, setEmail] = (0, import_react3.useState)("");
  const [password, setPassword] = (0, import_react3.useState)("");
  const [showPassword, setShowPassword] = (0, import_react3.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0, import_react3.useState)(false);
  const passwordStrength = getPasswordStrength(password);
  const isLoading = loading || isSubmitting;
  const handleGeneratePassword = (0, import_react3.useCallback)(() => {
    const newPassword = generatePassword(16);
    setPassword(newPassword);
    setShowPassword(true);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordStrength.score < minPasswordScore) return;
    setIsSubmitting(true);
    try {
      await onSubmit({ email, password });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: cn("space-y-6", className), children: [
    header,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "signup-email", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Input,
          {
            id: "signup-email",
            type: "email",
            placeholder: "you@company.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
            autoComplete: "email"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "signup-password", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "button",
            {
              type: "button",
              onClick: handleGeneratePassword,
              className: "flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:brightness-110 transition-all",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SparklesIcon, { className: "h-3 w-3" }),
                "Generate strong password"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            Input,
            {
              id: "signup-password",
              type: showPassword ? "text" : "password",
              placeholder: "Create a strong password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              minLength: 8,
              required: true,
              autoComplete: "new-password",
              className: "pr-10"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors",
              children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(EyeOffIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(EyeIcon, { className: "h-4 w-4" })
            }
          )
        ] }),
        password && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-2 pt-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex-1 h-1.5 bg-[var(--background-elevated)] rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "div",
              {
                className: "h-full transition-all duration-300",
                style: {
                  width: `${passwordStrength.score / 5 * 100}%`,
                  backgroundColor: passwordStrength.color
                }
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "span",
              {
                className: "text-xs font-medium",
                style: { color: passwordStrength.color },
                children: passwordStrength.label
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex flex-wrap gap-x-3 gap-y-1", children: passwordStrength.checks.map((check) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "div",
            {
              className: "flex items-center gap-1 text-xs",
              children: [
                check.passed ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckIcon, { className: "h-3 w-3 text-[var(--success)]" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(XIcon, { className: "h-3 w-3 text-[var(--foreground-subtle)]" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "span",
                  {
                    className: check.passed ? "text-[var(--foreground-muted)]" : "text-[var(--foreground-subtle)]",
                    children: check.label
                  }
                )
              ]
            },
            check.label
          )) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Button,
        {
          type: "submit",
          disabled: isLoading || passwordStrength.score < minPasswordScore,
          loading: isLoading,
          className: "w-full",
          children: submitText
        }
      )
    ] }),
    footer
  ] });
}

// src/auth/login-form.tsx
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function EyeIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
  ] });
}
function EyeOffIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) });
}
function LoginForm({
  onSubmit,
  header,
  footer,
  className,
  submitText = "Sign in",
  loading = false,
  error = null,
  success = null
}) {
  const [email, setEmail] = (0, import_react4.useState)("");
  const [password, setPassword] = (0, import_react4.useState)("");
  const [showPassword, setShowPassword] = (0, import_react4.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0, import_react4.useState)(false);
  const isLoading = loading || isSubmitting;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit({ email, password });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: cn("space-y-6", className), children: [
    header,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      error && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "rounded-xl border border-[var(--success)]/30 bg-[var(--success-bg)] p-3 text-sm text-[var(--success)]", children: success }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { htmlFor: "login-email", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Input,
          {
            id: "login-email",
            type: "email",
            placeholder: "you@company.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
            autoComplete: "email"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { htmlFor: "login-password", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            Input,
            {
              id: "login-password",
              type: showPassword ? "text" : "password",
              placeholder: "Enter your password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              required: true,
              autoComplete: "current-password",
              className: "pr-10"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors",
              children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EyeOffIcon2, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EyeIcon2, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Button,
        {
          type: "submit",
          disabled: isLoading,
          loading: isLoading,
          className: "w-full",
          children: submitText
        }
      )
    ] }),
    footer
  ] });
}

// src/gecko/pixel-gecko.tsx
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var DEFAULT_COLORS = {
  primary: "var(--gecko-primary, #D4A84B)",
  secondary: "var(--gecko-secondary, #C9A046)",
  tertiary: "var(--gecko-tertiary, #B8943F)",
  dark: "var(--gecko-dark, #8B7355)",
  eyeOuter: "var(--gecko-eye-outer, #1a1a1a)",
  eyeInner: "var(--gecko-eye-inner, #8B0000)",
  eyeMid: "var(--gecko-eye-mid, #FF4500)",
  eyeCenter: "var(--gecko-eye-center, #FFD700)",
  teeth: "var(--gecko-teeth, #F5F5DC)",
  nostril: "var(--gecko-nostril, #6B5A45)"
};
function PixelGeckoFace({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "svg",
    {
      viewBox: "0 0 32 32",
      className: cn("w-8 h-8", className),
      style: { imageRendering: "pixelated" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "9", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "10", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "11", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "24", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "27", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
      ]
    }
  );
}

// src/auth/auth-layout.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function AuthLayout({
  children,
  brandName,
  brandNameSplit,
  tagline = "Get started",
  features = [],
  className,
  formClassName,
  showGecko = true
}) {
  const [firstWord, secondWord] = brandNameSplit || [brandName, ""];
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: cn("min-h-screen flex", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "hidden lg:flex lg:w-1/2 bg-[var(--background-elevated)] flex-col justify-between p-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center gap-3", children: [
        showGecko && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PixelGeckoFace, { className: "w-9 h-6" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "text-xl font-bold", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-[var(--foreground)]", children: firstWord }),
          secondWord && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-[var(--accent)]", children: secondWord })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "space-y-8", children: [
        showGecko && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PixelGeckoFace, { className: "w-28 h-20 opacity-80" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "text-3xl font-bold text-[var(--foreground)]", children: tagline }),
          features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "space-y-3", children: features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { className: "flex items-center gap-3 text-[var(--foreground-muted)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { className: "h-5 w-5 text-[var(--accent)]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
            feature
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-sm text-[var(--foreground-subtle)]", children: brandNameSplit ? `${brandNameSplit[0]}${brandNameSplit[1]}` : brandName })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "lg:hidden p-4 border-b border-[var(--border)]", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center gap-2", children: [
        showGecko && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PixelGeckoFace, { className: "w-8 h-5" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "text-lg font-bold", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-[var(--foreground)]", children: firstWord }),
          secondWord && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-[var(--accent)]", children: secondWord })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: cn(
        "flex-1 flex items-center justify-center p-6",
        formClassName
      ), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-full max-w-md", children }) })
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthLayout,
  LoginForm,
  SignupForm,
  generatePassword,
  getPasswordStrength
});
//# sourceMappingURL=index.js.map
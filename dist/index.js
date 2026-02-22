"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AuthLayout: () => AuthLayout,
  Badge: () => Badge,
  Breadcrumbs: () => Breadcrumbs,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  CircularProgress: () => CircularProgress,
  ConfirmDialog: () => ConfirmDialog,
  DashboardHeader: () => DashboardHeader,
  DashboardNavGroup: () => DashboardNavGroup,
  DashboardNavItem: () => DashboardNavItem,
  DashboardShell: () => DashboardShell,
  DashboardSidebar: () => DashboardSidebar,
  DashboardUserMenu: () => DashboardUserMenu,
  Dialog: () => Dialog,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogTitle: () => DialogTitle,
  Drawer: () => Drawer,
  EmptyState: () => EmptyState,
  ErrorContent: () => ErrorContent,
  FAQSection: () => FAQSection,
  GeckoCursorTrail: () => GeckoCursorTrail,
  GeckoLoadingWithFact: () => GeckoLoadingWithFact,
  GeckoScrollBuddy: () => GeckoScrollBuddy,
  Input: () => Input,
  JsonLd: () => JsonLd,
  Label: () => Label,
  LoadingContent: () => LoadingContent,
  LoginForm: () => LoginForm,
  MarketingFooter: () => MarketingFooter,
  MarketingHeader: () => MarketingHeader,
  NotFoundContent: () => NotFoundContent,
  PixelGecko: () => PixelGecko,
  PixelGecko404: () => PixelGecko404,
  PixelGeckoAngry: () => PixelGeckoAngry,
  PixelGeckoCelebrate: () => PixelGeckoCelebrate,
  PixelGeckoClimbing: () => PixelGeckoClimbing,
  PixelGeckoError: () => PixelGeckoError,
  PixelGeckoFace: () => PixelGeckoFace,
  PixelGeckoLarge: () => PixelGeckoLarge,
  PixelGeckoLoading: () => PixelGeckoLoading,
  PixelGeckoLoadingWithFact: () => PixelGeckoLoadingWithFact,
  PixelGeckoParty: () => PixelGeckoParty,
  PixelGeckoSleeping: () => PixelGeckoSleeping,
  PixelGeckoStatic: () => PixelGeckoStatic,
  PixelGeckoSuccess: () => PixelGeckoSuccess,
  PixelGeckoThinking: () => PixelGeckoThinking,
  PixelGeckoTongue: () => PixelGeckoTongue,
  PixelGeckoWatcher: () => PixelGeckoWatcher,
  PixelGeckoWaving: () => PixelGeckoWaving,
  Progress: () => Progress,
  SettingsDangerZone: () => SettingsDangerZone,
  SettingsEmailSection: () => SettingsEmailSection,
  SettingsLayout: () => SettingsLayout,
  SettingsPasswordSection: () => SettingsPasswordSection,
  SettingsProfileSection: () => SettingsProfileSection,
  SignupForm: () => SignupForm,
  Skeleton: () => Skeleton,
  SkeletonAvatar: () => SkeletonAvatar,
  SkeletonButton: () => SkeletonButton,
  SkeletonCard: () => SkeletonCard,
  SkeletonTableRow: () => SkeletonTableRow,
  SkeletonText: () => SkeletonText,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  ThemeToggle: () => ThemeToggle,
  ToastProvider: () => ToastProvider,
  cn: () => cn,
  generatePassword: () => generatePassword,
  getPasswordStrength: () => getPasswordStrength,
  getRandomGeckoFact: () => getRandomGeckoFact,
  useToast: () => useToast
});
module.exports = __toCommonJS(src_exports);

// src/gecko/pixel-gecko.tsx
var import_react = require("react");

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/gecko/pixel-gecko.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
var SIZE_CLASSES = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24"
};
function PixelGeckoFace({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      viewBox: "0 0 32 32",
      className: cn("w-8 h-8", className),
      style: { imageRendering: "pixelated" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "11", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "24", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "27", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
      ]
    }
  );
}
function PixelGeckoLoading({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("relative", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "svg",
      {
        viewBox: "0 0 32 32",
        className: "w-full h-full",
        style: { imageRendering: "pixelated" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "6", fill: DEFAULT_COLORS.primary, className: "upper-jaw" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "4", fill: DEFAULT_COLORS.secondary, className: "upper-jaw" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "18", width: "8", height: "6", fill: DEFAULT_COLORS.primary, className: "lower-jaw" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "18", width: "4", height: "4", fill: DEFAULT_COLORS.secondary, className: "lower-jaw" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "11", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "24", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.teeth, className: "upper-teeth" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "27", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.teeth, className: "upper-teeth" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "25", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth, className: "lower-teeth" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .lower-jaw, .lower-teeth {
          animation: gecko-chomp 0.6s ease-in-out infinite;
          transform-origin: left center;
        }
        @keyframes gecko-chomp {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(3px) rotate(8deg); }
        }
      ` })
  ] });
}
function PixelGeckoWatcher({
  className,
  size = "md"
}) {
  const [eyeOffset, setEyeOffset] = (0, import_react.useState)({ x: 0, y: 0 });
  const containerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxOffset = 2;
      const normalizedX = distance > 0 ? deltaX / distance * Math.min(maxOffset, distance / 50) : 0;
      const normalizedY = distance > 0 ? deltaY / distance * Math.min(maxOffset, distance / 50) : 0;
      setEyeOffset({ x: normalizedX, y: normalizedY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: containerRef, className: cn("relative", SIZE_CLASSES[size], className), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 9 + eyeOffset.x, y: 11 + eyeOffset.y, width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 10 + eyeOffset.x, y: 12 + eyeOffset.y, width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: 11 + eyeOffset.x, y: 13 + eyeOffset.y, width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "24", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "27", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
  ] }) });
}
function PixelGeckoCelebrate({
  className,
  size = "md",
  celebrating = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("relative", SIZE_CLASSES[size], celebrating && "animate-gecko-celebrate", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      celebrating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "13", width: "6", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "12", width: "4", height: "1", fill: DEFAULT_COLORS.eyeMid })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "11", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      celebrating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "20", width: "8", height: "4", fill: DEFAULT_COLORS.dark }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "24", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "27", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
    ] }),
    celebrating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [...Array(6)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "absolute w-1 h-1 rounded-full animate-gecko-confetti",
        style: {
          backgroundColor: [
            "var(--gecko-primary, #D4A84B)",
            "var(--gecko-eye-center, #FFD700)",
            "var(--gecko-eye-mid, #FF4500)",
            "#2ed573",
            "#70a1ff",
            "#ff4757"
          ][i],
          left: `${20 + i * 12}%`,
          top: "-10%",
          animationDelay: `${i * 0.1}s`
        }
      },
      i
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes gecko-celebrate {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.2) rotate(-10deg); }
          50% { transform: scale(1.1) rotate(10deg); }
          75% { transform: scale(1.15) rotate(-5deg); }
        }
        .animate-gecko-celebrate {
          animation: gecko-celebrate 0.6s ease-in-out;
        }
        @keyframes gecko-confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-gecko-confetti {
          animation: gecko-confetti 1s ease-out forwards;
        }
      ` })
  ] });
}
function PixelGeckoClimbing({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 64", className: cn("w-8 h-16", className), style: { imageRendering: "pixelated" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "20", width: "12", height: "24", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "12", y: "18", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "6", width: "16", height: "14", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "12", y: "8", width: "6", height: "6", fill: DEFAULT_COLORS.eyeOuter }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "13", y: "9", width: "4", height: "4", fill: DEFAULT_COLORS.eyeInner }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "14", y: "10", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "20", y: "10", width: "6", height: "6", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "24", y: "12", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "18", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "16", width: "4", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "20", y: "18", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "16", width: "4", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "30", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "38", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "40", width: "4", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "20", y: "38", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "40", width: "4", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "42", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "44", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "42", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "30", y: "44", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "12", y: "44", width: "8", height: "6", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "13", y: "50", width: "6", height: "6", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "14", y: "56", width: "4", height: "4", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "15", y: "60", width: "2", height: "4", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "14", y: "22", width: "4", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "14", y: "28", width: "4", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "14", y: "34", width: "4", height: "2", fill: DEFAULT_COLORS.dark })
  ] });
}
function PixelGeckoAngry({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("relative", SIZE_CLASSES[size], className), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "12", width: "6", height: "4", fill: "#ff4757" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "13", width: "4", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "10", width: "4", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "8", width: "6", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "2", width: "2", height: "4", fill: "#ff4757", opacity: "0.6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "0", width: "2", height: "4", fill: "#ff4757", opacity: "0.4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "20", width: "8", height: "4", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "24", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "27", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "25", y: "22", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
  ] }) });
}
function PixelGeckoSleeping({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("relative", SIZE_CLASSES[size], className), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "14", width: "6", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: "18", y: "4", fill: "#70a1ff", fontSize: "4", fontFamily: "monospace", opacity: "0.8", children: "z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: "22", y: "2", fill: "#70a1ff", fontSize: "3", fontFamily: "monospace", opacity: "0.6", children: "z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: "25", y: "0", fill: "#70a1ff", fontSize: "2", fontFamily: "monospace", opacity: "0.4", children: "z" })
  ] }) });
}
function PixelGeckoThinking({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("relative", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "10", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "11", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "11", y: "12", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { className: "animate-pulse", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "28", cy: "4", r: "1.5", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "30", cy: "2", r: "1", fill: DEFAULT_COLORS.primary, opacity: "0.7" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "31", cy: "0", r: "0.5", fill: DEFAULT_COLORS.primary, opacity: "0.4" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      ` })
  ] });
}
function GeckoScrollBuddy() {
  const [visible, setVisible] = (0, import_react.useState)(false);
  const [position, setPosition] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = currentScroll / maxScroll * 100;
      if (currentScroll > lastScroll && currentScroll > 200) {
        setVisible(true);
      }
      if (currentScroll < 100) {
        setVisible(false);
      }
      setPosition(Math.min(scrollPercent, 80));
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!visible) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "fixed right-0 z-50 transition-all duration-300 pointer-events-none",
      style: { top: `${position}%` },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "transform rotate-90", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixelGeckoClimbing, { className: "w-6 h-12 opacity-40 hover:opacity-80 transition-opacity" }) })
    }
  );
}
function PixelGeckoTongue({
  className,
  size = "md",
  lickOnHover = true
}) {
  const [isLicking, setIsLicking] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: cn("relative cursor-pointer", SIZE_CLASSES[size], className),
      onMouseEnter: () => lickOnHover && setIsLicking(true),
      onMouseLeave: () => setIsLicking(false),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 40 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "11", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "24", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "27", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { className: isLicking ? "tongue-out" : "tongue-in", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "30", y: "18", width: "2", height: "2", fill: "#ff6b8a" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "32", y: "17", width: "2", height: "2", fill: "#ff6b8a" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "34", y: "16", width: "2", height: "2", fill: "#ff6b8a" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "36", y: "15", width: "2", height: "3", fill: "#ff6b8a" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "38", y: "14", width: "1", height: "2", fill: "#ff4d6d" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "38", y: "17", width: "1", height: "2", fill: "#ff4d6d" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .tongue-in { opacity: 0; transform: translateX(-10px); transition: all 0.15s ease-out; }
        .tongue-out { opacity: 1; transform: translateX(0); transition: all 0.1s ease-out; }
      ` })
      ]
    }
  );
}
function PixelGeckoSuccess({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("relative", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "10", width: "12", height: "6", fill: "#1a1a1f" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "7", y: "11", width: "10", height: "4", fill: "#2a2a3a" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "12", width: "2", height: "1", fill: "#4a4a5a" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "12", width: "2", height: "2", fill: "#1a1a1f" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "20", width: "6", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "18", width: "4", height: "2", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "24", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sparkle s1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sparkle s2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sparkle s3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--gecko-eye-center, #FFD700);
          border-radius: 50%;
          animation: sparkle 1.5s ease-in-out infinite;
        }
        .s1 { top: 0; right: 20%; animation-delay: 0s; }
        .s2 { top: 10%; right: 0; animation-delay: 0.3s; }
        .s3 { top: 20%; right: 30%; animation-delay: 0.6s; }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      ` })
  ] });
}
function PixelGeckoError({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("relative animate-shake", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "11", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "13", y: "11", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "11", y: "13", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "9", y: "15", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "13", y: "15", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "24", y: "20", width: "4", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "18", y: "8", width: "2", height: "4", fill: "#00d4ff", opacity: "0.7" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "18", y: "12", width: "2", height: "2", fill: "#00d4ff", opacity: "0.5" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
          20%, 40%, 60%, 80% { transform: translateX(3px); }
        }
        .animate-shake { animation: shake 0.6s ease-in-out; }
      ` })
  ] });
}
function PixelGecko404({ className }) {
  const [burpCount, setBurpCount] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("relative text-center inline-block", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cursor-pointer", onClick: () => setBurpCount((c) => c + 1), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 48 32", className: "w-48 h-32", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "6", width: "28", height: "22", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "4", width: "24", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "2", width: "16", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "30", y: "10", width: "10", height: "12", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "36", y: "12", width: "6", height: "8", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "10", width: "10", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "12", width: "10", height: "4", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "12", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "30", y: "20", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "32", y: "18", width: "6", height: "2", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "20", width: "20", height: "8", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: "12", y: "27", fill: DEFAULT_COLORS.dark, fontSize: "6", fontFamily: "monospace", children: "404" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "16", width: "6", height: "10", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark })
    ] }) }),
    burpCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "burp-text", children: "*burp*" }, burpCount),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .burp-text {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.5rem;
          color: var(--gecko-eye-center, #FFD700);
          animation: burp 0.5s ease-out forwards;
        }
        @keyframes burp {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-30px); }
        }
      ` })
  ] });
}
function PixelGeckoWaving({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn("relative", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 40 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "12", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "14", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "16", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "30", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "34", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "16", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "17", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "18", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "19", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "14", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "36", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "30", y: "20", width: "6", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "32", y: "18", width: "4", height: "2", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "32", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { className: "waving-arm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "14", width: "8", height: "4", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "12", width: "4", height: "4", fill: DEFAULT_COLORS.secondary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "10", width: "2", height: "4", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "8", width: "2", height: "4", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "4", y: "10", width: "2", height: "4", fill: DEFAULT_COLORS.tertiary })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .waving-arm {
          transform-origin: 10px 16px;
          animation: wave 0.5s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(20deg); }
        }
      ` })
  ] });
}
function PixelGeckoParty({
  className,
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: cn("fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-pointer", className),
      onClick: onClose,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex gap-4 mb-8", children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "party-gecko", style: { animationDelay: `${i * 0.1}s` }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixelGeckoFace, { className: "w-16 h-16" }) }, i)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-2xl font-bold text-white mb-2", children: "GECKO PARTY!" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-gray-400", children: "Click anywhere to close" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none disco-lights" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .party-gecko { animation: party-bounce 0.4s ease-in-out infinite; }
        @keyframes party-bounce {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        .disco-lights {
          background: linear-gradient(45deg, rgba(255,0,255,0.1) 0%, rgba(0,255,255,0.1) 25%, rgba(255,255,0,0.1) 50%, rgba(0,255,0,0.1) 75%, rgba(255,0,255,0.1) 100%);
          background-size: 400% 400%;
          animation: disco 2s ease infinite;
        }
        @keyframes disco {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      ` })
      ]
    }
  );
}
function GeckoCursorTrail() {
  const [footprints, setFootprints] = (0, import_react.useState)([]);
  const idRef = (0, import_react.useRef)(0);
  (0, import_react.useEffect)(() => {
    let lastX = 0;
    let lastY = 0;
    const handleMouseMove = (e) => {
      const distance = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2));
      if (distance > 50) {
        lastX = e.clientX;
        lastY = e.clientY;
        const id = idRef.current++;
        setFootprints((prev) => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id }]);
        setTimeout(() => setFootprints((prev) => prev.filter((f) => f.id !== id)), 1e3);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "fixed inset-0 pointer-events-none z-40", children: [
    footprints.map((fp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "footprint",
        style: { left: fp.x - 8, top: fp.y - 8, transform: `rotate(${i % 2 === 0 ? -15 : 15}deg)` },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", style: { imageRendering: "pixelated" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "0", width: "2", height: "4", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "2", width: "4", height: "6", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "12", y: "0", width: "2", height: "4", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "10", width: "2", height: "4", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "14", y: "10", width: "2", height: "4", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" })
        ] })
      },
      fp.id
    )),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .footprint {
          position: absolute;
          animation: fadeOut 1s ease-out forwards;
        }
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      ` })
  ] });
}
function PixelGeckoLarge({
  className,
  variant = "watcher"
}) {
  const GeckoComponent = variant === "watcher" ? PixelGeckoWatcher : PixelGeckoFace;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn(
    "w-24 h-24 rounded-2xl flex items-center justify-center",
    "bg-[var(--background,#0c0c0e)] border border-[var(--border,rgba(255,255,255,0.06))]",
    className
  ), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeckoComponent, { className: "w-16 h-16" }) });
}
var PixelGeckoStatic = PixelGeckoFace;
var PixelGecko = PixelGeckoLoading;

// src/gecko/gecko-facts.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var GECKO_FACTS = [
  "Geckos can see 350x better in low light than humans",
  "Some geckos can run on water at 3 feet per second",
  "Geckos lick their own eyeballs to keep them clean",
  "Tokay geckos can bite with the force of 300 psi",
  "Geckos can climb smooth glass using van der Waals forces",
  "A gecko's tail can move for 30 minutes after detaching",
  "Geckos are the only lizards that can vocalize",
  "Crested geckos were thought extinct until 1994",
  "Geckos have no eyelids - just a transparent membrane",
  "Some geckos can glide up to 200 feet between trees",
  "Gecko feet have 500,000 tiny hairs per toe",
  "Leopard geckos can store fat in their tails for months",
  "Geckos can regenerate their tails in just 30 days",
  "The word 'gecko' comes from their chirping sound",
  "Geckos have been on Earth for 100 million years"
];
function getRandomGeckoFact() {
  return GECKO_FACTS[Math.floor(Math.random() * GECKO_FACTS.length)];
}
function GeckoLoadingWithFact({
  className,
  size = "md"
}) {
  const [fact, setFact] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    setFact(getRandomGeckoFact());
    const interval = setInterval(() => {
      setFact(getRandomGeckoFact());
    }, 5e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: cn("flex flex-col items-center gap-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PixelGeckoLoading, { size }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-xs text-center max-w-[200px] opacity-60 animate-fade-in", children: fact }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("style", { children: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 0.6; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      ` })
  ] });
}
var PixelGeckoLoadingWithFact = GeckoLoadingWithFact;

// src/ui/button.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Button = (0, import_react3.forwardRef)(
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

// src/ui/card.tsx
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Card = (0, import_react4.forwardRef)(
  ({ className = "", hover = false, padding = "md", children, ...props }, ref) => {
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("mb-4", className), children });
}
function CardTitle({
  className = "",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: cn("text-lg font-bold text-[var(--foreground)]", className), children });
}
function CardDescription({
  className = "",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: cn("text-sm text-[var(--foreground-muted)] mt-1", className), children });
}
function CardContent({
  className = "",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("", className), children });
}
function CardFooter({
  className = "",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("mt-4 flex items-center", className), children });
}

// src/ui/input.tsx
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Input = (0, import_react5.forwardRef)(
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

// src/ui/badge.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Badge({
  variant = "default",
  size = "sm",
  children,
  className = "",
  ...props
}) {
  const variants = {
    default: "bg-[var(--background)] text-[var(--foreground-muted)]",
    success: "bg-[var(--success-bg)] text-[var(--success)]",
    warning: "bg-[var(--warning-bg)] text-[var(--warning)]",
    critical: "bg-[var(--critical-bg)] text-[var(--critical)]",
    info: "bg-[var(--info-bg)] text-[var(--info)]",
    accent: "bg-[var(--accent)] text-[var(--background)]",
    secondary: "bg-[var(--background-elevated)] text-[var(--foreground-muted)] border border-[var(--border)]"
  };
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "span",
    {
      className: cn(
        "inline-flex items-center font-medium rounded-full",
        variants[variant],
        sizes[size],
        className
      ),
      ...props,
      children
    }
  );
}

// src/ui/label.tsx
var import_react6 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Label = (0, import_react6.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "label",
      {
        ref,
        className: cn(
          "text-sm font-medium text-[var(--foreground)] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        ),
        ...props
      }
    );
  }
);
Label.displayName = "Label";

// src/ui/toast.tsx
var import_react7 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var ToastContext = (0, import_react7.createContext)(null);
function useToast() {
  const context = (0, import_react7.useContext)(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  const toast = (0, import_react7.useCallback)((message, variant = "default", duration = 4e3) => {
    context.addToast({ message, variant, duration });
  }, [context]);
  return {
    toast,
    success: (message) => toast(message, "success"),
    error: (message) => toast(message, "error"),
    warning: (message) => toast(message, "warning"),
    info: (message) => toast(message, "info")
  };
}
function ToastProvider({ children }) {
  const [toasts, setToasts] = (0, import_react7.useState)([]);
  const addToast = (0, import_react7.useCallback)((toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration || 4e3);
  }, []);
  const removeToast = (0, import_react7.useCallback)((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(ToastContext.Provider, { value: { toasts, addToast, removeToast }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Toaster, { toasts, onRemove: removeToast })
  ] });
}
function Toaster({
  toasts,
  onRemove
}) {
  if (toasts.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm", children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ToastItem, { toast, onRemove }, toast.id)) });
}
function ToastItem({
  toast,
  onRemove
}) {
  const variantStyles = {
    default: "bg-[var(--background-elevated,#1a1a1f)] border-[var(--border,rgba(255,255,255,0.1))]",
    success: "bg-[var(--success-bg,rgba(46,213,115,0.1))] border-[var(--success,#2ed573)] text-[var(--success,#2ed573)]",
    error: "bg-[var(--critical-bg,rgba(255,71,87,0.1))] border-[var(--critical,#ff4757)] text-[var(--critical,#ff4757)]",
    warning: "bg-[var(--warning-bg,rgba(255,165,2,0.1))] border-[var(--warning,#ffa502)] text-[var(--warning,#ffa502)]",
    info: "bg-[var(--info-bg,rgba(112,161,255,0.1))] border-[var(--info,#70a1ff)] text-[var(--info,#70a1ff)]"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      className: cn(
        "px-4 py-3 rounded-lg border shadow-lg",
        "animate-slide-in-right",
        "flex items-center justify-between gap-3",
        "text-sm",
        variantStyles[toast.variant || "default"]
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: toast.message }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "button",
          {
            onClick: () => onRemove(toast.id),
            className: "opacity-60 hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("style", { children: `
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.2s ease-out;
        }
      ` })
      ]
    }
  );
}

// src/ui/tabs.tsx
var import_react8 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var TabsContext = (0, import_react8.createContext)(null);
function useTabsContext() {
  const context = (0, import_react8.useContext)(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}
function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className
}) {
  const [internalValue, setInternalValue] = (0, import_react8.useState)(defaultValue || "");
  const activeTab = value !== void 0 ? value : internalValue;
  const setActiveTab = (id) => {
    if (value === void 0) {
      setInternalValue(id);
    }
    onValueChange?.(id);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TabsContext.Provider, { value: { activeTab, setActiveTab }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: cn("w-full", className), children }) });
}
function TabsList({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      className: cn(
        "flex gap-1 p-1 rounded-lg",
        "bg-[var(--background-subtle,#1a1a1f)]",
        "border border-[var(--border,rgba(255,255,255,0.06))]",
        className
      ),
      role: "tablist",
      children
    }
  );
}
function TabsTrigger({
  value,
  children,
  className,
  disabled = false
}) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "button",
    {
      role: "tab",
      "aria-selected": isActive,
      disabled,
      onClick: () => !disabled && setActiveTab(value),
      className: cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent,#e0e0ec)]",
        isActive ? "bg-[var(--background-elevated,#141418)] text-[var(--foreground,#f8f8fa)] shadow-sm" : "text-[var(--foreground-muted,#a0a0b0)] hover:text-[var(--foreground,#f8f8fa)]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      ),
      children
    }
  );
}
function TabsContent({
  value,
  children,
  className
}) {
  const { activeTab } = useTabsContext();
  if (activeTab !== value) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      role: "tabpanel",
      className: cn("mt-4 animate-fade-in", className),
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("style", { children: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.15s ease-out;
        }
      ` })
      ]
    }
  );
}

// src/ui/dialog.tsx
var import_react9 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Dialog({ open, onClose, children, className }) {
  const handleKeyDown = (0, import_react9.useCallback)((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);
  (0, import_react9.useEffect)(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "absolute inset-0 flex items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        className: cn(
          "relative w-full max-w-md",
          "bg-[var(--background-elevated,#141418)]",
          "border border-[var(--border,rgba(255,255,255,0.06))]",
          "rounded-xl shadow-xl",
          "animate-dialog-in",
          className
        ),
        onClick: (e) => e.stopPropagation(),
        children
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("style", { children: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes dialog-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.15s ease-out; }
        .animate-dialog-in { animation: dialog-in 0.2s ease-out; }
      ` })
  ] });
}
function DialogHeader({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: cn("px-6 pt-6 pb-2", className), children });
}
function DialogTitle({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: cn("text-lg font-semibold text-[var(--foreground,#f8f8fa)]", className), children });
}
function DialogDescription({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: cn("text-sm text-[var(--foreground-muted,#a0a0b0)] mt-1", className), children });
}
function DialogContent({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: cn("px-6 py-4", className), children });
}
function DialogFooter({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: cn(
    "px-6 py-4 flex justify-end gap-3",
    "border-t border-[var(--border,rgba(255,255,255,0.06))]",
    className
  ), children });
}
function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default"
}) {
  const confirmButtonClass = variant === "danger" ? "bg-[var(--critical,#ff4757)] hover:bg-[var(--critical,#ff4757)]/90" : "bg-[var(--accent-cta,#00d4ff)] hover:bg-[var(--accent-cta,#00d4ff)]/90";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Dialog, { open, onClose, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(DialogTitle, { children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(DialogFooter, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "button",
        {
          onClick: onClose,
          className: "px-4 py-2 text-sm font-medium rounded-lg text-[var(--foreground-muted,#a0a0b0)] hover:text-[var(--foreground,#f8f8fa)] transition-colors",
          children: cancelText
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "button",
        {
          onClick: () => {
            onConfirm();
            onClose();
          },
          className: cn(
            "px-4 py-2 text-sm font-medium rounded-lg text-white transition-colors",
            confirmButtonClass
          ),
          children: confirmText
        }
      )
    ] })
  ] });
}

// src/ui/skeleton.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      className: cn(
        "animate-pulse rounded-md",
        "bg-[var(--background-subtle,#1a1a1f)]",
        className
      ),
      ...props
    }
  );
}
function SkeletonText({
  lines = 3,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: cn("space-y-2", className), children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    Skeleton,
    {
      className: cn(
        "h-4",
        i === lines - 1 ? "w-4/5" : "w-full"
      )
    },
    i
  )) });
}
function SkeletonCard({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      className: cn(
        "p-4 rounded-xl",
        "bg-[var(--background-elevated,#141418)]",
        "border border-[var(--border,rgba(255,255,255,0.06))]",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Skeleton, { className: "h-12 w-12 rounded-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Skeleton, { className: "h-4 w-3/4" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Skeleton, { className: "h-3 w-1/2" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SkeletonText, { lines: 2 })
      ]
    }
  );
}
function SkeletonAvatar({
  size = "md",
  className
}) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    Skeleton,
    {
      className: cn("rounded-full", sizeClasses[size], className)
    }
  );
}
function SkeletonButton({
  size = "md",
  className
}) {
  const sizeClasses = {
    sm: "h-8 w-20",
    md: "h-10 w-24",
    lg: "h-12 w-32"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    Skeleton,
    {
      className: cn("rounded-lg", sizeClasses[size], className)
    }
  );
}
function SkeletonTableRow({
  columns = 4,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: cn("flex gap-4 py-3", className), children: Array.from({ length: columns }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    Skeleton,
    {
      className: cn(
        "h-4 flex-1",
        i === 0 ? "max-w-[200px]" : ""
      )
    },
    i
  )) });
}

// src/ui/progress.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function Progress({
  value,
  max = 100,
  className,
  variant = "default",
  size = "md",
  showValue = false
}) {
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3"
  };
  const variantClasses = {
    default: "bg-[var(--accent-cta,#00d4ff)]",
    success: "bg-[var(--success,#2ed573)]",
    warning: "bg-[var(--warning,#ffa502)]",
    error: "bg-[var(--critical,#ff4757)]"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        className: cn(
          "w-full rounded-full overflow-hidden",
          "bg-[var(--background-subtle,#1a1a1f)]",
          sizeClasses[size]
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "div",
          {
            className: cn(
              "h-full rounded-full transition-all duration-300 ease-out",
              variantClasses[variant]
            ),
            style: { width: `${percentage}%` }
          }
        )
      }
    ),
    showValue && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mt-1 text-xs text-[var(--foreground-muted,#a0a0b0)] text-right", children: [
      Math.round(percentage),
      "%"
    ] })
  ] });
}
function CircularProgress({
  value,
  max = 100,
  size = 64,
  strokeWidth = 4,
  className,
  variant = "default",
  showValue = true
}) {
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - percentage / 100 * circumference;
  const variantColors = {
    default: "var(--accent-cta, #00d4ff)",
    success: "var(--success, #2ed573)",
    warning: "var(--warning, #ffa502)",
    error: "var(--critical, #ff4757)"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: cn("relative inline-flex", className), style: { width: size, height: size }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("svg", { width: size, height: size, className: "transform -rotate-90", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "circle",
        {
          cx: size / 2,
          cy: size / 2,
          r: radius,
          fill: "none",
          stroke: "var(--background-subtle, #1a1a1f)",
          strokeWidth
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "circle",
        {
          cx: size / 2,
          cy: size / 2,
          r: radius,
          fill: "none",
          stroke: variantColors[variant],
          strokeWidth,
          strokeLinecap: "round",
          strokeDasharray: circumference,
          strokeDashoffset: offset,
          className: "transition-all duration-500 ease-out"
        }
      )
    ] }),
    showValue && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-sm font-medium text-[var(--foreground,#f8f8fa)]", children: Math.round(percentage) }) })
  ] });
}

// src/ui/theme-toggle.tsx
var import_react10 = require("react");
var import_next_themes = require("next-themes");
var import_jsx_runtime13 = require("react/jsx-runtime");
function SunIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" }) });
}
function MoonIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" }) });
}
function MonitorIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" }) });
}
function ThemeToggle({ className }) {
  const [mounted, setMounted] = (0, import_react10.useState)(false);
  const { theme, setTheme } = (0, import_next_themes.useTheme)();
  (0, import_react10.useEffect)(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Button, { variant: "ghost", size: "icon", disabled: true, className, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SunIcon, { className: "h-4 w-4" }) });
  }
  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: cycleTheme,
      title: `Current: ${theme}. Click to switch.`,
      className,
      children: [
        theme === "dark" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(MoonIcon, { className: "h-4 w-4" }),
        theme === "light" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SunIcon, { className: "h-4 w-4" }),
        theme === "system" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(MonitorIcon, { className: "h-4 w-4" })
      ]
    }
  );
}

// src/ui/empty-state.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function EmptyState({
  title,
  description,
  icon,
  action,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: cn("text-center py-12 px-4", className), children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex justify-center mb-4", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-lg font-semibold text-[var(--foreground)] mb-2", children: title }),
    description && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm text-[var(--foreground-muted)] mb-6 max-w-md mx-auto", children: description }),
    action && (action.href ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("a", { href: action.href, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { children: action.label }) }) : action.onClick ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { onClick: action.onClick, children: action.label }) : null)
  ] });
}

// src/ui/drawer.tsx
var import_react11 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
function Drawer({ open, onClose, side = "left", children, className }) {
  const handleKeyDown = (0, import_react11.useCallback)((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);
  (0, import_react11.useEffect)(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);
  if (!open) return null;
  const slideFrom = side === "left" ? "drawer-slide-left" : "drawer-slide-right";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-drawer-fade-in",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: cn(
          "absolute inset-y-0 h-full w-3/4 sm:max-w-sm",
          "bg-[var(--background-elevated)] border-[var(--border)] shadow-lg",
          side === "left" ? "left-0 border-r" : "right-0 border-l",
          `animate-${slideFrom}`,
          className
        ),
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("style", { children: `
        @keyframes drawer-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drawer-slide-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes drawer-slide-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-drawer-fade-in { animation: drawer-fade-in 0.15s ease-out; }
        .animate-drawer-slide-left { animation: drawer-slide-left 0.2s ease-out; }
        .animate-drawer-slide-right { animation: drawer-slide-right 0.2s ease-out; }
      ` })
  ] });
}

// src/auth/signup-form.tsx
var import_react12 = require("react");

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
var import_jsx_runtime16 = require("react/jsx-runtime");
function EyeIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
  ] });
}
function EyeOffIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) });
}
function SparklesIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }) });
}
function CheckIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) });
}
function XIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) });
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
  const [email, setEmail] = (0, import_react12.useState)("");
  const [password, setPassword] = (0, import_react12.useState)("");
  const [showPassword, setShowPassword] = (0, import_react12.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0, import_react12.useState)(false);
  const passwordStrength = getPasswordStrength(password);
  const isLoading = loading || isSubmitting;
  const handleGeneratePassword = (0, import_react12.useCallback)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: cn("space-y-6", className), children: [
    header,
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      error && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: "signup-email", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("label", { htmlFor: "signup-password", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
            "button",
            {
              type: "button",
              onClick: handleGeneratePassword,
              className: "flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:brightness-110 transition-all",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SparklesIcon, { className: "h-3 w-3" }),
                "Generate strong password"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors",
              children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(EyeOffIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(EyeIcon, { className: "h-4 w-4" })
            }
          )
        ] }),
        password && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-2 pt-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex-1 h-1.5 bg-[var(--background-elevated)] rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "div",
              {
                className: "h-full transition-all duration-300",
                style: {
                  width: `${passwordStrength.score / 5 * 100}%`,
                  backgroundColor: passwordStrength.color
                }
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "span",
              {
                className: "text-xs font-medium",
                style: { color: passwordStrength.color },
                children: passwordStrength.label
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex flex-wrap gap-x-3 gap-y-1", children: passwordStrength.checks.map((check) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
            "div",
            {
              className: "flex items-center gap-1 text-xs",
              children: [
                check.passed ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CheckIcon, { className: "h-3 w-3 text-[var(--success)]" }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(XIcon, { className: "h-3 w-3 text-[var(--foreground-subtle)]" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var import_react13 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function EyeIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
  ] });
}
function EyeOffIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) });
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
  const [email, setEmail] = (0, import_react13.useState)("");
  const [password, setPassword] = (0, import_react13.useState)("");
  const [showPassword, setShowPassword] = (0, import_react13.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0, import_react13.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: cn("space-y-6", className), children: [
    header,
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      error && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "rounded-xl border border-[var(--success)]/30 bg-[var(--success-bg)] p-3 text-sm text-[var(--success)]", children: success }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { htmlFor: "login-email", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Email" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { htmlFor: "login-password", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors",
              children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(EyeOffIcon2, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(EyeIcon2, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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

// src/auth/auth-layout.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: cn("min-h-screen flex", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "hidden lg:flex lg:w-1/2 bg-[var(--background-elevated)] flex-col justify-between p-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center gap-3", children: [
        showGecko && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PixelGeckoFace, { className: "w-9 h-6" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "text-xl font-bold", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[var(--foreground)]", children: firstWord }),
          secondWord && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[var(--accent)]", children: secondWord })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "space-y-8", children: [
        showGecko && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PixelGeckoFace, { className: "w-28 h-20 opacity-80" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "text-3xl font-bold text-[var(--foreground)]", children: tagline }),
          features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: "space-y-3", children: features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("li", { className: "flex items-center gap-3 text-[var(--foreground-muted)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("svg", { className: "h-5 w-5 text-[var(--accent)]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
            feature
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "text-sm text-[var(--foreground-subtle)]", children: brandNameSplit ? `${brandNameSplit[0]}${brandNameSplit[1]}` : brandName })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "lg:hidden p-4 border-b border-[var(--border)]", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center gap-2", children: [
        showGecko && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PixelGeckoFace, { className: "w-8 h-5" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "text-lg font-bold", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[var(--foreground)]", children: firstWord }),
          secondWord && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[var(--accent)]", children: secondWord })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: cn(
        "flex-1 flex items-center justify-center p-6",
        formClassName
      ), children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-full max-w-md", children }) })
    ] })
  ] });
}

// src/settings/settings-layout.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function SettingsLayout({
  title,
  description,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: cn("max-w-2xl space-y-6", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { className: "text-2xl font-bold text-[var(--foreground)]", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[var(--foreground-muted)]", children: description })
    ] }),
    children
  ] });
}

// src/settings/settings-profile-section.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function SettingsProfileSection({
  onSave,
  saving = false,
  error,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(CardHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CardTitle, { children: "Profile" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CardDescription, { children: "Your personal account information" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "space-y-4", children })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, { onClick: onSave, loading: saving, children: "Save changes" }) })
  ] });
}

// src/settings/settings-email-section.tsx
var import_react14 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
function SettingsEmailSection({
  currentEmail,
  onUpdate,
  className
}) {
  const [newEmail, setNewEmail] = (0, import_react14.useState)("");
  const [saving, setSaving] = (0, import_react14.useState)(false);
  const [error, setError] = (0, import_react14.useState)("");
  const [success, setSuccess] = (0, import_react14.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Card, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(CardTitle, { children: "Change email" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(CardDescription, { children: "Update your email address. We'll send a confirmation link to both your current and new email." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Current email" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Input, { value: currentEmail, disabled: true })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "New email" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Input,
          {
            type: "email",
            value: newEmail,
            onChange: (e) => setNewEmail(e.target.value),
            placeholder: "Enter new email address"
          }
        )
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-sm text-[var(--success)]", children: "Confirmation email sent. Check your inbox." }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_react15 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function SettingsPasswordSection({
  onUpdate,
  minLength = 8,
  className
}) {
  const [newPassword, setNewPassword] = (0, import_react15.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react15.useState)("");
  const [saving, setSaving] = (0, import_react15.useState)(false);
  const [error, setError] = (0, import_react15.useState)("");
  const [success, setSuccess] = (0, import_react15.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Card, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CardTitle, { children: "Change password" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(CardDescription, { children: [
        "Update your password. Use a strong password with at least ",
        minLength,
        " characters."
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "New password" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Input,
          {
            type: "password",
            value: newPassword,
            onChange: (e) => setNewPassword(e.target.value),
            placeholder: "Enter new password"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Confirm password" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Input,
          {
            type: "password",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            placeholder: "Confirm new password"
          }
        )
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-sm text-[var(--success)]", children: "Password updated successfully." }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
var import_react16 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
function SettingsDangerZone({
  onDelete,
  onSignOut,
  deleteWarning = "This action cannot be undone. All your data will be permanently deleted.",
  confirmPhrase = "delete my account",
  className
}) {
  const [showConfirm, setShowConfirm] = (0, import_react16.useState)(false);
  const [confirmText, setConfirmText] = (0, import_react16.useState)("");
  const [deleting, setDeleting] = (0, import_react16.useState)(false);
  const [signingOut, setSigningOut] = (0, import_react16.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Card, { className: cn("border-[var(--critical)]/30", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(CardTitle, { className: "text-[var(--critical)]", children: "Danger zone" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(CardDescription, { children: "Irreversible actions that affect your account" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "font-medium text-[var(--foreground)]", children: "Delete account" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-sm text-[var(--foreground-muted)]", children: "Permanently delete your account and all data" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          Button,
          {
            variant: "danger",
            size: "sm",
            onClick: () => setShowConfirm(true),
            children: "Delete account"
          }
        )
      ] }),
      showConfirm && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical)]/5 p-4 space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-sm text-[var(--foreground)]", children: deleteWarning }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: [
            "Type ",
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "font-mono text-[var(--critical)]", children: confirmPhrase }),
            " to confirm"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            Input,
            {
              value: confirmText,
              onChange: (e) => setConfirmText(e.target.value),
              placeholder: confirmPhrase
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("hr", { className: "border-[var(--border)]" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "font-medium text-[var(--foreground)]", children: "Sign out" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-sm text-[var(--foreground-muted)]", children: "Sign out of your account on this device" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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

// src/marketing/marketing-header.tsx
var import_react17 = require("react");
var import_link = __toESM(require("next/link"));
var import_jsx_runtime24 = require("react/jsx-runtime");
function MarketingHeader({
  brand,
  navLinks,
  isLoggedIn = false,
  loading = false,
  dashboardHref = "/app",
  loginHref = "/login",
  signupHref = "/signup",
  ctaText = "Get started",
  actions,
  className
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react17.useState)(false);
  const [scrolled, setScrolled] = (0, import_react17.useState)(false);
  (0, import_react17.useEffect)(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("header", { className: cn(
    "fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] transition-colors duration-200",
    scrolled ? "bg-[var(--background)]" : "bg-[var(--background)]/80 backdrop-blur-lg",
    className
  ), children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("nav", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_link.default, { href: brand.href || "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden", children: brand.logo }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "font-bold text-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[var(--foreground)]", children: brand.name[0] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[var(--accent)]", children: brand.name[1] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        import_link.default,
        {
          href: link.href,
          className: "text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors",
          children: link.label
        },
        link.href
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "hidden md:flex items-center gap-3", children: [
        actions,
        !loading && (isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_link.default, { href: dashboardHref, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button, { size: "sm", children: "Dashboard" }) }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_link.default, { href: loginHref, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button, { variant: "ghost", size: "sm", children: "Log in" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_link.default, { href: signupHref, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button, { size: "sm", children: ctaText }) })
        ] }))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        "button",
        {
          className: "md:hidden p-2 text-[var(--foreground-muted)]",
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M4 6h16M4 12h16M4 18h16" }) })
        }
      )
    ] }),
    mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "md:hidden border-t border-[var(--border)] bg-[var(--background)]", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "px-6 py-4 space-y-4", children: [
      navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        import_link.default,
        {
          href: link.href,
          className: "block text-[var(--foreground-muted)]",
          onClick: () => setMobileMenuOpen(false),
          children: link.label
        },
        link.href
      )),
      actions && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex items-center gap-2 text-[var(--foreground-muted)]", children: actions }) }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("hr", { className: "border-[var(--border)]" }),
      isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_link.default, { href: dashboardHref, onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button, { className: "w-full", children: "Dashboard" }) }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          import_link.default,
          {
            href: loginHref,
            className: "block text-[var(--foreground-muted)]",
            onClick: () => setMobileMenuOpen(false),
            children: "Log in"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_link.default, { href: signupHref, onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button, { className: "w-full", children: ctaText }) })
      ] })
    ] }) })
  ] });
}

// src/marketing/marketing-footer.tsx
var import_link2 = __toESM(require("next/link"));
var import_jsx_runtime25 = require("react/jsx-runtime");
function MarketingFooter({
  brand,
  linkGroups,
  copyright,
  email,
  className
}) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("footer", { className: cn("border-t border-[var(--border)] bg-[var(--background)]", className), children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "max-w-7xl mx-auto px-6 py-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden", children: brand.logo }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "font-bold", children: brand.name })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-sm text-[var(--foreground-muted)]", children: brand.description })
      ] }),
      linkGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h4", { className: "font-semibold mb-4 text-sm", children: group.title }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("ul", { className: "space-y-2 text-sm text-[var(--foreground-muted)]", children: group.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_link2.default, { href: link.href, className: "hover:text-[var(--foreground)]", children: link.label }) }, link.href)) })
      ] }, group.title))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-sm text-[var(--foreground-subtle)]", children: copyright || `\xA9 ${year} ${brand.name}. All rights reserved.` }),
      email && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "a",
        {
          href: `mailto:${email}`,
          className: "text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
          children: email
        }
      )
    ] })
  ] }) });
}

// src/seo/breadcrumbs.tsx
var import_link3 = __toESM(require("next/link"));
var import_jsx_runtime26 = require("react/jsx-runtime");
function Breadcrumbs({
  items,
  separator = "/",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: cn("text-sm text-[var(--foreground-muted)]", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("ol", { className: "flex items-center gap-2 flex-wrap", children: items.map((item, index) => {
        const isLast = index === items.length - 1;
        return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("li", { className: "flex items-center gap-2", children: [
          index > 0 && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-[var(--foreground-subtle)]", children: separator }),
          isLast ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-[var(--foreground)]", "aria-current": "page", children: item.name }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            import_link3.default,
            {
              href: item.href,
              className: "hover:text-[var(--accent)] transition-colors",
              children: item.name
            }
          )
        ] }, item.href);
      }) })
    }
  );
}

// src/seo/json-ld.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function JsonLd({ data, mode = "graph" }) {
  if (!data) return null;
  if (!Array.isArray(data)) {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
      }
    );
  }
  if (mode === "separate") {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: data.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(item) }
      },
      index
    )) });
  }
  const graphData = {
    "@context": "https://schema.org",
    "@graph": data.map((d) => {
      const { "@context": _, ...rest } = d;
      return rest;
    })
  };
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(graphData) }
    }
  );
}

// src/seo/faq-section.tsx
var import_react18 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
function ChevronDownIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) });
}
function generateFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
function FAQItemComponent({ faq }) {
  const [isOpen, setIsOpen] = (0, import_react18.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Card, { padding: "none", className: "overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between p-4 text-left hover:bg-[var(--background-elevated)] transition-colors",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "font-medium text-[var(--foreground)] pr-4", children: faq.question }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            ChevronDownIcon,
            {
              className: cn(
                "h-5 w-5 text-[var(--foreground-muted)] flex-shrink-0 transition-transform",
                isOpen && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "div",
      {
        className: cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "px-4 pb-4 text-[var(--foreground-muted)] text-sm leading-relaxed", children: faq.answer }) })
      }
    )
  ] });
}
function FAQSection({
  faqs,
  title,
  includeSchema = false,
  className
}) {
  if (faqs.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { className, children: [
    includeSchema && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(generateFaqSchema(faqs)) }
      }
    ),
    title && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h2", { className: "text-2xl font-bold mb-6", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "space-y-3", children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FAQItemComponent, { faq }, index)) })
  ] });
}

// src/dashboard/dashboard-shell.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
function DashboardShell({
  sidebar,
  header,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: cn("flex h-screen bg-[var(--background)]", className), children: [
    sidebar,
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
      header,
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("main", { className: "flex-1 overflow-y-auto p-4 sm:p-6", children })
    ] })
  ] });
}

// src/dashboard/dashboard-sidebar.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
function DashboardSidebar({
  brand,
  children,
  footer,
  collapsed = false,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("aside", { className: cn(
    "hidden flex-shrink-0 border-r border-[var(--border)] bg-[var(--background)] md:flex md:flex-col transition-all duration-200",
    collapsed ? "w-[72px]" : "w-64",
    className
  ), children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: cn(
      "flex h-16 items-center border-b border-[var(--border)]",
      collapsed ? "justify-center px-2" : "px-5"
    ), children: brand }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("nav", { className: cn(
      "flex-1 overflow-y-auto py-4",
      collapsed ? "px-2 space-y-1" : "px-3 space-y-1"
    ), children }),
    footer && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: cn(
      "border-t border-[var(--border)]",
      collapsed ? "p-2" : "p-4"
    ), children: footer })
  ] });
}

// src/dashboard/dashboard-header.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function MenuIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }) });
}
function DashboardHeader({
  onMenuClick,
  title,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("header", { className: cn(
    "flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-6",
    className
  ), children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex items-center gap-4", children: [
      onMenuClick && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "md:hidden",
          onClick: onMenuClick,
          "aria-label": "Open menu",
          children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(MenuIcon, { className: "h-5 w-5" })
        }
      ),
      title && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h1", { className: "text-lg font-semibold text-[var(--foreground)]", children: title })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "flex items-center gap-3", children })
  ] });
}

// src/dashboard/dashboard-nav.tsx
var import_link4 = __toESM(require("next/link"));
var import_navigation = require("next/navigation");
var import_jsx_runtime32 = require("react/jsx-runtime");
function DashboardNavItem({
  href,
  icon,
  badge,
  active,
  onClick,
  collapsed = false,
  activeClassName,
  children,
  className
}) {
  const pathname = (0, import_navigation.usePathname)();
  const isActive = active ?? (href === "/app" || href === "/" ? pathname === href : pathname.startsWith(href));
  const defaultActiveClass = "bg-[var(--accent)] text-[var(--background)]";
  const activeClass = activeClassName || defaultActiveClass;
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
    import_link4.default,
    {
      href,
      onClick,
      title: collapsed ? typeof children === "string" ? children : void 0 : void 0,
      className: cn(
        "group flex items-center text-sm font-medium transition-all rounded-xl relative",
        collapsed ? "justify-center px-0 py-2.5 w-full" : "gap-3 px-3 py-2.5",
        isActive ? activeClass : "text-[var(--foreground-muted)] hover:bg-[var(--background-elevated)] hover:text-[var(--foreground)]",
        className
      ),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: cn(
          "h-5 w-5 flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5 flex-shrink-0",
          isActive && !activeClassName ? "text-[var(--background)]" : isActive && activeClassName ? "" : "text-[var(--foreground-subtle)] group-hover:text-[var(--accent)]"
        ), children: icon }),
        !collapsed && /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "flex-1 truncate", children }),
          badge
        ] })
      ]
    }
  );
}
function DashboardNavGroup({
  label,
  collapsed = false,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: cn("space-y-1", className), children: [
    label && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground-subtle)]", children: label }),
    label && collapsed && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "mx-auto my-2 w-6 border-t border-[var(--border)]" }),
    children
  ] });
}

// src/dashboard/dashboard-user-menu.tsx
var import_react19 = require("react");
var import_jsx_runtime33 = require("react/jsx-runtime");
function DashboardUserMenu({
  user,
  onSignOut,
  menuItems = [],
  className
}) {
  const [open, setOpen] = (0, import_react19.useState)(false);
  const ref = (0, import_react19.useRef)(null);
  (0, import_react19.useEffect)(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  (0, import_react19.useEffect)(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);
  const initials = user.name ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase() : user.email[0].toUpperCase();
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { ref, className: cn("relative", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      Button,
      {
        variant: "ghost",
        onClick: () => setOpen(!open),
        className: "relative h-10 w-10 p-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "w-10 h-10 bg-[var(--background-elevated)] border border-[var(--border)] rounded-xl flex items-center justify-center hover:border-[var(--accent)] transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-sm font-semibold text-[var(--accent)]", children: initials }) })
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "absolute right-0 top-full mt-2 w-56 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-lg z-50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "border-b border-[var(--border)] px-4 py-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-sm font-medium text-[var(--foreground)]", children: user.name || "User" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-xs text-[var(--foreground-subtle)]", children: user.email })
      ] }),
      menuItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "py-1", children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        "button",
        {
          onClick: () => {
            item.onClick();
            setOpen(false);
          },
          className: cn(
            "w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors",
            item.variant === "danger" ? "text-[var(--critical)] hover:bg-[var(--critical)]/10" : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-subtle)]"
          ),
          children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "h-4 w-4 flex items-center justify-center [&>svg]:h-4 [&>svg]:w-4", children: item.icon }),
            item.label
          ]
        },
        item.label
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "border-t border-[var(--border)] py-1", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
        "button",
        {
          onClick: () => {
            onSignOut();
            setOpen(false);
          },
          className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--critical)] hover:bg-[var(--critical)]/10 transition-colors",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" }) }),
            "Sign out"
          ]
        }
      ) })
    ] })
  ] });
}

// src/pages/not-found-content.tsx
var import_link5 = __toESM(require("next/link"));
var import_jsx_runtime34 = require("react/jsx-runtime");
function NotFoundContent({
  title = "Page not found",
  description = "The page you're looking for doesn't exist. Maybe it crawled away, or maybe it was never here.",
  illustration,
  primaryAction,
  secondaryAction,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: cn("flex flex-col items-center justify-center px-6 py-24", className), children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "flex justify-center mb-8", children: illustration }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h1", { className: "text-4xl font-bold mb-4", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-[var(--foreground-muted)] mb-8", children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_link5.default, { href: primaryAction.href, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Button, { variant: "primary", size: "lg", children: primaryAction.label }) }),
      secondaryAction && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_link5.default, { href: secondaryAction.href, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Button, { variant: "secondary", size: "lg", children: secondaryAction.label }) })
    ] })
  ] }) });
}

// src/pages/error-content.tsx
var import_link6 = __toESM(require("next/link"));
var import_jsx_runtime35 = require("react/jsx-runtime");
function ErrorContent({
  title = "Something went wrong",
  description = "An unexpected error occurred. Try again, or head back home if the problem persists.",
  illustration,
  onReset,
  primaryAction,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: cn("flex flex-col items-center justify-center px-6 py-24", className), children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "flex justify-center mb-8", children: illustration }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h1", { className: "text-4xl font-bold mb-4", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-[var(--foreground-muted)] mb-8", children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Button, { variant: "primary", size: "lg", onClick: onReset, children: "Try again" }),
      primaryAction && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_link6.default, { href: primaryAction.href, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Button, { variant: "secondary", size: "lg", children: primaryAction.label }) })
    ] })
  ] }) });
}

// src/pages/loading-content.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
function LoadingContent({
  illustration,
  message,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: cn("flex flex-col items-center justify-center min-h-[60vh] px-6", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex justify-center mb-4", children: illustration }),
    message && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-sm text-[var(--foreground-muted)]", children: message })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthLayout,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CircularProgress,
  ConfirmDialog,
  DashboardHeader,
  DashboardNavGroup,
  DashboardNavItem,
  DashboardShell,
  DashboardSidebar,
  DashboardUserMenu,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Drawer,
  EmptyState,
  ErrorContent,
  FAQSection,
  GeckoCursorTrail,
  GeckoLoadingWithFact,
  GeckoScrollBuddy,
  Input,
  JsonLd,
  Label,
  LoadingContent,
  LoginForm,
  MarketingFooter,
  MarketingHeader,
  NotFoundContent,
  PixelGecko,
  PixelGecko404,
  PixelGeckoAngry,
  PixelGeckoCelebrate,
  PixelGeckoClimbing,
  PixelGeckoError,
  PixelGeckoFace,
  PixelGeckoLarge,
  PixelGeckoLoading,
  PixelGeckoLoadingWithFact,
  PixelGeckoParty,
  PixelGeckoSleeping,
  PixelGeckoStatic,
  PixelGeckoSuccess,
  PixelGeckoThinking,
  PixelGeckoTongue,
  PixelGeckoWatcher,
  PixelGeckoWaving,
  Progress,
  SettingsDangerZone,
  SettingsEmailSection,
  SettingsLayout,
  SettingsPasswordSection,
  SettingsProfileSection,
  SignupForm,
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
  SkeletonTableRow,
  SkeletonText,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeToggle,
  ToastProvider,
  cn,
  generatePassword,
  getPasswordStrength,
  getRandomGeckoFact,
  useToast
});
//# sourceMappingURL=index.js.map
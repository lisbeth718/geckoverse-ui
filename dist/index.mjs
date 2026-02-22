"use client";

// src/gecko/pixel-gecko.tsx
import { useEffect, useState, useRef } from "react";

// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/gecko/pixel-gecko.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 32 32",
      className: cn("w-8 h-8", className),
      style: { imageRendering: "pixelated" },
      children: [
        /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
        /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
        /* @__PURE__ */ jsx("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
        /* @__PURE__ */ jsx("rect", { x: "9", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
        /* @__PURE__ */ jsx("rect", { x: "10", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
        /* @__PURE__ */ jsx("rect", { x: "11", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
        /* @__PURE__ */ jsx("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
        /* @__PURE__ */ jsx("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
        /* @__PURE__ */ jsx("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
        /* @__PURE__ */ jsx("rect", { x: "24", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
        /* @__PURE__ */ jsx("rect", { x: "27", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
        /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
        /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
      ]
    }
  );
}
function PixelGeckoLoading({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        viewBox: "0 0 32 32",
        className: "w-full h-full",
        style: { imageRendering: "pixelated" },
        children: [
          /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
          /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
          /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
          /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "6", fill: DEFAULT_COLORS.primary, className: "upper-jaw" }),
          /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "4", fill: DEFAULT_COLORS.secondary, className: "upper-jaw" }),
          /* @__PURE__ */ jsx("rect", { x: "22", y: "18", width: "8", height: "6", fill: DEFAULT_COLORS.primary, className: "lower-jaw" }),
          /* @__PURE__ */ jsx("rect", { x: "26", y: "18", width: "4", height: "4", fill: DEFAULT_COLORS.secondary, className: "lower-jaw" }),
          /* @__PURE__ */ jsx("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
          /* @__PURE__ */ jsx("rect", { x: "9", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
          /* @__PURE__ */ jsx("rect", { x: "10", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
          /* @__PURE__ */ jsx("rect", { x: "11", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
          /* @__PURE__ */ jsx("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ jsx("rect", { x: "28", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
          /* @__PURE__ */ jsx("rect", { x: "24", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.teeth, className: "upper-teeth" }),
          /* @__PURE__ */ jsx("rect", { x: "27", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.teeth, className: "upper-teeth" }),
          /* @__PURE__ */ jsx("rect", { x: "25", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth, className: "lower-teeth" }),
          /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
          /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
        ]
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
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
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx("div", { ref: containerRef, className: cn("relative", SIZE_CLASSES[size], className), children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
    /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
    /* @__PURE__ */ jsx("rect", { x: 9 + eyeOffset.x, y: 11 + eyeOffset.y, width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
    /* @__PURE__ */ jsx("rect", { x: 10 + eyeOffset.x, y: 12 + eyeOffset.y, width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
    /* @__PURE__ */ jsx("rect", { x: 11 + eyeOffset.x, y: 13 + eyeOffset.y, width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
    /* @__PURE__ */ jsx("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ jsx("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "24", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ jsx("rect", { x: "27", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
  ] }) });
}
function PixelGeckoCelebrate({
  className,
  size = "md",
  celebrating = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", SIZE_CLASSES[size], celebrating && "animate-gecko-celebrate", className), children: [
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      celebrating ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("rect", { x: "9", y: "13", width: "6", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
        /* @__PURE__ */ jsx("rect", { x: "10", y: "12", width: "4", height: "1", fill: DEFAULT_COLORS.eyeMid })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("rect", { x: "9", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
        /* @__PURE__ */ jsx("rect", { x: "10", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
        /* @__PURE__ */ jsx("rect", { x: "11", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter })
      ] }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      celebrating ? /* @__PURE__ */ jsx("rect", { x: "22", y: "20", width: "8", height: "4", fill: DEFAULT_COLORS.dark }) : /* @__PURE__ */ jsx("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "24", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
      /* @__PURE__ */ jsx("rect", { x: "27", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
    ] }),
    celebrating && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx("style", { children: `
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
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 64", className: cn("w-8 h-16", className), style: { imageRendering: "pixelated" }, children: [
    /* @__PURE__ */ jsx("rect", { x: "10", y: "20", width: "12", height: "24", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "12", y: "18", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "8", y: "6", width: "16", height: "14", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "10", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "12", y: "8", width: "6", height: "6", fill: DEFAULT_COLORS.eyeOuter }),
    /* @__PURE__ */ jsx("rect", { x: "13", y: "9", width: "4", height: "4", fill: DEFAULT_COLORS.eyeInner }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "10", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
    /* @__PURE__ */ jsx("rect", { x: "20", y: "10", width: "6", height: "6", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "24", y: "12", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ jsx("rect", { x: "4", y: "18", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "16", width: "4", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "20", y: "18", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "26", y: "16", width: "4", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "0", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "28", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "30", y: "14", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "4", y: "38", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "40", width: "4", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "20", y: "38", width: "8", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "26", y: "40", width: "4", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "0", y: "42", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "44", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "28", y: "42", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "30", y: "44", width: "2", height: "2", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "12", y: "44", width: "8", height: "6", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "13", y: "50", width: "6", height: "6", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "56", width: "4", height: "4", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "15", y: "60", width: "2", height: "4", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "22", width: "4", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "28", width: "4", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "34", width: "4", height: "2", fill: DEFAULT_COLORS.dark })
  ] });
}
function PixelGeckoAngry({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("relative", SIZE_CLASSES[size], className), children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
    /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
    /* @__PURE__ */ jsx("rect", { x: "9", y: "12", width: "6", height: "4", fill: "#ff4757" }),
    /* @__PURE__ */ jsx("rect", { x: "10", y: "13", width: "4", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
    /* @__PURE__ */ jsx("rect", { x: "6", y: "10", width: "4", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "10", y: "8", width: "6", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "2", height: "4", fill: "#ff4757", opacity: "0.6" }),
    /* @__PURE__ */ jsx("rect", { x: "6", y: "0", width: "2", height: "4", fill: "#ff4757", opacity: "0.4" }),
    /* @__PURE__ */ jsx("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ jsx("rect", { x: "22", y: "20", width: "8", height: "4", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "24", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ jsx("rect", { x: "27", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ jsx("rect", { x: "25", y: "22", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
  ] }) });
}
function PixelGeckoSleeping({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("relative", SIZE_CLASSES[size], className), children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
    /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
    /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
    /* @__PURE__ */ jsx("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
    /* @__PURE__ */ jsx("rect", { x: "9", y: "14", width: "6", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
    /* @__PURE__ */ jsx("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
    /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark }),
    /* @__PURE__ */ jsx("text", { x: "18", y: "4", fill: "#70a1ff", fontSize: "4", fontFamily: "monospace", opacity: "0.8", children: "z" }),
    /* @__PURE__ */ jsx("text", { x: "22", y: "2", fill: "#70a1ff", fontSize: "3", fontFamily: "monospace", opacity: "0.6", children: "z" }),
    /* @__PURE__ */ jsx("text", { x: "25", y: "0", fill: "#70a1ff", fontSize: "2", fontFamily: "monospace", opacity: "0.4", children: "z" })
  ] }) });
}
function PixelGeckoThinking({
  className,
  size = "md"
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      /* @__PURE__ */ jsx("rect", { x: "9", y: "10", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
      /* @__PURE__ */ jsx("rect", { x: "10", y: "11", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
      /* @__PURE__ */ jsx("rect", { x: "11", y: "12", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsxs("g", { className: "animate-pulse", children: [
        /* @__PURE__ */ jsx("circle", { cx: "28", cy: "4", r: "1.5", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ jsx("circle", { cx: "30", cy: "2", r: "1", fill: DEFAULT_COLORS.primary, opacity: "0.7" }),
        /* @__PURE__ */ jsx("circle", { cx: "31", cy: "0", r: "0.5", fill: DEFAULT_COLORS.primary, opacity: "0.4" })
      ] }),
      /* @__PURE__ */ jsx("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      /* @__PURE__ */ jsx("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
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
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(0);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed right-0 z-50 transition-all duration-300 pointer-events-none",
      style: { top: `${position}%` },
      children: /* @__PURE__ */ jsx("div", { className: "transform rotate-90", children: /* @__PURE__ */ jsx(PixelGeckoClimbing, { className: "w-6 h-12 opacity-40 hover:opacity-80 transition-opacity" }) })
    }
  );
}
function PixelGeckoTongue({
  className,
  size = "md",
  lickOnHover = true
}) {
  const [isLicking, setIsLicking] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("relative cursor-pointer", SIZE_CLASSES[size], className),
      onMouseEnter: () => lickOnHover && setIsLicking(true),
      onMouseLeave: () => setIsLicking(false),
      children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 40 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
          /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
          /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
          /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
          /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
          /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
          /* @__PURE__ */ jsx("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
          /* @__PURE__ */ jsx("rect", { x: "9", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
          /* @__PURE__ */ jsx("rect", { x: "10", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
          /* @__PURE__ */ jsx("rect", { x: "11", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
          /* @__PURE__ */ jsx("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ jsx("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
          /* @__PURE__ */ jsx("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ jsx("rect", { x: "24", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
          /* @__PURE__ */ jsx("rect", { x: "27", y: "20", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
          /* @__PURE__ */ jsxs("g", { className: isLicking ? "tongue-out" : "tongue-in", children: [
            /* @__PURE__ */ jsx("rect", { x: "30", y: "18", width: "2", height: "2", fill: "#ff6b8a" }),
            /* @__PURE__ */ jsx("rect", { x: "32", y: "17", width: "2", height: "2", fill: "#ff6b8a" }),
            /* @__PURE__ */ jsx("rect", { x: "34", y: "16", width: "2", height: "2", fill: "#ff6b8a" }),
            /* @__PURE__ */ jsx("rect", { x: "36", y: "15", width: "2", height: "3", fill: "#ff6b8a" }),
            /* @__PURE__ */ jsx("rect", { x: "38", y: "14", width: "1", height: "2", fill: "#ff4d6d" }),
            /* @__PURE__ */ jsx("rect", { x: "38", y: "17", width: "1", height: "2", fill: "#ff4d6d" })
          ] }),
          /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
          /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
          /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
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
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "10", width: "12", height: "6", fill: "#1a1a1f" }),
      /* @__PURE__ */ jsx("rect", { x: "7", y: "11", width: "10", height: "4", fill: "#2a2a3a" }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "12", width: "2", height: "1", fill: "#4a4a5a" }),
      /* @__PURE__ */ jsx("rect", { x: "4", y: "12", width: "2", height: "2", fill: "#1a1a1f" }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      /* @__PURE__ */ jsx("rect", { x: "22", y: "20", width: "6", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "26", y: "18", width: "4", height: "2", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "24", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sparkle s1" }),
    /* @__PURE__ */ jsx("div", { className: "sparkle s2" }),
    /* @__PURE__ */ jsx("div", { className: "sparkle s3" }),
    /* @__PURE__ */ jsx("style", { children: `
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
  return /* @__PURE__ */ jsxs("div", { className: cn("relative animate-shake", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ jsx("rect", { x: "4", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "22", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "26", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      /* @__PURE__ */ jsx("rect", { x: "9", y: "11", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ jsx("rect", { x: "13", y: "11", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ jsx("rect", { x: "11", y: "13", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ jsx("rect", { x: "9", y: "15", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ jsx("rect", { x: "13", y: "15", width: "2", height: "2", fill: "#ff4757" }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "28", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      /* @__PURE__ */ jsx("rect", { x: "22", y: "22", width: "8", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "24", y: "20", width: "4", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "2", height: "4", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "18", y: "8", width: "2", height: "4", fill: "#00d4ff", opacity: "0.7" }),
      /* @__PURE__ */ jsx("rect", { x: "18", y: "12", width: "2", height: "2", fill: "#00d4ff", opacity: "0.5" })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
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
  const [burpCount, setBurpCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: cn("relative text-center inline-block", className), children: [
    /* @__PURE__ */ jsx("div", { className: "cursor-pointer", onClick: () => setBurpCount((c) => c + 1), children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 48 32", className: "w-48 h-32", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ jsx("rect", { x: "4", y: "6", width: "28", height: "22", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "6", y: "4", width: "24", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "10", y: "2", width: "16", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "30", y: "10", width: "10", height: "12", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "36", y: "12", width: "6", height: "8", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "10", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      /* @__PURE__ */ jsx("rect", { x: "10", y: "12", width: "10", height: "4", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "12", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
      /* @__PURE__ */ jsx("rect", { x: "30", y: "20", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "32", y: "18", width: "6", height: "2", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "20", width: "20", height: "8", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("text", { x: "12", y: "27", fill: DEFAULT_COLORS.dark, fontSize: "6", fontFamily: "monospace", children: "404" }),
      /* @__PURE__ */ jsx("rect", { x: "0", y: "16", width: "6", height: "10", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "0", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark })
    ] }) }),
    burpCount > 0 && /* @__PURE__ */ jsx("div", { className: "burp-text", children: "*burp*" }, burpCount),
    /* @__PURE__ */ jsx("style", { children: `
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
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", SIZE_CLASSES[size], className), children: [
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 40 32", className: "w-full h-full", style: { imageRendering: "pixelated" }, children: [
      /* @__PURE__ */ jsx("rect", { x: "12", y: "8", width: "20", height: "18", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "14", y: "6", width: "16", height: "4", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "16", y: "4", width: "12", height: "4", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "30", y: "12", width: "8", height: "10", fill: DEFAULT_COLORS.primary }),
      /* @__PURE__ */ jsx("rect", { x: "34", y: "14", width: "4", height: "6", fill: DEFAULT_COLORS.secondary }),
      /* @__PURE__ */ jsx("rect", { x: "16", y: "10", width: "8", height: "8", fill: DEFAULT_COLORS.eyeOuter }),
      /* @__PURE__ */ jsx("rect", { x: "17", y: "11", width: "5", height: "5", fill: DEFAULT_COLORS.eyeInner }),
      /* @__PURE__ */ jsx("rect", { x: "18", y: "12", width: "3", height: "3", fill: DEFAULT_COLORS.eyeMid }),
      /* @__PURE__ */ jsx("rect", { x: "19", y: "13", width: "2", height: "2", fill: DEFAULT_COLORS.eyeCenter }),
      /* @__PURE__ */ jsx("rect", { x: "14", y: "8", width: "10", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "36", y: "16", width: "2", height: "2", fill: DEFAULT_COLORS.nostril }),
      /* @__PURE__ */ jsx("rect", { x: "30", y: "20", width: "6", height: "2", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsx("rect", { x: "32", y: "18", width: "4", height: "2", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "32", y: "18", width: "2", height: "2", fill: DEFAULT_COLORS.teeth }),
      /* @__PURE__ */ jsx("rect", { x: "10", y: "18", width: "4", height: "8", fill: DEFAULT_COLORS.tertiary }),
      /* @__PURE__ */ jsx("rect", { x: "8", y: "22", width: "4", height: "6", fill: DEFAULT_COLORS.dark }),
      /* @__PURE__ */ jsxs("g", { className: "waving-arm", children: [
        /* @__PURE__ */ jsx("rect", { x: "2", y: "14", width: "8", height: "4", fill: DEFAULT_COLORS.primary }),
        /* @__PURE__ */ jsx("rect", { x: "0", y: "12", width: "4", height: "4", fill: DEFAULT_COLORS.secondary }),
        /* @__PURE__ */ jsx("rect", { x: "0", y: "10", width: "2", height: "4", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ jsx("rect", { x: "2", y: "8", width: "2", height: "4", fill: DEFAULT_COLORS.tertiary }),
        /* @__PURE__ */ jsx("rect", { x: "4", y: "10", width: "2", height: "4", fill: DEFAULT_COLORS.tertiary })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-pointer", className),
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-4 mb-8", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "party-gecko", style: { animationDelay: `${i * 0.1}s` }, children: /* @__PURE__ */ jsx(PixelGeckoFace, { className: "w-16 h-16" }) }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-white mb-2", children: "GECKO PARTY!" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Click anywhere to close" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none disco-lights" }),
        /* @__PURE__ */ jsx("style", { children: `
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
  const [footprints, setFootprints] = useState([]);
  const idRef = useRef(0);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 pointer-events-none z-40", children: [
    footprints.map((fp, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "footprint",
        style: { left: fp.x - 8, top: fp.y - 8, transform: `rotate(${i % 2 === 0 ? -15 : 15}deg)` },
        children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", style: { imageRendering: "pixelated" }, children: [
          /* @__PURE__ */ jsx("rect", { x: "2", y: "0", width: "2", height: "4", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" }),
          /* @__PURE__ */ jsx("rect", { x: "6", y: "2", width: "4", height: "6", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" }),
          /* @__PURE__ */ jsx("rect", { x: "12", y: "0", width: "2", height: "4", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" }),
          /* @__PURE__ */ jsx("rect", { x: "0", y: "10", width: "2", height: "4", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" }),
          /* @__PURE__ */ jsx("rect", { x: "14", y: "10", width: "2", height: "4", fill: "var(--gecko-primary, #D4A84B)", opacity: "0.3" })
        ] })
      },
      fp.id
    )),
    /* @__PURE__ */ jsx("style", { children: `
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
  return /* @__PURE__ */ jsx("div", { className: cn(
    "w-24 h-24 rounded-2xl flex items-center justify-center",
    "bg-[var(--background,#0c0c0e)] border border-[var(--border,rgba(255,255,255,0.06))]",
    className
  ), children: /* @__PURE__ */ jsx(GeckoComponent, { className: "w-16 h-16" }) });
}
var PixelGeckoStatic = PixelGeckoFace;
var PixelGecko = PixelGeckoLoading;

// src/gecko/gecko-facts.tsx
import { useEffect as useEffect2, useState as useState2 } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const [fact, setFact] = useState2("");
  useEffect2(() => {
    setFact(getRandomGeckoFact());
    const interval = setInterval(() => {
      setFact(getRandomGeckoFact());
    }, 5e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs2("div", { className: cn("flex flex-col items-center gap-3", className), children: [
    /* @__PURE__ */ jsx2(PixelGeckoLoading, { size }),
    /* @__PURE__ */ jsx2("p", { className: "text-xs text-center max-w-[200px] opacity-60 animate-fade-in", children: fact }),
    /* @__PURE__ */ jsx2("style", { children: `
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
import { forwardRef } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Button = forwardRef(
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
    return /* @__PURE__ */ jsxs3(
      "button",
      {
        ref,
        className: cn(baseStyles, variants[variant], sizes[size], className),
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxs3(
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

// src/ui/card.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Card = forwardRef2(
  ({ className = "", hover = false, padding = "md", children, ...props }, ref) => {
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsx4("div", { className: cn("mb-4", className), children });
}
function CardTitle({
  className = "",
  children
}) {
  return /* @__PURE__ */ jsx4("h3", { className: cn("text-lg font-bold text-[var(--foreground)]", className), children });
}
function CardDescription({
  className = "",
  children
}) {
  return /* @__PURE__ */ jsx4("p", { className: cn("text-sm text-[var(--foreground-muted)] mt-1", className), children });
}
function CardContent({
  className = "",
  children
}) {
  return /* @__PURE__ */ jsx4("div", { className: cn("", className), children });
}
function CardFooter({
  className = "",
  children
}) {
  return /* @__PURE__ */ jsx4("div", { className: cn("mt-4 flex items-center", className), children });
}

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

// src/ui/badge.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx6(
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
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var Label = forwardRef4(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx7(
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
import { createContext, useContext, useState as useState3, useCallback } from "react";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var ToastContext = createContext(null);
function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  const toast = useCallback((message, variant = "default", duration = 4e3) => {
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
  const [toasts, setToasts] = useState3([]);
  const addToast = useCallback((toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration || 4e3);
  }, []);
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ jsxs4(ToastContext.Provider, { value: { toasts, addToast, removeToast }, children: [
    children,
    /* @__PURE__ */ jsx8(Toaster, { toasts, onRemove: removeToast })
  ] });
}
function Toaster({
  toasts,
  onRemove
}) {
  if (toasts.length === 0) return null;
  return /* @__PURE__ */ jsx8("div", { className: "fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm", children: toasts.map((toast) => /* @__PURE__ */ jsx8(ToastItem, { toast, onRemove }, toast.id)) });
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
  return /* @__PURE__ */ jsxs4(
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
        /* @__PURE__ */ jsx8("span", { children: toast.message }),
        /* @__PURE__ */ jsx8(
          "button",
          {
            onClick: () => onRemove(toast.id),
            className: "opacity-60 hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ jsx8("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx8("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ jsx8("style", { children: `
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
import { createContext as createContext2, useContext as useContext2, useState as useState4 } from "react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var TabsContext = createContext2(null);
function useTabsContext() {
  const context = useContext2(TabsContext);
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
  const [internalValue, setInternalValue] = useState4(defaultValue || "");
  const activeTab = value !== void 0 ? value : internalValue;
  const setActiveTab = (id) => {
    if (value === void 0) {
      setInternalValue(id);
    }
    onValueChange?.(id);
  };
  return /* @__PURE__ */ jsx9(TabsContext.Provider, { value: { activeTab, setActiveTab }, children: /* @__PURE__ */ jsx9("div", { className: cn("w-full", className), children }) });
}
function TabsList({
  children,
  className
}) {
  return /* @__PURE__ */ jsx9(
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
  return /* @__PURE__ */ jsx9(
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
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      role: "tabpanel",
      className: cn("mt-4 animate-fade-in", className),
      children: [
        children,
        /* @__PURE__ */ jsx9("style", { children: `
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
import { useEffect as useEffect3, useCallback as useCallback2 } from "react";
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function Dialog({ open, onClose, children, className }) {
  const handleKeyDown = useCallback2((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);
  useEffect3(() => {
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
  return /* @__PURE__ */ jsxs6("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ jsx10(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsx10("div", { className: "absolute inset-0 flex items-center justify-center p-4", children: /* @__PURE__ */ jsx10(
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
    /* @__PURE__ */ jsx10("style", { children: `
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
  return /* @__PURE__ */ jsx10("div", { className: cn("px-6 pt-6 pb-2", className), children });
}
function DialogTitle({
  children,
  className
}) {
  return /* @__PURE__ */ jsx10("h2", { className: cn("text-lg font-semibold text-[var(--foreground,#f8f8fa)]", className), children });
}
function DialogDescription({
  children,
  className
}) {
  return /* @__PURE__ */ jsx10("p", { className: cn("text-sm text-[var(--foreground-muted,#a0a0b0)] mt-1", className), children });
}
function DialogContent({
  children,
  className
}) {
  return /* @__PURE__ */ jsx10("div", { className: cn("px-6 py-4", className), children });
}
function DialogFooter({
  children,
  className
}) {
  return /* @__PURE__ */ jsx10("div", { className: cn(
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
  return /* @__PURE__ */ jsxs6(Dialog, { open, onClose, children: [
    /* @__PURE__ */ jsxs6(DialogHeader, { children: [
      /* @__PURE__ */ jsx10(DialogTitle, { children: title }),
      description && /* @__PURE__ */ jsx10(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsxs6(DialogFooter, { children: [
      /* @__PURE__ */ jsx10(
        "button",
        {
          onClick: onClose,
          className: "px-4 py-2 text-sm font-medium rounded-lg text-[var(--foreground-muted,#a0a0b0)] hover:text-[var(--foreground,#f8f8fa)] transition-colors",
          children: cancelText
        }
      ),
      /* @__PURE__ */ jsx10(
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
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11("div", { className: cn("space-y-2", className), children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: cn(
        "p-4 rounded-xl",
        "bg-[var(--background-elevated,#141418)]",
        "border border-[var(--border,rgba(255,255,255,0.06))]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsx11(Skeleton, { className: "h-12 w-12 rounded-full" }),
          /* @__PURE__ */ jsxs7("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsx11(Skeleton, { className: "h-4 w-3/4" }),
            /* @__PURE__ */ jsx11(Skeleton, { className: "h-3 w-1/2" })
          ] })
        ] }),
        /* @__PURE__ */ jsx11(SkeletonText, { lines: 2 })
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11("div", { className: cn("flex gap-4 py-3", className), children: Array.from({ length: columns }).map((_, i) => /* @__PURE__ */ jsx11(
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
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs8("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsx12(
      "div",
      {
        className: cn(
          "w-full rounded-full overflow-hidden",
          "bg-[var(--background-subtle,#1a1a1f)]",
          sizeClasses[size]
        ),
        children: /* @__PURE__ */ jsx12(
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
    showValue && /* @__PURE__ */ jsxs8("div", { className: "mt-1 text-xs text-[var(--foreground-muted,#a0a0b0)] text-right", children: [
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
  return /* @__PURE__ */ jsxs8("div", { className: cn("relative inline-flex", className), style: { width: size, height: size }, children: [
    /* @__PURE__ */ jsxs8("svg", { width: size, height: size, className: "transform -rotate-90", children: [
      /* @__PURE__ */ jsx12(
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
      /* @__PURE__ */ jsx12(
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
    showValue && /* @__PURE__ */ jsx12("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx12("span", { className: "text-sm font-medium text-[var(--foreground,#f8f8fa)]", children: Math.round(percentage) }) })
  ] });
}

// src/ui/theme-toggle.tsx
import { useEffect as useEffect4, useState as useState5 } from "react";
import { useTheme } from "next-themes";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
function SunIcon({ className }) {
  return /* @__PURE__ */ jsx13("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsx13("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" }) });
}
function MoonIcon({ className }) {
  return /* @__PURE__ */ jsx13("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsx13("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" }) });
}
function MonitorIcon({ className }) {
  return /* @__PURE__ */ jsx13("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsx13("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" }) });
}
function ThemeToggle({ className }) {
  const [mounted, setMounted] = useState5(false);
  const { theme, setTheme } = useTheme();
  useEffect4(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ jsx13(Button, { variant: "ghost", size: "icon", disabled: true, className, children: /* @__PURE__ */ jsx13(SunIcon, { className: "h-4 w-4" }) });
  }
  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };
  return /* @__PURE__ */ jsxs9(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: cycleTheme,
      title: `Current: ${theme}. Click to switch.`,
      className,
      children: [
        theme === "dark" && /* @__PURE__ */ jsx13(MoonIcon, { className: "h-4 w-4" }),
        theme === "light" && /* @__PURE__ */ jsx13(SunIcon, { className: "h-4 w-4" }),
        theme === "system" && /* @__PURE__ */ jsx13(MonitorIcon, { className: "h-4 w-4" })
      ]
    }
  );
}

// src/ui/empty-state.tsx
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
function EmptyState({
  title,
  description,
  icon,
  action,
  className
}) {
  return /* @__PURE__ */ jsxs10("div", { className: cn("text-center py-12 px-4", className), children: [
    icon && /* @__PURE__ */ jsx14("div", { className: "flex justify-center mb-4", children: icon }),
    /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold text-[var(--foreground)] mb-2", children: title }),
    description && /* @__PURE__ */ jsx14("p", { className: "text-sm text-[var(--foreground-muted)] mb-6 max-w-md mx-auto", children: description }),
    action && (action.href ? /* @__PURE__ */ jsx14("a", { href: action.href, children: /* @__PURE__ */ jsx14(Button, { children: action.label }) }) : action.onClick ? /* @__PURE__ */ jsx14(Button, { onClick: action.onClick, children: action.label }) : null)
  ] });
}

// src/ui/drawer.tsx
import { useEffect as useEffect5, useCallback as useCallback3 } from "react";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
function Drawer({ open, onClose, side = "left", children, className }) {
  const handleKeyDown = useCallback3((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);
  useEffect5(() => {
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
  return /* @__PURE__ */ jsxs11("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ jsx15(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-drawer-fade-in",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsx15(
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
    /* @__PURE__ */ jsx15("style", { children: `
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
import { useState as useState6, useCallback as useCallback4 } from "react";

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
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
function EyeIcon({ className }) {
  return /* @__PURE__ */ jsxs12("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
    /* @__PURE__ */ jsx16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
    /* @__PURE__ */ jsx16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
  ] });
}
function EyeOffIcon({ className }) {
  return /* @__PURE__ */ jsx16("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) });
}
function SparklesIcon({ className }) {
  return /* @__PURE__ */ jsx16("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }) });
}
function CheckIcon({ className }) {
  return /* @__PURE__ */ jsx16("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) });
}
function XIcon({ className }) {
  return /* @__PURE__ */ jsx16("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) });
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
  const [email, setEmail] = useState6("");
  const [password, setPassword] = useState6("");
  const [showPassword, setShowPassword] = useState6(false);
  const [isSubmitting, setIsSubmitting] = useState6(false);
  const passwordStrength = getPasswordStrength(password);
  const isLoading = loading || isSubmitting;
  const handleGeneratePassword = useCallback4(() => {
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
  return /* @__PURE__ */ jsxs12("div", { className: cn("space-y-6", className), children: [
    header,
    /* @__PURE__ */ jsxs12("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      error && /* @__PURE__ */ jsx16("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
      /* @__PURE__ */ jsxs12("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx16("label", { htmlFor: "signup-email", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Email" }),
        /* @__PURE__ */ jsx16(
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
      /* @__PURE__ */ jsxs12("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx16("label", { htmlFor: "signup-password", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Password" }),
          /* @__PURE__ */ jsxs12(
            "button",
            {
              type: "button",
              onClick: handleGeneratePassword,
              className: "flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:brightness-110 transition-all",
              children: [
                /* @__PURE__ */ jsx16(SparklesIcon, { className: "h-3 w-3" }),
                "Generate strong password"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs12("div", { className: "relative", children: [
          /* @__PURE__ */ jsx16(
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
          /* @__PURE__ */ jsx16(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors",
              children: showPassword ? /* @__PURE__ */ jsx16(EyeOffIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx16(EyeIcon, { className: "h-4 w-4" })
            }
          )
        ] }),
        password && /* @__PURE__ */ jsxs12("div", { className: "space-y-2 pt-1", children: [
          /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx16("div", { className: "flex-1 h-1.5 bg-[var(--background-elevated)] rounded-full overflow-hidden", children: /* @__PURE__ */ jsx16(
              "div",
              {
                className: "h-full transition-all duration-300",
                style: {
                  width: `${passwordStrength.score / 5 * 100}%`,
                  backgroundColor: passwordStrength.color
                }
              }
            ) }),
            /* @__PURE__ */ jsx16(
              "span",
              {
                className: "text-xs font-medium",
                style: { color: passwordStrength.color },
                children: passwordStrength.label
              }
            )
          ] }),
          /* @__PURE__ */ jsx16("div", { className: "flex flex-wrap gap-x-3 gap-y-1", children: passwordStrength.checks.map((check) => /* @__PURE__ */ jsxs12(
            "div",
            {
              className: "flex items-center gap-1 text-xs",
              children: [
                check.passed ? /* @__PURE__ */ jsx16(CheckIcon, { className: "h-3 w-3 text-[var(--success)]" }) : /* @__PURE__ */ jsx16(XIcon, { className: "h-3 w-3 text-[var(--foreground-subtle)]" }),
                /* @__PURE__ */ jsx16(
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
      /* @__PURE__ */ jsx16(
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
import { useState as useState7 } from "react";
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
function EyeIcon2({ className }) {
  return /* @__PURE__ */ jsxs13("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [
    /* @__PURE__ */ jsx17("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
    /* @__PURE__ */ jsx17("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
  ] });
}
function EyeOffIcon2({ className }) {
  return /* @__PURE__ */ jsx17("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx17("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) });
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
  const [email, setEmail] = useState7("");
  const [password, setPassword] = useState7("");
  const [showPassword, setShowPassword] = useState7(false);
  const [isSubmitting, setIsSubmitting] = useState7(false);
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
  return /* @__PURE__ */ jsxs13("div", { className: cn("space-y-6", className), children: [
    header,
    /* @__PURE__ */ jsxs13("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      error && /* @__PURE__ */ jsx17("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ jsx17("div", { className: "rounded-xl border border-[var(--success)]/30 bg-[var(--success-bg)] p-3 text-sm text-[var(--success)]", children: success }),
      /* @__PURE__ */ jsxs13("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx17("label", { htmlFor: "login-email", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Email" }),
        /* @__PURE__ */ jsx17(
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
      /* @__PURE__ */ jsxs13("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx17("label", { htmlFor: "login-password", className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Password" }),
        /* @__PURE__ */ jsxs13("div", { className: "relative", children: [
          /* @__PURE__ */ jsx17(
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
          /* @__PURE__ */ jsx17(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors",
              children: showPassword ? /* @__PURE__ */ jsx17(EyeOffIcon2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx17(EyeIcon2, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx17(
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
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs14("div", { className: cn("min-h-screen flex", className), children: [
    /* @__PURE__ */ jsxs14("div", { className: "hidden lg:flex lg:w-1/2 bg-[var(--background-elevated)] flex-col justify-between p-12", children: [
      /* @__PURE__ */ jsx18("div", { children: /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-3", children: [
        showGecko && /* @__PURE__ */ jsx18(PixelGeckoFace, { className: "w-9 h-6" }),
        /* @__PURE__ */ jsxs14("span", { className: "text-xl font-bold", children: [
          /* @__PURE__ */ jsx18("span", { className: "text-[var(--foreground)]", children: firstWord }),
          secondWord && /* @__PURE__ */ jsx18("span", { className: "text-[var(--accent)]", children: secondWord })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs14("div", { className: "space-y-8", children: [
        showGecko && /* @__PURE__ */ jsx18("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx18(PixelGeckoFace, { className: "w-28 h-20 opacity-80" }) }),
        /* @__PURE__ */ jsxs14("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx18("h2", { className: "text-3xl font-bold text-[var(--foreground)]", children: tagline }),
          features.length > 0 && /* @__PURE__ */ jsx18("ul", { className: "space-y-3", children: features.map((feature, i) => /* @__PURE__ */ jsxs14("li", { className: "flex items-center gap-3 text-[var(--foreground-muted)]", children: [
            /* @__PURE__ */ jsx18("svg", { className: "h-5 w-5 text-[var(--accent)]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx18("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
            feature
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx18("div", { className: "text-sm text-[var(--foreground-subtle)]", children: brandNameSplit ? `${brandNameSplit[0]}${brandNameSplit[1]}` : brandName })
    ] }),
    /* @__PURE__ */ jsxs14("div", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsx18("div", { className: "lg:hidden p-4 border-b border-[var(--border)]", children: /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
        showGecko && /* @__PURE__ */ jsx18(PixelGeckoFace, { className: "w-8 h-5" }),
        /* @__PURE__ */ jsxs14("span", { className: "text-lg font-bold", children: [
          /* @__PURE__ */ jsx18("span", { className: "text-[var(--foreground)]", children: firstWord }),
          secondWord && /* @__PURE__ */ jsx18("span", { className: "text-[var(--accent)]", children: secondWord })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx18("div", { className: cn(
        "flex-1 flex items-center justify-center p-6",
        formClassName
      ), children: /* @__PURE__ */ jsx18("div", { className: "w-full max-w-md", children }) })
    ] })
  ] });
}

// src/settings/settings-layout.tsx
import { jsx as jsx19, jsxs as jsxs15 } from "react/jsx-runtime";
function SettingsLayout({
  title,
  description,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs15("div", { className: cn("max-w-2xl space-y-6", className), children: [
    /* @__PURE__ */ jsxs15("div", { children: [
      /* @__PURE__ */ jsx19("h1", { className: "text-2xl font-bold text-[var(--foreground)]", children: title }),
      description && /* @__PURE__ */ jsx19("p", { className: "text-[var(--foreground-muted)]", children: description })
    ] }),
    children
  ] });
}

// src/settings/settings-profile-section.tsx
import { jsx as jsx20, jsxs as jsxs16 } from "react/jsx-runtime";
function SettingsProfileSection({
  onSave,
  saving = false,
  error,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs16("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ jsxs16(Card, { children: [
      /* @__PURE__ */ jsxs16(CardHeader, { children: [
        /* @__PURE__ */ jsx20(CardTitle, { children: "Profile" }),
        /* @__PURE__ */ jsx20(CardDescription, { children: "Your personal account information" })
      ] }),
      /* @__PURE__ */ jsx20("div", { className: "space-y-4", children })
    ] }),
    error && /* @__PURE__ */ jsx20("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical-bg)] p-3 text-sm text-[var(--critical)]", children: error }),
    /* @__PURE__ */ jsx20("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx20(Button, { onClick: onSave, loading: saving, children: "Save changes" }) })
  ] });
}

// src/settings/settings-email-section.tsx
import { useState as useState8 } from "react";
import { jsx as jsx21, jsxs as jsxs17 } from "react/jsx-runtime";
function SettingsEmailSection({
  currentEmail,
  onUpdate,
  className
}) {
  const [newEmail, setNewEmail] = useState8("");
  const [saving, setSaving] = useState8(false);
  const [error, setError] = useState8("");
  const [success, setSuccess] = useState8(false);
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
  return /* @__PURE__ */ jsxs17(Card, { className, children: [
    /* @__PURE__ */ jsxs17(CardHeader, { children: [
      /* @__PURE__ */ jsx21(CardTitle, { children: "Change email" }),
      /* @__PURE__ */ jsx21(CardDescription, { children: "Update your email address. We'll send a confirmation link to both your current and new email." })
    ] }),
    /* @__PURE__ */ jsxs17("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs17("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx21("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Current email" }),
        /* @__PURE__ */ jsx21(Input, { value: currentEmail, disabled: true })
      ] }),
      /* @__PURE__ */ jsxs17("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx21("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "New email" }),
        /* @__PURE__ */ jsx21(
          Input,
          {
            type: "email",
            value: newEmail,
            onChange: (e) => setNewEmail(e.target.value),
            placeholder: "Enter new email address"
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx21("p", { className: "text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ jsx21("p", { className: "text-sm text-[var(--success)]", children: "Confirmation email sent. Check your inbox." }),
      /* @__PURE__ */ jsx21(
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
import { useState as useState9 } from "react";
import { jsx as jsx22, jsxs as jsxs18 } from "react/jsx-runtime";
function SettingsPasswordSection({
  onUpdate,
  minLength = 8,
  className
}) {
  const [newPassword, setNewPassword] = useState9("");
  const [confirmPassword, setConfirmPassword] = useState9("");
  const [saving, setSaving] = useState9(false);
  const [error, setError] = useState9("");
  const [success, setSuccess] = useState9(false);
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
  return /* @__PURE__ */ jsxs18(Card, { className, children: [
    /* @__PURE__ */ jsxs18(CardHeader, { children: [
      /* @__PURE__ */ jsx22(CardTitle, { children: "Change password" }),
      /* @__PURE__ */ jsxs18(CardDescription, { children: [
        "Update your password. Use a strong password with at least ",
        minLength,
        " characters."
      ] })
    ] }),
    /* @__PURE__ */ jsxs18("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs18("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx22("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "New password" }),
        /* @__PURE__ */ jsx22(
          Input,
          {
            type: "password",
            value: newPassword,
            onChange: (e) => setNewPassword(e.target.value),
            placeholder: "Enter new password"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx22("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: "Confirm password" }),
        /* @__PURE__ */ jsx22(
          Input,
          {
            type: "password",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            placeholder: "Confirm new password"
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx22("p", { className: "text-sm text-[var(--critical)]", children: error }),
      success && /* @__PURE__ */ jsx22("p", { className: "text-sm text-[var(--success)]", children: "Password updated successfully." }),
      /* @__PURE__ */ jsx22(
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
import { useState as useState10 } from "react";
import { jsx as jsx23, jsxs as jsxs19 } from "react/jsx-runtime";
function SettingsDangerZone({
  onDelete,
  onSignOut,
  deleteWarning = "This action cannot be undone. All your data will be permanently deleted.",
  confirmPhrase = "delete my account",
  className
}) {
  const [showConfirm, setShowConfirm] = useState10(false);
  const [confirmText, setConfirmText] = useState10("");
  const [deleting, setDeleting] = useState10(false);
  const [signingOut, setSigningOut] = useState10(false);
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
  return /* @__PURE__ */ jsxs19(Card, { className: cn("border-[var(--critical)]/30", className), children: [
    /* @__PURE__ */ jsxs19(CardHeader, { children: [
      /* @__PURE__ */ jsx23(CardTitle, { className: "text-[var(--critical)]", children: "Danger zone" }),
      /* @__PURE__ */ jsx23(CardDescription, { children: "Irreversible actions that affect your account" })
    ] }),
    /* @__PURE__ */ jsxs19("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs19("div", { children: [
          /* @__PURE__ */ jsx23("p", { className: "font-medium text-[var(--foreground)]", children: "Delete account" }),
          /* @__PURE__ */ jsx23("p", { className: "text-sm text-[var(--foreground-muted)]", children: "Permanently delete your account and all data" })
        ] }),
        /* @__PURE__ */ jsx23(
          Button,
          {
            variant: "danger",
            size: "sm",
            onClick: () => setShowConfirm(true),
            children: "Delete account"
          }
        )
      ] }),
      showConfirm && /* @__PURE__ */ jsxs19("div", { className: "rounded-xl border border-[var(--critical)]/30 bg-[var(--critical)]/5 p-4 space-y-4", children: [
        /* @__PURE__ */ jsx23("p", { className: "text-sm text-[var(--foreground)]", children: deleteWarning }),
        /* @__PURE__ */ jsxs19("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs19("label", { className: "text-sm font-medium text-[var(--foreground-muted)]", children: [
            "Type ",
            /* @__PURE__ */ jsx23("span", { className: "font-mono text-[var(--critical)]", children: confirmPhrase }),
            " to confirm"
          ] }),
          /* @__PURE__ */ jsx23(
            Input,
            {
              value: confirmText,
              onChange: (e) => setConfirmText(e.target.value),
              placeholder: confirmPhrase
            }
          )
        ] }),
        /* @__PURE__ */ jsxs19("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx23(
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
          /* @__PURE__ */ jsx23(
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
      /* @__PURE__ */ jsx23("hr", { className: "border-[var(--border)]" }),
      /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs19("div", { children: [
          /* @__PURE__ */ jsx23("p", { className: "font-medium text-[var(--foreground)]", children: "Sign out" }),
          /* @__PURE__ */ jsx23("p", { className: "text-sm text-[var(--foreground-muted)]", children: "Sign out of your account on this device" })
        ] }),
        /* @__PURE__ */ jsx23(
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
import { useState as useState11, useEffect as useEffect6 } from "react";
import Link from "next/link";
import { Fragment as Fragment2, jsx as jsx24, jsxs as jsxs20 } from "react/jsx-runtime";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState11(false);
  const [scrolled, setScrolled] = useState11(false);
  useEffect6(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs20("header", { className: cn(
    "fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] transition-colors duration-200",
    scrolled ? "bg-[var(--background)]" : "bg-[var(--background)]/80 backdrop-blur-lg",
    className
  ), children: [
    /* @__PURE__ */ jsxs20("nav", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs20(Link, { href: brand.href || "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx24("div", { className: "w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden", children: brand.logo }),
        /* @__PURE__ */ jsxs20("span", { className: "font-bold text-lg", children: [
          /* @__PURE__ */ jsx24("span", { className: "text-[var(--foreground)]", children: brand.name[0] }),
          /* @__PURE__ */ jsx24("span", { className: "text-[var(--accent)]", children: brand.name[1] })
        ] })
      ] }),
      /* @__PURE__ */ jsx24("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ jsx24(
        Link,
        {
          href: link.href,
          className: "text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors",
          children: link.label
        },
        link.href
      )) }),
      /* @__PURE__ */ jsxs20("div", { className: "hidden md:flex items-center gap-3", children: [
        actions,
        !loading && (isLoggedIn ? /* @__PURE__ */ jsx24(Link, { href: dashboardHref, children: /* @__PURE__ */ jsx24(Button, { size: "sm", children: "Dashboard" }) }) : /* @__PURE__ */ jsxs20(Fragment2, { children: [
          /* @__PURE__ */ jsx24(Link, { href: loginHref, children: /* @__PURE__ */ jsx24(Button, { variant: "ghost", size: "sm", children: "Log in" }) }),
          /* @__PURE__ */ jsx24(Link, { href: signupHref, children: /* @__PURE__ */ jsx24(Button, { size: "sm", children: ctaText }) })
        ] }))
      ] }),
      /* @__PURE__ */ jsx24(
        "button",
        {
          className: "md:hidden p-2 text-[var(--foreground-muted)]",
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          children: /* @__PURE__ */ jsx24("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: mobileMenuOpen ? /* @__PURE__ */ jsx24("path", { d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx24("path", { d: "M4 6h16M4 12h16M4 18h16" }) })
        }
      )
    ] }),
    mobileMenuOpen && /* @__PURE__ */ jsx24("div", { className: "md:hidden border-t border-[var(--border)] bg-[var(--background)]", children: /* @__PURE__ */ jsxs20("div", { className: "px-6 py-4 space-y-4", children: [
      navLinks.map((link) => /* @__PURE__ */ jsx24(
        Link,
        {
          href: link.href,
          className: "block text-[var(--foreground-muted)]",
          onClick: () => setMobileMenuOpen(false),
          children: link.label
        },
        link.href
      )),
      actions && /* @__PURE__ */ jsx24(Fragment2, { children: /* @__PURE__ */ jsx24("div", { className: "flex items-center gap-2 text-[var(--foreground-muted)]", children: actions }) }),
      /* @__PURE__ */ jsx24("hr", { className: "border-[var(--border)]" }),
      isLoggedIn ? /* @__PURE__ */ jsx24(Link, { href: dashboardHref, onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ jsx24(Button, { className: "w-full", children: "Dashboard" }) }) : /* @__PURE__ */ jsxs20(Fragment2, { children: [
        /* @__PURE__ */ jsx24(
          Link,
          {
            href: loginHref,
            className: "block text-[var(--foreground-muted)]",
            onClick: () => setMobileMenuOpen(false),
            children: "Log in"
          }
        ),
        /* @__PURE__ */ jsx24(Link, { href: signupHref, onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ jsx24(Button, { className: "w-full", children: ctaText }) })
      ] })
    ] }) })
  ] });
}

// src/marketing/marketing-footer.tsx
import Link2 from "next/link";
import { jsx as jsx25, jsxs as jsxs21 } from "react/jsx-runtime";
function MarketingFooter({
  brand,
  linkGroups,
  copyright,
  email,
  className
}) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx25("footer", { className: cn("border-t border-[var(--border)] bg-[var(--background)]", className), children: /* @__PURE__ */ jsxs21("div", { className: "max-w-7xl mx-auto px-6 py-12", children: [
    /* @__PURE__ */ jsxs21("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs21("div", { className: "col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx25("div", { className: "w-8 h-8 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center overflow-hidden", children: brand.logo }),
          /* @__PURE__ */ jsx25("span", { className: "font-bold", children: brand.name })
        ] }),
        /* @__PURE__ */ jsx25("p", { className: "text-sm text-[var(--foreground-muted)]", children: brand.description })
      ] }),
      linkGroups.map((group) => /* @__PURE__ */ jsxs21("div", { children: [
        /* @__PURE__ */ jsx25("h4", { className: "font-semibold mb-4 text-sm", children: group.title }),
        /* @__PURE__ */ jsx25("ul", { className: "space-y-2 text-sm text-[var(--foreground-muted)]", children: group.links.map((link) => /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsx25(Link2, { href: link.href, className: "hover:text-[var(--foreground)]", children: link.label }) }, link.href)) })
      ] }, group.title))
    ] }),
    /* @__PURE__ */ jsxs21("div", { className: "mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsx25("p", { className: "text-sm text-[var(--foreground-subtle)]", children: copyright || `\xA9 ${year} ${brand.name}. All rights reserved.` }),
      email && /* @__PURE__ */ jsx25(
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
import Link3 from "next/link";
import { jsx as jsx26, jsxs as jsxs22 } from "react/jsx-runtime";
function Breadcrumbs({
  items,
  separator = "/",
  className
}) {
  return /* @__PURE__ */ jsx26(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: cn("text-sm text-[var(--foreground-muted)]", className),
      children: /* @__PURE__ */ jsx26("ol", { className: "flex items-center gap-2 flex-wrap", children: items.map((item, index) => {
        const isLast = index === items.length - 1;
        return /* @__PURE__ */ jsxs22("li", { className: "flex items-center gap-2", children: [
          index > 0 && /* @__PURE__ */ jsx26("span", { className: "text-[var(--foreground-subtle)]", children: separator }),
          isLast ? /* @__PURE__ */ jsx26("span", { className: "text-[var(--foreground)]", "aria-current": "page", children: item.name }) : /* @__PURE__ */ jsx26(
            Link3,
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
import { Fragment as Fragment3, jsx as jsx27 } from "react/jsx-runtime";
function JsonLd({ data, mode = "graph" }) {
  if (!data) return null;
  if (!Array.isArray(data)) {
    return /* @__PURE__ */ jsx27(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
      }
    );
  }
  if (mode === "separate") {
    return /* @__PURE__ */ jsx27(Fragment3, { children: data.map((item, index) => /* @__PURE__ */ jsx27(
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
  return /* @__PURE__ */ jsx27(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(graphData) }
    }
  );
}

// src/seo/faq-section.tsx
import { useState as useState12 } from "react";
import { jsx as jsx28, jsxs as jsxs23 } from "react/jsx-runtime";
function ChevronDownIcon({ className }) {
  return /* @__PURE__ */ jsx28("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx28("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) });
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
  const [isOpen, setIsOpen] = useState12(false);
  return /* @__PURE__ */ jsxs23(Card, { padding: "none", className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxs23(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between p-4 text-left hover:bg-[var(--background-elevated)] transition-colors",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ jsx28("span", { className: "font-medium text-[var(--foreground)] pr-4", children: faq.question }),
          /* @__PURE__ */ jsx28(
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
    /* @__PURE__ */ jsx28(
      "div",
      {
        className: cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        ),
        children: /* @__PURE__ */ jsx28("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx28("p", { className: "px-4 pb-4 text-[var(--foreground-muted)] text-sm leading-relaxed", children: faq.answer }) })
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
  return /* @__PURE__ */ jsxs23("section", { className, children: [
    includeSchema && /* @__PURE__ */ jsx28(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(generateFaqSchema(faqs)) }
      }
    ),
    title && /* @__PURE__ */ jsx28("h2", { className: "text-2xl font-bold mb-6", children: title }),
    /* @__PURE__ */ jsx28("div", { className: "space-y-3", children: faqs.map((faq, index) => /* @__PURE__ */ jsx28(FAQItemComponent, { faq }, index)) })
  ] });
}

// src/dashboard/dashboard-shell.tsx
import { jsx as jsx29, jsxs as jsxs24 } from "react/jsx-runtime";
function DashboardShell({
  sidebar,
  header,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs24("div", { className: cn("flex h-screen bg-[var(--background)]", className), children: [
    sidebar,
    /* @__PURE__ */ jsxs24("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
      header,
      /* @__PURE__ */ jsx29("main", { className: "flex-1 overflow-y-auto p-4 sm:p-6", children })
    ] })
  ] });
}

// src/dashboard/dashboard-sidebar.tsx
import { jsx as jsx30, jsxs as jsxs25 } from "react/jsx-runtime";
function DashboardSidebar({
  brand,
  children,
  footer,
  collapsed = false,
  className
}) {
  return /* @__PURE__ */ jsxs25("aside", { className: cn(
    "hidden flex-shrink-0 border-r border-[var(--border)] bg-[var(--background)] md:flex md:flex-col transition-all duration-200",
    collapsed ? "w-[72px]" : "w-64",
    className
  ), children: [
    /* @__PURE__ */ jsx30("div", { className: cn(
      "flex h-16 items-center border-b border-[var(--border)]",
      collapsed ? "justify-center px-2" : "px-5"
    ), children: brand }),
    /* @__PURE__ */ jsx30("nav", { className: cn(
      "flex-1 overflow-y-auto py-4",
      collapsed ? "px-2 space-y-1" : "px-3 space-y-1"
    ), children }),
    footer && /* @__PURE__ */ jsx30("div", { className: cn(
      "border-t border-[var(--border)]",
      collapsed ? "p-2" : "p-4"
    ), children: footer })
  ] });
}

// src/dashboard/dashboard-header.tsx
import { jsx as jsx31, jsxs as jsxs26 } from "react/jsx-runtime";
function MenuIcon({ className }) {
  return /* @__PURE__ */ jsx31("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx31("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }) });
}
function DashboardHeader({
  onMenuClick,
  title,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs26("header", { className: cn(
    "flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-6",
    className
  ), children: [
    /* @__PURE__ */ jsxs26("div", { className: "flex items-center gap-4", children: [
      onMenuClick && /* @__PURE__ */ jsx31(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "md:hidden",
          onClick: onMenuClick,
          "aria-label": "Open menu",
          children: /* @__PURE__ */ jsx31(MenuIcon, { className: "h-5 w-5" })
        }
      ),
      title && /* @__PURE__ */ jsx31("h1", { className: "text-lg font-semibold text-[var(--foreground)]", children: title })
    ] }),
    /* @__PURE__ */ jsx31("div", { className: "flex items-center gap-3", children })
  ] });
}

// src/dashboard/dashboard-nav.tsx
import Link4 from "next/link";
import { usePathname } from "next/navigation";
import { Fragment as Fragment4, jsx as jsx32, jsxs as jsxs27 } from "react/jsx-runtime";
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
  const pathname = usePathname();
  const isActive = active ?? (href === "/app" || href === "/" ? pathname === href : pathname.startsWith(href));
  const defaultActiveClass = "bg-[var(--accent)] text-[var(--background)]";
  const activeClass = activeClassName || defaultActiveClass;
  return /* @__PURE__ */ jsxs27(
    Link4,
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
        icon && /* @__PURE__ */ jsx32("span", { className: cn(
          "h-5 w-5 flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5 flex-shrink-0",
          isActive && !activeClassName ? "text-[var(--background)]" : isActive && activeClassName ? "" : "text-[var(--foreground-subtle)] group-hover:text-[var(--accent)]"
        ), children: icon }),
        !collapsed && /* @__PURE__ */ jsxs27(Fragment4, { children: [
          /* @__PURE__ */ jsx32("span", { className: "flex-1 truncate", children }),
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
  return /* @__PURE__ */ jsxs27("div", { className: cn("space-y-1", className), children: [
    label && !collapsed && /* @__PURE__ */ jsx32("p", { className: "px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground-subtle)]", children: label }),
    label && collapsed && /* @__PURE__ */ jsx32("div", { className: "mx-auto my-2 w-6 border-t border-[var(--border)]" }),
    children
  ] });
}

// src/dashboard/dashboard-user-menu.tsx
import { useState as useState13, useRef as useRef2, useEffect as useEffect7 } from "react";
import { jsx as jsx33, jsxs as jsxs28 } from "react/jsx-runtime";
function DashboardUserMenu({
  user,
  onSignOut,
  menuItems = [],
  className
}) {
  const [open, setOpen] = useState13(false);
  const ref = useRef2(null);
  useEffect7(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  useEffect7(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);
  const initials = user.name ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase() : user.email[0].toUpperCase();
  return /* @__PURE__ */ jsxs28("div", { ref, className: cn("relative", className), children: [
    /* @__PURE__ */ jsx33(
      Button,
      {
        variant: "ghost",
        onClick: () => setOpen(!open),
        className: "relative h-10 w-10 p-0",
        children: /* @__PURE__ */ jsx33("div", { className: "w-10 h-10 bg-[var(--background-elevated)] border border-[var(--border)] rounded-xl flex items-center justify-center hover:border-[var(--accent)] transition-colors", children: /* @__PURE__ */ jsx33("span", { className: "text-sm font-semibold text-[var(--accent)]", children: initials }) })
      }
    ),
    open && /* @__PURE__ */ jsxs28("div", { className: "absolute right-0 top-full mt-2 w-56 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-lg z-50", children: [
      /* @__PURE__ */ jsxs28("div", { className: "border-b border-[var(--border)] px-4 py-3", children: [
        /* @__PURE__ */ jsx33("p", { className: "text-sm font-medium text-[var(--foreground)]", children: user.name || "User" }),
        /* @__PURE__ */ jsx33("p", { className: "text-xs text-[var(--foreground-subtle)]", children: user.email })
      ] }),
      menuItems.length > 0 && /* @__PURE__ */ jsx33("div", { className: "py-1", children: menuItems.map((item) => /* @__PURE__ */ jsxs28(
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
            item.icon && /* @__PURE__ */ jsx33("span", { className: "h-4 w-4 flex items-center justify-center [&>svg]:h-4 [&>svg]:w-4", children: item.icon }),
            item.label
          ]
        },
        item.label
      )) }),
      /* @__PURE__ */ jsx33("div", { className: "border-t border-[var(--border)] py-1", children: /* @__PURE__ */ jsxs28(
        "button",
        {
          onClick: () => {
            onSignOut();
            setOpen(false);
          },
          className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--critical)] hover:bg-[var(--critical)]/10 transition-colors",
          children: [
            /* @__PURE__ */ jsx33("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx33("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" }) }),
            "Sign out"
          ]
        }
      ) })
    ] })
  ] });
}

// src/pages/not-found-content.tsx
import Link5 from "next/link";
import { jsx as jsx34, jsxs as jsxs29 } from "react/jsx-runtime";
function NotFoundContent({
  title = "Page not found",
  description = "The page you're looking for doesn't exist. Maybe it crawled away, or maybe it was never here.",
  illustration,
  primaryAction,
  secondaryAction,
  className
}) {
  return /* @__PURE__ */ jsx34("div", { className: cn("flex flex-col items-center justify-center px-6 py-24", className), children: /* @__PURE__ */ jsxs29("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx34("div", { className: "flex justify-center mb-8", children: illustration }),
    /* @__PURE__ */ jsx34("h1", { className: "text-4xl font-bold mb-4", children: title }),
    /* @__PURE__ */ jsx34("p", { className: "text-[var(--foreground-muted)] mb-8", children: description }),
    /* @__PURE__ */ jsxs29("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsx34(Link5, { href: primaryAction.href, children: /* @__PURE__ */ jsx34(Button, { variant: "primary", size: "lg", children: primaryAction.label }) }),
      secondaryAction && /* @__PURE__ */ jsx34(Link5, { href: secondaryAction.href, children: /* @__PURE__ */ jsx34(Button, { variant: "secondary", size: "lg", children: secondaryAction.label }) })
    ] })
  ] }) });
}

// src/pages/error-content.tsx
import Link6 from "next/link";
import { jsx as jsx35, jsxs as jsxs30 } from "react/jsx-runtime";
function ErrorContent({
  title = "Something went wrong",
  description = "An unexpected error occurred. Try again, or head back home if the problem persists.",
  illustration,
  onReset,
  primaryAction,
  className
}) {
  return /* @__PURE__ */ jsx35("div", { className: cn("flex flex-col items-center justify-center px-6 py-24", className), children: /* @__PURE__ */ jsxs30("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx35("div", { className: "flex justify-center mb-8", children: illustration }),
    /* @__PURE__ */ jsx35("h1", { className: "text-4xl font-bold mb-4", children: title }),
    /* @__PURE__ */ jsx35("p", { className: "text-[var(--foreground-muted)] mb-8", children: description }),
    /* @__PURE__ */ jsxs30("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsx35(Button, { variant: "primary", size: "lg", onClick: onReset, children: "Try again" }),
      primaryAction && /* @__PURE__ */ jsx35(Link6, { href: primaryAction.href, children: /* @__PURE__ */ jsx35(Button, { variant: "secondary", size: "lg", children: primaryAction.label }) })
    ] })
  ] }) });
}

// src/pages/loading-content.tsx
import { jsx as jsx36, jsxs as jsxs31 } from "react/jsx-runtime";
function LoadingContent({
  illustration,
  message,
  className
}) {
  return /* @__PURE__ */ jsxs31("div", { className: cn("flex flex-col items-center justify-center min-h-[60vh] px-6", className), children: [
    /* @__PURE__ */ jsx36("div", { className: "flex justify-center mb-4", children: illustration }),
    message && /* @__PURE__ */ jsx36("p", { className: "text-sm text-[var(--foreground-muted)]", children: message })
  ] });
}
export {
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
};
//# sourceMappingURL=index.mjs.map
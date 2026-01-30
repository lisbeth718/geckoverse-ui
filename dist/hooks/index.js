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

// src/hooks/index.ts
var hooks_exports = {};
__export(hooks_exports, {
  useClickOutside: () => useClickOutside,
  useCopyToClipboard: () => useCopyToClipboard,
  useDebounce: () => useDebounce,
  useDebouncedCallback: () => useDebouncedCallback,
  useIsDesktop: () => useIsDesktop,
  useIsMobile: () => useIsMobile,
  useIsTablet: () => useIsTablet,
  useKonamiCode: () => useKonamiCode,
  useLocalStorage: () => useLocalStorage,
  useMediaQuery: () => useMediaQuery,
  usePrevious: () => usePrevious,
  useToggle: () => useToggle
});
module.exports = __toCommonJS(hooks_exports);
var import_react = require("react");
function useMediaQuery(query) {
  const [matches, setMatches] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handler = (e) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);
  return matches;
}
function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}
function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}
function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = (0, import_react.useState)(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });
  const setValue = (0, import_react.useCallback)((value) => {
    setStoredValue((prev) => {
      const newValue = value instanceof Function ? value(prev) : value;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      }
      return newValue;
    });
  }, [key]);
  return [storedValue, setValue];
}
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(value);
  (0, import_react.useEffect)(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}
function useDebouncedCallback(callback, delay) {
  const timeoutRef = (0, import_react.useRef)(null);
  const debouncedCallback = (0, import_react.useCallback)((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
  (0, import_react.useEffect)(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return debouncedCallback;
}
function useClickOutside(handler) {
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]);
  return ref;
}
function useCopyToClipboard() {
  const [copied, setCopied] = (0, import_react.useState)(false);
  const copy = (0, import_react.useCallback)(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopied(false);
    }
  }, []);
  return [copied, copy];
}
function useToggle(initialValue = false) {
  const [value, setValue] = (0, import_react.useState)(initialValue);
  const toggle = (0, import_react.useCallback)(() => setValue((v) => !v), []);
  return [value, toggle, setValue];
}
function usePrevious(value) {
  const ref = (0, import_react.useRef)(void 0);
  (0, import_react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
var KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA"
];
function useKonamiCode(callback) {
  const [sequence, setSequence] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...sequence, e.code].slice(-KONAMI_CODE.length);
      setSequence(newSequence);
      if (newSequence.join(",") === KONAMI_CODE.join(",")) {
        callback();
        setSequence([]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sequence, callback]);
  (0, import_react.useEffect)(() => {
    if (sequence.length === 0) return;
    const timer = setTimeout(() => setSequence([]), 3e3);
    return () => clearTimeout(timer);
  }, [sequence]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useClickOutside,
  useCopyToClipboard,
  useDebounce,
  useDebouncedCallback,
  useIsDesktop,
  useIsMobile,
  useIsTablet,
  useKonamiCode,
  useLocalStorage,
  useMediaQuery,
  usePrevious,
  useToggle
});
//# sourceMappingURL=index.js.map
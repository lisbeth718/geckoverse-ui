declare function useMediaQuery(query: string): boolean;
declare function useIsMobile(): boolean;
declare function useIsTablet(): boolean;
declare function useIsDesktop(): boolean;
declare function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void];
declare function useDebounce<T>(value: T, delay: number): T;
declare function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(callback: T, delay: number): T;
declare function useClickOutside<T extends HTMLElement>(handler: () => void): React.RefObject<T | null>;
declare function useCopyToClipboard(): [boolean, (text: string) => Promise<void>];
declare function useToggle(initialValue?: boolean): [boolean, () => void, (value: boolean) => void];
declare function usePrevious<T>(value: T): T | undefined;
declare function useKonamiCode(callback: () => void): void;

export { useClickOutside, useCopyToClipboard, useDebounce, useDebouncedCallback, useIsDesktop, useIsMobile, useIsTablet, useKonamiCode, useLocalStorage, useMediaQuery, usePrevious, useToggle };

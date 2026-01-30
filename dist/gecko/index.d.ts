import * as react_jsx_runtime from 'react/jsx-runtime';

type SizeClass = "sm" | "md" | "lg" | "xl";
declare function PixelGeckoFace({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoLoading({ className, size }: {
    className?: string;
    size?: SizeClass;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoWatcher({ className, size }: {
    className?: string;
    size?: SizeClass;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoCelebrate({ className, size, celebrating }: {
    className?: string;
    size?: SizeClass;
    celebrating?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoClimbing({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoAngry({ className, size }: {
    className?: string;
    size?: SizeClass;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoSleeping({ className, size }: {
    className?: string;
    size?: SizeClass;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoThinking({ className, size }: {
    className?: string;
    size?: SizeClass;
}): react_jsx_runtime.JSX.Element;
declare function GeckoScrollBuddy(): react_jsx_runtime.JSX.Element | null;
declare function PixelGeckoTongue({ className, size, lickOnHover }: {
    className?: string;
    size?: SizeClass;
    lickOnHover?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoSuccess({ className, size }: {
    className?: string;
    size?: SizeClass;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoError({ className, size }: {
    className?: string;
    size?: SizeClass;
}): react_jsx_runtime.JSX.Element;
declare function PixelGecko404({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoWaving({ className, size }: {
    className?: string;
    size?: SizeClass;
}): react_jsx_runtime.JSX.Element;
declare function PixelGeckoParty({ className, onClose }: {
    className?: string;
    onClose?: () => void;
}): react_jsx_runtime.JSX.Element;
declare function GeckoCursorTrail(): react_jsx_runtime.JSX.Element;
declare function PixelGeckoLarge({ className, variant }: {
    className?: string;
    variant?: "static" | "watcher";
}): react_jsx_runtime.JSX.Element;
declare const PixelGeckoStatic: typeof PixelGeckoFace;
declare const PixelGecko: typeof PixelGeckoLoading;

declare function getRandomGeckoFact(): string;
declare function GeckoLoadingWithFact({ className, size }: {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
}): react_jsx_runtime.JSX.Element;
declare const PixelGeckoLoadingWithFact: typeof GeckoLoadingWithFact;

export { GeckoCursorTrail, GeckoLoadingWithFact, GeckoScrollBuddy, PixelGecko, PixelGecko404, PixelGeckoAngry, PixelGeckoCelebrate, PixelGeckoClimbing, PixelGeckoError, PixelGeckoFace, PixelGeckoLarge, PixelGeckoLoading, PixelGeckoLoadingWithFact, PixelGeckoParty, PixelGeckoSleeping, PixelGeckoStatic, PixelGeckoSuccess, PixelGeckoThinking, PixelGeckoTongue, PixelGeckoWatcher, PixelGeckoWaving, getRandomGeckoFact };

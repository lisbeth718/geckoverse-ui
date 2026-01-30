# @geckoverse/ui

Shared UI components for the Geckoverse: Golden Gecko, Silver Gecko, TeknoGecko.

## Installation

```bash
npm install @geckoverse/ui
```

Or use npm link for local development:

```bash
# In geckoverse-ui directory
npm link

# In your project (goldengecko, silvergecko, etc.)
npm link @geckoverse/ui
```

## Usage

### Gecko Components

```tsx
import {
  PixelGeckoFace,
  PixelGeckoLoading,
  PixelGeckoWatcher,
  PixelGeckoCelebrate,
  PixelGeckoClimbing,
  PixelGeckoAngry,
  PixelGeckoSleeping,
  PixelGeckoThinking,
  GeckoScrollBuddy,
  GeckoLoadingWithFact,
} from "@geckoverse/ui"

// Or import just gecko components
import { PixelGeckoFace } from "@geckoverse/ui/gecko"
```

### UI Components

```tsx
import { Button, Card, Input, Badge, Label } from "@geckoverse/ui"

// Toast notifications
import { ToastProvider, useToast } from "@geckoverse/ui"

// Tabs
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@geckoverse/ui"

// Dialog/Modal
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter, ConfirmDialog } from "@geckoverse/ui"

// Loading skeletons
import { Skeleton, SkeletonText, SkeletonCard, SkeletonAvatar } from "@geckoverse/ui"

// Progress bars
import { Progress, CircularProgress } from "@geckoverse/ui"
```

### Hooks

```tsx
import {
  useMediaQuery,
  useIsMobile,
  useIsDesktop,
  useLocalStorage,
  useDebounce,
  useDebouncedCallback,
  useClickOutside,
  useCopyToClipboard,
  useToggle,
  usePrevious,
  useKonamiCode,
} from "@geckoverse/ui/hooks"
```

### Auth Components

```tsx
import { SignupForm, LoginForm, AuthLayout } from "@geckoverse/ui/auth"

function MySignupPage() {
  return (
    <AuthLayout
      brandNameSplit={["Golden", "Gecko"]}
      tagline="Always know what to test next"
      features={[
        "Proven playbooks from real companies",
        "AI matches experiments to your goals",
      ]}
    >
      <SignupForm
        onSubmit={async ({ email, password }) => {
          // Your signup logic
        }}
        header={<h1>Create account</h1>}
        footer={<p>Already have an account? Sign in</p>}
      />
    </AuthLayout>
  )
}
```

## Theming

Components use CSS variables for theming. Set these in your app's CSS:

```css
:root {
  /* Core colors */
  --background: #0c0c0e;
  --background-elevated: #141418;
  --background-subtle: #1a1a1f;
  --foreground: #f8f8fa;
  --foreground-muted: #a0a0b0;
  --foreground-subtle: #70708a;
  --accent: #D4A84B;  /* Gold for Golden Gecko */
  --border: rgba(255, 255, 255, 0.06);

  /* Semantic colors */
  --success: #2ed573;
  --success-bg: rgba(46, 213, 115, 0.1);
  --critical: #ff4757;
  --critical-bg: rgba(255, 71, 87, 0.1);
  --warning: #ffa502;
  --warning-bg: rgba(255, 165, 2, 0.1);
  --info: #70a1ff;
  --info-bg: rgba(112, 161, 255, 0.1);

  /* Gecko colors (optional - defaults to Golden Gecko theme) */
  --gecko-primary: #D4A84B;
  --gecko-secondary: #C9A046;
  --gecko-tertiary: #B8943F;
  --gecko-dark: #8B7355;
  --gecko-eye-outer: #1a1a1a;
  --gecko-eye-inner: #8B0000;
  --gecko-eye-mid: #FF4500;
  --gecko-eye-center: #FFD700;
  --gecko-teeth: #F5F5DC;
  --gecko-nostril: #6B5A45;
}
```

### Silver Gecko Theme Example

```css
:root {
  --accent: #00d4ff;
  --gecko-primary: #8888a0;
  --gecko-secondary: #7070888;
  --gecko-tertiary: #5a5a6e;
  --gecko-eye-center: #00d4ff;
}
```

## Components

### Gecko Components

| Component | Description |
|-----------|-------------|
| `PixelGeckoFace` | Static gecko face for logos |
| `PixelGeckoLoading` | Chomping animation for loading |
| `PixelGeckoWatcher` | Eyes follow cursor |
| `PixelGeckoCelebrate` | Bouncing celebration |
| `PixelGeckoClimbing` | Full body climbing gecko |
| `PixelGeckoAngry` | For error states |
| `PixelGeckoSleeping` | For empty states |
| `PixelGeckoThinking` | For AI processing |
| `PixelGeckoTongue` | Licks on hover |
| `PixelGeckoSuccess` | Cool gecko with sunglasses |
| `PixelGeckoError` | X-eyed confused gecko |
| `PixelGecko404` | Fat gecko that ate the page |
| `PixelGeckoWaving` | Friendly wave animation |
| `PixelGeckoLarge` | Box with eye-tracking gecko |
| `PixelGeckoParty` | Multiple dancing geckos (easter egg) |
| `GeckoCursorTrail` | Footprints following cursor |
| `GeckoScrollBuddy` | Climbs page edge on scroll |
| `GeckoLoadingWithFact` | Loading with random gecko facts |

### UI Components

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, danger variants |
| `Card` | Container with header, content, footer |
| `Input` | Text input field |
| `Badge` | Status and label badges |
| `Label` | Form labels |
| `ToastProvider` | Context provider for toast notifications |
| `useToast` | Hook to trigger toasts (success, error, warning, info) |
| `Tabs` | Tabbed interface container |
| `TabsList` | Tab button container |
| `TabsTrigger` | Individual tab button |
| `TabsContent` | Tab content panel |
| `Dialog` | Modal dialog container |
| `ConfirmDialog` | Pre-built confirm/cancel modal |
| `Skeleton` | Loading placeholder |
| `SkeletonText` | Multi-line text placeholder |
| `SkeletonCard` | Card-shaped placeholder |
| `Progress` | Linear progress bar |
| `CircularProgress` | Circular progress indicator |

### Hooks

| Hook | Description |
|------|-------------|
| `useMediaQuery` | Responsive breakpoint detection |
| `useIsMobile` | Check if mobile viewport |
| `useIsDesktop` | Check if desktop viewport |
| `useLocalStorage` | Persistent state in localStorage |
| `useDebounce` | Debounced value |
| `useDebouncedCallback` | Debounced function |
| `useClickOutside` | Detect clicks outside element |
| `useCopyToClipboard` | Copy text to clipboard |
| `useToggle` | Boolean toggle state |
| `usePrevious` | Get previous value |
| `useKonamiCode` | Easter egg detection |

### Auth Components

| Component | Description |
|-----------|-------------|
| `SignupForm` | Complete signup form with password generator |
| `LoginForm` | Login form with show/hide password |
| `AuthLayout` | Two-panel layout for auth pages |
| `generatePassword` | Generate strong passwords |
| `getPasswordStrength` | Check password strength |

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev
```

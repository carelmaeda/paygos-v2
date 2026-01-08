# Paygos V2

Modern web application for Paygos built with Next.js 16, React 19, and Tailwind CSS v4.

## Overview

Paygos V2 is a complete redesign of the Paygos platform, featuring a modern tech stack with cutting-edge frameworks and libraries. The application provides optimized ordering, analytics, billing, payment processing, and customer management solutions.

## Tech Stack

### Core Framework

- **Next.js 16.1.1** - React framework with App Router and Turbopack
- **React 19.2.3** - Latest React with enhanced performance
- **TypeScript 5.x** - Type-safe development

### Styling & UI

- **Tailwind CSS v4** - Utility-first CSS framework with native CSS support
- **SCSS/SASS 1.97.2** - Enhanced CSS with variables, nesting, and mixins
- **shadcn/ui** - Accessible component library (New York style)
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React 0.562.0** - Beautiful icon library
- **Class Variance Authority** - Type-safe component variants

### Development Tools

- **Prettier 3.7.4** - Code formatting with Tailwind plugin
- **ESLint 9.x** - Code linting with Next.js config
- **tw-animate-css** - Additional Tailwind animations

## Project Structure

```
paygos-v2/
├── public/                      # Static assets
│   ├── paygos/                 # Paygos brand assets
│   │   ├── logo-full-*.webp   # Logo variations
│   │   └── wheel-full-*.webp  # Wheel icon variations
│   └── logos/                  # Client logos (for carousel)
├── src/
│   ├── app/
│   │   ├── _components/
│   │   │   └── partials/      # Reusable UI components
│   │   │       ├── Navbar.tsx
│   │   │       ├── Hero.tsx
│   │   │       ├── CustomersLogosCarousel.tsx
│   │   │       └── BookCallButton.tsx
│   │   ├── globals.scss        # Global styles and animations
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   └── ui/                 # shadcn/ui components
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── navigation-menu.tsx
│   │       └── sheet.tsx
│   └── lib/
│       └── utils.ts            # Utility functions (cn, etc.)
├── .claude/                     # Claude Code configuration
├── .vscode/                     # VSCode settings
├── components.json              # shadcn/ui config
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## Features

### Current Implementation

#### 1. Navigation System

- **Desktop Navigation**: Dropdown menu with NavigationMenu component
- **Mobile Navigation**: Sheet drawer with collapsible accordion
- **Icons**: Lucide React icons for visual clarity
- **Solutions Menu Items**:
  - Optimized Ordering (ShoppingCart icon)
  - Advanced Analytics (BarChart3 icon)
  - Flexible Billing (Receipt icon)
  - Cross Border Payments (ArrowLeftRight icon)
  - Payment Processing (CreditCard icon)
  - Customer Management (UserCog icon)

#### 2. Hero Section

- Responsive layout with compelling headline
- Call-to-action buttons with mobile optimization
- Hero image integration
- Dark background with teal accent colors

#### 3. CustomersLogosCarousel Component

- **Infinite horizontal scroll animation** (30s loop)
- **Logo sources**: Brandfetch CDN OR local files from `public/logos/`
- **Visual effects**: Grayscale by default, color on hover
- **Responsive sizing**: 48px (mobile) to 64px (desktop)
- **Accessibility**: Pause on hover, respects `prefers-reduced-motion`
- **Seamless loop**: Duplicate logo sets for continuous scrolling

#### 4. Responsive Design

- **Mobile-first approach** with breakpoint at 768px
- **Button optimization**: Full-width on mobile with 44px min-height (iOS touch target)
- **Typography**: Inter (body/subheadings), Urbanist (headings)
- **Dark mode support** via CSS custom properties

### Styling System

#### SCSS Variables

```scss
// Colors - Light Mode
$background-light: #ffffff;
$foreground-light: #171717;

// Colors - Dark Mode
$background-dark: #0a0a0a;
$foreground-dark: #ededed;

// UI Components
$primary-dark: #1d1d1d;
$primary-hover: #27272a;
$secondary-border: #e4e4e7;
$secondary-hover: #f4f4f5;

// Hero Section
$accent-blue: #3b82f6;
$text-gray: #6b7280;
```

#### Custom Animations

- **Carousel scroll**: Infinite horizontal scroll with `translateX`
- **Pause on hover**: `animation-play-state: paused`
- **Accessibility**: Respects `prefers-reduced-motion`

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd paygos-v2
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## Configuration

### Next.js Configuration

- **Image optimization**: Brandfetch CDN whitelisted for remote images
- **Turbopack**: Enabled for faster development builds

### Tailwind CSS v4

- Uses new `@import "tailwindcss"` syntax
- Custom theme extensions via `@theme inline` directive
- CSS custom properties for runtime theming
- PostCSS plugin: `@tailwindcss/postcss`

### shadcn/ui Configuration

- **Style**: New York variant
- **Base color**: Neutral
- **CSS Variables**: Enabled
- **RSC**: React Server Components enabled
- **Aliases**: `@/components`, `@/lib/utils`, `@/hooks`

### VSCode Settings

- **Auto-format on save** with Prettier
- **ESLint auto-fix** on save
- **SCSS unknown at-rules**: Ignored (for Tailwind v4 `@theme`)

## Image Assets

### Brandfetch Integration

Client logos can be fetched from Brandfetch CDN:

```typescript
// Format: https://cdn.brandfetch.io/[domain]/fallback/transparent/h/[height]
logoUrl: "https://cdn.brandfetch.io/coca-cola.com/fallback/transparent/h/60"
```

### Local Logo Storage

Place client logos in `public/logos/` directory:

```typescript
logoUrl: "/logos/client-name.svg"
```

Supported formats: SVG, PNG, JPG

## Component Usage

### CustomersLogosCarousel

```tsx
import { CustomersLogosCarousel } from "@/app/_components/partials/CustomersLogosCarousel"

export default function Page() {
  return <CustomersLogosCarousel />
}
```

### Navbar

```tsx
import { Navbar } from "@/app/_components/partials/Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
```

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, landmarks, and ARIA labels
- **Keyboard navigation**: Full keyboard support for all interactive elements
- **Screen reader support**: Descriptive alt text and ARIA attributes
- **Motion preferences**: Respects `prefers-reduced-motion` for animations
- **Color contrast**: WCAG AA compliant color combinations
- **Touch targets**: Minimum 44px height on mobile (iOS guidelines)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android 10+)

## Performance Optimizations

- **Next.js Image**: Automatic image optimization and lazy loading
- **GPU-accelerated animations**: Using `transform` instead of `left`/`margin`
- **Code splitting**: Automatic with Next.js App Router
- **Font optimization**: Google Fonts with `next/font`
- **Turbopack**: Faster development builds
- **CSS-only animations**: No JavaScript overhead for carousel

## Future Enhancements

- [ ] Complete all solution pages (Ordering, Analytics, etc.)
- [ ] Add case studies and testimonials
- [ ] Implement contact form with validation
- [ ] Add more interactive components
- [ ] Implement search functionality
- [ ] Add blog/resources section
- [ ] Integrate analytics (Google Analytics, Mixpanel, etc.)
- [ ] Add E2E testing with Playwright
- [ ] Implement internationalization (i18n)
- [ ] Add dark mode toggle

## Contributing

1. Create a feature branch from `master`
2. Make your changes following the existing code style
3. Run `npm run format` to format code
4. Run `npm run lint` to check for errors
5. Commit with descriptive messages
6. Push and create a pull request

## License

Private - All rights reserved

## Contact

For questions or support, please contact the Paygos development team.

---

**Last Updated**: 2026-01-07
**Version**: 0.1.0
**Built with**: Next.js 16 + React 19 + Tailwind CSS v4

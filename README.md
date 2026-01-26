# Paygos V2

Modern marketing website for Paygos built with Next.js 16, React 19, and Tailwind CSS v4.

## Overview

Paygos V2 is a complete redesign of the Paygos marketing platform, featuring a modern tech stack with cutting-edge frameworks and libraries. The application showcases sales automation solutions including ordering, rebates management, training, returns, payments, marketing, and field sales automation.

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
- **Swiper 11.1.15** - Touch-enabled slider for customer stories

## Project Structure

```
paygos-v2/
├── public/                      # Static assets
│   ├── paygos/                  # Paygos brand assets
│   │   ├── logo-full-*.webp    # Logo variations
│   │   └── wheel-full-*.webp   # Wheel icon variations
│   ├── solutions/               # Solution page images
│   └── customers/               # Customer logos
│       └── logos/
├── src/
│   ├── app/
│   │   ├── _components/
│   │   │   ├── layout/          # Layout components
│   │   │   │   ├── Navbar/      # Navigation (Desktop + Mobile)
│   │   │   │   └── Footer/      # Site footer
│   │   │   ├── sections/        # Page sections
│   │   │   │   ├── hero/
│   │   │   │   ├── solutions/
│   │   │   │   ├── customers/   # Customer stories
│   │   │   │   ├── cta/
│   │   │   │   └── roi/
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── about/               # About Us page
│   │   │   └── page.tsx
│   │   ├── customers/           # Customer stories pages
│   │   │   ├── page.tsx         # Stories listing
│   │   │   ├── retail-time-saved/
│   │   │   ├── manufacturing-efficiency/
│   │   │   ├── finance-automation/
│   │   │   ├── healthcare-compliance/
│   │   │   ├── food-beverage-growth/
│   │   │   └── technology-scale/
│   │   ├── roi/                 # ROI Calculator page
│   │   │   └── page.tsx
│   │   ├── solutions/           # Solution pages
│   │   │   ├── data/            # Solutions metadata
│   │   │   │   └── solutions.ts
│   │   │   ├── ordering/
│   │   │   ├── rebates/
│   │   │   ├── training/
│   │   │   ├── returns/
│   │   │   ├── payments/
│   │   │   ├── marketing/
│   │   │   └── fsa/
│   │   ├── globals.scss         # Global styles and animations
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   └── lib/
│       └── utils.ts             # Utility functions (cn, etc.)
├── .claude/                      # Claude Code configuration
├── .vscode/                      # VSCode settings
├── components.json               # shadcn/ui config
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

## Pages

### Marketing Pages

1. **Homepage** (`/`)
   - Hero section with call-to-action
   - Solutions overview grid
   - Field Sales Automation section
   - Data Analytics section
   - Customer stories carousel
   - CTA section with booking button

2. **About Us** (`/about`)
   - Company story
   - Core values (Innovation, Customer Focus, Simplicity, Integrity)
   - Team information
   - CTA section

3. **Customers** (`/customers`)
   - Customer stories carousel
   - 6 detailed customer success stories

4. **ROI Calculator** (`/roi`)
   - Interactive calculator for sales automation ROI

### Solution Pages

Each solution has its own dedicated page with customizable HTML/Tailwind content:

1. **Optimized Ordering** (`/solutions/ordering`) - Full content with features, benefits, how-it-works
2. **Rebates** (`/solutions/rebates`) - Full content with custom indigo theme
3. **Training Management** (`/solutions/training`) - Basic template
4. **Returns Management** (`/solutions/returns`) - Basic template
5. **Payments** (`/solutions/payments`) - Basic template
6. **Marketing** (`/solutions/marketing`) - Basic template
7. **Field Sales Automation** (`/solutions/fsa`) - Basic template

### Customer Story Pages

6 individual customer success stories, each with:
- Hero image with company logo overlay
- Industry/category tags
- Story content area (customizable HTML)

1. **Retail Corp** (`/customers/retail-time-saved`) - 19% YoY Sales Increase
2. **ManuTech Industries** (`/customers/manufacturing-efficiency`) - 50% reduction in processing time
3. **FinanceFirst** (`/customers/finance-automation`) - 15 hours weekly savings
4. **HealthPro Solutions** (`/customers/healthcare-compliance`) - 100% compliance tracking
5. **TastyBites Distribution** (`/customers/food-beverage-growth`) - 30% increase in accuracy
6. **TechFlow Systems** (`/customers/technology-scale`) - 200% operations scale

## Features

### Navigation System

#### Desktop Navigation
- **Dropdown menu** with NavigationMenu component (Radix UI)
- **Solutions menu** with 7 solution pages
- **Main links**: Customers, ROI Calculator, About Us
- **CTA button**: Book a Call

#### Mobile Navigation
- **Sheet drawer** with collapsible accordion
- **Solutions submenu** with icons
- **Full-width touch targets** (44px minimum)
- **Responsive design** for all mobile devices

### Component Architecture

All components follow a feature-based organization:

- **`layout/`** - Navbar, Footer
- **`sections/`** - Homepage sections (Hero, Solutions, Customers, CTA, etc.)
- **`ui/`** - Reusable shadcn/ui components
- **`data/`** - Static data for solutions and customer stories

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

// Hero & Accent Colors
$accent-teal: #3b82f6;
$text-gray: #6b7280;
```

#### Typography

- **Headings**: Urbanist (bold, tight letter-spacing)
- **Body/UI**: Inter (clean, readable)
- **Responsive scale**: Mobile to desktop typography

#### Custom Animations

```scss
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
}

.animate-pause:hover {
  animation-play-state: paused;
}
```

### Responsive Design

- **Mobile-first approach** with `md:` breakpoint at 768px
- **Full-width buttons** on mobile with 44px min-height
- **Touch-optimized** spacing and targets
- **Fluid typography** with clamp() for headings

## Content Management

### Solutions

Each solution page is **hard-coded HTML/JSX** for maximum flexibility. To customize:

1. Navigate to `/src/app/solutions/{solution-slug}/page.tsx`
2. Edit the HTML/Tailwind markup directly
3. Change colors, layout, sections, or add new content

**Example**: Rebates page uses indigo theme (`bg-indigo-100`, `text-indigo-700`) instead of default teal.

### Customer Stories

Each customer story is an **individual page** with:
- Background image (same as card thumbnail)
- Company logo overlay
- Title and tags
- Customizable content area

To edit: Navigate to `/src/app/customers/{story-slug}/page.tsx`

### Shared Data

**Solutions metadata** (`src/app/solutions/data/solutions.ts`):
- Used by homepage SolutionsSection
- Used by navbar SolutionsMenu
- Single source of truth for solution links

**Customer stories** (`src/app/_components/sections/customers/data/customer-stories.ts`):
- Used by CustomerStoriesCarousel
- Links to individual customer pages

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

- **Image optimization**: External images from Unsplash, Brandfetch CDN
- **Turbopack**: Enabled for faster development builds
- **Static generation**: All pages pre-rendered at build time

### Tailwind CSS v4

- Uses new `@import "tailwindcss"` syntax in `globals.scss`
- Custom theme via `@theme inline` directive
- CSS custom properties for runtime theming
- PostCSS plugin: `@tailwindcss/postcss`

### shadcn/ui Configuration

- **Style**: New York variant
- **Base color**: Neutral
- **CSS Variables**: Enabled
- **RSC**: React Server Components enabled
- **Aliases**: `@/components`, `@/lib/utils`

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, landmarks, ARIA labels
- **Keyboard navigation**: Full keyboard support for interactive elements
- **Screen reader support**: Descriptive alt text and ARIA attributes
- **Motion preferences**: Respects `prefers-reduced-motion`
- **Color contrast**: WCAG AA compliant
- **Touch targets**: Minimum 44px height on mobile

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android 10+)

## Performance Optimizations

- **Next.js Image**: Automatic optimization and lazy loading
- **GPU-accelerated animations**: Using `transform` instead of `left`/`margin`
- **Code splitting**: Automatic with App Router
- **Font optimization**: Google Fonts with `next/font`
- **Turbopack**: 700ms faster than Webpack
- **CSS-only animations**: No JavaScript overhead

## Development Guidelines

### Adding a New Solution Page

1. Create folder: `src/app/solutions/{slug}/`
2. Create `page.tsx` with your custom HTML
3. Add solution to `src/app/solutions/data/solutions.ts`
4. Solution automatically appears in navbar and homepage

### Adding a New Customer Story

1. Create folder: `src/app/customers/{slug}/`
2. Create `page.tsx` with story content
3. Add story to `src/app/_components/sections/customers/data/customer-stories.ts`
4. Story automatically appears in carousel

### Styling Guidelines

- Use Tailwind utility classes for all styling
- Follow existing color scheme (teal accent, neutral base)
- Maintain responsive design patterns
- Keep accessibility in mind (color contrast, touch targets)

## Contributing

1. Create a feature branch from `test`
2. Make changes following existing code style
3. Run `npm run format` to format code
4. Run `npm run lint` to check for errors
5. Commit with descriptive messages
6. Push and create a pull request

## License

Private - All rights reserved

## Contact

For questions or support, please contact the Paygos development team.

---

**Last Updated**: 2026-01-09
**Version**: 0.2.0
**Built with**: Next.js 16 + React 19 + Tailwind CSS v4

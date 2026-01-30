# Paygos V2

Modern marketing website for Paygos built with Next.js 16, React 19, and Tailwind CSS v4.

## Overview

Paygos V2 is a complete redesign of the Paygos marketing platform, featuring a modern tech stack with cutting-edge frameworks and libraries. The application showcases sales acceleration solutions including ordering, rebates management, training, returns, payments, marketing, and field sales automation with interactive data visualizations.

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

### Animation & Visualization

- **Framer Motion 11.15.0** - Production-ready motion library for React
- **Recharts 2.15.4** - Composable charting library for data visualizations
- **Embla Carousel 8.6.0** - Lightweight carousel library

### Integrations

- **EmailJS 4.4.1** - Client-side email sending for forms
- **Sonner 2.0.7** - Toast notifications

### Development Tools

- **Prettier 3.7.4** - Code formatting with Tailwind plugin
- **ESLint 9.x** - Code linting with Next.js config

## Project Structure

```
paygos-v2/
├── public/
│   ├── paygos/                  # Brand assets (logos, wheel icons)
│   ├── icons/                   # Paygos icon variations
│   ├── solutions/               # Solution page images
│   ├── analytics/               # Analytics feature icons
│   └── customers/               # Customer logos (Haleon, Mars, Nestlé, etc.)
├── src/
│   ├── app/
│   │   ├── about/               # About Us page
│   │   ├── analytics/           # Data Analytics page
│   │   ├── contact/             # Contact form page
│   │   ├── customers/           # Customer stories
│   │   │   ├── page.tsx         # Stories listing
│   │   │   ├── pharma-returns/
│   │   │   ├── rebate-management/
│   │   │   ├── retail-efficiency/
│   │   │   ├── returns-management/
│   │   │   ├── training-incentives/
│   │   │   └── vet-growth/
│   │   ├── fsa/                 # Field Sales Automation page
│   │   ├── roi/                 # ROI Calculator page
│   │   ├── sales-acceleration/  # Sales Acceleration tools
│   │   │   ├── page.tsx         # Tools overview
│   │   │   ├── data/tools.ts    # Tools metadata
│   │   │   ├── marketing/
│   │   │   ├── ordering/
│   │   │   ├── payments/
│   │   │   ├── rebates/
│   │   │   ├── returns/
│   │   │   └── training/
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   ├── components/
│   │   ├── layout/              # Layout components
│   │   │   ├── Navbar/          # Navigation (Desktop + Mobile)
│   │   │   ├── Footer/          # Site footer
│   │   │   └── Breadcrumbs.tsx
│   │   ├── motion/              # Framer Motion components
│   │   │   ├── MotionProvider.tsx
│   │   │   ├── MotionSection.tsx
│   │   │   └── MotionList.tsx
│   │   ├── roi/                 # ROI Calculator components
│   │   │   ├── RoiCalculator.tsx
│   │   │   ├── InputForm.tsx
│   │   │   ├── ResultsPanel.tsx
│   │   │   ├── ResultsModal.tsx
│   │   │   ├── LeadCaptureModal.tsx
│   │   │   └── roiFormulas.ts
│   │   ├── sections/            # Page sections
│   │   │   ├── contact/         # Contact form
│   │   │   ├── cta/             # Call-to-action sections
│   │   │   ├── customers/       # Customer stories & logos
│   │   │   └── solutions/       # Solutions display
│   │   └── ui/                  # shadcn/ui components
│   │       └── patterns/        # SVG background patterns
│   ├── hooks/                   # Custom React hooks
│   ├── lib/
│   │   ├── utils.ts             # Utility functions
│   │   └── motion/              # Motion variants & types
│   └── styles/
│       └── _variables.scss      # SCSS variables
├── components.json              # shadcn/ui config
├── next.config.ts               # Next.js configuration
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
   - Customer logos carousel
   - CTA section with booking button

2. **About Us** (`/about`)
   - Company story
   - Core values
   - Team information
   - CTA section

3. **Contact** (`/contact`)
   - Contact form with EmailJS integration
   - Toast notifications for form submission

4. **Customers** (`/customers`)
   - Customer stories carousel
   - 6 detailed customer success stories

5. **ROI Calculator** (`/roi`)
   - Interactive multi-step calculator
   - Lead capture modal
   - Results visualization with charts

6. **Data Analytics** (`/analytics`)
   - Analytics metrics visualization
   - Interactive charts

7. **Field Sales Automation** (`/fsa`)
   - FSA coverage chart
   - Feature highlights

### Sales Acceleration Pages

Main landing page (`/sales-acceleration`) with 6 individual tool pages:

1. **Optimized Ordering** (`/sales-acceleration/ordering`) - Order management with volume charts
2. **Rebates** (`/sales-acceleration/rebates`) - Rebate automation with performance charts
3. **Training Management** (`/sales-acceleration/training`) - Training programs with completion charts
4. **Returns Management** (`/sales-acceleration/returns`) - Returns processing with trend charts
5. **Payments** (`/sales-acceleration/payments`) - Payment processing with distribution charts
6. **Marketing** (`/sales-acceleration/marketing`) - Marketing campaigns with engagement charts

### Customer Story Pages

6 individual customer success stories with industry-specific results:

1. **Rebate Management** (`/customers/rebate-management`) - 40% Less Admin Work (Pet Nutrition)
2. **Retail Efficiency** (`/customers/retail-efficiency`) - 10% More Efficient Operations (Coffee Retail)
3. **Pharma Returns** (`/customers/pharma-returns`) - 40% More Sales Visits (Pharma)
4. **Returns Management** (`/customers/returns-management`) - 20% Reduction in Admin Tasks (CPG)
5. **Training Incentives** (`/customers/training-incentives`) - 20% Higher Sales Activity (Pharma)
6. **Vet Growth** (`/customers/vet-growth`) - Sales Acceleration & Analytics (Veterinary)

## Features

### Navigation System

#### Desktop Navigation

- **Dropdown menu** with NavigationMenu component (Radix UI)
- **Solutions menu** with Sales Acceleration and FSA pages
- **Main links**: Customers, ROI Calculator, About Us, Contact
- **CTA button**: Book a Call

#### Mobile Navigation

- **Sheet drawer** with collapsible accordion
- **Solutions submenu** with icons
- **Full-width touch targets** (44px minimum)
- **Responsive design** for all mobile devices

### ROI Calculator

- **Multi-step form** with step selector navigation
- **Real-time calculations** using custom ROI formulas
- **Results visualization** with charts (Recharts)
- **Lead capture modal** for gated results
- **Email integration** via EmailJS

### Data Visualizations

Each Sales Acceleration tool page includes interactive charts:

- **Ordering**: Volume charts
- **Rebates**: Performance charts
- **Training**: Completion charts
- **Returns**: Trend charts
- **Payments**: Distribution charts
- **Marketing**: Engagement charts

### Customer Logos

Trusted by industry leaders:
- Haleon, Hill's Pet, Lindt, Mars, Nestlé, Roche, Royal Canin, Sandoz, Vital Essentials

### Component Architecture

All components follow a feature-based organization:

- **`layout/`** - Navbar, Footer, Breadcrumbs
- **`motion/`** - Framer Motion wrappers (MotionSection, MotionList)
- **`roi/`** - ROI Calculator components
- **`sections/`** - Homepage sections (Hero, Solutions, Customers, CTA)
- **`ui/`** - shadcn/ui components + SVG patterns
- **`data/`** - Static data for solutions and customer stories

### Styling System

#### SCSS Variables

Located in `src/styles/_variables.scss`:

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

#### Animation System

- **Framer Motion** for page transitions and component animations
- **MotionProvider** for reduced motion preferences
- **Custom variants** in `src/lib/motion/variants.ts`

### Responsive Design

- **Mobile-first approach** with `md:` breakpoint at 768px
- **Full-width buttons** on mobile with 44px min-height
- **Touch-optimized** spacing and targets
- **Fluid typography** with clamp() for headings

## Content Management

### Sales Acceleration Tools

Each tool page is located at `/src/app/sales-acceleration/{tool-slug}/page.tsx` with:

- Custom content and features
- Interactive data visualization chart
- Consistent layout with hero and CTA sections

**Tools metadata** (`src/app/sales-acceleration/data/tools.ts`):

- Used by Sales Acceleration landing page
- Used by navbar Solutions Menu

### Customer Stories

Each customer story is an **individual page** at `/src/app/customers/{story-slug}/page.tsx` with:

- Background image
- Industry/category tags
- Title with key metric
- Customizable content area

**Customer stories data** (`src/components/sections/customers/data/customer-stories.ts`):

- Used by CustomerStoriesCarousel
- Links to individual customer pages

### Solutions Metadata

**Solutions** (`src/components/sections/solutions/data/solutions.ts`):

- Sales Acceleration and FSA entries
- Used by homepage SolutionsSection
- Used by navbar SolutionsMenu

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

### Adding a New Sales Acceleration Tool

1. Create folder: `src/app/sales-acceleration/{slug}/`
2. Create `page.tsx` with custom content and chart component
3. Create `{slug}-chart.tsx` for data visualization
4. Add tool to `src/app/sales-acceleration/data/tools.ts`
5. Tool automatically appears on the Sales Acceleration landing page

### Adding a New Customer Story

1. Create folder: `src/app/customers/{slug}/`
2. Create `page.tsx` with story content
3. Add story to `src/components/sections/customers/data/customer-stories.ts`
4. Story automatically appears in carousel

### Adding Motion Animations

1. Import motion components from `src/components/motion/`
2. Use `MotionSection` for page sections with entrance animations
3. Use `MotionList` for staggered list animations
4. Configure variants in `src/lib/motion/variants.ts`

### Styling Guidelines

- Use Tailwind utility classes for all styling
- Follow existing color scheme (teal accent, neutral base)
- Maintain responsive design patterns
- Keep accessibility in mind (color contrast, touch targets)
- Use Framer Motion for complex animations

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

**Last Updated**: 2026-01-29
**Version**: 0.2.0
**Built with**: Next.js 16 + React 19 + Tailwind CSS v4 + Framer Motion + Recharts

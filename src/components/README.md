# Components Directory

## Structure

This directory contains all React components organized by feature and purpose:

- **`ui/`** - Primitive UI components (Radix-based, headless)
- **`layout/`** - Layout components (Navbar, Footer)
- **`sections/`** - Page section components organized by feature
  - `hero/` - Hero sections
  - `solutions/` - Solution-related sections
  - `customers/` - Customer customers and social proof
  - `cta/` - Call-to-action sections and buttons

## Guidelines

### When to create a new component?

Create a new component when:
- You have a reusable UI pattern used in multiple places
- Complex logic needs isolation for maintainability
- A component exceeds 200 lines of code
- The component encapsulates a distinct piece of functionality

### Where to place new components?

#### UI Components (`ui/`)

Place components here if they are:
- Primitive, reusable UI elements
- Have no business logic
- Based on Radix UI or similar headless libraries
- Examples: Button, Accordion, Sheet, NavigationMenu

#### Layout Components (`layout/`)

Place components here if they are:
- Site-wide structural elements
- Navigation, headers, footers
- Persistent across multiple pages
- Examples: Navbar, Footer, Sidebar

#### Section Components (`sections/`)

Place components here if they are:
- Page-specific sections
- Grouped by feature or domain
- Can contain business logic and state
- Examples: Hero, SolutionsSection, Customers, CTA

When adding a new section:
1. Create a new subdirectory under `sections/` (e.g., `sections/pricing/`)
2. Group related components together in that subdirectory
3. If the section has data or types, create `data/` and `types/` subdirectories

### Naming Conventions

- **Files**: PascalCase for component files (e.g., `CustomerStoryCard.tsx`)
- **Descriptive names**: Use clear, descriptive names (e.g., `CustomerStoryCard` not `Card`)
- **Index files**: Use `index.tsx` for folder exports when you have multiple related files
- **Types**: Create separate type files when types are shared across multiple components

### Import Aliases

Use `@/components/...` for absolute imports from outside the components directory.

Example:
```typescript
// From a page file
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/hero/Hero"
```

Within the components directory, prefer relative imports for better portability:
```typescript
// From sections/customers/Customers.tsx
import { CustomerStoriesCarousel } from "./CustomerStoriesCarousel"
import { Button } from "../../ui/button"
```

## Architecture Decisions

### Why feature-based organization?

- **Maintainability**: Related components are grouped together
- **Scalability**: Can easily grow to 100+ components without chaos
- **Discoverability**: New developers can quickly find what they need
- **Separation of concerns**: Clear boundaries between UI primitives, layout, and features

### Navbar Component Split

The Navbar was split into multiple subcomponents for better maintainability:
- `index.tsx` - Main Navbar wrapper and client-side detection
- `SolutionsMenu.tsx` - Shared solutions data and menu rendering
- `DesktopNav.tsx` - Desktop-specific navigation logic
- `MobileNav.tsx` - Mobile drawer/sheet navigation

This separation allows:
- Easier testing of individual pieces
- Better code organization
- Shared logic (SolutionsMenu) between desktop and mobile
- Clearer separation of responsive concerns

## Best Practices

1. **Keep components focused**: Each component should have a single responsibility
2. **Use TypeScript**: Define proper types and interfaces for props
3. **Optimize performance**: Use `React.memo()`, `useMemo()`, and `useCallback()` where appropriate
4. **Document complex logic**: Add comments explaining non-obvious code
5. **Prefer composition**: Build complex UIs by composing smaller components
6. **Test in isolation**: Each component should be testable independently

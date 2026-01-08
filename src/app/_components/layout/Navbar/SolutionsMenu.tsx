import {
  ShoppingCart,
  BarChart3,
  Receipt,
  ArrowLeftRight,
  CreditCard,
  UserCog,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

// ============================================
// TYPES
// ============================================

/** Solution menu item structure */
export interface SolutionItem {
  title: string
  href: string
  description: string
  icon: LucideIcon
}

// ============================================
// STATIC DATA
// ============================================

/** Solutions menu items with icons and descriptions */
export const SOLUTIONS: readonly SolutionItem[] = [
  {
    title: "Optimized Ordering",
    href: "/solutions/ordering",
    description: "Add a subtext here.",
    icon: ShoppingCart,
  },
  {
    title: "Data & Analytics",
    href: "/solutions/data",
    description: "Add a subtext here.",
    icon: BarChart3,
  },
  {
    title: "Rebates",
    href: "/solutions/rebates",
    description: "Add a subtext here.",
    icon: Receipt,
  },
  {
    title: "Returns",
    href: "/solutions/returns",
    description: "Add a subtext here.",
    icon: ArrowLeftRight,
  },
  {
    title: "Payments",
    href: "/solutions/payments",
    description: "Add a subtext here.",
    icon: CreditCard,
  },
  {
    title: "Field Sales Automation",
    href: "/solutions/fsa",
    description: "Add a subtext here.",
    icon: UserCog,
  },
] as const

import {
  ShoppingCart,
  TrendingUp,
  GraduationCap,
  RotateCcw,
  CreditCard,
  Megaphone,
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
    description: "Scale up your ordering process.",
    icon: ShoppingCart,
  },
  {
    title: "Rebates",
    href: "/solutions/rebates",
    description: "Maximize ROI. Drive Growth. Automate Success.",
    icon: TrendingUp,
  },
  {
    title: "Training Management",
    href: "/solutions/training",
    description: "Transforms training into a loyalty-building journey.",
    icon: GraduationCap,
  },
  {
    title: "Returns Management",
    href: "/solutions/returns",
    description: "Minimize Returns, Maximize Control.",
    icon: RotateCcw,
  },
  {
    title: "Payments",
    href: "/solutions/payments",
    description: "Smarter, Faster, More Secure.",
    icon: CreditCard,
  },
  {
    title: "Marketing",
    href: "/solutions/marketing",
    description: "Keep your customers up-to-date.",
    icon: Megaphone,
  },
  {
    title: "Field Sales Automation",
    href: "/solutions/fsa",
    description: "Save your company both time and money.",
    icon: UserCog,
  },
] as const

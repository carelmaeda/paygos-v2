import {
  ShoppingCart,
  CircleStar,
  GraduationCap,
  RotateCcw,
  CreditCard,
  Megaphone,
  ChartNoAxesCombined,
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
    title: "Field Sales Automation",
    href: "/solutions/fsa",
    description: "Save your company both time and money.",
    icon: UserCog,
  },
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
    icon: CircleStar,
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
    title: "Data & Analytics",
    href: "/solutions/analytics",
    description: "Power everything with smart data.",
    icon: ChartNoAxesCombined,
  },
] as const

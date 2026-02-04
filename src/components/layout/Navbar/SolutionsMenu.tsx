import { Zap, MapPin } from "lucide-react"
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
    title: "Sales Acceleration",
    href: "/sales-acceleration",
    description: "Streamline operations and drive revenue growth.",
    icon: Zap,
  },
  {
    title: "Field Sales Automation",
    href: "/fsa",
    description: "Manage Visits, Capture Photos, and track Activities",
    icon: MapPin,
  },
] as const

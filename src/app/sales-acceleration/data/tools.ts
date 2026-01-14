import {
  ShoppingCart,
  TrendingUp,
  GraduationCap,
  RotateCcw,
  CreditCard,
  Megaphone,
  type LucideIcon,
} from "lucide-react"

export interface SalesAccelerationTool {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export const SALES_ACCELERATION_TOOLS: SalesAccelerationTool[] = [
  {
    title: "Optimized Ordering",
    description:
      "Streamline order management with real-time inventory visibility, automated order processing, and intelligent ordering workflows for sales teams.",
    icon: ShoppingCart,
    href: "/sales-acceleration/ordering",
  },
  {
    title: "Rebates",
    description:
      "Maximize ROI and drive growth with automated rebate management, real-time tracking, and comprehensive reporting.",
    icon: TrendingUp,
    href: "/sales-acceleration/rebates",
  },
  {
    title: "Training Management",
    description:
      "Transform training into a loyalty-building journey with gamified learning, certification tracking, and engagement analytics.",
    icon: GraduationCap,
    href: "/sales-acceleration/training",
  },
  {
    title: "Returns Management",
    description:
      "Minimize returns and maximize control with automated workflows, real-time tracking, and compliance management.",
    icon: RotateCcw,
    href: "/sales-acceleration/returns",
  },
  {
    title: "Payments",
    description:
      "Validate incentives, manage budgets, and ensure compliance with automated payment processing and real-time insights.",
    icon: CreditCard,
    href: "/sales-acceleration/payments",
  },
  {
    title: "Marketing",
    description:
      "Keep your customers engaged and up-to-date with targeted campaigns, automated communications, and performance tracking.",
    icon: Megaphone,
    href: "/sales-acceleration/marketing",
  },
]

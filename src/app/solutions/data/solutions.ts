import {
  ShoppingCart,
  TrendingUp,
  GraduationCap,
  RotateCcw,
  CreditCard,
  Megaphone,
  UserCog,
  type LucideIcon,
} from "lucide-react"

export interface SolutionBase {
  title: string
  subtitle: string
  icon: LucideIcon
  image: string
  slug: string
}

export const SOLUTIONS: SolutionBase[] = [
  {
    title: "Optimized Ordering",
    subtitle: "Scale up your ordering process.",
    icon: ShoppingCart,
    image: "/solutions/ordering.svg",
    slug: "ordering",
  },
  {
    title: "Rebates",
    subtitle: "Maximize ROI. Drive Growth. Automate Success.",
    icon: TrendingUp,
    image: "/solutions/rebates.svg",
    slug: "rebates",
  },
  {
    title: "Training Management",
    subtitle: "Transforms training into a loyalty-building journey.",
    icon: GraduationCap,
    image: "/solutions/training.svg",
    slug: "training",
  },
  {
    title: "Returns Management",
    subtitle: "Minimize Returns, Maximize Control.",
    icon: RotateCcw,
    image: "/solutions/returns.svg",
    slug: "returns",
  },
  {
    title: "Payments",
    subtitle: "Smarter, Faster, More Secure.",
    icon: CreditCard,
    image: "/solutions/payments.svg",
    slug: "payments",
  },
  {
    title: "Marketing",
    subtitle: "Keep your customers up-to-date.",
    icon: Megaphone,
    image: "/solutions/marketing.svg",
    slug: "marketing",
  },
  {
    title: "Field Sales Automation",
    subtitle: "Save your company both time and money.",
    icon: UserCog,
    image: "/solutions/fsa.svg",
    slug: "fsa",
  },
]

import { Zap, UserCog, type LucideIcon } from "lucide-react"

export interface SolutionBase {
  title: string
  subtitle: string
  icon: LucideIcon
  slug: string
}

export const SOLUTIONS: SolutionBase[] = [
  {
    title: "Sales Acceleration",
    subtitle: "Streamline operations and drive revenue growth.",
    icon: Zap,
    slug: "sales-acceleration",
  },
  {
    title: "Field Sales Automation",
    subtitle: "Save your company both time and money.",
    icon: UserCog,
    slug: "fsa",
  },
]

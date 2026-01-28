import { RangeDefinition, RoiMode } from "./types"
import { Users, Timer, FileCheck, LucideIcon } from "lucide-react"

export const MODE_OPTIONS: { value: RoiMode; label: string }[] = [
  { value: "sales", label: "Sales Acceleration" },
  { value: "fsa", label: "Field Sales Automation" },
]

export const SALES_REP_RANGES: RangeDefinition[] = [
  { label: "0-50", min: 0, max: 50, midpoint: 25 },
  { label: "50-100", min: 50, max: 100, midpoint: 75 },
  { label: "100+", min: 100, max: Infinity, midpoint: 150 },
]

export const DISTRIBUTOR_RANGES: RangeDefinition[] = [
  { label: "1-5", min: 1, max: 5, midpoint: 3 },
  { label: "5-10", min: 5, max: 10, midpoint: 7 },
  { label: "10+", min: 10, max: 15, midpoint: 12 },
]

export const CUSTOMER_RANGES: RangeDefinition[] = [
  { label: "Under 1K", min: 0, max: 1000, midpoint: 500 },
  { label: "1K-10K", min: 1000, max: 10000, midpoint: 5500 },
  { label: "10K+", min: 10000, max: Infinity, midpoint: 15000 },
]

export interface ResultMetric {
  key: string
  label: string
  tooltip: string
  icon: LucideIcon
  primaryFor: RoiMode[]
}

export const RESULT_METRICS: ResultMetric[] = [
  {
    key: "engagementIncrease",
    label: "Boost Engagement",
    tooltip:
      "Estimated increase in customer interactions based on your team size and distribution network.",
    icon: Users,
    primaryFor: ["sales", "fsa"],
  },
  {
    key: "salesRepHoursSaved",
    label: "Save Rep Time",
    tooltip:
      "Time your sales reps save per customer visit through streamlined workflows and automation.",
    icon: Timer,
    primaryFor: ["sales", "fsa"],
  },
  {
    key: "adminHoursSaved",
    label: "Cut Admin Work",
    tooltip: "Percentage reduction in administrative tasks through automation.",
    icon: FileCheck,
    primaryFor: ["sales", "fsa"],
  },
]

export const MODE_VISIBILITY: Record<RoiMode, string[]> = {
  sales: ["engagementIncrease", "salesRepHoursSaved", "adminHoursSaved"],
  fsa: ["engagementIncrease", "salesRepHoursSaved", "adminHoursSaved"],
}

export const CONVERSION_CTA = {
  text: "See how this would work for your team",
  href: "/contact",
}

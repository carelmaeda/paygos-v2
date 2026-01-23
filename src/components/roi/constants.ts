import { RangeDefinition, RoiMode } from "./types"

export const MODE_OPTIONS: { value: RoiMode; label: string }[] = [
  { value: "sales", label: "Sales Acceleration" },
  { value: "fsa", label: "Field Sales Automation" },
  { value: "both", label: "Paygos Full" },
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
  { label: "Under 1,000", min: 0, max: 1000, midpoint: 500 },
  { label: "1,000-10,000", min: 1000, max: 10000, midpoint: 5500 },
  { label: "10,000+", min: 10000, max: Infinity, midpoint: 15000 },
]

export interface ResultMetric {
  key: string
  label: string
  tooltip: string
  unit?: string
  primaryFor: RoiMode[]
}

export const RESULT_METRICS: ResultMetric[] = [
  {
    key: "engagementIncrease",
    label: "Improve Customer Engagement by",
    tooltip:
      "Estimated increase in customer interactions based on your team size and distribution network.",
    primaryFor: ["sales"],
  },
  {
    key: "productInterestIncrease",
    label: "Increase Interest in Products by",
    tooltip:
      "Projected boost in product awareness and customer curiosity through targeted outreach.",
    primaryFor: ["sales"],
  },
  {
    key: "customerTrafficIncrease",
    label: "Improve Customer Traffic by",
    tooltip:
      "Expected growth in customer visits and touchpoints across your sales channels.",
    primaryFor: ["sales"],
  },
  {
    key: "adminHoursSaved",
    label: "Administration Saved",
    tooltip:
      "Hours your team saves weekly by automating routine administrative tasks.",
    unit: "Hours / Week",
    primaryFor: ["fsa"],
  },
  {
    key: "salesRepHoursSaved",
    label: "Hours Saved",
    tooltip:
      "Time your sales reps reclaim each week through streamlined workflows and automation.",
    unit: "Hours / Week",
    primaryFor: ["fsa", "both"],
  },
]

export const MODE_VISIBILITY: Record<RoiMode, string[]> = {
  sales: [
    "engagementIncrease",
    "productInterestIncrease",
    "customerTrafficIncrease",
    "adminHoursSaved",
  ],
  fsa: ["adminHoursSaved", "salesRepHoursSaved"],
  both: [
    "engagementIncrease",
    "productInterestIncrease",
    "customerTrafficIncrease",
    "adminHoursSaved",
    "salesRepHoursSaved",
  ],
}

export const CONVERSION_CTA = {
  text: "See how this would work for your team",
  href: "/contact",
}

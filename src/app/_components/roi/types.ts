export type RoiMode = "sales" | "fsa" | "both"

export interface RoiInputs {
  salesReps: number
  customers: number
  distributors: number
  monthlySpend: number
}

export interface RoiResults {
  // Percentage strings (e.g., "25%")
  engagementIncrease?: string
  salesIncrease?: string
  productInterestIncrease?: string
  customerTrafficIncrease?: string

  // Numeric hours per week
  adminHoursSaved?: number
  salesRepHoursSaved?: number
}

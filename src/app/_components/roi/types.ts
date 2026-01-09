export type RoiMode = "sales" | "fsa" | "both"

export interface RoiInputs {
  salesReps: number
  customers: number
  distributors: number
  monthlySpend: number
}

export interface RoiResults {
  engagementIncrease?: string
  salesIncrease?: string
  productInterestIncrease?: string
  customerTrafficIncrease?: string
  adminHoursSaved?: number
  salesRepHoursSaved?: number
}

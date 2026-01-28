export type RoiMode = "sales" | "fsa"

export interface RangeDefinition {
  label: string
  min: number
  max: number
  midpoint: number
}

export interface RoiInputs {
  salesRepsIndex: number
  distributorsIndex: number
  customersIndex: number
}

export interface RoiResults {
  engagementIncrease?: string
  adminHoursSaved?: string
  salesRepHoursSaved?: string
}

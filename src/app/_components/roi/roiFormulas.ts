import { RoiInputs, RoiMode, RoiResults } from "./types"

function customerTier(customers: number) {
  if (customers < 1000) return "small"
  if (customers < 10000) return "medium"
  return "large"
}

function distributorTier(distributors: number) {
  if (distributors === 0) return "none"
  if (distributors < 6) return "few"
  return "many"
}

export function calculateROI(
  mode: RoiMode,
  inputs: RoiInputs
): Partial<RoiResults> {
  const { salesReps, customers, distributors } = inputs

  const results: Partial<RoiResults> = {}

  // Improve Customer Engagement
  if ((mode === "sales" || mode === "both") && customers > 0) {
    const dist = distributorTier(distributors)
    const cust = customerTier(customers)

    const engagementMap: Record<string, Record<string, string>> = {
      none: { small: "5%", medium: "10%", large: "15%" },
      few: { small: "10%", medium: "20%", large: "30%" },
      many: { small: "15%", medium: "25%", large: "35%" },
    }

    results.engagementIncrease = engagementMap[dist][cust]
  }

  // Sales-based metrics
  if ((mode === "sales" || mode === "both") && customers > 0) {
    const tier = customerTier(customers)
    const value = tier === "small" ? "15%" : tier === "medium" ? "25%" : "30%"

    results.salesIncrease = value
    results.productInterestIncrease = value
    results.customerTrafficIncrease = value
  }

  // Admin / Hours Saved
  if (
    (mode === "fsa" || mode === "sales" || mode === "both") &&
    salesReps > 0
  ) {
    const hours = salesReps < 10 ? 5 : salesReps < 50 ? 8 : 10

    results.adminHoursSaved = hours
    results.salesRepHoursSaved = hours
  }

  return results
}

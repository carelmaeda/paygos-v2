import { RoiInputs, RoiMode, RoiResults } from "./types"

// ============================================
// HELPER FUNCTIONS
// ============================================

function getCustomerTier(customers: number): 0 | 1 | 2 {
  if (customers < 1000) return 0
  if (customers < 10000) return 1
  return 2
}

function getDistributorTier(distributors: number): 0 | 1 | 2 {
  if (distributors === 0) return 0
  if (distributors < 6) return 1
  return 2
}

function getSalesRepTier(salesReps: number): 0 | 1 | 2 {
  if (salesReps < 10) return 0
  if (salesReps < 50) return 1
  return 2
}

// ============================================
// CORE CALCULATION FUNCTIONS
// ============================================

function calculateEngagement(
  customers: number,
  distributors: number
): string | undefined {
  if (customers === 0) return undefined

  // Lookup table [distributorTier][customerTier]
  const table = [
    [5, 10, 15], // 0 distributors
    [10, 20, 30], // < 6 distributors
    [15, 25, 35], // ≥ 6 distributors
  ]

  const customerTier = getCustomerTier(customers)
  const distributorTier = getDistributorTier(distributors)

  return `${table[distributorTier][customerTier]}%`
}

function calculateCustomerBased(customers: number): string | undefined {
  if (customers === 0) return undefined

  const percentages = [15, 25, 30] // <1000, <10000, ≥10000
  return `${percentages[getCustomerTier(customers)]}%`
}

function calculateHoursSaved(salesReps: number): number | undefined {
  if (salesReps === 0) return undefined

  const hours = [5, 8, 10] // <10, <50, ≥50
  return hours[getSalesRepTier(salesReps)]
}

// ============================================
// MAIN CALCULATION FUNCTION
// ============================================

export function calculateROI(
  mode: RoiMode,
  inputs: RoiInputs
): Partial<RoiResults> {
  const { salesReps, customers, distributors } = inputs

  const results: Partial<RoiResults> = {}

  // Sales indicators (sales mode or both)
  if (mode === "sales" || mode === "both") {
    results.engagementIncrease = calculateEngagement(customers, distributors)
    results.salesIncrease = calculateCustomerBased(customers)
    results.productInterestIncrease = calculateCustomerBased(customers)
    results.customerTrafficIncrease = calculateCustomerBased(customers)
  }

  // FSA indicators (fsa mode or both)
  if (mode === "fsa" || mode === "both") {
    results.salesRepHoursSaved = calculateHoursSaved(salesReps)
  }

  // Shared indicator (all modes)
  results.adminHoursSaved = calculateHoursSaved(salesReps)

  return results
}

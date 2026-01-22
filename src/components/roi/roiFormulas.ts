import { RoiInputs, RoiMode, RoiResults } from "./types"

// ============================================
// TIER MAPPINGS
// Direct index-to-tier lookup tables based on range definitions
// ============================================

// CUSTOMER_RANGES: [<1k, 1k-10k, 10k+] → tiers [0, 1, 2]
const CUSTOMER_TIERS: (0 | 1 | 2)[] = [0, 1, 2]

// DISTRIBUTOR_RANGES: [1-5, 5-10, 10-15] → tiers [1, 2, 2]
const DISTRIBUTOR_TIERS: (0 | 1 | 2)[] = [1, 2, 2]

// SALES_REP_RANGES: [0-25, 25-50, 50-75, 75-100, 100+] → tiers [1, 1, 2, 2, 2]
const SALES_REP_TIERS: (0 | 1 | 2)[] = [1, 1, 2, 2, 2]

// ============================================
// CORE CALCULATION FUNCTIONS
// ============================================

function calculateEngagement(
  customersIndex: number,
  distributorsIndex: number
): string | undefined {
  const customerTier = CUSTOMER_TIERS[customersIndex] ?? 0
  const distributorTier = DISTRIBUTOR_TIERS[distributorsIndex] ?? 0

  // Lookup table [distributorTier][customerTier]
  const table = [
    [5, 10, 15], // tier 0 distributors
    [10, 20, 30], // tier 1 distributors
    [15, 25, 35], // tier 2 distributors
  ]

  return `${table[distributorTier][customerTier]}%`
}

function calculateCustomerBased(customersIndex: number): string | undefined {
  const percentages = [15, 25, 30] // tier 0, 1, 2
  const tier = CUSTOMER_TIERS[customersIndex] ?? 0
  return `${percentages[tier]}%`
}

function calculateHoursSaved(salesRepsIndex: number): number | undefined {
  const hours = [5, 8, 10] // tier 0, 1, 2
  const tier = SALES_REP_TIERS[salesRepsIndex] ?? 0
  return hours[tier]
}

// ============================================
// MAIN CALCULATION FUNCTION
// ============================================

export function calculateROI(
  mode: RoiMode,
  inputs: RoiInputs
): Partial<RoiResults> {
  const { salesRepsIndex, customersIndex, distributorsIndex } = inputs

  const results: Partial<RoiResults> = {}

  // Sales indicators (sales mode or both)
  if (mode === "sales" || mode === "both") {
    results.engagementIncrease = calculateEngagement(
      customersIndex,
      distributorsIndex
    )
    results.productInterestIncrease = calculateCustomerBased(customersIndex)
    results.customerTrafficIncrease = calculateCustomerBased(customersIndex)
  }

  // FSA indicators (fsa mode or both)
  if (mode === "fsa" || mode === "both") {
    results.salesRepHoursSaved = calculateHoursSaved(salesRepsIndex)
  }

  // Shared indicator (all modes)
  results.adminHoursSaved = calculateHoursSaved(salesRepsIndex)

  return results
}

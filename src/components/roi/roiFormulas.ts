import { RoiInputs, RoiMode, RoiResults } from "./types"
import {
  SALES_REP_RANGES,
  DISTRIBUTOR_RANGES,
  CUSTOMER_RANGES,
} from "./constants"

// ============================================
// TIER MAPPINGS (for hours saved calculations)
// ============================================

// SALES_REP_RANGES: [0-50, 50-100, 100+] → tiers [1, 1, 2]
const SALES_REP_TIERS: (0 | 1 | 2)[] = [1, 1, 2]

// ============================================
// CORE CALCULATION FUNCTIONS
// ============================================

/**
 * Calculate engagement increase based on mode and input values.
 *
 * Mapping to spreadsheet variables:
 * - c2 = Sales module toggle (mode includes "sales")
 * - d2 = FSA module toggle (mode includes "fsa")
 * - c4 = # of Sales Reps (from salesRepsIndex midpoint)
 * - c5 = # of Customers (from customersIndex midpoint)
 * - c6 = # of Distributors (from distributorsIndex midpoint)
 *
 * Returns a percentage string like "5%" or " " (single space) when no value.
 */
function calculateEngagement(
  mode: RoiMode,
  salesRepsIndex: number,
  customersIndex: number,
  distributorsIndex: number
): string {
  // Map mode to boolean toggles
  const c2 = mode === "sales" || mode === "both"
  const d2 = mode === "fsa" || mode === "both"

  // Get actual numeric values from indices using midpoints
  const c4 = SALES_REP_RANGES[salesRepsIndex]?.midpoint ?? 0
  const c5 = CUSTOMER_RANGES[customersIndex]?.midpoint ?? 0
  const c6 = DISTRIBUTOR_RANGES[distributorsIndex]?.midpoint ?? 0

  function rate(under1k: string, under10k: string, over10k: string): string {
    if (c5 === 0) return " "
    if (c5 < 1000) return under1k
    if (c5 < 10000) return under10k
    if (c5 > 10001) return over10k
    return " "
  }

  function c6Logic(
    set1: string,
    set2: string,
    set3: string,
    fallback: string
  ): string {
    if (c6 < 6) return set1
    if (c6 < 10) return set2
    if (c6 > 9) return set3
    return fallback
  }

  // ===== C2 = TRUE PATH (Sales) =====
  if (c2 === true) {
    if (c4 < 50) {
      return c6Logic(
        rate("2%", "5%", "8%"),
        rate("4%", "6%", "10%"),
        rate("5%", "8%", "15%"),
        rate("2%", "5%", "8%")
      )
    }

    if (c4 >= 50 && c4 <= 99) {
      return c6Logic(
        rate("4%", "6%", "8%"),
        rate("6%", "8%", "12%"),
        rate("5%", "8%", "15%"),
        rate("2%", "5%", "8%")
      )
    }

    if (c4 > 100) {
      return c6Logic(
        rate("6%", "8%", "12%"),
        rate("5%", "8%", "12%"),
        rate("8%", "15%", "18%"),
        rate("2%", "5%", "8%")
      )
    }

    return c6Logic(
      rate("2%", "5%", "10%"),
      rate("4%", "6%", "10%"),
      rate("5%", "8%", "15%"),
      rate("2%", "5%", "8%")
    )
  }

  // ===== D2 = TRUE PATH (FSA) =====
  if (d2 === true) {
    if (c4 < 50) {
      return c6Logic(
        rate("2%", "4%", "6%"),
        rate("3%", "5%", "8%"),
        rate("5%", "8%", "10%"),
        rate("2%", "4%", "6%")
      )
    }

    if (c4 >= 50 && c4 <= 99) {
      return c6Logic(
        rate("2%", "4%", "6%"),
        rate("4%", "6%", "8%"),
        rate("5%", "8%", "10%"),
        rate("2%", "4%", "6%")
      )
    }

    if (c4 > 100) {
      return c6Logic(
        rate("4%", "8%", "10%"),
        rate("5%", "8%", "12%"),
        rate("8%", "15%", "18%"),
        rate("2%", "5%", "8%")
      )
    }

    return c6Logic(
      rate("2%", "5%", "10%"),
      rate("4%", "6%", "10%"),
      rate("5%", "8%", "15%"),
      rate("2%", "5%", "8%")
    )
  }

  return " "
}

function calculateCustomerBased(customersIndex: number): string {
  const percentages = ["15%", "25%", "30%"]
  return percentages[customersIndex] ?? "15%"
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
      mode,
      salesRepsIndex,
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

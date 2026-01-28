import { RoiInputs, RoiMode, RoiResults } from "./types"

// ============================================
// CORE CALCULATION FUNCTIONS
// ============================================

/**
 * Calculate engagement increase based on mode, distributors, and customers.
 * No sales reps input used for this calculation.
 *
 * Returns a percentage string like "5%"
 */
function calculateEngagement(
  mode: RoiMode,
  customersIndex: number,
  distributorsIndex: number
): string {
  // Sales Acceleration mode
  if (mode === "sales") {
    if (distributorsIndex === 0) {
      // dist < 6
      if (customersIndex === 0) return "2%" // < 1k
      if (customersIndex === 1) return "5%" // < 10k
      return "10%" // > 10k
    }
    if (distributorsIndex === 1) {
      // dist < 10
      if (customersIndex === 0) return "4%"
      if (customersIndex === 1) return "6%"
      return "10%"
    }
    // dist > 9
    if (customersIndex === 0) return "6%"
    if (customersIndex === 1) return "8%"
    return "15%"
  }

  // Field Sales Automation mode
  if (distributorsIndex === 0) {
    // dist < 6
    if (customersIndex === 0) return "2%"
    if (customersIndex === 1) return "4%"
    return "6%"
  }
  if (distributorsIndex === 1) {
    // dist < 10
    if (customersIndex === 0) return "4%"
    if (customersIndex === 1) return "5%"
    return "8%"
  }
  // dist > 9
  if (customersIndex === 0) return "6%"
  if (customersIndex === 1) return "8%"
  return "10%"
}

/**
 * Calculate Rep Time based on customer range only.
 * Returns "X Minutes per Visit"
 */
function calculateSalesRepHoursSaved(customersIndex: number): string {
  if (customersIndex === 0) return "10 Minutes per Visit" // < 1,000
  if (customersIndex === 1) return "15 Minutes per Visit" // < 10,000
  return "20 Minutes per Visit" // > 10,001
}

/**
 * Calculate Admin Time reduction based on mode, sales reps, distributors, and customers.
 * Returns a percentage string like "5%"
 */
function calculateAdminHoursSaved(
  mode: RoiMode,
  salesRepsIndex: number,
  customersIndex: number,
  distributorsIndex: number
): string {
  // Sales Acceleration mode
  if (mode === "sales") {
    if (salesRepsIndex === 0) {
      // reps < 50
      if (distributorsIndex === 0) {
        // dist < 6
        if (customersIndex === 0) return "2%"
        if (customersIndex === 1) return "5%"
        return "8%"
      }
      if (distributorsIndex === 1) {
        // dist < 10
        if (customersIndex === 0) return "4%"
        if (customersIndex === 1) return "6%"
        return "10%"
      }
      // dist > 9
      if (customersIndex === 0) return "5%"
      if (customersIndex === 1) return "8%"
      return "15%"
    }
    if (salesRepsIndex === 1) {
      // reps 50-99
      if (distributorsIndex === 0) {
        if (customersIndex === 0) return "4%"
        if (customersIndex === 1) return "7%"
        return "10%"
      }
      if (distributorsIndex === 1) {
        if (customersIndex === 0) return "5%"
        if (customersIndex === 1) return "8%"
        return "12%"
      }
      // dist > 9
      if (customersIndex === 0) return "6%"
      if (customersIndex === 1) return "8%"
      return "15%"
    }
    // reps > 100
    if (distributorsIndex === 0) {
      if (customersIndex === 0) return "5%"
      if (customersIndex === 1) return "8%"
      return "12%"
    }
    if (distributorsIndex === 1) {
      if (customersIndex === 0) return "6%"
      if (customersIndex === 1) return "10%"
      return "14%"
    }
    // dist > 9
    if (customersIndex === 0) return "8%"
    if (customersIndex === 1) return "15%"
    return "18%"
  }

  // Field Sales Automation mode
  if (salesRepsIndex === 0) {
    // reps < 50
    if (distributorsIndex === 0) {
      if (customersIndex === 0) return "2%"
      if (customersIndex === 1) return "4%"
      return "6%"
    }
    if (distributorsIndex === 1) {
      if (customersIndex === 0) return "3%"
      if (customersIndex === 1) return "5%"
      return "8%"
    }
    // dist > 9
    if (customersIndex === 0) return "4%"
    if (customersIndex === 1) return "6%"
    return "10%"
  }
  if (salesRepsIndex === 1) {
    // reps 50-99
    if (distributorsIndex === 0) {
      if (customersIndex === 0) return "3%"
      if (customersIndex === 1) return "5%"
      return "8%"
    }
    if (distributorsIndex === 1) {
      if (customersIndex === 0) return "4%"
      if (customersIndex === 1) return "6%"
      return "10%"
    }
    // dist > 9
    if (customersIndex === 0) return "5%"
    if (customersIndex === 1) return "8%"
    return "12%"
  }
  // reps > 100
  if (distributorsIndex === 0) {
    if (customersIndex === 0) return "4%"
    if (customersIndex === 1) return "6%"
    return "10%"
  }
  if (distributorsIndex === 1) {
    if (customersIndex === 0) return "5%"
    if (customersIndex === 1) return "8%"
    return "12%"
  }
  // dist > 9
  if (customersIndex === 0) return "6%"
  if (customersIndex === 1) return "10%"
  return "15%"
}

// ============================================
// MAIN CALCULATION FUNCTION
// ============================================

export function calculateROI(
  mode: RoiMode,
  inputs: RoiInputs
): Partial<RoiResults> {
  const { salesRepsIndex, customersIndex, distributorsIndex } = inputs

  return {
    engagementIncrease: calculateEngagement(
      mode,
      customersIndex,
      distributorsIndex
    ),
    salesRepHoursSaved: calculateSalesRepHoursSaved(customersIndex),
    adminHoursSaved: calculateAdminHoursSaved(
      mode,
      salesRepsIndex,
      customersIndex,
      distributorsIndex
    ),
  }
}

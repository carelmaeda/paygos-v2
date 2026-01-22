/**
 * InputForm - Business Metrics Input Component
 *
 * Displays a responsive grid of range sliders for collecting
 * business metrics used in ROI calculations:
 * - Number of Sales Reps
 * - Number of Distributors
 * - Number of Customers
 *
 * Each slider uses predefined ranges from constants.ts and
 * updates the parent state via the onChange callback.
 */
"use client"

import { RoiInputs } from "./types"
import { RangeSlider } from "./RangeSlider"
import {
  SALES_REP_RANGES,
  DISTRIBUTOR_RANGES,
  CUSTOMER_RANGES,
} from "./constants"
import { Users, Building2, UserCheck } from "lucide-react"

// ============================================================================
// Types
// ============================================================================

interface Props {
  inputs: RoiInputs
  onChange: (inputs: RoiInputs) => void
}

// ============================================================================
// Main Component
// ============================================================================

export function InputForm({ inputs, onChange }: Props) {
  // Creates a handler for updating a specific input field
  const handleChange = (key: keyof RoiInputs) => (value: number) => {
    onChange({ ...inputs, [key]: value })
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Sales Reps Slider */}
      <RangeSlider
        label="# of Sales Reps"
        icon={Users}
        ranges={SALES_REP_RANGES}
        value={inputs.salesRepsIndex}
        onChange={handleChange("salesRepsIndex")}
      />

      {/* Distributors Slider */}
      <RangeSlider
        label="# of Distributors"
        icon={Building2}
        ranges={DISTRIBUTOR_RANGES}
        value={inputs.distributorsIndex}
        onChange={handleChange("distributorsIndex")}
      />

      {/* Customers Slider */}
      <RangeSlider
        label="# of Customers"
        icon={UserCheck}
        ranges={CUSTOMER_RANGES}
        value={inputs.customersIndex}
        onChange={handleChange("customersIndex")}
      />
    </div>
  )
}

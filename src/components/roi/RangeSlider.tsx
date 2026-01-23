/**
 * RangeSlider - Discrete Range Selection Component
 *
 * A slider component that allows users to select from predefined ranges.
 * Used for selecting business metrics like number of sales reps,
 * distributors, and customers.
 *
 * Features:
 * - Discrete steps
 * - Visual range labels below the slider
 * - Badge showing the currently selected range
 * - Smooth transitions and hover states
 */
"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { RangeDefinition } from "./types"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

// ============================================================================
// Types
// ============================================================================

interface Props {
  label: string
  icon?: LucideIcon
  ranges: RangeDefinition[]
  value: number // Index of the selected range
  onChange: (value: number) => void
}

// ============================================================================
// Main Component
// ============================================================================

export function RangeSlider({
  label,
  icon: Icon,
  ranges,
  value,
  onChange,
}: Props) {
  // Get the currently selected range object
  const selectedRange = ranges[value]

  return (
    <div className="flex h-full flex-col rounded-lg p-5 shadow-sm ring-1 ring-black/10">
      {/* Input Label */}
      <Label className="mb-4 flex items-center gap-2 text-sm">
        {Icon && <Icon className="h-4 w-4 text-black" />}
        {label}
      </Label>

      {/* Slider Track and Thumb */}
      <div className="mb-3 py-2">
        <Slider
          value={[value]}
          min={0}
          max={ranges.length - 1}
          step={1}
          onValueChange={([newValue]) => onChange(newValue)}
          className="h-2 w-full rounded-full bg-gray-300"
        />
      </div>

      {/* Range Labels - Displayed below slider, evenly spaced */}
      <div className="mb-4 flex justify-between px-1">
        {ranges.map((range, index) => (
          <span
            key={range.label}
            className={cn(
              "text-xs transition-colors duration-200",
              // Highlight the selected range label
              index === value
                ? "font-semibold text-teal-600"
                : "text-muted-foreground"
            )}
          >
            {range.label}
          </span>
        ))}
      </div>

      {/* Selected Value Badge - Shows current selection */}
      <Badge variant="secondary" className="font-semibold text-gray-700">
        <span className="h-2 w-2 rounded-full bg-teal-500" />
        {selectedRange?.label}
      </Badge>
    </div>
  )
}

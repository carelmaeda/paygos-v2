/**
 * ResultCard - Individual ROI Metric Display Card
 *
 * Displays a single ROI metric with animated value, tooltip, and visual styling.
 * Supports both numeric values (with count-up animation) and string values.
 *
 * Features:
 * - Animated count-up for numeric values
 * - Info tooltip for metric explanation
 * - Staggered entrance animation
 */
"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info, TrendingUp, Clock } from "lucide-react"
import { useCountUp } from "./hooks/useCountUp"

// ============================================================================
// Types
// ============================================================================

interface Props {
  label: string
  value: string | number
  tooltip: string
  unit?: string
  animationDelay?: number
}

// ============================================================================
// Main Component
// ============================================================================

export function ResultCard({
  label,
  value,
  tooltip,
  unit,
  animationDelay = 0,
}: Props) {
  // Determine value type for appropriate rendering
  const isNumeric = typeof value === "number"
  const animatedValue = useCountUp(isNumeric ? value : 0)

  // Use Clock icon for time-based metrics, TrendingUp for others
  const Icon = unit ? Clock : TrendingUp

  return (
    <div
      className="group animate-in fade-in slide-in-from-bottom-4 relative flex w-100 flex-col overflow-hidden rounded-lg p-4 ring-1 ring-black/10 transition-all duration-300 hover:shadow-md"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Header Row - Icon and Tooltip */}
      <div className="mb-4 flex items-start justify-between gap-3">
        {/* Metric Type Icon */}
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 text-teal-500">
          <Icon className="h-4 w-4" />
        </div>

        {/* Info Tooltip Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="shrink-0 rounded-full p-1.5 transition-colors"
            >
              <Info className="h-4 w-4 text-black" />
            </button>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="max-w-xs bg-teal-900 p-3 text-sm text-white"
          >
            {tooltip}
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Metric Label */}
      <p className="text-sm text-gray-700">{label}</p>

      {/* Value Display - The "hero" moment of the card */}
      <div className="mt-auto">
        <p className="text-foreground text-2xl font-bold tracking-tight">
          {isNumeric ? animatedValue : value}
          {unit && (
            <span className="text-muted-foreground ml-2 text-sm font-medium">
              {unit}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

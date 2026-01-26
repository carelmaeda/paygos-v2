/**
 * ResultsPanel - ROI Metrics Grid Component
 *
 * Renders a responsive grid of result cards based on the selected mode.
 * Filters and displays only the metrics relevant to the current mode.
 *
 * Features:
 * - Mode-based metric filtering (different metrics for Sales vs FSA vs Both)
 * - Staggered animation delays for visual appeal
 * - Responsive grid layout (1-4 columns based on viewport)
 */
"use client"

import { RoiMode, RoiResults } from "./types"
import { ResultCard } from "./ResultCard"
import { RESULT_METRICS, MODE_VISIBILITY } from "./constants"

// ============================================================================
// Types
// ============================================================================

interface Props {
  results: RoiResults
  mode: RoiMode
}

// ============================================================================
// Main Component
// ============================================================================

export function ResultsPanel({ results, mode }: Props) {
  // Filter metrics based on current mode visibility settings
  const visibleMetrics = RESULT_METRICS.filter((metric) =>
    MODE_VISIBILITY[mode].includes(metric.key)
  )

  // Helper to get result value by key
  const getResultValue = (key: string): string | number | undefined => {
    return results[key as keyof RoiResults]
  }

  // Filter out metrics with no calculated values
  const activeMetrics = visibleMetrics.filter(
    (metric) => getResultValue(metric.key) !== undefined
  )

  return (
    <div className="flex gap-2">
      {activeMetrics.map((metric, index) => {
        const value = getResultValue(metric.key)
        if (value === undefined) return null

        return (
          <ResultCard
            key={metric.key}
            label={metric.label}
            value={value}
            tooltip={metric.tooltip}
            unit={metric.unit}
            animationDelay={index * 100}
          />
        )
      })}
    </div>
  )
}

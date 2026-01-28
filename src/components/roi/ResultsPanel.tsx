"use client"

import { RoiMode, RoiResults } from "./types"
import { ResultCard } from "./ResultCard"
import { RESULT_METRICS, MODE_VISIBILITY } from "./constants"

interface Props {
  results: RoiResults
  mode: RoiMode
}

export function ResultsPanel({ results, mode }: Props) {
  const visibleKeys = MODE_VISIBILITY[mode]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {RESULT_METRICS.filter((m) => visibleKeys.includes(m.key)).map((metric) => {
        const value = results[metric.key as keyof RoiResults]
        if (!value) return null

        return (
          <ResultCard
            key={metric.key}
            icon={metric.icon}
            label={metric.label}
            value={value}
            tooltip={metric.tooltip}
          />
        )
      })}
    </div>
  )
}

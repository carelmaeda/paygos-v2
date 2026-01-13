"use client"

import { useMemo, useState } from "react"
import { StepSelector } from "./StepSelector"
import { InputForm } from "./InputForm"
import { ResultsPanel } from "./ResultsPanel"
import { calculateROI } from "./roiFormulas"
import { RoiInputs, RoiMode } from "./types"

export function RoiCalculator() {
  const [mode, setMode] = useState<RoiMode>("sales")
  const [inputs, setInputs] = useState<RoiInputs>({
    salesReps: 0,
    customers: 0,
    distributors: 0,
    monthlySpend: 0,
  })

  const results = useMemo(() => calculateROI(mode, inputs), [mode, inputs])

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      {/* Step 1 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Step 1 – Select ROI Type</h2>
        <StepSelector value={mode} onChange={setMode} />
      </section>

      {/* Step 2 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Step 2 – Enter Values</h2>
        <InputForm inputs={inputs} onChange={setInputs} />
      </section>

      {/* Step 3 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Step 3 – Results</h2>
        <ResultsPanel results={results} mode={mode} />
      </section>
    </div>
  )
}

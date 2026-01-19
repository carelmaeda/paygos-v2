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
    <div className="space-y-8">
      {/* Step 1 */}
      <section className="space-y-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
            1
          </span>
          <h4>Select Your Solutions</h4>
        </div>
        <StepSelector value={mode} onChange={setMode} />

        {/* Step 2 */}
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
            2
          </span>
          <h4>Enter Your Information</h4>
        </div>
        <InputForm inputs={inputs} onChange={setInputs} />
      </section>

      {/* Step 3 */}
      <section>
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
            3
          </span>
          <h4>Your Estimated Results</h4>
        </div>
        <ResultsPanel results={results} mode={mode} />
      </section>
    </div>
  )
}

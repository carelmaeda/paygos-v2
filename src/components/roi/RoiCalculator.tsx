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
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
            1
          </span>
          <h2 className="text-lg font-bold text-slate-900">Select ROI Type</h2>
        </div>
        <StepSelector value={mode} onChange={setMode} />
      </section>

      {/* Step 2 */}
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
            2
          </span>
          <h2 className="text-lg font-bold text-slate-900">
            Enter Your Values
          </h2>
        </div>
        <InputForm inputs={inputs} onChange={setInputs} />
      </section>

      {/* Step 3 */}
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
            3
          </span>
          <h2 className="text-lg font-bold text-slate-900">
            Your Estimated Results
          </h2>
        </div>
        <ResultsPanel results={results} mode={mode} />
      </section>
    </div>
  )
}

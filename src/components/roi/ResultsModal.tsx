/**
 * ResultsModal - ROI Results Display Modal
 *
 * A dialog that displays the calculated ROI results to the user.
 * Shows a summary of their selections and the resulting metrics.
 *
 * Sections:
 * 1. Header with title and description
 * 2. Selection summary badges (mode + input values)
 * 3. Results grid with animated metric cards
 * 4. Trust microcopy for credibility
 * 5. CTA to book a call
 */
"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ResultsPanel } from "./ResultsPanel"
import { RoiInputs, RoiMode, RoiResults } from "./types"
import {
  MODE_OPTIONS,
  SALES_REP_RANGES,
  DISTRIBUTOR_RANGES,
  CUSTOMER_RANGES,
} from "./constants"
import { ShieldCheck, Users, Building2, UserCheck, Zap } from "lucide-react"
import { BookCallButton } from "../sections/cta/BookCallButton"
import Image from "next/image"

// ============================================================================
// Types
// ============================================================================

interface Props {
  isOpen: boolean
  onClose: () => void
  mode: RoiMode
  inputs: RoiInputs
  results: RoiResults
}

// ============================================================================
// Helper Components
// ============================================================================

/**
 * ConfigBadge - Displays a configuration value with icon
 * Used to show the user's selected input values in the summary
 */
function ConfigBadge({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <Badge variant="outline" className="gap-2 px-4 py-2">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
      <span>{value}</span>
    </Badge>
  )
}

// ============================================================================
// Main Component
// ============================================================================

export function ResultsModal({
  isOpen,
  onClose,
  mode,
  inputs,
  results,
}: Props) {
  // Get human-readable labels for the selected values
  const modeLabel = MODE_OPTIONS.find((o) => o.value === mode)?.label ?? mode
  const salesRepLabel = SALES_REP_RANGES[inputs.salesRepsIndex]?.label ?? "—"
  const distributorLabel =
    DISTRIBUTOR_RANGES[inputs.distributorsIndex]?.label ?? "—"
  const customerLabel = CUSTOMER_RANGES[inputs.customersIndex]?.label ?? "—"

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="flex max-h-[95vh] flex-col gap-0 overflow-hidden rounded-3xl border-none p-0 sm:max-w-2xl lg:max-w-3xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {/* 1. FIXED HEADER */}
        <DialogHeader className="shrink-0 space-y-0 bg-white px-0 pt-10 pb-2">
          <DialogTitle className="text-center">
            <span className="flex items-center justify-center text-lg leading-none font-extrabold tracking-tight text-slate-900">
              Your potential with
              <Image
                src="/paygos/logo-full.webp"
                alt="Paygos"
                width={120}
                height={30}
                className="ml-2 inline-block h-6 w-auto"
              />
            </span>
          </DialogTitle>
          <DialogDescription className="text-center text-slate-500">
            Based on your current setup, here is the impact we can make
            together.
          </DialogDescription>
        </DialogHeader>

        {/* 2. SCROLLABLE BODY */}
        <div className="custom-scrollbar flex-1 overflow-y-auto bg-white px-4 pt-2">
          {/* Selection Summary */}
          <div className="mb-4">
            <div className="border border-slate-100 p-2">
              <div className="flex flex-col items-center gap-1">
                <small className="text-slate-400">Your Configuration</small>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Badge className="gap-1 border-none bg-teal-300 px-3 py-2">
                    <Zap className="h-4 w-4" />
                    <span className="text-xs tracking-wider uppercase">
                      {modeLabel}
                    </span>
                  </Badge>
                  <ConfigBadge
                    icon={Users}
                    label="Reps"
                    value={salesRepLabel}
                  />
                  <ConfigBadge
                    icon={Building2}
                    label="Distributors"
                    value={distributorLabel}
                  />
                  <ConfigBadge
                    icon={UserCheck}
                    label="Customers"
                    value={customerLabel}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="mb-4">
            <ResultsPanel results={results} mode={mode} />
          </div>

          {/* Trust Microcopy */}
          <div className="mb-2">
            <div className="flex items-center justify-center gap-2 p-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-black" />
              <p className="text-center text-sm font-medium text-teal-900/70">
                These estimates are based on typical results from teams similar
                to yours.
              </p>
            </div>
          </div>
        </div>

        {/* 3. FIXED FOOTER */}
        <div className="shrink-0 space-y-2 border-t border-slate-200 bg-slate-100 py-4 text-center">
          <div className="space-y-2">
            <h4 className="m-0 font-bold text-slate-900">
              Ready to Accelerate your Sales?
            </h4>
            <p className="text-sm text-slate-500">
              Book a quick discovery call to walk through these numbers.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <BookCallButton />
            <p className="text-xs text-slate-400">
              No commitment required • 30 min chat
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

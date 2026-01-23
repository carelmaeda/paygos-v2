/**
 * RoiCalculator - Main ROI Calculator Component
 *
 * This is the primary component for the ROI calculator feature.
 * It orchestrates the multi-step calculator flow:
 * 1. Solution selection (Sales Acceleration, FSA, or Both)
 * 2. Business metrics input (sales reps, distributors, customers)
 * 3. Results display in a modal
 *
 * The calculator uses memoized ROI calculations that update
 * automatically when inputs change.
 */
"use client"

import { useMemo, useState } from "react"
import { StepSelector } from "./StepSelector"
import { InputForm } from "./InputForm"
import { ResultsModal } from "./ResultsModal"
import { LeadCaptureModal } from "./LeadCaptureModal"
import { calculateROI } from "./roiFormulas"
import { sendRoiResults } from "./emailService"
import { RoiInputs, RoiMode } from "./types"
import {
  MODE_OPTIONS,
  SALES_REP_RANGES,
  DISTRIBUTOR_RANGES,
  CUSTOMER_RANGES,
} from "./constants"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { toast } from "sonner"

// ============================================================================
// Helper Components
// ============================================================================

/**
 * StepBadge - Displays the step number in a circular badge
 */
function StepBadge({ step }: { step: number }) {
  return (
    <Badge className="h-8 w-8 shrink-0 rounded-full bg-gray-200 font-bold text-black">
      {step}
    </Badge>
  )
}

/**
 * SectionTitle - Renders the title for each step section
 */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h4>{children}</h4>
}

/**
 * StepCard - Container for each step in the calculator
 * Combines the step badge, title, and content
 */
function StepCard({
  step,
  title,
  children,
}: {
  step: number
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="section-container">
      <div className="mb-4 flex items-center gap-2">
        <StepBadge step={step} />
        <SectionTitle>{title}</SectionTitle>
      </div>
      {children}
    </section>
  )
}

// ============================================================================
// Main Component
// ============================================================================

export function RoiCalculator() {
  // State for selected solution mode
  const [mode, setMode] = useState<RoiMode>("sales")

  // State for user input values (slider indices)
  const [inputs, setInputs] = useState<RoiInputs>({
    salesRepsIndex: 0,
    distributorsIndex: 0,
    customersIndex: 0,
  })

  // State for results modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State for lead capture modal
  const [isLeadCaptureOpen, setIsLeadCaptureOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Memoized ROI calculation - recalculates when mode or inputs change
  const results = useMemo(() => calculateROI(mode, inputs), [mode, inputs])

  // Handle email submission from lead capture modal
  const handleEmailSubmit = async (email: string) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const modeLabel =
        MODE_OPTIONS.find((o) => o.value === mode)?.label ?? mode
      await sendRoiResults({
        user_email: email,
        mode: modeLabel,
        sales_reps: SALES_REP_RANGES[inputs.salesRepsIndex].label,
        distributors: DISTRIBUTOR_RANGES[inputs.distributorsIndex].label,
        customers: CUSTOMER_RANGES[inputs.customersIndex].label,
        engagement_increase: results.engagementIncrease ?? "N/A",
        product_interest_increase: results.productInterestIncrease ?? "N/A",
        customer_traffic_increase: results.customerTrafficIncrease ?? "N/A",
        admin_hours_saved: results.adminHoursSaved?.toString() ?? "N/A",
        sales_rep_hours_saved: results.salesRepHoursSaved?.toString() ?? "N/A",
      })
      setIsLeadCaptureOpen(false)
      setIsModalOpen(true)
      toast.success("We sent a copy of your ROI to your email!")
    } catch {
      setSubmitError("Failed to send. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-16">
      {/* Step 1: Solution Selection */}
      <StepCard step={1} title="What Solutions are ideal for you?">
        <StepSelector value={mode} onChange={setMode} />
      </StepCard>

      {/* Step 2: Business Metrics Input */}
      <StepCard step={2} title="About your Company">
        <InputForm inputs={inputs} onChange={setInputs} />
      </StepCard>

      {/* CTA Button - Opens Lead Capture Modal */}
      <div className="mt-4 flex justify-center">
        <Button
          variant="default"
          size="lg"
          onClick={() => setIsLeadCaptureOpen(true)}
        >
          View Your Results
          <ArrowRight />
        </Button>
      </div>

      {/* Lead Capture Modal - Collects email before showing results */}
      <LeadCaptureModal
        isOpen={isLeadCaptureOpen}
        onClose={() => setIsLeadCaptureOpen(false)}
        onSubmit={handleEmailSubmit}
        isLoading={isSubmitting}
        error={submitError}
      />

      {/* Results Modal - Displays calculated ROI metrics */}
      <ResultsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={mode}
        inputs={inputs}
        results={results}
      />
    </div>
  )
}

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
import {
  Users,
  Building2,
  UserCheck,
  Zap,
  Check,
  LucideIcon,
} from "lucide-react"
import { BookCallButton } from "../sections/cta/BookCallButton"
import Image from "next/image"

interface Props {
  isOpen: boolean
  onClose: () => void
  mode: RoiMode
  inputs: RoiInputs
  results: RoiResults
}

const CONFIG_BADGES: {
  icon: LucideIcon
  label: string
  getValue: (inputs: RoiInputs) => string
}[] = [
  {
    icon: Users,
    label: "Reps",
    getValue: (i) => SALES_REP_RANGES[i.salesRepsIndex]?.label ?? "—",
  },
  {
    icon: Building2,
    label: "Distributors",
    getValue: (i) => DISTRIBUTOR_RANGES[i.distributorsIndex]?.label ?? "—",
  },
  {
    icon: UserCheck,
    label: "Customers",
    getValue: (i) => CUSTOMER_RANGES[i.customersIndex]?.label ?? "—",
  },
]

const BENEFITS = [
  "Estimates based on results from similar teams",
  "Real-time predictive insights",
  "Optimized campaign execution",
]

export function ResultsModal({
  isOpen,
  onClose,
  mode,
  inputs,
  results,
}: Props) {
  const modeLabel = MODE_OPTIONS.find((o) => o.value === mode)?.label ?? mode

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="flex max-h-[95vh] flex-col gap-0 overflow-hidden rounded-3xl border-none p-0 sm:max-w-2xl lg:max-w-4xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {/* Header */}
        <DialogHeader className="shrink-0 bg-slate-100 px-8 pt-8 pb-6 text-center">
          <DialogTitle className="flex items-center justify-center gap-2 font-bold text-slate-900">
            Your potential with
            <Image
              src="/paygos/logo-full.webp"
              alt="Paygos"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </DialogTitle>
          <DialogDescription className="mt-1 text-center text-slate-500">
            Based on your setup, here&apos;s the impact we can deliver.
          </DialogDescription>
        </DialogHeader>

        {/* Body */}
        <div className="custom-scrollbar flex-1 space-y-6 overflow-y-auto px-8 pb-6">
          {/* Configuration Summary */}
          <section className="rounded-xl bg-slate-50 px-5 py-4">
            <p className="mb-3 text-center text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Your Configuration
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge className="gap-1.5 border-none bg-teal-500 px-3 py-1.5 text-sm font-semibold text-white">
                <Zap className="size-4" />
                {modeLabel}
              </Badge>
              {CONFIG_BADGES.map(({ icon: Icon, label, getValue }) => (
                <Badge
                  key={label}
                  variant="outline"
                  className="gap-1.5 border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
                >
                  <Icon className="size-4 text-slate-400" />
                  {label}
                  <span className="font-semibold text-slate-900">
                    {getValue(inputs)}
                  </span>
                </Badge>
              ))}
            </div>
          </section>

          {/* Results Grid */}
          <ResultsPanel results={results} mode={mode} />

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            {BENEFITS.map((text) => (
              <span key={text} className="flex items-center gap-1.5">
                <Check className="size-4 text-teal-500" />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="shrink-0 border-t border-slate-100 bg-slate-100 px-8 py-4 text-center">
          <h4 className="text-lg font-bold text-slate-900">
            Ready to accelerate your sales?
          </h4>
          <p className="mt-1 text-sm text-slate-500">
            Book a quick call to walk through these numbers.
          </p>
          <div className="mt-4">
            <span className="inline-block transition-transform hover:scale-105">
              <BookCallButton />
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            No commitment • 30 min chat
          </p>
        </footer>
      </DialogContent>
    </Dialog>
  )
}

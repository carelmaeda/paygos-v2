/**
 * StepSelector - Solution Type Selection Component
 *
 * Displays a grid of card-based radio inputs for selecting the ROI calculation mode.
 * Users can choose between:
 * - Sales Acceleration: Inside sales tools
 * - Field Sales Automation: Outside sales optimization
 * - Both: Combined solution suite
 *
 * Features:
 * - Glassmorphism card design with backdrop blur
 * - Responsive 3-column grid (stacks on mobile)
 * - Tooltips with additional information for each option
 * - Visual feedback on selection (ring highlight)
 */
"use client"

import Image from "next/image"
import { RoiMode } from "./types"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Zap, MapPin, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// ============================================================================
// Types
// ============================================================================

interface Props {
  value: RoiMode
  onChange: (value: RoiMode) => void
}

interface SolutionOption {
  value: RoiMode
  icon?: LucideIcon
  imageSrc?: string
  title: string
  description: string
}

// ============================================================================
// Configuration - Solution options data
// ============================================================================

const SOLUTION_OPTIONS: SolutionOption[] = [
  // {
  //   value: "both",
  //   imageSrc: "/icons/paygos-icon-black.svg",
  //   title: "Paygos Full",
  //   description: "The complete suite for both inside and outside sales.",
  // },
  {
    value: "sales",
    icon: Zap,
    title: "Sales Acceleration",
    description:
      "Intelligent tools that streamline ordering, payments, and customer engagement.",
  },
  {
    value: "fsa",
    icon: MapPin,
    title: "Field Sales Automation",
    description: "Optimize routes and manage territories in real-time.",
  },
]

// ============================================================================
// Main Component
// ============================================================================

export function StepSelector({ value, onChange }: Props) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(val) => onChange(val as RoiMode)}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      {SOLUTION_OPTIONS.map((option) => {
        const Icon = option.icon
        const isSelected = value === option.value

        return (
          <Label
            key={option.value}
            htmlFor={option.value}
            className={cn(
              // Base card styles
              "relative cursor-pointer rounded-lg p-5 transition-all duration-200",
              // Glassmorphism effect
              "ring-1 ring-black/10",
              // Hover state
              "hover:bg-white/80 hover:shadow-md",
              // Selected state - teal ring highlight
              isSelected && "bg-teal-100 shadow-lg ring-2 ring-teal-500"
            )}
          >
            {/* Radio Button - Positioned top-left */}
            <RadioGroupItem
              value={option.value}
              id={option.value}
              className={cn(
                "absolute top-4 left-4",
                isSelected && "border-teal-500 text-teal-500"
              )}
            />

            {/* Card Content */}
            <div className="ml-6 space-y-3">
              {/* Header Row: Icon + Title + Info Tooltip */}
              <div className="flex items-center gap-2">
                {/* Icon - Either custom image or Lucide icon */}
                {option.imageSrc ? (
                  <Image
                    src={option.imageSrc}
                    alt=""
                    width={20}
                    height={20}
                    className="h-4 w-4"
                  />
                ) : Icon ? (
                  <Icon className="h-4 w-4 text-black" />
                ) : null}

                {/* Title */}
                <h5 className="font-semibold">{option.title}</h5>
              </div>

              {/* Description Text */}
              <p className="text-xs font-normal text-gray-600">
                {option.description}
              </p>
            </div>
          </Label>
        )
      })}
    </RadioGroup>
  )
}

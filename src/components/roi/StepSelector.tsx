"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { RoiMode } from "./types"

interface Props {
  value: RoiMode
  onChange: (value: RoiMode) => void
}

export function StepSelector({ value, onChange }: Props) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(val) => val && onChange(val as RoiMode)}
      variant="outline"
      spacing={2}
      className="justify-start"
    >
      <ToggleGroupItem value="sales" className="min-w-[140px]">
        Sales Acceleration
      </ToggleGroupItem>
      <ToggleGroupItem value="fsa" className="min-w-[140px]">
        FSA
      </ToggleGroupItem>
      <ToggleGroupItem value="both" className="min-w-[140px]">
        Both
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { RoiMode } from "./types"

interface Props {
  value: RoiMode
  onChange: (value: RoiMode) => void
}

export function StepSelector({ value, onChange }: Props) {
  const itemClass =
    "min-w-[140px] data-[state=on]:bg-teal-600 data-[state=on]:text-white data-[state=on]:border-teal-600"

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(val) => val && onChange(val as RoiMode)}
      variant="outline"
      spacing={2}
      className="justify-start"
    >
      <ToggleGroupItem value="sales" className={itemClass}>
        Sales Acceleration
      </ToggleGroupItem>
      <ToggleGroupItem value="fsa" className={itemClass}>
        FSA
      </ToggleGroupItem>
      <ToggleGroupItem value="both" className={itemClass}>
        Both
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

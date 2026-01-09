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
      className="justify-start"
    >
      <ToggleGroupItem value="sales">Sales Acceleration</ToggleGroupItem>
      <ToggleGroupItem value="fsa">FSA</ToggleGroupItem>
      <ToggleGroupItem value="both">Both</ToggleGroupItem>
    </ToggleGroup>
  )
}

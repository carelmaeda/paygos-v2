"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RoiInputs } from "./types"

interface Props {
  inputs: RoiInputs
  onChange: (inputs: RoiInputs) => void
}

export function InputForm({ inputs, onChange }: Props) {
  const handle =
    (key: keyof RoiInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange({
        ...inputs,
        [key]: Number(e.target.value) || 0,
      })

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
      <div className="space-y-1.5">
        <Label className="text-sm"># of Sales Reps</Label>
        <Input
          type="number"
          value={inputs.salesReps || ""}
          onChange={handle("salesReps")}
          className="h-9"
        />
      </div>

      <div className="space-y-1.5">
        <Label className="text-sm"># of Customers</Label>
        <Input
          type="number"
          value={inputs.customers || ""}
          onChange={handle("customers")}
          className="h-9"
        />
      </div>

      <div className="space-y-1.5">
        <Label className="text-sm"># of Distributors</Label>
        <Input
          type="number"
          value={inputs.distributors || ""}
          onChange={handle("distributors")}
          className="h-9"
        />
      </div>

      <div className="space-y-1.5">
        <Label className="text-sm">Corporate Spend / Month ($)</Label>
        <Input
          type="number"
          value={inputs.monthlySpend || ""}
          onChange={handle("monthlySpend")}
          className="h-9"
        />
      </div>
    </div>
  )
}

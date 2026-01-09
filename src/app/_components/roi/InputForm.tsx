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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <Label># of Sales Reps</Label>
        <Input type="number" onChange={handle("salesReps")} />
      </div>

      <div>
        <Label># of Customers</Label>
        <Input type="number" onChange={handle("customers")} />
      </div>

      <div>
        <Label># of Distributors</Label>
        <Input type="number" onChange={handle("distributors")} />
      </div>

      <div>
        <Label>Corporate Spend / Month ($)</Label>
        <Input type="number" onChange={handle("monthlySpend")} />
      </div>
    </div>
  )
}

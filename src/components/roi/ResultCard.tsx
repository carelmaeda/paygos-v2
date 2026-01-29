"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info, LucideIcon } from "lucide-react"

interface Props {
  label: string
  value: string
  tooltip: string
  icon: LucideIcon
}

export function ResultCard({ label, value, tooltip, icon: Icon }: Props) {
  return (
    <article className="group relative flex flex-1 flex-col justify-between rounded-2xl p-5 ring-1 ring-black/10 transition-all hover:bg-teal-100 hover:ring-teal-300">
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full p-1"
          >
            <Info className="size-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs p-3 text-sm shadow-lg">
          {tooltip}
        </TooltipContent>
      </Tooltip>

      <span className="mb-4 flex size-10 items-center justify-center rounded-xl bg-slate-200">
        <Icon className="size-4" />
      </span>

      <p className="text-sm font-medium">{label}</p>
      <p className="mt-1 text-3xl font-black tracking-tight">{value}</p>
    </article>
  )
}

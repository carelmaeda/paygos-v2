"use client"

import { MapPin } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const CHART_DATA = [
  { territory: "North", target: 120, actual: 135 },
  { territory: "South", target: 100, actual: 95 },
  { territory: "East", target: 110, actual: 118 },
  { territory: "West", target: 90, actual: 92 },
  { territory: "Central", target: 105, actual: 112 },
  { territory: "Coastal", target: 95, actual: 88 },
]

const CHART_CONFIG = {
  target: {
    label: "Target Visits",
    color: "#cbd5e1",
  },
  actual: {
    label: "Actual Visits",
    color: "#0891b2",
  },
} satisfies ChartConfig

export function FsaCoverageChart() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-50 p-6 shadow-xl md:p-12">
      <div className="mb-8 flex items-center justify-between text-xs font-black uppercase">
        <small className="text-cyan-600">Territory Visit Coverage</small>
        <MapPin className="text-cyan-600" size={20} />
      </div>
      <ChartContainer
        id="fsa-coverage"
        config={CHART_CONFIG}
        className="h-[280px] w-full min-w-0 md:h-[400px]"
      >
        <BarChart data={CHART_DATA} layout="vertical" margin={{ left: 30 }}>
          <CartesianGrid horizontal={false} stroke="#f8fafc" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="territory"
            type="category"
            tickLine={false}
            tickMargin={15}
            axisLine={false}
            tick={{ fill: "#475569", fontSize: 13, fontWeight: 900 }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="rounded-lg bg-slate-950 text-white"
                formatter={(val) => (
                  <span className="font-black text-cyan-400">{val} visits</span>
                )}
              />
            }
          />
          <Bar
            dataKey="target"
            fill="#cbd5e1"
            radius={[0, 8, 8, 0]}
            barSize={30}
          />
          <Bar
            dataKey="actual"
            fill="#0891b2"
            radius={[0, 8, 8, 0]}
            barSize={30}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

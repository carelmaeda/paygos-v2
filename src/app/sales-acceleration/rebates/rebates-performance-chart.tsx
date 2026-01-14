"use client"

import { TrendingUp } from "lucide-react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const CHART_DATA = [
  { month: "Jan", tier1: 12500, tier2: 8200, tier3: 4800 },
  { month: "Feb", tier1: 15200, tier2: 9800, tier3: 5200 },
  { month: "Mar", tier1: 18500, tier2: 11200, tier3: 6100 },
  { month: "Apr", tier1: 21000, tier2: 12800, tier3: 6800 },
  { month: "May", tier1: 24500, tier2: 14500, tier3: 7500 },
  { month: "Jun", tier1: 28200, tier2: 16800, tier3: 8400 },
]

const CHART_CONFIG = {
  tier1: {
    label: "Platinum Tier",
    color: "#10b981",
  },
  tier2: {
    label: "Gold Tier",
    color: "#06b6d4",
  },
  tier3: {
    label: "Silver Tier",
    color: "#8b5cf6",
  },
} satisfies ChartConfig

export function RebatesPerformanceChart() {
  return (
    <div className="rounded-[4rem] border border-slate-50 bg-white p-12 shadow-xl">
      <div className="mb-12 flex items-center justify-between text-xs font-black tracking-widest uppercase">
        <span>Rebate Program Performance</span>
        <TrendingUp className="text-emerald-500" size={20} />
      </div>
      <ChartContainer id="rebates-performance" config={CHART_CONFIG} className="h-[400px] w-full">
        <LineChart
          data={CHART_DATA}
          margin={{ left: 12, right: 12, top: 12 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: "#475569", fontSize: 13, fontWeight: 900 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: "#475569", fontSize: 13, fontWeight: 900 }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="rounded-2xl bg-slate-950 text-white"
                formatter={(val) => (
                  <span className="font-black text-teal-400">
                    ${Number(val).toLocaleString()}
                  </span>
                )}
              />
            }
          />
          <Line
            type="monotone"
            dataKey="tier1"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ fill: "#10b981", r: 5 }}
            activeDot={{ r: 7, fill: "#34d399" }}
          />
          <Line
            type="monotone"
            dataKey="tier2"
            stroke="#06b6d4"
            strokeWidth={3}
            dot={{ fill: "#06b6d4", r: 5 }}
            activeDot={{ r: 7, fill: "#22d3ee" }}
          />
          <Line
            type="monotone"
            dataKey="tier3"
            stroke="#8b5cf6"
            strokeWidth={3}
            dot={{ fill: "#8b5cf6", r: 5 }}
            activeDot={{ r: 7, fill: "#a78bfa" }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}

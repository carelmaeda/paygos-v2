"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const CHART_DATA = [
  { month: "Jan", damaged: 45, expired: 28, overstock: 15, other: 12 },
  { month: "Feb", damaged: 38, expired: 32, overstock: 18, other: 10 },
  { month: "Mar", damaged: 42, expired: 25, overstock: 20, other: 15 },
  { month: "Apr", damaged: 35, expired: 30, overstock: 16, other: 14 },
  { month: "May", damaged: 40, expired: 27, overstock: 19, other: 11 },
  { month: "Jun", damaged: 33, expired: 29, overstock: 17, other: 13 },
]

const CHART_CONFIG = {
  damaged: {
    label: "Damaged",
    color: "#14b8a6",
  },
  expired: {
    label: "Expired",
    color: "#0d9488",
  },
  overstock: {
    label: "Overstock",
    color: "#0f766e",
  },
  other: {
    label: "Other",
    color: "#115e59",
  },
} satisfies ChartConfig

export function ReturnsTrendChart() {
  return (
    <div className="rounded-[4rem] border border-slate-50 bg-white p-12 shadow-xl">
      <div className="mb-12 flex items-center justify-between text-xs font-black tracking-widest uppercase">
        <span>Returns Trend Analysis</span>
        <TrendingUp className="text-emerald-500" size={20} />
      </div>
      <ChartContainer config={CHART_CONFIG} className="h-[400px] w-full">
        <AreaChart
          data={CHART_DATA}
          margin={{ left: 12, right: 12, top: 12 }}
        >
          <defs>
            <linearGradient id="fillDamaged" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillExpired" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0d9488" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0d9488" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillOverstock" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0f766e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0f766e" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillOther" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#115e59" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#115e59" stopOpacity={0.1} />
            </linearGradient>
          </defs>
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
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="rounded-2xl bg-slate-950 text-white"
                formatter={(val, name) => (
                  <span className="font-black text-teal-400">
                    {val} returns
                  </span>
                )}
              />
            }
          />
          <Area
            type="monotone"
            dataKey="damaged"
            stackId="1"
            stroke="#14b8a6"
            fill="url(#fillDamaged)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="expired"
            stackId="1"
            stroke="#0d9488"
            fill="url(#fillExpired)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="overstock"
            stackId="1"
            stroke="#0f766e"
            fill="url(#fillOverstock)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="other"
            stackId="1"
            stroke="#115e59"
            fill="url(#fillOther)"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}

"use client"

import { ShoppingCart } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const CHART_DATA = [
  { category: "Beverages", total: 450, fulfilled: 425 },
  { category: "Snacks", total: 380, fulfilled: 360 },
  { category: "Pharmacy", total: 320, fulfilled: 310 },
  { category: "Grocery", total: 290, fulfilled: 275 },
  { category: "Personal Care", total: 240, fulfilled: 235 },
]

const CHART_CONFIG = {
  total: {
    label: "Total Orders",
    color: "#14b8a6",
  },
  fulfilled: {
    label: "Fulfilled",
    color: "#10b981",
  },
} satisfies ChartConfig

export function OrderingVolumeChart() {
  return (
    <div className="rounded-[4rem] border border-slate-50 bg-white p-12 shadow-xl">
      <div className="mb-12 flex items-center justify-between text-xs font-black tracking-widest uppercase">
        <span>Order Volume by Category</span>
        <ShoppingCart className="text-emerald-500" size={20} />
      </div>
      <ChartContainer id="ordering-volume" config={CHART_CONFIG} className="h-[400px] w-full">
        <BarChart
          data={CHART_DATA}
          margin={{ left: 12, right: 12, top: 12, bottom: 12 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={{ fill: "#475569", fontSize: 12, fontWeight: 900 }}
            angle={-45}
            textAnchor="end"
            height={80}
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
                    {val} orders
                  </span>
                )}
              />
            }
          />
          <Bar
            dataKey="total"
            fill="#14b8a6"
            radius={[8, 8, 0, 0]}
            barSize={60}
          />
          <Bar
            dataKey="fulfilled"
            fill="#10b981"
            radius={[8, 8, 0, 0]}
            barSize={60}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

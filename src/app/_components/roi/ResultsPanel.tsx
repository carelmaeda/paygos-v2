import { Card, CardContent } from "@/components/ui/card"
import { RoiResults } from "./types"

interface Props {
  results: RoiResults
}

export function ResultsPanel({ results }: Props) {
  const stats = [
    { label: "Customer Engagement ↑", value: `${results.engagementIncrease}%` },
    { label: "Sales Increase", value: `$${results.salesIncrease}` },
    {
      label: "Product Interest ↑",
      value: `${results.productInterestIncrease}%`,
    },
    {
      label: "Customer Traffic ↑",
      value: `${results.customerTrafficIncrease}%`,
    },
    { label: "Admin Hours Saved", value: `${results.adminHoursSaved} hrs` },
    {
      label: "Sales Rep Hours Saved",
      value: `${results.salesRepHoursSaved} hrs`,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-6">
            <p className="text-muted-foreground text-sm">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

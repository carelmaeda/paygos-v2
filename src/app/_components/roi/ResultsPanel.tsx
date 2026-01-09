import { Card, CardContent } from "@/components/ui/card"
import { RoiMode, RoiResults } from "./types"

interface Props {
  results: RoiResults
  mode: RoiMode
}

// ============================================
// VISIBILITY LOGIC
// ============================================

function shouldShowIndicator(indicator: string, mode: RoiMode): boolean {
  const visibilityRules = {
    sales: [
      "engagementIncrease",
      "salesIncrease",
      "productInterestIncrease",
      "customerTrafficIncrease",
      "adminHoursSaved",
    ],
    fsa: ["adminHoursSaved", "salesRepHoursSaved"],
    both: [
      "engagementIncrease",
      "salesIncrease",
      "productInterestIncrease",
      "customerTrafficIncrease",
      "adminHoursSaved",
      "salesRepHoursSaved",
    ],
  }
  return visibilityRules[mode].includes(indicator)
}

// ============================================
// COMPONENT
// ============================================

export function ResultsPanel({ results, mode }: Props) {
  return (
    <div className="grid auto-cols-fr grid-flow-col gap-3 overflow-x-auto">
      {/* Improve Customer Engagement by */}
      {shouldShowIndicator("engagementIncrease", mode) &&
        results.engagementIncrease && (
          <Card>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">
                Improve Customer Engagement by
              </p>
              <p className="mt-1 text-2xl font-bold">
                {results.engagementIncrease}
              </p>
            </CardContent>
          </Card>
        )}

      {/* Sales Increase of */}
      {shouldShowIndicator("salesIncrease", mode) && results.salesIncrease && (
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Sales Increase of</p>
            <p className="mt-1 text-2xl font-bold">{results.salesIncrease}</p>
          </CardContent>
        </Card>
      )}

      {/* Increase Interest in Products by */}
      {shouldShowIndicator("productInterestIncrease", mode) &&
        results.productInterestIncrease && (
          <Card>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">
                Increase Interest in Products by
              </p>
              <p className="mt-1 text-2xl font-bold">
                {results.productInterestIncrease}
              </p>
            </CardContent>
          </Card>
        )}

      {/* Improve Customer Traffic by */}
      {shouldShowIndicator("customerTrafficIncrease", mode) &&
        results.customerTrafficIncrease && (
          <Card>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">
                Improve Customer Traffic by
              </p>
              <p className="mt-1 text-2xl font-bold">
                {results.customerTrafficIncrease}
              </p>
            </CardContent>
          </Card>
        )}

      {/* Administration Saved */}
      {shouldShowIndicator("adminHoursSaved", mode) &&
        results.adminHoursSaved !== undefined && (
          <Card>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">
                Administration Saved
              </p>
              <p className="mt-1 text-2xl font-bold">
                {results.adminHoursSaved}{" "}
                <span className="text-base">Hours / Week</span>
              </p>
            </CardContent>
          </Card>
        )}

      {/* Hours Saved */}
      {shouldShowIndicator("salesRepHoursSaved", mode) &&
        results.salesRepHoursSaved !== undefined && (
          <Card>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">Hours Saved</p>
              <p className="mt-1 text-2xl font-bold">
                {results.salesRepHoursSaved}{" "}
                <span className="text-base">Hours / Week</span>
              </p>
            </CardContent>
          </Card>
        )}
    </div>
  )
}

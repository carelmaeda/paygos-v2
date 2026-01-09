import { RoiCalculator } from "../_components/roi/RoiCalculator"

export const metadata = {
  title: "ROI Calculator",
  description: "Estimate ROI from Sales Acceleration and FSA solutions",
}

export default function RoiPage() {
  return (
    <main className="bg-muted/40 min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">ROI Calculator</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Estimate your return on investment by selecting your solution type
            and entering your business metrics.
          </p>
        </div>

        {/* Calculator */}
        <RoiCalculator />
      </section>
    </main>
  )
}

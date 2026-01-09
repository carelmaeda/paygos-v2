import { RoiCalculator } from "../_components/roi/RoiCalculator"
import Image from "next/image"

export const metadata = {
  title: "ROI Calculator",
  description: "Estimate ROI from Sales Acceleration and FSA solutions",
}

export default function RoiPage() {
  return (
    <main className="min-h-screen bg-muted/40">
      <section className="relative mx-auto max-w-6xl px-6 py-6">
        {/* Hero Background */}
        <div className="absolute left-0 right-0 top-0 -z-10 h-48 overflow-hidden opacity-10">
          <Image
            src="/paygos-hero.svg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Header */}
        <div className="mb-6 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight">ROI Calculator</h1>
          <p className="mt-2 text-base text-muted-foreground">
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

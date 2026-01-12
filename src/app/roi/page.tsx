import type { Metadata } from "next"
import { RoiCalculator } from "../_components/roi/RoiCalculator"
import Image from "next/image"

export const metadata: Metadata = {
  title: "ROI Calculator | Paygos",
  description: "Calculate your return on investment from Paygos sales automation solutions. Estimate savings from Sales Acceleration and Field Sales Automation platforms.",
  keywords: ["ROI calculator", "sales automation ROI", "field sales ROI", "sales acceleration", "investment calculator", "business savings"],
  openGraph: {
    title: "ROI Calculator | Paygos",
    description: "Calculate your return on investment from Paygos sales automation solutions. Estimate savings from Sales Acceleration and Field Sales Automation platforms.",
    url: "https://www.paygos.ca/roi",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos ROI Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROI Calculator | Paygos",
    description: "Calculate your return on investment from Paygos sales automation solutions. Estimate savings from Sales Acceleration and Field Sales Automation platforms.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/roi",
  },
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

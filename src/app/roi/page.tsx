import type { Metadata } from "next"
import { RoiCalculator } from "@/components/roi/RoiCalculator"
import { PatternDots } from "@/components/ui/patterns"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata: Metadata = {
  title: "ROI Calculator | Paygos",
  description:
    "Calculate your return on investment from Paygos sales automation solutions. Estimate savings from Sales Acceleration and Field Sales Automation platforms.",
  keywords: [
    "ROI calculator",
    "sales automation ROI",
    "field sales ROI",
    "sales acceleration",
    "investment calculator",
    "business savings",
  ],
  openGraph: {
    title: "ROI Calculator | Paygos",
    description:
      "Calculate your return on investment from Paygos sales automation solutions. Estimate savings from Sales Acceleration and Field Sales Automation platforms.",
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
    description:
      "Calculate your return on investment from Paygos sales automation solutions. Estimate savings from Sales Acceleration and Field Sales Automation platforms.",
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
    <main className="min-h-screen bg-slate-100">
      {/* Hero */}
      <section className="hero-sm bg-emerald-950" data-navbar-theme="dark">
        <PatternDots />
        <div className="text-hero">
          <small className="text-teal-400">Measure Your Investment</small>
          <h1>
            Calculate {""}
            <span className="text-highlight">Your ROI</span>
          </h1>
          <p>
            See the real impact of Paygos on your business. Enter your metrics
            to uncover potential savings, efficiency gains, and growth
            opportunities.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Calculator Section */}
      <section className="section-container py-16" data-navbar-theme="light">
        <h3 className="mb-6 text-center">
          Select the ideal solutions and enter your business metrics to see
          potential returns.
        </h3>
        <RoiCalculator />
      </section>
    </main>
  )
}

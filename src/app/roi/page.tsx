import type { Metadata } from "next"
import { CTA } from "@/components/sections/cta/CTA"
import { RoiCalculator } from "@/components/roi/RoiCalculator"
import { TrendingUp, Clock, DollarSign } from "lucide-react"
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
    <main>
      {/* Hero */}
      <section
        className="relative flex min-h-[75vh] bg-cyan-950"
        data-navbar-theme="dark"
      >
        <PatternDots />
        <div className="text-hero">
          <small className="text-teal-400">Measure Your Investment</small>
          <h1>
            Calculate
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Your ROI
            </span>
          </h1>
          <p>
            See the real impact of Paygos on your business. Enter your metrics
            to uncover potential savings, efficiency gains, and growth
            opportunities.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Value Props */}
      <section className="section-container py-12" data-navbar-theme="light">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100">
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Increase Sales</h3>
              <p className="text-sm text-slate-600">
                Drive revenue growth with automation
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100">
              <Clock className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Save Time</h3>
              <p className="text-sm text-slate-600">
                Reduce admin hours every week
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100">
              <DollarSign className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Cut Costs</h3>
              <p className="text-sm text-slate-600">
                Lower operational expenses significantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section
        className="section-container bg-slate-50 py-16"
        data-navbar-theme="light"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Estimate Your Savings
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Select your solution type and enter your business metrics to see
              potential returns.
            </p>
          </div>
          <RoiCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section data-navbar-theme="light">
        <CTA />
      </section>
    </main>
  )
}

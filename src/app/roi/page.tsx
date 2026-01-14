import type { Metadata } from "next"
import Image from "next/image"
import { CTA } from "@/components/sections/cta/CTA"
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react"

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[50vh] items-center overflow-hidden bg-slate-950 pt-32 pb-16"
        data-navbar-theme="dark"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
            alt="ROI Calculator"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/20 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-teal-300 uppercase backdrop-blur-md">
              <Calculator size={14} />
              Measure Your Investment
            </div>
            <h1 className="mb-8 text-5xl leading-[0.9] font-black tracking-tighter text-white md:text-8xl">
              CALCULATE <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                YOUR ROI.
              </span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-300 md:text-2xl">
              See the real impact of Paygos on your business. Enter your metrics
              and discover potential savings and growth opportunities.
            </p>
          </div>
        </div>
      </section>

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
        </div>
      </section>

      {/* CTA Section */}
      <section data-navbar-theme="light">
        <CTA />
      </section>
    </main>
  )
}

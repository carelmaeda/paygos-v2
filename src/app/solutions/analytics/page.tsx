import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle,
  Target,
  ShieldCheck,
  Eye,
  TrendingUp,
  FileCheck,
  PieChart,
  DollarSign,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Data & Analytics | Paygos",
  description: "Transform data into strategy with Paygos analytics for CPG brands in independent retail. Real-time dashboards, sales insights, inventory tracking, and customer analytics.",
  keywords: ["sales analytics", "data analytics", "CPG analytics", "retail insights", "sales dashboards", "inventory tracking", "customer analytics", "business intelligence"],
  openGraph: {
    title: "Data & Analytics | Paygos",
    description: "Transform data into strategy with Paygos analytics for CPG brands in independent retail. Real-time dashboards, sales insights, inventory tracking, and customer analytics.",
    url: "https://www.paygos.ca/solutions/analytics",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Data & Analytics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data & Analytics | Paygos",
    description: "Transform data into strategy with Paygos analytics for CPG brands in independent retail. Real-time dashboards, sales insights, inventory tracking, and customer analytics.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/solutions/analytics",
  },
}

export default function ReturnsPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-20 text-center md:mb-28">
          <h2 className="mx-auto mb-6 max-w-4xl text-2xl font-bold text-gray-900 md:text-4xl">
            Data & Analytics for CPG Brands in Independent Retail
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            Transform Data into Strategy With Paygos. Bring structure and
            clarity to the complexity of independent retail.
          </p>

          <div className="relative mx-auto mb-10 h-64 w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-r from-teal-500 to-blue-600 md:h-96">
            {/* Placeholder for dashboard graphic */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid w-full grid-cols-1 gap-4 p-8 md:grid-cols-3">
                <div className="rounded-xl border border-white/30 bg-white/20 p-4 backdrop-blur-sm">
                  <div className="mb-2 h-32 rounded-lg bg-white/30"></div>
                  <div className="mx-auto h-4 w-3/4 rounded bg-white/40"></div>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/20 p-4 backdrop-blur-sm">
                  <div className="mb-2 h-40 rounded-lg bg-white/30"></div>
                  <div className="mx-auto h-4 w-2/3 rounded bg-white/40"></div>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/20 p-4 backdrop-blur-sm">
                  <div className="mb-2 h-24 rounded-lg bg-white/30"></div>
                  <div className="mx-auto h-4 w-4/5 rounded bg-white/40"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-teal-700 hover:shadow-xl"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#discovery"
              className="inline-flex items-center justify-center rounded-lg border-2 border-teal-600 bg-white px-8 py-4 font-semibold text-teal-700 transition-colors hover:bg-gray-50"
            >
              Book a Discovery Call
            </Link>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="mb-20 md:mb-28">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              The Challenge
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Selling into convenience stores, fuel stations, and independent
              pharmacies is messy — with fragmented data, limited visibility,
              and inconsistent retail execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
                <Eye className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Execution is Hard to Confirm
              </h3>
              <p className="text-gray-600">
                Without reliable retail-level data, verifying promotions,
                plonograms, and display execution is guesswork.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Returns Lack Clarity and Oversight
              </h3>
              <p className="text-gray-600">
                Excess returns go unchecked, causing margin erosion and limiting
                feedback loops for product performance.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <FileCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Data Inputs are Inconsistent
              </h3>
              <p className="text-gray-600">
                Independent retailers don&apos;t follow uniform reporting
                standards, leading to unreliable or incomplete insights.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Incentive Budgets Are Hard to Track
              </h3>
              <p className="text-gray-600">
                Honorariums, rebates, and in-store incentives are often paid
                manually, making them difficult to reconcile or audit.
              </p>
            </div>
          </div>
        </section>

        {/* How Paygos Helps CPG Section */}
        <section className="mb-20 md:mb-28">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              How Paygos Helps CPG
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Empowering CPG brands with a robust Data & Analytics platform that
              brings fragmented retail into focus.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                      <CheckCircle className="h-7 w-7 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Consistent, Centralized Data Aggregation
                    </h3>
                    <p className="text-gray-600">
                      Consolidate field and sales data from multiple third-party
                      service providers and retailers. Standardize data inputs
                      across retailers, channels and geographies. Reduce manual
                      consolidation and gain a single source of truth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                      <PieChart className="h-7 w-7 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Returns Management Insights
                    </h3>
                    <p className="text-gray-600">
                      Monitor product returns at the SKU and store level. Spot
                      patterns tied to package, underperformance, or pricing
                      misalignment to reduce financial waste and improve
                      planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                      <Target className="h-7 w-7 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Retail Execution & Field Performance Dashboards
                    </h3>
                    <p className="text-gray-600">
                      Track promotional compliance, trends, and field rep
                      effectiveness at a granular level. Equip sales and
                      marketing with the visibility to course-correct and
                      maximize campaign ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                      <ShieldCheck className="h-7 w-7 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Incentive Budget Management
                    </h3>
                    <p className="text-gray-600">
                      Paygos ensures every dollar of your incentive budget is
                      tied to performance. Our secure, validated payout process
                      includes built-in approvals, daily reconciliation, and
                      audit readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-full rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 p-8">
                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    What You Get With Paygos
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-white">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span>
                        End-to-end visibility across independent retail
                      </span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span>Validated, traceable trade spend disbursement</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span>
                        Store-level insights to improve product execution
                      </span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span>
                        Returns tracking to reduce write-offs and improve
                        accuracy
                      </span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span>
                        Self-serve dashboards for field teams and HQ leadership
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="demo" className="mb-20 text-center">
          <div className="rounded-3xl bg-gradient-to-r from-teal-600 to-blue-700 p-12 md:p-16">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Streamline Data. Power Decisions. Prove ROI.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-teal-100">
              Paygos gives sales teams an unfair advantage. Sell More. Spend
              Less.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-teal-700 shadow-lg transition-colors hover:bg-gray-100 hover:shadow-xl"
              >
                Request a Demo
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <Link
                href="/discovery"
                id="discovery"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-lg font-semibold text-teal-700 hover:text-teal-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

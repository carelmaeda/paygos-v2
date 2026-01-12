"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ShieldCheck,
  PieChart,
  Wallet,
  History,
  CheckCircle,
  Smartphone,
  AlertCircle,
  TrendingDown,
  FileSearch,
  Shield,
  TrendingUp,
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { CTA } from "@/app/_components/sections/cta/CTA"
import { IndustryBadge } from "@/app/_components/sections/solutions/IndustryBadge"
import { BookCallButton } from "@/app/_components/sections/cta/BookCallButton"

// --- Constants & Configuration ---

const CHART_DATA = [
  { reason: "Display", amount: 1800 },
  { reason: "Incentive", amount: 1200 },
  { reason: "Credit", amount: 600 },
]

const CHART_CONFIG = {
  amount: {
    label: "Payment Amount",
    color: "#10b981",
  },
} satisfies ChartConfig

// --- Main Page Component ---

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* SECTION: Hero & Background */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-950 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
            alt="Security"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-emerald-300 uppercase backdrop-blur-md">
              Reliable Results • Real-Time Insights
            </div>
            <h1 className="mb-10 text-6xl leading-[0.9] font-black tracking-tighter text-white md:text-9xl">
              RETHINK <br />{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                PAYMENTS.
              </span>
            </h1>
            <p className="mb-12 max-w-2xl text-xl leading-relaxed font-medium text-slate-300 md:text-2xl">
              Modern tools to validate incentives, manage budgets, and ensure
              compliance in one unified platform.
            </p>
            <BookCallButton />
          </div>
        </div>
      </section>

      {/* SECTION: Challenges */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-black text-slate-900">
          Common Payment Challenges
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Challenge 1 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Manual Payment Processing
            </h3>
            <p className="text-gray-600">
              Validating incentive execution requires manual verification,
              leading to delays and errors
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Budget Overruns
            </h3>
            <p className="text-gray-600">
              Without spending limits, promotional budgets frequently exceed
              allocation
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <FileSearch className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Payment Reconciliation
            </h3>
            <p className="text-gray-600">
              Tracking EFT payments across multiple retailers creates
              reconciliation nightmares
            </p>
          </div>

          {/* Challenge 4 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Compliance Issues
            </h3>
            <p className="text-gray-600">
              Audit trails are incomplete, making compliance verification
              difficult
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: Payment Capabilities - Bento Grid */}
      <section
        className="mx-auto mb-24 max-w-5xl px-4"
        role="region"
        aria-labelledby="payment-capabilities"
      >
        <h2 id="payment-capabilities" className="sr-only">
          Payment Management Capabilities
        </h2>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Automated Validation */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="automated-validation"
            aria-describedby="automated-validation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1556742111-a301076d9d18"
              alt="Automated payment validation"
              fill
            />
            <div>
              <ShieldCheck size={32} aria-hidden="true" />
              <h3 id="automated-validation" className="md:text-3xl">
                Automated Validation
              </h3>
              <p
                id="automated-validation-desc"
                className="md:max-w-lg md:text-lg"
              >
                Upload proof of execution via mobile, trigger automated
                validation, and approve EFT payments instantly.
              </p>
            </div>
          </article>

          {/* Card 2 - Budget Control */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="budget-control"
            aria-describedby="budget-control-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
              alt="Budget control and spending limits"
              fill
            />
            <div>
              <Wallet size={32} aria-hidden="true" />
              <h3 id="budget-control">Spending Limits</h3>
              <p id="budget-control-desc">
                Set promotional budgets and approval thresholds to prevent
                overruns.
              </p>
            </div>
          </article>

          {/* Card 3 - Real-Time Tracking */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="real-time-tracking"
            aria-describedby="real-time-tracking-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Real-time payment tracking"
              fill
            />
            <div>
              <History size={32} aria-hidden="true" />
              <h3 id="real-time-tracking">Real-Time Activity</h3>
              <p id="real-time-tracking-desc">
                Track all payments from submission to EFT processing with
                complete transparency.
              </p>
            </div>
          </article>

          {/* Card 4 - Mobile Validation */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="mobile-validation"
            aria-describedby="mobile-validation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8"
              alt="Mobile payment validation"
              fill
            />
            <div>
              <Smartphone size={32} aria-hidden="true" />
              <h3 id="mobile-validation" className="md:text-3xl">
                Mobile-First Validation
              </h3>
              <p id="mobile-validation-desc" className="md:max-w-lg md:text-lg">
                Field reps capture execution proof on their phones, triggering
                instant payment workflows.
              </p>
            </div>
          </article>

          {/* Card 5 - Compliance & Audit */}
          <article
            className="bento-card md:col-span-3"
            role="group"
            aria-labelledby="compliance-audit"
            aria-describedby="compliance-audit-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              alt="Compliance and audit trails"
              fill
            />
            <div>
              <Shield size={32} aria-hidden="true" />
              <h3 id="compliance-audit" className="md:text-2xl">
                Complete Audit Trails
              </h3>
              <p id="compliance-audit-desc" className="md:text-base">
                Every payment logged with timestamps, approvals, and supporting
                documentation for compliance.
              </p>
            </div>
          </article>

          {/* Card 6 - Payment Distribution */}
          <article
            className="bento-card md:col-span-3"
            role="group"
            aria-labelledby="payment-distribution"
            aria-describedby="payment-distribution-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Payment distribution analytics"
              fill
            />
            <div>
              <PieChart size={32} aria-hidden="true" />
              <h3 id="payment-distribution" className="md:text-2xl">
                Payment Analytics
              </h3>
              <p id="payment-distribution-desc" className="md:text-base">
                Analyze payment patterns by type, region, and retailer to
                optimize incentive programs.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION: Analytics & Chart */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid items-center gap-32 lg:grid-cols-2">
          <div className="rounded-[4rem] border border-slate-50 bg-white p-12 shadow-xl">
            <div className="mb-12 flex items-center justify-between text-xs font-black tracking-widest uppercase">
              <span>Payment Distribution</span>
              <PieChart className="text-emerald-500" size={20} />
            </div>
            <ChartContainer config={CHART_CONFIG} className="h-[400px] w-full">
              <BarChart
                data={CHART_DATA}
                layout="vertical"
                margin={{ left: 30 }}
              >
                <CartesianGrid horizontal={false} stroke="#f8fafc" />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="reason"
                  type="category"
                  tickLine={false}
                  tickMargin={15}
                  axisLine={false}
                  tick={{ fill: "#475569", fontSize: 13, fontWeight: 900 }}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      className="rounded-2xl bg-slate-950 text-white"
                      formatter={(val) => (
                        <span className="font-black text-emerald-400">
                          ${Number(val).toLocaleString()}
                        </span>
                      )}
                    />
                  }
                />
                <Bar
                  dataKey="amount"
                  fill="#10b981"
                  radius={[0, 12, 12, 0]}
                  barSize={40}
                  activeBar={{ fill: "#34d399" }}
                />
              </BarChart>
            </ChartContainer>
          </div>

          <div className="space-y-12">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Transparency <br />{" "}
              <span className="text-teal-600 underline decoration-teal-200 underline-offset-[12px]">
                At Every Level.
              </span>
            </h2>
            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-3xl bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <ShieldCheck
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Compliance & Control
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Set spending limits and approval workflows to prevent budget
                    overruns before they happen.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-3xl bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <Smartphone
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Validation via Mobile
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Upload images directly to validate incentive execution and
                    trigger EFT payments instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustryBadge />

      {/* SECTION: ROI */}
      <section className="mx-auto" role="region" aria-labelledby="roi-heading">
        <div className="relative overflow-hidden bg-slate-900 p-8 text-white md:p-16">
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="roi-heading"
                className="mb-8 text-4xl font-black md:text-6xl"
              >
                Proven Impact <br />
                <span className="text-teal-500">
                  Where Payments Drive Accountability
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Process payments{" "}
                    <strong className="text-white">
                      75% faster with automated validation
                    </strong>{" "}
                    and instant EFT capabilities.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Reduce budget overruns by{" "}
                    <strong className="text-white">90%</strong> with spending
                    limits and approval workflows.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Achieve{" "}
                    <strong className="text-white">
                      100% audit compliance
                    </strong>{" "}
                    with complete payment trails and documentation.
                  </p>
                </li>
              </ul>

              <a href="/roi" className="btn btn-secondary text-white!">
                Calculate Your ROI <ArrowRight aria-hidden="true" />
              </a>
            </div>

            {/* ROI Stats */}
            <aside
              className="relative"
              role="group"
              aria-labelledby="roi-stats"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-md">
                <TrendingUp
                  className="mx-auto mb-6 text-teal-500"
                  size={48}
                  aria-hidden="true"
                />

                <h3
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-8xl"
                >
                  75%
                </h3>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                  Faster Processing
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black">2 days</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Average Payment Time
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">100%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Validated
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION: Final CTA */}
      <section className="mx-6 mb-6">
        <CTA />
      </section>

      <footer className="py-24 text-center">
        <Link
          href="/"
          className="text-xs font-black tracking-[0.4em] text-slate-300 uppercase transition-colors hover:text-emerald-500"
        >
          &larr; Back to Platform Overview
        </Link>
      </footer>
    </main>
  )
}

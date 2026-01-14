import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { BookCallButton } from "@/components/sections/cta/BookCallButton"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { SALES_ACCELERATION_TOOLS } from "./data/tools"

export const metadata: Metadata = {
  title: "Sales Acceleration Tools | Paygos",
  description:
    "Accelerate your sales performance with Paygos suite of integrated tools: Optimized Ordering, Rebates, Training Management, Returns, Payments, and Marketing.",
  keywords: [
    "sales acceleration",
    "sales tools",
    "order management",
    "rebates",
    "training management",
    "returns management",
    "payment processing",
    "marketing automation",
  ],
  openGraph: {
    title: "Sales Acceleration Tools | Paygos",
    description:
      "Accelerate your sales performance with Paygos suite of integrated tools: Optimized Ordering, Rebates, Training Management, Returns, Payments, and Marketing.",
    url: "https://www.paygos.ca/sales-acceleration",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Sales Acceleration Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Acceleration Tools | Paygos",
    description:
      "Accelerate your sales performance with Paygos suite of integrated tools: Optimized Ordering, Rebates, Training Management, Returns, Payments, and Marketing.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/sales-acceleration",
  },
}

export default function SalesAccelerationPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* SECTION: Hero & Background */}
      <section
        data-navbar-theme="dark"
        className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-950 pt-32 pb-24"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
            alt="Sales acceleration"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-emerald-300 uppercase backdrop-blur-md">
              Integrated • Powerful • Scalable
            </div>
            <h1 className="mb-10 text-6xl leading-[0.9] font-black tracking-tighter text-white md:text-9xl">
              ACCELERATE <br />{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                SALES.
              </span>
            </h1>
            <p className="mb-12 max-w-2xl text-xl leading-relaxed font-medium text-slate-300 md:text-2xl">
              A complete suite of tools designed to streamline operations,
              maximize efficiency, and drive revenue growth across your sales
              organization.
            </p>
            <BookCallButton />
          </div>
        </div>
      </section>

      {/* SECTION: Introduction */}
      <section data-navbar-theme="light" className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-black text-slate-900 md:text-5xl">
            Everything You Need to Win
          </h2>
          <p className="text-xl leading-relaxed text-slate-600">
            Paygos brings together the essential tools your sales team needs to
            succeed. From optimizing orders to managing payments, our integrated
            platform eliminates complexity and empowers your team to focus on
            what matters most: growing revenue.
          </p>
        </div>
      </section>

      {/* SECTION: Tools Grid */}
      <section
        data-navbar-theme="light"
        className="container mx-auto px-6 py-24"
      >
        <h2 className="mb-12 text-center text-3xl font-black text-slate-900">
          Sales Acceleration Tools
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SALES_ACCELERATION_TOOLS.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 transition-colors duration-300 group-hover:bg-teal-500">
                  <Icon className="h-8 w-8 text-teal-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                  {tool.title}
                </h3>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-teal-600 transition-transform duration-300 group-hover:translate-x-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* SECTION: Why Sales Acceleration */}
      <section data-navbar-theme="light" className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-12">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Why Sales <br />{" "}
              <span className="text-teal-600 underline decoration-teal-200 underline-offset-[12px]">
                Acceleration?
              </span>
            </h2>
            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-3xl bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <Zap
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Unified Platform
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    All your sales tools in one place. No more juggling multiple
                    systems or struggling with data silos.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-3xl bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <TrendingUp
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Measurable Results
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Track performance, optimize processes, and demonstrate ROI
                    with comprehensive analytics and reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-2xl">
              <Zap className="mx-auto mb-6 text-teal-500" size={48} />
              <h3 className="mb-8 text-center text-3xl font-black text-slate-900">
                The Paygos Advantage
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-teal-500" />
                  <p className="text-lg text-slate-700">
                    <strong className="text-slate-900">
                      Seamless Integration
                    </strong>{" "}
                    across all sales acceleration tools
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-teal-500" />
                  <p className="text-lg text-slate-700">
                    <strong className="text-slate-900">Real-Time Insights</strong>{" "}
                    to make data-driven decisions
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-teal-500" />
                  <p className="text-lg text-slate-700">
                    <strong className="text-slate-900">Mobile-First Design</strong>{" "}
                    for field teams on the go
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-teal-500" />
                  <p className="text-lg text-slate-700">
                    <strong className="text-slate-900">Proven ROI</strong> with
                    measurable impact on revenue
                  </p>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>

      <IndustryBadge />

      {/* SECTION: ROI */}
      <section
        data-navbar-theme="dark"
        className="mx-auto"
        role="region"
        aria-labelledby="roi-heading"
      >
        <div className="relative overflow-hidden bg-slate-900 p-8 text-white md:p-16">
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="roi-heading"
                className="mb-8 text-4xl font-black md:text-6xl"
              >
                Proven Impact <br />
                <span className="text-teal-500">
                  Across Your Sales Organization
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Increase sales productivity by{" "}
                    <strong className="text-white">up to 25%</strong> with
                    streamlined workflows and automation.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Reduce administrative overhead by{" "}
                    <strong className="text-white">40%</strong>, giving your team
                    more time to sell.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Improve customer satisfaction with{" "}
                    <strong className="text-white">
                      faster response times
                    </strong>{" "}
                    and better service.
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
                  25%
                </h3>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                  Productivity Increase
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black">40%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Less Admin Work
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">6</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Integrated Tools
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

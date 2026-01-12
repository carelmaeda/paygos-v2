import type { Metadata } from "next"
import React from "react"
import { CTA } from "@/app/_components/sections/cta/CTA"
import Image from "next/image"
import { IndustryBadge } from "@/app/_components/sections/solutions/IndustryBadge"
import {
  Zap,
  Clock,
  ShoppingBag,
  Eye,
  Store,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Calculator,
} from "lucide-react"
import { CustomerStoriesCarousel } from "@/app/_components/sections/customers/CustomerStoriesCarousel"

export const metadata: Metadata = {
  title: "Smart Ordering System | Paygos",
  description: "Streamline order management with Paygos smart ordering platform. Real-time inventory visibility, automated order processing, and intelligent ordering workflows for sales teams.",
  keywords: ["order management", "ordering system", "order automation", "inventory management", "order processing", "smart ordering", "order tracking", "sales ordering"],
  openGraph: {
    title: "Smart Ordering System | Paygos",
    description: "Streamline order management with Paygos smart ordering platform. Real-time inventory visibility, automated order processing, and intelligent ordering workflows for sales teams.",
    url: "https://www.paygos.ca/solutions/ordering",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Smart Ordering System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Ordering System | Paygos",
    description: "Streamline order management with Paygos smart ordering platform. Real-time inventory visibility, automated order processing, and intelligent ordering workflows for sales teams.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/solutions/ordering",
  },
}

export default function PaygosOrderingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <header
        className="mx-auto max-w-7xl pt-12 pb-16 text-center"
        role="region"
        aria-labelledby="page-title"
      >
        <h1
          id="page-title"
          className="mb-6 text-5xl font-black tracking-tight text-slate-900 md:text-7xl"
        >
          Transform A Familiar Process <br />
          <span className="text-teal-600">Into A Revenue Driver</span>
        </h1>
        <p className="mx-auto max-w-3xl text-slate-600">
          Paygos empowers reps, account managers, and retail partners to place
          and track orders for products and merchandising in one streamlined
          platform.
        </p>
      </header>

      {/* Ordering Capabilities */}
      <section
        className="mx-auto mb-24 max-w-5xl px-4"
        role="region"
        aria-labelledby="ordering-capabilities"
      >
        <h2 id="ordering-capabilities" className="sr-only">
          Ordering Capabilities
        </h2>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="orders-one-platform"
            aria-describedby="orders-one-platform-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1674027392842-29f8354e236c"
              alt="Centralized online ordering system dashboard"
              fill
            />
            <div>
              <Zap size={32} aria-hidden="true" />
              <h3 id="orders-one-platform" className="md:text-3xl">
                All Orders, One Platform
              </h3>
              <p
                id="orders-one-platform-desc"
                className="md:max-w-lg md:text-lg"
              >
                Route orders to any distributor or internal warehouse without
                channel confusion or manual handoffs.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="save-reps-time"
            aria-describedby="save-reps-time-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21"
              alt="Sales representative working efficiently with digital tools"
              fill
            />
            <div>
              <Clock size={32} aria-hidden="true" />
              <h3 id="save-reps-time">Save Reps Time</h3>
              <p id="save-reps-time-desc">
                Quick reorders and centralized tracking reduce administrative
                workload.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="products-merch"
            aria-describedby="products-merch-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1585939049495-7f87cd649405"
              alt="Retail products and merchandising materials"
              fill
            />
            <div>
              <ShoppingBag size={32} aria-hidden="true" />
              <h3 id="products-merch">Products & Merchandising</h3>
              <p id="products-merch-desc">
                Manage sellable goods and field marketing materials together.
              </p>
            </div>
          </article>

          {/* Card 4 */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="real-time-visibility"
            aria-describedby="real-time-visibility-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06"
              alt="Real-time order tracking interface"
              fill
            />
            <div>
              <Eye size={32} aria-hidden="true" />
              <h3 id="real-time-visibility">Real-Time Visibility</h3>
              <p id="real-time-visibility-desc">
                Track order progress from submission to fulfillment across
                partners and territories.
              </p>
            </div>
          </article>

          {/* Card 5 */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="independent-focus"
            aria-describedby="independent-focus-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Independent specialty retail store"
              fill
            />
            <div>
              <Store size={32} aria-hidden="true" />
              <h3 id="independent-focus">Independent Retail Focus</h3>
              <p id="independent-focus-desc">
                Built for the complexity of pet, convenience, pharmacy, and
                specialty retail.
              </p>
            </div>
          </article>
        </div>
      </section>

      <IndustryBadge />

      {/* ROI */}
      <section className="mx-auto" role="region" aria-labelledby="roi-heading">
        <div className="relative overflow-hidden bg-slate-900 p-8 text-white md:p-16">
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 id="roi-heading" className="pb-8 text-4xl md:text-8xl">
                Real ROI <br />
                <span className="text-teal-500">
                  More Time Equals More Revenue
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Reps regain up to{" "}
                    <strong className="text-white">
                      15% of their weekly time
                    </strong>{" "}
                    by removing manual entry.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    That creates nearly{" "}
                    <strong className="text-white">
                      50 additional selling opportunities per year
                    </strong>
                    .
                  </p>
                </li>
              </ul>

              <a href="/roi" className="btn btn-secondary text-white!">
                Calculate ROI <ArrowRight aria-hidden="true" />
              </a>
            </div>

            {/* ROI Stats */}
            <aside
              className="relative"
              role="group"
              aria-labelledby="roi-stats"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-md">
                <Calculator
                  className="mx-auto mb-6 text-teal-500"
                  size={48}
                  aria-hidden="true"
                />

                <div
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-6xl"
                >
                  15%
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                  Efficiency Gain
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black">50+</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Extra Visits per Year
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">0</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Distribution Changes
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />

      <div>
        <CustomerStoriesCarousel />
      </div>
    </main>
  )
}

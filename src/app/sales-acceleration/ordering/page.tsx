import type { Metadata } from "next"
import Link from "next/link"
import { CTA } from "@/components/sections/cta/CTA"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { PatternDots } from "@/components/ui/patterns"
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
  Monitor,
  AlertCircle,
  Eye as EyeOff,
  PackageX,
  BarChart3,
} from "lucide-react"
import { OrderingVolumeChart } from "./ordering-volume-chart"
import { CustomerStoriesCarousel } from "@/components/sections/customers/CustomerStoriesCarousel"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

export const metadata: Metadata = {
  title: "Smart Ordering System | Paygos",
  description:
    "Streamline order management with Paygos smart ordering platform. Real-time inventory visibility, automated order processing, and intelligent ordering workflows for sales teams.",
  keywords: [
    "order management",
    "ordering system",
    "order automation",
    "inventory management",
    "order processing",
    "smart ordering",
    "order tracking",
    "sales ordering",
  ],
  openGraph: {
    title: "Smart Ordering System | Paygos",
    description:
      "Streamline order management with Paygos smart ordering platform. Real-time inventory visibility, automated order processing, and intelligent ordering workflows for sales teams.",
    url: "https://www.paygos.ca/sales-acceleration/ordering",
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
    description:
      "Streamline order management with Paygos smart ordering platform. Real-time inventory visibility, automated order processing, and intelligent ordering workflows for sales teams.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/sales-acceleration/ordering",
  },
}

export default function PaygosOrderingPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-teal-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-teal-400">Streamlined Order Management</small>
          <h1>
            Transforming Ordering
            <br />
            <span className="text-highlight">Into Revenue</span>
          </h1>
          <p>
            Paygos empowers reps, account managers, and retail partners to place
            and track orders for products and merchandising in one streamlined
            platform.
          </p>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Challenges */}
      <section
        data-navbar-theme="light"
        className="section-container mx-auto py-12"
      >
        <MotionSection
          as="h2"
          variant="slideUp"
          className="mb-6 text-center"
          viewport={{ once: true }}
        >
          Common Ordering Challenges
        </MotionSection>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Distributor Complexity",
              desc: "Reps waste 6+ hours weekly managing orders across multiple distributor portals",
              Icon: Monitor,
              delay: 0.1,
            },
            {
              title: "Order Errors",
              desc: "Manual data entry causes 15-20% order error rates",
              Icon: AlertCircle,
              delay: 0.15,
            },
            {
              title: "No Visibility",
              desc: "Head office has no real-time view into ordering patterns or rep activity",
              Icon: EyeOff,
              delay: 0.2,
            },
            {
              title: "Stock-Outs",
              desc: "Delayed reorders lead to 8-12% out-of-stock rates at retail",
              Icon: PackageX,
              delay: 0.25,
            },
          ].map(({ title, desc, Icon, delay }) => (
            <MotionSection
              key={title}
              as="div"
              variant="scaleIn"
              delay={delay}
              viewport={{ once: true }}
              className="rounded-lg border border-gray-100 bg-white p-5 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-teal-100">
                <Icon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* Ordering Capabilities */}
      <section
        data-navbar-theme="light"
        className="section-container mx-auto py-12"
        role="region"
        aria-labelledby="ordering-capabilities"
      >
        <MotionSection
          as="h2"
          variant="slideUp"
          id="ordering-capabilities"
          className="mb-6 text-center"
          viewport={{ once: true }}
        >
          Our Solution
        </MotionSection>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.1}
            viewport={{ once: true }}
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
              <Zap size={32} aria-hidden="true" className="text-teal-600" />
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
          </MotionSection>

          {/* Card 2 */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.15}
            viewport={{ once: true }}
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
              <Clock size={32} aria-hidden="true" className="text-teal-600" />
              <h3 id="save-reps-time">Save Reps Time</h3>
              <p id="save-reps-time-desc">
                Quick reorders and centralized tracking reduce administrative
                workload.
              </p>
            </div>
          </MotionSection>

          {/* Card 3 */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.2}
            viewport={{ once: true }}
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
              <ShoppingBag
                size={32}
                aria-hidden="true"
                className="text-teal-600"
              />
              <h3 id="products-merch">Products & Merchandising</h3>
              <p id="products-merch-desc">
                Manage sellable goods and field marketing materials together.
              </p>
            </div>
          </MotionSection>

          {/* Card 4 */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.25}
            viewport={{ once: true }}
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
              <Eye size={32} aria-hidden="true" className="text-teal-600" />
              <h3 id="real-time-visibility">Real-Time Visibility</h3>
              <p id="real-time-visibility-desc">
                Track order progress from submission to fulfillment across
                partners and territories.
              </p>
            </div>
          </MotionSection>

          {/* Card 5 */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.3}
            viewport={{ once: true }}
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
              <Store size={32} aria-hidden="true" className="text-teal-600" />
              <h3 id="independent-focus">Independent Retail Focus</h3>
              <p id="independent-focus-desc">
                Built for the complexity of pet, convenience, pharmacy, and
                specialty retail.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      <IndustryBadge />

      {/* Chart Section */}
      <section data-navbar-theme="light" className="mx-auto bg-slate-200 py-12">
        <div className="section-container grid items-center gap-32 lg:grid-cols-2">
          {/* Keep the chart stable (no animation to avoid jank) */}
          <div className="chart-grid-cell">
            <OrderingVolumeChart />
          </div>

          {/* Animate the content block only */}
          <MotionSection
            as="div"
            variant="slideUp"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Efficiency <br />
              <span className="text-highlight">That Scales.</span>
            </h2>

            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-600">
                  <BarChart3
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Monitor Order Trends
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Track order volume and fulfillment rates across product
                    categories to optimize inventory and demand planning.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-600">
                  <TrendingUp
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Reduce Stock-Outs
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Real-time visibility into order patterns helps prevent
                    stockouts and ensures optimal shelf presence.
                  </p>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ROI */}
      <section
        data-navbar-theme="dark"
        className="mx-auto"
        role="region"
        aria-labelledby="roi-heading"
      >
        <div className="relative overflow-hidden bg-slate-900 p-8 text-white md:p-16">
          <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Animate ROI copy separately */}
            <MotionSection as="div" variant="slideUp" viewport={{ once: true }}>
              <h2 id="roi-heading" className="pb-8 text-4xl md:text-8xl">
                Real ROI <br />
                <span className="text-teal-600">
                  More Time Equals More Revenue
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-teal-600"
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
                    className="mt-1 text-teal-600"
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

              {/* Fix: avoid nested interactive elements */}
              <Button asChild variant="secondary" size="lg">
                <Link href="/roi" className="flex items-center gap-2">
                  Calculate Your ROI <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </MotionSection>

            {/* ROI Stats */}
            <MotionSection
              as="aside"
              variant="scaleIn"
              delay={0.15}
              viewport={{ once: true }}
              className="relative"
              role="group"
              aria-labelledby="roi-stats"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-md">
                <Calculator
                  className="mx-auto mb-6 text-teal-600"
                  size={48}
                  aria-hidden="true"
                />

                <div
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-6xl"
                >
                  15%
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-600 uppercase">
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
            </MotionSection>
          </div>
        </div>
      </section>

      <CTA />

      <section className="overflow-hidden py-8">
        <CustomerStoriesCarousel />
      </section>
    </main>
  )
}

import type { Metadata } from "next"
import React from "react"
import Image from "next/image"
import { PatternDots } from "@/components/ui/patterns"
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Mail,
  MessageSquare,
  Target,
  BarChart3,
  Percent,
  Zap,
  Megaphone,
  UserX,
  Users,
  Eye,
  Clock as ClockIcon,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { BookCallButton } from "@/components/sections/cta/BookCallButton"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { MarketingEngagementChart } from "./marketing-engagement-chart"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata: Metadata = {
  title: "Marketing Solutions | Paygos",
  description:
    "Engage retailers at scale with targeted communications. Automate campaign delivery, track engagement, and reach the right retailers at the right time.",
  keywords: [
    "marketing automation",
    "sales marketing",
    "customer communication",
    "marketing campaigns",
    "targeted marketing",
    "promotional marketing",
    "trade marketing",
    "retail marketing",
  ],
  openGraph: {
    title: "Marketing Solutions | Paygos",
    description:
      "Engage retailers at scale with targeted communications. Automate campaign delivery, track engagement, and reach the right retailers at the right time.",
    url: "https://www.paygos.ca/sales-acceleration/marketing",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Marketing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Solutions | Paygos",
    description:
      "Engage retailers at scale with targeted communications. Automate campaign delivery, track engagement, and reach the right retailers at the right time.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/sales-acceleration/marketing",
  },
}

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="relative flex bg-cyan-950 py-24"
        data-navbar-theme="dark"
      >
        <PatternDots />
        <div className="text-hero">
          <small className="text-teal-400">Targeted Marketing Automation</small>
          <h1>
            Engage Retailers
            <br />
            <span className="text-highlight">At Scale</span>
          </h1>
          <p>
            Paygos Marketing automates campaign delivery, tracks engagement, and
            ensures your message reaches the right retailers at the right time.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Challenges */}
      <section
        className="container mx-auto px-6 py-24"
        data-navbar-theme="light"
      >
        <h2 className="mb-12 text-center text-3xl font-black text-slate-900">
          Common Marketing Challenges
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Challenge 1 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <Megaphone className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Generic Blasts
            </h3>
            <p className="text-gray-600">
              Mass emails to all retailers result in 8% open rates and ignored
              promotions
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <UserX className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              No Segmentation
            </h3>
            <p className="text-gray-600">
              Can&apos;t target messages by region, purchase history, or
              retailer profile
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <Eye className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Tracking Blind Spots
            </h3>
            <p className="text-gray-600">
              No visibility into who opened emails or clicked promo links
            </p>
          </div>

          {/* Challenge 4 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <ClockIcon className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Manual Campaigns
            </h3>
            <p className="text-gray-600">
              Building and sending campaigns takes 5-6 hours per launch
            </p>
          </div>
        </div>
      </section>

      {/* Marketing Capabilities - Bento Grid */}
      <section
        className="mx-auto mb-24 max-w-5xl px-4"
        role="region"
        aria-labelledby="marketing-capabilities"
        data-navbar-theme="light"
      >
        <h2 id="marketing-capabilities" className="sr-only">
          Marketing Automation Capabilities
        </h2>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Segmented Campaigns */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="segmented-campaigns"
            aria-describedby="segmented-campaigns-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Segmented campaigns"
              fill
            />
            <div>
              <Target size={32} aria-hidden="true" />
              <h3 id="segmented-campaigns" className="md:text-3xl">
                Segmented Campaigns
              </h3>
              <p
                id="segmented-campaigns-desc"
                className="md:max-w-lg md:text-lg"
              >
                Target by region, banner, purchase history, or custom attributes
                to ensure relevance.
              </p>
            </div>
          </article>

          {/* Card 2 - Multi-Channel Delivery */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="multi-channel"
            aria-describedby="multi-channel-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2"
              alt="Multi-channel delivery"
              fill
            />
            <div>
              <MessageSquare size={32} aria-hidden="true" />
              <h3 id="multi-channel">Multi-Channel</h3>
              <p id="multi-channel-desc">
                Email, SMS, in-app notifications—choose your channel per
                campaign.
              </p>
            </div>
          </article>

          {/* Card 3 - Drag-and-Drop Builder */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="campaign-builder"
            aria-describedby="campaign-builder-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
              alt="Campaign builder"
              fill
            />
            <div>
              <Mail size={32} aria-hidden="true" />
              <h3 id="campaign-builder">Easy Builder</h3>
              <p id="campaign-builder-desc">
                Build beautiful campaigns in minutes with drag-and-drop
                templates.
              </p>
            </div>
          </article>

          {/* Card 4 - Engagement Analytics */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="engagement-analytics"
            aria-describedby="engagement-analytics-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Engagement analytics"
              fill
            />
            <div>
              <BarChart3 size={32} aria-hidden="true" />
              <h3 id="engagement-analytics">Track Engagement</h3>
              <p id="engagement-analytics-desc">
                Track opens, clicks, and conversion by retailer segment in
                real-time.
              </p>
            </div>
          </article>

          {/* Card 5 - Promo Code Integration */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="promo-codes"
            aria-describedby="promo-codes-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1"
              alt="Promo code integration"
              fill
            />
            <div>
              <Percent size={32} aria-hidden="true" />
              <h3 id="promo-codes">Promo Codes</h3>
              <p id="promo-codes-desc">
                Embed unique codes tied to rebates or ordering incentives.
              </p>
            </div>
          </article>

          {/* Card 6 - Automated Triggers */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="automated-triggers"
            aria-describedby="automated-triggers-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Automated triggers"
              fill
            />
            <div>
              <Zap size={32} aria-hidden="true" />
              <h3 id="automated-triggers" className="md:text-3xl">
                Automated Triggers
              </h3>
              <p
                id="automated-triggers-desc"
                className="md:max-w-lg md:text-lg"
              >
                Send follow-ups based on retailer actions—order confirmations,
                rebate milestones, training completion.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Chart Section */}
      <section
        className="container mx-auto px-6 py-40"
        data-navbar-theme="light"
      >
        <div className="grid items-center gap-32 lg:grid-cols-2">
          <MarketingEngagementChart />
          <div className="space-y-12">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Engagement <br />
              <span className="text-teal-600 underline decoration-teal-200 underline-offset-[12px]">
                That Converts.
              </span>
            </h2>
            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <BarChart3
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Track Every Stage
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Monitor campaign performance from send to conversion with
                    funnel analytics at every stage.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <TrendingUp
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Optimize Performance
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Identify drop-off points and refine messaging to improve
                    open rates and conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustryBadge />

      {/* ROI */}
      <section
        className="mx-auto"
        role="region"
        aria-labelledby="roi-heading"
        data-navbar-theme="dark"
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
                  Where Marketing Drives Action
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Achieve{" "}
                    <strong className="text-white">3x higher open rates</strong>{" "}
                    with segmented, targeted campaigns vs. generic email blasts.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Increase campaign engagement by{" "}
                    <strong className="text-white">45%</strong> with
                    multi-channel delivery and automated triggers.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <Zap aria-hidden="true" className="mt-1 text-teal-500" />
                  <p className="text-lg text-slate-300">
                    Build campaigns{" "}
                    <strong className="text-white">60% faster</strong> with
                    drag-and-drop templates and automated workflows.
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
                <Users
                  className="mx-auto mb-6 text-teal-500"
                  size={48}
                  aria-hidden="true"
                />

                <h3
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-8xl"
                >
                  3x
                </h3>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                  Better Engagement
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black">24%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Avg Open Rate
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">8%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Conversion
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

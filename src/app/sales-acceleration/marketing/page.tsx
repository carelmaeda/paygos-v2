import type { Metadata } from "next"
import Link from "next/link"
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
  Eye,
  Clock as ClockIcon,
  Calculator,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { Button } from "@/components/ui/button"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { MarketingEngagementChart } from "./marketing-engagement-chart"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

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
    <main id="main-content" className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-emerald-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-emerald-400">
            Targeted Marketing Automation
          </small>
          <h1>
            Engage Retailers
            <br />
            <span className="text-highlight">At Scale</span>
          </h1>
          <p>
            Paygos Marketing automates campaign delivery, tracks engagement, and
            ensures your message reaches the right retailers at the right time.
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
          Common Marketing Challenges
        </MotionSection>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Generic Blasts",
              desc: "Mass emails to all retailers result in 8% open rates and ignored promotions",
              Icon: Megaphone,
              delay: 0.1,
            },
            {
              title: "No Segmentation",
              desc: "Can&apos;t target messages by region, purchase history, or retailer profile",
              Icon: UserX,
              delay: 0.15,
            },
            {
              title: "Tracking Blind Spots",
              desc: "No visibility into who opened emails or clicked promo links",
              Icon: Eye,
              delay: 0.2,
            },
            {
              title: "Manual Campaigns",
              desc: "Building and sending campaigns takes 5-6 hours per launch",
              Icon: ClockIcon,
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
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-100">
                <Icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* Marketing Capabilities - Bento Grid */}
      <section
        data-navbar-theme="light"
        className="section-container mx-auto py-12"
        role="region"
        aria-labelledby="marketing-capabilities"
      >
        <MotionSection
          as="h2"
          variant="slideUp"
          id="marketing-capabilities"
          className="mb-6 text-center"
          viewport={{ once: true }}
        >
          Our Solution
        </MotionSection>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Segmented Campaigns */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.1}
            viewport={{ once: true }}
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
              <Target
                size={32}
                aria-hidden="true"
                className="text-emerald-400"
              />
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
          </MotionSection>

          {/* Card 2 - Multi-Channel Delivery */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.15}
            viewport={{ once: true }}
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
              <MessageSquare
                size={32}
                aria-hidden="true"
                className="text-emerald-400"
              />
              <h3 id="multi-channel">Multi-Channel</h3>
              <p id="multi-channel-desc">
                Email, SMS, in-app notifications—choose your channel per
                campaign.
              </p>
            </div>
          </MotionSection>

          {/* Card 3 - Drag-and-Drop Builder */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.2}
            viewport={{ once: true }}
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
              <Mail size={32} aria-hidden="true" className="text-emerald-400" />
              <h3 id="campaign-builder">Easy Builder</h3>
              <p id="campaign-builder-desc">
                Build beautiful campaigns in minutes with drag-and-drop
                templates.
              </p>
            </div>
          </MotionSection>

          {/* Card 4 - Engagement Analytics */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.25}
            viewport={{ once: true }}
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
              <BarChart3
                size={32}
                aria-hidden="true"
                className="text-emerald-400"
              />
              <h3 id="engagement-analytics">Track Engagement</h3>
              <p id="engagement-analytics-desc">
                Track opens, clicks, and conversion by retailer segment in
                real-time.
              </p>
            </div>
          </MotionSection>

          {/* Card 5 - Promo Code Integration */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.3}
            viewport={{ once: true }}
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
              <Percent
                size={32}
                aria-hidden="true"
                className="text-emerald-400"
              />
              <h3 id="promo-codes">Promo Codes</h3>
              <p id="promo-codes-desc">
                Embed unique codes tied to rebates or ordering incentives.
              </p>
            </div>
          </MotionSection>

          {/* Card 6 - Automated Triggers */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.35}
            viewport={{ once: true }}
            className="bento-card md:col-span-6"
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
              <Zap size={32} aria-hidden="true" className="text-emerald-400" />
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
          </MotionSection>
        </div>
      </section>

      <IndustryBadge />

      {/* Chart Section */}
      <section data-navbar-theme="light" className="mx-auto bg-slate-200 py-12">
        <div className="section-container grid items-center gap-32 lg:grid-cols-2">
          {/* Keep chart stable (no motion) */}
          <div className="chart-grid-cell">
            <MarketingEngagementChart />
          </div>

          {/* Animate copy only */}
          <MotionSection
            as="div"
            variant="slideUp"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Engagement <br />
              <span className="text-highlight">That Converts.</span>
            </h2>

            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-emerald-50 p-5 transition-colors duration-300 group-hover:bg-emerald-500">
                  <BarChart3
                    size={28}
                    className="text-emerald-600 group-hover:text-white"
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
                <div className="shrink-0 rounded-lg bg-emerald-50 p-5 transition-colors duration-300 group-hover:bg-emerald-500">
                  <TrendingUp
                    size={28}
                    className="text-emerald-600 group-hover:text-white"
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
                Proven Impact <br />
                <span className="text-emerald-500">
                  Where Marketing Drives Action
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-emerald-500"
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
                    className="mt-1 text-emerald-500"
                  />
                  <p className="text-lg text-slate-300">
                    Increase campaign engagement by{" "}
                    <strong className="text-white">45%</strong> with
                    multi-channel delivery and automated triggers.
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
                  className="mx-auto mb-6 text-emerald-500"
                  size={48}
                  aria-hidden="true"
                />

                <div
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-6xl"
                >
                  3x
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase">
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
            </MotionSection>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

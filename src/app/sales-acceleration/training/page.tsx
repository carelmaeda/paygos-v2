import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PatternDots } from "@/components/ui/patterns"
import {
  FileText,
  AlertCircle,
  ClipboardList,
  UserX,
  Video,
  Award,
  Smartphone,
  Trophy,
  BarChart3,
  Upload,
  CheckCircle2,
  TrendingUp,
  Users,
  ArrowRight,
  Calculator,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { Button } from "@/components/ui/button"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { TrainingCompletionChart } from "./training-completion-chart"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

export const metadata: Metadata = {
  title: "Training Management | Paygos",
  description:
    "Transform training into a loyalty-building journey with Paygos. Interactive modules, certification tracking, and incentive-based rewards that drive completion.",
  keywords: [
    "training management",
    "employee training",
    "certification tracking",
    "learning management",
    "training programs",
    "staff development",
    "mobile learning",
    "gamification",
  ],
  openGraph: {
    title: "Training Management | Paygos",
    description:
      "Transform training into a loyalty-building journey with Paygos. Interactive modules, certification tracking, and incentive-based rewards that drive completion.",
    url: "https://www.paygos.ca/sales-acceleration/training",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Training Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Management | Paygos",
    description:
      "Transform training into a loyalty-building journey with Paygos. Interactive modules, certification tracking, and incentive-based rewards that drive completion.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/sales-acceleration/training",
  },
}

export default function TrainingPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero-sm bg-indigo-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-indigo-400">Certification Management</small>
          <h1>
            Train Smarter
            <br />
            <span className="text-highlight">Not Harder</span>
          </h1>
          <p>
            Interactive modules, certification tracking, and incentive-based
            rewards that drive completion and retention.
          </p>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Challenges Section */}
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
          Common Training Challenges
        </MotionSection>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Low Completion",
              desc: "Only 30% of retail staff complete traditional training programs, limiting product knowledge and sales effectiveness.",
              Icon: UserX,
              delay: 0.1,
            },
            {
              title: "No Verification",
              desc: "Without digital tracking, you cannot prove which employees completed training or earned certifications.",
              Icon: AlertCircle,
              delay: 0.15,
            },
            {
              title: "Static Content",
              desc: "PDFs and videos do not engage learners—staff forget information within weeks of training sessions.",
              Icon: FileText,
              delay: 0.2,
            },
            {
              title: "Manual Tracking",
              desc: "Tracking completion in spreadsheets leads to gaps, errors, and inability to tie training to incentives.",
              Icon: ClipboardList,
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
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-100">
                <Icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* Bento Grid Section */}
      <section
        data-navbar-theme="light"
        className="section-container mx-auto py-12"
        role="region"
        aria-labelledby="training-capabilities"
      >
        <MotionSection
          as="h2"
          variant="slideUp"
          id="training-capabilities"
          className="mb-6 text-center"
          viewport={{ once: true }}
        >
          Our Solution
        </MotionSection>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Interactive Modules */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.1}
            viewport={{ once: true }}
            className="bento-card md:col-span-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
              alt="Interactive training modules"
              fill
              className="object-cover"
            />
            <div>
              <Video size={32} aria-hidden="true" className="text-indigo-400" />
              <h3 className="md:text-3xl">Interactive Modules</h3>
              <p className="md:max-w-lg md:text-lg">
                Video, quizzes, and interactive scenarios keep learners engaged
                and retain information longer than static content.
              </p>
            </div>
          </MotionSection>

          {/* Certification Tracking */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.15}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1888&auto=format&fit=crop"
              alt="Digital certificates"
              fill
              className="object-cover"
            />
            <div>
              <Award size={32} aria-hidden="true" className="text-indigo-400" />
              <h3>Certification Tracking</h3>
              <p>
                Issue digital certificates, track renewals, and prove compliance
                with automated workflows.
              </p>
            </div>
          </MotionSection>

          {/* Mobile Learning */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.2}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
              alt="Mobile learning"
              fill
              className="object-cover"
            />
            <div>
              <Smartphone
                size={32}
                aria-hidden="true"
                className="text-indigo-400"
              />
              <h3>Mobile Learning</h3>
              <p>
                Train on-the-go with mobile-optimized content. Complete modules
                in 5-10 minute bursts during downtime.
              </p>
            </div>
          </MotionSection>

          {/* Gamification & Rewards */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.25}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf"
              alt="Gamification and rewards"
              fill
              className="object-cover"
            />
            <div>
              <Trophy
                size={32}
                aria-hidden="true"
                className="text-indigo-400"
              />
              <h3>Gamification & Rewards</h3>
              <p>
                Award points, badges, and incentive payments based on
                completion, quiz scores, and time-to-complete.
              </p>
            </div>
          </MotionSection>

          {/* Manager Dashboards */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.3}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Manager dashboards"
              fill
              className="object-cover"
            />
            <div>
              <BarChart3
                size={32}
                aria-hidden="true"
                className="text-indigo-400"
              />
              <h3>Manager Dashboards</h3>
              <p>
                See progress by store, region, or individual. Identify gaps and
                follow up with non-completers.
              </p>
            </div>
          </MotionSection>

          {/* Content Builder */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.35}
            viewport={{ once: true }}
            className="bento-card md:col-span-6"
          >
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Content builder"
              fill
              className="object-cover"
            />
            <div>
              <Upload
                size={32}
                aria-hidden="true"
                className="text-indigo-400"
              />
              <h3 className="md:text-3xl">Content Builder</h3>
              <p className="md:max-w-lg md:text-lg">
                Upload videos, PDFs, and quizzes with drag-and-drop simplicity.
                No IT or design skills needed.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      <IndustryBadge />

      {/* Chart Section */}
      <section data-navbar-theme="light" className="mx-auto bg-slate-200 py-12">
        <div className="section-container grid items-center gap-32 lg:grid-cols-2">
          {/* Keep chart stable (no animation) to avoid jank */}
          <div className="chart-grid-cell">
            <TrainingCompletionChart />
          </div>

          {/* Animate the content block only */}
          <MotionSection
            as="div"
            variant="slideUp"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Track Progress <br />
              <span className="text-highlight">in Real-Time.</span>
            </h2>

            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-indigo-50 p-5 transition-colors duration-300 group-hover:bg-indigo-500">
                  <CheckCircle2
                    size={28}
                    className="text-indigo-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Module-by-Module Visibility
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    See completion stages for every training module—identify
                    bottlenecks and send reminders to non-starters.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-indigo-50 p-5 transition-colors duration-300 group-hover:bg-indigo-500">
                  <Users
                    size={28}
                    className="text-indigo-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Individual &amp; Cohort Reporting
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Track progress by individual employee, store, or region to
                    measure training effectiveness and compliance.
                  </p>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ROI Section */}
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
                <span className="text-indigo-500">
                  Where Training Drives Loyalty
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-indigo-500"
                  />
                  <p className="text-lg text-slate-300">
                    <strong className="text-white">75% completion rate</strong>{" "}
                    with interactive modules vs 30% with traditional training
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 text-indigo-500"
                  />
                  <p className="text-lg text-slate-300">
                    <strong className="text-white">
                      50% faster onboarding
                    </strong>{" "}
                    with mobile-first learning and automated tracking
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
                  className="mx-auto mb-6 text-indigo-500"
                  size={48}
                  aria-hidden="true"
                />

                <div
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-6xl"
                >
                  75%
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase">
                  Completion Rate
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black">50%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Faster Onboarding
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">40%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Higher Retention
                    </p>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  )
}

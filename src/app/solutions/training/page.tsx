import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
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
  Target,
  ArrowRight,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { BookCallButton } from "@/components/sections/cta/BookCallButton"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { TrainingCompletionChart } from "./training-completion-chart"

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
    url: "https://www.paygos.ca/solutions/training",
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
    canonical: "https://www.paygos.ca/solutions/training",
  },
}

export default function TrainingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-950 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
            alt="Training and learning"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold tracking-widest text-white backdrop-blur-sm">
            <GraduationCap size={20} />
            <span>CERTIFICATION MANAGEMENT</span>
          </div>

          <h1 className="mb-10 text-6xl leading-[0.9] font-black tracking-tighter text-white md:text-9xl">
            TRAIN SMARTER,
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              NOT HARDER.
            </span>
          </h1>

          <p className="mb-12 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            Interactive modules, certification tracking, and incentive-based
            rewards that drive completion and retention.
          </p>

          <BookCallButton />
        </div>
      </section>

      {/* Challenges Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-black text-slate-900">
          Common Training Challenges
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <UserX className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Low Completion
            </h3>
            <p className="text-gray-600">
              Only 30% of retail staff complete traditional training programs,
              limiting product knowledge and sales effectiveness.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              No Verification
            </h3>
            <p className="text-gray-600">
              Without digital tracking, you cannot prove which employees
              completed training or earned certifications.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <FileText className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Static Content
            </h3>
            <p className="text-gray-600">
              PDFs and videos do not engage learners—staff forget information
              within weeks of training sessions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <ClipboardList className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Manual Tracking
            </h3>
            <p className="text-gray-600">
              Tracking completion in spreadsheets leads to gaps, errors, and
              inability to tie training to incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section id="capabilities" className="mx-auto mb-24 max-w-5xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-black text-slate-900 md:text-6xl">
            What Paygos Offers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Interactive learning experiences that boost completion rates and
            prove ROI.
          </p>
        </div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Interactive Modules */}
          <article className="bento-card md:col-span-4">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
              alt="Interactive training modules"
              fill
              className="object-cover"
            />
            <div>
              <Video size={32} aria-hidden="true" />
              <h3 className="md:text-3xl">Interactive Modules</h3>
              <p className="md:max-w-lg md:text-lg">
                Video, quizzes, and interactive scenarios keep learners engaged
                and retain information longer than static content.
              </p>
            </div>
          </article>

          {/* Certification Tracking */}
          <article className="bento-card md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1888&auto=format&fit=crop"
              alt="Digital certificates"
              fill
              className="object-cover"
            />
            <div>
              <Award size={24} aria-hidden="true" />
              <h3 className="text-lg">Certification Tracking</h3>
              <p className="text-sm">
                Issue digital certificates, track renewals, and prove
                compliance with automated workflows.
              </p>
            </div>
          </article>

          {/* Mobile Learning */}
          <article className="bento-card md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
              alt="Mobile learning"
              fill
              className="object-cover"
            />
            <div>
              <Smartphone size={24} aria-hidden="true" />
              <h3 className="text-lg">Mobile Learning</h3>
              <p className="text-sm">
                Train on-the-go with mobile-optimized content. Complete modules
                in 5-10 minute bursts during downtime.
              </p>
            </div>
          </article>

          {/* Gamification & Rewards */}
          <article className="bento-card md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop"
              alt="Gamification and rewards"
              fill
              className="object-cover"
            />
            <div>
              <Trophy size={24} aria-hidden="true" />
              <h3 className="text-lg">Gamification & Rewards</h3>
              <p className="text-sm">
                Award points, badges, and incentive payments based on
                completion, quiz scores, and time-to-complete.
              </p>
            </div>
          </article>

          {/* Manager Dashboards */}
          <article className="bento-card md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Manager dashboards"
              fill
              className="object-cover"
            />
            <div>
              <BarChart3 size={24} aria-hidden="true" />
              <h3 className="text-lg">Manager Dashboards</h3>
              <p className="text-sm">
                See progress by store, region, or individual. Identify gaps and
                follow up with non-completers.
              </p>
            </div>
          </article>

          {/* Content Builder */}
          <article className="bento-card md:col-span-4">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Content builder"
              fill
              className="object-cover"
            />
            <div>
              <Upload size={32} aria-hidden="true" />
              <h3 className="md:text-3xl">Content Builder</h3>
              <p className="md:max-w-lg md:text-lg">
                Upload videos, PDFs, and quizzes with drag-and-drop simplicity.
                No IT or design skills needed.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Chart Section */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid items-center gap-32 lg:grid-cols-2">
          <TrainingCompletionChart />

          <div className="space-y-12">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter uppercase md:text-7xl">
              Track Progress
              <br />
              <span className="text-teal-500">in Real-Time.</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Module-by-Module Visibility
                  </h3>
                  <p className="text-slate-600">
                    See completion stages for every training module—identify
                    bottlenecks and send reminders to non-starters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Individual & Cohort Reporting
                  </h3>
                  <p className="text-slate-600">
                    Track progress by individual employee, store, or region to
                    measure training effectiveness and compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Certification Milestones
                  </h3>
                  <p className="text-slate-600">
                    Automatically issue certificates when employees complete all
                    modules and pass assessments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Badge */}
      <IndustryBadge />

      {/* ROI Section */}
      <section className="mx-auto">
        <div className="relative overflow-hidden bg-slate-900 p-8 text-white md:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 opacity-90" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-black md:text-6xl">
                Proven Impact <br />
                <span className="text-teal-500">
                  Where Training Drives Loyalty
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-teal-500" />
                  <p className="text-lg text-slate-300">
                    <strong className="text-white">
                      75% completion rate
                    </strong>{" "}
                    with interactive modules vs 30% with traditional training
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-teal-500" />
                  <p className="text-lg text-slate-300">
                    <strong className="text-white">
                      50% faster onboarding
                    </strong>{" "}
                    with mobile-first learning and automated tracking
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-teal-500" />
                  <p className="text-lg text-slate-300">
                    <strong className="text-white">
                      40% higher retention
                    </strong>{" "}
                    when training is tied to incentive rewards
                  </p>
                </li>
              </ul>

              <a
                href="/roi"
                className="btn btn-secondary inline-flex items-center gap-2 text-white!"
              >
                Calculate Your ROI
                <ArrowRight size={20} />
              </a>
            </div>

            <aside>
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
                <GraduationCap
                  className="mx-auto mb-6 text-teal-500"
                  size={48}
                />
                <h3 className="mb-2 text-5xl font-black md:text-8xl">75%</h3>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                  Completion Rate
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <div className="mb-2 text-3xl font-black">50%</div>
                    <div className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Faster Onboarding
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-3xl font-black">40%</div>
                    <div className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Higher Retention
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  )
}

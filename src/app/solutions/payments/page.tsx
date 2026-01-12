import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ShieldCheck,
  Wallet,
  History,
  CheckCircle,
  Smartphone,
} from "lucide-react"
import { CTA } from "@/app/_components/sections/cta/CTA"
import { PaymentDistributionChart } from "./payment-distribution-chart"

export const metadata: Metadata = {
  title: "Payment Solutions | Paygos",
  description: "Modern payment processing tools to validate incentives, manage budgets, and ensure compliance. Real-time insights and automated payment workflows for sales teams.",
  keywords: ["payment processing", "incentive payments", "budget management", "payment compliance", "EFT payments", "payment automation", "sales incentives"],
  openGraph: {
    title: "Payment Solutions | Paygos",
    description: "Modern payment processing tools to validate incentives, manage budgets, and ensure compliance. Real-time insights and automated payment workflows for sales teams.",
    url: "https://www.paygos.ca/solutions/payments",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Payment Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Solutions | Paygos",
    description: "Modern payment processing tools to validate incentives, manage budgets, and ensure compliance. Real-time insights and automated payment workflows for sales teams.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/solutions/payments",
  },
}

// --- Constants & Configuration ---

const ACTIVITY_LOG = [
  {
    name: "Pharmasave 125",
    type: "EFT Payment",
    amount: "-$150.00",
    active: true,
  },
  {
    name: "Familiprix 2288",
    type: "Cheque Issued",
    amount: "-$130.00",
    active: false,
  },
  {
    name: "Jean Coutu 207",
    type: "EFT Payment",
    amount: "-$85.00",
    active: true,
  },
]

// --- Reusable Sub-Components ---

const ActivityItem = ({
  name,
  type,
  amount,
  active,
}: (typeof ACTIVITY_LOG)[0]) => (
  <div className="group flex items-center justify-between rounded-3xl border border-white/5 bg-white/5 p-6 transition-all hover:border-white/10 hover:bg-white/10">
    <div className="flex items-center gap-5">
      <div
        className={`h-3 w-3 rounded-full ${active ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" : "bg-slate-600"}`}
      />
      <div>
        <p className="text-xl font-black tracking-tight">{name}</p>
        <p className="text-[10px] font-bold tracking-[0.1em] text-slate-500 uppercase">
          {type}
        </p>
      </div>
    </div>
    <p
      className={`text-2xl font-black ${active ? "text-emerald-400" : "text-slate-400"}`}
    >
      {amount}
    </p>
  </div>
)

const FeatureItem = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType
  title: string
  desc: string
}) => (
  <div className="group flex items-start gap-8">
    <div className="shrink-0 rounded-3xl bg-emerald-50 p-5 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
      <Icon size={28} className="text-emerald-600 group-hover:text-white" />
    </div>
    <div>
      <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
        {title}
      </h4>
      <p className="text-lg leading-relaxed font-medium text-slate-500">
        {desc}
      </p>
    </div>
  </div>
)

const BookCallButton = ({ className = "" }) => (
  <Link
    href="mailto:explorepaygos@paygos.ca"
    className={`group flex items-center justify-center gap-4 rounded-[2rem] px-12 py-6 text-xl font-black tracking-widest uppercase shadow-2xl transition-all ${className}`}
  >
    BOOK A CALL{" "}
    <ArrowRight
      size={28}
      className="transition-transform group-hover:translate-x-1"
    />
  </Link>
)

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
            <BookCallButton className="bg-emerald-500 text-slate-950 hover:bg-emerald-400" />
          </div>
        </div>
      </section>

      {/* SECTION: Financial Snapshot */}
      <section className="relative z-20 container mx-auto -mt-24 px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Card: Budget Overview */}
          <div className="rounded-[3.5rem] border border-slate-100 bg-white p-12 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] lg:col-span-5">
            <div className="mb-12 flex items-start justify-between">
              <div>
                <p className="mb-2 text-xs font-black tracking-widest text-slate-400 uppercase">
                  Budget Overview
                </p>
                <h2 className="text-6xl font-black tracking-tighter text-slate-900">
                  $10,500.00
                </h2>
              </div>
              <Wallet
                className="rounded-3xl bg-emerald-50 p-5 text-emerald-600"
                size={76}
              />
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
                <div className="mb-4 flex items-center justify-between text-xs font-black tracking-widest text-slate-500 uppercase">
                  <span>Used This Month</span>
                  <span className="text-xl font-black text-slate-900">
                    $851.50
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[12%] rounded-full bg-emerald-500" />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-emerald-950 p-8 text-white shadow-2xl">
                <div>
                  <p className="mb-1 text-xs font-black tracking-widest text-emerald-400 uppercase">
                    Total Available
                  </p>
                  <p className="text-3xl font-black">$9,648.50</p>
                </div>
                <CheckCircle className="text-emerald-400" size={32} />
              </div>
            </div>
          </div>

          {/* Card: Recent Activity Log */}
          <div className="rounded-[3.5rem] bg-slate-900 p-12 text-white shadow-2xl lg:col-span-7">
            <div className="mb-10 flex items-center justify-between font-black tracking-widest uppercase">
              <div className="flex items-center gap-4 text-xl">
                <History className="text-emerald-400" size={24} />{" "}
                <span>Activity Feed</span>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] text-emerald-400">
                Real-Time
              </span>
            </div>
            <div className="space-y-4">
              {ACTIVITY_LOG.map((item, i) => (
                <ActivityItem key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Analytics & Chart */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid items-center gap-32 lg:grid-cols-2">
          <PaymentDistributionChart />

          <div className="space-y-12">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Transparency <br />{" "}
              <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-[12px]">
                At Every Level.
              </span>
            </h2>
            <div className="space-y-10">
              <FeatureItem
                icon={ShieldCheck}
                title="Compliance & Control"
                desc="Set spending limits and approval workflows to prevent budget overruns before they happen."
              />
              <FeatureItem
                icon={Smartphone}
                title="Validation via Mobile"
                desc="Upload images directly to validate incentive execution and trigger EFT payments instantly."
              />
            </div>
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

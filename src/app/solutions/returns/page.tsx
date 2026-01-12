import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  RefreshCcw,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  LayoutDashboard,
  Package,
  Search,
} from "lucide-react"
import { ReturnsChart } from "./returns-chart"

export const metadata: Metadata = {
  title: "Returns Management | Paygos",
  description: "Streamline returns processing in convenience, fuel, and pharmacy sectors. Bring structure and visibility to your returns with validated processes and real-time tracking.",
  keywords: ["returns management", "product returns", "returns processing", "validated returns", "return analytics", "inventory returns", "replacement orders"],
  openGraph: {
    title: "Returns Management | Paygos",
    description: "Streamline returns processing in convenience, fuel, and pharmacy sectors. Bring structure and visibility to your returns with validated processes and real-time tracking.",
    url: "https://www.paygos.ca/solutions/returns",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Returns Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Returns Management | Paygos",
    description: "Streamline returns processing in convenience, fuel, and pharmacy sectors. Bring structure and visibility to your returns with validated processes and real-time tracking.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/solutions/returns",
  },
}

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section with Unsplash Background */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-slate-950 pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Unsplash Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Logistics and Returns Warehouse"
            fill
            priority
            className="object-cover opacity-40"
          />
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/20 px-3 py-1 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-teal-300 uppercase">
                Returns Management
              </span>
            </div>
            <h1 className="mb-8 text-5xl leading-[1.05] font-black tracking-tight text-white md:text-8xl">
              Reclaim Margin. <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Redeploy Time.
              </span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Returns in convenience, fuel, and independent pharmacy are often
              messy. Paygos brings structure and visibility to a part of your
              business long treated as a cost center.
            </p>
            <Link
              href="mailto:explorepaygos@paygos.ca"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-teal-500 px-10 py-5 text-lg font-black tracking-tighter text-slate-950 uppercase shadow-2xl shadow-teal-500/40 transition-all hover:bg-teal-400"
            >
              BOOK A CALL{" "}
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative z-20 container mx-auto -mt-12 px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50">
              <Package className="text-teal-600" />
            </div>
            <p className="mb-2 text-sm font-bold tracking-wider text-slate-500 uppercase">
              Total Number of Returns
            </p>
            <h2 className="text-4xl font-black tracking-tighter text-slate-900">
              55,717
            </h2>
          </div>
          <div className="flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50">
              <TrendingUp className="text-teal-600" />
            </div>
            <p className="mb-2 text-sm font-bold tracking-wider text-slate-500 uppercase">
              YTD Number of Returns
            </p>
            <h2 className="text-4xl font-black tracking-tighter text-slate-900">
              5,199
            </h2>
          </div>
          <div className="flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50">
              <LayoutDashboard className="text-teal-600" />
            </div>
            <p className="mb-2 text-sm font-bold tracking-wider text-slate-500 uppercase">
              Total Returned Quantity
            </p>
            <h2 className="text-4xl font-black tracking-tighter text-slate-900">
              2.51 M
            </h2>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-4xl leading-none font-black tracking-tighter text-slate-900 md:text-6xl">
                DATA THAT PAYS <br />
                <span className="text-teal-600 underline decoration-teal-200 underline-offset-8">
                  YOU BACK.
                </span>
              </h2>
              <p className="text-xl leading-relaxed font-medium text-slate-600">
                Analyze return rates by SKU, region, or retailer. Identify
                damage tied to shipping and optimize volumes based on real sales
                cadence.
              </p>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {["By SKU", "By Region", "By Packaging", "By Retailer"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 font-bold text-slate-800"
                    >
                      <CheckCircle2 className="text-teal-500" size={20} />{" "}
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <ReturnsChart />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-24 text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tighter md:text-6xl">
              WHAT PAYGOS DELIVERS
            </h2>
            <div className="mx-auto h-2 w-24 rounded-full bg-teal-500"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <div className="group rounded-[3rem] border-b-8 border-teal-500 bg-white p-12 shadow-xl transition-all hover:-translate-y-2">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                <RefreshCcw size={32} />
              </div>
              <h3 className="mb-4 text-3xl font-black tracking-tight text-slate-900">
                Replacement&mdash;Not Just Credit
              </h3>
              <p className="text-lg leading-relaxed font-medium text-slate-600">
                Bad goods don&apos;t mean lost sales. Stores can request
                replacements at the same time they submit a
                return&mdash;retaining shelf space and sell-through.
              </p>
            </div>

            <div className="group rounded-[3rem] border-b-8 border-slate-900 bg-white p-12 shadow-xl transition-all hover:-translate-y-2">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
                <Search size={32} />
              </div>
              <h3 className="mb-4 text-3xl font-black tracking-tight text-slate-900">
                Validated Returns
              </h3>
              <p className="text-lg leading-relaxed font-medium text-slate-600">
                Using image capture and scanning tech, returns are logged and
                verified at the store level. No forms. No calls. Your reps stay
                focused on growth.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              href="mailto:explorepaygos@paygos.ca"
              className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-12 py-6 text-xl font-black tracking-widest text-white uppercase transition-all hover:bg-teal-600"
            >
              BOOK A CALL <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 py-20 text-center">
        <Link
          href="/"
          className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-teal-600"
        >
          &larr; BACK TO OVERVIEW
        </Link>
      </footer>
    </main>
  )
}

import React from "react"
import Image from "next/image"
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

export default function PaygosOrderingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="mx-auto max-w-7xl pt-12 pb-16 text-center">
        <h2 className="mb-6 text-5xl font-black tracking-tight text-slate-900 md:text-7xl">
          Transform A Familiar Process <br />
          <span className="text-teal-600">Into A Revenue Driver</span>
        </h2>
        <p className="mx-auto max-w-3xl text-slate-600">
          Paygos empowers your reps, account managers, and retail partners to
          place and track orders for products and merchandising in one
          streamlined platform.
        </p>
      </header>

      {/* Bento Grid: Why CPG Teams Choose Paygos */}
      <section className="mx-auto mb-24 max-w-7xl">
        <div className="grid auto-rows-[320px] grid-cols-1 gap-4 md:grid-cols-6">
          {/* Card 1: All Orders, One Platform */}
          <div className="group relative overflow-hidden rounded-[1rem] bg-slate-900 md:col-span-4">
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Logistics warehouse"
              fill
              className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8">
              <Zap className="mb-4 text-teal-400" size={32} />
              <h3 className="mb-2 text-3xl font-bold text-white">
                All Orders, One Platform
              </h3>
              <p className="max-w-lg text-lg text-slate-200">
                Route orders to any distributor or internal warehouse with no
                channel confusion or manual handoffs.
              </p>
            </div>
          </div>

          {/* Card 2: Save Reps Time */}
          <div className="group relative overflow-hidden rounded-[1rem] md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80"
              alt="Data efficiency"
              fill
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <Clock className="mb-4 text-teal-400" size={32} />
              <h3 className="mb-2 text-2xl font-bold">Save Reps Time</h3>
              <p className="text-sm">
                Quick reorders and centralized tracking cut down on
                administrative load.
              </p>
            </div>
          </div>

          {/* Card 3: Products & Merchandising */}
          <div className="group relative overflow-hidden rounded-[1rem] bg-slate-100 md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
              alt="Retail shopping"
              fill
              className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <ShoppingBag className="mb-4 text-teal-600" size={32} />
              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                Products & Merch
              </h3>
              <p className="text-sm text-slate-600">
                Manage orders for both sellable goods and field marketing
                materials together.
              </p>
            </div>
          </div>

          {/* Card 4: Real-Time Visibility */}
          <div className="group relative overflow-hidden rounded-[1rem] bg-slate-800 md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
              alt="Tablet tracking"
              fill
              className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <Eye className="mb-4 text-teal-400" size={32} />
              <h3 className="mb-2 text-2xl font-bold text-white">
                Real-Time Visibility
              </h3>
              <p className="text-sm text-slate-300">
                Track progress from submission to fulfillment across all
                partners and territories.
              </p>
            </div>
          </div>

          {/* Card 5: Built for Independents */}
          <div className="group relative overflow-hidden rounded-[1rem] bg-teal-50 md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
              alt="Independent store"
              fill
              className="object-cover opacity-10 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <Store className="mb-4 text-teal-700" size={32} />
              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                Independent Focus
              </h3>
              <p className="text-sm text-slate-600">
                Designed for complexity in pet, convenience, pharmacy, and
                specialty retail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="mx-auto mb-12 max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-8 text-white md:p-16">
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl leading-tight font-black md:text-6xl">
                Real ROI: <br />
                <span className="font-black text-teal-500">
                  More Time = More Revenue
                </span>
              </h2>

              <div className="mb-10 space-y-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="mt-1 shrink-0 text-teal-500" />
                  <p className="text-lg text-slate-300">
                    Reps gain back up to{" "}
                    <span className="font-bold text-white">
                      15% of their time each week
                    </span>{" "}
                    by eliminating manual entry.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-teal-500" />
                  <p className="text-lg text-slate-300">
                    That is nearly{" "}
                    <span className="font-bold text-white">
                      50 more opportunities annually
                    </span>{" "}
                    to drive revenue and deepen relationships.
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-3 rounded-2xl bg-teal-600 px-8 py-5 text-xl font-black text-white shadow-xl shadow-teal-900/40 transition-all hover:bg-teal-500">
                Calculate ROI <ArrowRight />
              </button>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-md">
                <Calculator className="mx-auto mb-6 text-teal-500" size={48} />
                <div className="mb-2 text-8xl font-black tracking-tighter text-white">
                  15%
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                  Efficiency Gain
                </p>

                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <div className="text-3xl font-black text-white">50+</div>
                    <p className="mt-1 text-xs font-bold text-slate-500 uppercase">
                      Extra Visits/Year
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">0</div>
                    <p className="mt-1 text-xs font-bold text-slate-500 uppercase">
                      Distribution Changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import { Target, Heart, Lock, Eye, Handshake } from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternCircuit, PatternWaves } from "@/components/ui/patterns"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata: Metadata = {
  title: "About Us | Paygos",
  description: "Learn about our mission to transform sales automation.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-slate-800" data-navbar-theme="dark">
        <PatternWaves />
        <div className="text-hero">
          <small className="text-teal-400">About us</small>
          <h1>
            Built from Experience,
            <br />
            <span className="text-highlight">Designed for Growth</span>
          </h1>
          <p>
            How decades of real-world sales operations shaped the platform that
            empowers teams today
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Our Story - Refined Article Style */}
      <section className="py-16" data-navbar-theme="light">
        <article className="mx-auto max-w-2xl px-6">
          {/* Author / Signature Section */}
          <div className="flex items-center gap-4 pb-8">
            <div className="relative h-16 w-16 overflow-hidden rounded-full md:h-20 md:w-20">
              <Image
                src="/paygos/hesham.jpg"
                alt="Hesham Shafie - President of Paygos"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-bold">Hesham Shafie</p>
              <p className="text-sm font-medium text-teal-600">
                President, Paygos
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="space-y-6 text-lg text-slate-600">
            <p className="text-justify first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900">
              Paygos was built from real-world experience. For decades,
              we&apos;ve operated large, distributed sales organizations,
              supported thousands of sales representatives, and built and
              managed consumer brands ourselves. Along the way, we tested
              countless technologies and learned, firsthand, what actually works
              and what doesn&apos;t. What we saw was consistent: sales teams
              were spending too much time on administration and disconnected
              systems, and not enough time building relationships and selling
              with confidence.
            </p>

            <div className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              So we built Paygos.
            </div>

            {/* Quote/Mission Pull-out */}
            <blockquote className="relative border-l-4 border-teal-500 bg-slate-50 py-8 pr-6 pl-8">
              <p className="text-justify text-lg font-medium text-slate-800 italic md:text-xl">
                &ldquo;Our mission is simple: to equip sales organizations with
                the right tools and the right information, at the right time, so
                sales reps can focus on relationships, fact-based selling, and
                growth.&rdquo;
              </p>
            </blockquote>
            <div className="text-justify">
              <p>
                Security and trust are foundational to everything we do. Data is
                encrypted. Payments are validated before clearing. Controls are
                built in to ensure compliance, transparency, and integrity at
                every step.
              </p>
              <br />
              <p>
                Beyond automation, Paygos turns data from the field, customers,
                retailers, and distributors into actionable insights that help
                our clients continuously advance their business and grow their
                brands.
              </p>
            </div>

            {/* Stats Grid - More Sophisticated Layout */}
            <div className="my-6 grid grid-cols-1 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="flex flex-col items-center p-8 text-center">
                <span className="text-4xl font-bold tracking-tight text-teal-600 md:text-5xl">
                  20+
                </span>
                <span className="mt-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Years of Dev
                </span>
              </div>
              <div className="flex flex-col items-center p-8 text-center">
                <span className="text-4xl font-bold tracking-tight text-teal-600 md:text-5xl">
                  3
                </span>
                <span className="mt-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Countries Served
                </span>
              </div>
              <div className="flex flex-col items-center p-8 text-center">
                <span className="text-4xl font-bold tracking-tight text-teal-600 md:text-5xl">
                  1000s
                </span>
                <span className="mt-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Reps Supported
                </span>
              </div>
            </div>
            <div className="text-justify">
              <p>
                Paygos is the result of over 20 years of learning, refining, and
                building, supported by industry recognition and
                government-backed research and development funding, and is
                deployed with clients across North America, including Canada,
                the United States, and Mexico.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="rounded-lg bg-slate-100 p-8 text-center text-slate-500 italic">
              <div className="mx-auto" />
              <p className="text-md text-justify">
                At our core, we are rooted in goodness, transparency, and trust.
                We partner with our clients to help them grow their business
                with confidence.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Our Values - Bento Grid */}
      <section className="bg-slate-200 py-16" data-navbar-theme="light">
        <div className="section-container">
          <h2 className="mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Goodness - Large card spanning full height */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-lg p-8 text-white lg:row-span-4">
              <Image
                src="https://images.unsplash.com/photo-1579208575657-c595a05383b7"
                alt="People holding hands together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-white/20">
                <Heart className="h-9 w-9 text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="mb-2 text-3xl! font-bold md:text-5xl!">
                  Goodness
                </h3>
                <p className="text-lg text-white/90">
                  At our core, we believe in doing what&apos;s right. We lead
                  with empathy, act with integrity, and strive to make a
                  positive impact in everything we do.
                </p>
              </div>
            </div>

            {/* Customer Focus */}
            <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Target className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Customer Focus</h3>
                <p className="text-sm text-gray-600">
                  Your success is our success.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Eye className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Transparency</h3>
                <p className="text-sm text-gray-600">
                  Open communication and clear expectations.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Lock className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Security</h3>
                <p className="text-sm text-gray-600">
                  Your data protection is our priority.
                </p>
              </div>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Handshake className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Trust</h3>
                <p className="text-sm text-gray-600">
                  Building lasting partnerships through reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - White Background */}
      <section
        className="relative bg-emerald-900 py-16"
        data-navbar-theme="light"
      >
        <PatternCircuit />
        <div className="section-container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 text-white md:grid-cols-2 md:items-center">
              {/* Text Content */}
              <div>
                <h2 className="mb-4">Our Team</h2>
                <div className="space-y-4">
                  <p>
                    Behind Paygos is a diverse team of passionate innovators,
                    engineers, designers, and sales experts who share a common
                    goal: making sales automation accessible and effective for
                    businesses of all sizes.
                  </p>
                  <p>
                    We foster a culture of collaboration, continuous learning,
                    and customer obsession. Every team member brings unique
                    perspectives and expertise, contributing to our mission of
                    transforming the sales landscape.
                  </p>
                  <p className="font-semibold text-gray-400">
                    Together, we build the future of sales—one innovation at a
                    time.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-navbar-theme="light">
        <CTA />
      </section>
    </main>
  )
}

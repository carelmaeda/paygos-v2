"use client"

import Image from "next/image"
import { Target, Heart, Lock, Eye, Handshake } from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternCircuit, PatternWaves } from "@/components/ui/patterns"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-slate-800" data-navbar-theme="dark">
        <PatternWaves />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
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
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Our Story - Refined Article Style */}
      <section className="py-16" data-navbar-theme="light">
        <article className="mx-auto max-w-2xl px-6">
          {/* Author / Signature Section */}
          <MotionSection
            as="div"
            variant="fadeIn"
            className="flex items-center gap-4 pb-8"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full md:h-20 md:w-20">
              <Image
                src="/paygos/hesham.jpg"
                alt="Hesham Shafie - President of Paygos"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-bold">Hesham Shafie</p>
              <p className="text-sm font-medium text-teal-600">
                President, Paygos
              </p>
            </div>
          </MotionSection>

          {/* Article Content */}
          <div className="space-y-6 text-lg text-slate-600">
            <MotionSection
              as="p"
              variant="slideUp"
              className="text-justify first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900"
            >
              Paygos was built from real-world experience. For decades,
              we&apos;ve operated large, distributed sales organizations,
              supported thousands of sales representatives, and built and
              managed consumer brands ourselves. Along the way, we tested
              countless technologies and learned, firsthand, what actually works
              and what doesn&apos;t. What we saw was consistent: sales teams
              were spending too much time on administration and disconnected
              systems, and not enough time building relationships and selling
              with confidence.
            </MotionSection>

            <MotionSection
              as="div"
              variant="slideUp"
              className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl"
            >
              So we built Paygos.
            </MotionSection>

            {/* Quote/Mission Pull-out */}
            <MotionSection
              as="blockquote"
              variant="slideInLeft"
              className="relative border-l-4 border-teal-500 bg-slate-50 py-8 pr-6 pl-8"
            >
              <p className="text-justify text-lg font-medium text-slate-800 italic md:text-xl">
                &ldquo;Our mission is simple: to equip sales organizations with
                the right tools and the right information, at the right time, so
                sales reps can focus on relationships, fact-based selling, and
                growth.&rdquo;
              </p>
            </MotionSection>

            <MotionSection as="div" variant="slideUp" className="text-justify">
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
            </MotionSection>

            {/* Stats Grid - More Sophisticated Layout */}
            <MotionSection
              as="div"
              variant="scaleIn"
              className="my-6 grid grid-cols-1 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            >
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
            </MotionSection>

            <MotionSection as="div" variant="slideUp" className="text-justify">
              <p>
                Paygos is the result of over 20 years of learning, refining, and
                building, supported by industry recognition and
                government-backed research and development funding, and is
                deployed with clients across North America, including Canada,
                the United States, and Mexico.
              </p>
            </MotionSection>

            {/* Closing Statement */}
            <MotionSection
              as="div"
              variant="fadeIn"
              className="rounded-lg bg-slate-100 p-8 text-center text-slate-500 italic"
            >
              <div className="mx-auto" />
              <p className="text-md text-justify">
                At our core, we are rooted in goodness, transparency, and trust.
                We partner with our clients to help them grow their business
                with confidence.
              </p>
            </MotionSection>
          </div>
        </article>
      </section>

      {/* Our Values - Bento Grid */}
      <section className="bg-slate-200 py-16" data-navbar-theme="light">
        <div className="section-container">
          <MotionSection
            as="h2"
            variant="slideUp"
            className="mb-12 text-center"
          >
            Our Values
          </MotionSection>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Goodness - Large card spanning full height */}
            <MotionSection
              as="div"
              variant="slideInLeft"
              className="relative flex flex-col justify-between overflow-hidden rounded-lg p-8 text-white lg:row-span-4"
            >
              <Image
                src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=800&q=75"
                alt="People holding hands together"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
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
            </MotionSection>

            {/* Customer Focus */}
            <MotionSection
              as="div"
              variant="slideUp"
              className="flex items-center gap-4 rounded-lg bg-gray-100 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Target className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Customer Focus</h3>
                <p className="text-sm text-gray-600">
                  Your success is our success.
                </p>
              </div>
            </MotionSection>

            {/* Transparency */}
            <MotionSection
              as="div"
              variant="slideUp"
              className="flex items-center gap-4 rounded-lg bg-gray-100 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Eye className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Transparency</h3>
                <p className="text-sm text-gray-600">
                  Open communication and clear expectations.
                </p>
              </div>
            </MotionSection>

            {/* Security */}
            <MotionSection
              as="div"
              variant="slideUp"
              className="flex items-center gap-4 rounded-lg bg-gray-100 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Lock className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Security</h3>
                <p className="text-sm text-gray-600">
                  Your data protection is our priority.
                </p>
              </div>
            </MotionSection>

            {/* Trust */}
            <MotionSection
              as="div"
              variant="slideUp"
              className="flex items-center gap-4 rounded-lg bg-gray-100 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Handshake className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Trust</h3>
                <p className="text-sm text-gray-600">
                  Building lasting partnerships through reliability.
                </p>
              </div>
            </MotionSection>
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
              <MotionSection as="div" variant="slideUp">
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
              </MotionSection>

              {/* Image */}
              <MotionSection
                as="div"
                variant="scaleIn"
                className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=75"
                  alt="Team collaboration"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </MotionSection>
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

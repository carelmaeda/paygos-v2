"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, PawPrint } from "lucide-react"
import { CustomersLogosCarousel } from "@/components/sections/customers/CustomersLogosCarousel"
import { PatternDiagonal } from "@/components/ui/patterns"
import { Badge } from "@/components/ui/badge"
import { CustomerStoriesCarousel } from "@/components/sections/customers/CustomerStoriesCarousel"
import { CTA } from "@/components/sections/cta/CTA"
import { MotionSection } from "@/components/motion"

export default function CustomersPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="hero-sm bg-teal-950" data-navbar-theme="dark">
        <PatternDiagonal />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero pt-24"
          viewport={{ once: true }}
        >
          <small className="text-teal-400">Real Results • Proven Impact</small>
          <h1>
            Customer {""}
            <span className="text-highlight">Stories</span>
          </h1>
          <p>
            Discover how leading brands use Paygos to streamline operations,
            empower their teams, and drive measurable business growth through
            real-world success stories.
          </p>
        </MotionSection>
        {/* LOGOS */}
        <MotionSection
          as="div"
          variant="fadeIn"
          className="pt-8 opacity-60"
          viewport={{ once: true }}
        >
          <CustomersLogosCarousel />
        </MotionSection>
      </section>

      {/* Featured Story */}
      <MotionSection as="div" variant="scaleIn" data-navbar-theme="light">
        <Link href="/customers/vet-growth" className="group block">
          <section className="section-container relative my-8 min-h-[65vh] overflow-hidden rounded-lg transition-transform duration-300 group-hover:shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1655210913315-e8147faf7600?w=1200&q=75"
              alt="Pet Food"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            <div className="absolute inset-0 flex items-end">
              <div className="section-container space-y-4 pb-16 md:pb-24">
                <Badge className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white ring-1 ring-white/20 backdrop-blur-md">
                  <PawPrint size={32} />
                  Veterinary
                </Badge>

                <h2 className="font-black text-white">
                  50% Reduction in Order Processing Time
                </h2>

                <p className="mb-8 max-w-md text-gray-200">
                  How this Veterinary Industry leader streamlined their
                  operations with field sales automation, dramatically improving
                  efficiency.
                </p>

                <div className="inline-flex items-center gap-2 font-medium text-white transition-colors group-hover:underline">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </section>
        </Link>
      </MotionSection>

      <section className="py-8">
        <MotionSection as="div" variant="slideUp" className="text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">All Stories</h2>
          <p>
            Built in partnership with PAYGOS, told through real customer
            stories.
          </p>
        </MotionSection>
        <MotionSection as="div" variant="slideInRight">
          <CustomerStoriesCarousel />
        </MotionSection>
      </section>

      <CTA />
    </main>
  )
}

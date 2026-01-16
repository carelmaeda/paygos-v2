import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, PawPrint } from "lucide-react"
import { CustomersLogosCarousel } from "@/components/sections/customers/CustomersLogosCarousel"
import { PatternDiagonal } from "@/components/ui/patterns"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CustomerStoriesCarousel } from "@/components/sections/customers/CustomerStoriesCarousel"
import { CTA } from "@/components/sections/cta/CTA"

export const metadata: Metadata = {
  title: "Customer Stories | Paygos",
  description:
    "Discover how businesses across finance, food & beverage, healthcare, manufacturing, retail, and technology sectors achieve success with Paygos sales automation platform.",
  keywords: [
    "customer success stories",
    "case studies",
    "client testimonials",
    "success stories",
    "Paygos customers",
    "sales automation results",
    "customer wins",
  ],
  openGraph: {
    title: "Customer Stories | Paygos",
    description:
      "Discover how businesses across finance, food & beverage, healthcare, manufacturing, retail, and technology sectors achieve success with Paygos sales automation platform.",
    url: "https://www.paygos.ca/customers",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Customer Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Stories | Paygos",
    description:
      "Discover how businesses across finance, food & beverage, healthcare, manufacturing, retail, and technology sectors achieve success with Paygos sales automation platform.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/customers",
  },
}

export default function CustomersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-teal-950" data-navbar-theme="dark">
        <PatternDiagonal />
        <div className="text-hero pt-24">
          <small className="text-teal-400">Real Results • Proven Impact</small>
          <h1>
            Customer {""}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p>
            Discover how leading brands use Paygos to streamline operations,
            empower their teams, and drive measurable business growth through
            real-world success stories.
          </p>
        </div>
        {/* LOGOS */}
        <div className="pt-20 pb-8 opacity-60">
          <CustomersLogosCarousel />
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-container relative my-8 min-h-[65vh] overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1655210913315-e8147faf7600"
          alt="Pet Food"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="section-container space-y-4 pb-16 md:pb-24">
            <Badge variant="secondary" className="badge badge-vet">
              <PawPrint size={32} />
              Veterinary
            </Badge>
            <h2 className="font-black text-white">
              50% Reduction in Order Processing Time
            </h2>
            <p className="mb-8 max-w-md text-gray-200">
              How this Veterinary Indutry leader streamlined their operations
              with field sales automation, dramatically improving efficiency.
            </p>

            <Button
              variant="link"
              asChild
              className="text-white transition-colors hover:text-teal-400"
            >
              <Link
                href="/customers/vet-growth"
                className="inline-flex items-center gap-2"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">All Stories</h2>
          <p>
            Built in partnership with PAYGOS, told through real customer
            stories.
          </p>
        </div>
        <CustomerStoriesCarousel />
      </section>

      <CTA />
    </main>
  )
}

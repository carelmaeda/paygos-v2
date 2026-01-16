import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata: Metadata = {
  title: "Healthcare Compliance Success Story | Paygos",
  description:
    "See how healthcare organizations maintain compliance with Paygos. Explore automated compliance tracking, regulatory adherence, and risk mitigation strategies.",
  keywords: [
    "healthcare compliance",
    "regulatory compliance",
    "healthcare automation",
    "compliance tracking",
    "risk management",
    "pharmaceutical sales",
    "medical compliance",
  ],
  openGraph: {
    title: "Healthcare Compliance Success Story | Paygos",
    description:
      "See how healthcare organizations maintain compliance with Paygos. Explore automated compliance tracking, regulatory adherence, and risk mitigation strategies.",
    url: "https://www.paygos.ca/customers/healthcare-compliance",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Healthcare Compliance Success Story",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Compliance Success Story | Paygos",
    description:
      "See how healthcare organizations maintain compliance with Paygos. Explore automated compliance tracking, regulatory adherence, and risk mitigation strategies.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/customers/healthcare-compliance",
  },
}

export default function HealthcareCompliancePage() {
  return (
    <main className="min-h-screen bg-gray-50" data-navbar-theme="light">
      <div className="container pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Return Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link
              href="/customers"
              className="inline-flex items-center gap-2"
              aria-label="Return to customer stories"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Stories
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-lg">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
              alt="HealthPro Solutions"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

            {/* Content Overlay */}
            <div className="absolute right-0 bottom-0 left-0 p-8 text-white">
              <div className="mb-4 inline-block rounded-lg bg-white p-4">
                <Image
                  src="/customers/logos/healthpro.svg"
                  alt="HealthPro Solutions"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h1 className="mb-2 text-3xl font-bold md:text-5xl">
                100% compliance tracking achieved
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  Healthcare
                </span>
                <span className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  Compliance
                </span>
              </div>
            </div>
          </div>
        </div>

        <Breadcrumbs />

        {/* Story Content */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              HealthPro Solutions maintains perfect compliance records with
              automated training management.
            </p>

            {/* Add your custom content here */}
            <p>
              Add more detailed story content, testimonials, metrics, and other
              information here. You can use any HTML/Tailwind markup you want.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

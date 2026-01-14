import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomersLogosCarousel } from "@/components/sections/customers/CustomersLogosCarousel"

export const metadata: Metadata = {
  title: "Customer Stories | Paygos",
  description: "Discover how businesses across finance, food & beverage, healthcare, manufacturing, retail, and technology sectors achieve success with Paygos sales automation platform.",
  keywords: ["customer success stories", "case studies", "client testimonials", "success stories", "Paygos customers", "sales automation results", "customer wins"],
  openGraph: {
    title: "Customer Stories | Paygos",
    description: "Discover how businesses across finance, food & beverage, healthcare, manufacturing, retail, and technology sectors achieve success with Paygos sales automation platform.",
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
    description: "Discover how businesses across finance, food & beverage, healthcare, manufacturing, retail, and technology sectors achieve success with Paygos sales automation platform.",
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
    <main className="min-h-screen bg-gray-50" data-navbar-theme="light">
      <div className="container pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Return Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Return to homepage"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Customer Stories
          </h1>
        </div>
        <CustomersLogosCarousel />

        <div></div>
      </div>
    </main>
  )
}

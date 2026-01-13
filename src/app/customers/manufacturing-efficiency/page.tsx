import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Manufacturing Efficiency Success Story | Paygos",
  description: "Learn how manufacturers boost efficiency with Paygos. Discover streamlined operations, reduced waste, improved productivity, and optimized supply chain management.",
  keywords: ["manufacturing efficiency", "operational efficiency", "productivity improvement", "supply chain optimization", "manufacturing automation", "lean manufacturing", "process optimization"],
  openGraph: {
    title: "Manufacturing Efficiency Success Story | Paygos",
    description: "Learn how manufacturers boost efficiency with Paygos. Discover streamlined operations, reduced waste, improved productivity, and optimized supply chain management.",
    url: "https://www.paygos.ca/customers/manufacturing-efficiency",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Manufacturing Efficiency Success Story",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Efficiency Success Story | Paygos",
    description: "Learn how manufacturers boost efficiency with Paygos. Discover streamlined operations, reduced waste, improved productivity, and optimized supply chain management.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/customers/manufacturing-efficiency",
  },
}

export default function ManufacturingEfficiencyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container py-16 md:py-24">
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
        <div className="relative mb-12 overflow-hidden rounded-xl">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop"
              alt="ManuTech Industries"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-4 inline-block rounded-lg bg-white p-4">
                <Image
                  src="/customers/logos/manutech.svg"
                  alt="ManuTech Industries"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h1 className="mb-2 text-3xl font-bold md:text-5xl">
                50% reduction in order processing time
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  Manufacturing
                </span>
                <span className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  Efficiency
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Streamlining operations with field sales automation to improve
              manufacturing efficiency.
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

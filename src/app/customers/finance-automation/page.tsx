import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Finance Automation Success Story | Paygos",
  description: "Learn how finance companies achieve automation success with Paygos. Discover improved efficiency, reduced costs, and streamlined financial processes.",
  keywords: ["finance automation", "financial services", "process automation", "cost reduction", "finance efficiency", "customer success", "case study"],
  openGraph: {
    title: "Finance Automation Success Story | Paygos",
    description: "Learn how finance companies achieve automation success with Paygos. Discover improved efficiency, reduced costs, and streamlined financial processes.",
    url: "https://www.paygos.ca/customers/finance-automation",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Finance Automation Success Story",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Automation Success Story | Paygos",
    description: "Learn how finance companies achieve automation success with Paygos. Discover improved efficiency, reduced costs, and streamlined financial processes.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/customers/finance-automation",
  },
}

export default function FinanceAutomationPage() {
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
        <div className="relative mb-12 overflow-hidden rounded-xl">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt="FinanceFirst"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-4 inline-block rounded-lg bg-white p-4">
                <Image
                  src="/customers/logos/financefirst.svg"
                  alt="FinanceFirst"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h1 className="mb-2 text-3xl font-bold md:text-5xl">
                Automated rebate processing saves 15 hours weekly
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  Finance
                </span>
                <span className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  Automation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              FinanceFirst leveraged Paygos to automate complex rebate
              calculations and approvals.
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

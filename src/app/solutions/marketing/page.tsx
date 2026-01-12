import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Megaphone } from "lucide-react"

export const metadata: Metadata = {
  title: "Marketing Solutions | Paygos",
  description: "Keep your customers up-to-date with Paygos marketing solutions. Automated campaigns, targeted communications, and integrated marketing tools for sales teams.",
  keywords: ["marketing automation", "sales marketing", "customer communication", "marketing campaigns", "targeted marketing", "promotional marketing", "trade marketing", "retail marketing"],
  openGraph: {
    title: "Marketing Solutions | Paygos",
    description: "Keep your customers up-to-date with Paygos marketing solutions. Automated campaigns, targeted communications, and integrated marketing tools for sales teams.",
    url: "https://www.paygos.ca/solutions/marketing",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Marketing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Solutions | Paygos",
    description: "Keep your customers up-to-date with Paygos marketing solutions. Automated campaigns, targeted communications, and integrated marketing tools for sales teams.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/solutions/marketing",
  },
}

export default function MarketingPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="container">
        {/* Hero Section */}
        <div className="mb-12 rounded-lg bg-white p-6 text-center">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
            <Megaphone className="h-8 w-8" />
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Marketing</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Keep your customers up-to-date.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative mx-auto mb-12 h-96 max-w-4xl overflow-hidden rounded-lg bg-gray-100">
          <Image
            src="/solutions/marketing.svg"
            alt="Marketing"
            fill
            className="object-cover"
          />
        </div>

        {/* Content sections - customize as needed */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">Overview</h2>
          <p className="text-lg text-gray-600">
            Add your custom content here. You can add any HTML/Tailwind markup you want.
          </p>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-teal-950 p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="mb-6 text-lg text-gray-200">
            Contact us today to learn more.
          </p>
          <Link
            href="#"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-teal-950 transition-colors hover:bg-gray-100"
          >
            Schedule a Demo
          </Link>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-teal-700 hover:text-teal-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

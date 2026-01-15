import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero/Hero"
import { SolutionsSection } from "@/components/sections/solutions/SolutionsSection"
import { DataAnalytics } from "@/components/sections/solutions/DataAnalyticsSection"
import { FieldSales } from "@/components/sections/solutions/FieldSales"
import { CTA } from "@/components/sections/cta/CTA"
import { CustomerStoriesCarousel } from "@/components/sections/customers/CustomerStoriesCarousel"

export const metadata: Metadata = {
  title: "Paygos - Sales Automation Platform",
  description:
    "Empower your sales teams with Paygos. Automated payments, returns management, rebates, ordering, field sales, and analytics solutions for modern businesses.",
  keywords: [
    "sales automation",
    "field sales automation",
    "payment solutions",
    "returns management",
    "rebates platform",
    "ordering system",
    "sales analytics",
  ],
  openGraph: {
    title: "Paygos - Sales Automation Platform",
    description:
      "Empower your sales teams with Paygos. Automated payments, returns management, rebates, ordering, field sales, and analytics solutions for modern businesses.",
    url: "https://www.paygos.ca",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos - Sales Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paygos - Sales Automation Platform",
    description:
      "Empower your sales teams with Paygos. Automated payments, returns management, rebates, ordering, field sales, and analytics solutions for modern businesses.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca",
  },
}

export default function Home() {
  return (
    <>
      {/* Hero - Dark background */}
      <section data-navbar-theme="dark">
        <Hero />
      </section>

      {/* Solutions - Light background */}
      <section data-navbar-theme="light">
        <SolutionsSection />
      </section>

      {/* FieldSales - Dark background */}
      <section data-navbar-theme="dark">
        <FieldSales />
      </section>

      {/* DataAnalytics - Light background */}
      <section data-navbar-theme="light">
        <DataAnalytics />
      </section>

      {/* CustomerStories - Light background */}
      <section data-navbar-theme="dark">
        <CustomerStoriesCarousel />
      </section>

      {/* CTA - Light background */}
      <section data-navbar-theme="light">
        <CTA />
      </section>
    </>
  )
}

import type { Metadata } from "next"
import { Hero } from "./_components/sections/hero/Hero"
import { SolutionsSection } from "./_components/sections/solutions/SolutionsSection"
import { DataAnalytics } from "./_components/sections/solutions/DataAnalytics"
import { FieldSales } from "./_components/sections/solutions/FieldSales"
import { CTA } from "./_components/sections/cta/CTA"
import { CustomerStoriesCarousel } from "./_components/sections/customers/CustomerStoriesCarousel"

export const metadata: Metadata = {
  title: "Paygos - Sales Automation Platform",
  description: "Empower your sales teams with Paygos. Automated payments, returns management, rebates, ordering, field sales, and analytics solutions for modern businesses.",
  keywords: ["sales automation", "field sales automation", "payment solutions", "returns management", "rebates platform", "ordering system", "sales analytics"],
  openGraph: {
    title: "Paygos - Sales Automation Platform",
    description: "Empower your sales teams with Paygos. Automated payments, returns management, rebates, ordering, field sales, and analytics solutions for modern businesses.",
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
    description: "Empower your sales teams with Paygos. Automated payments, returns management, rebates, ordering, field sales, and analytics solutions for modern businesses.",
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
      <Hero />
      <SolutionsSection />
      <FieldSales />
      <DataAnalytics />
      <CustomerStoriesCarousel />
      <CTA />
    </>
  )
}

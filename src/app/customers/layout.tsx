import type { Metadata } from "next"

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

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

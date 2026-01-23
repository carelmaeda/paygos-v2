import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ROI Calculator | Paygos",
  description:
    "Calculate your return on investment from Paygos sales automation solutions. Estimate savings from Sales Acceleration and Field Sales Automation platforms.",
  keywords: [
    "ROI calculator",
    "sales automation ROI",
    "field sales ROI",
    "sales acceleration",
    "investment calculator",
    "business savings",
  ],
  openGraph: {
    title: "ROI Calculator | Paygos",
    description:
      "Calculate your return on investment from Paygos sales automation solutions. Estimate savings from Sales Acceleration and Field Sales Automation platforms.",
    url: "https://www.paygos.ca/roi",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos ROI Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROI Calculator | Paygos",
    description:
      "Calculate your return on investment from Paygos sales automation solutions. Estimate savings from Sales Acceleration and Field Sales Automation platforms.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/roi",
  },
}

export default function RoiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

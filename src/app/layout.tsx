import type { Metadata } from "next"
import { Inter, Urbanist } from "next/font/google"
import "@/styles/globals.scss"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/sonner"
import { MotionProvider } from "@/components/motion"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Paygos - Sales Automation Platform",
  description: "Transform your sales operations with Paygos. Modern sales automation platform for payments, returns, rebates, ordering, and field sales management.",
  keywords: ["sales automation", "field sales", "payment processing", "returns management", "rebates", "ordering system", "analytics"],
  openGraph: {
    title: "Paygos - Sales Automation Platform",
    description: "Transform your sales operations with Paygos. Modern sales automation platform for payments, returns, rebates, ordering, and field sales management.",
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
    description: "Transform your sales operations with Paygos. Modern sales automation platform for payments, returns, rebates, ordering, and field sales management.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${urbanist.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </MotionProvider>
      </body>
    </html>
  )
}

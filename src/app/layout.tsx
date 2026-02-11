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
  display: "swap",
  preload: true,
  adjustFontFallback: true, // Adjusts fallback font metrics to minimize CLS
})

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true, // Adjusts fallback font metrics to minimize CLS
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
      <head>
        {/* Preload LCP image for faster rendering */}
        <link
          rel="preload"
          href="/paygos/paygos-hero.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Critical CSS for above-the-fold content - prevents flash of unstyled content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root{--background:#fff;--foreground:#0f172a}
              *,*::before,*::after{box-sizing:border-box}
              body{margin:0;background:var(--background);color:var(--foreground);-webkit-font-smoothing:antialiased;font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif}
              h1,h2,h3{font-family:var(--font-urbanist),ui-sans-serif,system-ui,sans-serif;line-height:0.9}
              .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${urbanist.variable} antialiased`}
        // suppressHydrationWarning needed for browser extensions that modify DOM before hydration
        suppressHydrationWarning={true}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          Skip to main content
        </a>
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

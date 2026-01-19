import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { PatternDots } from "@/components/ui/patterns"

// ============================================
// COMPONENT
// ============================================

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-cyan-950 text-gray-300">
      <PatternDots />

      <div className="section-container relative z-10 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/paygos/logo-full-white.webp"
                alt="Paygos"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="my-4 max-w-xs text-sm leading-relaxed">
              Our customizable sales acceleration platform is designed to drive
              incremental revenue, automate manual processes and surface
              actionable sales data & analytics.
            </p>

            <div>
              <small className="text-xs">Follow us on LinkedIn</small>
              {/* Social Links */}
              <div className="flex gap-4">
                <Link
                  href="#"
                  aria-label="Follow us on LinkedIn"
                  className="transition-colors hover:text-teal-400"
                >
                  <Linkedin className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Products
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/sales-acceleration"
                  className="transition-colors hover:text-white"
                >
                  Sales Acceleration
                </Link>
              </li>
              <li>
                <Link
                  href="/fsa"
                  className="transition-colors hover:text-white"
                >
                  Field Sales Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/customers"
                  className="transition-colors hover:text-white"
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/roi"
                  className="transition-colors hover:text-white"
                >
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>&copy; {currentYear} Paygos. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                target="_blank"
                href="https://brandmomentum.ca/privacy-policy/"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                target="_blank"
                href="https://brandmomentum.ca/multi-year-accessibility-plan/"
                className="transition-colors hover:text-white"
              >
                Accessibility Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

// ============================================
// COMPONENT
// ============================================

/**
 * Footer Component
 * Site-wide footer with navigation links, company info, and social media
 * Appears on all pages via root layout
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container py-12 md:py-16">
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
              A customizable sales acceleration platform designed to drive
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
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Follow us on Twitter"
                  className="hidden transition-colors hover:text-teal-400"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Follow us on Facebook"
                  className="hidden transition-colors hover:text-teal-400"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Follow us on Instagram"
                  className="hidden transition-colors hover:text-teal-400"
                >
                  <Instagram className="h-5 w-5" />
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
                  href="/solutions/ordering"
                  className="transition-colors hover:text-white"
                >
                  Optimized Ordering
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/rebates"
                  className="transition-colors hover:text-white"
                >
                  Rebates Management
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/training"
                  className="transition-colors hover:text-white"
                >
                  Training & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/analytics"
                  className="transition-colors hover:text-white"
                >
                  Analytics & Reporting
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/field-sales"
                  className="transition-colors hover:text-white"
                >
                  Field Sales Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/inventory"
                  className="transition-colors hover:text-white"
                >
                  Inventory Management
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
                <Link href="#" className="transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Press
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
                <Link href="#" className="transition-colors hover:text-white">
                  Roi Calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Status Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
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
              <Link
                target="_blank"
                href="#"
                className="transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>
              <Link
                target="_blank"
                href="#"
                className="transition-colors hover:text-white"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

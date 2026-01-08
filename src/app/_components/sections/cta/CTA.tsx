import { BookCallButton } from "./BookCallButton"

// ============================================
// COMPONENT
// ============================================

/**
 * CTA Component
 * Call-to-action section with large heading and Book a Call button
 * Centered layout with responsive typography
 */
export function CTA() {
  return (
    <section className="cta bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {/* Main CTA Heading */}
          <h2 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to accelerate your sales?
          </h2>

          {/* CTA Button */}
          <BookCallButton />
        </div>
      </div>
    </section>
  )
}

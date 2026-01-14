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
    <section className="bg-gray-200 py-16">
      <div className="mx-auto text-center">
        {/* Main CTA Heading */}
        <h2 className="mb-8">Ready to accelerate your sales?</h2>
        {/* CTA Button */}
        <BookCallButton />
      </div>
    </section>
  )
}

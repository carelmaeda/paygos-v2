"use client"

import { BookCallButton } from "./BookCallButton"
import { MotionSection } from "@/components/motion"

/**
 * CTA Component
 * Call-to-action section with large heading and Book a Call button
 * Centered layout with responsive typography
 */
export function CTA() {
  return (
    <section className="bg-gray-200 px-4 py-16">
      <div className="mx-auto text-center">
        {/* Main CTA Heading */}
        <MotionSection as="div" variant="slideUp">
          <h2 className="mb-8">Ready to accelerate your sales?</h2>
        </MotionSection>
        {/* CTA Button */}
        <MotionSection as="div" variant="scaleIn">
          <BookCallButton />
        </MotionSection>
      </div>
    </section>
  )
}

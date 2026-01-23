"use client"

import { MotionSection } from "@/components/motion"

export function CustomerStoriesHeader() {
  return (
    <MotionSection
      as="div"
      variant="slideUp"
      className="section-container space-y-8 text-center"
    >
      <h2 className="mb-3">What would you do with more time?</h2>
      <p className="text-gray-300">
        Discover how PAYGOS customers turned saved time into real results.
      </p>
    </MotionSection>
  )
}

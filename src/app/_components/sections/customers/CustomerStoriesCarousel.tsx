"use client"

import { useState, useEffect, useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { CustomerStoryCard } from "./CustomerStoryCard"
import { customerStories } from "./data/customer-stories"

// Swiper styles - imported once
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// ============================================
// STATIC CONFIGURATION
// ============================================
// Extract static config outside component to prevent recreation on each render
// This improves performance by avoiding unnecessary object allocations

/** Swiper modules array - prevents recreation on each render */
const SWIPER_MODULES = [Pagination, Navigation]

/** Pagination configuration for dot indicators */
const PAGINATION_CONFIG = {
  clickable: true, // Allow users to click dots to navigate
  dynamicBullets: true, // Condense dots when there are many slides
}

/** Responsive breakpoints for different screen sizes */
const BREAKPOINTS_CONFIG = {
  640: {
    // Small tablets and large phones
    slidesPerView: 1.5, // Show 1.5 slides for swipe hint
    spaceBetween: 20,
  },
  768: {
    // Tablets
    slidesPerView: 2, // Show 2 full cards
    spaceBetween: 24,
  },
  1024: {
    // Desktop
    slidesPerView: 3, // Show 3 full cards
    spaceBetween: 30,
  },
}

// ============================================
// COMPONENT
// ============================================

export function CustomerStoriesCarousel() {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  // Track if viewport is mobile size (<768px) for conditional rendering
  const [isMobile, setIsMobile] = useState(false)

  // ============================================
  // VIEWPORT DETECTION
  // ============================================
  // Use matchMedia API for efficient viewport tracking
  // More performant than resize listeners as it uses native browser APIs
  useEffect(() => {
    // Define media query for mobile detection
    const mediaQuery = window.matchMedia("(max-width: 767px)")

    // Handler function to update mobile state
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches)
    }

    // Set initial state
    handleMediaChange(mediaQuery)

    // Listen for changes (modern browsers)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange)
      return () => mediaQuery.removeEventListener("change", handleMediaChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleMediaChange)
      return () => mediaQuery.removeListener(handleMediaChange)
    }
  }, [])

  // ============================================
  // MEMOIZED SLIDES
  // ============================================
  // Memoize slide generation to prevent unnecessary re-renders
  // Only recreates if customerStories or isMobile changes
  const slides = useMemo(
    () =>
      customerStories.map((story) => (
        <SwiperSlide key={story.id}>
          <CustomerStoryCard story={story} isMobile={isMobile} />
        </SwiperSlide>
      )),
    [isMobile]
  )

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="relative mt-12 w-full">
      <Swiper
        modules={SWIPER_MODULES}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={false}
        pagination={PAGINATION_CONFIG}
        navigation={true}
        breakpoints={BREAKPOINTS_CONFIG}
        className="customer-stories-swiper"
      >
        {slides}
      </Swiper>
    </div>
  )
}

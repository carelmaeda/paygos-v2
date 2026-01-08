"use client"

import { useState, memo, useMemo } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// ============================================
// TYPES
// ============================================

/** Client interface for logo carousel items */
interface Client {
  id: string
  name: string
  logoUrl: string
  domain?: string
  isLocal?: boolean
}

// ============================================
// STATIC DATA
// ============================================
// Client logos data - extracted as constant to prevent recreation on each render
// Replace with actual Paygos client logos

const CLIENTS: readonly Client[] = [
  {
    id: "1",
    name: "Mars",
    logoUrl:
      "https://cdn.brandfetch.io/idFvQZLcOg/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    isLocal: true,
  },
  {
    id: "2",
    name: "Hills Pet",
    logoUrl: "/logos/client-b.png",
    isLocal: true,
  },
  {
    id: "3",
    name: "Royal Canin",
    logoUrl:
      "https://cdn.brandfetch.io/idAnQD0ZGT/theme/dark/logo.svg?k=bfHSJFAPEG",
    domain: "#",
    isLocal: false,
  },
  {
    id: "4",
    name: "Roche",
    logoUrl:
      "https://cdn.brandfetch.io/idw382nG0m/theme/dark/logo.svg?k=bfHSJFAPEG",
    domain: "#",
    isLocal: false,
  },
  {
    id: "5",
    name: "Nestlé",
    logoUrl:
      "https://cdn.brandfetch.io/idJfXF-So-/theme/dark/logo.svg?k=bfHSJFAPEG",
    domain: "nestle.com",
    isLocal: false,
  },
  {
    id: "6",
    name: "Unilever",
    logoUrl:
      "https://cdn.brandfetch.io/idw7Lb2LhT/theme/dark/logo.svg?k=bfHSJFAPEG",
    domain: "unilever.com",
    isLocal: false,
  },
  {
    id: "7",
    name: "Procter & Gamble",
    logoUrl:
      "https://cdn.brandfetch.io/idtfGXPyDR/theme/dark/logo.svg?k=bfHSJFAPEG",
    domain: "pg.com",
    isLocal: false,
  },
  {
    id: "8",
    name: "Johnson & Johnson",
    logoUrl:
      "https://cdn.brandfetch.io/id8xF9m35U/theme/dark/logo.svg?k=bfHSJFAPEG",
    domain: "jnj.com",
    isLocal: false,
  },
] as const

// ============================================
// STATIC CLASSNAMES
// ============================================
// Extract static className strings to prevent recreation

/** Fallback placeholder styles when image fails to load */
const FALLBACK_CLASSES = cn(
  "flex h-12 w-32 items-center justify-center md:h-16",
  "rounded bg-teal-900/30 text-teal-100/50",
  "text-sm font-medium"
)

/** Logo image styles with hover effects */
const LOGO_CLASSES = cn(
  "grayscale hover:grayscale-0",
  "opacity-70 hover:opacity-100",
  "transition-all duration-300",
  "h-12 w-auto md:h-16",
  "object-contain"
)

// ============================================
// SUB-COMPONENTS
// ============================================

/**
 * ClientLogo Component
 * Displays a client logo with error handling and fallback UI
 * Memoized to prevent unnecessary re-renders when parent re-renders
 */
const ClientLogo = memo(({ client }: { client: Client }) => {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  // Track image loading errors for fallback UI
  const [hasError, setHasError] = useState(false)

  // ============================================
  // ERROR FALLBACK
  // ============================================
  // Display company name when image fails to load
  if (hasError) {
    return <div className={FALLBACK_CLASSES}>{client.name}</div>
  }

  // ============================================
  // LOGO IMAGE
  // ============================================
  return (
    <Image
      src={client.logoUrl}
      alt={client.name}
      width={120}
      height={60}
      className={LOGO_CLASSES}
      onError={() => setHasError(true)} // Trigger fallback on error
    />
  )
})

// Display name for React DevTools
ClientLogo.displayName = "ClientLogo"

// ============================================
// MAIN COMPONENT
// ============================================

/**
 * CustomersLogosCarousel Component
 * Auto-scrolling infinite carousel of customer logos
 * Uses CSS animations for smooth continuous scrolling
 */
export function CustomersLogosCarousel() {
  // ============================================
  // MEMOIZED LOGO SETS
  // ============================================
  // Generate logo elements once and cache them
  // Creates two sets (original + duplicate) for seamless infinite loop
  const logoSets = useMemo(() => {
    // First set of logos
    const firstSet = CLIENTS.map((client) => (
      <div key={client.id} className="flex-shrink-0">
        <ClientLogo client={client} />
      </div>
    ))

    // Duplicate set for seamless loop animation
    // When first set scrolls out of view, duplicate appears creating infinite effect
    const duplicateSet = CLIENTS.map((client) => (
      <div key={`${client.id}-duplicate`} className="flex-shrink-0">
        <ClientLogo client={client} />
      </div>
    ))

    return { firstSet, duplicateSet }
  }, []) // Empty deps - only compute once since CLIENTS is constant

  // ============================================
  // RENDER
  // ============================================
  return (
    <section className="text-grey-100">
      <div>
        {/* Section Description */}
        <p className="mb-8 text-center opacity-40">
          50,000+ users have saved millions of hours with Paygos.
        </p>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          {/* Animated Scrolling Container */}
          {/* animate-scroll: CSS animation for continuous left scroll */}
          {/* animate-pause: Pauses animation on hover for accessibility */}
          <div className="animate-scroll animate-pause flex gap-8">
            {logoSets.firstSet}
            {logoSets.duplicateSet}
          </div>
        </div>
      </div>
    </section>
  )
}

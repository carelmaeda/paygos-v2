"use client"

import { useState, memo, useMemo } from "react"
import Image from "next/image"

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
    logoUrl: "/customers/mars.svg",
    isLocal: true,
  },
  {
    id: "2",
    name: "Hills Pet",
    logoUrl: "/customers/hillspet.svg",
    isLocal: true,
  },
  {
    id: "3",
    name: "Sandoz",
    logoUrl: "/customers/sandoz.svg",
    domain: "#",
    isLocal: false,
  },
  {
    id: "4",
    name: "Roche",
    logoUrl: "/customers/roche.svg",
    domain: "#",
    isLocal: false,
  },
  {
    id: "5",
    name: "Nestle",
    logoUrl: "/customers/nestle.svg",
    domain: "#",
    isLocal: false,
  },
  {
    id: "6",
    name: "Haleon",
    logoUrl: "/customers/haleon.svg",
    domain: "#",
    isLocal: false,
  },
  {
    id: "7",
    name: "Vital Essentials",
    logoUrl: "/customers/vital-essentials.svg",
    domain: "#",
    isLocal: false,
  },
  {
    id: "8",
    name: "Lindt",
    logoUrl: "/customers/lindt.svg",
    domain: "#",
    isLocal: false,
  },
  {
    id: "9",
    name: "Royal Canin",
    logoUrl: "/customers/royal-canin.svg",
    domain: "#",
    isLocal: false,
  },
] as const

// ============================================
// STATIC CLASSNAMES
// ============================================
// Logo styles are defined in globals.scss for better control over sizing and spacing

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
    return <div className="customer-logo-fallback">{client.name}</div>
  }

  // ============================================
  // LOGO IMAGE
  // ============================================
  return (
    <Image
      src={client.logoUrl}
      alt={client.name}
      width={200}
      height={100}
      className="customer-logo-image"
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
      <div key={client.id} className="customer-logo-container">
        <ClientLogo client={client} />
      </div>
    ))

    // Duplicate set for seamless loop animation
    // When first set scrolls out of view, duplicate appears creating infinite effect
    const duplicateSet = CLIENTS.map((client) => (
      <div key={`${client.id}-duplicate`} className="customer-logo-container">
        <ClientLogo client={client} />
      </div>
    ))

    return { firstSet, duplicateSet }
  }, []) // Empty deps - only compute once since CLIENTS is constant

  // ============================================
  // RENDER
  // ============================================
  return (
    <section>
      <div>
        {/* Section Description */}
        <p className="mb-4 text-center text-sm font-extralight text-white">
          20,000+ users have saved millions of hours with Paygos.
        </p>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          {/* Animated Scrolling Container */}
          {/* animate-scroll: CSS animation for continuous left scroll */}
          {/* animate-pause: Pauses animation on hover for accessibility */}
          <div className="animate-scroll animate-pause flex gap-12">
            {logoSets.firstSet}
            {logoSets.duplicateSet}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface Client {
  id: string
  name: string
  logoUrl: string
  domain?: string
  isLocal?: boolean
}

const clients: Client[] = [
  {
    id: "1",
    name: "Client A",
    logoUrl: "/logos/client-a.svg",
    isLocal: true,
  },
  {
    id: "2",
    name: "Client B",
    logoUrl: "/logos/client-b.png",
    isLocal: true,
  },
  // Example Brandfetch logos (replace with actual Paygos clients)
  {
    id: "3",
    name: "Coca-Cola",
    logoUrl:
      "https://cdn.brandfetch.io/coca-cola.com/fallback/transparent/h/60",
    domain: "coca-cola.com",
    isLocal: false,
  },
  {
    id: "4",
    name: "PepsiCo",
    logoUrl: "https://cdn.brandfetch.io/pepsico.com/fallback/transparent/h/60",
    domain: "pepsico.com",
    isLocal: false,
  },
  {
    id: "5",
    name: "Nestlé",
    logoUrl: "https://cdn.brandfetch.io/nestle.com/fallback/transparent/h/60",
    domain: "nestle.com",
    isLocal: false,
  },
  {
    id: "6",
    name: "Unilever",
    logoUrl: "https://cdn.brandfetch.io/unilever.com/fallback/transparent/h/60",
    domain: "unilever.com",
    isLocal: false,
  },
  {
    id: "7",
    name: "Procter & Gamble",
    logoUrl: "https://cdn.brandfetch.io/pg.com/fallback/transparent/h/60",
    domain: "pg.com",
    isLocal: false,
  },
  {
    id: "8",
    name: "Johnson & Johnson",
    logoUrl: "https://cdn.brandfetch.io/jnj.com/fallback/transparent/h/60",
    domain: "jnj.com",
    isLocal: false,
  },
]

export function ClientsCarousel() {
  return (
    <section className="bg-teal-950 text-white">
      <div>
        <p className="mb-8 text-center">
          50,000+ users have saved millions of hours with Paygos.
        </p>

        <div className="overflow-hidden">
          <div className="animate-scroll animate-pause flex gap-8">
            {/* First set of logos */}
            {clients.map((client) => (
              <div key={client.id} className="flex-shrink-0">
                <Image
                  src={client.logoUrl}
                  alt={client.name}
                  width={120}
                  height={60}
                  className={cn(
                    "grayscale hover:grayscale-0",
                    "opacity-70 hover:opacity-100",
                    "transition-all duration-300",
                    "h-12 w-auto md:h-16",
                    "object-contain"
                  )}
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div key={`${client.id}-duplicate`} className="flex-shrink-0">
                <Image
                  src={client.logoUrl}
                  alt={client.name}
                  width={120}
                  height={60}
                  className={cn(
                    "grayscale hover:grayscale-0",
                    "opacity-70 hover:opacity-100",
                    "transition-all duration-300",
                    "h-12 w-auto md:h-16",
                    "object-contain"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

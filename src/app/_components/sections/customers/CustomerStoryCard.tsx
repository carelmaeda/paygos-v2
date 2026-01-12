"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CustomerStory } from "./types/customer-story"

interface CustomerStoryCardProps {
  story: CustomerStory
  isMobile: boolean
}

export function CustomerStoryCard({ story, isMobile }: CustomerStoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/customers/${story.slug}`}
      className="block h-full"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <article
        className={cn(
          "relative overflow-hidden rounded-lg shadow-sm transition-all duration-300",
          "hover:shadow-md",
          "h-[400px] md:h-[450px]"
        )}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={story.backgroundImage}
            alt={story.companyName}
            fill
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* Hover Overlay - Desktop Only */}
        {!isMobile && (
          <div
            className={cn(
              "absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300",
              "bg-black/80",
              isHovered ? "opacity-100" : "pointer-events-none opacity-0"
            )}
          >
            <h3 className="px-6 text-center text-white">{story.title}</h3>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          {/* Top: Company Logo */}
          <div className="flex justify-start">
            <div className="rounded-lg bg-white p-3 shadow-md">
              <Image
                src={story.companyLogo}
                alt={story.companyName}
                width={80}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom Content */}
          <div>
            {/* Desktop: Tags at bottom */}
            {!isMobile && (
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Mobile: Title always visible */}
            {isMobile && (
              <h3 className="text-xl font-bold text-white">{story.title}</h3>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}

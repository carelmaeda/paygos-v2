"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CustomerStory } from "./types/customer-story"
import { ArrowRight } from "lucide-react"

interface CustomerStoryCardProps {
  story: CustomerStory
}

export function CustomerStoryCard({ story }: CustomerStoryCardProps) {
  return (
    <Link
      href={`/customers/${story.slug}`}
      className="group block h-full outline-none"
    >
      <article className="relative h-[420px] w-full overflow-hidden rounded-lg shadow-xl transition-shadow duration-500 group-hover:shadow-2xl md:h-[480px]">
        {/* Background & High-Contrast Overlay */}
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          <Image
            src={story.backgroundImage}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 opacity-80 transition-opacity group-hover:opacity-95" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-8">
          {/* Top: Tags */}
          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom: Revealable Title */}
          <div className="flex flex-col gap-3">
            <div className="overflow-hidden text-white">
              <h3
                className={cn(
                  "transition-all duration-500 ease-out",
                  "md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                )}
              >
                {story.title}
              </h3>
              <p className="mt-4 text-sm font-light transition-all duration-500 ease-out md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {story.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-teal-400 opacity-0 transition-all delay-75 duration-300 group-hover:opacity-100">
              Read story <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

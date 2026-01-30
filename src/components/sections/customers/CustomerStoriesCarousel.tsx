"use client"

import { useMemo } from "react"
import { CustomerStoryCard } from "./CustomerStoryCard"
import { customerStories } from "./data/customer-stories"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { CarouselDots } from "@/components/ui/carousel-dots"

export function CustomerStoriesCarousel() {
  const slides = useMemo(
    () =>
      customerStories.map((story) => (
        <CarouselItem
          key={story.id}
          className="basis-[83.33%] pl-6 md:basis-1/2 lg:basis-1/3"
        >
          <CustomerStoryCard story={story} />
        </CarouselItem>
      )),
    []
  )

  return (
    <div className="mt-8 overflow-hidden">
      <div className="section-container relative md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">{slides}</CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-0 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/20 text-white transition-all hover:bg-black/40 disabled:opacity-0 md:flex" />
          <CarouselNext className="absolute top-1/2 right-0 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/20 text-white transition-all hover:bg-black/40 disabled:opacity-0 md:flex" />
          <CarouselDots className="mt-8" />
        </Carousel>
      </div>
    </div>
  )
}

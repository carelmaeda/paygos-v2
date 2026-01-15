"use client"

import { useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { CustomerStoryCard } from "./CustomerStoryCard"
import { customerStories } from "./data/customer-stories"
import { Button } from "../../ui/button"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { PatternDiagonal } from "@/components/ui/patterns"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const SWIPER_CONFIG = {
  modules: [Pagination, Navigation],
  spaceBetween: 24,
  slidesPerView: 1.2,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
}

export function CustomerStoriesCarousel() {
  const slides = useMemo(
    () =>
      customerStories.map((story) => (
        <SwiperSlide key={story.id} className="pb-14">
          <CustomerStoryCard story={story} />
        </SwiperSlide>
      )),
    []
  )

  return (
    <section className="relative overflow-hidden bg-teal-950 py-20 text-white">
      <PatternDiagonal />

      <div className="relative container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            What would you do with more time?
          </h2>
          <p className="text-lg text-teal-100/60">
            Over 2.5M+ hours saved for 5,000+ customers.
          </p>
        </div>

        <div className="relative md:px-12">
          <button className="nav-prev absolute top-1/2 left-0 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-all hover:bg-black/40 disabled:opacity-0 md:flex">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="nav-next absolute top-1/2 right-0 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-all hover:bg-black/40 disabled:opacity-0 md:flex">
            <ChevronRight className="h-6 w-6" />
          </button>

          <Swiper
            {...SWIPER_CONFIG}
            navigation={{ prevEl: ".nav-prev", nextEl: ".nav-next" }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="!overflow-visible"
          >
            {slides}
          </Swiper>
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            variant="ghost"
            className="text-teal-300 hover:bg-white/5 hover:text-white"
          >
            <Link href="/customers" className="inline-flex items-center gap-2">
              View all customer stories <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 12px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  )
}

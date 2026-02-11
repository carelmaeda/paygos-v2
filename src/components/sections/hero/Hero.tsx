"use client"

import { PatternHexagon } from "@/components/ui/patterns"
import { BookCallButton } from "../cta/BookCallButton"
import { CustomersLogosCarousel } from "../customers/CustomersLogosCarousel"
import { MotionSection } from "@/components/motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cyan-950 py-8">
      {/* PATTERN OVERLAY */}
      <PatternHexagon />
      <div className="relative z-10 mx-auto max-w-screen-2xl">
        {/* HERO BODY */}
        <div className="relative flex items-center pt-16">
          {/* CONTENT */}
          <div className="relative mx-auto max-w-screen-xl px-4 md:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <article className="text-center text-white lg:text-left">
                <MotionSection
                  as="div"
                  variant="slideUp"
                  viewport={{ once: true }}
                >
                  <h1>
                    Sell More. <br />
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Spend Less.
                    </span>
                  </h1>
                </MotionSection>

                <MotionSection
                  as="p"
                  variant="slideUp"
                  delay={0.1}
                  viewport={{ once: true }}
                  className="mt-6 max-w-[450px]"
                >
                  Paygos is a customizable platform designed to drive
                  incremental revenue, automate manual processes and surface
                  actionable sales data & analytics.
                </MotionSection>

                <MotionSection
                  as="div"
                  variant="slideUp"
                  delay={0.2}
                  viewport={{ once: true }}
                  className="mt-8 flex justify-center lg:justify-start"
                >
                  <BookCallButton />
                </MotionSection>
              </article>
            </div>
          </div>

          {/* DESKTOP IMAGE - Native img for guaranteed LCP optimization */}
          <div className="pointer-events-none absolute top-8 right-0 hidden lg:block">
            <div className="relative w-[500px] p-3 md:mr-12 xl:w-[570px]">
              {/* GLOW LAYER */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 scale-120"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgb(16, 185, 129) 0%, rgb(20, 184, 166) 80%, transparent 100%)",
                  filter: "blur(100px)",
                  opacity: 0.5,
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/paygos/paygos-hero.webp"
                alt="Paygos product UI"
                width={1600}
                height={1000}
                fetchPriority="high"
                decoding="async"
                className="relative z-10 h-auto w-full max-w-none"
              />
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE - Native img for guaranteed LCP optimization */}
        <div className="relative mt-10 px-4 lg:hidden">
          <div className="relative">
            {/* GLOW LAYER - reduced opacity on mobile */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 scale-105"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgb(16, 185, 129) 0%, rgb(20, 184, 166) 50%, transparent 100%)",
                filter: "blur(80px)",
                opacity: 0.5,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/paygos/paygos-hero.webp"
              alt="Paygos product UI"
              width={1600}
              height={1000}
              fetchPriority="high"
              decoding="async"
              className="relative z-10 h-auto w-full max-w-none"
            />
          </div>
        </div>

        {/* LOGOS */}
        <MotionSection
          as="div"
          variant="fadeIn"
          delay={0.4}
          viewport={{ once: true }}
          className="my-8"
        >
          <CustomersLogosCarousel />
        </MotionSection>
      </div>
    </section>
  )
}

import Image from "next/image"
import { BookCallButton } from "./BookCallButton"
import { ClientsCarousel } from "./ClientsCarousel"

export function Hero() {
  return (
    <section className="hero bg-teal-950">
      <div className="container">
        {/* Left Column */}
        <article>
          <h1>
            Sell More. <br />
            <span>Spend Less.</span>
          </h1>
          <p>This is a subtitle that is very long and nice.</p>
          <BookCallButton />
        </article>

        {/* Right Column */}
        <div className="hero-image-wrapper">
          <Image
            src="/paygos-hero.svg"
            alt="Paygos Hero Illustration"
            fill
            className="hero-image"
            priority
          />
        </div>
      </div>
      <ClientsCarousel />
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "../../ui/button"

export function FieldSales() {
  return (
    <section className="fsa bg-teal-950">
      <div className="container">
        <header>
          <p>This is a subtitle that is very long and nice.</p>
          <h2>
            Our Field Sales Automation can save your company both time and
            money.
          </h2>
        </header>

        <div className="card-wrapper">
          {/* First Card Row - Text Left, Image Right */}
          <div className="card-row">
            {/* Left Column */}
            <div className="text-wrapper">
              <div className="mb-4">
                <h3>Our Field Sales Automation can do this.</h3>
                <p>This is a subtitle that is very long and nice.</p>
              </div>
              <Button variant="link" className="text-white">
                {" "}
                <Link
                  href="/solutions/fsa"
                  className="inline-flex items-center gap-2"
                >
                  Learn more
                  <ArrowRight />
                </Link>
              </Button>
            </div>

            {/* Right Column */}
            <div className="image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop"
                alt="Woman using a tablet computer"
                fill
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>

          {/* Second Card Row - Image Left, Text Right (Inverted) */}
          <div className="card-row card-row-inverted">
            {/* Left Column - Image */}
            <div className="image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
                alt="Business team collaboration"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="text-wrapper">
              <div className="mb-4">
                <h3>Streamline your sales process effortlessly.</h3>
                <p>
                  Empower your field team with real-time data and automation
                  tools.
                </p>
              </div>
              <Button variant="link" className="text-white">
                {" "}
                <Link
                  href="/solutions/fsa"
                  className="inline-flex items-center gap-2"
                >
                  Learn more
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

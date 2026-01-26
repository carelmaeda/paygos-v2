import type { Metadata } from "next"
import { PatternWaves } from "@/components/ui/patterns"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { ContactForm } from "@/components/sections/contact/ContactForm"
import { MotionSection } from "@/components/motion"

export const metadata: Metadata = {
  title: "Contact Us | Paygos",
  description: "Get in touch with our team. We'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-teal-950" data-navbar-theme="dark">
        <PatternWaves />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-teal-400">Contact</small>
          <h1>
            Book a {""}
            <span className="text-highlight">Call</span>
          </h1>
          <p>
            Let&apos;s discuss how Paygos can simplify and scale your sales
            operations.
          </p>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Contact Form Section */}
      <section className="bg-white py-8" data-navbar-theme="light">
        <MotionSection as="div" variant="fadeIn" className="section-container">
          <ContactForm />
        </MotionSection>
      </section>
    </main>
  )
}

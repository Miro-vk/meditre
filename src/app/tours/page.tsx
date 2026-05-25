import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { tourCategories } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Tours | MeditreTravel",
  description: "Customizable travel ideas across Greece, Turkey, and Northern Italy.",
  path: "/tours",
});

export default function ToursPage() {
  return (
    <>
      <Hero
        eyebrow="Tours"
        title="Curated Travel Experiences"
        subtitle="Customizable travel ideas across Greece, Turkey, and Northern Italy."
        image="/images/zakynthos.jpeg"
        primaryCta={{ label: "Request Custom Trip", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading
            title="Sample travel ideas, not fixed packages"
            subtitle="Our tours are meant to inspire your trip. Each itinerary can be adapted to your dates, pace, interests, and budget."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tourCategories.map((tour) => (
              <TourCard key={tour.title} title={tour.title} description={tour.description} href={tour.href} image={tour.image} ctaLabel={tour.ctaLabel} />
            ))}
          </div>
        </Container>
      </section>
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading
            eyebrow="How Our Tours Work"
            title="Three simple steps"
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Choose a travel idea.",
              "Share your preferences.",
              "We customize your trip.",
            ].map((item, index) => (
              <article key={item} className="rounded-[1.4rem] border border-white/75 bg-white/80 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)] backdrop-blur-sm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(23,50,77,1),rgba(47,111,143,1))] font-semibold text-ivory shadow-[0_10px_20px_rgba(23,50,77,0.14)]">{index + 1}</div>
                <p className="mt-4 text-base leading-7 text-charcoal">{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Not sure which tour is right for you?"
        description="Request a custom trip and we’ll help shape an itinerary around the regions and travel style that fit you best."
        buttonLabel="Request Custom Trip"
        href="/contact"
      />
    </>
  );
}
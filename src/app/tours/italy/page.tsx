import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { tourPageContent } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Italy Tours | MeditreTravel",
  description: "Sample Northern Italy itineraries that can be customized into a refined regional trip.",
  path: "/tours/italy",
});

export default function ItalyToursPage() {
  return (
    <>
      <Hero
        eyebrow="Italy Tours"
        title="Italy Tour Ideas"
        subtitle="Sample itineraries for Friuli wine, Venice, Trieste, and slow travel across Northern Italy."
        image="/images/italy.svg"
        primaryCta={{ label: "Plan Your Italy Journey", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading title="Sample itineraries" subtitle="Each idea is a starting point that can be customized into your preferred route." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tourPageContent.italy.map((tour) => (
              <TourCard key={tour.title} title={tour.title} description={tour.description} href="/contact" ctaLabel="Customize this trip" />
            ))}
          </div>
          <p className="mt-8 rounded-[1.3rem] border border-terracotta/20 bg-terracotta/8 px-5 py-4 text-sm text-charcoal">
            This can be customized for your dates, winery interests, city time, and preferred pace.
          </p>
        </Container>
      </section>
      <CTASection
        title="Tell us about your Italy trip"
        description="We’ll help you shape a Northern Italy journey with depth, elegance, and room to explore slowly."
        buttonLabel="Contact Us"
        href="/contact"
      />
    </>
  );
}
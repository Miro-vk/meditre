import Hero from "@/components/Hero";
import Container from "@/components/Container";
import DestinationCard from "@/components/DestinationCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { destinations } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Destinations | MeditreTravel",
  description: "Handcrafted journeys across Greece, Turkey, and Northern Italy.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <>
      <Hero
        eyebrow="Destinations"
        title="Explore Our Destinations"
        subtitle="Handcrafted journeys across Greece, Turkey, and Northern Italy."
        image="/images/zakynthos.jpeg"
        primaryCta={{ label: "Request Planned Trip", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} {...destination} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Not sure where to go?"
        description="Tell us the kind of trip you want, and we’ll help you choose the best region for your dates, pace, and interests."
        buttonLabel="Plan Your Trip"
        href="/contact"
      />
    </>
  );
}
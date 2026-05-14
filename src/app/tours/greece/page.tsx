import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { tourPageContent } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Greece Tours | MeditreTravel",
  description: "Sample Greece itineraries that can be customized around your dates and pace.",
  path: "/tours/greece",
});

export default function GreeceToursPage() {
  return (
    <>
      <Hero
        eyebrow="Greece Tours"
        title="Greece Tour Ideas"
        subtitle="Sample itineraries for Ionian island escapes, food and wine journeys, and slow travel around Greece."
        image="/images/greece.svg"
        primaryCta={{ label: "Plan Your Greece Trip", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading title="Sample itineraries" subtitle="Each idea is a starting point that can be adapted into a custom journey." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tourPageContent.greece.map((tour) => (
              <TourCard key={tour.title} title={tour.title} description={tour.description} href="/contact" ctaLabel="Customize this trip" />
            ))}
          </div>
          <p className="mt-8 rounded-[1.3rem] border border-terracotta/20 bg-terracotta/8 px-5 py-4 text-sm text-charcoal">
            This can be customized for your travel dates, pace, island preferences, and budget.
          </p>
        </Container>
      </section>
      <CTASection
        title="Tell us about your Greece trip"
        description="We’ll shape the route, stops, and pacing so your itinerary feels personal instead of packaged."
        buttonLabel="Contact Us"
        href="/contact"
      />
    </>
  );
}
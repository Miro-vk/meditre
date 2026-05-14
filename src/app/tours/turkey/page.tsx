import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { tourPageContent } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Turkey Tours | MeditreTravel",
  description: "Sample Turkey itineraries that can be customized into a broader Mediterranean journey.",
  path: "/tours/turkey",
});

export default function TurkeyToursPage() {
  return (
    <>
      <Hero
        eyebrow="Turkey Tours"
        title="Turkey Tour Ideas"
        subtitle="Sample itineraries for Cappadocia, Eastern Anatolia, and food-rich southeastern journeys."
        image="/images/turkey.svg"
        primaryCta={{ label: "Plan Your Turkey Journey", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading title="Sample itineraries" subtitle="Each idea is a starting point that can be customized around your priorities." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tourPageContent.turkey.map((tour) => (
              <TourCard key={tour.title} title={tour.title} description={tour.description} href="/contact" ctaLabel="Customize this trip" />
            ))}
          </div>
          <p className="mt-8 rounded-[1.3rem] border border-terracotta/20 bg-terracotta/8 px-5 py-4 text-sm text-charcoal">
            This can be customized for your dates, interests, and ideal travel rhythm.
          </p>
        </Container>
      </section>
      <CTASection
        title="Tell us about your Turkey trip"
        description="We’ll help you build a route that focuses on the places and experiences that matter most to you."
        buttonLabel="Contact Us"
        href="/contact"
      />
    </>
  );
}
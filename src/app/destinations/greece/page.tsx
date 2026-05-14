import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { destinationPageContent } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Discover Greece | MeditreTravel",
  description: "Ionian islands, ancient culture, and unforgettable coastal journeys.",
  path: "/destinations/greece",
});

export default function GreecePage() {
  return (
    <>
      <Hero
        eyebrow="Greece"
        title="Discover Greece"
        subtitle="Ionian islands, ancient culture, and unforgettable coastal journeys."
        image="/images/greece.svg"
        primaryCta={{ label: "Plan Your Greece Trip", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading
            title="What this journey can include"
            subtitle="We can shape a Greece itinerary around the coast, the islands, local food, mythology, and a slower pace that leaves room for real discovery."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {destinationPageContent.greece.map((item) => (
              <article key={item.title} className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
                <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-text">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Ready to explore Greece?"
        description="Tell us your travel style, dates, and interests. We’ll design an itinerary that reflects the way you want to experience the islands and coast."
        buttonLabel="Plan Your Greece Trip"
        href="/contact"
      />
    </>
  );
}
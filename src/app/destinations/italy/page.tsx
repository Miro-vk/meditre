import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { destinationPageContent } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Discover Northern Italy | MeditreTravel",
  description: "Friuli Venezia Giulia, Venice, Trieste, wine, countryside, and coastal culture.",
  path: "/destinations/italy",
});

export default function ItalyPage() {
  return (
    <>
      <Hero
        eyebrow="Italy"
        title="Discover Northern Italy"
        subtitle="Friuli Venezia Giulia, Venice, Trieste, wine, countryside, and coastal culture."
        image="/images/italy.svg"
        primaryCta={{ label: "Plan Your Italy Journey", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading
            title="What this journey can include"
            subtitle="Build a Northern Italy trip around elegant cities, coastal cafés, vineyard roads, and a slower regional rhythm that feels refined rather than rushed."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {destinationPageContent.italy.map((item) => (
              <article key={item.title} className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
                <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-text">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Plan your Italy trip"
        description="Tell us the atmosphere you want, and we’ll help design a Northern Italy itinerary with depth, style, and balance."
        buttonLabel="Plan Your Italy Trip"
        href="/contact"
      />
    </>
  );
}
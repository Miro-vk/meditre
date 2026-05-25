import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { destinationPageContent } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Discover Turkey | MeditreTravel",
  description: "Ancient civilizations, dramatic landscapes, and authentic cultural journeys.",
  path: "/destinations/turkey",
});

export default function TurkeyPage() {
  return (
    <>
      <Hero
        eyebrow="Turkey"
        title="Discover Turkey"
        subtitle="Ancient civilizations, dramatic landscapes, and authentic cultural journeys."
        image="/images/izmir.jpg"
        primaryCta={{ label: "Plan Your Turkey Journey", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading
            title="What this journey can include"
            subtitle="From Cappadocia to Eastern Anatolia, we can create a route that balances archaeology, scenery, food, and cultural depth without feeling rushed."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {destinationPageContent.turkey.map((item) => (
              <article key={item.title} className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
                <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-text">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Request your Turkey trip"
        description="Tell us what kind of route you want, and we’ll build something that goes beyond the ordinary highlights."
        buttonLabel="Request Your Turkey Trip"
        href="/contact"
      />
    </>
  );
}
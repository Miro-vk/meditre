import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import ImageGrid from "@/components/ImageGrid";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { processSteps } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Custom Travel Planning | MeditreTravel",
  description: "A personalized Mediterranean journey built around your dates, pace, interests, and travel style.",
  path: "/custom-travel-planning",
});

const planningImages = [
  { src: "/images/greece.svg", alt: "Greece inspiration" },
  { src: "/images/turkey.svg", alt: "Turkey inspiration" },
  { src: "/images/italy.svg", alt: "Italy inspiration" },
];

export default function CustomTravelPlanningPage() {
  return (
    <>
      <Hero
        eyebrow="Custom Planning"
        title="Custom Travel Planning"
        subtitle="A personalized Mediterranean journey built around your dates, pace, interests, and travel style."
        image="/images/og-meditretravel.svg"
        primaryCta={{ label: "Request Your Trip", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading
            title="What we customize"
            subtitle="We can shape the destinations, accommodations, food and wine, cultural visits, nature stops, and the pace of the trip around you."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Destinations",
              "Hotels and accommodation style",
              "Food and wine experiences",
              "Historical and cultural visits",
              "Nature and scenic activities",
              "Transport and pacing",
            ].map((item) => (
              <article key={item} className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
                <h3 className="font-serif text-xl text-charcoal">{item}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-8 sm:py-12">
        <SectionHeading eyebrow="How It Works" title="A clear process that keeps things simple" align="center" />
        <div className="mt-10">
          <ProcessSteps steps={processSteps.concat(["You travel with confidence."])} />
        </div>
      </section>
      <section className="py-8 sm:py-12">
        <Container>
          <ImageGrid
            images={planningImages.map((image, index) => ({
              ...image,
              label: ["Greece", "Turkey", "Italy"][index],
            }))}
          />
        </Container>
      </section>
      <CTASection
        title="Ready to start planning?"
        description="Tell us your idea and we’ll turn it into a thoughtful Mediterranean itinerary."
        buttonLabel="Plan Your Trip"
        href="/contact"
      />
    </>
  );
}
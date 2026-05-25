import { Compass, Globe2, MapPinned, ShieldCheck } from "lucide-react";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import DestinationCard from "@/components/DestinationCard";
import ExperienceCard from "@/components/ExperienceCard";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { destinations, experiences, processSteps, whyUs } from "@/lib/data";

export const metadata = buildMetadata({
  title: "MeditreTravel | Custom Mediterranean Journeys",
  description:
    "Tailor-made travel experiences in Greece, Turkey, and Italy designed around culture, nature, history, food, wine, and authentic local life.",
});

const experienceIcons = [Compass, Globe2, MapPinned, ShieldCheck, Compass, Globe2];

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="Custom Mediterranean Journeys"
        title="Tailor-made travel experiences in Greece, Turkey & Italy"
        subtitle="Personalized journeys designed around culture, nature, history, food, wine, and authentic local life."
        image="/images/petani-beach.jpg"
        primaryCta={{ label: "Plan Your Trip", href: "/contact" }}
        secondaryCta={{ label: "Explore Destinations", href: "/destinations" }}
      />

      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading
            eyebrow="Why Travel With Us"
            title="A boutique planning studio with real regional depth"
            subtitle="We build custom Mediterranean journeys for travelers who want local insight, thoughtful pacing, and an experience that feels personal from the first conversation."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyUs.map((item) => (
              <article key={item.title} className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
                <h3 className="font-serif text-xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-text">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading
            eyebrow="Featured Destinations"
            title="Three regions, three distinct ways to travel"
            subtitle="From island coastlines to ancient landscapes and elegant northern cities, every destination is designed around a different kind of Mediterranean experience."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} {...destination} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading
            eyebrow="Travel Experiences"
            title="Designed around how you like to travel"
            subtitle="Choose the style of trip you want, then let us shape the details into a journey that feels coherent and easy to enjoy."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map((experience, index) => {
              const Icon = experienceIcons[index % experienceIcons.length];

              return (
                <ExperienceCard
                  key={experience.title}
                  title={experience.title}
                  description={experience.description}
                  icon={Icon}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-12">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple planning process"
          subtitle="We keep the experience clear, personal, and straightforward so you can focus on the journey rather than the logistics."
          align="center"
        />
        <div className="mt-10">
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <CTASection
        title="Start planning your Mediterranean journey"
        description="Tell us your travel style, dates, and interests — we’ll design your perfect itinerary."
        buttonLabel="Request Your Trip"
        href="/contact"
      />
    </main>
  );
}

import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ImageGrid from "@/components/ImageGrid";
import { buildMetadata } from "@/lib/metadata";
import { aboutHighlights, focusRegions } from "@/lib/data";

export const metadata = buildMetadata({
  title: "About | MeditreTravel",
  description: "We believe travel should feel personal, meaningful, and connected to local culture.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About MeditreTravel"
        title="About MeditreTravel"
        subtitle="We believe travel should feel personal, meaningful, and connected to local culture — not rushed or generic."
        image="/images/og-meditretravel.svg"
        primaryCta={{ label: "Plan Your Trip", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading title="Our story" subtitle="MeditreTravel is shaped by firsthand travel, local knowledge, and a lasting connection to the places we plan around. The goal is simple: create journeys that feel real, calm, and worth remembering." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="space-y-4 rounded-[1.6rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
              <p className="text-base leading-8 text-muted-text">
                From childhood memories and local familiarity to days spent exploring hidden beaches, mountain roads, historic centers, and regional food traditions, the work is grounded in firsthand experience rather than generic destination research.
              </p>
              <p className="text-base leading-8 text-muted-text">
                We plan trips across Greece, Turkey, and Italy with a focus on pace, authenticity, and the details that help a journey feel more personal.
              </p>
            </div>
            <ImageGrid
              images={[
                { src: "/images/greece.svg", alt: "Ionian coastline" },
                { src: "/images/turkey.svg", alt: "Turkey landscape" },
                { src: "/images/italy.svg", alt: "Northern Italy scene" },
              ]}
            />
          </div>
        </Container>
      </section>
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading title="Why travel with us" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {aboutHighlights.map((item) => (
              <article key={item} className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
                <p className="font-serif text-xl text-charcoal">{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading title="Focus regions" subtitle="Our planning centers on three core Mediterranean regions with strong depth and character." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {focusRegions.map((region) => (
              <article key={region.title} className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
                <h3 className="font-serif text-2xl text-charcoal">{region.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-text">{region.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Let’s design your journey together"
        description="Share your travel goals and we’ll build an itinerary that feels personal, thoughtful, and rooted in place."
        buttonLabel="Plan Your Trip"
        href="/contact"
      />
    </>
  );
}
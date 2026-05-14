import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Blog | MeditreTravel",
  description: "Mediterranean travel journal and future story ideas.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Mediterranean Travel Journal"
        subtitle="Thoughtful notes, trip ideas, and future stories from Greece, Turkey, and Northern Italy."
        image="/images/og-meditretravel.svg"
        primaryCta={{ label: "Request Your Trip", href: "/contact" }}
      />
      <section className="py-8 sm:py-12">
        <Container>
          <SectionHeading title="Coming soon" subtitle="This space is ready for future travel notes and destination inspiration." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {blogPosts.map((post) => (
              <article key={post} className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
                <p className="font-serif text-xl text-charcoal">{post}</p>
                <p className="mt-3 text-sm leading-7 text-muted-text">Placeholder post idea for the future blog.</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
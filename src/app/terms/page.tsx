import Container from "@/components/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms | MeditreTravel",
  description: "Terms of use placeholder for MeditreTravel.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl text-charcoal">Terms of Use</h1>
          <p className="mt-4 text-base leading-8 text-muted-text">
            This placeholder terms page can be expanded with the final legal copy before launch.
          </p>
        </div>
      </Container>
    </section>
  );
}
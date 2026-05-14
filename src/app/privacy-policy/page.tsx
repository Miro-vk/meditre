import Container from "@/components/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy | MeditreTravel",
  description: "Privacy policy placeholder for MeditreTravel.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl text-charcoal">Privacy Policy</h1>
          <p className="mt-4 text-base leading-8 text-muted-text">
            This placeholder policy can be replaced with a full privacy statement before launch.
          </p>
        </div>
      </Container>
    </section>
  );
}
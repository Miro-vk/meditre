import Hero from "@/components/Hero";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact | MeditreTravel",
  description: "Tell us your travel style and preferences — we’ll design a trip tailored to you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Plan Your Custom Journey"
        subtitle="Tell us your travel style and preferences — we’ll design a trip tailored to you."
        image="/images/og-meditretravel.svg"
      />
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeading
                title="Tell us about your ideal trip"
                subtitle="Use the form to share your dates, interests, budget, and destination ideas. We’ll use it to shape a thoughtful starting point for your journey."
              />
              <div className="mt-8 rounded-[1.6rem] border border-white/75 bg-white/80 p-6 text-sm leading-7 text-muted-text shadow-[0_12px_36px_rgba(23,50,77,0.06)]">
                For the MVP, form submissions are sent to a placeholder API route and logged on the server. The structure is ready for a future email or CRM integration.
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
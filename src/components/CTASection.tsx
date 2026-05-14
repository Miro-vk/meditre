import Link from "next/link";
import Container from "@/components/Container";

type CTASectionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};

export default function CTASection({ title, description, buttonLabel, href }: CTASectionProps) {
  return (
    <section className="py-6 sm:py-8">
      <Container>
        <div className="rounded-[2rem] bg-deep-blue px-6 py-10 text-ivory shadow-[0_22px_60px_rgba(23,50,77,0.22)] sm:px-10 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_auto] lg:items-center">
            <div>
              <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                {description}
              </p>
            </div>
            <Link
              href={href}
              className="inline-flex h-12 items-center justify-center rounded-full bg-ivory px-6 text-sm font-semibold text-deep-blue transition-transform duration-200 hover:-translate-y-0.5"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
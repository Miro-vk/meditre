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
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(23,50,77,1),rgba(47,111,143,0.96))] px-6 py-10 text-ivory shadow-[0_22px_60px_rgba(23,50,77,0.22)] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_auto] lg:items-center">
            <div className="relative">
              <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                {description}
              </p>
            </div>
            <Link
              href={href}
              className="relative inline-flex h-12 items-center justify-center rounded-full bg-ivory px-6 text-sm font-semibold text-deep-blue shadow-[0_12px_26px_rgba(23,50,77,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#fff7ef]"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
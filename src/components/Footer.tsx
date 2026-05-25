import Link from "next/link";
import Container from "@/components/Container";
import { destinationNav, site, tourNav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/70 bg-ivory/70 backdrop-blur-sm">
      <Container className="py-12 sm:py-14">
        <div className="mb-10 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(47,111,143,0.35),transparent)]" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-serif text-3xl text-charcoal">{site.name}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-text">{site.tagline}</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-muted-text">
              Custom Mediterranean journeys designed around your pace, interests, and travel style.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-text">Quick Links</p>
            <nav className="mt-4 space-y-3 text-sm text-charcoal">
              <Link href="/about" className="block hover:text-terracotta">About</Link>
              <Link href="/blog" className="block hover:text-terracotta">Blog</Link>
              <Link href="/contact" className="block hover:text-terracotta">Contact</Link>
              <Link href="/custom-travel-planning" className="block hover:text-terracotta">Custom Travel Planning</Link>
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-text">Destinations</p>
            <nav className="mt-4 space-y-3 text-sm text-charcoal">
              {destinationNav.map((item) => (
                <Link key={item.href} href={item.href} className="block hover:text-terracotta">
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-muted-text">Tours</p>
            <nav className="mt-4 space-y-3 text-sm text-charcoal">
              {tourNav.map((item) => (
                <Link key={item.href} href={item.href} className="block hover:text-terracotta">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-charcoal/10 pt-6 text-sm text-muted-text sm:flex-row sm:items-center sm:justify-between">
          <p>© MeditreTravel. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="mailto:hello@meditretravel.com" className="hover:text-terracotta">
              Email
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-terracotta">
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
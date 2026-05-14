"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import MobileNav from "@/components/MobileNav";
import { destinationNav, primaryNav, tourNav } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b border-transparent transition-colors duration-300",
          scrolled ? "border-white/70 bg-ivory/95 shadow-[0_10px_30px_rgba(23,50,77,0.08)] backdrop-blur" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-serif text-2xl tracking-tight text-charcoal">
            MeditreTravel
          </Link>
          <nav className="hidden items-center gap-2 lg:flex">
            <Link href="/" className="rounded-full px-3 py-2 text-sm font-medium text-charcoal hover:bg-sand">
              Home
            </Link>
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-charcoal hover:bg-sand">
                Destinations
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-[1.5rem] border border-white/80 bg-ivory p-3 shadow-[0_18px_50px_rgba(23,50,77,0.12)]">
                {destinationNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm text-charcoal hover:bg-sand"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-charcoal hover:bg-sand">
                Tours
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-[1.5rem] border border-white/80 bg-ivory p-3 shadow-[0_18px_50px_rgba(23,50,77,0.12)]">
                {tourNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm text-charcoal hover:bg-sand"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            {primaryNav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-charcoal hover:bg-sand">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex h-11 items-center justify-center rounded-full bg-deep-blue px-5 text-sm font-semibold text-ivory transition-transform duration-200 hover:-translate-y-0.5"
            >
              Plan Your Trip
            </Link>
          </nav>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white/70 text-charcoal lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </header>
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        primaryNav={primaryNav}
        destinationNav={destinationNav}
        tourNav={tourNav}
      />
    </>
  );
}
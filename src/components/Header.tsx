"use client";

import Link from "next/link";
import Image from "next/image";
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
          "sticky top-0 z-40 border-b border-transparent transition-all duration-300",
          scrolled
            ? "border-white/65 bg-ivory/80 shadow-[0_12px_30px_rgba(23,50,77,0.08)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group inline-flex items-center gap-3 rounded-full px-2 py-1.5">
            <Image
              src="/images/meditretravel.png"
              alt="MeditreTravel"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-2 lg:flex">
            <Link href="/" className="rounded-full px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-white/70 hover:text-deep-blue">
              Home
            </Link>
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-white/70 hover:text-deep-blue">
                Destinations
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-[1.5rem] border border-white/80 bg-white/95 p-3 shadow-[0_18px_50px_rgba(23,50,77,0.12)] backdrop-blur-xl">
                {destinationNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm text-charcoal transition-colors hover:bg-sand/80 hover:text-deep-blue"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-white/70 hover:text-deep-blue">
                Tours
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-[1.5rem] border border-white/80 bg-white/95 p-3 shadow-[0_18px_50px_rgba(23,50,77,0.12)] backdrop-blur-xl">
                {tourNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm text-charcoal transition-colors hover:bg-sand/80 hover:text-deep-blue"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            {primaryNav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-white/70 hover:text-deep-blue">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(23,50,77,1),rgba(47,111,143,1))] px-5 text-sm font-semibold text-ivory shadow-[0_12px_28px_rgba(23,50,77,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Plan Your Trip
            </Link>
          </nav>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white/70 text-charcoal shadow-sm backdrop-blur lg:hidden"
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
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLink = { label: string; href: string };

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  primaryNav: NavLink[];
  destinationNav: NavLink[];
  tourNav: NavLink[];
};

export default function MobileNav({
  open,
  onClose,
  primaryNav,
  destinationNav,
  tourNav,
}: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        className={cn(
          "absolute inset-0 bg-charcoal/40 transition-opacity backdrop-blur-[2px]",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 h-full w-[min(90vw,24rem)] overflow-y-auto border-l border-white/70 bg-[linear-gradient(180deg,rgba(255,251,245,0.98),rgba(246,239,231,0.96))] p-6 shadow-[0_20px_60px_rgba(23,50,77,0.2)] transition-transform duration-300 backdrop-blur-xl",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <p className="font-serif text-2xl text-charcoal">MeditreTravel</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-charcoal/10 bg-white/70 px-3 py-2 text-sm text-charcoal"
          >
            Close
          </button>
        </div>
        <div className="mt-8 space-y-6">
          <nav className="space-y-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                  className="block rounded-2xl px-3 py-3 text-base font-medium text-charcoal transition-colors hover:bg-sand/80 hover:text-deep-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-text">
              Destinations
            </p>
            <nav className="mt-3 space-y-2">
              {destinationNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-2xl px-3 py-3 text-sm text-charcoal transition-colors hover:bg-sand/80 hover:text-deep-blue"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-text">Tours</p>
            <nav className="mt-3 space-y-2">
              {tourNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-2xl px-3 py-3 text-sm text-charcoal transition-colors hover:bg-sand/80 hover:text-deep-blue"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-deep-blue px-6 text-sm font-semibold text-ivory"
          >
            Plan Your Trip
          </Link>
        </div>
      </aside>
    </div>
  );
}
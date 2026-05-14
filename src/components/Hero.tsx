"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(47,111,143,0.18),transparent_36%),linear-gradient(180deg,rgba(255,251,245,0.1),rgba(246,239,231,0.92))]" />
      <Container className="py-8 sm:py-12 lg:py-16">
        <div className="grid items-center gap-10 rounded-[2rem] border border-white/60 bg-ivory/85 p-4 shadow-[0_24px_80px_rgba(23,50,77,0.08)] backdrop-blur sm:p-6 lg:grid-cols-[1.08fr_0.92fr] lg:p-8">
          <div className="order-2 lg:order-1">
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">
                {eyebrow}
              </p>
            ) : null}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-text sm:text-xl"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-deep-blue px-6 text-sm font-semibold text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#0f2335]"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-charcoal/15 bg-white/70 px-6 text-sm font-semibold text-charcoal transition-colors hover:border-charcoal/30 hover:bg-white"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative order-1 aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/70 bg-sand shadow-[0_18px_48px_rgba(23,50,77,0.12)] lg:order-2 lg:aspect-[5/6]"
          >
            {image ? (
              <>
                <Image src={image} alt="Mediterranean travel inspiration" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,37,55,0.05),rgba(16,37,55,0.35))]" />
                <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-white/35 bg-white/20 p-4 text-ivory backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f8ebe2]">Mediterranean planning studio</p>
                  <p className="mt-2 text-sm leading-6 text-white/90">
                    Custom itineraries shaped around culture, nature, history, food, wine, and authentic local life.
                  </p>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_26%),linear-gradient(135deg,#f0e0d3_0%,#d9c2ac_45%,#a9b89d_100%)]" />
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
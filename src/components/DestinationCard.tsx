import Image from "next/image";
import Link from "next/link";

type DestinationCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
  alt?: string;
};

export default function DestinationCard({
  title,
  description,
  image,
  href,
  ctaLabel,
  alt = title,
}: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-white/70 bg-white shadow-[0_16px_50px_rgba(23,50,77,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,26,0.08),rgba(8,18,26,0.45))]" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-text">{description}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-deep-blue transition-colors hover:text-terracotta"
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
import Image from "next/image";
import Link from "next/link";

type TourCardProps = {
  title: string;
  description: string;
  href: string;
  image?: string;
  highlights?: string[];
  ctaLabel: string;
};

export default function TourCard({
  title,
  description,
  href,
  image,
  highlights,
  ctaLabel,
}: TourCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/75 bg-white shadow-[0_14px_42px_rgba(23,50,77,0.08)]">
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      ) : null}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-text">{description}</p>
        {highlights?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-charcoal">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
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
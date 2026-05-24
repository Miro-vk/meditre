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
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/75 bg-white/85 shadow-[0_16px_50px_rgba(23,50,77,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(23,50,77,0.12)] backdrop-blur-sm">
      <Link href={href} className="relative aspect-[4/3] overflow-hidden block">
        <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,26,0.05),rgba(8,18,26,0.46))]" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
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
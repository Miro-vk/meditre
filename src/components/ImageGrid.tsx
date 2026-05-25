import Image from "next/image";

type ImageGridProps = {
  images: Array<{ src: string; alt: string; label?: string }>;
};

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {images.map((image) => (
        <figure
          key={image.src}
          className="group overflow-hidden rounded-[1.5rem] border border-white/75 bg-white/80 shadow-[0_12px_36px_rgba(23,50,77,0.07)] backdrop-blur-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,26,0.04),rgba(8,18,26,0.24))]" />
          </div>
          {image.label ? (
            <figcaption className="px-4 py-3 text-sm font-medium text-charcoal">{image.label}</figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
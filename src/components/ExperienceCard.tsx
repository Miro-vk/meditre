import type { LucideIcon } from "lucide-react";

type ExperienceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ExperienceCard({ title, description, icon: Icon }: ExperienceCardProps) {
  return (
    <article className="rounded-[1.4rem] border border-white/75 bg-white/90 p-6 shadow-[0_12px_40px_rgba(23,50,77,0.06)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sand text-deep-blue">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-4 font-serif text-xl text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-text">{description}</p>
    </article>
  );
}
import type { LucideIcon } from "lucide-react";

type ExperienceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ExperienceCard({ title, description, icon: Icon }: ExperienceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.4rem] border border-white/75 bg-white/80 p-6 shadow-[0_12px_40px_rgba(23,50,77,0.06)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-[radial-gradient(circle,rgba(47,111,143,0.16),transparent_70%)]" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(246,239,231,1),rgba(255,255,255,0.8))] text-deep-blue shadow-[0_8px_18px_rgba(23,50,77,0.08)]">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-4 font-serif text-xl text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-text">{description}</p>
    </article>
  );
}
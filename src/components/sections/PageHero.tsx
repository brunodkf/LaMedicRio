import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/imagens/banner1.webp"
        alt="LA Médic Rio"
        fill
        className="object-cover object-top"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/50" />

      {/* Decorative line at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-700/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-500" />
            <span className="text-brand-400 text-xs font-semibold uppercase tracking-[0.2em] font-brand">
              LA Médic Rio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-brand font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

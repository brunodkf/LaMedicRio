import Link from "next/link";

interface ChamadaProps {
  title?: string;
  subtitle?: string;
  text?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Chamada({
  title = "Não perca tempo e fale com um de nossos consultores!",
  subtitle = "Os melhores equipamentos você só encontra na LA Medic Rio",
  text = "Não comprometa a qualidade quando se trata da saúde e bem-estar dos seus pacientes. Aproveite esta oportunidade para entrar em contato conosco e garantir acesso aos melhores equipamentos hospitalares disponíveis no mercado.",
  ctaText = "Fale com um consultor",
  ctaHref = "/#contato",
}: ChamadaProps) {
  return (
    <section className="py-20 md:py-28 bg-brand-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-brand font-bold text-white mb-4">
          {title}
        </h2>
        <h3 className="text-xl text-brand-200 font-brand font-medium mb-6">
          {subtitle}
        </h3>
        <p className="text-white/65 max-w-2xl mx-auto mb-12 leading-relaxed text-sm md:text-base">
          {text}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center px-9 py-4 bg-white text-brand-900 font-brand font-bold text-sm rounded-full hover:bg-brand-50 active:scale-[0.99] transition-all duration-200 shadow-lg shadow-brand-950/30"
        >
          {ctaText}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

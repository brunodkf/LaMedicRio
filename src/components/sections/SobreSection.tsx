import Image from "next/image";
import Link from "next/link";

export function SobreSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-brand font-bold text-slate-900 mb-6">
              Sobre a{" "}
              <span className="text-brand-700">LA Medic Rio</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-base mb-8">
              A empresa LA Medic Rio é genuinamente nova, fundada no ano de
              2020, visa trazer uma estratégia de mercado que ajudará na
              qualidade e atendimento nos serviços de distribuição na área da
              saúde. A empresa busca consolidar a estratégia de ampliar sua
              atuação em diversas especialidades da área de saúde, além do
              mercado da cirurgia urológica, onde se originou.
            </p>

            {/* Key numbers */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { number: "2020", label: "Fundação" },
                { number: "4+", label: "Especialidades" },
                { number: "100%", label: "Comprometimento" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <p className="text-2xl font-brand font-bold text-brand-700">
                    {stat.number}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/sobre"
              className="inline-flex items-center px-6 py-3.5 border border-brand-700 text-brand-700 font-brand font-semibold text-sm rounded-full hover:bg-brand-700 hover:text-white transition-all duration-200 group"
            >
              Saiba mais sobre nós
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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

          {/* Logo / visual */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-brand-50 flex items-center justify-center">
                <Image
                  src="/assets/imagens/logo__original.webp"
                  alt="LA Médic Rio"
                  width={240}
                  height={120}
                  className="w-52 h-auto opacity-90"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-brand-100 scale-110 opacity-60" />
              <div className="absolute inset-0 rounded-full border border-brand-50 scale-125 opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

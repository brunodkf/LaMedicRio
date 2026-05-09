import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Clients } from "@/components/sections/Clients";
import { Chamada } from "@/components/sections/Chamada";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a LA Médic Rio — empresa comprometida com a qualidade e o aprimoramento na área da saúde desde 2020.",
};

const valores = [
  {
    label: "Trabalho em Equipe",
    desc: "Colaboração e sinergia em cada projeto e atendimento ao cliente.",
  },
  {
    label: "Coragem",
    desc: "Ousadia para inovar e superar desafios no setor de equipamentos de saúde.",
  },
  {
    label: "Inovação",
    desc: "Busca constante por soluções e produtos de vanguarda para o mercado médico.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre Nós | LA Médic Rio"
        subtitle="A LA Medic Rio é uma empresa comprometida, por princípio, com a qualidade e o aprimoramento nos aspectos de saúde, segurança e bem-estar."
      />

      <Clients />

      {/* História */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="block w-2 h-0.5 rounded-full bg-brand-700" />
                <span className="text-xs font-semibold text-brand-700 uppercase tracking-widest font-brand">
                  Nossa História
                </span>
              </div>
              <h2 className="text-3xl font-brand font-bold text-slate-900">
                Uma empresa nova com propósito sólido
              </h2>
              <p>
                A empresa <strong className="text-slate-900">LA Medic Rio</strong>{" "}
                é genuinamente nova, fundada no ano de 2020, visa trazer uma
                estratégia de mercado que ajudará na qualidade e atendimento nos
                serviços de distribuição na área da saúde.
              </p>
              <p>
                Fundada por Sr. Luís Fernando dos S. Cirino e o Sr. Anderson G.
                do Nascimento na cidade do Rio de Janeiro, Brasil. Em seus
                primeiros anos concentrou seus esforços no mercado de cirurgia
                de urologia, expandindo para Ginecologia, Cirurgia Geral e
                Proctologia. Esse movimento resultou na ampliação de suas
                instalações no ano de 2022.
              </p>
              <p>
                Desde sua fundação, a empresa LA Medic Rio sempre esteve
                comprometida em trabalhar com produtos de alta qualidade,
                destacando-se como uma das principais nos procedimentos de RTU
                (Ressecção transuretral da próstata).
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/imagens/equipeLAmedic.jpg"
                alt="Equipe LA Medic Rio"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/assets/imagens/equipeLAmedicLuisRet.png"
                alt="Equipe LA Medic Rio — Luís"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="block w-2 h-0.5 rounded-full bg-brand-700" />
                  <span className="text-xs font-semibold text-brand-700 uppercase tracking-widest font-brand">
                    Propósito
                  </span>
                </div>
                <h2 className="text-2xl font-brand font-bold text-slate-900 mb-3">
                  Nossa Missão
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Disponibilizar produtos certificados por sua qualidade e
                  performance, que agregam verdadeira melhora no tratamento dos
                  pacientes. Essa entrega é garantida através do nosso
                  comprometimento com o serviço de educação continuada para
                  nossos clientes nos centros médicos.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-brand font-bold text-slate-900 mb-3">
                  Visão
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Estar presente, em até três anos, em outro território
                  brasileiro, sendo referência no atendimento humanizado e
                  ético, através do reconhecimento de nossos parceiros,
                  garantido por sistemas de controle da qualidade e compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="block w-2 h-0.5 rounded-full bg-brand-700" />
                <span className="text-xs font-semibold text-brand-700 uppercase tracking-widest font-brand">
                  Princípios
                </span>
              </div>
              <h2 className="text-3xl font-brand font-bold text-slate-900 mb-6">
                Nossos Valores
              </h2>
              <ul className="space-y-4">
                {valores.map((value) => (
                  <li
                    key={value.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-100 hover:bg-brand-50/30 transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-brand font-bold text-slate-900 mb-1">
                        {value.label}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 text-slate-600 leading-relaxed pt-2 lg:pt-14">
              <p>
                A LA Medic Rio é uma empresa comprometida, por princípio, com a
                qualidade e o aprimoramento nos aspectos de saúde, segurança,
                bem-estar e meio ambiente, relativos a seu quadro de pessoas,
                produtos e processos.
              </p>
              <p>
                Tendo como seus principais objetivos a satisfação de seus
                clientes e a valorização dos colaboradores e da sociedade civil,
                a área de Compliance realiza ações acerca das melhores práticas
                de integridade e a constante vigilância sobre a aplicação dessas
                práticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualidade de Vida */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="block w-2 h-0.5 rounded-full bg-brand-700" />
                <span className="text-xs font-semibold text-brand-700 uppercase tracking-widest font-brand">
                  Propósito Social
                </span>
              </div>
              <h2 className="text-3xl font-brand font-bold text-slate-900 mb-6">
                Qualidade de Vida!
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Somos uma empresa voltada não apenas para a comercialização de
                  produtos para saúde, mas também para oferecer o que há de
                  melhor no mundo para cada paciente que necessita de auxílio
                  médico.
                </p>
                <p>
                  Temos muito orgulho de trabalhar com produtos inovadores e que
                  trazem resultados superiores para médicos e pacientes.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/imagens/qualidade.png"
                alt="Qualidade de Vida — LA Médic Rio"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <Chamada
        title="Não perca tempo e fale com um de nossos consultores!"
        subtitle="Os melhores equipamentos você só encontra na LA Medic Rio"
        text="Não comprometa a qualidade quando se trata da saúde e bem-estar dos seus pacientes. Aproveite esta oportunidade para entrar em contato conosco e garantir acesso aos melhores equipamentos hospitalares disponíveis no mercado."
      />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export function Exclusividade() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="justify-center mb-4">Somente Aqui</Badge>
          <h2 className="text-3xl md:text-4xl font-brand font-bold text-slate-900">
            Exclusividade você encontra aqui!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col">
            <span className="inline-block text-xs font-semibold text-brand-700 uppercase tracking-widest font-brand mb-3">
              Nossa Proposta
            </span>
            <h3 className="text-xl font-brand font-bold text-slate-900 mb-5">
              Excelência
            </h3>
            <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed flex-1">
              <p>
                Na <strong className="text-slate-800">LA Médic Rio</strong>,
                inovação é a nossa linguagem. Estamos na vanguarda do
                desenvolvimento de tecnologias médicas, criando soluções que
                antecipam as necessidades futuras da prática clínica.
              </p>
              <p>
                Cada equipamento que oferecemos é construído com a mais alta
                qualidade — testado e aprovado para garantir desempenho
                superior, confiabilidade e segurança.
              </p>
              <p>
                E tendo isso em mente, oferecemos a linha{" "}
                <strong className="text-slate-800">Lone Star Retractors</strong>{" "}
                com total exclusividade de venda no Rio de Janeiro.
              </p>
            </div>
            <Link
              href="/produtos"
              className="inline-flex items-center mt-7 text-brand-700 text-sm font-semibold font-brand hover:text-brand-800 transition-colors duration-200 group"
            >
              Conheça nossos produtos
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

          {/* Center — product image */}
          <div className="flex items-center justify-center py-8 lg:py-0">
            <div className="relative w-full max-w-[260px] aspect-[3/4]">
              <Image
                src="/assets/imagens/produtos/lone1VERSION.webp"
                alt="Lone Star Retractors — Produto exclusivo LA Médic Rio"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 60vw, 280px"
              />
            </div>
          </div>

          {/* Right card */}
          <div className="bg-brand-900 rounded-2xl p-8 text-white flex flex-col">
            <span className="inline-block text-xs font-semibold text-brand-300 uppercase tracking-widest font-brand mb-3">
              Produto em Destaque
            </span>
            <h3 className="text-xl font-brand font-bold text-white mb-5">
              Lone Star Retractors
            </h3>
            <div className="space-y-3.5 text-sm text-white/75 leading-relaxed flex-1">
              <p>
                O sistema retrator de autorretenção{" "}
                <strong className="text-white">Lone Star</strong> oferece
                visualização e eficiência superiores para uma ampla gama de
                procedimentos cirúrgicos.
              </p>
              <p className="text-white font-semibold">
                Melhor do que outro par de mãos!
              </p>
              <p>
                O{" "}
                <strong className="text-white">Lone Star Retractor System</strong>{" "}
                é visivelmente diferente, visivelmente melhor — abre uma forma
                totalmente nova de operar.
              </p>
              <p>
                O design de autorretenção libera a equipe do centro cirúrgico
                para realizar outras tarefas, economiza tempo e elimina a
                desordem no local da cirurgia.
              </p>
            </div>
            <Link
              href="/produtos"
              className="inline-flex items-center mt-7 text-brand-300 text-sm font-semibold font-brand hover:text-white transition-colors duration-200 group"
            >
              Conheça nossos produtos
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
        </div>
      </div>
    </section>
  );
}

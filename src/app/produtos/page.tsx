import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Clients } from "@/components/sections/Clients";
import { ProdutosCarousel } from "@/components/sections/ProdutosCarousel";
import { Chamada } from "@/components/sections/Chamada";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Conheça nossos produtos médicos cirúrgicos de alta performance — incluindo a linha exclusiva Lone Star Retractors no Rio de Janeiro.",
};

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        title="Nossos Produtos"
        subtitle="Somos uma empresa voltada não apenas para a comercialização de produtos para saúde, mas também para oferecer o que há de melhor no mundo para cada paciente."
      />

      <Clients />

      {/* Lone Star Featured */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="block w-2 h-0.5 rounded-full bg-brand-700" />
                <span className="text-xs font-semibold text-brand-700 uppercase tracking-widest font-brand">
                  Produto em Destaque · Exclusivo RJ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-brand font-bold text-slate-900 mb-6">
                Afastadores e elásticos cirúrgicos Lone Star
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  O sistema retrator de autorretenção{" "}
                  <strong className="text-slate-800">Lone Star</strong> oferece
                  visualização e eficiência superiores para uma ampla gama de
                  procedimentos cirúrgicos.
                </p>
                <p>
                  Para várias especialidades médicas, trazem agilidade, rapidez
                  e praticidade aos procedimentos — fornecendo máxima exposição
                  com mínimo de esforço, liberando os profissionais para
                  execução de outras tarefas mais importantes.
                </p>
                <p>
                  O{" "}
                  <strong className="text-slate-800">
                    Lone Star Retractor System
                  </strong>{" "}
                  é visivelmente diferente, visivelmente melhor. Abre uma forma
                  totalmente nova de operar.
                </p>
              </div>
              <Link
                href="/#contato"
                className="inline-flex items-center px-7 py-3.5 bg-brand-700 text-white font-brand font-semibold text-sm rounded-full hover:bg-brand-800 transition-all duration-200 shadow-sm"
              >
                Solicitar orçamento
              </Link>
            </div>

            <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden bg-slate-50 shadow-sm">
              <Image
                src="/assets/imagens/produtos/produtosHome/loneStar.webp"
                alt="Lone Star Retractors — Produto exclusivo"
                fill
                className="object-contain p-10"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="block w-2 h-0.5 rounded-full bg-brand-700" />
              <span className="text-xs font-semibold text-brand-700 uppercase tracking-widest font-brand">
                Nossos Produtos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-brand font-bold text-slate-900 mb-2">
              A Melhor do Brasil, os melhores produtos!
            </h2>
            <p className="text-xl text-slate-500 font-brand">Confira:</p>
          </div>

          <ProdutosCarousel />
        </div>
      </section>

      <Chamada
        title="Não perca tempo e fale com um de nossos consultores!"
        subtitle="Os melhores equipamentos você só encontra na LA Medic Rio"
        text="Nossa equipe dedicada está à disposição para fornecer orientação especializada e ajudá-lo a encontrar os equipamentos ideais para suas necessidades específicas. Estamos comprometidos em oferecer um serviço excepcional, desde o primeiro contato até a entrega e instalação dos produtos."
      />
    </>
  );
}

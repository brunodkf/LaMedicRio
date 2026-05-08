import Image from "next/image";
import Link from "next/link";
import { produtosHome } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export function ProdutosHome() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="justify-center mb-4">Produtos</Badge>
          <h2 className="text-3xl md:text-4xl font-brand font-bold text-slate-900">
            Saiba mais sobre nossos produtos!
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {produtosHome.map((produto) => (
            <div
              key={produto.id}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Image area */}
              <div className="bg-slate-50 flex items-center justify-center p-6 h-52">
                <div className="relative w-full h-full">
                  <Image
                    src={produto.image}
                    alt={produto.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-base font-brand font-bold text-slate-900 mb-2">
                  {produto.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
                  {produto.description}
                </p>
                <Link
                  href="/produtos"
                  className="inline-flex items-center text-brand-700 text-sm font-semibold hover:text-brand-800 transition-colors duration-200 group/link"
                >
                  Saiba mais
                  <svg
                    className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
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
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-500 mb-2 text-sm">
            A LA Medic Rio conta com equipamentos de última geração para sua
            instituição de saúde.
          </p>
          <p className="text-slate-500 mb-8 text-sm">
            Soluções confiáveis para um ambiente hospitalar mais eficiente!
          </p>
          <Link
            href="/produtos"
            className="inline-flex items-center px-8 py-4 bg-brand-700 text-white font-brand font-semibold text-sm rounded-full hover:bg-brand-800 transition-all duration-200 shadow-sm"
          >
            Ver todos os produtos
          </Link>
        </div>
      </div>
    </section>
  );
}

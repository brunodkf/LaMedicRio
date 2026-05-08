import Image from "next/image";
import Link from "next/link";
import { todosProdutos } from "@/lib/data";

export function ProdutosCarousel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {todosProdutos.map((produto, i) => (
        <div
          key={produto.id}
          className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-brand-100 hover:shadow-md transition-all duration-300"
        >
          {/* Image area */}
          <div className="relative h-52 bg-slate-50">
            <Image
              src={produto.image}
              alt={produto.name}
              fill
              className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
            <span className="absolute top-3 right-4 text-[11px] font-mono text-slate-300 tabular-nums select-none">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Info */}
          <div className="p-5 border-t border-slate-100">
            <h3 className="font-brand font-bold text-slate-900 mb-2 leading-snug text-[0.95rem]">
              {produto.name}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2">
              {produto.description}
            </p>
            <Link
              href="/#contato"
              className="inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-800 group/link transition-colors duration-200"
            >
              Solicitar orçamento
              <svg
                className="ml-1.5 w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200"
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
  );
}

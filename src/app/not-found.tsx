import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-lg w-full text-center">
        <p className="text-brand-700 font-brand font-bold text-sm uppercase tracking-[0.2em] mb-5">
          Erro 404
        </p>
        <h1 className="text-5xl md:text-6xl font-brand font-bold text-slate-900 mb-4">
          Página não encontrada
        </h1>
        <p className="text-slate-500 mb-10 leading-relaxed">
          A página que você está procurando não existe ou foi movida para outro
          endereço.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-700 text-white font-brand font-semibold text-sm rounded-full hover:bg-brand-800 transition-all duration-200 shadow-sm"
          >
            Voltar ao início
          </Link>
          <Link
            href="/produtos"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-200 text-slate-700 font-brand font-semibold text-sm rounded-full hover:bg-slate-100 transition-all duration-200"
          >
            Ver produtos
          </Link>
        </div>

        <div className="mt-14">
          <Image
            src="/assets/imagens/logo__original.webp"
            alt="LA Médic Rio"
            width={110}
            height={55}
            className="mx-auto opacity-40"
          />
        </div>
      </div>
    </div>
  );
}

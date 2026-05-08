import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Obrigado!",
  description: "Sua mensagem foi enviada com sucesso.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-20 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-7">
          <svg
            className="w-10 h-10 text-brand-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-brand font-bold text-slate-900 mb-3">
          Obrigado!
        </h1>
        <p className="text-slate-600 text-lg mb-2">
          Sua mensagem foi enviada com sucesso.
        </p>
        <p className="text-slate-400 text-sm mb-10">
          Nossa equipe entrará em contato em breve.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-700 text-white font-brand font-semibold text-sm rounded-full hover:bg-brand-800 transition-all duration-200 shadow-sm"
          >
            Voltar ao início
          </Link>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-brand-700 text-brand-700 font-brand font-semibold text-sm rounded-full hover:bg-brand-700 hover:text-white transition-all duration-200"
          >
            Falar pelo WhatsApp
          </a>
        </div>

        <div className="mt-14">
          <Image
            src="/assets/imagens/logo__original.webp"
            alt="LA Médic Rio"
            width={120}
            height={60}
            className="mx-auto opacity-40"
          />
        </div>
      </div>
    </div>
  );
}

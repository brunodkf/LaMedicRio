import Link from "next/link";
import { especialidades } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { EspecialidadeCard } from "./EspecialidadeCard";
import { EspecialidadesCarousel } from "./EspecialidadesCarousel";

export function Especialidades() {
  return (
    <section id="especialidades" className="py-20 md:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="justify-center mb-4" aria-hidden="true">
            Especialidades
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Nossas Especialidades
          </h2>
        </div>

        {/* Desktop: static grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {especialidades.map((esp) => (
            <EspecialidadeCard key={esp.id} {...esp} />
          ))}
        </div>

        {/* Mobile: Swiper carousel */}
        <div className="md:hidden">
          <EspecialidadesCarousel />
        </div>

        <p className="text-center mt-10 text-sm text-slate-500">
          Além desses itens, você encontra muito mais.{" "}
          <Link
            href="/#contato"
            className="text-brand-700 font-semibold hover:text-brand-800 transition-colors duration-200 underline underline-offset-2"
          >
            Solicite seu orçamento!
          </Link>
        </p>
      </div>
    </section>
  );
}

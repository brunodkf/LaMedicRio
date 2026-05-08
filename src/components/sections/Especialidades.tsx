"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { especialidades } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

function EspecialidadeCard({
  title,
  image,
  items,
}: {
  title: string;
  image: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-5">
        <Image
          src={image}
          alt={title}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>
      <h3 className="text-lg font-brand font-bold text-slate-900 mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
            <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Especialidades() {
  return (
    <section id="especialidades" className="py-20 md:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="justify-center mb-4">Especialidades</Badge>
          <h2 className="text-3xl md:text-4xl font-brand font-bold text-slate-900">
            Nossas Especialidades
          </h2>
        </div>

        {/* Desktop: static grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {especialidades.map((esp) => (
            <EspecialidadeCard key={esp.id} {...esp} />
          ))}
        </div>

        {/* Mobile: Swiper carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={false}
          >
            {especialidades.map((esp) => (
              <SwiperSlide key={esp.id} className="h-auto">
                <EspecialidadeCard {...esp} />
              </SwiperSlide>
            ))}
          </Swiper>
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

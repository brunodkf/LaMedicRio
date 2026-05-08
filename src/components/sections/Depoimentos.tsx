"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { depoimentos } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-amber-400 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1.5 text-slate-400 text-xs font-medium">5.0</span>
    </div>
  );
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <Badge light className="mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-brand font-bold text-white mb-4">
            A Melhor do Brasil!
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Com o melhor atendimento, procuramos atender suas necessidades da
            melhor forma possível, proporcionando uma experiência extremamente
            satisfatória.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14 swiper-dark"
        >
          {depoimentos.map((dep) => (
            <SwiperSlide key={dep.id} className="h-auto">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full flex flex-col hover:bg-white/8 transition-colors duration-300">
                {/* Large quote mark */}
                <svg
                  className="w-8 h-8 text-brand-700/60 mb-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                  {dep.text}
                </p>

                <div className="flex items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-white font-brand font-semibold text-sm">
                      {dep.name}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{dep.role}</p>
                  </div>
                  <StarRating count={dep.rating} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { especialidades } from "@/lib/data";
import { EspecialidadeCard } from "./EspecialidadeCard";

export function EspecialidadesCarousel() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={16}
      slidesPerView={1.2}
      aria-label="Carrossel de especialidades"
      className="pb-10"
    >
      {especialidades.map((esp) => (
        <SwiperSlide key={esp.id} className="h-auto p-2" >
          <EspecialidadeCard {...esp} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

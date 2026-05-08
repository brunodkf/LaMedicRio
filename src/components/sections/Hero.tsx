import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.instagram,
    image: "/assets/imagens/socials/instagram.webp",
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsappHref,
    image: "/assets/imagens/socials/zap.webp",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    image: "/assets/imagens/socials/linkedin.webp",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/imagens/banner1.webp"
        alt="LA Médic Rio — Equipamentos médicos de alta performance"
        fill
        className="object-cover object-top"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay — dark left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-2xl">
          {/* Category label */}
          <div className="inline-flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-brand-500" />
            <span className="text-brand-400 text-xs font-semibold uppercase tracking-[0.2em] font-brand">
              Equipamentos Médicos Cirúrgicos
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-brand font-bold text-white leading-[1.08] tracking-tight mb-7">
            Construindo um amanhã mais saudável com os melhores equipamentos
            hoje.
          </h1>

          {/* Accent line */}
          <div className="w-16 h-1 bg-brand-600 rounded-full mb-7" />

          {/* Subtitles */}
          <p className="text-lg text-white/85 leading-relaxed mb-3 font-medium">
            Onde a saúde é primordial, a{" "}
            <strong className="text-white">LA Médic Rio</strong> se dedica à
            qualidade de vida e ao bem-estar.
          </p>
          <p className="text-base text-white/65 leading-relaxed mb-10">
            Somos os mais qualificados para o atendimento a:{" "}
            <span className="text-white/85">
              Urologia, Ginecologia, Proctologia
            </span>{" "}
            e <span className="text-white/85">Cirurgia Geral.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-700 text-white font-brand font-semibold text-sm rounded-full hover:bg-brand-600 transition-all duration-200 shadow-xl shadow-brand-950/40"
            >
              Consulte nossos especialistas
            </Link>
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-brand font-semibold text-sm rounded-full border border-white/25 hover:bg-white/18 transition-all duration-200 backdrop-blur-sm"
            >
              Ver produtos
              <svg
                className="ml-2 w-4 h-4"
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

      {/* Social sidebar — desktop only */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
        <div className="w-px h-14 bg-white/20" />
        <div className="flex flex-col gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/22 border border-white/15 transition-all duration-200 backdrop-blur-sm hover:scale-110"
              aria-label={social.label}
            >
              <Image
                src={social.image}
                alt={social.label}
                width={18}
                height={18}
                className="w-4.5 h-4.5 object-contain"
              />
            </a>
          ))}
        </div>
        <div className="w-px h-14 bg-white/20" />
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 animate-bounce">
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">
          scroll
        </span>
        <svg
          className="w-5 h-5 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

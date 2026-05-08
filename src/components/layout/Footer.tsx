import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const socialLinks = [
  {
    label: "WhatsApp",
    href: siteConfig.whatsappHref,
    image: "/assets/imagens/socials/zap.webp",
    external: true,
  },
  {
    label: "Instagram",
    href: siteConfig.instagram,
    image: "/assets/imagens/socials/instagram.webp",
    external: true,
  },
  {
    label: "E-mail",
    href: `mailto:${siteConfig.email}`,
    image: "/assets/imagens/socials/email.webp",
    external: false,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    image: "/assets/imagens/socials/linkedin.webp",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/assets/imagens/logo__branca.webp"
                alt="LA Médic Rio"
                width={90}
                height={45}
                className="h-10 w-auto mb-4 opacity-90"
              />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Sitemap</p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/produtos"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/#especialidades"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  Especialidades
                </Link>
              </li>
              <li>
                <Link
                  href="/#contato"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatos */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Contatos</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  Tel: {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Wpp: {siteConfig.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Informações + Social */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">
              Informações
            </p>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href="/privacidade"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/8 hover:bg-white/16 border border-white/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <Image
                    src={social.image}
                    alt={social.label}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Todos os direitos reservados LA
            Medic Rio
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://www.instagram.com/brunodkf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              @brunodkf
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

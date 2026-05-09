"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Produtos", href: "/produtos" },
  { label: "Quem Somos", href: "/sobre" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <Image
              src="/assets/imagens/logo__original.webp"
              alt="LA Médic Rio"
              width={110}
              height={55}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contato"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-brand-700 text-white text-sm font-brand font-semibold rounded-full hover:bg-brand-800 transition-all duration-200 shadow-sm"
            >
              Contato
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors duration-200"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`absolute block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-1.25"}`}
              />
              <span
                className={`block h-0.5 rounded-full bg-slate-800 transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-5"}`}
              />
              <span
                className={`absolute block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-1.25"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ─ Full-screen dark overlay ── */}
      <div
        className={`lg:hidden fixed inset-0 z-40 flex flex-col bg-slate-950 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto h-screen" : "opacity-0 pointer-events-none h-screen"}`}
        aria-hidden={!menuOpen}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 shrink-0">
          <Link href="/" onClick={closeMenu}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg">
              <Image
                src="/assets/imagens/logo__original.webp"
                alt="LA Médic Rio"
                width={88}
                height={44}
                className="h-7 w-auto"
              />
            </span>
          </Link>
          <button
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
            aria-label="Fechar menu"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex-1 flex flex-col justify-center px-6 py-8 bg-slate-950"
          aria-label="Menu mobile"
        >
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-6 border-b border-white/8 group"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(18px)",
                    transition: `opacity 380ms ease ${i * 65 + 80}ms, transform 380ms ease ${i * 65 + 80}ms`,
                  }}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-white/25 tabular-nums select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.65rem] font-brand font-bold text-white group-hover:text-brand-400 transition-colors duration-200 leading-none">
                      {link.label}
                    </span>
                  </span>
                  <svg
                    className="w-5 h-5 text-white/20 group-hover:text-brand-500 group-hover:translate-x-1 transition-all duration-200 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom actions */}
        <div
          className="px-6 pb-10 pt-5 space-y-3 shrink-0 border-t border-white/10"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(12px)",
            transition: `opacity 380ms ease 430ms, transform 380ms ease 430ms`,
          }}
        >
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#25D366] text-white font-brand font-semibold text-sm rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chamar no WhatsApp
          </a>
          <Link
            href="/#contato"
            onClick={closeMenu}
            className="flex items-center justify-center w-full py-3.5 bg-brand-700 text-white font-brand font-semibold text-sm rounded-xl hover:bg-brand-600 active:scale-[0.98] transition-all duration-200"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}

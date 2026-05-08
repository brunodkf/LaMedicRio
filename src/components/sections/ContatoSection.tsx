import Link from "next/link";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/lib/data";

async function handleContact(formData: FormData) {
  "use server";
  const firstname = formData.get("firstname");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");
  if (!firstname || !phone || !email || !message) return;
  redirect("/obrigado");
}

export function ContatoSection() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left col: heading + contact channels ── */}
          <div>
            <Badge className="mb-5">Contato</Badge>
            <h2 className="text-3xl md:text-4xl font-brand font-bold text-slate-900 mb-5 leading-tight">
              Fale com nossa equipe
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              Estamos prontos para ajudá-lo com orçamentos e informações sobre nossos produtos. Atendimento ágil e especializado.
            </p>

            {/* Contact channels */}
            <div className="space-y-3 mb-10">
              {/* WhatsApp — highlighted */}
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-emerald-200 hover:bg-emerald-100/70 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-emerald-700 mb-0.5 uppercase tracking-wide">
                    WhatsApp · Atendimento rápido
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    {siteConfig.whatsapp}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-emerald-400 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
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
              </a>

              {/* Phone */}
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-400 mb-0.5 uppercase tracking-wide">
                    Telefone · Horário comercial
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    {siteConfig.phone}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-slate-300 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
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
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-400 mb-0.5 uppercase tracking-wide">
                    E-mail · Resposta em até 24h
                  </p>
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {siteConfig.email}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-slate-300 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
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
              </a>
            </div>

            {/* Privacy note */}
            <p className="text-xs text-slate-400 leading-relaxed">
              Seus dados estão protegidos conforme nossa{" "}
              <Link
                href="/privacidade"
                className="text-brand-700 hover:underline underline-offset-2"
              >
                Política de Privacidade
              </Link>
              . Sem spam, prometemos.
            </p>
          </div>

          {/* ── Right col: form ── */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-brand font-bold text-slate-900 mb-6">
              Envie uma mensagem
            </h3>
            <form action={handleContact} className="space-y-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Nome completo
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-700/30 focus:border-brand-700 transition-all duration-200 bg-slate-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(21) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-700/30 focus:border-brand-700 transition-all duration-200 bg-slate-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-700/30 focus:border-brand-700 transition-all duration-200 bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Descreva o que você procura ou qual produto lhe interessa…"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-700/30 focus:border-brand-700 transition-all duration-200 resize-none bg-slate-50"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 accent-brand-700 cursor-pointer"
                />
                <label
                  htmlFor="privacy"
                  className="text-xs text-slate-500 leading-relaxed cursor-pointer"
                >
                  Ao concordar, nossa empresa poderá enviar comunicações de
                  acordo com seus interesses. Veja nossa{" "}
                  <Link
                    href="/privacidade"
                    className="text-brand-700 hover:text-brand-800 underline underline-offset-2"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-700 text-white font-brand font-semibold text-sm rounded-xl hover:bg-brand-800 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 mt-2"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

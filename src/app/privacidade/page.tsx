import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e proteção de dados da LA Médic Rio.",
};

export default function PrivacidadePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Logo + heading */}
        <div className="mb-10">
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/assets/imagens/logo__original.webp"
              alt="LA Médic Rio"
              width={110}
              height={55}
              className="h-10 w-auto"
            />
          </Link>
          <h1 className="text-4xl font-brand font-bold text-slate-900 mb-2">
            Política de Privacidade
          </h1>
          <p className="text-slate-400 text-sm">
            Última atualização: 02 de Abril de 2024
          </p>
        </div>

        {/* Content */}
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm">
          <p>
            A sua privacidade é importante para nós. É política do LA Medic Rio
            respeitar a sua privacidade em relação a qualquer informação sua que
            possamos coletar no site{" "}
            <Link href="/" className="text-brand-700 hover:underline">
              LA Medic Rio
            </Link>
            , e outros sites que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </p>

          <div className="space-y-3">
            <p>
              <strong className="text-slate-800">Tratamento de Dados: </strong>
              Tratamento é toda operação realizada com dados por parte da LA
              Medic Rio ou em seu nome. Isso inclui, por exemplo, a sua obtenção
              (&quot;coleta&quot;), produção, utilização, acesso, transmissão,
              processamento, armazenamento e eliminação.
            </p>
            <p>
              <strong className="text-slate-800">LGPD: </strong>A Lei Federal
              nº 13.709/18, também conhecida como Lei Geral de Proteção de
              Dados, disciplina direitos e obrigações relacionados ao Tratamento
              de Dados Pessoais no Brasil.
            </p>
            <p>
              <strong className="text-slate-800">Controlador: </strong>Pessoa
              natural ou jurídica a quem competem as decisões referentes ao
              Tratamento de Dados Pessoais.
            </p>
            <p>
              <strong className="text-slate-800">Co-controlador: </strong>
              Terceiro que recebe dados compartilhados do Controlador para
              realizar Tratamentos com vistas às suas próprias Finalidades. Caso
              a LA Medic Rio realize este tipo de compartilhamento, você será
              previamente informado.
            </p>
          </div>

          <h2 className="text-xl font-brand font-bold text-slate-900 pt-4">
            Nossas Obrigações
          </h2>
          <p>
            A LA Medic Rio deve cumprir a Lei Federal nº 13.709/18 (Lei Geral
            de Proteção de Dados – LGPD) e outras leis aplicáveis, como a Lei
            Federal nº 12.965/14 (Marco Civil da Internet – MCI), bem como as
            normas administrativas emitidas pelas autoridades competentes, como
            a ANPD.
          </p>

          <h2 className="text-xl font-brand font-bold text-slate-900 pt-4">
            Que tipo de dados são coletados?
          </h2>
          <p>
            <strong className="text-slate-800">Visitantes do Site: </strong>
            Caso você seja um visitante em nossos Sites, coletaremos seus dados
            de navegação. Quando você visita o Site, são inseridos
            &quot;Cookies&quot; em seu navegador, para identificar quantas vezes
            você retorna ao nosso endereço e para salvar as suas interações com
            os conteúdos e serviços disponíveis.
          </p>
          <p>
            <strong className="text-slate-800">Dados de contato: </strong>Você
            nos fornecerá esses dados ao realizar o envio de formulário para a
            solicitação de um orçamento para os produtos que estiver
            interessado(a).
          </p>

          <h2 className="text-xl font-brand font-bold text-slate-900 pt-4">
            Armazenamento dos dados pessoais
          </h2>
          <p>
            Os seus Dados Pessoais permanecem armazenados em nossos servidores
            nas nuvens de nossos Operadores, no Brasil ou em país estrangeiro,
            conforme permitido pelas leis aplicáveis.
          </p>
          <p>
            Nós manteremos seus Dados Pessoais por até 5 (cinco) anos após o
            fim do cancelamento de sua conta, ou pelo período correspondente ao
            prazo prescricional para demandas judiciais.
          </p>

          <h2 className="text-xl font-brand font-bold text-slate-900 pt-4">
            Medidas de Segurança
          </h2>
          <p>
            A LA Medic Rio mantém como prioridade a proteção e a privacidade
            dos seus dados pessoais, adotando as melhores práticas de segurança
            adequadas para o nosso mercado, como o uso de controle de acesso,
            registro do tratamento dos dados, criptografia, entre outras medidas
            de segurança da informação.
          </p>

          <h2 className="text-xl font-brand font-bold text-slate-900 pt-4">
            Seus direitos
          </h2>
          <p>
            A Lei Geral de Proteção de Dados garante aos titulares de dados
            pessoais o exercício de seus direitos frente aos controladores. A LA
            Medic Rio disponibiliza abaixo um detalhamento dos seus direitos.
          </p>
          <ul className="space-y-2 list-none">
            {[
              "Confirmação da existência de tratamento e acesso aos dados",
              "Correção de dados incompletos, inexatos ou desatualizados",
              "Anonimização, bloqueio ou eliminação de dados desnecessários",
              "Portabilidade dos dados a outro fornecedor de serviço",
              "Revogação do consentimento a qualquer momento",
            ].map((right) => (
              <li key={right} className="flex items-start gap-2.5">
                <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                {right}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-brand font-bold text-slate-900 pt-4">
            Como entrar em contato conosco
          </h2>
          <p>
            Se você tem qualquer dúvida a respeito de como a LA Medic Rio trata
            seus dados ou gostaria de fazer algum requerimento, entre em contato
            com nosso Encarregado:
          </p>
          <p>
            <strong className="text-slate-800">E-mail:</strong>{" "}
            <a
              href="mailto:privacy@lamedicrio.com.br"
              className="text-brand-700 hover:underline"
            >
              privacy@lamedicrio.com.br
            </a>
          </p>

          <p className="pt-4 text-slate-400 text-xs border-t border-slate-100">
            Data da última atualização: 02 de Abril de 2024.
          </p>
        </div>
      </div>
    </div>
  );
}

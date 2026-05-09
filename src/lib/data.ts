export const siteConfig = {
  name: "LA Médic Rio",
  tagline:
    "Construindo um amanhã mais saudável com os melhores equipamentos hoje.",
  description:
    "Comércio de Produtos Médicos Cirúrgicos. Somos os mais qualificados para o atendimento a: Urologia, Ginecologia, Proctologia e Cirurgia Geral.",
  phone: "(21) 3518-7147",
  whatsapp: "(21) 98545-0123",
  whatsappHref: "https://api.whatsapp.com/send?phone=5521985450123&text=",
  email: "comercial@lamedicrio.com",
  instagram: "https://www.instagram.com/la.medic.rio/",
  linkedin: "https://www.linkedin.com/in/la-medic-rio-406495207/",
  hubspotId: "46162151",
};

export type Especialidade = {
  id: number;
  title: string;
  image: string;
  items: string[];
};

export const especialidades: Especialidade[] = [
  {
    id: 1,
    title: "Urologia",
    image: "/assets/imagens/especialidade01.webp",
    items: ["Aspirador Poole reto", "Valva de Doyen", "Pinça Babcock"],
  },
  {
    id: 2,
    title: "Ginecologia",
    image: "/assets/imagens/especialidade02.webp",
    items: ["Espéculo Vaginal", "Escova Cervical", "Fixador Celular"],
  },
  {
    id: 3,
    title: "Proctologia",
    image: "/assets/imagens/especialidade03.webp",
    items: ["Afastador Farabeuf", "Espéculo Sims Retal", "Porta Agulha Mayo"],
  },
  {
    id: 4,
    title: "Cirurgia Geral",
    image: "/assets/imagens/especialidade04.webp",
    items: ["Campo cirúrgico", "Afastador Farabeuf", "Tesoura Íris"],
  },
];

export type Depoimento = {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
};

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    name: "Santos, Marcio",
    role: "Instrumentador",
    rating: 5,
    text: '"Empresa comprometida em resultados e desempenho, com descartáveis e equipamentos de qualidade! Com certeza contribui para uma cirurgia segura e eficaz".',
  },
  {
    id: 2,
    name: "Ferreira, Maico",
    role: "Comprador",
    rating: 5,
    text: "Uma empresa que sempre nos atende com muita agilidade e compromisso. Temos uma parceria de sucesso e duradoura. Obrigado, LA Medic!",
  },
  {
    id: 3,
    name: "Rodrigues, Julia",
    role: "Secretaria",
    rating: 5,
    text: "A empresa é muito proativa, pois todas as vezes em que solicitei para as cirurgias, fui atendida de forma bem rápida.",
  },
  {
    id: 4,
    name: "Cliente Anônimo",
    role: "Médico",
    rating: 5,
    text: "Parabenizo toda a equipe da empresa LA Medic Rio, por serem atenciosos e profissionais. Dessa forma, nos trazem bons resultados para os atendimentos nos procedimentos.",
  },
];

export type Produto = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export const produtosHome: Produto[] = [
  {
    id: 1,
    name: "Alça Bipolar",
    description:
      "Composta por monofilamentos de polipropileno, a trama utilizada para o tecido possui elasticidade multidirecional limitada.",
    image: "/assets/imagens/produtos/produtosHome/alca.webp",
  },
  {
    id: 2,
    name: "Equipo de Irrigação",
    description:
      "Trazem agilidade, rapidez e praticidade aos procedimentos fornecendo máxima exposição com mínimo de esforço.",
    image: "/assets/imagens/produtos/produtosHome/Equipo.webp",
  },
  {
    id: 3,
    name: "Mini Ressectoscópio",
    description:
      "Essenciais para a realização de procedimentos como a ressecção endometrial e a polipectomia.",
    image: "/assets/imagens/produtos/produtosHome/ressectoscopio.webp",
  },
  {
    id: 4,
    name: "Rede Polimerica Sling",
    description:
      "Usada na cirurgia de sling para incontinência urinária feminina.",
    image: "/assets/imagens/produtos/produtosHome/sling.webp",
  },
];

export const todosProdutos: Produto[] = [
  {
    id: 1,
    name: "Mini Ressectoscópio",
    description:
      "Os ressectoscópios são essenciais para a realização de procedimentos como a ressecção endometrial e a polipectomia. Oferecem elevada precisão e controle, tornando as cirurgias complexas mais seguras e eficientes.",
    image: "/assets/imagens/produtos/produtosHome/ressectoscopio.webp",
  },
  {
    id: 2,
    name: "Alça Bipolar 18fr · 22fr · 24fr",
    description:
      "Composta por monofilamentos de polipropileno, a trama utilizada para o tecido possui elasticidade multidirecional limitada.",
    image: "/assets/imagens/produtos/produtosHome/alca.webp",
  },
  {
    id: 3,
    name: "Equipo de Irrigação",
    description:
      "Trazem agilidade, rapidez e praticidade aos procedimentos fornecendo máxima exposição com mínimo de esforço.",
    image: "/assets/imagens/produtos/produtosHome/Equipo.webp",
  },
  {
    id: 4,
    name: "Rede Polimerica Sling",
    description:
      "A cirurgia de sling para incontinência urinária feminina é considerada um procedimento minimamente invasivo. Consiste na colocação de uma faixa de polipropileno entre a porção média da uretra sob a mucosa da vagina.",
    image: "/assets/imagens/produtos/produtosHome/sling.webp",
  },
  {
    id: 5,
    name: "Evacuador de Ellik",
    description:
      "Desenvolvido para realizar funções duplas de irrigação e tensionamento, assim como coleta de tecidos durante a cirurgia transuretral da bexiga e da próstata. Permite a evacuação rápida e eficiente do tecido.",
    image: "/assets/imagens/produtos/produtosHome/evacuador.webp",
  },
  {
    id: 6,
    name: "Fio Guia",
    description:
      "Projetados para navegar nos vasos e alcançar uma lesão ou segmento do vaso. Atua como guia para que cateteres maiores possam seguir rapidamente e facilitar a entrega ao local de tratamento.",
    image: "/assets/imagens/produtos/fio-guia.webp",
  },
  {
    id: 7,
    name: "Pó Hemostático",
    description:
      "Composto por um polissacarídeo absorvível vegetal purificado. Indicado em procedimentos cirúrgicos como adjuvante hemostático no controle do sangramento capilar, venoso e arteriolar.",
    image: "/assets/imagens/produtos/produtosHome/po.webp",
  },
  {
    id: 8,
    name: "Tela Inorgânica de Polipropileno",
    description:
      "Marlex 15x15cm e 30x30cm Waltex Estéril. Composta por monofilamentos de polipropileno com elasticidade multidirecional limitada. Provoca inflamação transitória que auxilia na cicatrização, formando tecido fibroso incorporado.",
    image: "/assets/imagens/produtos/produtosHome/tela.webp",
  },
  {
    id: 9,
    name: "Implante Testicular",
    description:
      "Desenvolvido para complemento ou correção estética em pacientes que tiveram perda, má formação, ausência ou moléstia do testículo natural. Constituído por casulo de silicone grau médico, macio e resistente.",
    image: "/assets/imagens/produtos/IMPLANTE-TESTICULAR.webp",
  },
  {
    id: 10,
    name: "Prótese Peniana",
    description:
      "Confeccionada em silicone grau implantável, maleável e atóxico. O silicone com superfície lisa no corpo da prótese é mais macio até sua ponteira para proporcionar maior conforto ao paciente.",
    image: "/assets/imagens/produtos/protesePeniana.webp",
  },
  {
    id: 11,
    name: "Cateter Duplo J",
    description:
      "Dispositivo médico utilizado no campo da urologia para auxiliar na drenagem da urina dos rins até a bexiga em casos de obstrução ou outras complicações que afetam o fluxo urinário.",
    image: "/assets/imagens/produtos/duploj.webp",
  },
];

export const clients = [
  {
    id: 1,
    image: "/assets/imagens/clients/cliente01.webp",
    name: "Cliente 1",
  },
  { id: 2, image: "/assets/imagens/clients/image2.webp", 
    name: "Cliente 2" },
  {
    id: 3,
    image: "/assets/imagens/clients/cliente03.2.webp",
    name: "Cliente 3",
  },
  { id: 4, image: "/assets/imagens/clients/image4.webp", 
    name: "Cliente 4" },
  {
    id: 5,
    image: "/assets/imagens/clients/cliente05.2.webp",
    name: "Cliente 5",
  },
];

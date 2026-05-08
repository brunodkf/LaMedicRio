import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Especialidades } from "@/components/sections/Especialidades";
import { Exclusividade } from "@/components/sections/Exclusividade";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { ProdutosHome } from "@/components/sections/ProdutosHome";
import { ContatoSection } from "@/components/sections/ContatoSection";
import { SobreSection } from "@/components/sections/SobreSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Especialidades />
      <Exclusividade />
      <Depoimentos />
      <ProdutosHome />
      <ContatoSection />
      <SobreSection />
    </>
  );
}

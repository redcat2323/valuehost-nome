import NameGeneratorForm from "@/components/NameGeneratorForm";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Crie o Nome Ideal para Sua Empresa: Descubra o Nome Perfeito para Seu Negócio
        </h1>
        <p className="text-white/90 text-lg">
          Inspire-se com ideias de nomes únicos para fortalecer sua marca. É 100% gratuito! Basta inserir palavras-chave relevantes e encontrar opções incríveis.
        </p>
      </div>
      <NameGeneratorForm />
    </div>
  );
};

export default Index;
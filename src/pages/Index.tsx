import NameGeneratorForm from "@/components/NameGeneratorForm";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-white animate-shimmer relative">
          Crie o Nome Ideal para Sua Empresa: Descubra o Nome Perfeito para Seu Negócio
          <div className="absolute inset-0 blur-[80px] bg-gradient-to-r from-primary/30 to-white/30 animate-pulse opacity-30 -z-10"></div>
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
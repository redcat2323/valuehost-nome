import NameGeneratorForm from "@/components/NameGeneratorForm";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary animate-shimmer relative">
          Crie o Nome Ideal para Sua Empresa: Descubra o Nome Perfeito para Seu Negócio
          <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-primary via-white to-primary animate-pulse opacity-50 -z-10"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-white to-primary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-shift -z-20"></div>
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
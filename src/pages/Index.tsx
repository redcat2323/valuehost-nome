import NameGeneratorForm from "@/components/NameGeneratorForm";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <a 
          href="https://napoleon.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://napoleon.com.br/wp-content/uploads/2023/08/Asset-4.svg" 
            alt="Napoleon Logo" 
            className="h-16 mx-auto mb-8 animate-fade-in hover:opacity-80 transition-opacity"
          />
        </a>
        <h1 className="text-4xl font-bold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#13E881] to-[#25A559] animate-shimmer relative">
          Crie o Nome Ideal para Sua Empresa: Descubra o Nome Perfeito para Seu Negócio
          <div className="absolute inset-0 blur-[80px] bg-gradient-to-r from-[#13E881]/30 to-[#25A559]/30 animate-pulse opacity-30 -z-10"></div>
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
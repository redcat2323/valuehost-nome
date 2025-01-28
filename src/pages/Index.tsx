import NameGeneratorForm from "@/components/NameGeneratorForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <a 
          href="https://www.valuehost.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img 
            src="https://www.valuehost.com.br/assets/svg/logo/logo.svg" 
            alt="ValueHost Logo" 
            className="h-12 sm:h-16 mx-auto mb-6 sm:mb-8 animate-fade-in hover:opacity-80 transition-opacity"
          />
        </a>
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#377dff] to-[#377dff] animate-shimmer relative">
          Crie o Nome Ideal para Sua Empresa: Descubra o Nome Perfeito para Seu Negócio
          <div className="absolute inset-0 blur-[80px] bg-gradient-to-r from-[#377dff]/30 to-[#377dff]/30 animate-pulse opacity-30 -z-10"></div>
        </h1>
        <p className="text-base sm:text-lg text-[#377dff]/90 mb-6 sm:mb-8 px-4">
          Inspire-se com ideias de nomes únicos para fortalecer sua marca. É 100% gratuito! Basta inserir palavras-chave relevantes e encontrar opções incríveis.
        </p>
      </div>
      <NameGeneratorForm />
    </div>
  );
};

export default Index;
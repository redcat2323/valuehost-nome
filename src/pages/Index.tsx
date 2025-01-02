import NameGeneratorForm from "@/components/NameGeneratorForm";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Gerador de Nomes para Empresas
        </h1>
        <p className="text-white/90 text-lg">
          Crie o nome perfeito para o seu negócio em segundos
        </p>
      </div>
      <NameGeneratorForm />
    </div>
  );
};

export default Index;
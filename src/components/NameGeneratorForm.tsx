
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NameGeneratorForm = () => {
  const [keyword, setKeyword] = useState("");
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Função local para gerar nomes baseados em palavras-chave
  const generateNamesLocally = (keyword: string): string[] => {
    const prefixes = ["Value", "Pro", "Tech", "Digi", "Net", "Web", "Cloud", "Smart", "Prime", "Fast"];
    const suffixes = ["Host", "Link", "Tech", "Bit", "Net", "Web", "Cloud", "Connect", "Soft", "Hub"];
    const domains = ["Solutions", "Systems", "Services", "Network", "Cloud", "Hosting", "Technology", "Digital", "Studio", "Group"];

    // Algoritmo simples para gerar combinações baseadas na palavra-chave
    const keywordParts = keyword.toLowerCase().split(/\s+/);
    const suggestions: string[] = [];

    // Cria combinações de nomes
    for (let i = 0; i < 10; i++) {
      const usePrefix = Math.random() > 0.3;
      const useSuffix = Math.random() > 0.3;
      const useDomain = Math.random() > 0.5;
      
      let name = "";
      
      // Adiciona um prefixo aleatório ou capitaliza a palavra-chave
      if (usePrefix) {
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        name += randomPrefix;
      } else {
        // Usa parte da palavra-chave ou a palavra inteira
        const keywordPart = keywordParts[Math.floor(Math.random() * keywordParts.length)];
        name += keywordPart.charAt(0).toUpperCase() + keywordPart.slice(1);
      }
      
      // Adiciona um sufixo aleatório
      if (useSuffix) {
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        name += randomSuffix;
      }
      
      // Adiciona um domínio
      if (useDomain) {
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        name += " " + randomDomain;
      }
      
      // Evita duplicatas
      if (!suggestions.includes(name) && name.length > 2) {
        suggestions.push(name);
      } else {
        // Se houver duplicata, tenta novamente
        i--;
      }
    }

    return suggestions;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, insira uma palavra-chave",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Simula um pequeno atraso para dar a sensação de processamento
      setTimeout(() => {
        const names = generateNamesLocally(keyword);
        setGeneratedNames(names);
        toast({
          title: "Sucesso!",
          description: "Nomes gerados com sucesso",
        });
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error("Erro ao gerar nomes:", error);
      toast({
        title: "Erro",
        description: "Erro ao gerar nomes. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(name);
    toast({
      title: "Sucesso!",
      description: "Nome copiado para a área de transferência",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`flex ${isMobile ? 'flex-col gap-3' : 'gap-4'}`}>
          <div className="flex-1">
            <Input
              placeholder="Digite suas palavras-chave aqui"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full bg-white border-[#377dff] focus-visible:ring-[#377dff] placeholder:text-gray-400"
            />
          </div>
          <div className={`${isMobile ? 'w-full' : 'flex items-end'}`}>
            <Button 
              type="submit" 
              className={`bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10 ${isMobile ? 'w-full' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? "Gerando sugestões..." : "Gerar Nomes"}
            </Button>
          </div>
        </div>
      </form>

      {generatedNames.length > 0 && (
        <div className="mt-8 space-y-4">
          <div className={`${isMobile ? 'flex flex-col gap-4' : 'flex justify-between items-center'} mb-6`}>
            <h2 className="text-xl font-semibold text-[#333333]">Sugestões de Nomes</h2>
            <Button
              variant="secondary"
              className="bg-[#377dff] hover:bg-[#377dff]/90 text-white font-semibold px-6 py-3 h-auto transition-all duration-300 shadow-lg hover:shadow-[#377dff]/20 hover:-translate-y-0.5"
              asChild
            >
              <a
                href="https://www.valuehost.com.br/cliente/cart.php?a=add&domain=register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Registrar Domínio
              </a>
            </Button>
          </div>
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
            {generatedNames.map((name, index) => (
              <div
                key={index}
                className="bg-[#377dff] p-4 sm:p-6 rounded-lg flex justify-between items-center animate-fade-in hover:shadow-lg transition-all duration-300 group relative overflow-hidden border border-white/10"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-medium text-base sm:text-lg relative z-10 text-white group-hover:text-white transition-colors duration-300 break-all mr-2">
                  {name}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(name)}
                  className="relative z-10 hover:bg-white/10 transition-colors shrink-0"
                >
                  <Copy className="h-4 w-4 text-white" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NameGeneratorForm;

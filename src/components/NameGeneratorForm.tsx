import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const NameGeneratorForm = () => {
  const [keyword, setKeyword] = useState("");
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateNamesWithAI = async (keyword: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('generate-names', {
        body: { keyword }
      });

      if (error) {
        console.error("Erro ao chamar a função:", error);
        throw new Error(error.message);
      }

      if (!data?.suggestions) {
        throw new Error("Nenhuma sugestão retornada");
      }

      return data.suggestions;
    } catch (error) {
      console.error("Erro ao gerar nomes:", error);
      throw error;
    }
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
      const names = await generateNamesWithAI(keyword);
      setGeneratedNames(names);
      toast({
        title: "Sucesso!",
        description: "Nomes gerados com sucesso",
      });
    } catch (error) {
      console.error("Erro ao gerar nomes:", error);
      toast({
        title: "Erro",
        description: "Erro ao gerar nomes. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
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
    <div className="w-full max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              placeholder="Digite suas palavras-chave aqui"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="glass-effect"
            />
          </div>
          <div className="flex items-end">
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10"
              disabled={isLoading}
            >
              {isLoading ? "Gerando sugestões..." : "Gerar Nomes"}
            </Button>
          </div>
        </div>
      </form>

      {generatedNames.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Sugestões de Nomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generatedNames.map((name, index) => (
              <div
                key={index}
                className="glass-effect p-4 rounded-lg flex justify-between items-center animate-fade-in hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-medium relative z-10">{name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(name)}
                  className="relative z-10 hover:bg-white/20 transition-colors"
                >
                  <Copy className="h-4 w-4" />
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
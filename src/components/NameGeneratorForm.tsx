import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";

const industries = [
  { value: "technology", label: "Tecnologia" },
  { value: "food", label: "Alimentação" },
  { value: "fashion", label: "Moda" },
  { value: "health", label: "Saúde" },
  { value: "education", label: "Educação" },
  { value: "services", label: "Serviços" },
];

const NameGeneratorForm = () => {
  const [keyword, setKeyword] = useState("");
  const [industry, setIndustry] = useState("");
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const { toast } = useToast();

  const generateNames = (baseWord: string) => {
    const suffixes = ["Hub", "Tech", "Pro", "Go", "Now", "Lab", "Plus", "Mind", "Flow", "Sync"];
    const prefixes = ["i", "e", "Smart", "Next", "Top", "Prime", "Meta", "Eco", "Bio", "Neo"];
    
    const names = [];
    // Generate with suffixes
    names.push(...suffixes.map(suffix => `${baseWord}${suffix}`));
    // Generate with prefixes
    names.push(...prefixes.map(prefix => `${prefix}${baseWord}`));
    
    return names;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim() || !industry) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    const names = generateNames(keyword);
    setGeneratedNames(names);
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
        <div className="space-y-2">
          <label className="text-sm font-medium">Palavra-chave do seu negócio</label>
          <Input
            placeholder="Ex: café, tech, pet..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="glass-effect"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Setor de atuação</label>
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger className="glass-effect">
              <SelectValue placeholder="Selecione um setor" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry.value} value={industry.value}>
                  {industry.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full gradient-bg hover:opacity-90 transition-opacity">
          Gerar Nomes
        </Button>
      </form>

      {generatedNames.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Sugestões de Nomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generatedNames.map((name, index) => (
              <div
                key={index}
                className="glass-effect p-4 rounded-lg flex justify-between items-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-medium">{name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(name)}
                  className="hover:bg-white/20"
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
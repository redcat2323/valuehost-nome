import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { keyword } = await req.json();

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY não encontrada');
    }

    console.log('Gerando nomes para a palavra-chave:', keyword);

    const prompt = `Atue como um especialista em branding e naming.
    Crie 20 sugestões de nomes criativos e memoráveis para uma empresa/marca usando a palavra-chave: "${keyword}".
    
    Requisitos específicos:
    - 12 nomes devem estar na língua original da palavra-chave (60%)
    - 8 nomes devem estar em inglês (40%)
    - 10 nomes devem ser palavras únicas (sem combinações)
    - 10 nomes podem ser combinações criativas de palavras
    
    Considere:
    - Nomes curtos e fáceis de lembrar
    - Possibilidade de registro de domínio
    - Sonoridade agradável
    - Potencial para construção de marca
    - Use técnicas como: sufixos modernos, prefixos quando apropriado
    
    Retorne apenas os nomes, um por linha, sem explicações adicionais.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Erro na resposta da OpenAI:', error);
      throw new Error(error.error?.message || 'Erro ao gerar nomes');
    }

    const data = await response.json();
    console.log('Resposta da OpenAI recebida com sucesso');
    
    const suggestions = data.choices[0].message.content
      .split('\n')
      .filter((name: string) => name.trim());

    return new Response(
      JSON.stringify({ suggestions }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Erro na função generate-names:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        },
      },
    );
  }
});
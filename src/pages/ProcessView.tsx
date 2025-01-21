import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

// Mock data - in a real app this would come from an API
const processData = {
  title: "Processo de Matrícula",
  description: "Fluxo completo do processo de matrícula de alunos",
  content: `O processo de matrícula é composto por várias etapas importantes que devem ser seguidas criteriosamente:

1. Verificação de documentos
   - RG e CPF do aluno
   - Histórico escolar
   - Comprovante de residência

2. Análise acadêmica
   - Validação do histórico escolar
   - Verificação de pré-requisitos
   - Análise de equivalência de disciplinas

3. Processamento financeiro
   - Verificação de pagamentos anteriores
   - Geração de boletos
   - Confirmação de pagamento

4. Confirmação da matrícula
   - Geração do número de matrícula
   - Envio de confirmação por email
   - Liberação de acesso ao portal do aluno`,
  type: "process" as const,
  image: "/placeholder.svg"
};

export default function ProcessView() {
  const navigate = useNavigate();
  const { processId } = useParams();

  const handleEdit = () => {
    navigate(`edit`);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{processData.title}</h1>
        <Button onClick={handleEdit} variant="outline">
          <Edit className="mr-2 h-4 w-4" />
          Editar
        </Button>
      </div>
      
      <div className="bg-card rounded-lg border p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Descrição</h2>
          <p className="text-muted-foreground">{processData.description}</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Conteúdo</h2>
          <div className="prose max-w-none whitespace-pre-line">
            {processData.content}
          </div>
        </div>
        
        {processData.image && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Imagem do Processo</h2>
            <img 
              src={processData.image} 
              alt="Process documentation" 
              className="rounded-lg max-h-96 object-contain border border-border"
            />
          </div>
        )}
      </div>
    </div>
  );
}
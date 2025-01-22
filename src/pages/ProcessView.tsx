import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

// Mock data - in a real app this would come from an API
const processData = {
  title: "Cadastro de biometria - CPD",
  description: "Passo a passo para cadastrar a biometria de usuários autorizados no CPD",
  content: `O processo para cadastrar a biometria de usuários autorizados no CPD é composto por algumas etapas importantes que devem ser seguidas criteriosamente:

1. Verificação de usuário:
   - Verificar se o usuário está autorizado a cadastrar a biometria
   - Verificar motivo de acesso do usuário no CPD

2. Na tela de cadastro de biometria, siga os seguintes passos:
   - Pressionar o botão menu até aparecer a tela de cadastro
   - Inserir senha de admin do CPD. (123456)
   - Clicar em Cadastrar usuário
   - Clicar em Cadastrar biometria
   - Verificar e anotar o número da biometria do usuário
   - Pedir para que o usuário insira sua biometria no dispositivo (3 vezes solicitado)
   - Clicar em Confirmar
   - Clicar em Sair

 3. Cadastro em Planilha de controle de acesso ao CPD:
   - Ao terminar o cadastro, acesse a planilha de controle de acessos ao CPD
   - Planilha: https://docs.google.com/spreadsheets/d/1U3ELtspWe_fzxnAErehRZ6_-TFW1QSExYhj9cpB9aXg/edit?usp=sharing
   - Salve o número de biometria do usuário e os dados pessoais do usuário`,

  type: "process" as const,
  image: "/biometria.jpeg"
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
          <h2 className="text-xl font-semibold mb-2 text-black">Descrição</h2>
          <p className="text-black">{processData.description}</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">Conteúdo</h2>
          <div className="prose max-w-none whitespace-pre-line text-black">
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
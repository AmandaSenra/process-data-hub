import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProcessCard } from "@/components/ProcessCard";
import { Plus } from "lucide-react";

interface Unit {
  id: string;
  name: string;
  cards: string[];
}

// Dados das unidades por grupo
const unitsData = {
  ibmec: {
    "Rio de Janeiro": [
      {
        id: "Centro",
        name: "Ibmec - Centro",
        cards: ["Ibmec Centro"]
      },
      {
        id: "Barra",
        name: "Ibmec - Barra",
        cards: ["Ibmec Barra"]
      }
    ],
    "São Paulo": [
      {
        id: "Paulista",
        name: "Ibmec - Paulista",
        cards: ["Ibmec Paulista"]
      },
      {
        id: "Faria Lima",
        name: "Ibmec - Faria Lima",
        cards: ["Ibmec Faria Lima"]
      }
    ],
    "Brasília": [
      {
        id: "Brasília",
        name: "Ibmec - Brasília",
        cards: ["Ibmec Brasília"]
      }
    ],
    "Belo Horizonte": [
      {
        id: "Belo Horizonte",
        name: "Ibmec - BH",
        cards: ["Ibmec Belo Horizonte"]
      }
    ]
  },
  estacio: {
    "Rio de Janeiro": [
      {
        id: "Tom Jobim",
        name: "Estácio - Tom Jobim",
        cards: ["Estácio Tom Jobim"]
      },
      {
        id: "Volta Redonda",
        name: "Estácio - Volta Redonda",
        cards: ["Estácio Volta Redonda"]
      },
      {
        id: "Irajá",
        name: "Estácio - Irajá",
        cards: ["Estácio Irajá"]
      }
    ],
    "São Paulo": [
      {
        id: "Liberdade",
        name: "Estácio - Liberdade",
        cards: ["Estácio Liberdade"]
      },
      {
        id: "Santo Amaro",
        name: "Estácio - Santo Amaro",
        cards: ["Estácio Santo Amaro"]
      },
      {
        id: "Santo André",
        name: "Estácio - Santo André",
        cards: ["Estácio Santo André"]
      }
    ],
    "Minas Gerais": [
      {
        id: "Venda Nova",
        name: "Estácio - Venda Nova",
        cards: ["Estácio Venda Nova"]
      },
      {
        id: "Rio Branco",
        name: "Estácio - Rio Branco",
        cards: ["Estácio Rio Branco"]
      },
      {
        id: "Prado",
        name: "Estácio - Prado",
        cards: ["Estácio Prado"]
      }
    ],
    "Ceará": [
      {
        id: "Juazeiro do Norte",
        name: "Estácio - Juazeiro do Norte",
        cards: ["Estácio Juazeiro do Norte"]
      },
      {
        id: "Via Corpvs",
        name: "Estácio - Via Corpvs",
        cards: ["Estácio Via Corpvs"]
      },
      {
        id: "Parangaba",
        name: "Estácio - Parangaba",
        cards: ["Estácio Parangaba"]
      }
    ]
  },
  idomed: {
    "Rio de Janeiro": [
      {
        id: "Città",
        name: "IDomed - Città",
        cards: ["IDomed Città"]
      },
      {
        id: "Vista Carioca",
        name: "IDomed - Vista Carioca",
        cards: ["IDomed Vista Carioca"]
      },
      {
        id: "Angra dos Reis",
        name: "IDomed - Angra dos Reis",
        cards: ["IDomed Angra dos Reis"]
      }
    ],
    "São Paulo": [
      {
        id: "Ribeirão Preto",
        name: "IDomed - Ribeirão Preto",
        cards: ["IDomed Ribeirão Preto"]
      }
    ]
  }
};

const processes = [
  {
    id: "1",
    title: "Biometria - CPD",
    description: "Fluxo completo do processo para cadastro de biometria em CPD.",
    type: "documentation" as const,
  },
  {
    id: "2",
    title: "Vlans",
    description: "Descrição de todas as Vlans da unidade.",
    type: "process" as const,
  },
  {
    id: "3",
    title: "O que é um Tier2 ?",
    description: "Documentação do que é Tier2, como funciona e para que serve.",
    type: "documentation" as const,
  },
  {
    id: "4",
    title: "IP de impressão",
    description: "Fluxo completo de todos os IP's de impressão por setor.",
    type: "process" as const,
  }
];

export default function UnitView() {
  const { groupId, state, unitId } = useParams();
  const navigate = useNavigate();

  // Encontra a unidade atual
  const currentUnit = unitsData[groupId as keyof typeof unitsData]?.[state || ""]?.find(
    unit => unit.id === unitId
  );

  return (
    <div className="p-6 flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            <button 
              onClick={() => navigate(-1)}
              className="text-2xl font-bold hover:text-blue-800"
            >
              {currentUnit?.name || "Unidade não encontrada"}
            </button>
          </h1>
          <Button onClick={() => navigate("new")}>
            <Plus className="h-4 w-4 mr-2" />
            Criar Processo
          </Button>
        </div>
        <div className="card-grid">
          {processes.map((process) => (
            <ProcessCard key={process.id} {...process} />
          ))}
        </div>
      </div>
      
      {/* Rodapé com texto em branco */}
      <div className="mt-auto pt-6">
        <p className="text-white text-sm text-right">
          Processos e documentações da unidade {currentUnit?.name} - {state}
        </p>
      </div>
    </div>
  );
}
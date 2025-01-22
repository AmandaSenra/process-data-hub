import { useParams, useNavigate } from "react-router-dom";
import { UnitCard } from "@/components/UnitCard";

interface Unit {
  id: string;
  name: string;
  cards: string[];
}

// Unidades do Ibmec (apenas RJ, SP, Brasília e BH)
const ibmecUnits: { [key: string]: Unit[] } = {
  "Rio de Janeiro": [
    {
      id: "Centro",
      name: "Centro",
      cards: ["Ibmec Centro"]
    },
    {
      id: "Barra",
      name: "Barra",
      cards: ["Ibmec Barra"]
    }
  ],
  "São Paulo": [
    {
      id: "Paulista",
      name: "Paulista",
      cards: ["Ibmec Paulista"]
    },
    {
      id: "Faria Lima",
      name: "Faria Lima",
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
};

// Unidades da Estácio (RJ, SP, MG e CE)
const estacioUnits: { [key: string]: Unit[] } = {
  "Rio de Janeiro": [
    {
      id: "Tom Jobim",
      name: "Tom Jobim",
      cards: ["Estácio Tom Jobim"]
    },
    {
      id: "Volta Redonda",
      name: "Volta Redonda",
      cards: ["Estácio Volta Redonda"]
    },
    {
      id: "Irajá",
      name: "Irajá",
      cards: ["Estácio Irajá"]
    }
  ],
  "São Paulo": [
    {
      id: "Liberdade",
      name: "Liberdade",
      cards: ["Estácio Liberdade"]
    },
    {
      id: "Santo Amaro",
      name: "Santo Amaro",
      cards: ["Estácio Santo Amaro"]
    },
    {
      id: "Santo André",
      name: "Santo André",
      cards: ["Estácio Santo André"]
    }
  ],
  "Minas Gerais": [
    {
      id: "Venda Nova",
      name: "Venda Nova",
      cards: ["Estácio Venda Nova"]
    },
    {
      id: "Rio Branco",
      name: "Rio Branco",
      cards: ["Estácio Rio Branco"]
    },
    {
      id: "Prado",
      name: "Prado",
      cards: ["Estácio Prado"]
    }
  ],
  "Ceará": [
    {
      id: "Juazeiro do Norte",
      name: "Juazeiro do Norte",
      cards: ["Estácio Juazeiro do Norte"]
    },
    {
      id: "Via Corpvs",
      name: "Via Corpvs",
      cards: ["Estácio Via Corpvs"]
    },
    {
      id: "Parangaba",
      name: "Parangaba",
      cards: ["Estácio Parangaba"]
    }
  ]
};

// Unidades do IDomed
const idomedUnits: { [key: string]: Unit[] } = {
  "Rio de Janeiro": [
    {
      id: "Città",
      name: "Città",
      cards: ["IDomed Città"]
    },
    {
      id: "Vista Carioca",
      name: "Vista Carioca",
      cards: ["IDomed Vista Carioca"]
    },
    {
      id: "Angra dos Reis",
      name: "Angra dos Reis",
      cards: ["IDomed Angra dos Reis"]
    }
  ],
  "São Paulo": [
    {
      id: "Ribeirão Preto",
      name: "Ribeirão Preto",
      cards: ["IDomed Ribeirão Preto"]
    }
  ]
};

// Lista de estados por instituição
const statesByGroup = {
  ibmec: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
  estacio: ["Rio de Janeiro", "São Paulo", "Minas Gerais", "Ceará"],
  idomed: ["Rio de Janeiro", "São Paulo"]
};

export default function StateView() {
  const { groupId, state } = useParams();
  const navigate = useNavigate();

  const getGroupName = () => {
    switch(groupId) {
      case "ibmec":
        return "Ibmec";
      case "estacio":
        return "Estácio";
      case "idomed":
        return "IDomed";
      default:
        return "";
    }
  };

  const getUnitsData = () => {
    if (groupId === "ibmec") return ibmecUnits;
    if (groupId === "estacio") return estacioUnits;
    if (groupId === "idomed") return idomedUnits;
    return {};
  };

  // Verifica se o estado pertence à instituição atual
  const isValidState = state && statesByGroup[groupId as keyof typeof statesByGroup]?.includes(state);
  const units = isValidState ? getUnitsData()[state] || [] : [];

  return (
    <div className="p-6 flex flex-col min-h-screen">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="text-2xl font-bold hover:text-blue-800"
          >
            {state}
          </button>
        </h1>
        <div className="card-grid">
          {units.map((unit) => (
            <UnitCard
              key={unit.id}
              name={unit.name}
              onClick={() => navigate(`/group/${groupId}/state/${state}/unit/${unit.id}`)}
            />
          ))}
        </div>
      </div>
      
      {/* Rodapé com texto em branco */}
      <div className="mt-auto pt-6">
        <p className="text-white text-sm text-right">
          Unidades {getGroupName()} - {state}
        </p>
      </div>
    </div>
  );
}
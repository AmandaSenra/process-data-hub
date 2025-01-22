// Update this page (the content is just a fallback if you fail to update the page)

import { useNavigate, useParams } from "react-router-dom";
import { UnitCard } from "@/components/UnitCard";

interface Unit {
  id: string;
  name: string;
  cards: string[];
}

// Lista de estados por instituição
const statesByGroup = {
  ibmec: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
  estacio: ["Rio de Janeiro", "São Paulo", "Minas Gerais", "Ceará"],
  idomed: ["Rio de Janeiro", "São Paulo"]
};

// Dados das unidades do Idomed
const idomedUnits: { [key: string]: Unit[] } = {
  "Rio de Janeiro": [
    {
      id: "Città",
      name: "Città",
      cards: ["Idomed Città"]
    },
    {
      id: "Vista Carioca",
      name: "Vista Carioca",
      cards: ["Idomed Vista Carioca"]
    },
    {
      id: "Angra dos Reis",
      name: "Angra dos Reis",
      cards: ["Idomed Angra dos Reis"]
    }
  ],
  "São Paulo": [
    {
      id: "Ribeirão Preto",
      name: "Ribeirão Preto",
      cards: ["Idomed Ribeirão Preto"]
    }
  ]
};

export default function Index() {
  const navigate = useNavigate();
  const { groupId } = useParams();

  // Se não houver groupId, mostra a página inicial com a imagem
  if (!groupId) {
    return (
      <div className="flex items-center justify-center flex-1 h-full">
        <div className="flex items-center justify-center w-full max-w-4xl px-4">
          <img 
            src="/yduqs.png" 
            alt="YDUQS" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    );
  }

  const getGroupStates = () => {
    switch(groupId) {
      case "ibmec":
        return statesByGroup.ibmec;
      case "estacio":
        return statesByGroup.estacio;
      case "idomed":
        return statesByGroup.idomed;
      default:
        return [];
    }
  };

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

  const currentStates = getGroupStates();

  return (
    <div className="p-6 flex flex-col min-h-screen">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">
          {getGroupName()}
        </h1>
        <div className="card-grid">
          {currentStates.map((state) => (
            <UnitCard
              key={state}
              name={state}
              onClick={() => navigate(`/group/${groupId}/state/${state}`)}
            />
          ))}
        </div>
      </div>
      
      {/* Rodapé com texto em branco */}
      <div className="mt-auto pt-6">
        <p className="text-white text-sm text-right">
          Unidades {getGroupName()}
        </p>
      </div>
    </div>
  );
}

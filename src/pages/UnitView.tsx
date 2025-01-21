import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProcessCard } from "@/components/ProcessCard";
import { Plus } from "lucide-react";

const processes = [
  {
    id: "1",
    title: "Processo de Matrícula",
    description: "Fluxo completo do processo de matrícula de alunos",
    type: "process" as const,
  },
  {
    id: "2",
    title: "Documentação de Rematrícula",
    description: "Documentação detalhada do processo de rematrícula",
    type: "documentation" as const,
  },
  {
    id: "3",
    title: "Processo de Transferência",
    description: "Fluxo para transferência entre unidades ou cursos",
    type: "process" as const,
  },
  {
    id: "4",
    title: "Manual do Professor",
    description: "Documentação completa dos processos acadêmicos para professores",
    type: "documentation" as const,
  }
];

export default function UnitView() {
  const { unit } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{unit}</h1>
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
  );
}
import { Building } from "lucide-react";

interface UnitCardProps {
  name: string;
  onClick: () => void;
}

export function UnitCard({ name, onClick }: UnitCardProps) {
  return (
    <div className="process-card cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-2 mb-2">
        <Building className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-sm text-muted-foreground">Clique para ver os processos</p>
    </div>
  );
}
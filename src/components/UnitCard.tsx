import { Building } from "lucide-react";

interface UnitCardProps {
  name: string;
  onClick: () => void;
  className?: string;
}

export function UnitCard({ name, onClick, className }: UnitCardProps) {
  return (
    <div 
      className={`p-4 bg-white rounded-lg shadow cursor-pointer ${className || ''}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 mb-2">
        <Building className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-black">{name}</h3>
      </div>
      <p className="text-sm text-black">Clique para ver os processos</p>
    </div>
  );
}
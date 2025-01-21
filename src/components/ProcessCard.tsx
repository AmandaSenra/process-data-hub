import { FileText, Database } from "lucide-react";

interface ProcessCardProps {
  title: string;
  description: string;
  type: "process" | "documentation";
}

export function ProcessCard({ title, description, type }: ProcessCardProps) {
  return (
    <div className="process-card">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`tag ${type === "process" ? "tag-process" : "tag-documentation"}`}>
          {type === "process" ? (
            <Database className="h-3 w-3 mr-1" />
          ) : (
            <FileText className="h-3 w-3 mr-1" />
          )}
          {type === "process" ? "Processo" : "Documentação"}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
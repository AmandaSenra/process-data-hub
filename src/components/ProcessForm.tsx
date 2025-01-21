import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export function ProcessForm() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [type, setType] = useState<"process" | "documentation">("process");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sucesso!",
      description: "Processo criado com sucesso.",
    });
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input id="title" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea id="description" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Texto</Label>
        <Textarea id="content" className="min-h-[200px]" required />
      </div>

      <div className="space-y-2">
        <Label>Tipo</Label>
        <RadioGroup defaultValue={type} onValueChange={(v) => setType(v as "process" | "documentation")}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="process" id="process" />
            <Label htmlFor="process">Dados de Processo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="documentation" id="documentation" />
            <Label htmlFor="documentation">Documentação de Processo</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Imagem</Label>
        <Input id="image" type="file" accept="image/*" />
      </div>

      <Button type="submit" className="w-full">Criar</Button>
    </form>
  );
}
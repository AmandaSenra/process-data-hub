import { useState, FormEvent } from "react";
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
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Convert image to base64 if it exists
    let imageBase64 = null;
    if (formData.image) {
      const reader = new FileReader();
      imageBase64 = await new Promise((resolve) => {
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(formData.image);
      });
    }

    // Create new process/documentation object
    const newProcess = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      content: formData.content,
      type,
      image: imageBase64
    };

    // Save to localStorage
    const existingProcesses = JSON.parse(localStorage.getItem('processes') || '[]');
    const updatedProcesses = [...existingProcesses, newProcess];
    localStorage.setItem('processes', JSON.stringify(updatedProcesses));

    toast({
      title: "Sucesso!",
      description: "Processo criado com sucesso.",
    });
    
    // Navigate to the new process view
    navigate(`/process/${newProcess.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6 text-black">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-white">Título</Label>
        <Input 
          id="title" 
          required
          value={formData.title}
          onChange={handleInputChange}
          className="text-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">Descrição</Label>
        <Textarea 
          id="description" 
          required 
          className="text-white"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content" className="text-white">Texto</Label>
        <Textarea 
          id="content" 
          className="min-h-[200px] text-white" 
          required
          value={formData.content}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-white">Tipo</Label>
        <RadioGroup defaultValue={type} onValueChange={(v) => setType(v as "process" | "documentation")}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="process" id="process" />
            <Label htmlFor="process" className="text-white">Dados de Processo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="documentation" id="documentation" />
            <Label htmlFor="documentation" className="text-white">Documentação de Processo</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image" className="text-white">Imagem</Label>
        <Input 
          id="image" 
          type="file" 
          accept="image/*" 
          className="text-black"
          onChange={handleFileChange}
        />
      </div>

      <Button type="submit" className="w-full">Criar</Button>
    </form>
  );
}
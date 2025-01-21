import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StateCard } from "@/components/StateCard";

const states = [
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais",
  "Bahia",
  "Ceará",
  "Pernambuco"
];

export default function GroupView() {
  const { groupId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {groupId === "ibmec" && "Ibmec"}
        {groupId === "estacio" && "Estácio"}
        {groupId === "idomed" && "IDomed"}
      </h1>
      <div className="card-grid">
        {states.map((state) => (
          <StateCard
            key={state}
            name={state}
            onClick={() => navigate(`/group/${groupId}/state/${state}`)}
          />
        ))}
      </div>
    </div>
  );
}
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StateCard } from "@/components/StateCard";

const states = [
  "Rio de Janeiro",
  "São Paulo",
  "Belo Horizonte",
  "Brasília"
];

export default function GroupView() {
  const { groupId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="text-2xl font-bold hover:text-blue-800"
        >
          {groupId === "ibmec" && "Ibmec"}
          {groupId === "estacio" && "Estácio"}
          {groupId === "idomed" && "IDomed"}
        </button>
      </h1>
      <div className="card-grid">
        {states.map((state) => (
          <div key={state} className="text-black">
            <StateCard
              name={state}
              onClick={() => navigate(`/group/${groupId}/state/${state}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
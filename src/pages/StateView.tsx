import { useParams, useNavigate } from "react-router-dom";
import { UnitCard } from "@/components/UnitCard";

const getUnits = (state: string) => [
  `${state} - Unidade 1`,
  `${state} - Unidade 2`,
  `${state} - Unidade 3`,
];

export default function StateView() {
  const { groupId, state } = useParams();
  const navigate = useNavigate();
  const units = getUnits(state || "");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{state}</h1>
      <div className="card-grid">
        {units.map((unit) => (
          <UnitCard
            key={unit}
            name={unit}
            onClick={() => navigate(`/group/${groupId}/state/${state}/unit/${unit}`)}
          />
        ))}
      </div>
    </div>
  );
}
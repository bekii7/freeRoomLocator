import { FC } from "react";

interface BuildingCardProps {
  name: string;
  department: string;
  rooms: number;
  selected?: boolean;
  onClick: () => void;
}

const BuildingCard: FC<BuildingCardProps> = ({ name, department, rooms, selected, onClick }) => (
  <div
    onClick={onClick}
    className={`p-4 border rounded-xl cursor-pointer hover:shadow-lg transition ${
      selected ? "border-blue-600 bg-blue-50" : "border-gray-200"
    }`}
  >
    <div className="flex items-center gap-2">
      <div className="bg-blue-100 p-2 rounded-full">
        <i className="fas fa-building"></i>
      </div>
      <div>
        <p className="font-bold">Block {name}</p>
        <p className="text-sm text-gray-500">{department}</p>
        <p className="text-xs text-blue-500">{rooms} rooms</p>
      </div>
    </div>
  </div>
);

export default BuildingCard;
import { FC } from "react";

interface RoomCardProps {
  name: string;
  capacity: number;
  features: string[];
  onReserve: () => void;
}

const RoomCard: FC<RoomCardProps> = ({ name, capacity, features, onReserve }) => (
  <div className="border p-4 rounded-xl shadow-sm w-full md:w-1/3">
    <div className="flex justify-between mb-2">
      <p className="font-semibold">Room {name}</p>
      <span className="text-green-500">Available</span>
    </div>
    <p className="text-sm text-gray-500 mb-1">Capacity: {capacity} people</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {features.map((f, i) => (
        <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">
          {f}
        </span>
      ))}
    </div>
    <button onClick={onReserve} className="bg-blue-600 text-white w-full py-1 rounded">
      Reserve
    </button>
  </div>
);

export default RoomCard;

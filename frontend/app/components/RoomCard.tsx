import { motion } from "framer-motion";
import { RoomCardProps } from "../libs/interface";





export default function RoomCard({ room }: RoomCardProps) {
  const isAvailable = room.status === "available";
  return (
    <motion.div
      key={room.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl shadow-md p-4 border-2 ${isAvailable ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-lg">{room.name}</span>
        <span className={`text-sm px-3 py-1 rounded-full text-white ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}>
          {isAvailable ? 'Available' : 'Used'}
        </span>
      </div>
    </motion.div>
  );
}

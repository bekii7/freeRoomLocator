
import { FC } from "react";
import ChooseTime from "./ChooseTime";



const RoomFilter: FC = () => (
  <div>
    <ChooseTime />
  <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
    
    <select className="border px-4 py-2 rounded">
    <option>Any Features</option>
    <option>Projector</option>
    <option>Whiteboard</option>
    <option>Smart Board</option>
  </select>
    <select className="border px-4 py-2 rounded">
    <option>Any Capacity</option>
    <option>up to 30</option>
    <option>up to 50</option>
    <option>up to 100</option>
  </select>
    </div>
   
  </div>
);

export default RoomFilter;

import { FC } from "react";
import TimeSlotDropdown from "./TimeSlotDropdown";
import FeatureDropdown from "./FeatureDropdown";
import CapacityDropdown from "./CapacityDropdown";
import { div } from "framer-motion/client";

interface Props {
  onFilter: () => void;
}

const RoomFilter: FC<Props> = ({ onFilter }) => (
  <div>
  <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
    <TimeSlotDropdown />
    <FeatureDropdown />
    <CapacityDropdown />
    </div>
    <button
      onClick={onFilter}
      className="bg-sky-900 text-white px-4 py-2 rounded w-full "
    >
      Find Available Rooms
    </button>
  </div>
);

export default RoomFilter;
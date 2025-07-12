import { FC } from "react";
import { IconType } from 'react-icons';
interface BuildingCardProps {
  name: string;
  department: string;
  rooms: number;
  selected?: boolean;
  onClick: () => void;
  //icon: IconType;
}
import {
  FaUserTie as Nursing,       // For Block B - Nursing Department (or a more suitable icon)
  FaChartLine as Economics,      // For Block C - Economics Department
  FaBriefcase as Accounting,      // For Block D - Accounting Department
  FaFlask as Science,          // For Block E - Science Faculty
  FaCog as Engineering,            // For Block F - Engineering
  FaLaptopCode as ComputerLab,     // For Block G - Computer Lab
  FaBuilding as Management,       // For Block H - Management Department (or FaBriefcase again)
  FaArchway as Architecture,        // For Block I - Architecture
  FaUniversity as LectureHalls   // For Block J - Lecture Halls
} from 'react-icons/fa'
const BuildingCard: FC<BuildingCardProps> = ({ name, department, rooms, selected, onClick/* ,icon:Iconcomponent  */}) => (
  <div
    onClick={onClick}
    className={`p-4 border rounded-xl cursor-pointer hover:shadow-lg transition ${
      selected ? "border-blue-600 bg-blue-50" : "border-gray-200"
    }`}
  >
    <div className="flex items-center gap-2">
      <div className="bg-blue-100 p-2 rounded-full">
      <Nursing size={30} className="text-gray-600" />
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
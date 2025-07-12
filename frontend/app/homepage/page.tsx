"use client"
import BuildingCard from "../components/BuildingCards";
import RoomCard from "../components/RoomCard";
import RoomFilter from "../components/RoomFilter";
import RoomTabs from "../components/RoomTabs";
import { useState } from "react";
import Link from "next/link";
import {getRooms} from "../api/auth";
import { IoMdTime } from "react-icons/io";
import { IconType } from "react-icons";

interface BuildingCardProps {
  name: string; // e.g., "B", "C", "D"
  department: string; // e.g., "Nursing Department", "Economics Department"
  rooms: number;
  selected: boolean;
  onClick: () => void;
  //icon: IconType; // This is the crucial change: 'icon' prop will be of type IconType
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
import LiveClock from "../components/LiveClock";
export default function Home() {
  const buildings = [
    { name: "B", department: "Nursing Department", rooms: 8 ,icon: "Nursing"},
    { name: "C", department: "Economics Department", rooms: 6, icon: "Economics"},
    { name: "D", department: "Accounting Department", rooms: 5, icon: "Accounting"},
    { name: "J", department: "Lecture Halls", rooms: 25 , icon: "LectureHalls"},
  ];
  const [selected, setSelected] = useState("Any");
const [isLoggedIn, setIsLoggedIn] = useState(false); 
const [showTabs, setShowTabs] = useState(false); // State to control tab visibility
  //console.log("Selected building:", getRooms());
  const handleAuthToggle = () => {
    setIsLoggedIn(prev => !prev);
  };
  const handleFindRooms = () => {
    console.log("Finding rooms...");
    setShowTabs(true); // Show tabs when finding rooms
    // Implement the logic to find available rooms based on selected building and filters
  };
  return (
    <div className={`p-2 bg-amber-50 text-black ${ showTabs ? `h-max` : `h-screen`}`}>
      <div className="w-full bg-indigo-600 text-amber-50 flex justify-between p-4 rounded-tl-2xl rounded-tr-2xl">
        <div className="">
          <h1>Unity Univerity</h1>
          <p className="text-3xl">Free room locator </p>
        </div>
        <div>
          <button
      className="
        px-8 py-4
        bg-white
        text-indigo-600
        font-semibold
        text-lg
        rounded-xl
        shadow-lg
        hover:bg-indigo-500
        hover:text-white
        hover:shadow-xl
        active:bg-gray-200
        active:scale-95
        transition-all
        duration-200
        ease-in-out
        transform
        focus:outline-none
        focus:ring-4
        focus:ring-indigo-300
        cursor-pointer
        flex items-center justify-center
        gap-2
      "
      aria-label="View reserved rooms"
      onClick={() => {
        window.location.href = "/reserves"; // Redirect to the reserved rooms page
      }}
    >
      Reserved Rooms
    </button>
        </div>
        <div>
        <LiveClock />
        <div className="space-x-4">
        {/* {isLoggedIn ? (
          <>
            <Link href="/profile">
              <button className="bg-white text-purple-700 px-4 py-2 rounded">Profile</button>
            </Link>
            <button
              onClick={handleAuthToggle}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleAuthToggle}
            className="bg-white text-purple-700 px-4 py-2 rounded"
          >
            Login
          </button>
        )} */}
      </div>
        </div>

      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Select Building</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <div
    onClick={() => setSelected("Any")}
    className={`p-4 border rounded-xl cursor-pointer hover:shadow-lg transition ${
      selected==="Any" ? "border-blue-600 bg-blue-50" : "border-gray-200"
    }`}
  >
    <div className="flex items-center gap-2">
      <div className="bg-blue-100 p-2 rounded-full">
      <Nursing size={30} className="text-gray-600" />
      </div>
      <p className="font-bold ">ANY</p>
    </div>
  </div>
          {buildings.map((b) => (
            <BuildingCard
              key={b.name}
              name={b.name}
              department={b.department}
              rooms={b.rooms}
              selected={selected === b.name}
              //icon={b.icon}
              onClick={() => setSelected(b.name)}
            />
          ))}
        </div>
      </div>

      <RoomFilter /* onFilter={() => console.log("Filtering...")} */ />
       <button
      /* onClick={onFilter} */
      className="bg-indigo-600 text-white px-4 py-2 rounded w-full cursor-pointer"
      onClick={handleFindRooms}
      >
      Find Available Rooms
    </button>
    {showTabs && <RoomTabs />}

      
    </div>
  );
}

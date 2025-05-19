"use client"
import BuildingCard from "../components/BuildingCards";
import RoomCard from "../components/RoomCard";
import RoomFilter from "../components/RoomFilter";
import RoomTabs from "../components/RoomTabs";
import { useState } from "react";

export default function Home() {
  const buildings = [
    { name: "B", department: "Nursing Department", rooms: 8 },
    { name: "C", department: "Economics Department", rooms: 6 },
    { name: "J", department: "Lecture Halls", rooms: 25 },
  ];

  const [selected, setSelected] = useState("J");

  return (
    <div className="p-6 bg-amber-50 text-black">
      <div className="w-full bg-sky-800 text-amber-50 flex justify-between p-4 rounded-tl-2xl rounded-tr-2xl">
        <div className="">
          <h1>Unity Univerity</h1>
          <p>Free room locator </p>
        </div>
        <div>

        <p className="text-sm ">9:20</p>
        
        </div>

      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Select Building</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {buildings.map((b) => (
            <BuildingCard
              key={b.name}
              name={b.name}
              department={b.department}
              rooms={b.rooms}
              selected={selected === b.name}
              onClick={() => setSelected(b.name)}
            />
          ))}
        </div>
      </div>

      <RoomFilter onFilter={() => console.log("Filtering...")} />

      <RoomTabs />

      <div className="flex flex-wrap gap-4">
        <RoomCard
          name="J7"
          capacity={100}
          features={["Projector", "Audio System", "Smart Board"]}
          onReserve={() => alert("Reserved J7")}
        />
        <RoomCard
          name="J8"
          capacity={35}
          features={["Whiteboard"]}
          onReserve={() => alert("Reserved J8")}
        />
        <RoomCard
          name="J9"
          capacity={45}
          features={["Projector", "Whiteboard"]}
          onReserve={() => alert("Reserved J9")}
        />
      </div>
    </div>
  );
}

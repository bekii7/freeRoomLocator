"use client";
import React, { useEffect, useState } from "react";
import RoomCard from "@/app/components/RoomCard";
import { mockRooms,Room } from "./libs/interface";


export default function Home() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    setRooms(mockRooms);
  }, []);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">University Room Locator</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Available Rooms</h2>
        <hr className="mb-4 border-gray-300" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.filter(room => room.status === "available").map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Used Rooms</h2>
        <hr className="mb-4 border-gray-300" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.filter(room => room.status === "used").map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </main>
  );
}

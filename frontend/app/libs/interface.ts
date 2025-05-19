export const mockRooms: Room[] = [
  { id: 1, name: "Room A101", status: "available" },
  { id: 2, name: "Room B203", status: "used" },
  { id: 3, name: "Room C305", status: "available" },
  { id: 4, name: "Room D104", status: "used" },
  { id: 5, name: "Room E210", status: "available" },
];

export type Room = {
  id: number;
  name: string;
  status: "available" | "used";
};

export type RoomCardProps = {
  room: Room;
};
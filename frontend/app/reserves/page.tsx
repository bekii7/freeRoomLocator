"use client";

import React, { useState } from 'react';
import CancelReservation from '../components/CancelReservation';

// Define a type for a single room reservation
interface RoomReservation {
  id: string;
  course: string; // e.g., "CS101 Introduction to Programming"
  department: string;
  section: string; // Added section field, e.g., "Section 2"
  time: string; // e.g., "10:00 AM - 11:30 AM"
  room: string;
  date: string; // e.g., "Monday, July 14, 2025"
  teacher: string; // Kept for data integrity, but not displayed
}

// Made-up data for reserved rooms
const mockReservedRooms: RoomReservation[] = [
  {
    id: 'res002',
    course: 'MATH205 Calculus II',
    department: 'Mathematics',
    section: 'Section A', // Added section
    time: '02:00 PM - 03:30 PM',
    room: 'Main Building, Room 305',
    date: 'Monday, July 14, 2025',
    teacher: 'Prof. Bob Johnson',
  },
  {
    id: 'res003',
    course: 'HIST102 World Civilizations II',
    department: 'History',
    section: 'Section 3', // Added section
    time: '09:00 AM - 10:30 AM',
    room: 'Humanities Wing, Room 402',
    date: 'Tuesday, July 15, 2025',
    teacher: 'Dr. Alice Smith',
  },
  {
    id: 'res004',
    course: 'PHYS101 General Physics',
    department: 'Physics',
    section: 'Section B', // Added section
    time: '01:30 PM - 03:00 PM',
    room: 'Science Hall, Room 401',
    date: 'Tuesday, July 15, 2025',
    teacher: 'Prof. Carol White',
  },
  {
    id: 'res006',
    course: 'CHEM101 General Chemistry',
    department: 'Chemistry',
    section: 'Section C', // Added section
    time: '08:00 AM - 09:30 AM',
    room: 'Science Block, Room 101',
    date: 'Wednesday, July 16, 2025',
    teacher: 'Prof. Bob Johnson',
  },
];

const ReservedRoomsPage = () => {
  // State to control the visibility of the cancellation dialog
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  // State to store the reservation currently selected for cancellation
  const [selectedReservation, setSelectedReservation] = useState<RoomReservation | null>(null);

  // Function to open the cancellation dialog
  const handleOpenCancelDialog = (reservation: RoomReservation) => {
    setSelectedReservation(reservation);
    setShowCancelDialog(true);
  };

  // Function to close the cancellation dialog
  const handleCloseCancelDialog = () => {
    setShowCancelDialog(false);
    setSelectedReservation(null);
  };

  // Function to handle the "Confirm Cancel" action (mock)
  

  return (
    <div className=" w-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8 font-inter">
      <div className="h-screen mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Reserved Rooms
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl">
            View all current room reservations
          </p>
        </header>

        <main className="p-6 sm:p-8">
          {mockReservedRooms.length === 0 ? (
            <div className="text-center py-10 text-gray-600 text-lg">
              No rooms currently reserved.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockReservedRooms.map((reservation) => (
                <div
                  key={reservation.id}
                  className="bg-white border border-blue-200 rounded-lg shadow-lg p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                  onClick={() => handleOpenCancelDialog(reservation)} // Added onClick handler
                >
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {reservation.course} <span className="text-blue-600">({reservation.section})</span> {/* Display course with section */}
                  </h3>
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-semibold">Department:</span> {reservation.department}
                  </p>
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-semibold">Date:</span> {reservation.date}
                  </p>
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-semibold">Time:</span> {reservation.time}
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Room:</span> {reservation.room}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>

        <footer className="bg-blue-600 p-4 text-white text-center text-sm bottom-0">
          <p>&copy; 2025 University Room Locator. All rights reserved.</p>
        </footer>
      </div>

      {/* Cancellation Dialog */}
      {showCancelDialog && selectedReservation && (
        <CancelReservation
          selectedReservation={selectedReservation}
          handleCloseCancelDialog={handleCloseCancelDialog}
          
        />
      )}
    </div>
  );
};

export default ReservedRoomsPage;

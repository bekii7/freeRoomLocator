import React from 'react'

type Reservation = {
  course: string;
  section: string;
  room: string;
  date: string;
  time: string;
};

type CancelReservationProps = {
  selectedReservation: Reservation;
  handleCloseCancelDialog: () => void;
};

const CancelReservation: React.FC<CancelReservationProps> = ({ selectedReservation, handleCloseCancelDialog }) => {
  const handleConfirmCancel = () => {
    if (selectedReservation) {
      console.log(`Mock: Cancelling reservation for ${selectedReservation.course} (${selectedReservation.section}) at ${selectedReservation.room} on ${selectedReservation.date}`);
      // In a real application, you would send a request to your backend here
      // to actually cancel the reservation and then update your local state
      // (e.g., remove the item from mockReservedRooms or refetch data).
    }
    handleCloseCancelDialog(); // Close the dialog after action
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md transform transition-all duration-300 scale-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Confirm Cancellation</h3>
        <p className="text-gray-700 mb-6">
          Are you sure you want to cancel the reservation for:
          <br />
          <span className="font-semibold">{selectedReservation.course} ({selectedReservation.section})</span>
          <br />
          on <span className="font-semibold">{selectedReservation.date}</span>
          <br />
          at <span className="font-semibold">{selectedReservation.time}</span> in <span className="font-semibold">{selectedReservation.room}</span>?
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleCloseCancelDialog}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Keep Reservation
          </button>
          <button
            onClick={handleConfirmCancel}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
          >
            Confirm Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CancelReservation
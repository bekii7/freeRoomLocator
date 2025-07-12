"use client"; // This directive is important for Next.js to treat this as a client component

import React, { useState, useEffect } from 'react';
// Removed 'moment' import as it was causing a resolution error.
// We will use native Date methods for time formatting.

const LiveClock = () => {
  // State to hold the current time, initialized with the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second (1000 milliseconds)
    const timerId = setInterval(() => {
      setCurrentTime(new Date()); // Update the state with the new current time
    }, 1000);

    // Cleanup function: This runs when the component unmounts
    // It's crucial to clear the interval to prevent memory leaks
    return () => {
      clearInterval(timerId);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-md">
      <p className="text-sm font-semibold text-blue-800 mb-1">
        Current Date: <span className="font-bold">
          {/* Using native Date.toLocaleDateString for formatting the date */}
          {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
      </p>
      <p className="text-sm font-semibold text-blue-800">
        Current Time: <span className="font-bold">
          {/* Using native Date.toLocaleTimeString for formatting the time */}
          {currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true })}
        </span>
      </p>
    </div>
  );
};

export default LiveClock;

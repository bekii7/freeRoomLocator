"use client"
import React, { useState } from 'react'
import {formatDateForDateInput,getCurrentAndNextHourTime} from '../utils/Time'

const ChooseTime = () => {
  
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedPeriods, setSelectedPeriods] = useState(1);
  const [timeOptions, setTimeOptions] = useState<string[]|undefined>(getCurrentAndNextHourTime(selectedPeriods, selectedDay) || []);
  const min = formatDateForDateInput(selectedDay)
  const handleTimeChange=(periods: number) => {
    console.log("Selected periods:", periods);
    setSelectedPeriods(periods);
    setTimeOptions(getCurrentAndNextHourTime(periods, selectedDay));
  }
  const handleDateChange = (date: Date) => {
    setSelectedDay(date);
    setTimeOptions(getCurrentAndNextHourTime(selectedPeriods, date));
  };
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Choose Time</h2>
      <div className='flex flex-col md:flex-row gap-4 mb-6'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='start-date' className='text-sm font-medium'>Select Date</label>
          <input
            type='date'
            id='start-date'
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            value={formatDateForDateInput(selectedDay)}
            min={formatDateForDateInput(new Date())}
            className='block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 rounded-lg shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition duration-300 ease-in-out text-gray-700'
          />
        </div>
        <div>
          <label htmlFor="time-period-select">select number of periods</label>
          <select
            id="time-period-select"
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-lg shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition duration-300 ease-in-out"
            onChange={(e) => handleTimeChange(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
        <div>
          <label htmlFor="time-period-select">Select Time</label>
          <select
            id="time-period-select"
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-lg shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition duration-300 ease-in-out"
          >
             {timeOptions && timeOptions.length > 0 ? (
          timeOptions.map((timeRange, index) => (
            <option key={index} value={timeRange}>
              {timeRange}
            </option>
          ))
        ) : (
          <option value="">No available times</option> // Fallback if no times are generated
        )}
            
          </select>
        </div>
      </div>
    </div>
  )
}

export default ChooseTime

import React from 'react';
import { format, addDays, startOfWeek } from 'date-fns';

interface Shift {
  id: string;
  employeeId: string;
  employeeName: string;
  start: string;
  end: string;
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const DAYS = Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(new Date()), i));

export function WeeklySchedule() {
  // Mock data - replace with real data later
  const shifts: Shift[] = [
    {
      id: '1',
      employeeId: '1',
      employeeName: 'John Doe',
      start: '2024-03-18T09:00:00',
      end: '2024-03-18T17:00:00',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-8 border-b">
          <div className="p-4 font-medium text-gray-500">Time</div>
          {DAYS.map((day) => (
            <div key={day.toString()} className="p-4 font-medium text-gray-800">
              {format(day, 'EEE MM/dd')}
            </div>
          ))}
        </div>

        {/* Time grid */}
        <div className="relative">
          {HOURS.map((hour) => (
            <div key={hour} className="grid grid-cols-8 border-b">
              <div className="p-2 text-sm text-gray-500">
                {format(new Date().setHours(hour, 0), 'ha')}
              </div>
              {DAYS.map((day) => (
                <div
                  key={`${day}-${hour}`}
                  className="p-2 border-l min-h-[3rem] relative"
                >
                  {/* Render shifts here */}
                </div>
              ))}
            </div>
          ))}

          {/* Shifts overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {shifts.map((shift) => (
              <div
                key={shift.id}
                className="absolute bg-blue-100 border border-blue-300 rounded p-2 text-sm"
                style={{
                  // Position and size would be calculated based on shift times
                  left: '12.5%',
                  top: '37.5%',
                  width: '12.5%',
                  height: '33.33%',
                }}
              >
                {shift.employeeName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
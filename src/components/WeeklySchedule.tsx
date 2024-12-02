import React from 'react';
import { formatTime, getWeekDays, calculateShiftPosition, format } from '../utils/dataUtils';
import { Shift } from '../types/schedule';

interface WeeklyScheduleProps {
  scheduleData: Shift[];
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const DAYS = getWeekDays();

export function WeeklySchedule({ scheduleData }: WeeklyScheduleProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-x-auto mt-6">
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
                {formatTime(new Date().setHours(hour, 0))}
              </div>
              {DAYS.map((day) => (
                <div
                  key={`${day}-${hour}`}
                  className="p-2 border-l min-h-[3rem] relative hover:bg-gray-50"
                />
              ))}
            </div>
          ))}

          {/* Shifts overlay */}
          <div className="absolute inset-0">
            {scheduleData.map((shift) => {
              const position = calculateShiftPosition(shift);
              return (
                <div
                  key={shift.id}
                  className="absolute bg-blue-100 border border-blue-300 rounded p-2 text-sm cursor-pointer hover:bg-blue-200 transition-colors"
                  style={position}
                >
                  <div className="font-medium">{shift.employeeName}</div>
                  <div className="text-xs text-gray-600">
                    {formatTime(shift.start)} - {formatTime(shift.end)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

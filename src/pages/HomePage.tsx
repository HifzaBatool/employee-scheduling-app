import React, { useState } from 'react';
import { ScheduleCalendar } from '../components/ScheduleCalendar';
import { ChatInterface } from '../components/ChatInterface';
import { WeeklySchedule } from '../components/WeeklySchedule';
import { LoadingSpinner } from '../components/loadingSpinner';
import { MessageCircle } from 'lucide-react';
import { useSchedule } from '../components/hooks/useSchedule';

export function HomePage() {
  const [showChat, setShowChat] = useState(false);
  const { scheduleData, loading, error } = useSchedule();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Employee Schedule</h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => setShowChat(!showChat)}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50 border border-blue-600 flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat Assistant
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Generate AI Schedule
          </button>
        </div>
      </div>

      {loading && <LoadingSpinner />}
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          Error: {error}
        </div>
      )}

      {scheduleData && (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4">
            <ScheduleCalendar />
          </div>
          <div className="lg:flex-1">
            <WeeklySchedule scheduleData={scheduleData} />
          </div>
          {showChat && (
            <div className="lg:w-[400px]">
              <ChatInterface />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
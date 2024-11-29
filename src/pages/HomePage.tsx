import React, { useState } from 'react';
import { ScheduleCalendar } from '../components/ScheduleCalendar';
import { ChatInterface } from '../components/ChatInterface';
import { WeeklySchedule } from '../components/WeeklySchedule';
import { MessageCircle } from 'lucide-react';

export function HomePage() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <ScheduleCalendar />
          <WeeklySchedule />
        </div>
        {showChat && (
          <div className="lg:fixed lg:right-8 lg:top-24 lg:w-[400px]">
            <ChatInterface />
          </div>
        )}
      </div>
    </div>
  );
}
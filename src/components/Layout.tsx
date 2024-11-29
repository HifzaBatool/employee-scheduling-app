import React from 'react';
import { Calendar, Users, Settings } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-4">
            <h1 className="text-xl font-bold text-gray-800">AI Scheduler</h1>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Calendar className="w-5 h-5 mr-3" />
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/employees" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Users className="w-5 h-5 mr-3" />
                  Employees
                </Link>
              </li>
              <li>
                <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <Outlet />
      </div>
    </div>
  );
}
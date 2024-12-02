import { useState, useEffect } from 'react';
import { mockScheduleData } from '../data/mockData';

export function useSchedule() {
  const [scheduleData, setScheduleData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setScheduleData(mockScheduleData.shifts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load schedule');
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  return { scheduleData, loading, error };
}
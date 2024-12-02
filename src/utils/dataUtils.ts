import { addDays, startOfWeek, format, parseISO } from 'date-fns';
import { Shift } from '../types/schedule';

export const getWeekDays = (date: Date = new Date()): Date[] => {
  return Array.from({ length: 7 }, (_, i) => 
    addDays(startOfWeek(date, { weekStartsOn: 1 }), i)
  );
};

export const formatTime = (dateInput: string | number | Date): string => {
  const dateObj = typeof dateInput === 'string' 
    ? parseISO(dateInput)
    : new Date(dateInput);
  return format(dateObj, 'ha');
};

interface ShiftPosition {
  left: string;
  top: string;
  width: string;
  height: string;
}


export const calculateShiftPosition = (shift: Shift): ShiftPosition => {
  const startDate = parseISO(shift.start);
  const endDate = parseISO(shift.end);
  
  const dayIndex = startDate.getDay();
  const startHour = startDate.getHours() + startDate.getMinutes() / 60;
  const endHour = endDate.getHours() + endDate.getMinutes() / 60;
  
  const top = (startHour / 24) * 100;
  const height = ((endHour - startHour) / 24) * 100;
  
  return {
    left: `${(dayIndex / 7) * 100}%`,
    top: `${top}%`,
    width: `${100 / 7}%`,
    height: `${height}%`,
  };
};

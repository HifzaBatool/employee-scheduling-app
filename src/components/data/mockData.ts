import { Employee, Shift } from '../../types/schedule';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Developer',
    skills: ['JavaScript', 'React', 'Node.js'],
    availability: {
      'Monday': [{ start: '09:00', end: '17:00' }],
      'Tuesday': [{ start: '09:00', end: '17:00' }],
      'Wednesday': [{ start: '09:00', end: '17:00' }],
      'Thursday': [{ start: '09:00', end: '17:00' }],
      'Friday': [{ start: '09:00', end: '17:00' }],
    }
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Designer',
    skills: ['UI/UX', 'Figma', 'Adobe XD'],
    availability: {
      'Monday': [{ start: '10:00', end: '18:00' }],
      'Tuesday': [{ start: '10:00', end: '18:00' }],
      'Wednesday': [{ start: '10:00', end: '18:00' }],
      'Thursday': [{ start: '10:00', end: '18:00' }],
      'Friday': [{ start: '10:00', end: '18:00' }],
    }
  }
];

export const mockScheduleData: { shifts: Shift[] } = {
  shifts: [
    {
      id: '1',
      employeeId: '1',
      employeeName: 'John Doe',
      start: '2024-03-18T09:00:00',
      end: '2024-03-18T17:00:00',
    },
    {
      id: '2',
      employeeId: '2',
      employeeName: 'Jane Smith',
      start: '2024-03-19T10:00:00',
      end: '2024-03-19T18:00:00',
    }
  ]
};
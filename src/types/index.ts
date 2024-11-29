export interface Employee {
    id: string;
    name: string;
    role: string;
    skills: string[];
    availability: {
      [key: string]: TimeSlot[];
    };
  }
  
  export interface TimeSlot {
    start: string;
    end: string;
  }
  
  export interface Schedule {
    id: string;
    employeeId: string;
    date: string;
    shift: TimeSlot;
  }
  
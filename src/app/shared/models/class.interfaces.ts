export interface Student {
    fname: string;
    lname: string;
    grade: number;
    year: number;
    classType?: ClassType;
}

export interface ClassStudent {
    students: Student[];
    classType: ClassType;
}

export interface Class {
    classStudents: ClassStudent[];
    classTypes: ClassType[];
    classYears?: ClassYear[];
}

export type ClassType = 'Empty' | 'Biology' | 'Chemistry' | 'ComputerScience';
export type ClassYear = 'Empty' | number;

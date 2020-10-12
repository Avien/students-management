import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_CLASS_STUDENTS } from '../mocks/mock-class-students';
import { Class, ClassStudent } from '../models/class.interfaces';
import { map } from 'rxjs/operators';
import { ClassTypeEnum } from '../models/class-type.enum';

@Injectable({
    providedIn: 'root',
})
export class StudentsService {
    constructor() {}

    loadStudents(): Observable<Class> {
        const updateStudentData = (classData: Class) => {
            /**
             * Add classType for every student
             */
            const classStudents = classData.classStudents.map((it: ClassStudent) => {
                return {
                    ...it,
                    students: it.students.map((student) => ({
                        ...student,
                        classType: it.classType,
                    })),
                };
            });

            /**
             * Create a classYears unique array from all different year values of each student
             */
            const allStudents = (classData.classStudents.map((it: ClassStudent) => [
                ...it.students,
            ]) as any).flat();

            const classYears = Array.from(new Set(allStudents.map((it) => it.year)))
                .sort()
                .reverse();

            return { classStudents, classTypes: classData.classTypes, classYears };
        };

        /**
         * Add empty option for dropdowns
         * @param classStudents
         * @param classTypes - Empty option inserted on top
         * @param classYears -  Empty option inserted on top
         */
        const updateEmptyOption = ({ classStudents, classTypes, classYears }) => {
            return {
                classStudents,
                classTypes: [ClassTypeEnum.EMPTY, ...classTypes],
                classYears: [ClassTypeEnum.EMPTY, ...classYears],
            };
        };

        return of(MOCK_CLASS_STUDENTS).pipe(map(updateStudentData), map(updateEmptyOption));
    }
}

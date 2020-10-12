import { Pipe, PipeTransform } from '@angular/core';
import { ClassStudent, ClassType, ClassYear, Student } from '../models/class.interfaces';
import { ClassTypeEnum } from '../models/class-type.enum';

@Pipe({
    name: 'studentFilter',
})
export class StudentFilterPipe implements PipeTransform {
    transform(
        classStudents: ClassStudent[],
        selectedYear: ClassYear,
        selectedClass: ClassType,
    ): Student[] {
        return (classStudents
            .filter(
                (it: ClassStudent) =>
                    selectedClass === ClassTypeEnum.EMPTY || it.classType == selectedClass,
            )
            .map((it: ClassStudent) => [...it.students]) as any)
            .flat()
            .filter((it) => selectedYear === ClassTypeEnum.EMPTY || it.year == selectedYear);
    }
}

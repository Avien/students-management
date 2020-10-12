import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { makeStudentsViewModel, StudentsVideModel } from '../models/students.view-model';
import { Class } from '../models/class.interfaces';
import { StudentsService } from './students.service';

@Injectable({
    providedIn: 'root',
})
export class StudentsFacade {
    readonly students$: Observable<Class>;

    vm$: Observable<StudentsVideModel>;

    private studentsSource: BehaviorSubject<Class> = new BehaviorSubject<Class>(null);

    constructor(private studentsService: StudentsService) {
        this.students$ = this.studentsSource.asObservable();
        this.vm$ = makeStudentsViewModel([this.students$]);
    }

    loadStudents() {
        const students$ = this.studentsService.loadStudents();

        const onStudentsLoaded = (classData: Class) => {
            this.studentsSource.next(classData);
        };

        students$
            .pipe(
                take(1),
                filter((f) => !!f),
                tap(onStudentsLoaded),
            )
            .subscribe();
    }
}

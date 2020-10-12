import { Class } from './class.interfaces';
import { combineLatest, Observable } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

export interface StudentsVideModel {
    classData: Class;
}

export type StudentsStreams = [Observable<Class>];

export function makeStudentsViewModel(
    streams: StudentsStreams,
): Observable<Readonly<StudentsVideModel>> {
    const toViewModel = ([classData]): StudentsVideModel => {
        return {
            classData,
        };
    };

    return combineLatest(streams).pipe(auditTime(0), map(toViewModel));
}

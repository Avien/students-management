import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { Student } from '../../shared/models/class.interfaces';

@Component({
    selector: 'app-student-card',
    templateUrl: './student-card.component.html',
    styleUrls: ['./student-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentCardComponent implements OnInit {
    @Input() set student(value: Student) {
        this._student = value;
        this.grade = value.grade;
    }
    get student(): Student {
        return this._student;
    }
    @Input() active: boolean;

    @Output() changeGrade: EventEmitter<number> = new EventEmitter<number>();

    private _student: Student;
    grade: number;
    constructor() {}

    ngOnInit(): void {}

    changeStudentGrade(value: number) {
        this.changeGrade.emit(value);
    }
}

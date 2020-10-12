import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StudentsFacade } from '../../shared/services/students.facade.service';
import { ClassType, Student } from '../../shared/models/class.interfaces';
import { ClassTypeEnum } from '../../shared/models/class-type.enum';
import { AngularEditorConfig } from '@kolkov/angular-editor';

enum ViewMode {
    TABLE,
    GRID,
}

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsComponent implements OnInit {
    emptyValue = ClassTypeEnum.EMPTY;
    selectedClass: ClassType = ClassTypeEnum.EMPTY; //default
    selectedYear: ClassType = ClassTypeEnum.EMPTY; //default
    selectedStudent: Student;
    viewMode = ViewMode;
    pageViewMode: ViewMode = ViewMode.TABLE; //default
    htmlContent: string;
    editorConfig: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: 'auto',
        minHeight: '80px',
        maxHeight: 'auto',
        width: 'auto',
        minWidth: '0',
        translate: 'yes',
        enableToolbar: true,
        showToolbar: true,
    };
    constructor(public facade: StudentsFacade) {}

    ngOnInit(): void {
        this.facade.loadStudents();
    }

    selectStudent(student: Student) {
        this.selectedStudent = student;
    }
}

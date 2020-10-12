import { TestBed } from '@angular/core/testing';

import { StudentsFacade } from './students.facade.service';

describe('StudentFacadeService', () => {
    let service: StudentsFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StudentsFacade);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

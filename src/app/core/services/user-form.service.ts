import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserFormService {
    private submitFormSubject = new Subject();
    submitObservable = this.submitFormSubject.asObservable();

    submitUserEditForm(value: boolean) {
        this.submitFormSubject.next(value);
    }
}

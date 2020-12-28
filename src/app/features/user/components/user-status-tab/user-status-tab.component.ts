import { Component } from '@angular/core';

@Component({
    selector: 'user-status-tab',
    templateUrl: './user-status-tab.component.html',
    styleUrls: ['./user-status-tab.component.scss']
})
export class UserStatusTabComponent {
    listOfOption: string[] = [
        'Performer',
        'Musician',
        'Wizard',
        'Knight',
    ];
    listOfSelectedValue = ['Performer'];

    get role() {
        return this.listOfSelectedValue.length > 0 ? this.listOfSelectedValue[0] : 'Performer';
    }
}

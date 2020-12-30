import { Component } from '@angular/core';
import { listOfUserData } from '@core/data/tables/user-status-table';

@Component({
    selector: 'user-status-table',
    templateUrl: './user-status-table.component.html',
    styleUrls: ['./user-status-table.component.scss']
})
export class UserStatusTableComponent {
    listOfData = listOfUserData;
}

import { Component } from '@angular/core';
import { color } from '@core/models/color';

@Component({
    selector: 'user-edit-page',
    templateUrl: './user-edit-page.component.html',
    styleUrls: ['./user-edit-page.component.scss'],
})
export class UserEditPageComponent {
    color = color;
}

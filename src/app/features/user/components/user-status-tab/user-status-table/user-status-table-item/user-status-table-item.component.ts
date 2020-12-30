import { Component, Input } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { TableItemAction } from '@core/data/tables/user-status-table';
import { color } from '@core/models/color';

@Component({
    selector: 'user-status-table-item',
    template:
        '<button [class]="colors.create">create</button>' +
        '<button [class]="colors.read">read</button>' +
        '<button [class]="colors.update">update</button>' +
        '<button [class]="colors.delete">delete</button>',
    styleUrls: ['./user-status-table-item.component.scss']
})
export class UserStatusTableItemComponent {
    @Input() colors: TableItemAction = {
        create: color.yellow,
        read: color.red,
        update: color.green,
        delete: color.white,
    };

    formArray = new FormArray([]);

    create() {
        this.formArray.push(new FormControl([true]));
    }

}

import { Component, Input } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { TableItemAction } from '@core/data/tables/user-status-table';
import { color } from '@core/models/color';

@Component({
    selector: 'user-status-table-item',
    template:
        '<button (click)="create()" [class]="colors.create">create</button>' +
        '<button (click)="read()" [class]="colors.read">read</button>' +
        '<button (click)="update()" [class]="colors.update">update</button>' +
        '<button (click)="delete()" [class]="colors.delete">delete</button>',
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
        this.formArray.push(new FormControl(true));
    }

    read() {
        console.log(this.formArray.value);
    }

    update() {
        if (this.formArray.length > 0) {
            for (let control of this.formArray.controls) {
                if (control instanceof FormControl) {
                    control.setValue(!this.formArray.at(0).value);
                }
            }
        }
    }

    delete() {
        this.formArray = new FormArray([]);
    }
}

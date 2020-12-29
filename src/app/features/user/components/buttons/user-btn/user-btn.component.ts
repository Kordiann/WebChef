import { Component, Input } from '@angular/core';
import { buttonType } from '@core/models/button-type';
import { color } from '@core/models/color';
import { UserFormService } from '@core/services/user-form.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'user-btn',
  template: '<button [class]="color" (click)="handleClick()"><ng-content></ng-content></button>',
  styleUrls: ['./user-btn.component.scss'],
  providers: [NzModalService],
})
export class UserBtnComponent {
  @Input() color: color = color.red;
  @Input() buttonType: buttonType = buttonType.default;

  constructor(
      private userFormService: UserFormService,
      private modalService: NzModalService,
  ) {
  }

  handleClick() {
    switch (this.buttonType) {
      case buttonType.submit: {
        this.userFormService.submitUserEditForm(true);
        break;
      }
      case buttonType.dialog: {
        this.modalService.confirm({
          nzTitle: 'Are you sure to block?'
        });
        break;
      }
    }
  }
}

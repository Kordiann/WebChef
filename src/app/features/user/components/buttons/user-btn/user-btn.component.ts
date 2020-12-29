import { Component, Input } from '@angular/core';
import { buttonType } from '@core/models/button-type';
import { color } from '@core/models/color';
import { UserFormService } from '@core/services/user-form.service';

@Component({
  selector: 'user-btn',
  template: '<button [class]="color" (click)="handleClick()"><ng-content></ng-content></button>',
  styleUrls: ['./user-btn.component.scss']
})
export class UserBtnComponent {
  @Input() color: color = color.red;
  @Input() buttonType: buttonType = buttonType.default;

  constructor(
      private userFormService: UserFormService,
  ) {
  }

  handleClick() {
    if (this.buttonType === buttonType.submit) this.userFormService.submitUserEditForm(true);
  }
}

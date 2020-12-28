import { Component, Input } from '@angular/core';
import { color } from '@core/models/color';

@Component({
  selector: 'user-btn',
  template: '<button [class]="color"><ng-content></ng-content></button>',
  styleUrls: ['./user-btn.component.scss']
})
export class UserBtnComponent {
  @Input() color: color = color.red;
}

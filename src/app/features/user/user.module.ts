import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../common/shared/shared.module';
import { UserEditPageComponent } from '../../pages/user-edit-page/user-edit-page.component';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileBarComponent } from './components/user-profile-bar/user-profile-bar.component';
import { UserNotificationBarComponent } from './components/user-notification-bar/user-notification-bar.component';
import { UserBtnComponent } from './components/buttons/user-btn/user-btn.component';
import { UserStatusTabComponent } from './components/user-status-tab/user-status-tab.component';
import { UserStatusTableComponent } from './components/user-status-table/user-status-table.component';

const components = [
    UserEditPageComponent,
    UserProfileBarComponent,
    UserNotificationBarComponent,
    UserStatusTabComponent,
    UserStatusTableComponent,
];

const buttons = [
    UserBtnComponent,
]

@NgModule({
    declarations: [
        ...components,
        ...buttons,
    ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        UserRoutingModule,
    ],
    exports: [
        UserProfileBarComponent,
        UserNotificationBarComponent
    ]
})
export class UserModule {
}

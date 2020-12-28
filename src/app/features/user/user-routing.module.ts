import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditPageComponent } from '../../pages/user-edit-page/user-edit-page.component';

const routes: Routes = [
    { path: 'edit', component: UserEditPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class UserRoutingModule {
}

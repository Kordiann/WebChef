import { NgModule } from '@angular/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzUploadModule } from 'ng-zorro-antd/upload';

const nzModules = [
    NzBadgeModule,
    NzBreadCrumbModule,
    NzDatePickerModule,
    NzIconModule,
    NzTableModule,
    NzTabsModule,
    NzUploadModule,
    NzFormModule,
    NzSelectModule,
];

@NgModule({
    declarations: [],
    imports: [
        ...nzModules,
    ],
    exports: [
        ...nzModules,
    ],
})
export class NzUtilsModule {
}

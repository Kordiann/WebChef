import { NgModule } from '@angular/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

const nzModules = [
    NzBadgeModule,
    NzSelectModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzIconModule,
    NzTabsModule,
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

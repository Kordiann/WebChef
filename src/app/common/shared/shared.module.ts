import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzUtilsModule } from '../nz-utils/nz-utils.module';

@NgModule({
	declarations: [],
	imports: [
		AngularSvgIconModule.forRoot(),
		CommonModule,
		ReactiveFormsModule,
		NzUtilsModule,
	],
	exports: [
		AngularSvgIconModule,
		ReactiveFormsModule,
		NzUtilsModule,
	],
})
export class SharedModule {}

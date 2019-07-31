import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "app/layout/layout.module";

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		RouterModule.forChild([ { path: "", component: CalendarComponent } ])
	],
	declarations: [ CalendarComponent ]
})
export class CalendarModule {}

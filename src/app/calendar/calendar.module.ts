import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "app/layout/layout.module";
import { MyCalendarComponent } from "./my-calendar/my-calendar.component";
import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		RouterModule.forChild([
			{
				path: "",
				component: CalendarComponent,
				children: [ { path: "my", component: MyCalendarComponent } ]
			}
		])
	],
	declarations: [ CalendarComponent, MyCalendarComponent ],
	schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class CalendarModule {}

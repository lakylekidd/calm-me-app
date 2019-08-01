import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "app/layout/layout.module";
import { MyCalendarComponent } from "./my-calendar/my-calendar.component";

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
	declarations: [ CalendarComponent, MyCalendarComponent ]
})
export class CalendarModule {}

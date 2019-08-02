import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar.component";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "app/layout/layout.module";
import { MyCalendarComponent } from "./my-calendar/my-calendar.component";
import { EventCalendarModule } from "app/event-calendar/event-calendar.module";

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		EventCalendarModule,
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

import {
	NgModule,
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventCalendarComponent } from "./event-calendar/event-calendar.component";
import { CalHeaderComponent } from "./cal-header/cal-header.component";
import { CalDaysComponent } from "./cal-days/cal-days.component";
import { CalDayItemComponent } from "./cal-day-item/cal-day-item.component";
import { CAL_CONFIG } from "./models";

@NgModule({
	declarations: [
		EventCalendarComponent,
		CalHeaderComponent,
		CalDaysComponent,
		CalDayItemComponent
	],
	exports: [
		EventCalendarComponent,
		CalHeaderComponent,
		CalDaysComponent,
		CalDayItemComponent
	],
	imports: [ CommonModule ],
	providers: [ { provide: "IConfig", useExisting: CAL_CONFIG } ]
	//schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class EventCalendarModule {}

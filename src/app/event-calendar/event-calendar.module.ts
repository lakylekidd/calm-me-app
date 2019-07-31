import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { CalHeaderComponent } from './cal-header/cal-header.component';
import { CalDaysComponent } from './cal-days/cal-days.component';
import { CalDayItemComponent } from './cal-day-item/cal-day-item.component';

@NgModule({
	declarations: [EventCalendarComponent, CalHeaderComponent, CalDaysComponent, CalDayItemComponent],
	imports: [ CommonModule ]
})
export class EventCalendarModule {}

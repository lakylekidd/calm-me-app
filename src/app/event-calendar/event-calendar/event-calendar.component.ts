import { Component, OnInit, Inject } from "@angular/core";
import { IConfig } from "../models";

@Component({
	selector: "event-cal",
	templateUrl: "./event-calendar.component.html",
	styleUrls: [ "./event-calendar.component.scss" ]
})
export class EventCalendarComponent implements OnInit {
	//constructor(@Inject("IConfig") private readonly config: IConfig) {}

	ngOnInit() {}

	generateDays = (month: number, year: number) => {
		// Find what day is the first day of the month
	};

	private generateDateForMonth = (month: number, year: number): Date => {
		return new Date(`${year}${month}01`);
	};
}

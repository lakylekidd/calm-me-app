import { Component, OnInit, Inject } from "@angular/core";
import { IConfig, DayOfWeek, IDayOfMonth } from "../models";

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
		// as well as the day of the end of the month
		const firstDayOfMonth = this.getFirstDayOfMonth(month, year);
		const lastDayOfMonth = this.getLastDayOfMonth(month, year);
		// Generate all days previous to first day of month
		// as well as these after the end of the month
		const previousDays = this.getDaysBefore(firstDayOfMonth.date);
	};

	private getDaysBefore = (date: Date): IDayOfMonth[] => {
		// Declare array to hold days of month
		const daysBefore: IDayOfMonth[] = [];
		// Loop through days before if they exist
		for (let i = date.getDay(); i >= 1; i--) {
			// Retrieve the day starting from
			// the first day in the calendar row
			const dateBefore = new Date(date);
			dateBefore.setDate(date.getDate() - i);
			// Push the result to the array
			daysBefore.push({ date: dateBefore, day: dateBefore.getDay() });
		}
		// Return the array
		return daysBefore;
	};

	private getDaysAfter = (date: Date): IDayOfMonth[] => {
		// Declare array to hold days of month
		const daysBefore: IDayOfMonth[] = [];
		// Loop through days before if they exist
		for (let i = date.getDay(); i >= 1; i--) {
			// Retrieve the day starting from
			// the first day in the calendar row
			const dateBefore = new Date(date);
			dateBefore.setDate(date.getDate() + i);
			// Push the result to the array
			daysBefore.push({ date: dateBefore, day: dateBefore.getDay() });
		}
		// Return the array
		return daysBefore;
	};

	private getFirstDayOfMonth = (month: number, year: number): IDayOfMonth => {
		// Get the date
		const date = new Date(year, month - 1, 1);
		// Get the day
		const day = date.getDay(); // Sunday: 0
		// Return the object
		return { date, day };
	};

	private getLastDayOfMonth = (month: number, year: number): IDayOfMonth => {
		// Get the date
		const date = new Date(year, month, 0);
		// Get the day
		const day = date.getDay(); // Sunday: 0
		// Return the object
		return { date, day };
	};

	private generateDateForMonth = (month: number, year: number): Date => {
		return new Date(year, month, 1);
	};

	private getDaysInMonth = (month: number, year: number): number => {
		// Here January is 1 based
		// Day 0 is the last day in the previous month
		return new Date(year, month, 0).getDate();
		// Here January is 0 based
		// return new Date(year, month+1, 0).getDate();
	};
}

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { EventCalendarComponent } from "./event-calendar.component";
import { CalHeaderComponent } from "../cal-header/cal-header.component";
import { CalDaysComponent } from "../cal-days/cal-days.component";
import { IDayOfMonth, DayOfWeek } from "../models";

describe("EventCalendarComponent", () => {
	let component: EventCalendarComponent;
	let fixture: ComponentFixture<EventCalendarComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					EventCalendarComponent,
					CalHeaderComponent,
					CalDaysComponent
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(EventCalendarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	describe("Generate date for provided month and year function", () => {
		it("should generate a valid date based on provided month and year", () => {
			// Retrieve a date
			const date = (component as any).generateDateForMonth(2, 2019);
			expect(date).toEqual(jasmine.any(Date));
		});

		it("should generate a correct month of the year", () => {
			// Retrieve a date
			const date = (component as any).generateDateForMonth(
				2,
				2019
			) as Date;
			expect(date.getFullYear()).toBe(2019);
			expect(date.getMonth()).toBe(2);
		});
	});

	describe("Get days in a month function", () => {
		it("should return 28 days for Feb 2019", () => {
			// Retrieve a date
			const days = (component as any).getDaysInMonth(2, 2019) as number;
			expect(days).toBe(28);
		});
		it("should return 31 days for May 2009", () => {
			// Retrieve a date
			const days = (component as any).getDaysInMonth(5, 2009) as number;
			expect(days).toBe(31);
		});
	});

	describe("Get first day of month function", () => {
		it("should conform to object type", () => {
			// Retrieve a date
			const dayOfMonth = (component as any).getFirstDayOfMonth(
				2,
				2019
			) as IDayOfMonth;
			expect(typeof dayOfMonth).toEqual("object");
		});
		it("should return 1/2/2019 and FRI", () => {
			// Retrieve a date
			const dayOfMonth = (component as any).getFirstDayOfMonth(
				2,
				2019
			) as IDayOfMonth;
			expect(dayOfMonth.date).toEqual(new Date(2019, 1, 1));
			expect(dayOfMonth.day).toEqual(DayOfWeek.FRI);
		});
	});

	describe("Get last day of month function", () => {
		it("should conform to object type", () => {
			// Retrieve a date
			const dayOfMonth = (component as any).getLastDayOfMonth(
				2,
				2019
			) as IDayOfMonth;
			expect(typeof dayOfMonth).toEqual("object");
		});
		it("should return 28/2/2019 and THU", () => {
			// Retrieve a date
			const dayOfMonth = (component as any).getLastDayOfMonth(
				2,
				2019
			) as IDayOfMonth;
			expect(dayOfMonth.date).toEqual(new Date(2019, 1, 28));
			expect(dayOfMonth.day).toEqual(DayOfWeek.THU);
		});
	});

	describe("Get days before function", () => {
		it("should conform to object type", () => {
			// Retrieve a date
			const daysBefore = (component as any).getDaysBefore(
				new Date(2019, 1, 1)
			) as IDayOfMonth[];
			expect(typeof daysBefore).toEqual("object");
			// Loop through days
			daysBefore.map((day) => {
				expect(typeof day.day).toEqual("number");
				expect(typeof day.date).toEqual("object");
			});
		});
		it("should return 5 correct ordered dates with days of week", () => {
			// Retrieve a date
			const daysBefore = (component as any).getDaysBefore(
				new Date(2019, 1, 1)
			) as IDayOfMonth[];
			expect(daysBefore.length).toEqual(5);
			// Check if days of week are correct
			expect(daysBefore[0].day).toEqual(DayOfWeek.SUN);
			expect(daysBefore[1].day).toEqual(DayOfWeek.MON);
			expect(daysBefore[2].day).toEqual(DayOfWeek.TUE);
			expect(daysBefore[3].day).toEqual(DayOfWeek.WED);
			expect(daysBefore[4].day).toEqual(DayOfWeek.THU);
			// Check if dates are correct and in order
			expect(daysBefore[0].date).toEqual(new Date(2019, 0, 27));
			expect(daysBefore[1].date).toEqual(new Date(2019, 0, 28));
			expect(daysBefore[2].date).toEqual(new Date(2019, 0, 29));
			expect(daysBefore[3].date).toEqual(new Date(2019, 0, 30));
			expect(daysBefore[4].date).toEqual(new Date(2019, 0, 31));
		});
	});

	describe("Get days after function", () => {
		it("should conform to object type", () => {
			// Retrieve a date
			const daysBefore = (component as any).getDaysAfter(
				new Date(2019, 1, 1)
			) as IDayOfMonth[];
			expect(typeof daysBefore).toEqual("object");
			// Loop through days
			daysBefore.map((day) => {
				expect(typeof day.day).toEqual("number");
				expect(typeof day.date).toEqual("object");
			});
		});
		it("should return 9 correct ordered dates with days of week", () => {
			// Retrieve a date
			const daysAfter = (component as any).getDaysAfter(
				new Date(2019, 1, 1)
			) as IDayOfMonth[];
			expect(daysAfter.length).toEqual(5);
			// Check if days of week are correct
			expect(daysAfter[0].day).toEqual(DayOfWeek.FRI);
			expect(daysAfter[1].day).toEqual(DayOfWeek.SAT);
			expect(daysAfter[2].day).toEqual(DayOfWeek.SUN);
			expect(daysAfter[3].day).toEqual(DayOfWeek.MON);
			expect(daysAfter[4].day).toEqual(DayOfWeek.TUE);
			expect(daysAfter[5].day).toEqual(DayOfWeek.WED);
			expect(daysAfter[6].day).toEqual(DayOfWeek.THU);
			expect(daysAfter[7].day).toEqual(DayOfWeek.FRI);
			expect(daysAfter[8].day).toEqual(DayOfWeek.SAT);
			// Check if dates are correct and in order
			expect(daysAfter[0].date).toEqual(new Date(2019, 2, 1));
			expect(daysAfter[1].date).toEqual(new Date(2019, 2, 2));
			expect(daysAfter[2].date).toEqual(new Date(2019, 2, 3));
			expect(daysAfter[3].date).toEqual(new Date(2019, 2, 4));
			expect(daysAfter[4].date).toEqual(new Date(2019, 2, 5));
			expect(daysAfter[5].date).toEqual(new Date(2019, 2, 6));
			expect(daysAfter[6].date).toEqual(new Date(2019, 2, 7));
			expect(daysAfter[7].date).toEqual(new Date(2019, 2, 8));
			expect(daysAfter[8].date).toEqual(new Date(2019, 2, 9));
		});
	});
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { EventCalendarComponent } from "./event-calendar.component";
import { CalHeaderComponent } from "../cal-header/cal-header.component";
import { CalDaysComponent } from "../cal-days/cal-days.component";

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

	// it("should return a valid date based on provided month and year", () => {
	// 	// Retrieve a date
	// 	const date = (component as any).generateDateForMonth(2, 2019);
	// 	expect(date).toEqual(jasmine.any(Date));
	// });
});

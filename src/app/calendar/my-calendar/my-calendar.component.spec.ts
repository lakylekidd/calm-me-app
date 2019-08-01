/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MyCalendarComponent } from "./my-calendar.component";
import { EventCalendarModule } from "app/event-calendar/event-calendar.module";

describe("MyCalendarComponent", () => {
	let component: MyCalendarComponent;
	let fixture: ComponentFixture<MyCalendarComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ MyCalendarComponent ],
				imports: [ EventCalendarModule ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(MyCalendarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

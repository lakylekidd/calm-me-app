/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CalendarComponent } from "./calendar.component";
import { HeaderComponent } from "app/layout/header/header.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("CalendarComponent", () => {
	let component: CalendarComponent;
	let fixture: ComponentFixture<CalendarComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ CalendarComponent, HeaderComponent ],
				imports: [ RouterTestingModule ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CalendarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

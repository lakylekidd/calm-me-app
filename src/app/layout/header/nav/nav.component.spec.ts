/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { NavComponent } from "./nav.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "app/services/auth.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("NavComponent", () => {
	let component: NavComponent;
	let fixture: ComponentFixture<NavComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ NavComponent ],
				imports: [ RouterTestingModule, HttpClientTestingModule ],
				providers: [ AuthService ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

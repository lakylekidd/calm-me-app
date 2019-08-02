/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { AuthComponent } from "./auth.component";
import { LogoComponent } from "app/layout/header/logo/logo.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("AuthComponent", () => {
	let component: AuthComponent;
	let fixture: ComponentFixture<AuthComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ AuthComponent, LogoComponent ],
				imports: [ RouterTestingModule ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AuthComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

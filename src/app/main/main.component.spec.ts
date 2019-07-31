/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MainComponent } from "./main.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HeaderComponent } from "app/layout/header/header.component";
import { LogoComponent } from "app/layout/header/logo/logo.component";
import { LayoutModule } from "app/layout/layout.module";

describe("MainComponent", () => {
	let component: MainComponent;
	let fixture: ComponentFixture<MainComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ MainComponent, LogoComponent, HeaderComponent ],
				imports: [ RouterTestingModule, LayoutModule ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(MainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

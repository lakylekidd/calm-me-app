/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { LogoutComponent } from "./logout.component";
import { AuthService } from "app/services/auth.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("LogoutComponent", () => {
	let component: LogoutComponent;
	let fixture: ComponentFixture<LogoutComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ LogoutComponent ],
				imports: [ HttpClientTestingModule ],
				providers: [ AuthService ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(LogoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

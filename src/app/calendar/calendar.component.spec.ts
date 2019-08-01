/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";

import { CalendarComponent } from "./calendar.component";
import { HeaderComponent } from "app/layout/header/header.component";
import { RouterTestingModule } from "@angular/router/testing";
import { LogoComponent } from "app/layout/header/logo/logo.component";
import { NavComponent } from "app/layout/header/nav/nav.component";
import { LayoutModule } from "app/layout/layout.module";
import { AuthService } from "app/services/auth.service";
import { createMagicalMock, provideMagicalMock } from "app/mocks/magical-mocks";
import { BehaviorSubject } from "rxjs";
import { JwtPayload } from "app/auth/helpers/jwt";

describe("CalendarComponent", () => {
	let component: CalendarComponent;
	let fixture: ComponentFixture<CalendarComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ CalendarComponent ],
				imports: [ RouterTestingModule, LayoutModule ],
				providers: [ provideMagicalMock(AuthService) ],
				schemas: [ NO_ERRORS_SCHEMA ]
			}).compileComponents();
		})
	);

	let authServiceMock: jasmine.SpyObj<AuthService>;

	beforeEach(() => {
		authServiceMock = TestBed.get(AuthService);

		// Create a fake user
		const currUser = new BehaviorSubject<JwtPayload>({
			first_name: "John",
			last_name: "Doe",
			email: "john@doe.com",
			id: 1
		}).asObservable();
		(authServiceMock as any).currentUser = currUser;

		fixture = TestBed.createComponent(CalendarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

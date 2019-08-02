/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MainComponent } from "./main.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HeaderComponent } from "app/layout/header/header.component";
import { LogoComponent } from "app/layout/header/logo/logo.component";
import { LayoutModule } from "app/layout/layout.module";
import { NavComponent } from "app/layout/header/nav/nav.component";
import { HeaderModule } from "app/layout/header/header.module";
import { provideMagicalMock } from "app/mocks/magical-mocks";
import { AuthService } from "app/services/auth.service";
import { BehaviorSubject } from "rxjs";
import { JwtPayload } from "app/auth/helpers/jwt";

describe("MainComponent", () => {
	let component: MainComponent;
	let fixture: ComponentFixture<MainComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ MainComponent ],
				imports: [ RouterTestingModule, LayoutModule, HeaderModule ],
				providers: [ provideMagicalMock(AuthService) ]
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

		fixture = TestBed.createComponent(MainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

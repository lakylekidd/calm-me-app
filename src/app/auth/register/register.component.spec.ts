/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RegisterComponent } from "./register.component";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "app/services/auth.service";
import { FormsModule } from "@angular/forms";
import { provideMagicalMock } from "app/mocks/magical-mocks";

describe("RegisterComponent", () => {
	let component: RegisterComponent;
	let fixture: ComponentFixture<RegisterComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ RegisterComponent ],
				imports: [ RouterTestingModule, FormsModule ],
				providers: [ provideMagicalMock(AuthService) ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(RegisterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

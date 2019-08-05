/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { TipsComponent } from "./tips.component";
import { TipsService } from "./services/tips.service";
import { TipItemComponent } from "./tip-item/tip-item.component";

describe("TipsComponent", () => {
	let component: TipsComponent;
	let fixture: ComponentFixture<TipsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ TipsComponent, TipItemComponent ],
				providers: [ TipsService ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(TipsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

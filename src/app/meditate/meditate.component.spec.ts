/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MeditateComponent } from "./meditate.component";
import { ArticleService } from "app/services/article.service";
import { ArticleModule } from "app/article/article.module";
import { provideMagicalMock, createMagicalMock } from "app/mocks/magical-mocks";
import { RouterTestingModule } from "@angular/router/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("MeditateComponent", () => {
	let component: MeditateComponent;
	let fixture: ComponentFixture<MeditateComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ MeditateComponent ],
				imports: [ ArticleModule, RouterTestingModule ],
				schemas: [ NO_ERRORS_SCHEMA ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(MeditateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

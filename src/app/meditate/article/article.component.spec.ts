import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { fakeAsync } from "@angular/core/testing";

import { ArticleComponent } from "./article.component";
import { ArticleService } from "app/services/article.service";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { ActivatedRouteStub } from "app/mocks/activated-route.mock";
import { Observable } from "rxjs/Rx";
import { provideMagicalMock } from "app/mocks/magical-mocks";

describe("ArticleComponent", () => {
	let component: ArticleComponent;
	let fixture: ComponentFixture<ArticleComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ ArticleComponent ],
				providers: [
					ArticleService,
					{ provide: ActivatedRoute, useClass: ActivatedRouteStub }
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		let activatedRoute = TestBed.get(ActivatedRoute) as any;
		activatedRoute.testQueryParamMap = { id: 1 };

		fixture = TestBed.createComponent(ArticleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		fakeAsync(() => {
			expect(component).toBeTruthy();
		});
	});
});

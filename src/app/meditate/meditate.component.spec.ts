/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MeditateComponent } from "./meditate.component";
import { ArticleService } from "app/services/article.service";
import { ArticlePaginateComponent } from "app/article/article-paginate/article-paginate.component";
import { FeatureArticleComponent } from "app/article/article-paginate/feature-article.component";

describe("MeditateComponent", () => {
	let component: MeditateComponent;
	let fixture: ComponentFixture<MeditateComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					MeditateComponent,
					ArticlePaginateComponent,
					FeatureArticleComponent
				],
				providers: [ ArticleService ]
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

import { Component, Input } from "@angular/core";
import { IArticle } from "app/models/article.model";

@Component({
	selector: "app-feature-article",
	templateUrl: "./feature-article.component.html",
	styleUrls: [ "./feature-article.component.scss" ]
})
export class FeatureArticleComponent {
	@Input() article: IArticle;
	constructor() {}
}
